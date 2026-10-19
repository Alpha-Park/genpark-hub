---
name: zenpass-ai-skill
description: Portable personal AI context passport and sovereign identity protocol distilled from Egoist Machines (YC S26). Eliminates agent context silos by allowing consumers to own, inspect, and securely port their sizing, aesthetic tastes, allergies, and budget constraints across disparate shopping and decision agents with granular zero-knowledge permissions.
version: 1.0.0
license: Apache-2.0
metadata:
  category: personal-agent
  author: Alpha-Park
  tags:
    - context-portability
    - ai-passport
    - zero-knowledge-proofs
    - sovereign-identity
    - personal-preferences
    - privacy-enclave
---

# ZenPass (禅牒) — Sovereign AI Context Passport & Preference Portability

## Overview

In the emerging agent economy, every commercial AI assistant, shopping agent, and conversational platform (ChatGPT, Claude, Amazon Rufus, brand chatbots) operates as a private data silo. When a consumer teaches their sizing nuances, material allergies, aesthetic preferences, household members, and discretionary spending constraints to Agent A, Agent B knows nothing about them. Users are trapped in an exhausting cycle of repetitive onboarding questionnaires, cold-start prompt engineering, and fragmented privacy exposure.

**ZenPass (禅牒)**, distilled from **Egoist Machines** (YC S26, founded by Erin Meryl McGurk and David Khachaturov), establishes a user-owned sovereign infrastructure for personal AI hyper-personalization. Inspired by the ancient travel passport ("度牒 / 通关文牒"), ZenPass stores personal shopping contexts and preferences inside the local OpenClaw encrypted enclave. It introduces the open `"Sign in with ZenPass"` protocol—allowing third-party personal agents, merchant bots, and search engines to request scoped, time-limited, and zero-knowledge preference claims with 1-tap user authorization.

```
                  ┌───────────────────────────────┐
                  │    Local Hardware Enclave     │
                  │   OpenClaw ZenPass Vault      │
                  │ (Sizing, Tastes, Allergies)   │
                  └───────────────┬───────────────┘
                                  │
                  ┌───────────────▼───────────────┐
                  │   Sign in with ZenPass (OAuth)│
                  │    Scoped Permission Broker   │
                  └───────────────┬───────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
  [ zenchoice Agent ]      [ zenviba Stylist ]     [ External Merchant AI ]
   • scope: sizing.shoes    • scope: aesthetic.vibe • scope: shipping.zip_only
   • scope: allergies.wool  • Read/Write consent    • Zero raw PII leaked
```

---

## Core Capabilities

### 1. User-Owned Canonical Context Store
- **Structured Persona Dimensions**: Normalizes disparate personal attributes into standard JSON schema schemas:
  - `sizing`: Tailored bust/waist/inseam metrics, shoe sizes across regional standards (US/UK/EU), and preferred silhouette fits (oversized, tailored, relaxed).
  - `health_sensitivities`: Skin sensitivities, fabric allergies (e.g. 100% merino wool only, no polyester), dietary boundaries, and fragrance intolerances.
  - `aesthetic_vectors`: Personal color palette, style keywords, anti-brands (brands never to recommend), and visual moodboard embeddings.
  - `household_profiles`: Sub-passports for family members, partners, and pets with independent sizing and gifting preferences.
  - `budget_guardrails`: Monthly discretionary shopping ceilings, max per-order limits, and approved financing preferences.

### 2. "Sign in with ZenPass" Scoped Permission Broker
- **Granular Scoped Handshakes**: External buyer agents and merchant systems must request exact permission scopes (e.g., `scope: sizing.apparel, budget.max_tier`).
- **Zero-Knowledge Preference Proofs (ZK-Claims)**: Enables agents to verify conditions without revealing raw data (e.g., proof that `user.is_over_21 == true` or `user.budget >= $100` without disclosing exact birthdates or account balances).
- **Time-Bounded & Ephemeral Grants**: Issues cryptographic session tokens valid only for the duration of the shopping task (e.g. 30-minute checkout session).

### 3. Bi-Directional Preference Sync & Review Audit
- **Agent Write Suggestions**: When a stylist agent (`zenviba`) or feedback loop (`zenfermat`) detects that a user consistently rejects high-rise trousers, it submits a proposed update (`propose_patch`) to ZenPass.
- **Human-in-the-Loop Consent Gate**: Context modifications are never committed silently; users review and approve profile deltas via their paired WhatsApp/Telegram messenger.
- **Access Audit Ledger**: Maintains an immutable local log recording every agent read, field accessed, and timestamp.

### 4. Cross-Agent Universal Portability
- **Elimination of Cold Starts**: Instantly boots new specialized agents (`zenchoice`, `zenpal`, `zenrye`) with rich, nuanced personal context on turn zero.
- **Instant Revocation**: 1-tap kill switch in OpenClaw instantly revokes access tokens across any external agent or retailer service.

---

## Tool Definitions (Model Context Protocol)

```json
{
  "tools": [
    {
      "name": "zenpass_request_context",
      "description": "Request scoped, permissioned personal context fields from the user's sovereign ZenPass vault.",
      "parameters": {
        "type": "object",
        "properties": {
          "requested_scopes": {
            "type": "array",
            "items": { "type": "string" },
            "description": "Array of required scope identifiers (e.g. ['sizing.shoes', 'allergies.fabrics', 'budget.order_ceiling'])"
          },
          "purpose": { "type": "string", "description": "Human-readable explanation of why this context is required" },
          "ttl_minutes": { "type": "integer", "default": 30, "description": "Requested session duration before token expiration" }
        },
        "required": ["requested_scopes", "purpose"]
      }
    },
    {
      "name": "zenpass_propose_update",
      "description": "Propose an incremental update or refinement to the user's ZenPass profile based on session interactions.",
      "parameters": {
        "type": "object",
        "properties": {
          "field_path": { "type": "string", "description": "Dot-notation target field (e.g. 'aesthetic.anti_brands')" },
          "suggested_value": { "type": "string", "description": "Proposed new value or appended attribute" },
          "rationale": { "type": "string", "description": "Reason observed during session justifying the proposed change" }
        },
        "required": ["field_path", "suggested_value", "rationale"]
      }
    },
    {
      "name": "zenpass_revoke_session",
      "description": "Immediately terminate an active agent session token and wipe cached ephemeral context.",
      "parameters": {
        "type": "object",
        "properties": {
          "session_token": { "type": "string", "description": "Active session token to invalidate" }
        },
        "required": ["session_token"]
      }
    }
  ]
}
```

---

## Operating Guidelines & Guardrails

1. **Local Enclave Custody**: The master ZenPass document is stored strictly in the local hardware vault (`~/.openclaw/zenpass.vault.enc`) using AES-GCM-256 encryption. Raw credentials and PII never leave the local device.
2. **Strict Scope Minimization**: Request only the minimum necessary fields required to execute the user's current goal. Disclose `sizing.footwear` only when shopping for shoes.
3. **Transparent Audit Logging**: Every read operation must write an entry to the append-only local audit log with timestamp, calling agent conversation ID, and accessed fields.
4. **Consent-Driven Mutations**: Automated agents must never mutate user preferences silently. Any suggested preference updates must be routed to the paired mobile messenger as an interactive confirmation card.
