---
name: zensierra-ai-skill
description: Deterministic Action Execution & Autonomous Post-Purchase Resolution Agent for GenPark & OpenClaw. Distilled from Sierra (sierra.ai) to empower personal agents with grounded action engines for order modifications, instant automated returns, policy-compliant dispute settlement, and Personal Agent Protocol (PAP) brand handshakes.
version: 1.0.0
license: MIT
---

# zensierra-ai-skill

## Overview
`zensierra-ai-skill` (ZenSierra / 禅岳) is the deterministic action engine and autonomous post-purchase resolution coordinator for GenPark & OpenClaw. Distilled from **Sierra's (sierra.ai / Bret Taylor & Clay Bavor) Action-Taking Agent Architecture**, ZenSierra elevates personal agents from conversational advisory tools into **autonomous actors capable of executing binding, high-stakes operational tasks**.

While first-generation chatbots merely answered FAQ questions or routed users to frustrating phone queues, the modern consumer expectation is **immediate deterministic resolution**: *cancel an accidental order within the 30-minute grace period, swap the shipping address on an in-flight order, file an automated return and print the carrier label, or negotiate a replacement for damaged transit goods*.

Operating local-first within OpenClaw, ZenSierra provides reliable, enterprise-grounded execution:
- **Deterministic Action Engine**: Bypasses hallucination-prone text generation in favor of verified schema-driven API mutations (Shopify Admin, Stripe Billing, ShipStation, Zendesk/Gorgias endpoints).
- **Autonomous Dispute & Return Arbitrator**: Interprets complex brand return policies and carrier tracking data to autonomously negotiate refunds, store credits, or warranty replacements.
- **Enterprise Personal Agent Protocol (PAP) Handshake**: Establishes verified, cryptographic Agent-to-Agent (A2A) dialogues with enterprise brand agents, negotiating resolutions as an authorized human representative.
- **Omnichannel State Synchronization**: Preserves a unified, tamper-proof audit trail across WhatsApp, Telegram, SMS, and email threads.

---

## Core Capabilities

### 1. Deterministic Action & Order Mutation Engine (`ActionExecutionEngine`)
- Interacts directly with merchant OMS and carrier APIs:
  - **Pre-Dispatch Interception**: Cancels or modifies items, quantities, or delivery speeds before fulfillment lock.
  - **Address Correction**: Dynamically pushes updated postal coordinates to WMS systems.
  - **Subscription Lifecycle Management**: Pauses, skips, or reconfigures recurring consumer subscriptions autonomously.

### 2. Autonomous Return & Dispute Arbitrator (`DisputeResolutionArbitrator`)
- Automates the full return and refund cycle:
  - Validates merchant return window eligibility (e.g., within 30 days of delivery).
  - Generates pre-paid USPS/UPS/FedEx return labels and QR return codes directly in chat.
  - Monitors carrier tracking scans and automatically triggers refund verification.

### 3. Enterprise PAP Peer Negotiator (`EnterprisePAPClient`)
- Leverages the Personal Agent Protocol (PAP) co-developed by Sierra, Meta, Shopify, and Stripe:
  - Authenticates customer authorization through cryptographic KYA delegation (`zenfire-ai-skill`).
  - Conducts structured machine-to-machine negotiation with the brand's customer-service agent, bypassing human hold times.

### 4. Non-Hallucinatory Governance & Outcome Ledger (`OutcomeAuditor`)
- Enforces zero-tolerance policies against hallucinated promises:
  - Only commits actions verified by cryptographic HTTP status receipts.
  - Logs all negotiations, tracking numbers, and refund amounts to `~/.openclaw/vault/resolutions.ledger`.

---

## Standard Post-Purchase Resolution Schema

```json
{
  "protocol": "zensierra-resolution/v1.0",
  "resolution_id": "res_act_88201a",
  "order_context": {
    "merchant_domain": "allbirds.com",
    "order_number": "AB-881920",
    "purchase_date": "2026-10-12T14:30:00Z",
    "delivered_date": "2026-10-14T09:15:00Z"
  },
  "requested_action": "size_exchange",
  "action_parameters": {
    "original_item_sku": "SKU-TREE-RUNNER-W8",
    "desired_item_sku": "SKU-TREE-RUNNER-W8.5",
    "return_reason": "fit_too_narrow"
  },
  "execution_result": {
    "status": "completed_successfully",
    "merchant_pap_agent_verified": true,
    "exchange_order_number": "AB-891044",
    "return_label_url": "https://shipping.allbirds.com/labels/return_qr_881920.png",
    "carrier": "USPS",
    "carrier_dropoff_deadline": "2026-10-28T23:59:59Z"
  }
}
```

---

## Operational Guidelines

1. **Deterministic Verification Only**: Never report a task as completed without capturing an authentic 200 OK API receipt or carrier tracking token.
2. **Explicit Human Confirmation for Irreversible Actions**: Require interactive approval on paired messenger before finalizing irreversible order cancellations or returns.
3. **Audit Ledger Immutability**: All automated customer service dialogues and merchant agreements must be appended to the local tamper-proof audit log.
4. **Policy Compliance**: Respect merchant terms of service and warranty boundaries; never attempt unauthorized bypass of legitimate fraud controls.
