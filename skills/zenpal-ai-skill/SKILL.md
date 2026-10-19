---
name: zenpal-ai-skill
description: Dedicated Marketplace Sales Agent, Virtual Cursor Co-Pilot & Bilateral Collector Negotiator for GenPark & OpenClaw. Distilled from Palisade (YC S26 / palisade) to transform complex, non-commodity marketplaces (collectibles, trading cards, vintage apparel, fine art, niche rentals) with in-browser cursor navigation, cross-session collector memory, and autonomous offer/counter-offer negotiation.
version: 1.0.0
license: MIT
---

# zenpal-ai-skill

## Overview
`zenpal-ai-skill` (ZenPal / 禅伴) is the dedicated marketplace sales agent and bilateral collector negotiation co-pilot for GenPark & OpenClaw. Distilled from **Palisade's (YC S26 / Jonathan Salama) AI-native marketplace sales engine**, ZenPal revolutionizes high-consideration, non-commodity e-commerce (such as graded trading cards, vintage luxury, fine musical instruments, rare art, and curated rentals) by eliminating the frustrating friction of **static search bars, rigid filters, and detached browsing**.

In complex passion marketplaces, items are rarely standardized commodities:
- A Pokémon card's value fluctuates dramatically based on microscopic centering, corner whitening, or PSA certification serials;
- A vintage Gibson guitar or Rolex watch requires evaluating replacement parts, finish checking, and historical provenance;
- High-ticket transactions almost always involve bilateral negotiation—bids, counter-offers, reserve thresholds, and time-sensitive concessions.

Traditional search engines and recommendation widgets leave buyers completely unassisted. ZenPal acts as the collector's dedicated virtual boutique curator:
- **Autonomous Virtual Cursor Co-Pilot (`VirtualCursorCoPilot`)**: Renders a dedicated agent cursor alongside the visitor in the browser window, visually pointing out microscopic condition flaws, highlighting certification serial numbers, and leading the user through multi-step inspection galleries.
- **Persistent Collector Memory & Portfolio Tracking (`PersistentCollectorMemory`)**: Retains long-term cross-session memory of the collector's existing portfolio, specific condition tolerances (e.g. "only accepts PSA 9+ with 60/40 centering"), past rejected bids, and budget ceilings.
- **Bilateral Offer & Reserve Negotiation Engine (`BilateralNegotiationEngine`)**: Analyzes historical comparable sales (comps) across secondary exchanges to formulate optimal opening offers and evaluate seller counter-proposals in real time.
- **Omnichannel Concierge Follow-Up**: Monitors listings after the session ends, proactively alerting the collector via WhatsApp or Telegram the second a seller lowers their reserve price or a grail item appears.

---

## Core Capabilities

### 1. In-Browser Virtual Cursor Co-Pilot (`VirtualCursorCoPilot`)
- Directs interactive site exploration with a visible, autonomous pointer:
  - Navigates directly to candidate listings matching conversational prompts.
  - Zooms into high-resolution macro photography to inspect corner wear, surface scratches, or stitching defects.
  - Guides buyers step-by-step through checkout forms, escrow deposits, or seller offer submissions.

### 2. Persistent Cross-Session Collector Memory (`CollectorMemoryEngine`)
- Builds an evolving profile of collector preferences across visits:
  - Catalogs items already owned in the user's collection to avoid duplicates and suggest missing puzzle pieces.
  - Remembers past negotiation history and maximum willingness-to-pay (WTP) per category.
  - Automatically personalizes search rank without requiring manual re-filtering.

### 3. Bilateral Offer & Valuation Arbiter (`BilateralNegotiationEngine`)
- Calculates fair market comps using real-time secondary transaction indices (PSA APR, eBay Sold, Cardmarket):
  - Formulates strategic opening bids (e.g. 15% below recent average) backed by factual condition rationale.
  - Evaluates seller counter-offers against historical appreciation trends and user portfolio value.
  - Commits binding purchase agreements upon reaching mutual consensus.

### 4. Omnichannel Watchdog & Re-Engagement (`OmnichannelWatchdog`)
- Keeps active surveillance on targeted listings and seller accounts:
  - Alerts user on paired messaging channels (WhatsApp, Telegram) when an unlisted grail is listed or price is slashed.
  - Facilitates instant in-chat counter-offers without requiring the user to re-open the browser.

---

## Standard Marketplace Agent Co-Pilot Schema

```json
{
  "marketplace_protocol": "zenpal-collector/v1.0",
  "session_id": "ses_pal_88192d",
  "marketplace_context": {
    "domain": "vintagevault-cards.com",
    "category": "TradingCards/Pokemon",
    "target_listing": "Charizard 1st Edition Shadowless Base Set",
    "grade_spec": "PSA 8.5 NM-MT+",
    "listing_price_usd": 1850.00,
    "seller_reserve_usd": 1650.00
  },
  "collector_memory": {
    "user_id": "usr_collector_772",
    "existing_portfolio_count": 42,
    "target_condition_tolerance": "PSA 8 or higher with clean holo surface",
    "past_rejected_offer_usd": 1500.00
  },
  "condition_telemetry": {
    "holo_scratch_detected": false,
    "top_right_corner_whitening_score": "mild_acceptable",
    "centering_ratio": "55/45",
    "fair_market_comp_usd": 1680.00
  },
  "co_browsing_actions": {
    "virtual_cursor_target": "#condition-gallery-photo-3",
    "visual_callout": "Inspected corner whitening on top-right back corner; matches PSA 8.5 threshold.",
    "suggested_counter_offer_usd": 1620.00,
    "negotiation_rationale": "Comp average over last 90 days is $1,680. Opening offer of $1,620 gives room to meet at $1,650."
  },
  "negotiation_status": "counter_offer_ready_for_hitl"
}
```

---

## Operational Guidelines

1. **Objective Condition Transparency**: Never conceal or gloss over flaws; the virtual cursor must proactively highlight defects (scratches, dents, whitening) before discussing price.
2. **Local Portfolio Privacy**: Encrypt user collection registries, past purchase prices, and maximum willingness-to-pay locally within OpenClaw; never leak valuation caps to the seller.
3. **Comp-Backed Bidding**: Ground all offer proposals in verifiable historical secondary transaction comps rather than arbitrary lowballing.
4. **Human Confirmation on Binding Bids**: Require explicit user confirmation on paired WhatsApp/Telegram before submitting legally binding offers or escrow authorizations.
