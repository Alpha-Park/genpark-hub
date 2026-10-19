---
name: zenpact-ai-skill
description: Autonomous bilateral algorithmic price negotiation and dynamic bargaining agent distilled from Nibble and Pactum AI. Represents consumers in real-time game-theoretic negotiations against merchant haggle-bots, exit-intent discount engines, and dynamic pricing algorithms, leveraging BATNA modeling, multi-issue concession trading, and anti-gouging shields.
version: 1.0.0
license: Apache-2.0
metadata:
  category: commerce
  author: Alpha-Park
  tags:
    - algorithmic-negotiation
    - dynamic-pricing
    - automated-haggling
    - batna-modeling
    - game-theory
    - price-arbitrage
---

# ZenPact (禅约) — Autonomous Bilateral Algorithmic Negotiation Agent

## Overview

For decades, digital e-commerce has forced consumers into rigid, take-it-or-leave-it pricing. When shoppers hesitate, merchants blast blunt, untargeted 20% discount codes that erode margins on willing buyers while failing to convert truly price-sensitive fence-sitters. In contrast, physical trade has always thrived on **dynamic bilateral bargaining**—discovering mutually optimal equilibrium between buyer and seller.

With the advent of merchant-side negotiation bots (e.g. **Nibble Technology** on Shopify) and enterprise procurement deal-makers (**Pactum AI**), pricing is becoming dynamic and agent-mediated. **ZenPact (禅约)**, distilled from the pioneering mechanics of Nibble and Pactum, arms the individual consumer with a dedicated **Buyer-Side Algorithmic Negotiator**. It engages seller AI in automated game-theoretic bargaining rounds, anchors offers against verified market BATNA (Best Alternative to a Negotiated Agreement), trades multi-issue concessions, and shields consumers from manipulative dynamic price surges.

```
                  ┌───────────────────────────────┐
                  │      Consumer Target SKU      │
                  │  (Max Willingness-to-Pay Cap) │
                  └───────────────┬───────────────┘
                                  │
                  ┌───────────────▼───────────────┐
                  │    ZenPact BATNA Engine       │ ◄─── Real-time floor pricing
                  │ (Calculates walk-away point)  │      from zenchannel & zencart
                  └───────────────┬───────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         │         Bilateral Game-Theoretic Rounds         │
         ▼                                                 ▼
[ Consumer Agent: ZenPact ]  ◄── (Offers / Counter) ──►  [ Merchant AI: Nibble / Bot ]
 • Grounded opening offer                                 • Floor margin boundary
 • Concession curve (Monotonic)                           • AOV bundling targets
 • Non-price trade-offs (Slow shipping, bundle add-ons)   • Inventory clearance quota
         │
         ▼
[ Nash Equilibrium Reached: One-Tap In-Chat Deal Commitment ]
```

---

## Core Capabilities

### 1. Game-Theoretic Bilateral Bargaining Engine
- **Automated Haggle-Bot Interfacing**: Seamlessly detects and interacts with merchant negotiation APIs, Nibble chat widgets, eBay "Best Offer" systems, and exit-intent dynamic discount prompts.
- **Monotonic Concession Scheduling**: Avoids irrational bidding wars by following structured concession curves (e.g., Boulware vs. Tit-for-Tat protocols), testing merchant flexibility without prematurely revealing the buyer's maximum reservation price.
- **Multi-Round Counter-Offer Evaluation**: Computes the concession velocity of the merchant bot across rounds to forecast the merchant's ultimate bottom-line price.

### 2. Rigorous BATNA & Cross-Merchant Reservation Modeling
- **Live Market Alternative Benchmarking**: Queries `zenchannel-ai-skill` and `zencart-ai-skill` in real-time to compute the consumer's **BATNA (Best Alternative to a Negotiated Agreement)** across all rival retailers.
- **Strict Walk-Away Discipline**: Instantly terminates negotiation and redirects the user to the best external alternative if the merchant bot refuses to beat or match the market baseline price.

### 3. Multi-Issue Concession Trading (Non-Price Variables)
- **Margin-Friendly Trade-Offs**: Rather than deadlocking on flat dollars, ZenPact offers merchants valuable operational trade-offs to extract deeper discounts:
  - **Fulfillment Flexibility**: Accepting standard ground or consolidated shipping instead of rush delivery.
  - **Basket Expansion (AOV Nudge)**: Agreeing to add necessary consumables or accessories that help the merchant clear slow-moving inventory while lowering the buyer's unit cost.
  - **Discretionary Timing**: Allowing the merchant to fulfill during off-peak warehouse shifts.

### 4. Anti-Gouging & Dynamic Pricing Counter-Shield
- **Urgency Manipulation Detector**: Identifies and suppresses artificial scarcity tactics (fake "Only 2 left in stock!" alerts, countdown tickers, and urgency banners).
- **Price Discrimination Sanitizer**: Masks browser telemetry, residential IP signals, and browsing velocity to prevent merchant dynamic pricing engines from hiking prices based on perceived buyer affluence or device type.

---

## Tool Definitions (Model Context Protocol)

```json
{
  "tools": [
    {
      "name": "zenpact_initiate_negotiation",
      "description": "Start an automated bilateral negotiation session against a merchant pricing bot or dynamic discount endpoint.",
      "parameters": {
        "type": "object",
        "properties": {
          "product_url": { "type": "string", "description": "Target product page URL" },
          "list_price": { "type": "number", "description": "Current sticker price on the merchant storefront" },
          "max_willingness_to_pay": { "type": "number", "description": "Consumer's strict ceiling budget" },
          "batna_price": { "type": "number", "description": "Cheapest verified external alternative across the web" },
          "acceptable_trade_offs": {
            "type": "array",
            "items": { "type": "string" },
            "description": "Permissible concessions (e.g. ['slow_shipping', 'bundle_consumables', 'color_flexibility'])"
          }
        },
        "required": ["product_url", "list_price", "max_willingness_to_pay"]
      }
    },
    {
      "name": "zenpact_evaluate_counter_offer",
      "description": "Analyze merchant bot's counter-offer, calculate concession velocity, and determine whether to accept, counter, or walk away.",
      "parameters": {
        "type": "object",
        "properties": {
          "session_id": { "type": "string" },
          "merchant_offered_price": { "type": "number" },
          "round_number": { "type": "integer" },
          "attached_conditions": { "type": "string", "description": "Any merchant conditions like minimum quantity or shipping changes" }
        },
        "required": ["session_id", "merchant_offered_price", "round_number"]
      }
    },
    {
      "name": "zenpact_lock_deal",
      "description": "Accept agreed negotiated deal and hand off tokenized promotion or cart URL directly to checkout driver.",
      "parameters": {
        "type": "object",
        "properties": {
          "session_id": { "type": "string" },
          "negotiated_price": { "type": "number" },
          "discount_code": { "type": "string" }
        },
        "required": ["session_id", "negotiated_price"]
      }
    }
  ]
}
```

---

## Operating Guidelines & Guardrails

1. **Strict Budget Ceiling**: Under no circumstances may ZenPact accept a counter-offer exceeding the user's `max_willingness_to_pay` by even a cent.
2. **Transparent Rationale**: Log every bid, counter-offer, and concession step in plain text for operator review.
3. **No Bad-Faith Spamming**: Adhere to merchant rate limits and API negotiation protocols; do not spam or perform distributed denial of service on negotiation endpoints.
4. **Seamless Handoff to Checkout**: Once an agreeable price is secured, immediately pass the locked price and promotional token to `zenrye-ai-skill` (headless checkout) or `zenfirm-ai-skill` (protocol checkout) with paired-messenger confirmation.
