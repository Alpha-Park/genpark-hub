---
name: zenzoma-ai-skill
description: Enterprise Agentic Commerce Optimization (ACO) and Synthetic Shopper Simulation engine distilled from Azoma (Ecomtent). Implements the 5 Cs framework (Completeness, Context, Citations, Correctness, Customer Acquisition), Digital Twin shopper persona simulations across ChatGPT, Gemini, Rufus, and Sparky, and automated LLM hallucination correction manifests.
version: 1.0.0
license: Apache-2.0
metadata:
  category: commerce
  author: Alpha-Park
  tags:
    - agentic-commerce-optimization
    - aco-framework
    - digital-twin-shoppers
    - llm-hallucination-defense
    - 5-cs-framework
    - share-of-model
    - synthetic-personas
---

# ZenZoma (禅域) — Enterprise Agentic Commerce Optimization & Synthetic Shopper Simulation

## Overview

As consumer decision-making shifts from human Google searches to autonomous AI shopping agents (ChatGPT, Gemini, Amazon Rufus, Meta Muse, and Walmart Sparky), traditional SEO and Amazon PPC ads are facing catastrophic obsolescence. Brands no longer compete for human clicks on blue links; they compete to be **the singular product chosen inside an AI agent's prompt reasoning loop**.

**ZenZoma (禅域)**, distilled from the enterprise **Agentic Commerce Optimization (ACO)** architecture of **Azoma (`azoma.ai`)** ($11.2M Series A led by Puma Growth Partners, with dunnhumby), establishes the definitive brand optimization suite for the agent economy ("定域定界，万象归真").

ZenZoma codifies the **5 Cs of Agentic Commerce** (Completeness, Context, Citations, Correctness, Customer Acquisition) and pioneers **Digital Twin Shopper Swarms**: deploying thousands of synthetic AI buyer personas to probe, stress-test, and benchmark brand recommendation frequencies across foundation LLMs, while automatically rectifying dangerous LLM hallucinations before they damage customer acquisition.

