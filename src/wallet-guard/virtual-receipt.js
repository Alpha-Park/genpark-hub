import crypto from 'crypto';

export class VirtualReceiptLedger {
  constructor() {
    this.ledger = [];
  }

  issueReceipt({ order, approvalStatus, authorizationToken = null, executedBy = 'GenPark-Agent' }) {
    const timestamp = new Date().toISOString();
    const receiptId = `rcpt_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;

    // Cryptographic hash for tamper-evident ledger integrity
    const payload = `${receiptId}:${order.id}:${order.merchant}:${order.amount}:${timestamp}:${approvalStatus}`;
    const receiptHash = crypto.createHash('sha256').update(payload).digest('hex');

    const receipt = {
      receiptId,
      receiptHash,
      orderId: order.id,
      merchant: order.merchant,
      amount: order.amount,
      currency: order.currency || 'USD',
      items: order.items || [],
      executedBy,
      approvalStatus,
      authorizationToken,
      timestamp,
      verificationUrl: `https://genpark.ai/receipts/verify?id=${receiptId}&hash=${receiptHash}`
    };

    this.ledger.push(receipt);
    return receipt;
  }

  getHistory() {
    return [...this.ledger];
  }

  verifyReceipt(receiptId, receiptHash) {
    const item = this.ledger.find(r => r.receiptId === receiptId);
    if (!item) return { valid: false, message: 'Receipt not found' };
    return {
      valid: item.receiptHash === receiptHash,
      receipt: item
    };
  }
}
