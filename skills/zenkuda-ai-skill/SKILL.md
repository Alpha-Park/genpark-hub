---
name: zenkuda-ai-skill
description: Web Model Context Protocol (WebMCP) & Network-Tokenized Payment Gateway for GenPark & OpenClaw. Distilled from Nekuda (nekuda.ai) and Visa Intelligent Commerce to terminate brittle DOM visual scraping by exposing native browser navigator.modelContext tool calling, synthesized client adapters, and domain-bound network token settlement.
version: 1.0.0
license: MIT
---

# zenkuda-ai-skill

## Overview
`zenkuda-ai-skill` (ZenKuda / 禅枢) is the browser-native Web Model Context Protocol (WebMCP) discovery harness and tokenized payment bridge for GenPark & OpenClaw. Distilled from **Nekuda's (nekuda.ai) WebMCP & Agentic Wallet Architecture**, ZenKuda replaces brittle Computer-Use visual screenshotting and heuristic DOM clicking with **structured, client-side tool execution via `navigator.modelContext` and Visa Intelligent Commerce network tokens**.

For the past three years, personal shopping agents have relied on Computer Use models to take screenshots of desktop browsers, infer coordinate positions, and blindly click form inputs. This visual approach suffers from:
1. **Severe Latency & Cost**: 3–5 seconds per visual action with thousands of tokens consumed per click.
2. **Extreme Brittle Breakdown**: A 10px CSS layout shift or responsive popup immediately derails the checkout flow.
3. **Cardholder Form Friction**: Forcing AI agents to autofill 16-digit credit cards into plain-text inputs risks credential interception and triggers aggressive anti-fraud 3DS blocks.

Operating local-first within OpenClaw's resident browser session, ZenKuda bridges web applications directly into model context:
- **`navigator.modelContext` Tool Discovery**: Interrogates in-page WebMCP registries to discover merchant-declared tools (`addToCart`, `checkStock`, `applyCoupon`, `getLandedShipping`).
- **Synthetic WebMCP DOM Polyfill**: Automatically synthesizes WebMCP schemas on legacy web stores by compiling microdata, JSON-LD, and checkout state machines into executable JavaScript calls.
- **Zero-Visual Client Execution**: Invokes web functions directly inside the page's execution thread, reusing authenticated cookies, active cart state, and CSRF tokens without visual interaction.
- **Visa Intelligent Commerce & Network Tokenization**: Interacts with card networks (Visa/Mastercard) to issue cryptographically signed, merchant-bound Network Tokens, bypassing raw PAN entry and 3DS verification blocks.

---

## Core Capabilities

### 1. WebMCP Tool Registry & Discovery Engine (`WebMCPDiscoveryEngine`)
- Inspects the active browser tab context for WebMCP compliance:
  - Listens for `navigator.modelContext.getTools()` and registers callable functions.
  - Extracts typed JSON input/output schemas, docstrings, and constraints.
  - Maps natural language agent intents (e.g., "Add size 42 in Sage to cart") directly to structured tool calls (`executeTool('cart_add', { sku_id: 'SAGE-42', qty: 1 })`).

### 2. Autonomous WebMCP Polyfill Synthesizer (`WebMCPPolyfillSynthesizer`)
- For websites lacking native WebMCP implementations:
  - Scans DOM elements, Schema.org product metadata, and standard cart endpoints.
  - Dynamically injects a sandboxed client-side adapter exposing standardized WebMCP tools.
  - Intercepts checkout mutations and guarantees deterministic state transitions.

### 3. Tokenized Payment & Network Cryptogram Bridge (`NetworkTokenPaymentBridge`)
- Replaces raw credit card autofill with cryptographic network tokens:
  - Interfaces with Visa Intelligent Commerce and Mastercard Agent Pay standards.
  - Requests an ephemeral Network Token bound exclusively to the target merchant's Merchant Category Code (MCC) and transaction amount.
  - Transmits one-time cryptograms directly into the merchant payment gateway iframe, achieving 100% authorization rates without storing sensitive PANs.

### 4. Resident Session State Synchronizer (`ResidentSessionSync`)
- Synchronizes shopping state seamlessly across platforms:
  - Shares active cart tokens between OpenClaw mobile daemons (WhatsApp/Telegram) and desktop browsers.
  - Preserves user identity, loyalty points, and member pricing without manual login steps.

---

## Standard WebMCP Tool Execution Payload Schema

```json
{
  "protocol": "zenkuda-webmcp/v1.0",
  "execution_id": "exec_mcp_99214d",
  "tab_context": {
    "origin": "https://www.arcteryx.com",
    "page_type": "product_detail_page",
    "webmcp_version": "0.4.1-draft"
  },
  "discovered_tools": [
    {
      "name": "cart_stage_item",
      "description": "Stages an apparel variant to cart and returns landed tax/shipping preview",
      "parameters": {
        "variant_id": "ARC-BETA-LT-BLK-M",
        "quantity": 1,
        "postal_code": "94107"
      }
    },
    {
      "name": "network_token_checkout",
      "description": "Executes immediate one-tap checkout using Visa Intelligent Commerce token",
      "parameters": {
        "network_token": "4111********1111",
        "cryptogram": "AQAAAAAAAKm1A4BFAAAAAAAA",
        "max_authorized_usd": 450.00
      }
    }
  ],
  "invoked_action": {
    "tool": "cart_stage_item",
    "arguments": {
      "variant_id": "ARC-BETA-LT-BLK-M",
      "quantity": 1,
      "postal_code": "94107"
    },
    "result": {
      "status": "success",
      "cart_token": "cart_arc_88192a",
      "subtotal_usd": 450.00,
      "shipping_usd": 0.00,
      "estimated_tax_usd": 38.25,
      "total_landed_usd": 488.25,
      "stock_confirmed": true
    }
  }
}
```

---

## Operational Guidelines

1. **Prioritize Native WebMCP Over DOM Scraping**: Always query `navigator.modelContext` before falling back to computer-use or DOM selectors.
2. **Domain-Bound Token Isolation**: Ensure payment network tokens are strictly scoped to the destination merchant domain and transaction ceiling to prevent replay attacks.
3. **Zero Plain-Text PAN Storage**: Never log or cache unmasked 16-digit Primary Account Numbers (PAN) or CVVs in memory or disk logs.
4. **Sub-100ms In-Page Latency**: Keep tool invocation and client-side polyfill execution below 100ms to guarantee instantaneous user feedback in connected messaging apps.
