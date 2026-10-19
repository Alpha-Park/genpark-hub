---
name: zenchannel-ai-skill
description: Universal open product knowledge graph and Model Context Protocol (MCP) search infrastructure distilled from Channel3 (YC S25). Empowers AI shopping agents with real-time access to 100M+ normalized products, multimodal image/text discovery, cross-merchant SKU de-duplication, and native affiliate attribution rails.
version: 1.0.0
license: Apache-2.0
metadata:
  category: commerce
  author: Alpha-Park
  tags:
    - agentic-commerce
    - product-knowledge-graph
    - model-context-protocol
    - multimodal-search
    - cross-merchant-indexing
    - affiliate-clearing
---

# ZenChannel (禅渠) — Universal Product Graph & Open MCP Search Infrastructure

## Overview

Historically, comprehensive e-commerce product graphs—real-time inventory, pricing, variant matrix, high-resolution imagery, and specifications—have been locked behind proprietary walled gardens (Amazon, Google Shopping, OpenAI). Independent AI shopping assistants, personal fashion stylists, and autonomous procurement agents were severely handicapped by brittle web scrapers or general web search APIs that returned stale SEO articles rather than structured, queryable inventory.

**ZenChannel (禅渠)**, distilled from **Channel3** (YC S25, backed by Matrix and Paul Graham), establishes a neutral, universal product knowledge graph and open Model Context Protocol (MCP) infrastructure layer. It indexes and normalizes over 100 million products across thousands of merchants, performs multimodal variant de-duplication, provides millisecond MCP search tools for LLMs, and embeds zero-configuration affiliate attribution clearing rails.

```
       [ Human Intent / Reference Image ]
                       │
       ┌───────────────▼───────────────┐
       │   ZenChannel MCP Tool Layer   │ ◄─── Model Context Protocol (MCP)
       └───────────────┬───────────────┘
                       │
      ┌────────────────┼────────────────┐
      ▼                ▼                ▼
[ search_products ] [ lookup_url ]  [ compare_offers ]
 • Semantic vector  • Variant parse • Multi-seller matrix
 • Real-time stock  • Spec extractor• Tax & ship landed cost
      │                │                │
      └────────────────┼────────────────┘
                       │
       ┌───────────────▼───────────────┐
       │  Multimodal De-Duplication    │ ◄─── Computer Vision + LLM Clustering
       └───────────────┬───────────────┘
                       │
       ┌───────────────▼───────────────┐
       │ Unified Merchant Knowledge    │ ◄─── Shopify, WooCommerce, Headless,
       │           Graph               │      Amazon, Open Web Catalogs
       └───────────────────────────────┘
```

---

## Core Capabilities

### 1. Universal Product Knowledge Graph & Normalization
- **Cross-Platform Schema Harmonization**: Transforms heterogeneous merchant markup (Schema.org JSON-LD, OpenGraph, dynamic React hydration state, messy HTML tables) into a strictly typed catalog schema.
- **Multimodal Entity De-Duplication**: Employs dual-encoder vision embeddings (CLIP) and semantic LLM classifiers to resolve identical physical SKUs sold across disparate retailers (e.g., Nike, Nordstrom, Foot Locker, StockX) into a canonical product entity node.
- **Dynamic Variant Matrix**: Maintains real-time availability states across sizes, colors, styles, and regional stock warehouses without stale cache misses.

### 2. Native Model Context Protocol (MCP) Tool Suite
ZenChannel exposes native MCP tool endpoints (`mcp.genpark.zenchannel`), allowing LLM agents to seamlessly call structured product tools:
- `search_products(query, filters, limit, thread_id)`: Natural language and filtered search by price boundaries, in-stock status, color palettes, and brand IDs.
- `lookup_product_url(url)`: Instant URL reverse-lookup extracting structured specs, SKU variations, and cross-retailer pricing.
- `compare_merchant_offers(product_id)`: Fetches multi-merchant landed cost tables, calculating base price, estimated sales tax, shipping SLAs, and return policies.

### 3. Multimodal Hybrid Retrieval (Text + Image)
- **Joint Semantic Embeddings**: Allows consumers to supply text prompts ("find a tailored double-breasted linen blazer under $200") combined with inspiration photos or street-style snapshots.
- **Visual Delta Search**: Computes vector deltas against reference images to accommodate user adjustments ("same silhouette as this image, but in sage green without lapel pins").

### 4. Zero-Config Universal Affiliate & Attribution Rail
- **Sub-Affiliate Clearing Hub**: Automatically wraps outbound product URLs with merchant-compliant affiliate parameters via a centralized network gateway, eliminating the need for agent developers to maintain hundreds of individual affiliate publisher accounts.
- **Session-Bound Micro-Attribution**: Accepts `x-user-id` and `agent-session-id` headers to accurately attribute GMV and stream commissions back to the personal agent operator.

---

## Tool Definitions (Model Context Protocol)

```json
{
  "tools": [
    {
      "name": "search_products",
      "description": "Search across 100M+ normalized e-commerce products using semantic text, image URLs, and structured filters.",
      "parameters": {
        "type": "object",
        "properties": {
          "query": { "type": "string", "description": "Natural language search query" },
          "image_url": { "type": "string", "description": "Optional reference image URL for multimodal visual matching" },
          "filters": {
            "type": "object",
            "properties": {
              "min_price": { "type": "number" },
              "max_price": { "type": "number" },
              "in_stock_only": { "type": "boolean", "default": true },
              "category": { "type": "string" },
              "brand": { "type": "string" }
            }
          },
          "limit": { "type": "integer", "default": 10 },
          "thread_id": { "type": "string", "description": "Thread ID from previous search turn to maintain multi-turn context" }
        },
        "required": ["query"]
      }
    },
    {
      "name": "lookup_product_url",
      "description": "Extract structured product specs, live variants, and alternative merchant offers from any e-commerce URL.",
      "parameters": {
        "type": "object",
        "properties": {
          "url": { "type": "string", "description": "Target merchant product page URL" }
        },
        "required": ["url"]
      }
    },
    {
      "name": "compare_merchant_offers",
      "description": "Retrieve all merchant offers for a canonical product ID with real-time landed cost comparison.",
      "parameters": {
        "type": "object",
        "properties": {
          "product_id": { "type": "string", "description": "Canonical ZenChannel product ID" },
          "destination_zip": { "type": "string", "description": "Postal code for precise tax and shipping calculations" }
        },
        "required": ["product_id"]
      }
    }
  ]
}
```

---

## Operating Guidelines & Guardrails

1. **Strict Zero-Stale Guarantee**: Never return an offer without verifying real-time stock status through the live inventory cache (< 5 minutes TTL).
2. **Neutrality & Anti-Affiliate Distortion**: Never alter product ranking scores or relevance algorithms based on affiliate payout percentages. Ranking must strictly reflect user relevance, landed price, and merchant reliability.
3. **Data Privacy & Ephemeral Sessions**: User uploaded reference photos, body measurements, and specific search contexts must be processed ephemerally within the sandboxed session and never leaked into public training corpora.
4. **Handoff to Procurement Engines**: Hand off finalized candidate SKUs directly to `zenrye-ai-skill` (headless checkout) or `zenfirm-ai-skill` (protocol checkout) with verified variant IDs and landed price caps.
