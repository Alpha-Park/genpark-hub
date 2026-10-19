---
name: zenfirm-ai-skill
description: Protocol-Agnostic Agentic Checkout Broker & Merchant-of-Record (MoR) Sovereign Gateway for GenPark & OpenClaw. Distilled from Firmly (firmly.ai) and Perplexity 'Buy with Pro' to unify fragmented commerce rails (MCP, ACP, UCP, TAP, PAP), execute native in-chat checkout, and preserve direct brand sovereignty without platform disintermediation.
version: 1.0.0
license: MIT
---

# zenfirm-ai-skill

## Overview
`zenfirm-ai-skill` (ZenFirm / 禅磐) is the protocol-agnostic agentic checkout broker and merchant-of-record sovereign gateway for GenPark & OpenClaw. Distilled from **Firmly's (firmly.ai) Agentic Checkout Engine and Perplexity's 'Buy with Pro' native shopping architecture**, ZenFirm resolves the primary infrastructure bottleneck holding back agentic commerce: **protocol fragmentation and merchant platform anxiety**.

As AI-native search and conversational assistants (Perplexity, ChatGPT, Claude, Gemini, GenPark) transition from research tools into transactional checkout destinations, the industry has fractured into competing, incompatible protocols:
- **MCP** (Anthropic Model Context Protocol)
- **ACP** (OpenAI & Stripe Agentic Commerce Protocol)
- **UCP** (Google & Shopify Universal Commerce Protocol)
- **TAP** (Visa Trusted Agent Protocol)
- **PAP** (Sierra & Meta Personal Agent Protocol)

Merchants face a paralyzing dilemma: building bespoke integrations for every new AI platform is engineering suicide, while routing orders through third-party aggregators forfeits their **Merchant of Record (MoR)** status, customer lifetime value (LTV), and brand data sovereignty.

Operating local-first within OpenClaw, ZenFirm provides a single, protocol-agnostic bedrock:
- **Unified Protocol Harmonizer**: Translates seamlessly across MCP, ACP, UCP, TAP, and PAP schemas, allowing GenPark agents to transact with any merchant regardless of which protocol rail they expose.
- **Embedded In-Chat One-Tap Checkout ("Buy with Pro" Paradigm)**: Completes end-to-end purchases directly inside conversational messengers (WhatsApp, Telegram, Slack) without browser redirection.
- **100% Merchant of Record (MoR) Preservation**: Directs orders straight into the brand's native merchant gateway (Shopify, WooCommerce, Stripe, Adyen), guaranteeing that customer data, fulfillment logistics, and warranties remain under the merchant's direct control.
- **Passkey & FIDO2 Ephemeral Authorization**: Leverages device-bound biometric passkeys and encrypted wallets to authorize payments in under 400ms with zero CVV/PAN leakage.

---

## Core Capabilities

### 1. Protocol-Agnostic Commerce Broker (`UniversalProtocolBroker`)
- Normalizes incoming and outgoing transaction schemas:
  - Bridges MCP tool calls to ACP payment intents.
  - Converts UCP catalog payloads into PAP negotiated contracts.
  - Automatically negotiates the highest-priority mutual standard supported by merchant and buyer daemons.

### 2. Native In-Chat Checkout Driver (`InChatCheckoutEngine`)
- Recreates the Perplexity 'Buy with Pro' experience in personal messaging:
  - Renders compact interactive checkout summary cards in WhatsApp/Telegram threads.
  - Computes real-time tax, delivery tiers, and discount codes in a single round-trip.
  - Commits transactions upon user biometric confirmation (FaceID / TouchID / Passkey tap).

### 3. Merchant Sovereignty & MoR Protector (`SovereignMoRProtector`)
- Protects the merchant-customer relationship from platform commoditization:
  - Preserves first-party customer accounts, opt-in communication preferences, and loyalty rewards.
  - Ensures transactions clear under the merchant's own payment descriptor on customer credit card statements.
  - Dispatches order tracking and warranty receipts directly from the merchant's CRM/OMS.

### 4. Zero-Friction Merchant Connector (`InstantMerchantConnector`)
- Enables instant onboarding for independent stores:
  - Generates drop-in webhooks and headless checkout endpoints compatible with Shopify and custom stacks.
  - Bypasses multi-month platform certification queues by providing instant compatibility with all AI shopping assistants.

---

## Standard Protocol-Agnostic Checkout Schema

```json
{
  "protocol": "zenfirm-unified/v1.0",
  "transaction_id": "tx_firm_99184a",
  "source_agent_protocol": "openclaw_mcp",
  "target_merchant_protocol": "ucp_v2",
  "merchant_context": {
    "domain": "matadorup.com",
    "merchant_of_record": true,
    "payment_gateway": "stripe_direct"
  },
  "cart_summary": {
    "line_items": [
      {
        "sku": "MAT-SEG45-BLK",
        "title": "SEG45 Travel Backpack",
        "unit_price_usd": 200.00,
        "quantity": 1
      }
    ],
    "subtotal_usd": 200.00,
    "promo_discount_usd": 30.00,
    "shipping_usd": 0.00,
    "tax_usd": 14.88,
    "total_landed_usd": 184.88
  },
  "settlement": {
    "auth_method": "passkey_fido2",
    "token_network": "visa_tap_cryptogram",
    "status": "settled",
    "merchant_order_id": "ORD-MAT-99210",
    "confirmation_timestamp": "2026-10-19T23:05:00Z"
  }
}
```

---

## Operational Guidelines

1. **Protocol Neutrality**: Never lock transactions into proprietary formats; dynamically negotiate the most secure open rail (ACP, UCP, PAP, TAP, MCP).
2. **Strict Merchant Sovereignty**: Always retain the merchant as the Merchant of Record (MoR) and route funds directly to the merchant's merchant account.
3. **Biometric Human Gate**: Require explicit biometric Passkey tap or one-click HITL confirmation in messenger before dispatching settlement tokens.
4. **Latency Ceiling**: The entire multi-protocol normalization and payment commit loop must execute in under 500ms.
