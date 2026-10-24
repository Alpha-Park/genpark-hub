export class FlawExtractor {
  extractFlawsAndSummary(analyzedReviews) {
    const total = analyzedReviews.length;
    if (total === 0) {
      return {
        flawFrequencies: {},
        topFlaws: [],
        adjustedAuthenticRating: 0,
        syntheticSpamRatio: 0
      };
    }

    const flawCounts = {};
    let authenticReviewSum = 0;
    let authenticReviewCount = 0;
    let suspiciousCount = 0;

    for (const r of analyzedReviews) {
      if (r.isSuspicious) {
        suspiciousCount++;
      } else {
        authenticReviewSum += r.rating;
        authenticReviewCount++;
      }

      for (const flaw of r.detectedFlaws) {
        flawCounts[flaw] = (flawCounts[flaw] || 0) + 1;
      }
    }

    const topFlaws = Object.entries(flawCounts)
      .map(([category, count]) => ({
        category,
        count,
        prevalencePercent: +((count / total) * 100).toFixed(1)
      }))
      .sort((a, b) => b.count - a.count);

    const syntheticSpamRatio = +((suspiciousCount / total) * 100).toFixed(1);
    const adjustedAuthenticRating = authenticReviewCount > 0
      ? +(authenticReviewSum / authenticReviewCount).toFixed(2)
      : 0;

    return {
      totalReviews: total,
      suspiciousReviewsCount: suspiciousCount,
      syntheticSpamRatioPercent: syntheticSpamRatio,
      authenticReviewsCount: authenticReviewCount,
      adjustedAuthenticRating,
      topFlaws
    };
  }
}
