---
name: zengift-ai-skill
description: Autonomous Social Gifting, Relationship Milestone Sentinel & Addressless Privacy-First Gifting Engine distilled from Goody and Giftpack AI. Tracks personal relationship milestones, synthesizes hyper-personalized gift recommendations under dietary/lifestyle safeguards, dispatches zero-address magic gift links via WhatsApp/Telegram/email, and allows recipients to select their delivery address, size/color variant, or equal-value swaps before payment commitment.
version: 1.0.0
license: Apache-2.0
metadata:
  category: commerce
  author: Alpha-Park
  tags:
    - social-gifting
    - addressless-checkout
    - goody-paradigm
    - giftpack-ai
    - relationship-milestone-tracker
    - recipient-swap-protection
    - ap2-staged-authorization
---

# ZenGift (禅礼) — Autonomous Social Gifting & Addressless Gifting Engine

## Overview

Gifting is one of the most psychologically fraught aspects of personal life admin: remembering birthdays, wedding anniversaries, team milestones, and holiday tokens of appreciation requires constant vigilance. Worse, the moment a sender attempts to buy a gift, they hit the **"Address Friction Barrier"**—asking a friend, colleague, or romantic partner for their current physical street address ruins the surprise, feels intrusive, and causes drop-off. Furthermore, mismatched sizing, conflicting dietary habits (sending wine to a non-drinker, chocolate with nuts to an allergic recipient), or duplicate items turn well-intentioned gestures into wasteful social friction.

**ZenGift (禅礼)**, distilled from the breakthrough architectures of **Goody (`ongoody.com`)** and **Giftpack AI (`giftpack.ai`)**, transforms social gifting into an effortless, privacy-preserving personal agent service ("礼尚往来，情至物成；无址自达，不扰寸心").

ZenGift proactively tracks relationship milestones, analyzes recipient personas under strict dietary/lifestyle guardrails, dispatches encrypted "Addressless Magic Gift Cards" across WhatsApp, Telegram, or email, and lets recipients privately enter their delivery address, select exact variants, or swap for equivalent items before charging the sender.

