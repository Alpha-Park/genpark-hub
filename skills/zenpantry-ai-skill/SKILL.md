---
name: zenpantry-ai-skill
description: Autonomous Domestic Pantry Depletion Modeling, Nutritional Macro Constraint Solver & Zero-Waste Grocery Replenishment Engine distilled from Hungryroot and Jow. Models household kitchen inventory depletion, optimizes weekly meal recipes under strict dietary/allergen constraints, eliminates perishable ingredient waste through cross-recipe amortization, and stages federated 1-click grocery fulfillment across Instacart, Whole Foods, and Kroger.
version: 1.0.0
license: Apache-2.0
metadata:
  category: commerce
  author: Alpha-Park
  tags:
    - pantry-management
    - grocery-replenishment
    - hungryroot-paradigm
    - macro-constraint-solver
    - zero-waste-kitchen
    - federated-fulfillment
    - automated-reordering
---

# ZenPantry (禅仓) — Autonomous Domestic Pantry & Zero-Waste Grocery Replenishment Engine

## Overview

In daily domestic "Life Admin", grocery procurement and household meal planning represent the single highest-frequency, most cognitively draining chore—accounting for over \$800 Billion in annual US consumer spend. Household members spend 2–3 hours every week auditing dwindling fridge items, agonizing over recipes, tossing out spoiled produce (the infamous "cilantro problem"), and navigating fragmented delivery platforms.

**ZenPantry (禅仓)**, distilled from the breakthrough architectures of **Hungryroot (`hungryroot.com`)** and **Jow (`jow.com`)**, transforms reactive grocery shopping into an autonomous, proactive home inventory operating system ("仓廪充盈，食饮有度；万物物尽其用，无耗得宜").

ZenPantry maintains a living digital twin of your kitchen pantry, models consumption depletion curves from past receipts without manual barcode scanning, solves weekly meal planning as a multi-objective linear constraint satisfaction problem, clusters perishable ingredients to slash waste by 60%, and stages a 1-tap WhatsApp/Telegram replenishment card across your preferred grocery delivery services.

