import test from 'node:test';
import assert from 'node:assert/strict';
import { CrossStoreBasketOptimizer } from '../src/basket-optimizer/index.js';

test('CrossStoreBasketOptimizer: Solves multi-item cart and qualifies for free shipping thresholds', () => {
  const optimizer = new CrossStoreBasketOptimizer();
  const targetItems = ['desk-mat', 'usb-c-hub'];

  const res = optimizer.optimize(targetItems);
  assert.ok(res.cheapestPlan);
  assert.ok(res.cheapestPlan.totalCost > 0);
  assert.ok(res.cheapestPlan.merchants.length >= 1);
  assert.equal(typeof res.savingsVsSingleStore, 'number');
});

test('CrossStoreBasketOptimizer: Handles custom merchant inventories', () => {
  const customCatalog = {
    StoreA: {
      shippingFee: 10,
      freeShippingThreshold: 50,
      deliveryDays: 2,
      rating: 4.8,
      inventory: { item1: 30, item2: 25 }
    },
    StoreB: {
      shippingFee: 5,
      freeShippingThreshold: 40,
      deliveryDays: 3,
      rating: 4.5,
      inventory: { item1: 20, item2: 30 }
    }
  };

  const optimizer = new CrossStoreBasketOptimizer(customCatalog);
  const res = optimizer.optimize(['item1', 'item2']);

  // If bought from StoreA: 30+25 = 55 (free shipping >= 50) => Total = 55
  // If bought from StoreB: 20+30 = 50 (free shipping >= 40) => Total = 50
  // If split: StoreB(item1=20 + 5 ship = 25), StoreA(item2=25 + 10 ship = 35) => 60
  // Cheapest must be StoreB @ 50
  assert.equal(res.cheapestPlan.totalCost, 50);
  assert.equal(res.cheapestPlan.merchantCount, 1);
});
