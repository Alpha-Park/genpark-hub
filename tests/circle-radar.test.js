import test from 'node:test';
import assert from 'node:assert/strict';
import { CircleTrendRadar } from '../src/circle-radar/index.js';

test('CircleTrendRadar: Detects rising topics and synthesizes insight articles', () => {
  const radar = new CircleTrendRadar();

  const posts = [
    {
      id: 'p1',
      author: 'KeebLover',
      text: 'The ZenSwitch-Pro switches feel like butter, totally worth the upgrade.',
      products: ['ZenSwitch-Pro'],
      likes: 60,
      comments: 20,
      timestamp: new Date().toISOString()
    },
    {
      id: 'p2',
      author: 'OfficeGeek',
      text: 'Comparing ZenSwitch-Pro against standard browns. Much smoother actuation.',
      products: ['ZenSwitch-Pro'],
      likes: 35,
      comments: 12,
      timestamp: new Date().toISOString()
    }
  ];

  const result = radar.detectAndSynthesize(posts);
  assert.equal(result.detectedTrends.length, 1);
  assert.equal(result.detectedTrends[0].product, 'ZenSwitch-Pro');
  assert.ok(result.detectedTrends[0].momentumScore > 20);
  assert.ok(result.synthesizedInsights.length >= 1);
  assert.ok(result.synthesizedInsights[0].markdownContent.includes('ZenSwitch-Pro'));
  assert.ok(result.synthesizedInsights[0].title.includes('ZenSwitch-Pro'));
});
