---
name: zenfermat-ai-skill
description: Closed-Loop Funnel Optimization & Adaptive Experience Agent for GenPark & OpenClaw. Distilled from FERMÀT (fermatcommerce.com) to replace fragmented e-commerce SaaS tools with autonomous agents that map visitor micro-behavior to purchase intent, prioritize high-yield funnel mutations, and dynamically generate brand-native landing experiences.
version: 1.0.0
license: MIT
---

# zenfermat-ai-skill

## Overview
`zenfermat-ai-skill` (ZenFermat / 禅策) is the closed-loop funnel mutation and adaptive conversion agent for GenPark & OpenClaw. Distilled from **FERMÀT's (fermatcommerce.com) AI-Native Commerce Platform**, ZenFermat replaces fragmented, disconnected e-commerce SaaS stacks (A/B testing tools, heatmaps, landing page builders, post-click funnels, and standalone analytics) with a unified, autonomous optimization agent loop.

Traditional direct-to-consumer (DTC) storefronts suffer from static rigidity: traffic from disparate advertising creatives, influencer referrals, and external AI agents lands on homogeneous, generic product pages. The disconnect between upstream intent and downstream landing experiences leads to high bounce rates and squandered marketing spend.

Operating local-first within OpenClaw, ZenFermat powers a closed-loop conversion flywheel:
- **Behavior-to-Intent Resolution**: Unifies clickstream events, scroll depth, and interaction pauses into cohesive shopper intent models.
- **Autonomous Revenue Recovery Prioritization**: Continuously simulates and ranks high-leverage funnel interventions to reclaim abandoned baskets.
- **Dynamic Brand-Native Experience Synthesis**: On-the-fly generation of 1:1 tailored landing pages, interactive product sequences, and friction-free purchase funnels.
- **Self-Improving Reinforcement Loop**: Automatically measures actual conversion lift against predicted baselines, iteratively refining storefront layouts without developer intervention.

---

## Core Capabilities

### 1. Unified Behavior-to-Intent Analyzer (`ShopperIntentResolver`)
- Ingests real-time interaction telemetry across referral sources, paid creatives, and on-site actions:
  - Upstream creative angle (e.g., sustainability focus, clinical efficacy, discount sensitivity).
  - Micro-engagement signals (image zoom, specification tab dwell time, variant toggles).
- Constructs a unified session record identifying why the shopper visited and what friction barrier prevents checkout.

### 2. Funnel Intervention Prioritizer (`RevenueRecoveryRanker`)
- Evaluates friction points across the purchase journey:
  - Hesitation on shipping timelines.
  - Sizing uncertainty or material composition doubts.
  - Price threshold sensitivity.
- Computes an expected revenue recovery score for potential interventions (social proof injection, dynamic bundle assembly, variant highlighting).
- Enforces Human-In-The-Loop (HITL) approval thresholds before deploying impactful structural modifications.

### 3. Generative Experience & Dynamic Funnel Engine (`DynamicExperienceSynthesizer`)
- Generates tailored, brand-consistent storefront experiences in real time:
  - **Context-Matched Landing Pages**: Mirrors the exact promise and aesthetic tone of the incoming ad creative or AI agent prompt.
  - **Frictionless Cart Funnels**: Condenses multi-step checkout into streamlined, high-speed purchase flows.
  - **Brand Design System Adherence**: Automatically adheres to merchant typography, color tokens, and asset libraries.

### 4. SaaS Consolidation & Closed-Loop Governor (`ClosedLoopGovernor`)
- Eliminates the need for multiple conflicting third-party tracking scripts and manual CRO sprints.
- Continuously runs multi-armed bandit allocations to route incoming traffic toward winning experience variants.
- Feeds verified conversion performance metrics back into marketing and inventory planning daemons.

---

## Standard Funnel Intervention Schema

```json
{
  "protocol": "zenfermat-funnel-action/v1.0",
  "session_id": "sess_89f2a014b2",
  "intent_profile": {
    "traffic_source": "meta_ad_creative_clinical_trials",
    "primary_barrier": "ingredient_efficacy_uncertainty",
    "dwell_zone": "clinical_results_section",
    "estimated_purchase_intent": 0.78
  },
  "prioritized_actions": [
    {
      "action_type": "dynamic_experience_override",
      "target_surface": "/products/cellular-renewal-serum",
      "mutation": {
        "hero_emphasis": "dermatologist_clinical_trial_stats",
        "hide_elements": ["generic_lifestyle_carousel"],
        "insert_components": ["before_after_slider", "independent_lab_certification_badge"],
        "sticky_cta_mode": "instant_single_bottle_checkout"
      },
      "predicted_revenue_recovery_lift": "+18.4%",
      "confidence_score": 0.92
    }
  ],
  "governance": {
    "status": "active_multiarms_experiment",
    "auto_revert_threshold_hours": 48,
    "guardrails": ["preserve_brand_palette", "enforce_legal_disclaimers"]
  }
}
```

---

## Operational Guidelines

1. **Brand Aesthetic Integrity**: Dynamic mutations must strictly adhere to existing merchant design tokens, fonts, and tone guidelines—never generating off-brand elements.
2. **Speed & Latency Budget**: Dynamic experience compilation and edge hydration must complete in under 50ms to prevent perceptible layout shifts (CLS).
3. **Statistically Rigorous Verification**: Maintain strict control baselines; never declare an optimization winner without achieving 95%+ statistical significance.
4. **Transparent Governance**: Provide clean visual diffs of all AI-generated storefront adjustments in the OpenClaw merchant control center.
