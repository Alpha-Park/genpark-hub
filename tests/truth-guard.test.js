import test from 'node:test';
import assert from 'node:assert/strict';
import { ProductTruthGuard } from '../src/truth-guard/index.js';

test('ProductTruthGuard: Detects synthetic reviews and extracts genuine flaws', () => {
  const guard = new ProductTruthGuard();

  const reviews = [
    {
      id: 'r_bot',
      rating: 5,
      text: 'This game-changer product exceeded all my expectations! Seamlessly integrates with everything. In conclusion, I highly recommend this product to anyone.',
      verifiedPurchase: false,
      authorAccountAgeDays: 2
    },
    {
      id: 'r_real_flaw',
      rating: 2,
      text: 'The battery drain is terrible, it died after three days and the screen crack appeared easily. Awkward fit.',
      verifiedPurchase: true,
      authorAccountAgeDays: 600
    },
    {
      id: 'r_real_good',
      rating: 4,
      text: 'Decent overall. The stand feels sturdy, although the cable is a bit short. Happy with the price.',
      verifiedPurchase: true,
      authorAccountAgeDays: 250
    }
  ];

  const report = guard.auditProductReviews('prod_audio_1', reviews);

  assert.equal(report.productId, 'prod_audio_1');
  assert.ok(report.summary.syntheticSpamRatioPercent > 0);
  assert.ok(report.summary.topFlaws.length > 0);

  const durabilityFlaw = report.summary.topFlaws.find(f => f.category === 'Durability');
  assert.ok(durabilityFlaw);
});
