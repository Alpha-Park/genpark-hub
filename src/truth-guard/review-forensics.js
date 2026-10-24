export class ReviewForensics {
  constructor() {
    this.aiClichéPatterns = [
      /\b(game[-\s]?changer)\b/i,
      /\b(delve into|revolutionized my daily routine)\b/i,
      /\b(exceeded all my expectations)\b/i,
      /\b(testament to quality|seamlessly integrates)\b/i,
      /\b(must-have addition to any)\b/i,
      /\b(in conclusion|overall I highly recommend this product to anyone)\b/i
    ];

    this.complaintPatterns = [
      { category: 'Durability', regex: /\b(broke|crack|stopped working|flimsy|shattered|died after|poor build|defect)\b/i },
      { category: 'Sizing & Ergonomics', regex: /\b(too small|too large|uncomfortable|hurts|tight|loose|awkward fit)\b/i },
      { category: 'Battery & Electronics', regex: /\b(battery drain|overheating|disconnects|short circuit|laggy|firmware bug)\b/i },
      { category: 'Customer Service & Shipping', regex: /\b(arrived damaged|missing parts|refused refund|slow shipping|no response)\b/i },
      { category: 'Misleading Description', regex: /\b(not as pictured|misleading|color doesn't match|cheaper material than advertised|fake)\b/i }
    ];
  }

  /**
   * Analyze a single review
   * @param {Object} review - { id, rating, text, verifiedPurchase, authorAccountAgeDays }
   */
  analyzeReview(review) {
    const text = review.text || '';
    const words = text.toLowerCase().match(/\b[a-z0-9']+\b/g) || [];
    
    // 1. Lexical diversity (Type-Token Ratio)
    const uniqueWords = new Set(words);
    const ttr = words.length > 0 ? uniqueWords.size / words.length : 0;

    // 2. Cliché / Bot footprint
    let clichéHits = 0;
    for (const pattern of this.aiClichéPatterns) {
      if (pattern.test(text)) clichéHits++;
    }

    // 3. Sentiment & Rating divergence
    const detectedFlaws = [];
    for (const { category, regex } of this.complaintPatterns) {
      if (regex.test(text)) {
        detectedFlaws.push(category);
      }
    }

    // Incongruence: 5 stars but mentions multiple severe product complaints
    const ratingIncongruence = (review.rating >= 5 && detectedFlaws.length >= 2);

    // Compute synthetic risk score (0.0: genuine, 1.0: suspicious)
    let botRiskScore = 0.0;
    if (clichéHits >= 2) botRiskScore += 0.35;
    if (ttr < 0.45 && words.length > 30) botRiskScore += 0.25;
    if (!review.verifiedPurchase) botRiskScore += 0.20;
    if (review.authorAccountAgeDays && review.authorAccountAgeDays < 14) botRiskScore += 0.20;
    if (ratingIncongruence) botRiskScore += 0.30;

    botRiskScore = Math.min(1.0, +botRiskScore.toFixed(2));

    return {
      reviewId: review.id,
      rating: review.rating,
      wordCount: words.length,
      lexicalDiversity: +ttr.toFixed(2),
      clichéHits,
      detectedFlaws,
      ratingIncongruence,
      botRiskScore,
      isSuspicious: botRiskScore >= 0.50,
      verifiedPurchase: Boolean(review.verifiedPurchase)
    };
  }
}
