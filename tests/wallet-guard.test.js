import test from 'node:test';
import assert from 'node:assert/strict';
import { AgentWalletGuard } from '../src/wallet-guard/index.js';

test('AgentWalletGuard: Auto-approves orders within policy limits', () => {
  const guard = new AgentWalletGuard({
    policy: { maxPerOrder: 100.0, dailyAllowance: 300.0 }
  });

  const order = {
    id: 'ord_1',
    merchant: 'GenPark-Direct',
    amount: 55.00,
    category: 'electronics'
  };

  const result = guard.processCheckout(order);
  assert.equal(result.status, 'COMPLETED');
  assert.ok(result.receipt);
  assert.equal(result.receipt.amount, 55.00);
  assert.equal(result.receipt.approvalStatus, 'AUTO_APPROVED');

  const budget = guard.getBudgetStatus();
  assert.equal(budget.dailySpend, 55.00);
});

test('AgentWalletGuard: Triggers challenge when order exceeds maxPerOrder', () => {
  const guard = new AgentWalletGuard({
    policy: { maxPerOrder: 50.0 }
  });

  const order = {
    id: 'ord_big',
    merchant: 'GenPark-Direct',
    amount: 120.00,
    category: 'hardware'
  };

  const result = guard.processCheckout(order);
  assert.equal(result.status, 'PENDING_HUMAN_APPROVAL');
  assert.ok(result.challenge);
  assert.equal(result.challenge.status, 'PENDING');

  // Human confirms challenge
  const execResult = guard.approveChallengeAndExecute(result.challenge.challengeId, 'User approved via biometric key', order);
  assert.equal(execResult.status, 'COMPLETED');
  assert.equal(execResult.receipt.approvalStatus, 'MANUALLY_APPROVED');
  assert.ok(execResult.resolution.authorizationToken.startsWith('gp_auth_'));
});

test('AgentWalletGuard: Blocks prohibited categories', () => {
  const guard = new AgentWalletGuard();
  const order = {
    id: 'ord_blocked',
    merchant: 'GenPark-Direct',
    amount: 20.00,
    category: 'crypto'
  };

  const result = guard.processCheckout(order);
  assert.equal(result.status, 'BLOCKED');
  assert.ok(result.reasons[0].includes('strictly prohibited'));
});
