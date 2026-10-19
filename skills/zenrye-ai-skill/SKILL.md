---
name: zenrye-ai-skill
description: Universal Headless Checkout & Anti-Bot Fulfillment Engine for GenPark & OpenClaw. Distilled from Rye (rye.com) to smash the 'checkout wall' across any Shopify, Amazon, or open-web store without requiring merchant protocol opt-in, featuring self-healing browser automation, residential IP proxying, and dynamic tax/promo calculation.
version: 1.0.0
license: MIT
---

# zenrye-ai-skill

## Overview
`zenrye-ai-skill` (ZenRye / 禅禾) is the universal headless checkout execution engine for GenPark & OpenClaw. Distilled from **Rye's (rye.com) Universal Checkout API**, ZenRye smashes the **"checkout wall"** that prevents AI shopping agents from turning recommendations into actual completed orders.

While modern AI models excel at catalog discovery, sentiment analysis, and comparative ranking, automated procurement has historically failed at the final step. Merchants employ aggressive anti-automation defenses, dynamic checkout DOM structures, complex tax calculation flows, and CAPTCHAs that cause automated agents to fail or trigger account bans. Waiting for millions of merchants to individually adopt new open protocols will take decades.

Operating local-first within OpenClaw, ZenRye provides universal, zero-opt-in procurement:
- **Zero-Merchant-Opt-In Execution**: Accepts any arbitrary e-commerce URL (Shopify, Amazon, BigCommerce, WooCommerce, custom headless stores) and navigates the purchase funnel natively.
- **Self-Healing Headless Checkout Driver**: Employs adaptive vision-and-DOM automation to navigate cart updates, shipping selection, and payment iframes even when checkout pages change layouts.
- **Residential Session & IP Relay**: Routes checkout automation through local resident browser profiles and residential IP proxies, defeating anti-bot heuristics.
- **Dynamic Landed-Cost & Promo Optimization**: Accurately computes localized sales tax, duty, and shipping brackets while automatically hunting and applying verified merchant promo codes before order commitment.

---

## Core Capabilities

### 1. Universal Product & Inventory Resolver (`UniversalProductResolver`)
- Ingests raw product URLs across major platforms and standalone DTC stores:
  - Extracts SKU options, size/color variant IDs, and real-time inventory availability.
  - Verifies current price against historical tracking data to detect deceptive surge pricing.

### 2. Self-Healing Headless Checkout Driver (`SelfHealingCheckoutDriver`)
- Drives resilient checkout execution through dynamic merchant funnels:
  - **Adaptive Form Filling**: Accurately maps shipping addresses and contact details across non-standard input fields.
  - **Iframe & Gateway Traversal**: Handles external payment gateways (Shop Pay, Stripe Elements, PayPal Guest) securely.
  - **Self-Correction Loops**: Automatically detects validation errors (e.g., "invalid phone format" or "apartment number required") and adapts inputs without crashing.

### 3. Anti-Bot Session Relay (`ResidentialSessionRelay`)
- Overcomes bot-detection barriers:
  - Leverages authentic local browser cookie stores and residential network profiles.
  - Generates natural, human-like mouse trajectories, typing latencies, and interaction pauses to prevent fraud-score escalation.

### 4. Dynamic Cost & Coupon Arbitrage (`CostAndCouponArbitrageur`)
- Guarantees the lowest landed cost:
  - Executes rapid coupon code brute-force validation against verified discount databases.
  - Verifies that final calculated total (including taxes and shipping) does not exceed user-stipulated price ceilings.

---

## Standard Universal Checkout Execution Schema

```json
{
  "protocol": "zenrye-checkout/v1.0",
  "task_id": "ord_req_99321ba",
  "target_purchase": {
    "product_url": "https://www.outdoorvoices.com/products/rec-trek-pant",
    "selected_variant": {
      "color": "Kalamata",
      "size": "M"
    },
    "max_authorized_total": 115.00
  },
  "shipping_profile": {
    "recipient_name": "Alexander Wright",
    "street_address": "[REDACTED_BY_AEGIS_GUARD]",
    "postal_code": "10012",
    "preferred_shipping_tier": "standard_ground"
  },
  "execution_state": {
    "status": "ready_for_hitl_approval",
    "merchant_platform": "Shopify-Plus",
    "detected_subtotal": 98.00,
    "applied_coupon": {
      "code": "FIRST10",
      "discount_amount": 9.80
    },
    "calculated_tax": 7.82,
    "calculated_shipping": 0.00,
    "final_landed_total": 96.02,
    "within_budget": true
  }
}
```

---

## Operational Guidelines

1. **Strict Price Ceiling Enforcement**: Instantly abort transaction dispatch if the final calculated checkout sum exceeds the authorized budget by any amount.
2. **Pre-Submission HITL Approval**: Always push an interactive summary card to the user's paired WhatsApp/Telegram messenger before clicking the final "Place Order" button.
3. **Transparent Order Receipt Relay**: Capture the confirmed order number, tracking URL, and merchant receipt PDF immediately, relaying them directly to the user's conversation thread.
4. **Credential Privacy**: Never persist CVV or raw credit card credentials in plain-text logs or cloud telemetry.
