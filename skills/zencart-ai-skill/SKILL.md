---
name: zencart-ai-skill
description: Federated Cross-Merchant Universal Cart & Dynamic Price Arbitrage Radar for GenPark & OpenClaw. Distilled from Google Universal Cart, Carted, and Stripe Machine Payments Protocol (MPP) to unify fragmented retailer checkouts, monitor real-time price drops, optimize multi-store shipping thresholds, and trigger automated post-purchase price-match refunds.
version: 1.0.0
license: MIT
---

# zencart-ai-skill

## Overview
`zencart-ai-skill` (ZenCart / 禅车) is the federated cross-merchant universal cart and dynamic price arbitrage radar for GenPark & OpenClaw. Distilled from **Google Universal Cart, Carted's multi-retailer e-commerce API, and Stripe's Machine Payments Protocol (MPP)**, ZenCart solves the fragmentation and value leakage that shoppers face when purchasing across isolated web stores: **juggling dozens of browser tabs, abandoned shopping carts, missed flash sales, and paying duplicate shipping fees**.

Traditional e-commerce traps items inside separate, merchant-specific carts with zero interoperability. When a user or agent plans a multi-item purchase (e.g., an entire home office setup or a coordinated wardrobe), items must be manually tracked and checked out one by one, losing bundle discounts and incurring redundant delivery fees. Furthermore, when prices drop days after purchase, consumers rarely notice or claim retroactive price adjustments.

Operating local-first within OpenClaw, ZenCart unifies the entire multi-merchant buying journey:
- **Federated Universal Basket**: Maintains an intelligent, persistent, multi-merchant cart spanning Shopify stores, Amazon, DTC brands, and specialty retailers.
- **Dynamic Price-Drop & Inventory Radar**: Continuously tracks price fluctuations, coupon activations, and inventory levels, dispatching instant notifications to paired messengers (WhatsApp/Telegram).
- **Multi-Retailer Knapsack Optimizer**: Evaluates split-order permutations across multiple vendors to maximize coupon stacking, hit free-shipping tiers, and achieve the lowest net landed total.
- **Automated Post-Purchase Price Match Arbitrageur**: Monitors purchased items across merchant-guaranteed 14/30-day price-adjustment windows, auto-generating refund claims when prices drop.

---

## Core Capabilities

### 1. Federated Universal Cart Manager (`FederatedUniversalCartManager`)
- Aggregates selected items across disparate merchants into a single unified session:
  - Maintains real-time synchronization of variant availability, pricing changes, and stock depletion.
  - Automatically merges carts across user devices, desktop sessions, and mobile chat interfaces.
  - Coordinates multi-store staging before triggering one-tap or sequential batch checkout.

### 2. Dynamic Price-Drop & Flash Deal Radar (`PriceDropInventoryRadar`)
- Monitors catalog endpoints, price feeds, and stock updates in the background:
  - Tracks historical price volatility curves to detect authentic discounts versus artificial markups.
  - Alerts users instantly on paired mobile messengers when target items reach user-defined price thresholds.
  - Reserves items or stages instant checkout authorizations during limited-quantity restocks.

### 3. Multi-Retailer Knapsack & Shipping Optimizer (`MultiRetailerBundleOptimizer`)
- Solves combinatorial fulfillment economics across merchant carts:
  - Determines whether bundling items at a single retailer beats purchasing from separate merchants after accounting for shipping fees and taxes.
  - Identifies lightweight cart "fillers" when adding a small needed accessory triggers free shipping and lowers overall outlay.
  - Groups delivery schedules to minimize carbon footprint and package arrival sprawl.

### 4. Post-Purchase Price Match Arbitrageur (`PostPurchasePriceMatchArbitrageur`)
- Recovers uncollected savings after the transaction:
  - Archives order receipts and identifies merchant price-protection policies (e.g., Target 14-day match, Best Buy price guarantee, Nordstrom adjustments).
  - Listens for price drops on identical SKUs during the eligibility window.
  - Dispatches automated customer service price-match emails or PAP adjustment tokens on the user's behalf.

---

## Standard Federated Universal Cart Schema

```json
{
  "protocol": "zencart-universal/v1.0",
  "cart_id": "cart_fed_881903",
  "currency": "USD",
  "status": "active_monitoring",
  "items": [
    {
      "item_id": "item_01",
      "sku": "PAT-R1-AIR-CREW-BLK-M",
      "product_name": "Patagonia R1 Air Crew - Black - Medium",
      "merchant": {
        "name": "Patagonia",
        "domain": "patagonia.com",
        "free_shipping_threshold": 99.00
      },
      "unit_price": 139.00,
      "quantity": 1,
      "price_alert_threshold": 110.00,
      "in_stock": true
    },
    {
      "item_id": "item_02",
      "sku": "ARC-ATOM-HOODY-NVY-M",
      "product_name": "Arc'teryx Atom Heavyweight Hoody",
      "merchant": {
        "name": "REI Co-op",
        "domain": "rei.com",
        "free_shipping_threshold": 60.00
      },
      "unit_price": 350.00,
      "quantity": 1,
      "price_alert_threshold": 280.00,
      "in_stock": true
    }
  ],
  "financial_summary": {
    "total_merchandise_subtotal": 489.00,
    "projected_shipping_cost": 0.00,
    "projected_tax": 40.34,
    "combined_landed_estimate": 529.34,
    "active_promotions_applied": ["REI-MEMBERSHIP-10"]
  },
  "post_purchase_arbitrage_targets": [
    {
      "order_id": "ORD-2026-99120",
      "merchant": "patagonia.com",
      "purchased_price": 159.00,
      "protection_window_days": 14,
      "expiration_date": "2026-10-25T00:00:00Z",
      "current_market_price": 139.00,
      "refundable_delta": 20.00,
      "claim_status": "ready_to_dispatch"
    }
  ]
}
```

---

## Operational Guidelines

1. **Explicit Pre-Checkout Confirmation**: Never dispatch automated multi-store checkout without affirmative user consent on paired WhatsApp/Telegram channels.
2. **Real-Time Stock Re-Verification**: Re-query merchant inventory within 60 seconds before executing any order to eliminate out-of-stock payment holds.
3. **Local Encrypted Ledger**: Secure all cart state, receipt tokens, and tracking links within the local OpenClaw encrypted vault.
4. **Zero-Spam Threshold Filter**: Restrict price-drop notifications to meaningful discounts exceeding either 10% or $15.00 unless explicitly requested.
