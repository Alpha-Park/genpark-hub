---
name: zengenius-ai-skill
description: Real-Time PDP Seller's Agent & Sensory Telemetry Engine for GenPark & OpenClaw. Distilled from Product Genius (productgenius.ai) to transform static e-commerce product pages into adaptive algorithmic feeds, interpreting scroll and linger micro-behaviors to sequence dynamic story cards, in-scroll search, and ad-platform intent feedback.
version: 1.0.0
license: MIT
---

# zengenius-ai-skill

## Overview
`zengenius-ai-skill` (ZenGenius / 禅灵) is the real-time on-site seller agent and sensory micro-telemetry engine for GenPark & OpenClaw. Distilled from **Product Genius's (productgenius.ai) AI Seller's Agent paradigm**, ZenGenius solves the fundamental shortcoming of modern e-commerce product detail pages (PDPs): **they are static brochures in an algorithmic world**.

While modern consumers spend hours every day immersed in algorithmic feeds (TikTok, Instagram) that adapt dynamically to their interest in real time, e-commerce stores continue to present rigid, one-size-fits-all pages. Furthermore, over 99% of online shoppers never touch a search bar or open a chat bubble—they simply scroll, scan, and leave within seconds.

Operating local-first within OpenClaw, ZenGenius gives every visitor their own dedicated digital salesperson on the product page:
- **"Sensitive Skin" Micro-Behavior Sensor**: Interprets trackpad and touchscreen micro-gestures (scroll acceleration, linger pauses on product close-ups/videos, skip velocity) to gauge curiosity and hesitation in milliseconds.
- **Dynamic In-Scroll Story & Value Cards**: Generates and sequences contextual narrative cards (artisan heritage, ingredient safety, fit comparisons, social proof, and bundle suggestions) directly within the natural scroll flow.
- **Proactive In-Scroll Search ("Search Genius")**: Seamlessly engages shoppers with frictionless semantic queries directly inside their scroll path without requiring them to find a navigation bar.
- **Ad-Platform Intent Feedback Loop ("Ad Genius")**: Replaces blind ad tracking pixels with rich, session-level AI intent telemetry, instructing Meta, Google, and TikTok ad algorithms to drive higher-yield traffic.

---

## Core Capabilities

### 1. Tactile Micro-Gesture Analyzer (`SensoryTelemetryEngine`)
- Analyzes device interaction dynamics in real-time client-side sessions:
  - **Linger Detection**: Measures millisecond pauses on specific media assets (e.g., fabric close-up vs. sizing chart vs. customer review quotes).
  - **Skip Velocity**: Detects rapid bypass of generic promotional content, immediately adjusting downstream content priority.
  - **Scroll Cadence**: Differentiates between casual exploratory browsing and high-intent comparison shopping.

### 2. In-Scroll Algorithmic Card Sequencer (`StoryCardSequencer`)
- Dynamically interleaves high-relevance modular "story cards" below the fold:
  - **Heritage & Craft Cards**: Highlights artisan roots and manufacturing standards when shoppers linger on materials.
  - **Objection-Preempting Cards**: Injects dermatologist endorsements, lab certifications, or return policy guarantees when hesitation is detected.
  - **Contextual Up-Sell Cards**: Presents complementary accessories timed perfectly to the user's demonstrated stylistic preferences.

### 3. Proactive Semantic In-Scroll Search (`InScrollSearchHarness`)
- Overcomes the "search bar invisibility" problem where only 1% of visitors use conventional site search:
  - Embeds predictive, tap-to-explore query pills tailored to the specific product and demonstrated interests.
  - Provides instantaneous conversational filters directly in the viewport without page reloads.

### 4. Ad-Platform Intent Feedback Bridge (`AdTelemetryBridge`)
- Replaces legacy 1x1 tracking pixels that only report crude page views and conversions.
- Generates high-fidelity intent vector scores for each session:
  - Signals high-engagement sessions to Meta Conversions API (CAPI) and Google Ads Enhanced Conversions.
  - Trains ad network machine learning models to favor high-intent shoppers over low-relevance clickers.

---

## Standard Sensory Session & Card Payload Schema

```json
{
  "protocol": "zengenius-session-agent/v1.0",
  "session_token": "pg_sess_7c3a81e9",
  "pdp_context": {
    "product_id": "PROD-ITALIAN-LEATHER-TOTE",
    "base_category": "luxury_accessories",
    "price": 380.00
  },
  "sensory_signals": {
    "dominant_dwell_asset": "video_artisan_stitching_process",
    "dwell_time_ms": 4200,
    "skipped_sections": ["generic_newsletter_signup", "influencer_social_carousel"],
    "inferred_shopper_priority": "craftsmanship_and_durability",
    "urgency_index": 0.65
  },
  "sequenced_story_cards": [
    {
      "card_id": "card_leather_origin",
      "template": "artisan_provenance",
      "headline": "Full-Grain Tuscan Vachetta Leather",
      "body": "Naturally tanned using chestnut bark tannins in Florence. Patinas gracefully over decades.",
      "visual_media": "/assets/florence_tannery.webp"
    },
    {
      "card_id": "card_durability_comparison",
      "template": "specification_benchmark",
      "headline": "Reinforced Saddle Stitching",
      "body": "Hand-stitched handles rated for 40 lbs of daily carry. Covered by our 10-year repair guarantee."
    }
  ],
  "ad_feedback": {
    "meta_capi_event": "HighIntentSession",
    "intent_score": 0.88,
    "product_affinity": "leather_craftsmanship"
  }
}
```

---

## Operational Guidelines

1. **Client-Side Lightweight Execution**: The sensory listener must operate with zero main-thread blocking, keeping script execution under 5ms per scroll event.
2. **Authenticity Guarantee**: In-scroll story cards must only state verified, truthful product specifications and merchant claims.
3. **Privacy-Preserving Telemetry**: Capture interaction patterns anonymously without recording keystrokes, personal identity, or biometric fingerprints.
4. **Non-Intrusive Flow**: Cards must fit seamlessly into natural vertical scrolling, avoiding aggressive pop-ups, modal traps, or jarring layout reflows.
