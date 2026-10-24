import { ShippingSolver } from './shipping-solver.js';
import { MerchantCatalogManager } from './merchant-matcher.js';

export class CrossStoreBasketOptimizer {
  constructor(initialCatalog = null) {
    this.catalogManager = new MerchantCatalogManager(initialCatalog || {
      'GenPark-Direct': {
        shippingFee: 4.99,
        freeShippingThreshold: 49.00,
        deliveryDays: 2,
        rating: 4.9,
        inventory: {
          'ergonomic-chair': 199.00,
          'desk-mat': 18.00,
          'usb-c-hub': 29.99,
          'screen-lightbar': 45.00
        }
      },
      'Apex-Peripherals': {
        shippingFee: 6.99,
        freeShippingThreshold: 60.00,
        deliveryDays: 3,
        rating: 4.7,
        inventory: {
          'desk-mat': 12.50,
          'usb-c-hub': 24.00,
          'mechanical-keyboard': 89.00
        }
      },
      'Nordic-Workspaces': {
        shippingFee: 9.99,
        freeShippingThreshold: 100.00,
        deliveryDays: 4,
        rating: 4.8,
        inventory: {
          'ergonomic-chair': 185.00,
          'screen-lightbar': 39.00,
          'mechanical-keyboard': 95.00
        }
      }
    });
  }

  optimize(targetItems, customCatalog = null) {
    const catalog = customCatalog || this.catalogManager.getCatalog();
    const solver = new ShippingSolver(targetItems, catalog);
    return solver.solve();
  }

  addMerchant(id, config) {
    this.catalogManager.registerMerchant(id, config);
  }
}
