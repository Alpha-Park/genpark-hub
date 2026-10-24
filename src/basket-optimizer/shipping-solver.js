/**
 * Combinatorial solver for multi-store basket optimization.
 * Optimizes total cost = sum(item prices) + sum(shipping fees after threshold discounts).
 */

export class ShippingSolver {
  /**
   * @param {Array} targetItems - List of required items e.g. ['mechanical_keyboard', 'mouse_mat', 'usb_hub']
   * @param {Object} merchantCatalog - Map of merchant -> { shippingFee, freeShippingThreshold, deliveryDays, rating, inventory: { itemId: price } }
   */
  constructor(targetItems, merchantCatalog) {
    this.targetItems = targetItems;
    this.merchantCatalog = merchantCatalog;
  }

  solve() {
    const merchants = Object.keys(this.merchantCatalog);
    const validMerchantsPerItem = {};

    for (const item of this.targetItems) {
      validMerchantsPerItem[item] = [];
      for (const m of merchants) {
        if (this.merchantCatalog[m].inventory[item] !== undefined) {
          validMerchantsPerItem[item].push({
            merchant: m,
            price: this.merchantCatalog[m].inventory[item]
          });
        }
      }
      if (validMerchantsPerItem[item].length === 0) {
        throw new Error(`Target item '${item}' is unavailable across all participating merchants.`);
      }
    }

    // Generate combinations of assignments (item -> merchant)
    const allAssignments = this._generateAssignments(this.targetItems, validMerchantsPerItem);
    const evaluatedPlans = allAssignments.map(assignment => this._evaluatePlan(assignment));

    // Sort by total net cost ascending
    evaluatedPlans.sort((a, b) => a.totalCost - b.totalCost);

    const cheapestPlan = evaluatedPlans[0];

    // Also find single-merchant consolidation if available
    const singleStorePlans = evaluatedPlans.filter(p => p.merchantCount === 1);
    const bestSingleStorePlan = singleStorePlans.length > 0 ? singleStorePlans[0] : null;

    // Find fastest delivery plan
    const fastestPlan = [...evaluatedPlans].sort((a, b) => a.maxDeliveryDays - b.maxDeliveryDays || a.totalCost - b.totalCost)[0];

    return {
      cheapestPlan,
      bestSingleStorePlan,
      fastestPlan,
      savingsVsSingleStore: bestSingleStorePlan ? +(bestSingleStorePlan.totalCost - cheapestPlan.totalCost).toFixed(2) : 0,
      totalPlansEvaluated: evaluatedPlans.length
    };
  }

  _generateAssignments(items, validMerchantsPerItem, index = 0, current = {}) {
    if (index === items.length) {
      return [{ ...current }];
    }
    const item = items[index];
    const options = validMerchantsPerItem[item];
    const results = [];

    for (const opt of options) {
      current[item] = opt;
      results.push(...this._generateAssignments(items, validMerchantsPerItem, index + 1, current));
    }
    return results;
  }

  _evaluatePlan(assignment) {
    const merchantBaskets = {};
    let itemSubtotal = 0;

    for (const [item, opt] of Object.entries(assignment)) {
      if (!merchantBaskets[opt.merchant]) {
        merchantBaskets[opt.merchant] = {
          items: [],
          subtotal: 0
        };
      }
      merchantBaskets[opt.merchant].items.push({ item, price: opt.price });
      merchantBaskets[opt.merchant].subtotal += opt.price;
      itemSubtotal += opt.price;
    }

    let totalShipping = 0;
    let maxDeliveryDays = 0;
    const merchantBreakdowns = [];

    for (const [mName, basket] of Object.entries(merchantBaskets)) {
      const config = this.merchantCatalog[mName];
      let shipping = config.shippingFee;
      let freeShippingQualified = false;

      if (basket.subtotal >= config.freeShippingThreshold) {
        shipping = 0;
        freeShippingQualified = true;
      }

      totalShipping += shipping;
      if (config.deliveryDays > maxDeliveryDays) {
        maxDeliveryDays = config.deliveryDays;
      }

      merchantBreakdowns.push({
        merchant: mName,
        items: basket.items,
        subtotal: +basket.subtotal.toFixed(2),
        shippingFee: shipping,
        freeShippingQualified,
        deliveryDays: config.deliveryDays,
        merchantRating: config.rating
      });
    }

    const totalCost = +(itemSubtotal + totalShipping).toFixed(2);

    return {
      totalCost,
      itemSubtotal: +itemSubtotal.toFixed(2),
      totalShipping: +totalShipping.toFixed(2),
      merchantCount: Object.keys(merchantBaskets).length,
      maxDeliveryDays,
      merchants: merchantBreakdowns
    };
  }
}