```
       ┌────────────────────────────────────────────────────────┐
       │             Brand Master Catalog & Truth Data          │
       │       (Specifications, Lab Tests, Fit Matrices)        │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼ [ZenZoma 5 Cs Audit Engine]
       ┌────────────────────────────────────────────────────────┐
       │                The 5 Cs ACO Pipeline                   │
       │  1. Completeness: Machine-readable attribute parity    │
       │  2. Context: High-intent conversational Q&A embeddings │
       │  3. Citations: Reddit r/BIFL & earned review graphs    │
       │  4. Correctness: Hallucination sniffer & JSON-LD patch │
       │  5. Customer Acquisition: Agent referral attribution   │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │       Digital Twin Shopper Swarm (Synthetic Personas)  │
       │   [Budget Vegan]  [Frequent Flyer]  [Sensitive Skin]   │
       └──────────────┬───────────────────────────┬─────────────┘
                      │                           │
                      ▼                           ▼
            [ ChatGPT / Rufus / Gemini ]   [ Competitor Profiling ]
            Simulates 10,000 queries/day    Measures SoM Win/Loss
                      │                           │
                      └─────────────┬─────────────┘
                                    │
                                    ▼
       ┌────────────────────────────────────────────────────────┐
       │      Automated LLM Correction & agents.json Sync       │
       │    Deploys cryptographic patches to cure model drift   │
       └────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. The 5 Cs of Agentic Commerce Framework
- **Completeness**: Evaluates product listings through the exact parsing lenses of leading LLMs and shopping agents, flagging missing machine-critical attributes (e.g., pH balance, exact seam measurements, allergy declarations).
- **Context**: Transforms static spec sheets into conversational Q&A knowledge vectors answering the authentic multi-constraint prompts consumers ask AI (e.g., *"Is this moisturizer safe for dry alpine winters while wearing mineral sunscreen?"*).
- **Citations**: Maps off-platform earned media, Reddit discussions, expert reviews, and YouTube teardowns that foundation LLMs weight heavily during recommendation synthesis.
- **Correctness**: Continuously audits LLM outputs to detect factual hallucinations (e.g., model falsely claiming a product contains toxic additives or lacks warranty) and generates authoritative correction declarations.
- **Customer Acquisition**: Bridges ACO visibility metrics with actual agentic GMV conversion and coupon tracking.

### 2. Digital Twin Shopper Simulation (Synthetic Persona Swarm)
- **Synthetic Buyer Personas**: Generates diverse synthetic shopper profiles spanning demographic archetypes, spending sensitivities, dietary restrictions, and aesthetic preferences.
- **Automated Stress Testing**: Dispatches thousands of natural-language shopping queries daily against ChatGPT, Claude, Gemini, Rufus, and Sparky to calculate real-world **Share of Model (SoM)** win/loss ratios against competitors.

### 3. Automated LLM Hallucination Correction Engine
- **Model Truth Anchor**: Compares LLM claims directly against brand-certified engineering CADs, lab assays, and return policies.
- **Authoritative Patch Deployment**: Automatically compiles corrective Schema.org JSON-LD snippets, `/.well-known/agents.json` assertions, and indexation pings to force LLM RAG pipelines to overwrite false assumptions.

### 4. Cross-Model Recommendation Radar
- **Disqualification Reason Diagnostics**: Uncovers the exact prompt constraints where a product was eliminated by an agent (e.g., "eliminated in round 2 due to lack of explicit microplastic-free certification").

---

## Tool Definitions (Model Context Protocol)

```json
{
  "tools": [
    {
      "name": "zenzoma_audit_5c_readiness",
      "description": "Audit an enterprise SKU or catalog against the 5 Cs of Agentic Commerce (Completeness, Context, Citations, Correctness, Acquisition).",
      "parameters": {
        "type": "object",
        "properties": {
          "product_url": { "type": "string" },
          "target_models": {
            "type": "array",
            "items": { "type": "string" },
            "default": ["chatgpt", "gemini", "rufus", "perplexity"]
          }
        },
        "required": ["product_url"]
      }
    },
    {
      "name": "zenzoma_run_synthetic_shopper_swarm",
      "description": "Deploy synthetic AI buyer personas to benchmark brand recommendation rate and Share of Model (SoM) against competitors.",
      "parameters": {
        "type": "object",
        "properties": {
          "category": { "type": "string" },
          "brand_sku": { "type": "string" },
          "competitor_skus": { "type": "array", "items": { "type": "string" } },
          "persona_archetypes": {
            "type": "array",
            "items": { "type": "string" },
            "default": ["budget_conscious", "premium_enthusiast", "eco_first", "convenience_seeker"]
          },
          "simulation_runs": { "type": "integer", "default": 100 }
        },
        "required": ["category", "brand_sku", "competitor_skus"]
      }
    },
    {
      "name": "zenzoma_generate_hallucination_correction_manifest",
      "description": "Detect model inaccuracies regarding product claims and compile an authoritative Schema.org/agents.json patch.",
      "parameters": {
        "type": "object",
        "properties": {
          "sku": { "type": "string" },
          "detected_false_claims": { "type": "array", "items": { "type": "string" } },
          "certified_truth_evidence": { "type": "string" }
        },
        "required": ["sku", "detected_false_claims", "certified_truth_evidence"]
      }
    }
  ]
}
```

---

## Operating Guidelines & Guardrails

1. **Deterministic Ground Truth**: All optimization recommendations and correction declarations must be backed by verifiable brand documentation or accredited third-party lab testing.
2. **Zero Synthetic Review Generation**: Never create fake consumer reviews or manipulate earned-media forums; ACO focuses strictly on structured truth surfacing and factual clarity.
3. **Continuous Model Drift Tracking**: Re-benchmark Share of Model weekly to account for underlying foundation model weight updates and retrieval corpus shifts.
4. **Local Enclave Data Privacy**: Proprietary brand margins, wholesale price floors, and internal CAD specs must remain strictly confidential within the brand's local OpenClaw workspace.
