---
name: zenpoint-ai-skill
description: Autonomous Credit Card Category Multiplier, Loyalty Rewards Arbitrage & Transfer Partner Points Optimization Engine distilled from Point.me and Kudos. Analyzes merchant MCC codes, auto-activates card-linked cashback offers, computes Cents-Per-Point (CPP) redemption arbitrage against cash prices, and routes transactions to maximize economic yield across credit cards, airline miles, and hotel points.
version: 1.0.0
license: Apache-2.0
metadata:
  category: finance
  author: Alpha-Park
  tags:
    - credit-card-rewards
    - loyalty-points-arbitrage
    - point-me-paradigm
    - kudos-multiplier
    - transfer-partner-optimizer
    - merchant-mcc-routing
    - cents-per-point-valuation
---

# ZenPoint (禅铢) — Autonomous Loyalty Rewards Arbitrage & Card Multiplier Engine

## Overview

Modern consumers maintain an average of 3 to 7 credit cards, airline frequent flyer accounts, and hotel loyalty memberships, yet leave over \$100 Billion in unclaimed rewards on the table each year. Consumers routinely pay with the wrong card (earning 1x points instead of 4x or 5x), fail to activate high-value merchant-linked cashback offers (Amex Offers, Chase Offers, Rakuten), and redeem points at poor conversion rates (cashing out at 0.6¢ per point instead of transferring to airline partners at 2.5¢+).

**ZenPoint (禅铢)**, distilled from the breakthrough architectures of **Point.me (`point.me`)** and **Kudos (`joinkudos.com`)**, brings automated mathematical yield optimization to autonomous agent commerce ("铢两悉称，积铢累寸；点化万方，点石成金").

ZenPoint intercepts buyer agent checkout proposals, identifies the merchant's exact Category Code (MCC), auto-clips card-linked cashback promotions, computes live Cents-Per-Point (CPP) arbitrage between cash and award redemptions, and dynamically routes payment execution to maximize net economic yield.

