---
name: zenrindler-ai-skill
description: Universal Web-to-MCP State Machine Compiler & Deterministic Agent Tooling engine distilled from Rindler (YC Summer 2026). Transforms arbitrary non-API websites into strongly typed, remote Model Context Protocol (MCP) server endpoints with self-healing DOM state-action graphs, sub-200ms headless execution, and 95% token cost reduction over visual computer-use.
version: 1.0.0
license: Apache-2.0
metadata:
  category: commerce
  author: Alpha-Park
  tags:
    - web-to-mcp
    - rindler-paradigm
    - deterministic-browser-state
    - mcp-server-compiler
    - anti-bot-resilience
    - token-efficient-execution
---

# ZenRindler (禅轨) — Universal Web-to-MCP Compiler & Deterministic Agent Tooling

## Overview

In contemporary agentic shopping, conventional visual browser agents ("Computer Use") treat every webpage visit like an unknown puzzle. They capture high-resolution screenshots (500KB–1MB per step), spend 5,000–20,000 tokens per prompt guessing (x, y) coordinates, get stalled on cookie banners, 1Password overlays, and anti-bot Turnstiles, and suffer 30%+ failure rates in real-world production.

**ZenRindler (禅轨)**, distilled from the breakthrough infrastructure of **Rindler (`rindler.com`, YC Summer 2026)**, renders fragile visual guessing obsolete ("如列铁轨，瞬息直达；化网为契，万端归真").

ZenRindler maps any arbitrary website *once* into a deterministic state-action-screen graph and dynamically exposes the entire website as a remote **Model Context Protocol (MCP) Server**. Instead of taking screenshots and guessing where to click, personal buyer agents (like `zenchoice` or `zenprocure`) simply invoke strongly typed MCP tool functions (`bestbuy.search_products`, `zara.select_size_and_cart`) that execute headlessly in under 200ms with 95% token savings.

```
       ┌────────────────────────────────────────────────────────┐
       │             AI Buyer Agent (e.g. ZenChoice)            │
       │       Invokes native MCP tool: call_tool("search")     │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼ [Standard MCP JSON-RPC Request]
       ┌────────────────────────────────────────────────────────┐
       │             ZenRindler Universal MCP Server            │
       │  • Tool Discovery: Auto-exposes remote web schema      │
       │  • State Graph: Resolves URL into Screen States        │
       │  • Action Compiler: Maps JSON parameters to DOM actions│
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼ [Deterministic Execution Engine]
       ┌────────────────────────────────────────────────────────┐
       │          Self-Healing Headless Browser Relay           │
       │  • Native Session Cookies   • Cookie Banner Suppressor │
       │  • Anti-Bot Turnstile Relay • Layout Shift Self-Healing│
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼ [Sub-200ms Typed Response]
       ┌────────────────────────────────────────────────────────┐
       │           Clean Structured JSON Payload Returned       │
       │  • Product List: [{sku, title, price, in_stock}]       │
       │  • Zero screenshot tokens consumed (<300 tokens total) │
       └────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. Web-to-MCP State Machine Synthesis
- **Single-Pass Site Mapping**: Analyzes an arbitrary web storefront once, deconstructing it into standardized screen states (`SearchScreen`, `CategoryNav`, `PDPView`, `CartView`, `CheckoutStep`).
- **Remote MCP Exposure**: Instantly spins up a standard Model Context Protocol endpoint hosting typed tool definitions (`search_catalog`, `get_variant_availability`, `add_sku_to_cart`, `calculate_shipping`).

### 2. Radical Token & Latency Optimization
- **Zero-Screenshot Architecture**: Eliminates the high-latency visual loop of Claude Computer Use / browser-use agents.
- **95% Token Reduction**: Replaces 10,000-token screenshot multi-turn guessing with a single 250-token structured JSON function call.
- **Sub-200ms Turnaround**: Dispatches deterministic DOM actions in milliseconds, enabling fluid real-time chat interactions on WhatsApp or Telegram.

### 3. Anti-Fragile Self-Healing Browser Relay
- **Automatic Obstacle Clearance**: Automatically suppresses marketing popups, age verification gates, cookie consent modals, and password managers before action execution.
- **Layout Shift Adaptation**: Employs semantic selector heuristics (combining text landmarks, ARIA roles, and component trees) to ensure tool execution continues functioning even when merchants redesign frontend layouts.
- **Resident Cookie Continuity**: Leverages OpenClaw's local residential browser profile to maintain authenticated buyer sessions and bypass 403 anti-bot firewalls.

### 4. Deterministic Multi-Step Action Pipelines
- **Atomic Workflows**: Chains complex multi-step browser tasks (e.g., *search item $\rightarrow$ select color $\rightarrow$ select size 10 $\rightarrow$ check local store pickup $\rightarrow$ stage cart*) into an atomic single-tool invocation with non-hallucinatory rollback guarantees.

---

## Tool Definitions (Model Context Protocol)

```json
{
  "tools": [
    {
      "name": "zenrindler_compile_website_mcp",
      "description": "Scan a target merchant website and synthesize a remote Model Context Protocol (MCP) server definition.",
      "parameters": {
        "type": "object",
        "properties": {
          "merchant_domain": { "type": "string", "description": "Target storefront domain (e.g., 'bhphotovideo.com')" },
          "supported_flows": {
            "type": "array",
            "items": { "type": "string" },
            "default": ["search", "product_details", "cart_staging"]
          }
        },
        "required": ["merchant_domain"]
      }
    },
    {
      "name": "zenrindler_execute_mcp_action",
      "description": "Execute a deterministic typed MCP tool action against a mapped web surface in sub-200ms.",
      "parameters": {
        "type": "object",
        "properties": {
          "merchant_domain": { "type": "string" },
          "tool_name": { "type": "string", "enum": ["search_catalog", "get_item_details", "stage_cart_item", "get_landed_quote"] },
          "arguments": { "type": "object" },
          "use_resident_session": { "type": "boolean", "default": true }
        },
        "required": ["merchant_domain", "tool_name", "arguments"]
      }
    },
    {
      "name": "zenrindler_inspect_screen_state",
      "description": "Inspect and verify the current screen state and available action primitives of a mapped web session.",
      "parameters": {
        "type": "object",
        "properties": {
          "session_id": { "type": "string" }
        },
        "required": ["session_id"]
      }
    }
  ]
}
```

---

## Operating Guidelines & Guardrails

1. **Prioritize MCP Tool Calls Over Visual Computer-Use**: Always check for or compile a ZenRindler MCP mapping before falling back to expensive visual DOM coordinate clicking.
2. **Strict Session Enclave Boundary**: User cookies, session tokens, and residential IP relays remain strictly isolated within the local OpenClaw runtime.
3. **Deterministic Error Reporting**: If a merchant makes a breaking structural change (e.g. introduces multi-factor challenge or out-of-stock lockout), return typed machine error codes (`stock_depleted`, `identity_gate_hit`) instead of hallucinatory retries.
4. **Rate-Limit Respect**: Limit automated tool invocations to realistic human cadences (<5 requests/second) to prevent triggering merchant network rate limiters.
