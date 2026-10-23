---
name: zenkinect-ai-skill
description: Dual-Surface Omnichannel Merchant Engine & Real-Time Objection Resolver for GenPark & OpenClaw. Distilled from Kinect (YC Spring 2026) to bridge human-facing adaptive PDP storytelling with machine-facing high-density agent context endpoints, featuring millisecond fit-note extraction, zero-hallucination engineering specs, and direct machine-to-machine buyer agent negotiation.
version: 1.0.0
license: MIT
---

# zenkinect-ai-skill

## Overview
`zenkinect-ai-skill` (ZenKinect / 禅动) is the dual-surface omnichannel merchant engine and real-time objection resolver for GenPark & OpenClaw. Distilled from **Kinect's (YC Spring 2026, founded by Kratik Agrawal & Varun Kandula) AI Revenue & Storefront Personalization Platform**, ZenKinect resolves the severe presentation dilemma plaguing modern digital brands: **how to simultaneously cater to human shoppers' emotional visual cues while serving machine buyer agents' structured token constraints**.

In the agentic commerce era, web traffic is strictly bifurcated:
1. **Human Shoppers**: Bounce within 3 seconds when generic PDPs fail to address nuanced fit concerns, fabric drape doubts, or specific lifestyle objections.
2. **AI Buyer Agents**: Waste context windows and trigger scraper bans on heavy HTML/CSS/JavaScript storefronts that bury essential sizing caveats and physical specs.

Operating local-first within OpenClaw, ZenKinect establishes a unified, dual-surface merchant architecture:
- **Dual-Surface Storefront Architecture**: Dynamically splits product presentation into an ultra-fast, zero-overhead machine context layer (MCP/ACP/UCP) for external buyer agents, and an emotionally resonant, adaptive visual PDP for human shoppers.
- **Real-Time Purchase Objection Resolver**: Continuously monitors subtle user friction (prolonged hover over size charts, repetitive toggling between fabric tabs) and dynamically expands targeted reassurance modules (e.g. true-to-life shoulder fit comparisons, dermatologist ingredient breakdowns).
- **Zero-Hallucination Brand Truth Graph**: Ingests factory technical packs, garment elasticity tolerances, material shrinkage curves, and historical return ticket annotations into an immutable merchant knowledge base.
- **Machine-to-Machine (M2M) Buyer Agent Gateway**: Accepts direct algorithmic inquiries from consumer buyer agents (`zenchoice`, `zenpact`), providing authoritative inventory reservations, verified bundle promotions, and real-time shipping SLA commitments.

---

## Core Capabilities

### 1. Dual-Surface Storefront Synthesizer (`DualSurfaceStorefrontSynthesizer`)
- Delivers purpose-built representations based on visitor client signatures:
  - **Machine Buyer Surface (`/agentic/sku.json`)**: Emits high-density semantic vectors (<300 tokens) detailing true garment measurements, stretch coefficients, fabric origin, and compatibility boundaries.
  - **Human Adaptive Surface**: Renders responsive visual storyboards that dynamically spotlight the exact attributes the user cares about (e.g., thermal insulation for outdoor enthusiasts vs. packability for frequent flyers).

### 2. Real-Time Objection Resolver (`RealTimeObjectionResolver`)
- Neutralizes hesitation points before cart abandonment:
  - Detects hesitation micro-patterns (dwell time on return policies, repetitive size toggling).
  - Automatically synthesizes authentic proof modules: customer body-type reference cards, real-world wear test videos, or third-party lab certifications.
  - Answers open-ended fit inquiries instantly with 100% brand-certified accuracy.

### 3. Zero-Hallucination Brand Truth Graph (`BrandTruthKnowledgeGraph`)
- Eliminates AI customer service hallucinations:
  - Grounded strictly in authenticated merchant technical documentation, supplier invoices, and QA inspection sheets.
  - Rejects ambiguous user questions with clear factual boundaries rather than fabricating claims.
  - Constantly syncs with warehouse inventory buffers to prevent overselling on flash promotions.

### 4. M2M Buyer Agent Negotiation Gateway (`BuyerAgentNegotiationInterface`)
- Interacts seamlessly with automated buyer agents:
  - Exposes standardized endpoints compatible with `zenpact` and `zenrye` for algorithmic discount validation.
  - Emits cryptographically signed stock-hold vouchers guaranteeing pricing for 15-minute checkout windows.
  - Records multi-rail agent attribution to credit LLM referral channels and partner ecosystems.

---

## Standard Dual-Surface Merchant Context Schema

```json
{
  "protocol": "zenkinect-dualsurface/v1.0",
  "merchant_id": "merch_kinect_77182",
  "sku_id": "SKU-MERINO-HOODIE-M",
  "product_name": "Ultralight 200gsm Merino Wool Daily Hoodie",
  "machine_surface": {
    "context_token_density": 218,
    "material_composition": "100% Australian Merino Wool (18.5 micron)",
    "fabric_weight_gsm": 200,
    "fit_profile": {
      "cut": "athletic_slim",
      "shoulder_pitch_cm": 44.5,
      "chest_circumference_cm": 102.0,
      "sleeve_length_cm": 66.0,
      "stretch_factor": "medium_natural_give",
      "shrinkage_expectation": "<1.5% cold hand wash"
    },
    "sustainability_certifications": ["ZQ Merino Certified", "OEKO-TEX Standard 100"],
    "live_inventory": {
      "warehouse_id": "wh_us_central",
      "in_stock_units": 47,
      "reserve_buffer_units": 5
    }
  },
  "adaptive_objection_rules": [
    {
      "trigger": "dwell_on_fabric_over_4000ms",
      "injected_reassurance_module": "scratch_free_itch_guarantee_badge",
      "copy": "Made from ultra-fine 18.5μ fibers: Guaranteed zero-itch comfort against bare skin or full refund."
    },
    {
      "trigger": "repeated_size_toggle_between_M_and_L",
      "injected_reassurance_module": "split_sizing_fit_matrix",
      "copy": "68% of customers 5'10\"-6'0\" (160-175 lbs) prefer Medium for a tailored look, Large for relaxed layering."
    }
  ],
  "m2m_agent_handshake": {
    "supported_protocols": ["MCP", "ACP", "UCP", "PAP"],
    "instant_hold_available": true,
    "hold_window_minutes": 15,
    "authorized_settlement_gateways": ["Shopify_Headless", "Stripe_Elements"]
  }
}
```

---

## Operational Guidelines

1. **Deterministic Accuracy Mandate**: Never generate speculative fit or fabric claims; return `unspecified_by_merchant` if technical pack data is missing.
2. **Sub-30ms Machine Surface Latency**: Cache pre-compiled machine context cards on edge CDN workers for immediate retrieval by external buyer agents.
3. **Respect Shopper Autonomy**: Never deploy intrusive full-screen modal takeovers; dynamically blend reassurance modules into the natural vertical scroll stream.
4. **Data Privacy**: Store shopper interaction telemetry anonymously without tracking biometric keystroke signatures or personal identifiers.