```
       ┌────────────────────────────────────────────────────────┐
       │         Target Transaction Checkout Proposed           │
       │    e.g. $420 hotel booking or $180 grocery checkout    │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │        Merchant Category Code (MCC) & Merchant Radar   │
       │  • Auto-classifies MCC (Dining, Lodging, Grocery, Air) │
       │  • Detects payment network surcharges & foreign fees   │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │     Card-Linked Offer (CLO) & Affiliate Auto-Clip     │
       │  • Amex Offers / Chase Offers / Citi Merchant Offers   │
       │  • Affiliate cashback stacks (Rakuten, Capital One)    │
       │  • Auto-activates qualifying promos in <100ms          │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │     Cents-Per-Point (CPP) & Transfer Partner Engine    │
       │  • Live award seat / hotel room inventory search       │
       │  • Arbitrage equation: CPP = Cash Landed / Award Points│
       │  • Compares bank transfer partners (Chase/Amex -> FF)  │
       │  • Transfer bonus multiplier (+20% - +30% promos)      │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │           Optimal Payment Instrument Dispatch          │
       │  • If CPP >= Hurdle (e.g. 1.8¢) -> Redeem miles/points │
       │  • Else -> Pay via highest multiplier cashback card    │
       │  • Injects payment token into Google AP2 PaymentMandate│
       └────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. Merchant MCC & Dynamic Category Multiplier Routing
- **Pre-Payment MCC Identification**: Resolves the merchant's four-digit ISO 18245 Merchant Category Code (e.g., MCC 5411 for Supermarkets, MCC 5812 for Restaurants, MCC 3000-3350 for Airlines) prior to payment submission.
- **Wallet Multiplier Optimizer**: Scans user credit cards registered in the local Secure Enclave (Chase Sapphire Reserve, Amex Gold, Capital One Venture X, Citi Custom Cash, Bilt) to select the card yielding the highest effective return (e.g., 4x Amex MR points = 8% effective yield vs 1.5% flat cash back).

### 2. Autonomous Card-Linked Offer (CLO) Stacking
- **Auto-Clip Offers**: Intercepts active merchant promotions across American Express Offers, Chase Offers, BankAmeriDeals, and Citi Merchant Offers, auto-enrolling the transaction before terminal authorization.
- **Triple-Stack Optimization**: Combines category card multipliers (e.g. 3x on travel) with direct card-linked cash credits (e.g. "\$50 off \$250") and browser affiliate cashback rails (e.g. +4% Rakuten cash back), slashing net landed costs by 15% to 30%.

### 3. Points vs. Cash Valuation Arbitrage (Cents-Per-Point Engine)
- **Mathematical Redemption Hurdle Rate**: Evaluates whether an itinerary or high-consideration purchase should be settled in cash or redeemed via points:
  $$\text{CPP} = \frac{\text{Cash Price} - \text{Award Taxes/Fees}}{\text{Required Points/Miles}} \times 100$$
- **Hurdle Enforcement**: Strict policy locks prevent redeeming high-value currencies below baseline hurdles (e.g., Chase Ultimate Rewards $< 1.5\text{¢}$, Amex Membership Rewards $< 1.6\text{¢}$, Bilt $< 1.8\text{¢}$). If CPP falls below the threshold, ZenPoint forces cash checkout on the highest-earning card.

### 4. Multi-Rail Transfer Partner Route Compiler
- **30+ Loyalty Program Bridges**: Models transfer ratios and transfer times across major bank currencies to airline alliances (Star Alliance, Oneworld, SkyTeam) and hotel chains (World of Hyatt, Marriott Bonvoy).
- **Dynamic Transfer Bonus Tracking**: Capitalizes on limited-time promotional transfer bonuses (e.g., "+30% bonus transferring Chase to Virgin Atlantic" or "+25% Amex to Air France/KLM Flying Blue"), generating award itineraries with minimal point burn.

### 5. Pre-Flight Yield Transparency in Messaging
- **One-Tap Yield Summary**: Appends an executive rewards breakdown to the interactive WhatsApp/Telegram checkout card:
  *"Optimal Payment: Amex Gold (4x Dining = 720 MR points worth \$14.40) + Stacked \$15 Amex Offer clipped. Net Effective Savings: \$29.40 (16.3% yield)."*

---

## Tool Definitions (MCP Schema)

```json
{
  "tools": [
    {
      "name": "evaluate_optimal_payment_instrument",
      "description": "Analyzes merchant MCC and cart amount against user credit card portfolio and active promotions to select the highest-yield payment method.",
      "parameters": {
        "type": "object",
        "properties": {
          "merchant_domain": { "type": "string" },
          "merchant_name": { "type": "string" },
          "transaction_amount_usd": { "type": "number" },
          "currency": { "type": "string", "default": "USD" },
          "category_hint": { "type": "string", "enum": ["dining", "grocery", "airline", "lodging", "transit", "general_retail"] }
        },
        "required": ["merchant_name", "transaction_amount_usd"]
      }
    },
    {
      "name": "arbitrage_points_vs_cash",
      "description": "Calculates Cents-Per-Point (CPP) return across available airline/hotel award programs and decides between cash checkout vs. award redemption.",
      "parameters": {
        "type": "object",
        "properties": {
          "cash_price_usd": { "type": "number" },
          "award_programs": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "program_name": { "type": "string" },
                "required_points": { "type": "integer" },
                "taxes_fees_usd": { "type": "number" },
                "transfer_partner_bonus_pct": { "type": "number", "default": 0 }
              },
              "required": ["program_name", "required_points", "taxes_fees_usd"]
            }
          },
          "min_acceptable_cpp": { "type": "number", "default": 1.6 }
        },
        "required": ["cash_price_usd", "award_programs"]
      }
    },
    {
      "name": "auto_clip_merchant_offers",
      "description": "Scans and activates matching card-linked offers (Amex Offers, Chase Offers, Rakuten) for the target merchant.",
      "parameters": {
        "type": "object",
        "properties": {
          "merchant_domain": { "type": "string" },
          "target_card_last4": { "type": "string" }
        },
        "required": ["merchant_domain"]
      }
    }
  ]
}
```

---

## Operational Guardrails & HITL Safety Gates

1. **Points Devaluation Guardrail**: ZenPoint terminates points transfer execution if the target loyalty program experiences unannounced award chart devaluation or phantom seat availability, ensuring points are never trapped in a non-refundable airline program.
2. **Foreign Transaction Fee (FTX) Blacklist**: For international merchant transactions, ZenPoint automatically filters out any payment card that charges foreign transaction fees (typically 3%), routing only to zero-FTX cards (e.g. Chase Sapphire, Capital One Venture).
3. **Credit Utilization Sentinel**: If charging a high-ticket item to a specific card pushes that card's utilization above 30% of its credit limit, ZenPoint alerts the user to avoid credit score penalties and recommends split billing or alternative instruments.
