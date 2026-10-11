---
name: zenbridge-ai-skill
description: Hybrid Personal Agent Protocol (PAP) and Resident Browser Bridge for GenPark & OpenClaw. Interfaces with compliant merchants via structured OAuth protocols while seamlessly falling back to local resident sessions for walled-garden platforms.
version: 1.0.0
license: MIT
---

# zenbridge-ai-skill

## Overview
`zenbridge-ai-skill` (ZenBridge) is the enterprise-to-merchant gateway skill for GenPark & OpenClaw. Distilled from the **Personal Agent Protocol (PAP / Poppy)** standard established in October 2026, ZenBridge solves the industry-wide friction between personal AI agents and commercial retail ecosystems.

Rather than relying purely on brittle web scraping or getting locked into proprietary walled gardens, ZenBridge operates an intelligent **Hybrid Dual-Engine**:
1. **PAP Structured API Lane**: Automatically discovers merchant endpoints via `/.well-known/poppy.json`, authenticating scoped OAuth guest/customer sessions for compliant retailers (Shopify, Walmart, Stripe networks) with zero bot detection risk.
2. **Resident Browser Fallback Lane**: When encountering resistant or non-PAP merchants (such as Amazon and legacy retailers), ZenBridge transparently falls back to OpenClaw's local residential browser context, bypassing IP blocks and captchas.

---

## Core Capabilities

### 1. PAP Merchant Discovery & Endpoint Resolver (`PoppyDiscovery`)
- Inspects target merchant domains for standard Personal Agent Protocol endpoints (`/.well-known/poppy.json`).
- Resolves schema-supported capabilities (live inventory check, return policy query, cart reservation, checkout token exchange).
- Caches authenticated merchant certificates in the local OpenClaw gateway daemon.

### 2. Scoped OAuth Session Negotiator (`OAuthSessionBroker`)
- Implements two-tiered identity abstraction:
  - **Guest Mode**: Read-only product query, stock availability check, and shipping fee calculation with zero user credential exposure.
  - **Authenticated Mode**: Ephemeral user-consented OAuth write tokens allowing order staging, reward point application, and order status tracking.
- Guarantees token expiration and revocability at any moment from the local control plane.

### 3. Dual-Path Dynamic Fallback Router (`DynamicPathRouter`)
- Evaluates merchant compliance in real-time:
  ```text
  If domain supports PAP:
      Route through structured JSON-LD / Poppy API (Latency < 200ms, 100% Reliability)
  Else (e.g. Amazon, uncooperative platforms):
      Route through Resident Browser Session with Playwright CDP & residential cookie pool
  ```
- Ensures universal, 100% web coverage across the entire internet without vendor lock-in.

### 4. Merchant Defensive Agent Negotiator (`A2BNegotiator`)
- Handles interactions with merchant-side Seller AI and retention bots (e.g., Sierra, Genesys, Decagon merchant agents).
- Detects and rejects deceptive retention popups, artificial urgency badges ("Only 1 left!"), and dynamic price discrimination traps.
- Negotiates real-time price-matching and counter-discounts on behalf of the user within pre-set threshold boundaries.

### 5. Local Audit & Scope Boundary Sentinel (`BoundarySentinel`)
- Validates that outgoing merchant requests never exceed user-delegated scopes.
- Blocks cross-merchant cookie tracking and fingerprint leakage.

---

## Standard PAP Handshake Payload Schema

```json
{
  "$schema": "https://genpark.openclaw.ai/schemas/pap-handshake.json",
  "protocol_version": "PAP-v0.1-Poppy",
  "client_agent": {
    "agent_name": "GenPark-OpenClaw-Local",
    "agent_instance_id": "openclaw_inst_799a1",
    "public_key": "ed25519_pk_88fbc..."
  },
  "target_merchant": {
    "domain": "store.shopify.com",
    "poppy_endpoint": "https://store.shopify.com/.well-known/poppy.json"
  },
  "session_request": {
    "scope": "cart:stage,inventory:read",
    "mode": "AUTHENTICATED_GUEST",
    "target_sku": "SKU_BOSE_QC_ULTRA_BLK",
    "requested_actions": [
      "verify_inventory_zip_94105",
      "calculate_landed_cost",
      "stage_temporary_hold_minutes_15"
    ]
  },
  "fallback_strategy": "RESIDENT_BROWSER_ON_403_OR_UNAVAILABLE"
}
```

---

## Usage Guide & Workflow

1. **Merchant Dispatch**:
   - `zenchoice-ai-skill` sends a target product intent to `zenbridge-ai-skill`.
2. **Protocol Discovery**:
   - ZenBridge queries `https://target-merchant.com/.well-known/poppy.json`.
3. **Branch Execution**:
   - **Branch A (PAP Supported)**: Performs lightning-fast structured OAuth handshake, stages item, and returns clean cart token.
   - **Branch B (PAP Missing / Blocked)**: Instantly initializes resident sandboxed Chromium with local cookies to fulfill the operation.
4. **Handoff to HITL**:
   - Emits standardized landed cost and checkout payload back to OpenClaw for WhatsApp/Telegram approval.
