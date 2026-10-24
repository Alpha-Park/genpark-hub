import { ReviewForensics } from './review-forensics.js';
import { FlawExtractor } from './flaw-extractor.js';

export class ProductTruthGuard {
  constructor() {
    this.forensics = new ReviewForensics();
    this.extractor = new FlawExtractor();
  }

  auditProductReviews(productId, reviews = []) {
    const analyzed = reviews.map(r => this.forensics.analyzeReview(r));
    const summary = this.extractor.extractFlawsAndSummary(analyzed);

    // Compute Overall Trust Grade: A, B, C, D, F
    let trustGrade = 'A';
    if (summary.syntheticSpamRatioPercent > 40) trustGrade = 'F';
    else if (summary.syntheticSpamRatioPercent > 25) trustGrade = 'D';
    else if (summary.syntheticSpamRatioPercent > 15) trustGrade = 'C';
    else if (summary.syntheticSpamRatioPercent > 5) trustGrade = 'B';

    return {
      productId,
      trustGrade,
      auditedAt: new Date().toISOString(),
      summary,
      detailedReviews: analyzed,
      recommendation: trustGrade === 'A' || trustGrade === 'B'
        ? 'Verified reliable product profile. Authentic shopper consensus is solid.'
        : 'Caution: Significant synthetic activity or unaddressed product flaws detected.'
    };
  }
}