```
       ┌────────────────────────────────────────────────────────┐
       │         Relational Milestone & Calendar Sentinel       │
       │  • Tracks birthdays, anniversaries, team promotions    │
       │  • Proactive triggers (T-14 days & T-7 days notices)   │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │       Recipient Persona & Social Safeguard Filter      │
       │  • Relationship tenure & formality context             │
       │  • Dietary & lifestyle blacklists (alcohol, nuts, wool)│
       │  • Non-cliché catalog curation across 50,000+ SKUs     │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │         Addressless Magic Unwrapping Link Engine       │
       │  • Dispatches zero-address gift link via WhatsApp/SMS  │
       │  • Sender never needs to ask for physical address      │
       │  • Beautiful digital unboxing card with custom note    │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │      Recipient Privacy Terminal & Equal-Value Swap     │
       │  • Recipient enters private street address securely    │
       │  • Recipient chooses exact size, color, scent, or fit  │
       │  • 1-Click silent swap for equal-value catalog items   │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │         Staged AP2 Billing Settlement on Acceptance    │
       │  • Sender card authorized via AP2 PaymentMandate hold  │
       │  • Funds captured ONLY upon recipient acceptance       │
       │  • 14-day auto-dissolution if unclaimed ($0 charged)   │
       └────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. Relational Milestone & Calendar Sentinel
- **Proactive Occasion Anticipation**: Synchronizes with local user calendars and contact metadata to track birthdays, anniversaries, corporate promotions, and holidays.
- **Dual-Horizon Staged Notices**: Alerts the user at $T-14$ days (for custom-made or cross-border items) and $T-7$ days (for local express fulfillment), presenting 3 curated gifting options directly in WhatsApp or Telegram with zero last-minute panic.

### 2. Recipient Persona & Social Safeguard Profiler
- **Contextual Gift Scoring**: Balances relationship intimacy, formality level, and budget bounds (e.g. casual acquaintance \$30–\$50 vs. close family \$100–\$300), preventing under-gifting or socially awkward over-gifting.
- **Anti-Gaffe Lifestyle Shield**: Cross-checks candidate items against known lifestyle constraints:
  - *Sobriety / Health*: Automatically suppresses wine/spirits unless explicit recipient preference is known;
  - *Allergies & Diets*: Flags nut/gluten/dairy components in gourmet foodstuffs;
  - *Dermatological & Fabric*: Flags wool/cashmere irritants if sensitive skin is noted.

### 3. Addressless Magic Link Handoff
- **Zero-Address Barrier Elimination**: Senders never have to ruin the surprise or invade privacy by asking for a home street address.
- **Omni-Channel Link Dispatch**: Delivers a branded, animated digital unwrapping experience via WhatsApp, Telegram, SMS, or Slack, containing a personalized message card from the sender.

### 4. Recipient Privacy Terminal & Equal-Value Swap
- **Sovereign Address Entry**: The recipient inputs their own confidential delivery address and delivery date window without sharing it with the sender.
- **Variant Precision**: The recipient selects their exact apparel size (leveraging `zenfit`), preferred colorway, or custom scent.
- **Silent Equivalent Swap**: If the recipient already owns the item or prefers a different category, they can swap it for any alternative of equal dollar value in 1 tap without notifying the sender, guaranteeing zero gift waste.

### 5. Staged AP2 Billing on Acceptance
- **Tamper-Evident Pre-Authorization**: The sender signs a Google AP2 `PaymentMandate` with a temporary authorization hold.
- **Conditional Capture**: Funds are debited if and only if the recipient unboxes and confirms shipping details. If the recipient does not claim the gift within 14 days, the hold dissolves completely with \$0 charged to the sender.

---

## Tool Definitions (MCP Schema)

```json
{
  "tools": [
    {
      "name": "curate_social_gift_proposals",
      "description": "Recommends 3 curated gift options tailored to recipient persona, relationship context, budget, and lifestyle safeguards.",
      "parameters": {
        "type": "object",
        "properties": {
          "recipient_name": { "type": "string" },
          "occasion": { "type": "string", "enum": ["birthday", "anniversary", "promotion", "thank_you", "holiday", "housewarming"] },
          "relationship_type": { "type": "string", "enum": ["close_friend", "family", "romantic_partner", "colleague", "client"] },
          "budget_usd": { "type": "number" },
          "known_lifestyle_constraints": {
            "type": "array",
            "items": { "type": "string" },
            "description": "e.g., non-drinker, vegan, gluten-free, sensitive-skin"
          }
        },
        "required": ["recipient_name", "occasion", "relationship_type", "budget_usd"]
      }
    },
    {
      "name": "generate_addressless_gift_link",
      "description": "Creates an addressless digital gift link with staged AP2 payment authorization and personalized unboxing card.",
      "parameters": {
        "type": "object",
        "properties": {
          "selected_sku": { "type": "string" },
          "custom_message": { "type": "string" },
          "sender_display_name": { "type": "string" },
          "max_authorized_usd": { "type": "number" },
          "allow_equal_value_swap": { "type": "boolean", "default": true }
        },
        "required": ["selected_sku", "custom_message", "max_authorized_usd"]
      }
    },
    {
      "name": "process_recipient_acceptance",
      "description": "Handles recipient address entry, variant selection, or silent swap, triggering AP2 settlement and merchant fulfillment.",
      "parameters": {
        "type": "object",
        "properties": {
          "gift_token": { "type": "string" },
          "shipping_address": {
            "type": "object",
            "properties": {
              "street": { "type": "string" },
              "city": { "type": "string" },
              "state": { "type": "string" },
              "postal_code": { "type": "string" },
              "country": { "type": "string" }
            },
            "required": ["street", "city", "postal_code", "country"]
          },
          "selected_variant_id": { "type": "string" },
          "swapped_sku": { "type": "string" }
        },
        "required": ["gift_token", "shipping_address"]
      }
    }
  ]
}
```

---

## Operational Guardrails & HITL Safety Gates

1. **Anti-Awkwardness Formality Check**: If the gift proposal for a professional client or corporate colleague exceeds \$100 or contains intimate personal items (e.g. fragrance, luxury jewelry), ZenGift flags the compliance/etiquette risk and suggests corporate-appropriate alternatives (e.g., gourmet espresso beans, artisanal desk goods).
2. **Alcohol Verification Lock**: For any gift containing alcoholic beverages, ZenGift enforces age-gate verification on both the sender authorization mandate and the recipient delivery portal.
3. **14-Day Expiration Auto-Refund**: Unclaimed magic gift links automatically expire after 14 calendar days, fully releasing the pre-authorized credit hold with zero penalty fees.
