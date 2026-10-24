import crypto from 'crypto';

export class BudgetPolicy {
  constructor(options = {}) {
    this.maxPerOrder = options.maxPerOrder ?? 150.00; // in USD
    this.dailyAllowance = options.dailyAllowance ?? 500.00;
    this.minMerchantTrustScore = options.minMerchantTrustScore ?? 0.75;
    this.blockedMerchants = new Set(options.blockedMerchants || ['scam-shop.com', 'unverified-drop-shipper.net']);
    this.restrictedCategories = new Set(options.restrictedCategories || ['crypto', 'gift_cards', 'gambling']);
    this.dailySpend = 0.0;
    this.lastResetDate = new Date().toDateString();
  }

  _checkDailyReset() {
    const today = new Date().toDateString();
    if (today !== this.lastResetDate) {
      this.dailySpend = 0.0;
      this.lastResetDate = today;
    }
  }

  /**
   * Evaluate whether a purchase request complies with agent budget policies
   * @param {Object} order - { id, merchant, amount, category, merchantTrustScore }
   * @returns {Object} { allowed: boolean, requiresHumanApproval: boolean, reasons: string[] }
   */
  evaluateOrder(order) {
    this._checkDailyReset();

    const reasons = [];
    let requiresHumanApproval = false;
    let allowed = true;

    // 1. Merchant blocklist
    if (this.blockedMerchants.has(order.merchant)) {
      return {
        allowed: false,
        requiresHumanApproval: false,
        reasons: [`Merchant '${order.merchant}' is on the security blocklist.`]
      };
    }

    // 2. Restricted categories
    if (this.restrictedCategories.has(order.category)) {
      allowed = false;
      return {
        allowed: false,
        requiresHumanApproval: false,
        reasons: [`Category '${order.category}' is strictly prohibited for automated agent checkout.`]
      };
    }

    // 3. Merchant trust score
    const trustScore = order.merchantTrustScore ?? 1.0;
    if (trustScore < this.minMerchantTrustScore) {
      requiresHumanApproval = true;
      reasons.push(`Merchant trust score (${trustScore.toFixed(2)}) is below safety threshold (${this.minMerchantTrustScore}).`);
    }

    // 4. Per-order limit
    if (order.amount > this.maxPerOrder) {
      requiresHumanApproval = true;
      reasons.push(`Order amount ($${order.amount.toFixed(2)}) exceeds single-order threshold ($${this.maxPerOrder.toFixed(2)}).`);
    }

    // 5. Daily limit
    if (this.dailySpend + order.amount > this.dailyAllowance) {
      requiresHumanApproval = true;
      reasons.push(`Order would exceed remaining daily budget (Current spend: $${this.dailySpend.toFixed(2)}, Daily cap: $${this.dailyAllowance.toFixed(2)}).`);
    }

    return {
      allowed: true,
      requiresHumanApproval,
      reasons: reasons.length ? reasons : ['Order within standard safety parameters.']
    };
  }

  recordSpend(amount) {
    this._checkDailyReset();
    this.dailySpend += amount;
  }

  getStatus() {
    this._checkDailyReset();
    return {
      maxPerOrder: this.maxPerOrder,
      dailyAllowance: this.dailyAllowance,
      dailySpend: this.dailySpend,
      remainingDailyBudget: Math.max(0, this.dailyAllowance - this.dailySpend),
      minMerchantTrustScore: this.minMerchantTrustScore
    };
  }
}
