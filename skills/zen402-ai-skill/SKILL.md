---
name: zen402-ai-skill
description: HTTP 402 Machine-Native Micropayments & On-Chain Resource Settlement Engine for GenPark & OpenClaw. Distilled from the Linux Foundation x402 open standard (initiated by Coinbase) and AWS Bedrock AgentCore Payments to empower autonomous AI agents to pay for premium APIs, real-time datasets, compute nodes, and paywalled digital resources per call using stablecoins (USDC) over Base, Solana, and Polygon without credit card forms or subscription friction.
version: 1.0.0
license: MIT
---

# zen402-ai-skill

## Overview
`zen402-ai-skill` (Zen402 / 禅付) is the machine-native micropayment and on-chain resource settlement engine for GenPark & OpenClaw. Distilled from the **x402 Open Protocol (governed under the Linux Foundation's x402 Foundation and initiated by Coinbase)** and **AWS Bedrock AgentCore Payments architecture**, Zen402 brings the long-dormant `HTTP 402 Payment Required` standard into production reality for autonomous agents.

Traditional internet commerce is designed exclusively for human cardholders: it demands manual account registration, recurring monthly subscriptions, credit card form entry, and complex OAuth redirects. When an autonomous AI shopping agent needs to purchase a single live inventory query, a premium stock price history feed, a compute run, or a paywalled technical evaluation, traditional payment rails break down completely.

Operating local-first within OpenClaw, Zen402 provides an internet-native economic handshake:
- **Autonomous HTTP 402 Challenge Handling**: Intercepts `402 Payment Required` responses, parses structured machine-readable payment parameters (cost, chain, recipient, token, TTL), and evaluates them against user-authorized spending policies.
- **Stablecoin Micropayment Settlement**: Programmatically signs and dispatches instant, low-cost stablecoin micropayments (USDC) across high-throughput networks (Base, Solana, Polygon).
- **Zero-Friction Resource Unlocking**: Attaches cryptographic payment proofs (`Authorization: x402 <proof>`) on automatic request retries, receiving immediate streaming access to paid APIs without subscriptions.
- **Granular Micropayment Budgets & Escrow**: Enforces per-call spending hard caps (e.g. max $0.05 per API call, max $2.00 total daily research spend) backed by local enclave controls.

---

## Core Capabilities

### 1. HTTP 402 Challenge Interceptor (`HTTP402ChallengeHandler`)
- Automatically intercepts and resolves server payment challenges:
  - Detects `HTTP/1.1 402 Payment Required` status codes.
  - Parses challenge headers (`WWW-Authenticate: x402 ...` or JSON challenge body):
    ```json
    {
      "x402_version": "1.0",
      "network": "base",
      "token": "USDC",
      "token_contract": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      "amount": "0.020000",
      "recipient": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      "resource_id": "res_inv_query_9918bc",
      "expires_at": 1792834500
    }
    ```

### 2. Programmatic Stablecoin Signer (`ProgrammaticMicroWallet`)
- Executes instant micro-settlement via client-side embedded wallets:
  - Evaluates cost against active policy ceilings (e.g., "Allow API micro-queries up to $0.05 without human prompting").
  - Signs transaction payloads using local enclave private keys without exposing mnemonic seeds.
  - Submits on-chain or via Layer-2 facilitators for sub-second transaction finality.

### 3. Cryptographic Payment Proof Dispatcher (`PaymentProofAttacher`)
- Formats cryptographic authorization headers for request retries:
  - Attaches standard x402 proof headers:
    ```http
    GET /v1/products/sku_88219/inventory-feed HTTP/1.1
    Host: api.retailgraph.io
    Authorization: x402 base:tx_0x9f81a8b2c4...:sig_ed25519_881a...
    ```
  - Unlocks immediate data delivery with zero human intervention or subscription commitments.

### 4. Machine Economy Budget Governor (`MicroSpendPolicyGovernor`)
- Protects user capital against runaway agent loops:
  - Hard session caps (e.g., maximum $1.50 per research session).
  - Domain reputation whitelist (ensures micropayments only route to verified API providers).
  - Append-only cryptographic transaction ledger recorded locally in `~/.openclaw/vault/x402_payments.ledger`.

---

## Standard x402 Micropayment Flow Schema

```json
{
  "protocol": "zen402-micropayment/v1.0",
  "task_id": "micro_tx_99218bc",
  "endpoint": "https://api.commercialgraph.io/v2/catalog/sku-feed",
  "challenge_received": {
    "status_code": 402,
    "network": "base-mainnet",
    "currency": "USDC",
    "amount_usdc": 0.015,
    "recipient_address": "0x8892A1b238BcA912C0982BcaF9918237190",
    "nonce": "0x77ab12ce",
    "challenge_ttl_seconds": 60
  },
  "policy_evaluation": {
    "authorized_by_policy": true,
    "matching_rule": "allow_research_apis_under_0.05_usd",
    "remaining_session_budget_usdc": 1.485
  },
  "settlement_dispatch": {
    "signed_tx_hash": "0x9812bf...ca9120",
    "proof_header": "Authorization: x402 base:0x9812bf...ca9120",
    "network_fee_usdc": 0.0004,
    "settlement_latency_ms": 280,
    "resource_delivery_status": "200_ok_delivered"
  }
}
```

---

## Operational Guidelines

1. **Strict Per-Call Ceiling**: Never authorize any single x402 micropayment exceeding $0.25 without explicit interactive human confirmation.
2. **Session Hard Limit**: Terminate automated micro-settlement instantly if cumulative session spend reaches the authorized budget ceiling.
3. **Private Key Sovereignty**: Store stablecoin signing keys exclusively within local OS Secure Enclave; never transmit seeds to cloud relays.
4. **Local Audit Logging**: Record every micropayment hash, recipient address, and purchased data payload in the local encrypted transaction ledger.
