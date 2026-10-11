---
name: zenprocure-ai-skill
description: Dedicated Zero-Ad Curation and Native Universal Checkout Procurement Agent for GenPark & OpenClaw. Distilled from dedicated commerce agents to solve analysis paralysis with radical anti-sponsor neutrality and headless single-tap checkout.
version: 1.0.0
license: MIT
---

# zenprocure-ai-skill

## Overview
`zenprocure-ai-skill` (ZenProcure) is a dedicated commerce procurement skill for GenPark & OpenClaw. Distilled from the landmark **Dedicated Commerce Agent** archetype that emerged in 2026, ZenProcure addresses two of modern e-commerce's greatest frustrations: **analysis paralysis** and **ad-saturated recommendations**.

While general-purpose assistants provide sprawling lists of search results influenced by commercial affiliate ties, ZenProcure operates on strict **0% Ad Neutrality** and Kyoto minimalism:
- **Radical Anti-Sponsorship Filtering**: Ruthlessly eliminates sponsored listings, paid influencer endorsements, and search-ad bias.
- **Curated Triad Delivery**: Synthesizes dozens of retailers and reviews down to exactly 2-3 uncompromising recommendations.
- **Universal Native Headless Checkout**: Finalizes purchases directly inside the active messaging conversation (WhatsApp, Telegram, or OpenClaw UI) without external redirects or redundant account signups.
- **Post-Purchase Price-Drop Guardian**: Continuously tracks item prices post-purchase and automatically files price-match refund claims during the merchant's return window.

---

## Core Capabilities

### 1. Zero-Ad & Anti-Sponsorship Filter (`AntiAdAuditor`)
- Detects and discards sponsored search placements, affiliate kickback boosts, and incentivized reviewer badges.
- Cross-references independent technical tear-downs, verified buyer failure rates, and longevity records (e.g., Reddit r/BuyItForLife).
- Evaluates real product durability versus marketing hype.

### 2. Triad Curation & Paralysis Breaker (`CuratedTriadEngine`)
- Replaces overwhelming multi-page product grids with an exact 3-option decision card:
  - **Option 1: The Benchmark** (Best overall value, durability, and consensus).
  - **Option 2: The Pragmatist** (Best budget-to-performance ratio without critical compromises).
  - **Option 3: The Enthusiast** (Premium/audiophile/professional-grade pick with diminishing returns highlighted).
- Explains transparent trade-offs in 3 concise bullet points per candidate.

### 3. Universal Native Headless Checkout (`NativeCheckoutRail`)
- Connects with `zenbridge-ai-skill` (for PAP merchants) and `LocalVault` (for local payment credentials).
- Enables 1-tap checkout directly within WhatsApp or Telegram.
- Eliminates external page redirects, captcha verifications, and repetitive billing address entries.

### 4. Price-Drop & Return Policy Guardian (`PostPurchaseGuardian`)
- Monitors merchant price fluctuations daily after order placement.
- When a price drops within the merchant's price-guarantee window (e.g. Best Buy 14-day, Amazon price adjustment):
  - Automatically drafts or submits a price-match refund request.
  - Credits the difference back to the user's card.
- Coordinates hassle-free returns by generating instant QR return codes and courier pickups.

---

## Standard Curated Procurement Schema

```json
{
  "$schema": "https://genpark.openclaw.ai/schemas/zenprocure-curation.json",
  "procurement_id": "proc_espresso_machine_20261011",
  "intent": "Entry-level semi-automatic espresso machine under $500",
  "ad_free_guarantee": true,
  "curated_triad": [
    {
      "badge": "THE BENCHMARK",
      "model": "Breville Bambino Plus",
      "best_merchant": "Best Buy",
      "net_landed_price": 399.95,
      "why_chosen": "3-second ThermoJet heat up, auto-milking wand, metal build consensus on CoffeeGeek.",
      "trade_off": "54mm portafilter rather than commercial 58mm."
    },
    {
      "badge": "THE PRAGMATIST",
      "model": "De'Longhi Dedica Deluxe",
      "best_merchant": "Walmart",
      "net_landed_price": 229.00,
      "why_chosen": "Ultra-compact footprint, solid 15-bar pump, easily modded with bottomless portafilter.",
      "trade_off": "Manual steam wand requires barista practice."
    },
    {
      "badge": "THE ENTHUSIAST",
      "model": "Gaggia Classic Pro EVO",
      "best_merchant": "Whole Latte Love (via PAP)",
      "net_landed_price": 499.00,
      "why_chosen": "Commercial 58mm brass portafilter, 3-way solenoid valve, 10+ year repairability.",
      "trade_off": "Longer warm-up time, lacks PID temperature stability out of box."
    }
  ],
  "native_checkout_action": {
    "supported": true,
    "method": "UNIVERSAL_IN_CHAT_TAP",
    "status": "READY_FOR_ONE_TAP_AUTHORIZATION"
  }
}
```

---

## Usage Guide & Workflow

1. **Procurement Prompt**:
   - Send prompt via WhatsApp/Telegram: *"Find me the best espresso machine under $500, zero ads, give me top picks and let me buy with one tap."*
2. **Anti-Ad Scraping & Curation**:
   - ZenProcure audits listings across 6 retail platforms and filters out sponsored placements.
   - Computes Triad (Benchmark, Pragmatist, Enthusiast).
3. **Interactive Decision Card**:
   - Pushes interactive selection card to messaging app with buttons: `[Buy Breville $399]` `[Buy De'Longhi $229]` `[Buy Gaggia $499]`.
4. **Native Universal Checkout**:
   - User taps selection; ZenProcure coordinates with `zenbridge-ai-skill` and local OS keychain to execute order.
   - Pushes receipt and tracking number directly in chat.
5. **Post-Purchase Monitoring**:
   - Automatically tracks delivery and monitors price drops for 14-30 days to claim refunds.
