---
name: personal-decision-buyer-skill
description: Autonomous personal decision & shopping copilot distilled from Meta Muse and Instinct. Executes cross-platform product research, review sentiment auditing, Pareto trade-off scoring, cart staging, and tokenized checkout via local sandboxed browsers.
version: 1.0.0
license: MIT
---

# personal-decision-buyer-skill

## Overview
`personal-decision-buyer-skill` is an advanced personal agent skill for GenPark & OpenClaw. Distilled from the architectural breakthroughs of **Meta Muse** (Secure VM execution isolation & auth injection) and **Instinct** (Reflexion self-correction loops & zero-new-interface messaging), this skill acts as your private buyer and decision proxy across the open web.

Unlike cloud-locked agents that leak credentials or get blocked by e-commerce platforms (such as Amazon's ban on Muse), this skill operates **local-first** through OpenClaw, utilizing your local resident browser sessions, OS keychain-backed credentials, and strict Human-in-the-Loop (HITL) authorization gates.

---

## Core Capabilities

### 1. Intent & Preference Profiler (`IntentProfiler`)
- Deconstructs complex, ambiguous user prompts into actionable search queries and constraint vectors.
- Automatically factors in long-term persistent user profile (e.g., shoe/clothing sizes, dietary intolerances, preferred brands, maximum budget boundaries).
- Identifies hard requirements vs. soft preferences (e.g., "Must deliver by Friday", "Prefer white/minimalist finish").

### 2. Multi-Source Fact Grounding & Sentiment Scraper (`ReviewAuditor`)
- Navigates target e-commerce platforms (Amazon, JD, Taobao, Best Buy, Shopify stores, etc.) via local headless/headed Chromium.
- Scrapes third-party discussion boards (Reddit r/BuyItForLife, Zhihu, Bilibili, specialized forums) to extract authentic user consensus.
- Filters out paid/incentivized reviews by running linguistic anti-bot/sponsored review detection heuristics.

### 3. MAUT Decision & Trade-Off Matrix Engine (`DecisionMatrix`)
- Ranks candidates using Multi-Attribute Utility Theory (MAUT) across 4 weighted vectors:
  - **Price / Total Landed Cost** (Item price + shipping + tax - coupon discounts)
  - **Authenticity & Quality Score** (Material, failure rate reports, verified purchase sentiment)
  - **Delivery Speed & Certainty** (Warehouse proximity, estimated arrival timestamp)
  - **After-Sales & Return Policy** (Return window, restocking fees, warranty coverage)
- Outputs a transparent, human-readable Pareto-optimal recommendation card.

### 4. Reflexion Self-Correction Loop (`ReflexionEvaluator`)
- Inspired by Noah Shinn's Reflexion paradigm: if a target product is out of stock, hidden shipping charges breach the budget limit, or cart addition fails, the agent generates a reflective critique in working memory:
  ```json
  {
    "reflection": "Selected color 'Space Gray' is out of stock on Best Buy. Attempting 'Silver' or checking B&H Photo inventory.",
    "action_retry": "navigate_alternative_retailer"
  }
  ```
- Continuously iterates until viable options meeting user thresholds are verified.

### 5. Staged Cart Stager & Sentinel HITL Gate (`CartStager`)
- Navigates to the winning merchant, selects the exact SKU/configuration, and stages the item in the cart.
- Stops strictly before the final "Place Order" button.
- Generates a rich interactive action payload dispatched to the user's messaging channel (WhatsApp, Telegram, or OpenClaw Web UI).
- Requires explicit user signature/tap before triggering the local `authd` credential daemon to finalize payment.

### 6. Resident Session & Anti-Bot Resilience (`ResidentSessionEngine`)
- Solves the fatal vulnerability of Meta Muse (cloud datacenter IP blocking).
- Binds to the user's local, resident browser cookies and residential IP address, preventing bot-detection captchas and merchant IP blocks.

---

## Standard Decision Matrix Payload Schema

```json
{
  "$schema": "https://genpark.openclaw.ai/schemas/decision-matrix.json",
  "task_id": "task_buy_anc_headphones_2026",
  "user_intent": {
    "query": "Over-ear noise-canceling headphones under $300 for long flights",
    "hard_constraints": { "budget_max_usd": 300, "battery_life_hours_min": 25 },
    "soft_preferences": { "comfort_clamping_force": "low", "brand_trust": "high" }
  },
  "candidates": [
    {
      "sku": "Sony WH-1000XM5",
      "platform": "Best Buy",
      "landed_cost": 279.99,
      "original_price": 399.99,
      "coupon_applied": "TECHSAVE20",
      "delivery_eta": "2026-09-24",
      "sentiment_score": 0.88,
      "pros": ["Best-in-class ANC", "Lightweight design"],
      "cons": ["Does not fold completely compact"],
      "utility_rank": 1
    },
    {
      "sku": "Bose QuietComfort Headphones",
      "platform": "Amazon",
      "landed_cost": 249.00,
      "original_price": 349.00,
      "delivery_eta": "2026-09-23",
      "sentiment_score": 0.86,
      "pros": ["Superior headband cushion comfort", "Physical buttons"],
      "cons": ["Slightly weaker high-frequency noise reduction"],
      "utility_rank": 2
    }
  ],
  "recommendation_summary": "Sony WH-1000XM5 on Best Buy provides the highest overall value at $279.99 after automatic coupon stacking. Bose QC is a strong alternative if headband comfort is the top priority.",
  "status": "AWAITING_USER_APPROVAL"
}
```

---

## Usage Guide & Workflow

When invoking this skill within an OpenClaw or GenPark agent session:

1. **Initialize Session & Ingest User Request**:
   - Receive prompt via WhatsApp, Telegram, or Web UI (e.g., *"Find me the best espresso machine for beginners under $500, check Reddit recommendations, and put it in my cart"*).
2. **Execute Research Phase**:
   - Launch sandboxed browser instance via `openclaw run-browser-use`.
   - Query consumer databases, Reddit threads, and retail prices.
3. **Synthesize Trade-off Matrix**:
   - Compute MAUT scores and compile comparison card with top 2-3 verified candidates.
4. **Stage Cart & Present HITL Card**:
   - Add top-ranked item to cart on merchant website.
   - Send Telegram/WhatsApp notification with image, price, and `[Approve Purchase]` / `[Adjust Options]` buttons.
5. **Finalize Checkout**:
   - Upon explicit user consent (`YES` or button click), inject payment token via Local Vault and confirm receipt.
6. **Store Reflection**:
   - Save purchase outcome and preference feedback into local long-term memory (`~/.openclaw/memory/preferences.json`).
