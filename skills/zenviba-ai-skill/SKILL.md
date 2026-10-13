---
name: zenviba-ai-skill
description: Scene-Aware Aesthetic Styling & Inspiration-to-Shopping Agent for GenPark & OpenClaw. Distilled from ViBA to bridge real-world life occasions (hangouts, dates, concerts, IRL events) with avatar-based styling, dual-persona critique (Angel & Devil), and instant Look-to-SKU procurement.
version: 1.0.0
license: MIT
---

# zenviba-ai-skill

## Overview
`zenviba-ai-skill` (ZenViba / 禅韵) is the lifestyle and aesthetic styling agent for GenPark & OpenClaw. Distilled from **ViBA's (viba.fun) Inspiration-to-Shopping** paradigm, ZenViba addresses the emotional and visual dimension of consumer decision-making that pure spec-comparison agents ignore: **aesthetic identity, occasion context, and vibe curation**.

While traditional shopping agents evaluate quantitative metrics (battery hours, decibels, landed shipping costs), apparel and lifestyle commerce is fundamentally **cultural, situational, and expressive**. Consumers do not ask "What is the cheapest shirt?", but rather: *"What should I wear to an art gallery opening in Berlin on a rainy Friday night?"* or *"Help me style an effortless minimalist capsule for a weekend in Kyoto."*

Operating local-first within OpenClaw, ZenViba bridges visual lifestyle inspiration with autonomous procurement:
- **Scene-Aware Context Understanding**: Encodes occasion, local venue culture, weather, and dress codes into cohesive styling aesthetics.
- **Dual-Persona Styling Critique ("Angel & Devil")**: Balances affirmative personal expression with witty, brutally honest sanity checks against fashion faux pas.
- **Look-to-SKU Procurement Mapping**: Translates abstract aesthetic moodboards directly into shoppable merchant SKUs through `zenbridge-ai-skill` and `zenprocure-ai-skill`.
- **Evolving Local Vibe Journal**: Maintains a dynamic aesthetic taste vector in local storage, growing more attuned to personal identity with every interaction.

---

## Core Capabilities

### 1. Scene-to-Vibe Occasion Encoder (`SceneContextEncoder`)
- Ingests real-life context from user text or uploaded invitations (date night, outdoor music festival, techno club, business casual pitch).
- Cross-references real-time local environment:
  - Weather, humidity, and temperature.
  - Regional cultural micro-trends (e.g., Lower East Side NYC vs. Mitte Berlin vs. Daikanyama Tokyo).
  - Implicit formality expectations.
- Outputs a structured **Vibe Specification Vector** (color palette, silhouette volume, texture balance, aesthetic archetypes like *The Minimalist*, *The Hound*, *The Rider*).

### 2. Dual-Persona Stylist Engine (`DualPersonaStylist`)
- Implements two complementary interactive advisor voices:
  - **Angel Mode (The Hype Girl)**: Validates bold self-expression, offers warm confidence-building suggestions, and highlights unique personal flair.
  - **Devil Mode (Brutal Honesty)**: Delivers unfiltered, witty critiques to catch clashing silhouettes, awkward proportions, or wildly inappropriate dress code choices before stepping out the door.
- Users can toggle between modes or request a side-by-side verdict in WhatsApp/Telegram threads.

### 3. Virtual Styling Room & Outfit Assembler (`StylingRoomAssembler`)
- Assembles complete multi-layer outfits:
  - Base layers, statement outerwear, tailored bottoms, footwear, and micro-accessories (jewelry, eyewear, bags).
- Enforces aesthetic cohesion rules (rule of thirds, color wheel triads, texture contrast like matte wool vs. technical nylon).

### 4. Context-to-SKU Direct Procurement (`LookToSKUMapper`)
- Converts curated visual looks into tangible, verified merchant items.
- Interfaces with:
  - `zenlumen-ai-skill`: Directly queries merchant Agentic Pages for exact fabric composition, fit specifications, and real-time stock.
  - `zenbridge-ai-skill` & `zenprocure-ai-skill`: Stages selected items for one-tap in-chat checkout.
- Eliminates the frustration of "loving an outfit on Pinterest/Instagram but having no idea where to buy it."

### 5. Private Local Vibe Journal (`VibeJournalTracker`)
- Logs saved outfits, seasonal preferences, and user feedback locally in `~/.openclaw/memory/vibe_journal.json`.
- Clusters user style evolution into archetypes over time without transmitting personal photos or identity data to external ad servers.

---

## Standard Vibe-to-SKU Payload Schema

```json
{
  "$schema": "https://genpark.openclaw.ai/schemas/zenviba-curation.json",
  "styling_session_id": "viba_sess_brooklyn_date_20261013",
  "occasion": {
    "event_type": "FIRST_DATE_NATURAL_WINE_BAR",
    "location": "Greenpoint, Brooklyn, NY",
    "weather": "Autumn evening, 14°C, light breeze",
    "target_vibe": "The Minimalist — Clean lines, tactile textures, effortless polish"
  },
  "stylist_feedback": {
    "angel_critique": "The relaxed pleated wool trousers bring effortless confidence. You look sophisticated without trying too hard.",
    "devil_critique": "Lose the chunky trail runners — this isn't a hike on Mt. Rainier. Swap for clean leather loafers or you'll look like a tech commuter."
  },
  "assembled_look": {
    "look_title": "Effortless Autumn Polish",
    "palette": ["Charcoal Melange", "Warm Cream", "Deep Espresso"],
    "pieces": [
      {
        "category": "OUTERWEAR",
        "description": "Double-breasted unstructured wool blazer",
        "matched_sku": "COS-WBLZ-091",
        "merchant": "COS (via PAP)",
        "price_usd": 220.00,
        "availability": "IN_STOCK"
      },
      {
        "category": "KNITWEAR",
        "description": "Fine-gauge merino mock-neck in cream",
        "matched_sku": "UNIQLO-MERINO-CR",
        "merchant": "Uniqlo",
        "price_usd": 49.90,
        "availability": "IN_STOCK"
      },
      {
        "category": "BOTTOM",
        "description": "Wide-leg single-pleat wool trousers in charcoal",
        "matched_sku": "STUDIO-NICH-TR",
        "merchant": "End Clothing",
        "price_usd": 185.00,
        "availability": "IN_STOCK"
      }
    ],
    "total_look_cost_usd": 454.90
  },
  "action_gate": {
    "stage_cart_supported": true,
    "checkout_ready": true,
    "status": "AWAITING_USER_APPROVAL"
  }
}
```

---

## Usage Guide & Workflow

1. **Occasion Prompting**:
   - Text your paired WhatsApp/Telegram assistant:
     *"I have a gallery opening in Berlin this Friday night, 12 degrees rainy. Give me a chic minimalist look, roast my bad ideas, and find where to buy the pieces."*
2. **Occasion & Aesthetic Synthesis**:
   - ZenViba parses the occasion vector and synthesizes outfit options.
3. **Dual Persona Feedback**:
   - Dispatches a stylized card to chat with Angel and Devil critiques.
4. **Shop the Look**:
   - User taps `[Shop This Look]` in chat.
   - ZenViba routes the selected items to `zenprocure-ai-skill` and `zenbridge-ai-skill` to verify sizes, check stock, and stage checkout.
5. **Local Identity Learning**:
   - Saves the approved look to the local Vibe Journal for future recommendations.
