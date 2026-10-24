import { CircleMomentumAnalyzer } from './momentum-analyzer.js';
import { InsightSynthesizer } from './insight-synthesizer.js';

export class CircleTrendRadar {
  constructor() {
    this.analyzer = new CircleMomentumAnalyzer();
    this.synthesizer = new InsightSynthesizer();
  }

  detectAndSynthesize(posts = [], timeWindowHours = 24) {
    const trends = this.analyzer.analyzeTrends(posts, timeWindowHours);
    const topRising = trends.filter(t => t.status === 'VIRAL' || t.status === 'RISING');

    const synthesizedInsights = topRising.map(t => this.synthesizer.synthesizeArticle(t));

    return {
      timeWindowHours,
      totalDiscussionsAnalyzed: posts.length,
      detectedTrends: trends,
      topRisingCount: topRising.length,
      synthesizedInsights
    };
  }
}
