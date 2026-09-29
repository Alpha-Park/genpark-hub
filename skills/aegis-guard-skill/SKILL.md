---
name: aegis-guard-skill
description: Runtime active hallucination interceptor and PII data leakage shield for GenPark & OpenClaw. Inspects planned tool calls in-flight, suppresses latent model hallucinations before execution, and redacts sensitive credentials, physical addresses, and private chats.
version: 1.0.0
license: MIT
---

# aegis-guard-skill

## Overview
`aegis-guard-skill` (Aegis Guard) is an enterprise-grade runtime security and hallucination mitigation skill for GenPark & OpenClaw. Distilled from the latest late-September 2026 **Active Detective System** and **Anti-Leakage Data Shield** breakthroughs, Aegis Guard acts as an uncompromising gatekeeper sitting between the agent's reasoning core and external tool executions.

While first-generation autonomous agents frequently suffered from hallucinated parameters (invented coupon codes, hallucinated flight dates, or non-existent URLs) and accidental data leakage (such as autonomously broadcasting users' real-world home addresses or private chat histories during checkout), Aegis Guard enforces deterministic, pre-execution verification:
- **Zero Hallucination Tolerance**: Catches and suppresses hallucinated arguments *in-flight* before they trigger network or browser actions.
- **PII Exfiltration Shield**: Redacts physical addresses, phone numbers, and payment details unless explicitly approved via human cryptographic consent.
- **Transactional Sanity Enforcer**: Rejects anomalous quantity spikes, price deviations, or recurring subscription traps.

---

## Core Capabilities

### 1. In-Flight Active Detective (`ActiveDetectiveEngine`)
- Monitors token generation probabilities and semantic grounding vectors in real-time as the reasoning model constructs tool arguments.
- Identifies ungrounded entities (e.g., claiming a product is in stock when DOM parsing indicated otherwise, or inventing arbitrary discount codes).
- Terminates hallucinated branches immediately and triggers an internal reflex loop before any external HTTP or browser action is dispatched.

### 2. PII Exfiltration & Form Redaction Shield (`PIIRedactionShield`)
- Inspects every outgoing DOM input, web request, and A2A payload.
- Automatically flags sensitive entities:
  - Exact residential home addresses vs. generic city/postal code boundaries.
  - Personal identity numbers, credit card CVVs, and raw authorization tokens.
  - Unrelated clipboard data or private chat transcripts.
- Enforces contextual masking: merchants only receive shipping data at the absolute final checkout screen, never during preliminary cart research.

### 3. Transactional Sanity & Boundary Firewall (`SanityFirewall`)
- Enforces strict spending, quantity, and merchant bounds configured in `~/.openclaw/config/security.json`:
  - **Single Transaction Max Limit** (e.g., default: $100 without 2FA biometric confirmation).
  - **Quantity Guard**: Rejects accidental bulk selections (e.g., ordering 10 units instead of 1).
  - **Subscription Trap Detector**: Detects hidden recurring auto-renew clauses in terms of service and alerts the user.

### 4. Deterministic State Verifier (`StateVerifier`)
- Validates the post-condition of every browser action (e.g., "Did the button click actually navigate to the checkout page, or did it trigger an unexpected popup?").
- Aborts execution immediately upon state divergence to prevent runaway infinite loops.

### 5. Cryptographic Tamper-Proof Audit Logger (`AuditLogger`)
- Writes all intercepted risks, approved authorizations, and tool payloads into a local append-only hash-chained ledger (`~/.openclaw/logs/audit.log`).
- Ensures total transparency and user auditability with zero remote telemetry.

---

## Standard Pre-Execution Inspection Payload Schema

```json
{
  "$schema": "https://genpark.openclaw.ai/schemas/aegis-guard-report.json",
  "inspection_id": "aegis_insp_20260929_88a91",
  "timestamp": "2026-09-29T08:15:00Z",
  "tool_call_candidate": {
    "tool_name": "browser_fill_checkout_form",
    "target_url": "https://www.bestbuy.com/checkout",
    "parameters": {
      "full_name": "Norm Corn",
      "address_line_1": "100 Market St, Apt 4B",
      "city": "San Francisco",
      "postal_code": "94105",
      "card_token": "tok_stripe_vault_7721..."
    }
  },
  "verdict": {
    "status": "INTERCEPTED_FOR_APPROVAL",
    "hallucination_score": 0.02,
    "pii_risk_level": "HIGH",
    "flagged_elements": [
      {
        "field": "address_line_1",
        "risk": "PHYSICAL_ADDRESS_EXPOSURE",
        "action": "HELD_PENDING_SENTINEL_CONFIRMATION"
      }
    ],
    "safety_guarantee": "Card token is cryptographically isolated; physical address held until user taps [Confirm Delivery Address]."
  }
}
```

---

## Usage Guide & Workflow

1. **Automatic Interception Middleware**:
   - `aegis-guard-skill` runs as an active daemon middleware inside OpenClaw.
   - Any skill attempting to perform browser input or network egress passes through Aegis Guard first.
2. **Pre-Flight Inspection**:
   - Hallucination detection executes in <15ms.
   - PII inspection verifies if the target website genuinely requires the requested fields at this stage of the pipeline.
3. **Graceful Remediation or HITL Prompt**:
   - If a hallucinated parameter is detected, Aegis drops the action and instructs the agent: *"Parameter 'promo_code: SAVE99' is unverified. Retry with verified coupons only."*
   - If sensitive PII is required, it triggers a clean authorization prompt on the user's phone before proceeding.
