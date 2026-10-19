---
name: zenfire-ai-skill
description: KYA (Know Your Agent) Identity Verification & Budgeted Micro-Wallet Infrastructure for GenPark & OpenClaw. Distilled from Skyfire (skyfire.xyz) to give autonomous AI agents verified human-delegated cryptographic credentials, spend-capped programmatic wallets, and friction-free payment settlement across traditional and stablecoin rails.
version: 1.0.0
license: MIT
---

# zenfire-ai-skill

## Overview
`zenfire-ai-skill` (ZenFire / 禅烽) is the machine identity verification and programmable wallet infrastructure for GenPark & OpenClaw. Distilled from **Skyfire's (skyfire.xyz) KYA & Agent Payment Network**, ZenFire resolves the fundamental barrier preventing personal AI agents from executing real-world economic actions: **agents lack legal identity, financial rails, and merchant trust**.

When an autonomous agent attempts to browse products, access paid APIs, or finalize an online purchase, merchant security firewalls typically reject the request with `403 Forbidden` errors or flag payment attempts as credit card fraud. Simultaneously, users hesitate to delegate payment authority to an agent without ironclad budget caps and audit trails.

Operating local-first within OpenClaw, ZenFire provides a secure financial and identity bridge:
- **KYA (Know Your Agent) Cryptographic Attestation**: Emits a verifiable, tamper-proof proof-of-delegation proving the agent is authorized by a verified human principal.
- **Spend-Capped Programmatic Wallets**: Issues ephemeral, single-purpose virtual payment tokens with rigid spending ceilings, merchant whitelist filters, and automatic expiration.
- **Anti-403 Merchant Access Handshake**: Automatically supplies KYA headers (`X-Agent-KYA-Token`) to merchant endpoints, establishing verified machine-to-machine trust without triggering anti-bot defenses.
- **Dual-Rail Payment Settlement**: Seamlessly routes settlement through traditional banking networks (virtual cards, ACH) or low-friction stablecoin micro-rails (USDC).

---

## Core Capabilities

### 1. KYA Identity & Delegation Attester (`KYAIdentityAttester`)
- Implements the open Know Your Agent (KYA) protocol:
  - Cryptographically signs an ephemeral delegation token using the user's OS Enclave private key.
  - Links agent transactions to verified human identity without exposing the user's personal banking numbers or SSN.
  - Satisfies merchant AML, fraud detection, and transaction legitimacy verifications.

### 2. Spend-Capped Programmatic Wallet (`ProgrammaticBudgetWallet`)
- Creates isolated, disposable financial containers for specific shopping missions:
  - **Granular Spend Ceilings**: Strict hard limits (e.g., "Maximum $150.00 total spend").
  - **Merchant Whitelist Constraints**: Bound strictly to designated domain origins (e.g., only `store.example.com`).
  - **TTL & Revocation**: Auto-destructs unused balances after task completion or time expiration.

### 3. Anti-403 Gateway Handshake (`Anti403GatewayNegotiator`)
- Interfaces with merchant WAFs (Cloudflare, Akamai, PerimeterX) by transmitting verified KYA tokens:
  - Upgrades anonymous crawler requests into authenticated buyer agent sessions.
  - Solves the bot-blocking dilemma by guaranteeing non-malicious, economically productive browsing intent.

### 4. Cryptographic Transaction Ledger (`CryptoTransactionAuditor`)
- Maintains an append-only local audit log in `~/.openclaw/vault/agent_payments.ledger`:
  - Logs timestamp, merchant certificate, exact itemized cost, and human authorization signature.
  - Emits real-time push notifications to paired messengers (WhatsApp/Telegram) upon successful transaction settlement.

---

## Standard KYA Payment Token Schema

```json
{
  "protocol": "zenfire-kya/v1.0",
  "kya_version": "2026-10",
  "agent_id": "openclaw://agent/mesh/sub_883a91",
  "delegation_proof": {
    "principal_id_hash": "sha256:d8a9f2409b...",
    "issued_at": "2026-10-14T11:25:00Z",
    "expires_at": "2026-10-14T11:40:00Z",
    "signature": "ed25519:7e8a93cb..."
  },
  "budget_constraints": {
    "currency": "USD",
    "max_authorized_amount": 125.00,
    "allowed_merchant_domains": ["patagonia.com", "arcteryx.com"],
    "single_charge_only": true
  },
  "settlement_rail": {
    "type": "ephemeral_virtual_card",
    "token_vault_id": "vault_tok_991823ab",
    "backup_stablecoin": "USDC-Base"
  }
}
```

---

## Operational Guidelines

1. **Zero Overdraft Guarantee**: Reject any transaction attempt exceeding the pre-authorized budget ceiling by even \$0.01.
2. **Local Credential Storage**: Private keys and master card seeds must never exit the local host machine or OS Enclave.
3. **Explicit Dual-HITL for High Value**: Require interactive confirmation on paired mobile messengers for any transaction exceeding \$100.00.
4. **Immediate Post-Task Token Destruction**: Instantly revoke and wipe virtual card numbers upon order confirmation.
