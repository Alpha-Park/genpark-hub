---
name: zenchoice-ai-skill
description: Autonomous personal decision & shopping copilot for GenPark & OpenClaw. Executes cross-platform product research, review sentiment auditing, MAUT trade-off scoring, cart staging, and tokenized checkout via local sandboxed browsers.
version: 1.0.0
license: MIT
---

# zenchoice-ai-skill

## Overview
`zenchoice-ai-skill` (ZenChoice) is the flagship personal decision and shopping copilot for GenPark & OpenClaw. Designed with the Kyoto minimalist aesthetic of clarity and restraint, it liberates users from the exhaustion of online shopping friction, aggressive ad-tracking, and deceptive price discrimination.

Operating strictly **local-first** through OpenClaw (`127.0.0.1:18789`), ZenChoice bridges natural messaging (WhatsApp, Telegram, Slack, iMessage) with sandboxed browser computer-use. It combines:
- **Zero-UI Accessibility**: Users trigger actions and review decisions without learning new applications.
- **Reflexion Self-Correction**: Continuously evaluates alternative retailers, deals, and inventory states.
- **Resident Session Reliability**: Bypasses merchant anti-bot bans by operating within the user's authentic local browser context.
- **Sentinel HITL Gate**: Enforces local OS keychain protection and strict two-stage human authorization before any purchase commitment.

---

## Core Capabilities

### 1. Intent & Preference Profiler (`IntentProfiler`)
- Extracts explicit search targets and implicit lifestyle constraints from natural language commands.
- Leverages local persistent profile memory (e.g., shoe/clothing sizes, dietary restrictions, preferred brands, budget ceilings).
- Separates hard boundaries (e.g., "Must arrive before Thursday") from soft preferences (e.g., "Prefers brushed aluminum finish").

### 2. Multi-Source Fact Grounding & Sentiment Scraper (`ReviewAuditor`)
- Navigates target retail platforms (Amazon, JD, Taobao, Best Buy, Shopify storefronts) via local headless or headed Chromium instances.
- Scrapes independent consumer forums (Reddit r/BuyItForLife, Zhihu, specialized tech review boards).
- Filters out sponsored, astroturfed, and incentivized reviews through automated linguistic bias detection.

### 3. MAUT Decision & Trade-Off Matrix Engine (`DecisionMatrix`)
- Scores and ranks options using Multi-Attribute Utility Theory (MAUT) across 4 weighted vectors:
  - **Landed Cost**: Base price + shipping + taxes - verified coupon stacking.
  - **Authenticity & Build Quality**: Failure rate sentiment, warranty terms, verified buyer ratings.
  - **Delivery Certainty**: Real-time stock status, warehouse proximity, estimated arrival dates.
  - **Return & Refund Policy**: Return window duration, restocking fee exemptions, ease of return.
- Generates transparent, human-readable Pareto-optimal recommendation cards.

### 4. Reflexion Self-Correction Loop (`ReflexionEvaluator`)
- When encountering out-of-stock items, hidden delivery surcharges, or cart errors, the agent generates an internal reflection:
  ```json
  {
    "reflection": "Selected colorway 'Charcoal' out of stock on primary retailer. Checking secondary authorized seller with verified price-match.",
    "action_retry": "navigate_secondary_vendor"
  }
  ```
- Autonomously pivots to alternate configurations without stalling.

### 5. Staged Cart Stager & Sentinel HITL Gate (`CartStager`)
- Navigates to the selected retailer, chooses the exact SKU, and stages the item into the shopping cart.
- Halts strictly prior to final order submission.
- Emits an interactive decision payload to the user's active messenger (WhatsApp or Telegram) containing the item image, net cost, and an `[Approve Purchase]` action.
- Only triggers the local hardware-backed vault (`LocalVault`) to complete tokenized checkout after explicit user authorization.

### 6. Resident Session & Anti-Bot Resilience (`ResidentSessionEngine`)
- Runs through the user's local residential internet connection and established browser profile.
- Completely avoids the data center IP blocking that halts cloud-hosted commercial scrapers.

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
      "pros": ["Superior headband cushion comfort", "Physical tactile buttons"],
      "cons": ["Slightly weaker high-frequency noise reduction"],
      "utility_rank": 2
    }
  ],
  "recommendation_summary": "Sony WH-1000XM5 on Best Buy provides the highest overall value at $279.99 after automatic coupon stacking. Bose QC is a strong alternative if headband comfort is your top priority.",
  "status": "AWAITING_USER_APPROVAL"
}
```

---

## Usage Guide & Workflow

1. **Initiate Request via Messenger**:
   - Send natural prompt via WhatsApp or Telegram (e.g., *"Find me the best espresso machine for beginners under $500, check Reddit recommendations, and stage it in my cart"*).
2. **Execute Research & Sentiment Audit**:
   - Agent triggers sandboxed browser via `openclaw run-skill --name "zenchoice-ai-skill"`.
   - Gathers live pricing, discounts, and real community feedback.
3. **Synthesize Decision Matrix**:
   - Calculates MAUT weighted scores and compiles the Pareto recommendation card.
4. **Stage Cart & Push HITL Notification**:
   - Stages product into cart on merchant website.
   - Pushes decision card to WhatsApp/Telegram with `[Approve $X]` / `[Adjust Options]` buttons.
5. **Secure Checkout**:
   - Upon user tap or reply (`YES`), injects credentials locally via Local Vault and confirms receipt.
6. **Local Long-Term Learning**:
   - Logs verified outcome to local preference storage (`~/.openclaw/memory/preferences.json`).
