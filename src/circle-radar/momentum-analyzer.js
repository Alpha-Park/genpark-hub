export class CircleMomentumAnalyzer {
  /**
   * Calculate momentum metrics for products and topics mentioned across Circle posts
   * @param {Array} posts - [{ id, author, text, products: [], likes, comments, timestamp }]
   */
  analyzeTrends(posts = [], timeWindowHours = 24) {
    const productStats = {};
    const now = Date.now();
    const windowMs = timeWindowHours * 3600 * 1000;

    for (const post of posts) {
      const postTime = new Date(post.timestamp).getTime();
      const ageHours = Math.max(0.1, (now - postTime) / (3600 * 1000));
      const isRecent = (now - postTime) <= windowMs;

      const engagement = (post.likes || 0) * 1.5 + (post.comments || 0) * 3.0 + 1.0;

      for (const prod of (post.products || [])) {
        if (!productStats[prod]) {
          productStats[prod] = {
            product: prod,
            totalMentions: 0,
            recentMentions: 0,
            totalEngagement: 0,
            recentEngagement: 0,
            samplePosts: []
          };
        }

        productStats[prod].totalMentions += 1;
        productStats[prod].totalEngagement += engagement;

        if (isRecent) {
          productStats[prod].recentMentions += 1;
          productStats[prod].recentEngagement += engagement;
        }

        if (productStats[prod].samplePosts.length < 3) {
          productStats[prod].samplePosts.push({
            id: post.id,
            author: post.author,
            text: post.text
          });
        }
      }
    }

    const trends = Object.values(productStats).map(stat => {
      // Velocity = recent engagement / timeWindowHours
      const velocity = +(stat.recentEngagement / timeWindowHours).toFixed(2);
      // Momentum score combines mention frequency and velocity
      const momentumScore = +((stat.recentMentions * 10) + velocity).toFixed(2);

      let status = 'STEADY';
      if (momentumScore > 50) status = 'VIRAL';
      else if (momentumScore > 20) status = 'RISING';

      return {
        product: stat.product,
        totalMentions: stat.totalMentions,
        recentMentions: stat.recentMentions,
        velocity,
        momentumScore,
        status,
        samplePosts: stat.samplePosts
      };
    });

    // Sort by momentum score descending
    trends.sort((a, b) => b.momentumScore - a.momentumScore);

    return trends;
  }
}
