#!/usr/bin/env node

import { AgentWalletGuard, CrossStoreBasketOptimizer, ProductTruthGuard, CircleTrendRadar } from '../src/index.js';

const command = process.argv[2] || 'help';

console.log('==================================================');
console.log('   🚀 GenPark Next-Gen Features Suite (2026)      ');
console.log('==================================================');

switch (command) {
  case 'wallet': {
    const amount = parseFloat(process.argv[3]) || 120.00;
    const merchant = process.argv[4] || 'GenPark-Direct';
    const guard = new AgentWalletGuard();
    console.log(`\n[Agent Wallet Guard] Processing mock order: $${amount} at ${merchant}...`);
    const res = guard.processCheckout({
      id: `ord_${Date.now()}`,
      merchant,
      amount,
      category: 'electronics'
    });
    console.log('Result:', JSON.stringify(res, null, 2));
    break;
  }

  case 'basket': {
    const items = (process.argv[3] || 'mechanical-keyboard,desk-mat,screen-lightbar').split(',');
    const optimizer = new CrossStoreBasketOptimizer();
    console.log(`\n[Cross-Store Basket Optimizer] Optimizing items: ${items.join(', ')}...`);
    const res = optimizer.optimize(items);
    console.log('Optimization Result:');
    console.log(`- Cheapest Combination: $${res.cheapestPlan.totalCost} (Shipping: $${res.cheapestPlan.totalShipping})`);
    if (res.bestSingleStorePlan) {
      console.log(`- Single Store Option: $${res.bestSingleStorePlan.totalCost} (Shipping: $${res.bestSingleStorePlan.totalShipping})`);
      console.log(`- Net Savings vs Single Store: $${res.savingsVsSingleStore}`);
    }
    console.log('\nAllocation Plan Breakdown:');
    console.log(JSON.stringify(res.cheapestPlan.merchants, null, 2));
    break;
  }

  case 'audit': {
    const truthGuard = new ProductTruthGuard();
    console.log('\n[Product TruthGuard] Auditing sample product reviews for authenticity & real flaws...');
    const mockReviews = [
      { id: 'r1', rating: 5, text: 'This game-changer product exceeded all my expectations! Must-have addition to any desk.', verifiedPurchase: false, authorAccountAgeDays: 3 },
      { id: 'r2', rating: 5, text: 'Seamlessly integrates with everything. In conclusion, I highly recommend this product to anyone.', verifiedPurchase: false, authorAccountAgeDays: 5 },
      { id: 'r3', rating: 2, text: 'The stand broke after two weeks of light usage. Awkward fit on a 27-inch monitor.', verifiedPurchase: true, authorAccountAgeDays: 450 },
      { id: 'r4', rating: 4, text: 'Great illumination, but the USB cable arrived damaged. Customer service sent a replacement in 3 days.', verifiedPurchase: true, authorAccountAgeDays: 300 }
    ];
    const report = truthGuard.auditProductReviews('prod_screen_lightbar', mockReviews);
    console.log('Audit Summary:');
    console.log(`- Trust Grade: ${report.trustGrade}`);
    console.log(`- Synthetic Spam Detected: ${report.summary.syntheticSpamRatioPercent}%`);
    console.log(`- Adjusted Authentic Rating: ${report.summary.adjustedAuthenticRating} / 5.0`);
    console.log('- Top Real-World Flaws Identified:');
    console.log(JSON.stringify(report.summary.topFlaws, null, 2));
    break;
  }

  case 'radar': {
    const radar = new CircleTrendRadar();
    console.log('\n[Circle Trend Radar] Ingesting Circle posts and synthesizing trending insights...');
    const mockPosts = [
      { id: 'p1', author: 'CyberSam', text: 'Just swapped out my keys for the Lumina-87 magnetic switch keyboard. Latency is insane.', products: ['Lumina-87'], likes: 42, comments: 15, timestamp: new Date().toISOString() },
      { id: 'p2', author: 'TechMinimalist', text: 'Anyone comparing Lumina-87 vs Wooting? Build quality on Lumina feels surprisingly solid.', products: ['Lumina-87'], likes: 28, comments: 8, timestamp: new Date().toISOString() },
      { id: 'p3', author: 'DeskSetupGuy', text: 'Classic wooden wrist rest still holds up for daily typing.', products: ['Walnut-Wrist-Rest'], likes: 5, comments: 1, timestamp: new Date().toISOString() }
    ];
    const radarResult = radar.detectAndSynthesize(mockPosts);
    console.log(`Detected Trends: ${radarResult.detectedTrends.length}`);
    if (radarResult.synthesizedInsights.length > 0) {
      console.log('\nGenerated Insight Post:');
      console.log(radarResult.synthesizedInsights[0].markdownContent);
    }
    break;
  }

  case 'demo':
  default: {
    console.log('Usage: genpark <command>');
    console.log('\nAvailable commands:');
    console.log('  wallet [amount] [merchant] - Test Agent Wallet Guard spend limits and receipts');
    console.log('  basket [items]             - Run Cross-Store Basket & Shipping Optimizer');
    console.log('  audit                      - Run Product TruthGuard review anti-spoof audit');
    console.log('  radar                      - Run Circle Trend Radar and generate insight post');
    console.log('  demo                       - Show this menu\n');
    break;
  }
}
