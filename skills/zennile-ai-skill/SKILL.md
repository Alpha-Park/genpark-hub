---
name: zennile-ai-skill
description: Multi-Rail Agent Distribution & Sovereign Checkout Infrastructure for GenPark & OpenClaw. Distilled from Nile (nile.app) to synthesize machine-legible product context cards, broadcast across ACP/UCP/MCP rails, and route agent shoppers into merchant-owned sovereign checkouts.
version: 1.0.0
license: MIT
---

# zennile-ai-skill

## Overview
`zennile-ai-skill` (ZenNile / 禅川) is the multi-rail agent distribution and sovereign checkout gateway for GenPark & OpenClaw. Distilled from **Nile's (nile.app) Agentic Commerce Stack**, ZenNile equips brands and merchants with an autonomous AI sales infrastructure that actively represents their products inside external AI shopping agents—including ChatGPT, Gemini, Perplexity, Meta Muse, TikTok, and private user agents.

As commerce shifts from human search queries to agent-mediated recommendations ("Context is the new shelf"), merchants face two critical existential risks:
1. **Agent Invisibility**: Traditional visual storefronts waste LLM tokens, get blocked by anti-bot firewalls, and fail to convey nuance ("who it's for, when to recommend, why it fits").
2. **Platform Disintermediation**: Walled garden marketplace checkouts strip customer relationships, retention data, and repeat purchase loyalty.

Operating local-first within OpenClaw, ZenNile bridges merchant catalogs with the global agentic shopping mesh:
- **Agent-Legible Context Cards**: Compiles raw SKU feeds into structured contextual vectors answering *Who it's for*, *When to recommend*, and *Why it fits*.
- **Omni-Rail Agent Broadcasting**: Simultaneously publishes catalog endpoints across **ACP** (Agentic Commerce Protocol), **UCP** (Universal Commerce Protocol), **MCP** (Model Context Protocol), and **Agent Skills** interfaces.
- **Sovereign Merchant Checkout Routing**: Enforces headless handoff directly into the brand's native store checkout, preserving 100% customer data and repeat-buyer relationships.
- **Any-Touch Agent Attribution & GEO Rank Tracking**: Quantifies agentic referral traffic, conversion lift, and query intent ranking across major LLM ecosystems.

---

## Core Capabilities

### 1. Agent-Legible Context Card Compiler (`ContextCardCompiler`)
- Ingests raw store catalogs (Shopify, CSV, REST API) and enriches them with qualitative semantic attributes:
  - **Ideal Customer Persona & Fit**: Skin type, dietary restrictions, lifestyle attributes, compatibility boundaries.
  - **Contextual Recommendation Triggers**: Specific scenarios ("winter dryness", "safe with tretinoin", "gift under $30").
  - **Verified Value Claims**: Ingredient hierarchy, certifications, and review sentiment consensus.
- Outputs lightweight, high-density JSON-LD and Markdown context cards optimized for minimal token consumption by external buyer agents.

### 2. Multi-Rail Protocol Gateway (`MultiRailDistributor`)
- Translates product context into the native protocols of external agent frameworks:
  - **ACP (Agentic Commerce Protocol)**: RESTful machine endpoints for OpenAI ChatGPT shopping extensions.
  - **UCP (Universal Commerce Protocol)**: Decentralized commerce discovery manifests.
  - **MCP (Model Context Protocol)**: Anthropic Claude and OpenClaw native tool schemas.
  - **Agent Skills Rails**: Function-calling manifests for Google Gemini, Perplexity, and custom agents.

### 3. Sovereign Checkout & Headless Cart Handoff (`SovereignCheckoutRouter`)
- Prevents platform lock-in by refusing third-party captive checkouts.
- When an external buyer agent confirms purchase intent:
  - Generates a pre-filled, signed session token containing items, discounts, and shipping estimates.
  - Seamlessly redirects to or completes within the merchant's native checkout domain (`yourbrand.com/checkout`).
  - Preserves merchant customer accounts, loyalty points, and marketing opt-ins.

### 4. Agentic Traffic Attribution & GEO Rank Monitor (`AgentAttributionEngine`)
- Distinguishes headless AI agent inquiries from human browser traffic.
- Provides multi-touch attribution for sales initiated in conversational LLMs:
  - Prompt intent categorization (e.g., "best non-comedogenic moisturizer").
  - LLM citation frequency and share of voice.
  - Real-time conversion tracking across organic AI discovery channels.

---

## Standard Multi-Rail Context Card Schema

```json
{
  "protocol": "zennile-context-card/v1.0",
  "sku": "SKU-BARRIER-REPAIR-50ML",
  "product_name": "Barrier Repair Ceramide Balm",
  "merchant": {
    "name": "Botanica Labs",
    "domain": "https://botanicalabs.example.com",
    "sovereign_checkout_url": "https://botanicalabs.example.com/cart/{token}"
  },
  "pricing": {
    "currency": "USD",
    "amount": 28.00,
    "inventory_status": "in_stock",
    "stock_count": 142
  },
  "context_vector": {
    "target_shopper": ["sensitive_skin", "fragrance_avoiders", "post_retinol_barrier"],
    "trigger_occasions": ["winter_dryness", "safe_with_tretinoin", "gift_under_30"],
    "fit_proof": {
      "key_ingredients": ["Ceramide NP", "Squalane", "Centella Asiatica"],
      "claims_verified": ["Fragrance-free", "Non-comedogenic", "Cruelty-free"],
      "social_consensus": "4.8/5.0 across 2,100 verified reviews"
    }
  },
  "distribution_rails": {
    "acp_endpoint": "/.well-known/acp/product/SKU-BARRIER-REPAIR-50ML",
    "ucp_manifest": "/.well-known/ucp.json",
    "mcp_resource": "mcp://commerce/products/SKU-BARRIER-REPAIR-50ML",
    "agent_skills": "/api/v1/skills/query-product"
  }
}
```

---

## Operational Guidelines

1. **Zero Intermediate Markup**: Always serve authentic merchant-direct pricing without affiliate markup or hidden referral surcharges.
2. **Context Freshness Guarantee**: Synchronize inventory, price changes, and promotions across all broadcast rails within 10 minutes of store catalog updates.
3. **Data Sovereignty First**: Keep customer contact information, payment tokens, and purchase histories exclusively within the merchant's native order management system.
4. **Token-Efficiency Mandate**: Maintain context card payloads under 400 tokens per SKU to prevent external buyer agents from truncating product details during retrieval.
