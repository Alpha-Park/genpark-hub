export class MerchantCatalogManager {
  constructor(initialCatalog = {}) {
    this.catalog = initialCatalog;
  }

  registerMerchant(merchantId, { shippingFee = 5.99, freeShippingThreshold = 50.00, deliveryDays = 3, rating = 4.8, inventory = {} }) {
    this.catalog[merchantId] = {
      shippingFee,
      freeShippingThreshold,
      deliveryDays,
      rating,
      inventory: { ...inventory }
    };
  }

  updateInventory(merchantId, itemId, price) {
    if (!this.catalog[merchantId]) {
      throw new Error(`Merchant '${merchantId}' does not exist.`);
    }
    this.catalog[merchantId].inventory[itemId] = price;
  }

  getCatalog() {
    return this.catalog;
  }
}
