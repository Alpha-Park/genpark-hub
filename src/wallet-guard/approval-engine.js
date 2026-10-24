import crypto from 'crypto';

export class ApprovalEngine {
  constructor(secretKey = 'genpark-agent-wallet-master-secret') {
    this.secretKey = secretKey;
    this.pendingRequests = new Map();
  }

  /**
   * Create an approval request challenge for human confirmation
   */
  createChallenge(order, reasons) {
    const challengeId = `req_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    const expiresAt = Date.now() + (15 * 60 * 1000); // 15 minutes TTL

    const payload = {
      challengeId,
      orderId: order.id,
      merchant: order.merchant,
      amount: order.amount,
      currency: order.currency || 'USD',
      reasons,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(expiresAt).toISOString(),
      status: 'PENDING'
    };

    this.pendingRequests.set(challengeId, {
      ...payload,
      rawExpiresAt: expiresAt
    });

    return payload;
  }

  /**
   * Human approver confirms or rejects the challenge with optional user signature
   */
  resolveChallenge(challengeId, decision, humanNotes = '') {
    const entry = this.pendingRequests.get(challengeId);
    if (!entry) {
      throw new Error(`Challenge ID '${challengeId}' not found.`);
    }

    if (Date.now() > entry.rawExpiresAt) {
      entry.status = 'EXPIRED';
      throw new Error(`Challenge ID '${challengeId}' has expired.`);
    }

    if (decision !== 'APPROVE' && decision !== 'REJECT') {
      throw new Error("Decision must be 'APPROVE' or 'REJECT'");
    }

    entry.status = decision === 'APPROVE' ? 'APPROVED' : 'REJECTED';
    entry.resolvedAt = new Date().toISOString();
    entry.notes = humanNotes;

    let authorizationToken = null;
    if (entry.status === 'APPROVED') {
      const hmac = crypto.createHmac('sha256', this.secretKey);
      hmac.update(`${challengeId}:${entry.orderId}:${entry.amount}:${entry.resolvedAt}`);
      authorizationToken = `gp_auth_${hmac.digest('hex')}`;
      entry.authorizationToken = authorizationToken;
    }

    return {
      challengeId,
      status: entry.status,
      authorizationToken,
      resolvedAt: entry.resolvedAt
    };
  }

  verifyAuthToken(challengeId, orderId, amount, resolvedAt, token) {
    const hmac = crypto.createHmac('sha256', this.secretKey);
    hmac.update(`${challengeId}:${orderId}:${amount}:${resolvedAt}`);
    const expected = `gp_auth_${hmac.digest('hex')}`;
    return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  }
}
