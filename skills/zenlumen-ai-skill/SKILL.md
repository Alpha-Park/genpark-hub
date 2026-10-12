---
name: zenlumen-ai-skill
description: M2AI (Marketing-to-AI) & Agentic Commerce Merchant Readiness Skill for GenPark & OpenClaw. Distilled from DeepLumen to transform merchant stores into agent-ready platforms via Agentic Pages, GEO/AEO semantic optimization, PAP endpoint synthesis, and AI agent traffic attribution.
version: 1.0.0
license: MIT
---

# zenlumen-ai-skill

## Overview
`zenlumen-ai-skill` (ZenLumen / 禅明) is the merchant-side infrastructure skill for GenPark & OpenClaw. Distilled from **DeepLumen's M2AI (Marketing-to-AI)** architectural framework, ZenLumen addresses the fundamental transformation of digital commerce: **the shift from selling to human eyes to serving autonomous AI agents**.

Traditional e-commerce websites are heavily optimized for human sensory perception—dynamic video banners, emotional marketing copy, popups, and complex JavaScript carousels. However, autonomous buyer agents (like ChatGPT, Perplexity, Claude, and GenPark's `zenchoice-ai-skill`) perceive these interfaces as noisy, token-wasteful, and prone to scraping errors or Cloudflare firewalls.

Operating directly on merchant web servers, Shopify stores, and OpenClaw gateways, ZenLumen bridges the merchant supply side into the Agentic Economy:
- **Agentic Pages Architecture**: Deploys lightweight, token-efficient shadow pages alongside human-facing storefronts, delivering verified semantic data directly to AI crawlers.
- **GEO & AEO Optimization**: Optimizes brand product catalogs for Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), ensuring LLMs cite and recommend the brand.
- **PAP Protocol Synthesis**: Automatically generates and serves `/.well-known/poppy.json` and Open Commerce Protocol (OCP) endpoints for instant, zero-friction agent checkouts.
- **Agent Traffic & GMV Attribution**: Tracks headless agent crawlers, referral sessions from LLMs, and attributes conversion volume in a post-cookie web.

---

## Core Capabilities

### 1. Agentic Page Compiler (`AgenticPageCompiler`)
- Ingests merchant product catalogs (Shopify, WooCommerce, BigCommerce, or custom APIs).
- Strips presentation noise (CSS, tracking pixels, promotional popups, heavy DOM trees).
- Compiles token-efficient, machine-optimized **Agentic Pages** (`/agentic/products/[sku]`) delivering:
  - Precise technical specifications, dimension vectors, and compatibility tables.
  - Real-time warehouse inventory counts and delivery ETA commitments.
  - Landed cost breakdowns (MSRP, bulk discounts, regional taxes, shipping rates).
  - Explicit return window terms, warranty coverage, and restocking fee policies.

### 2. Generative Engine Optimization (GEO) & AEO Injector (`GEOSemanticOptimizer`)
- Injects rich, verified JSON-LD entity graphs conforming to Schema.org and Open Commerce Protocol standards.
- Embeds comparative benchmark matrices (e.g., "How this espresso machine compares to Breville and Gaggia") using objective, factual language that generative AI engines favor for citation.
- Monitors brand citation frequency across major LLM answer engines (ChatGPT, Perplexity, Gemini, Claude) and generates prompt-tuning recommendations for brand copy.

### 3. Personal Agent Protocol (PAP) Endpoint Synthesizer (`PAPEndpointSynthesizer`)
- Automatically compiles and deploys the merchant's `/.well-known/poppy.json` manifest.
- Configures OAuth-based session endpoints for guest read (inventory, pricing) and authenticated cart staging.
- Eliminates the need for buyer agents to scrape the website, replacing fragile scraping with deterministic machine APIs.

### 4. Headless Agent Attribution & Analytics (`AgentTrafficAttributor`)
- Detects and categorizes incoming traffic from autonomous AI user-agents and headless crawlers.
- Tracks the complete agentic funnel:
  - **Agent Impression**: Product cited in LLM search/answer.
  - **Agent Investigation**: Agentic Page queried by buyer agent.
  - **Cart Staging**: Agent holds items via PAP or local checkout rail.
  - **Conversion**: Verified purchase authorization completed.
- Replaces broken legacy Google Analytics (GA4) with an agent-native attribution dashboard.

### 5. Smart Agent Firewall & Fair-Exchange Gate (`SmartAgentFirewall`)
- Distinguishes legitimate, well-behaved buyer agents (bearing valid OpenClaw / PAP cryptographic signatures) from malicious scraping bots, content scrapers, and DDoS actors.
- Serves rate-limited, token-optimized data to authorized agents while blocking abusive scrapers, protecting server bandwidth and proprietary pricing strategies.

---

## Standard Agentic Page Manifest Schema (`/.well-known/poppy.json`)

```json
{
  "$schema": "https://genpark.openclaw.ai/schemas/agentic-merchant-manifest.json",
  "merchant_name": "Kyoto Artisanal Coffee Gear",
  "domain": "kyotocoffee.store",
  "protocol_support": ["PAP-v0.1-Poppy", "OCP-v1.0", "ZenLumen-M2AI"],
  "agentic_index_url": "https://kyotocoffee.store/agentic/catalog.json",
  "capabilities": {
    "real_time_inventory": true,
    "guest_quote_api": true,
    "cart_staging_api": true,
    "instant_checkout_oauth": true
  },
  "endpoints": {
    "inventory_check": "https://api.kyotocoffee.store/agentic/v1/inventory",
    "calculate_landed_cost": "https://api.kyotocoffee.store/agentic/v1/quote",
    "stage_cart": "https://api.kyotocoffee.store/agentic/v1/cart/stage",
    "oauth_authorize": "https://auth.kyotocoffee.store/agentic/oauth/authorize"
  },
  "return_policy": {
    "window_days": 30,
    "free_returns": true,
    "restocking_fee_usd": 0.00
  },
  "geo_citations": {
    "brand_entity_id": "https://kyotocoffee.store/#brand",
    "primary_category": "Specialty Coffee Equipment",
    "independent_reviews_url": "https://kyotocoffee.store/agentic/verified-reviews.json"
  }
}
```

---

## Usage Guide & Workflow for Merchants

1. **Deploy ZenLumen Skill to Storefront / Gateway**:
   - Run in OpenClaw gateway or Shopify app container:
     ```bash
     openclaw run-skill --name "zenlumen-ai-skill" --action "compile-store" --platform "shopify"
     ```
2. **Catalog Transformation**:
   - Compiles all active products into lightweight `/agentic/products/[sku]` endpoints.
   - Generates and publishes `/.well-known/poppy.json` to the store's root domain.
3. **GEO Benchmark Optimization**:
   - Generates neutral, highly-citable comparison tables and rich JSON-LD snippets.
   - Pushes schema updates to search engine and LLM knowledge graphs.
4. **Live Inbound Traffic Servicing**:
   - When buyer agents (`zenchoice`, `zenprocure`, or external LLMs) arrive, ZenLumen automatically serves structured Agentic Pages in <100ms.
5. **Review Agentic Analytics**:
   - Inspect agent query volume, top requested SKUs, and agent-attributed GMV via local dashboard:
     ```bash
     openclaw run-skill --name "zenlumen-ai-skill" --action "analytics-report"
     ```