```
       ┌────────────────────────────────────────────────────────┐
       │             Digital Twin Pantry State Machine          │
       │  • Auto-ingests e-receipts & delivery order manifests  │
       │  • Consumption velocity modeling (eggs, milk, oats)   │
       │  • Perishable spoilage countdowns (produce, meats)     │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │       Nutritional & Macro Constraint Solver (CSP)      │
       │  • Caloric goals, protein/carb/fat macro distributions │
       │  • Strict allergen blacklist (gluten, peanuts, dairy)  │
       │  • Weeknight prep time bounds (<25 mins, <5 cookware)  │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │       Zero-Waste Cross-Recipe Ingredient Amortizer     │
       │  • Perishable clustering (cilantro, scallions, celery) │
       │  • Multi-day ingredient reuse (tacos -> curry soup)    │
       │  • 60% reduction in discarded domestic food waste      │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │      Federated Grocery Cart Knapsack Fulfillment       │
       │  • Standardized SKU mapping across delivery rails      │
       │  • Knapsack optimizer: free-delivery thresholds ($35+) │
       │  • Allergen-safe semantic substitution sentinel        │
       │    (Instacart / Whole Foods / Kroger / Amazon Fresh)   │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │        Zero-New-Interface Weekly Replenishment Card     │
       │  • Pushes Sunday morning summary to WhatsApp / Telegram│
       │  • 1-Tap confirmation commits checkout via AP2 / Rye   │
       └────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. Digital Twin Pantry Depletion Modeling
- **Zero-Manual-Scan Ingestion**: Automatically parses grocery order confirmations and e-receipts (from `zensierra`, `zencart`, or email webhooks), populating pantry stock levels and initializing decay curves.
- **Consumption Velocity Forecasting**: Learns household depletion rates (e.g., 1 gallon of oat milk every 4.5 days, 1 dozen eggs every 6 days, olive oil every 28 days), accurately predicting replenishment triggers before running dry.

### 2. Multi-Objective Nutritional & Macro Constraint Solver
- **Dietary Target Formulation**: Translates user health objectives (e.g. 140g protein/day, $<40g$ net carbs for keto, low-GI for diabetic health, sodium $<2000mg$) into mathematical bounds.
- **Dynamic Weekly Recipe Scheduling**: Formulates the selection of $K$ weeknight dinners as a linear programming constraint satisfaction problem, optimizing for nutritional compliance, preparation time, and minimal ingredient count.

### 3. Zero-Waste Cross-Recipe Ingredient Amortization
- **Perishable Clustering**: Solves the classic "Cilantro Problem" where single recipes require 2 sprigs of an herb sold only in large bunches. ZenPantry groups recipes across the week (e.g., Mexican bowls on Tuesday, Thai coconut soup on Thursday) to utilize 100% of the purchased perishable bunch before spoiling.
- **Pantry Depletion Priority**: Biases recipe selection toward ingredients already in the pantry nearing their expiration threshold.

### 4. Federated Grocery Cart Knapsack Fulfillment
- **Multi-Merchant Routing**: Resolves recipe ingredient lines into standardized merchant catalog SKUs across Instacart, Whole Foods (Amazon Fresh), Walmart+, and regional supermarkets (Kroger, H-E-B).
- **Knapsack Threshold Optimization**: Bundles items to satisfy merchant free-shipping/delivery minimums (e.g. \$35 or \$50 tiers) while minimizing overall landed costs.
- **Allergen-Safe Substitution Sentinel**: Restricts automated out-of-stock substitutions with semantic safety rules (e.g., never substitute oat milk with almond milk if a tree-nut allergy is flagged in `zenpass`).

### 5. Zero-New-Interface Weekly Replenishment Card
- **Staged HITL Dispatch**: Pushes a concise interactive card to WhatsApp or Telegram on a designated schedule (e.g., Sunday 9:00 AM) detailing the proposed 5-day dinner plan, restocking staples, and exact basket total.
- **One-Tap Execution**: With a single tap or quick reply ("Approved, swap Friday for salmon"), the cart is automatically committed via Google AP2 `PaymentMandate` or resident headless browser checkout.

---

## Tool Definitions (MCP Schema)

```json
{
  "tools": [
    {
      "name": "sync_pantry_inventory",
      "description": "Ingests grocery receipts or order manifests to update current household pantry levels and perishable expiration clocks.",
      "parameters": {
        "type": "object",
        "properties": {
          "order_manifest": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "item_name": { "type": "string" },
                "quantity": { "type": "number" },
                "unit": { "type": "string" },
                "category": { "type": "string", "enum": ["perishable_produce", "perishable_meat_dairy", "staple_dry", "household"] }
              },
              "required": ["item_name", "quantity", "unit", "category"]
            }
          },
          "estimated_consumption_days": { "type": "integer", "default": 7 }
        },
        "required": ["order_manifest"]
      }
    },
    {
      "name": "solve_weekly_meal_and_pantry_plan",
      "description": "Solves multi-objective nutritional constraints and cross-recipe ingredient amortization to generate a weekly dinner plan and minimum-waste grocery list.",
      "parameters": {
        "type": "object",
        "properties": {
          "days_count": { "type": "integer", "default": 5 },
          "servings_per_meal": { "type": "integer", "default": 2 },
          "macro_targets": {
            "type": "object",
            "properties": {
              "min_protein_grams": { "type": "number" },
              "max_net_carbs_grams": { "type": "number" },
              "max_prep_minutes": { "type": "number", "default": 30 }
            }
          },
          "strict_allergen_blacklist": {
            "type": "array",
            "items": { "type": "string" }
          }
        },
        "required": ["days_count", "servings_per_meal"]
      }
    },
    {
      "name": "federate_grocery_cart_fulfillment",
      "description": "Maps ingredient items to merchant-specific SKUs, satisfies free-delivery minimums, and stages the cart across Instacart, Whole Foods, or Kroger.",
      "parameters": {
        "type": "object",
        "properties": {
          "ingredient_list": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "ingredient": { "type": "string" },
                "quantity": { "type": "number" },
                "unit": { "type": "string" }
              },
              "required": ["ingredient", "quantity", "unit"]
            }
          },
          "preferred_merchants": {
            "type": "array",
            "items": { "type": "string" }
          },
          "target_delivery_window": { "type": "string" }
        },
        "required": ["ingredient_list"]
      }
    },
    {
      "name": "dispatch_staged_replenishment_card",
      "description": "Compiles and sends an interactive Human-In-The-Loop approval card to the user's messaging client with one-tap checkout.",
      "parameters": {
        "type": "object",
        "properties": {
          "channel": { "type": "string", "enum": ["whatsapp", "telegram", "slack", "imessage"] },
          "meal_summary": { "type": "string" },
          "restock_items": { "type": "array", "items": { "type": "string" } },
          "total_landed_cost_usd": { "type": "number" },
          "delivery_time": { "type": "string" }
        },
        "required": ["channel", "meal_summary", "total_landed_cost_usd"]
      }
    }
  ]
}
```

---

## Operational Guardrails & HITL Safety Gates

1. **Strict Allergen Veto Circuit Breaker**: If any recommended recipe or automated substitution SKU contains ingredients flagged in the user's allergen blacklist (e.g. peanut traces, sesame, shellfish, gluten), ZenPantry immediately purges the candidate item and halts execution before cart dispatch.
2. **Pantry Duplication Suppression**: If the digital twin inventory indicates that a non-perishable pantry staple (e.g. olive oil, salt, soy sauce) remains above 30% capacity, ZenPantry suppresses re-ordering, preventing duplicate domestic clutter.
3. **Budget Ceiling Gatekeeper**: If the total landed grocery basket exceeds the household's authorized weekly grocery budget by more than 5%, ZenPantry flags the price variance and suggests high-cost item swaps (e.g., wild salmon to organic chicken breast) prior to staged checkout approval.
