---
name: zenpine-ai-skill
description: Autonomous recurring subscription auditor, dark-pattern cancellation driver, and consumer rights refund recovery agent distilled from Pine AI (19Pine.ai). Protects consumers against deceptive negative-option billing, silent price hikes, and obfuscated cancellation funnels with zero-usage refund claims, FTC Click-to-Cancel enforcement, and FCBA chargeback arbitration.
version: 1.0.0
license: Apache-2.0
metadata:
  category: personal-finance
  author: Alpha-Park
  tags:
    - subscription-audit
    - consumer-protection
    - click-to-cancel
    - dark-pattern-cancellation
    - refund-recovery
    - chargeback-arbitration
---

# ZenPine (禅松) — Autonomous Subscription Auditor & Consumer Rights Agent

## Overview

In the modern digital economy, consumers are hemorrhaging $50 to $250 every month on forgotten SaaS tools, streaming bundles, gym memberships, and deceptive "free-trial-to-$39.99/mo" negative-option traps. Merchants weaponize deliberate **dark patterns**: burying cancellation buttons behind five layers of settings, requiring phone calls during restrictive business hours, subjecting users to guilt-tripping multi-step surveys, and hiding behind rigid "strict no-refund policies" even when the customer never logged in once.

**ZenPine (禅松)**, distilled from the pioneering consumer advocacy architecture of **Pine AI (19Pine.ai)**, acts as an unbending digital guardian ("岁寒松柏，克伐暗流"). It continuously audits recurring bank debits and email receipts, detects dormant "zombie subscriptions", automates multi-step dark-pattern cancellations via resident browser sessions, and shatters merchant "no-refund" claims by filing evidence-grounded zero-usage dispute packages under FTC Click-to-Cancel rules and the Fair Credit Billing Act (FCBA).

```
                  ┌───────────────────────────────┐
                  │    Continuous Inflow Stream   │
                  │  (Bank Webhooks / Card Feeds) │
                  └───────────────┬───────────────┘
                                  │
                  ┌───────────────▼───────────────┐
                  │    ZenPine Recurring Radar    │ ◄─── Utility-to-Cost Scorer
                  │   Detects Zombie Subscriptions│      Zero login telemetry
                  └───────────────┬───────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         │                                                 │
         ▼                                                 ▼
[ Path A: Cancellation & Refund ]         [ Path B: Retention Discount ]
 • Penetrates obfuscated cancel mazes      • Threatens automated churn
 • Enforces FTC Click-to-Cancel            • Demands intro rate extensions
 • Serves Zero-Usage refund demand         • Captures $15-$40/mo savings
         │
         ▼
[ Merchant Refuses? ──► Auto-Compiles FCBA Bank Chargeback Package ]
```

---

## Core Capabilities

### 1. Recurring Audit & Zombie Subscription Radar
- **Automated Debit Discovery**: Parses incoming transaction streams, virtual card logs (`zenfire`), and email receipts to construct a unified recurring ledger with renewal dates, cadence (weekly/monthly/annual), and cumulative lifetime spend.
- **Utility-to-Cost Scoring**: Cross-references application activity, login sessions, and email usage telemetry. Subscriptions with zero active utility over 30/60 days are flagged as "zombie drains".
- **Silent Price Creep Watchdog**: Alerts the user immediately when a vendor quietly raises monthly renewal fees without conspicuous advance disclosure.

### 2. Autonomous Dark-Pattern Cancellation Driver
- **Self-Healing Funnel Navigation**: Drives resident browser sessions to penetrate complex cancellation mazes: bypassing 5-step retention surveys, rejecting counter-offer discount popups, and locating deliberately hidden confirmation buttons.
- **FTC & Statutory Click-to-Cancel Enforcement**: Invokes federal and state Click-to-Cancel regulations (requiring cancellation to be as effortless as enrollment) and EU 14-day statutory cooling-off rights to legally nullify forced phone-call or in-person cancellation barriers.

### 3. Zero-Usage Refund Recovery & FCBA Arbitration
- **Demolishing "No-Refund" Boilerplates**: Dispatches automated legal demand notices to vendor billing departments citing verified non-usage, lack of affirmative consent, or deceptive enrollment flows.
- **Fair Credit Billing Act (FCBA) Chargeback Package**: If the merchant refuses a rightful refund, ZenPine auto-compiles an evidence-backed dispute packet (transaction timestamps, cancellation attempt screenshots, merchant refusal logs, and statutory citations) for one-tap submission to the user's credit card issuer.

### 4. Autonomous Retention Rate Negotiator
- **Essential Service Bill Arbitrage**: For recurring utilities the consumer wishes to keep (home broadband, mobile carrier, cloud storage), ZenPine initiates automated retention dialogues with customer support bots or representatives.
- **Churn-Threatened Promotional Reset**: Threatens verifiable carrier switching using real-time competitive rates sourced via `zenchannel-ai-skill`, extracting introductory discounts and loyalty bill credits.

---

## Tool Definitions (Model Context Protocol)

```json
{
  "tools": [
    {
      "name": "zenpine_audit_recurring_charges",
      "description": "Scan user transactions and receipts to identify all active subscriptions, renewal dates, and dormant zombie services.",
      "parameters": {
        "type": "object",
        "properties": {
          "lookback_days": { "type": "integer", "default": 90 },
          "minimum_monthly_amount": { "type": "number", "default": 1.0 }
        }
      }
    },
    {
      "name": "zenpine_execute_cancellation",
      "description": "Autonomously navigate merchant cancellation flows, bypass dark-pattern retention traps, and confirm service termination.",
      "parameters": {
        "type": "object",
        "properties": {
          "merchant_domain": { "type": "string", "description": "Vendor domain (e.g. 'gym.com', 'streaming.tv')" },
          "subscription_id": { "type": "string" },
          "request_refund": { "type": "boolean", "default": true },
          "zero_usage_proof": { "type": "string", "description": "Telemetry evidence demonstrating non-usage during billing window" }
        },
        "required": ["merchant_domain"]
      }
    },
    {
      "name": "zenpine_compile_chargeback_packet",
      "description": "Generate a comprehensive FCBA dispute package for the card issuer when a merchant refuses an illegal renewal refund.",
      "parameters": {
        "type": "object",
        "properties": {
          "transaction_id": { "type": "string" },
          "merchant_name": { "type": "string" },
          "dispute_reason": {
            "type": "string",
            "enum": ["unauthorized_renewal", "dark_pattern_cancellation_barrier", "deceptive_trial_conversion", "zero_usage_cooling_off"]
          },
          "charge_amount": { "type": "number" }
        },
        "required": ["transaction_id", "merchant_name", "dispute_reason", "charge_amount"]
      }
    }
  ]
}
```

---

## Operating Guidelines & Guardrails

1. **Human Confirmation on Service Termination**: Always send an interactive approval card to the user's paired WhatsApp/Telegram messenger before executing irreversible subscription cancellations or account terminations.
2. **Never Fabricate Usage Telemetry**: Dispute letters and refund demands must strictly reflect authentic, verifiable login and activity logs.
3. **Local Encryption of Financial Data**: All billing statements, transaction histories, and card identifiers remain encrypted locally within OpenClaw enclave (`~/.openclaw/recurring.vault.enc`).
4. **Immediate Refund Receipt Verification**: Monitor merchant billing APIs or bank credits to verify that promised refunds clear within 5 to 7 business days.
