---
name: zendream-ai-skill
description: Multimodal Visual Discovery & Conversational Search Agent for GenPark & OpenClaw. Distilled from Daydream (daydream.ing) to eliminate keyword search paralysis, matching screenshots and conversational vibe queries to verified cross-brand inventory with iterative 'Say More' refinement.
version: 1.0.0
license: MIT
---

# zendream-ai-skill

## Overview
`zendream-ai-skill` (ZenDream / 禅幻) is the multimodal visual discovery and conversational fashion search engine for GenPark & OpenClaw. Distilled from **Daydream's (daydream.ing / Julie Bornstein) AI Shopping Paradigm**, ZenDream solves the friction of traditional keyword search and endless page scrolling: **shoppers know what they want visually and contextually, but cannot articulate it in rigid text queries**.

When consumers look for lifestyle and fashion items, query keywords like "blue dress" yield thousands of irrelevant results. Meanwhile, consumers often save screenshots on their phone or have specific contextual constraints (*"I need a bright maxi dress for a June wedding in Nantucket that can be delivered before Friday"*).

Operating local-first within OpenClaw, ZenDream bridges visual inspiration with direct catalog retrieval:
- **Multimodal Screenshot-to-SKU Search**: Ingests camera roll screenshots, street-style photos, or social media snapshots, isolating garments and finding identical or visually congruent in-stock pieces.
- **Conversational Vibe & Occasion Parsing**: Translates multi-layered natural language prompts into structured attribute filters (silhouette, colorway, formality, temperature suitability, delivery window).
- **"Say More" Dynamic Refinement Loop**: Replaces rigid faceted drop-downs with natural conversational adjustments (*"make it silk"*, *"longer hemline"*, *"under $250"*).
- **Unified Multi-Merchant Catalog Sync**: Aggregates live inventories across luxury houses, department stores, and independent DTC labels into a single unified search index.

---

## Core Capabilities

### 1. Visual Screenshot & Outfit Isolator (`ScreenshotToSKUResolver`)
- Analyzes uploaded user images:
  - Segments individual outfit layers (outerwear, tops, skirts, footwear, bags).
  - Extracts visual embeddings (pattern, fabric texture, sleeve cut, drape volume).
  - Executes nearest-neighbor vector search against merchant catalog image embeddings.

### 2. Conversational Context & Occasion Parser (`OccasionQueryEngine`)
- Unpacks complex conversational prompts containing implicit criteria:
  - Destination geography and climate (e.g., coastal breeze, tropical humidity).
  - Event etiquette and formality tier (cocktail, black tie, casual brunch).
  - Delivery urgency constraints (e.g., must arrive in <48 hours).

### 3. "Say More" Iterative Refinement (`SayMoreRefiner`)
- Enables continuous conversational steering:
  - Preserves candidate selection state while applying delta adjustments.
  - Generates comparative visual difference summaries ("Here is the same silhouette in forest green linen instead of cotton").

### 4. Cross-Brand Size & Fit Normalizer (`FitStandardizationEngine`)
- Normalizes disparate brand sizing systems (US, EU, UK, numeric, vanity sizing):
  - Calibrates size recommendations against user measurements stored in `~/.openclaw/memory/user_sizing.json`.
  - Flags brands known to run small or large based on aggregated community feedback.

---

## Standard Multimodal Search Payload Schema

```json
{
  "protocol": "zendream-visual-query/v1.0",
  "query_type": "multimodal_hybrid",
  "input": {
    "text_prompt": "Find me a tailored olive linen blazer for a summer dinner in Milan under $350 with expedited delivery",
    "image_reference_path": "local://media/saved_screenshot_991.webp"
  },
  "parsed_constraints": {
    "garment_category": "blazer",
    "silhouette": "tailored_relaxed",
    "color_palette": ["olive", "sage", "muted_khaki"],
    "material_composition": ["linen", "linen_blend"],
    "max_price": 350.00,
    "max_delivery_days": 3
  },
  "curated_results": [
    {
      "merchant": "Boglioli",
      "sku": "BOG-LIN-BLZ-48",
      "title": "Unstructured Olive Linen Blazer",
      "current_price": 315.00,
      "in_stock_size": "48 EU (38 US)",
      "fit_confidence": 0.94,
      "delivery_estimate_days": 2,
      "checkout_bridge": "openclaw://bridge/zenrye?sku=BOG-LIN-BLZ-48"
    }
  ]
}
```

---

## Operational Guidelines

1. **Zero Phantom Inventory**: Only return search matches with confirmed live warehouse stock—never surface sold-out items.
2. **Speed & Latency**: Multimodal image segmentation and vector retrieval must complete in under 800ms.
3. **Local Visual Privacy**: Uploaded camera roll screenshots and user body photos must be processed client-side or stripped of facial biometrics before vector embedding.
4. **Seamless Procurement Bridge**: Provide direct one-tap handoff to `zenrye-ai-skill` or `zenprocure-ai-skill` for instant checkout.
