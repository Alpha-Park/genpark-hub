import { BudgetPolicy } from './budget-policy.js';
import { ApprovalEngine } from './approval-engine.js';
import { VirtualReceiptLedger } from './virtual-receipt.js';

export class AgentWalletGuard {
  constructor(options = {}) {
    this.policy = new BudgetPolicy(options.policy);
    this.approval = new ApprovalEngine(options.secretKey);
    this.ledger = new VirtualReceiptLedger();
  }

  /**
   * Process a purchase execution request safely
   */
  processCheckout(order) {
    const evalResult = this.policy.evaluateOrder(order);

    if (!evalResult.allowed) {
      return {
        status: 'BLOCKED',
        reasons: evalResult.reasons
      };
    }

    if (evalResult.requiresHumanApproval) {
      const challenge = this.approval.createChallenge(order, evalResult.reasons);
      return {
        status: 'PENDING_HUMAN_APPROVAL',
        challenge,
        message: 'Order exceeds automated agent safety bounds and requires manual confirmation.'
      };
    }

    // Auto approved
    this.policy.recordSpend(order.amount);
    const receipt = this.ledger.issueReceipt({
      order,
      approvalStatus: 'AUTO_APPROVED'
    });

    return {
      status: 'COMPLETED',
      receipt,
      message: 'Order completed safely within autonomous budget limits.'
    };
  }

  approveChallengeAndExecute(challengeId, humanNotes = '', order) {
    const resolution = this.approval.resolveChallenge(challengeId, 'APPROVE', humanNotes);
    this.policy.recordSpend(order.amount);

    const receipt = this.ledger.issueReceipt({
      order,
      approvalStatus: 'MANUALLY_APPROVED',
      authorizationToken: resolution.authorizationToken,
      executedBy: 'Human-Confirmed-Agent'
    });

    return {
      status: 'COMPLETED',
      receipt,
      resolution
    };
  }

  rejectChallenge(challengeId, reason = '') {
    return this.approval.resolveChallenge(challengeId, 'REJECT', reason);
  }

  getBudgetStatus() {
    return this.policy.getStatus();
  }

  getReceiptHistory() {
    return this.ledger.getHistory();
  }
}
