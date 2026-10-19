---
name: zenwild-ai-skill
description: Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and Share of Model (SoM) Command Center for GenPark & OpenClaw. Distilled from Wildcard (wild-card.ai / Y Combinator W25) and agents.json protocol to audit product citation visibility across LLM shopping agents, reverse-engineer recommendation graphs, and autonomously enrich catalog metadata for zero-hallucination agent retrieval.
version: 1.0.0
license: MIT
---

# zenwild-ai-skill

## Overview
`zenwild-ai-skill` (ZenWild / 禅野) is the Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and Share-of-Model command center for GenPark & OpenClaw. Distilled from **Wildcard's (wild-card.ai / Y Combinator W25) Agentic Visibility Platform and the `agents.json` standard**, ZenWild solves the existential crisis confronting e-commerce merchants in the agentic era: **traditional SEO and Google search ads are collapsing as consumers delegate purchasing decisions to AI agents (ChatGPT, Claude, Perplexity, Gemini, Rufus, and GenPark), making unoptimized brands structurally invisible**.

In traditional search, consumers browse pages of blue links. In agentic commerce, an AI assistant is asked: *"Find me the most durable waterproof hiking boot for wide feet under $200 and buy it."* The agent returns a single recommendation or Curated Triad. If your brand is not cited in the LLM's synthesis or lacks machine-verifiable attributes, your **Share of Model (SoM) is zero**.

Operating local-first within OpenClaw, ZenWild turns brand opacity into structured agentic dominance:
- **Share of Model (SoM) & LLM Citation Auditing**: Continuously probes multi-modal shopping agents (ChatGPT, Claude, Perplexity, Gemini, Rufus) with vertical-specific shopping prompts to measure brand visibility and recommendation rank.
- **Citation Graph Reverse-Engineering**: Deconstructs why competitor SKUs win AI recommendations by tracing citations across Reddit discussions, YouTube gear tear-downs, Wirecutter benchmarks, and specialist forums.
- **`agents.json` Standard Deployment**: Automatically generates and serves `/.well-known/agents.json` manifests, declaring verified merchant capabilities, real-time stock levels, return windows, and machine-actionable tool endpoints.
- **Autonomous PDP Attribute Enrichment**: Scans raw merchant catalog feeds and injects high-density Schema.org JSON-LD microdata (fabric gsm, waterproof rating, width sizing, warranty guarantees) to eliminate agent hallucination and win semantic vector retrieval.

---

## Core Capabilities

### 1. Share of Model (SoM) Radar (`ShareOfModelRadar`)
- Probes LLMs and conversational search engines with high-intent shopping queries:
  - Tracks brand inclusion rates, sentiment polarity, and competitive displacement across models.
  - Generates SKU-level visibility scorecards ("Why Rufus recommended Salomon over Hoka for trail running").
  - Identifies prompt blindspots where the brand is completely omitted from the consideration set.

### 2. Citation Graph & Sentiment Miner (`CitationGraphMiner`)
- Reverse-engineers the external corpus informing LLM weights and RAG pipelines:
  - Analyzes top-cited Reddit threads (r/BuyItForLife, r/GoodValue, niche hobbyist subreddits).
  - Uncovers product attribute debates (e.g., "soles delaminate after 6 months" vs. "lifetime warranty honored").
  - Formulates actionable editorial and attribute counter-strategies to neutralize negative sentiment.

### 3. `agents.json` Protocol Synthesizer (`AgentsJsonSynthesizer`)
- Automatically compiles and hosts the standardized agentic commerce manifest:
  - Deploys `/.well-known/agents.json` to merchant domains.
  - Exposes machine-readable capabilities: inventory endpoints, return policies, PAP/WebMCP hooks, and verified pricing guarantees.
  - Guarantees AI buyer agents zero-friction programmatic discovery without scraping.

### 4. Autonomous PDP Attribute Enricher (`PDPAttributeEnricher`)
- Closes the semantic data gap on Product Detail Pages:
  - Extracts 40+ structured attributes from supplier spec sheets and customer reviews.
  - Generates rich JSON-LD graph injections (Material, Dimensions, EnergyStar, WaterproofRating, Warranty).
  - Prevents agent disqualification caused by missing technical parameters during multi-attribute filtering.

---

## Standard Agentic Visibility & GEO Audit Schema

```json
{
  "protocol": "zenwild-geo/v1.0",
  "audit_id": "geo_audit_9941a",
  "merchant_domain": "trailforge-gear.com",
  "target_category": "ultralight_backpacks",
  "share_of_model_metrics": {
    "overall_som_percentage": 42.5,
    "evaluated_models": ["chatgpt_search", "claude_3.7_sonnet", "perplexity_pro", "gemini_2.5_flash"],
    "rank_distribution": {
      "first_recommendation": 18.2,
      "curated_triad_inclusion": 54.0,
      "omitted": 27.8
    }
  },
  "citation_drivers": [
    {
      "source": "reddit://r/Ultralight",
      "impact": "high_positive",
      "topic": "Dyneema composite fabric durability in alpine rain",
      "citation_frequency": 38
    },
    {
      "source": "web://outdoorgearlab.com/review",
      "impact": "medium_negative",
      "topic": "Hip belt pocket zipper jamming under load",
      "citation_frequency": 14
    }
  ],
  "pdp_enrichment_payload": {
    "sku": "TF-UL-55L-GRY",
    "missing_attributes_injected": {
      "chassis_material": "Ultra 200X UHMWPE",
      "hydrostatic_head_mm": 20000,
      "torso_sizing_range_cm": [43.0, 53.0],
      "bear_canister_compatibility": "BV500_horizontal",
      "warranty_terms": "Lifetime transferable repair or replacement"
    },
    "agents_json_endpoint": "https://trailforge-gear.com/.well-known/agents.json"
  }
}
```

---

## Operational Guidelines

1. **Strict Zero-Blackhat White-Hat Compliance**: Never generate deceptive synthetic reviews or manipulate third-party forums; focus purely on surfacing authentic product truths, lab certifications, and structured technical specifications.
2. **Deterministic Schema Verification**: Validate all injected JSON-LD and `agents.json` files against W3C and Schema.org syntax linters to guarantee zero parsing errors by external LLMs.
3. **Continuous LLM Benchmark Tracking**: Re-audit Share of Model every 7 days across major foundation model updates to detect algorithmic visibility shifts.
4. **Seamless Handoff to Merchant Rails**: Directly link verified `agents.json` endpoints to `zenlumen-ai-skill` (Agentic Pages) and `zennile-ai-skill` (Multi-Rail Distribution) for closed-loop discovery-to-checkout execution.
