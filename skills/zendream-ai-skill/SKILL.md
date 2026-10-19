---
name: zendream-ai-skill
description: Multimodal Conversational Aesthetic Discovery & Style Vector Knowledge Graph Engine for GenPark & OpenClaw. Distilled from Daydream (daydream.ing) to liberate shopping from rigid keyword search bars and dropdown filters, featuring 'Say More' iterative prompt refinement, 50+ aesthetic/sensory attribute vectors, and brand-native in-store agent search.
version: 1.0.0
license: MIT
---

# zendream-ai-skill

## Overview
`zendream-ai-skill` (ZenDream / 禅织) is the multimodal conversational aesthetic discovery and style vector graph engine for GenPark & OpenClaw. Distilled from **Daydream's (daydream.ing) AI-native search and discovery architecture** founded by retail visionary Julie Bornstein, ZenDream resolves the most frustrating bottleneck in digital lifestyle and fashion retail: **rigid keyword search boxes, disjointed dropdown filters, endless visual scrolling, and high return rates caused by mismatched expectations**.

Traditional e-commerce platforms force users to squeeze nuanced personal tastes and complex real-life needs into simplistic keyword queries (e.g., "blue dress") paired with clumsy category filters (color, brand, price). When the results miss the mark, users are forced to start over from scratch.

Operating local-first within OpenClaw, ZenDream turns product discovery into an interactive, high-fidelity dialogue:
- **Multimodal Conversational Discovery**: Ingests natural, context-rich language queries (e.g., *"I need a chic, breathable outfit for moderating an outdoor October panel in Austin"*) alongside reference images and screenshots.
- **"Say More" Iterative Refinement Engine**: Allows shoppers to iteratively modify and steer recommendations in real-time (*"Love this silhouette, but can we see it with longer sleeves, in charcoal or navy, and made of heavier linen?"*) without clearing the session.
- **50+ High-Dimensional Aesthetic Vector Graph**: Deconstructs raw product catalogs into rich multidimensional vectors capturing silhouette, drape, neckline, hem rise, formality tier, tactile texture, and occasion resonance rather than flat taxonomies.
- **Brand-Native In-Store Agent Search ("Powered by Daydream")**: Embeds conversational visual search directly inside merchant storefronts and external agentic buyer meshes.

---

## Core Capabilities

### 1. Multimodal Conversational Seeker (`MultimodalAestheticSeeker`)
- Ingests natural language prompts, voice notes, and reference photos:
  - Extracts nuanced requirements: occasion context, climate/season, formality level, comfort expectations, and aesthetic taste.
  - Aligns user intent with catalog products using multimodal vision-language embeddings.
  - Eliminates "zero search results" dead ends by understanding conceptual stylistic synonyms.

### 2. "Say More" Iterative Prompt Refiner (`SayMoreIterativeRefiner`)
- Powers conversational fine-tuning of candidate matches:
  - Preserves accepted dimensions (e.g., silhouette, brand ethos) while mutating targeted attributes (e.g., color palette, fabric weight, sleeve length).
  - Dynamically computes vector deltas to pull up the closest matching alternatives in under 50ms.
  - Transforms "almost-right" recommendations into "just-right" purchases within seconds.

### 3. High-Dimensional Aesthetic Attribute Graph (`AestheticAttributeGraphCompiler`)
- Enriches standard SKU data feeds into an expressive aesthetic knowledge graph:
  - **Sensory & Tactile**: Fabric hand-feel, stretch percentage, opacity, thermal weight.
  - **Architectural & Cut**: Collar spread, sleeve pitch, waist suppression, taper, rise.
  - **Occasion & Vibe Resonance**: "Art gallery opening", "tech executive casual", "warm-weather black tie", "coastal minimal".

### 4. Merchant In-Store Agent Search SDK (`InStoreAgentSearchSDK`)
- Bridges personal shopping agents with merchant-side search bars:
  - Replaces legacy keyword autocomplete with an interactive AI stylist agent.
  - Allows merchants to run conversational discovery directly on their Shopify/Headless storefronts.
  - Feeds structured match confidence and attribute affinity back to personal buyer agents.

---

## Standard Multimodal Aesthetic Query Schema

```json
{
  "protocol": "zendream-aesthetic/v1.0",
  "session_id": "ses_dream_9918bc",
  "query_context": {
    "natural_prompt": "Looking for a tailored olive linen blazer with structured shoulders for an outdoor autumn conference in Austin",
    "reference_image_uri": "vault://images/moodboard_ref_austin.jpg",
    "occasion": "outdoor_tech_conference",
    "target_climate": "mild_autumn_afternoon"
  },
  "aesthetic_vector_constraints": {
    "garment_type": "blazer",
    "fabric_composition": ["linen", "linen_cotton_blend"],
    "silhouette": "tailored_relaxed",
    "shoulder_structure": "lightly_padded",
    "color_palette": ["olive", "moss_green", "sage"],
    "formality_score": 7.5,
    "max_budget_usd": 350.00
  },
  "iterative_refinement_history": [
    {
      "step": 1,
      "user_feedback": "Say More: keep this exact cut, but prefer notch lapels and unlined interior for heat",
      "vector_mutation": {
        "lapel_style": "notch",
        "lining_construction": "unlined_quarter_lined"
      }
    }
  ],
  "candidate_matches": [
    {
      "sku_id": "SKU-BLZ-OLV-40R",
      "brand": "Todd Snyder",
      "product_name": "Italian Linen Madison Blazer in Olive",
      "price": 298.00,
      "style_affinity_score": 0.96,
      "in_stock": true,
      "merchant_url": "https://toddsnyder.com/products/italian-linen-madison-olive"
    }
  ]
}
```

---

## Operational Guidelines

1. **Taste-Neutral Recommendation**: Rank products strictly based on semantic, aesthetic, and silhouette affinity with zero paid placement bias.
2. **Sub-50ms Conversational Latency**: Execute vector mutations client-side or on edge inference nodes to keep "Say More" conversational feedback instantaneous.
3. **Privacy-Preserving Image Analysis**: Analyze user-uploaded photos and body shape references locally within OpenClaw without transmitting raw media to third-party ad networks.
4. **Seamless Headless Checkout Integration**: Once the user approves a curated piece, instantly hand off SKU parameters to `zenrye-ai-skill` or `zenprocure-ai-skill` for one-tap fulfillment.
