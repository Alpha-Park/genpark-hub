---
name: zenmandate-ai-skill
description: Cryptographic Intent Mandate & Agent Payments Protocol (AP2) engine distilled from Google Agentic Commerce AP2 and Agentcard. Enforces mathematical proof-of-intent, SD-JWT selective disclosure, three-tier mandate lifecycles (IntentMandate, CartMandate, PaymentMandate), passkey biometric delegation, and multi-rail payment execution without probabilistic hallucinations.
version: 1.0.0
license: Apache-2.0
metadata:
  category: agentic-commerce
  author: Alpha-Park
  tags:
    - ap2-protocol
    - signed-mandates
    - intent-mandate
    - cart-mandate
    - payment-mandate
    - sd-jwt
    - passkey-delegation
    - proof-of-intent
---

# ZenMandate (禅符) — Cryptographic Intent Mandates & Agent Payments Protocol (AP2)

## Overview

In autonomous agentic commerce, handing an AI agent an unconstrained credit card or letting an LLM execute payment buttons probabilistically is an unacceptable financial and legal hazard. If an agent hallucinates, buys the wrong SKU, or falls victim to dynamic price inflation, who bears the liability? The user, the agent developer, the merchant, or the issuing bank?

**ZenMandate (禅符)**, distilled from the landmark **Google Agent Payments Protocol (AP2)** specification (`google-agentic-commerce/AP2`) and **Agentcard** passkey vault architecture, establishes a mathematically verifiable chain of human intent ("如持虎符，令行禁止"). 

Instead of treating payment as a blind API call, ZenMandate transforms agent purchases into a deterministic three-tier mandate lifecycle (`IntentMandate` → `CartMandate` → `PaymentMandate`) cryptographically anchored in W3C Verifiable Credentials and Selective Disclosure JWTs (SD-JWT). The agent cannot spend a single cent unless the merchant transaction provably complies with the user's passkey-signed cryptographic mandate.

```
       ┌────────────────────────────────────────────────────────┐
       │              User (Human Principal)                    │
       │    Authorizes goal via WebAuthn / Passkey Biometrics   │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼ [Signs with Local Hardware Key]
       ┌────────────────────────────────────────────────────────┐
       │               1. IntentMandate (SD-JWT)                │
       │  • Max Budget: $150.00   • Category: Running Shoes     │
       │  • Expiration: 2h        • Merchant Whitelist: Verified│
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼ [Agent browses & selects offer]
       ┌────────────────────────────────────────────────────────┐
       │               2. CartMandate (Frozen Snapshot)         │
       │  • Merchant: Nike Direct • SKU: Pegasus 41 (Size 10)   │
       │  • Landed Price: $138.50 (Tax $8.50, Ship $0.00)       │
       │  • Nonce: 0x9f8c12...    • Pre-flight Policy: PASS     │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼ [HITL or Authorized Delegation]
       ┌────────────────────────────────────────────────────────┐
       │               3. PaymentMandate (Binding Execution)    │
       │  • Cryptographic Proof linking Intent + Cart           │
       │  • Multi-Rail Dispatch: Network Token / ACH / x402     │
       └───────────────────────────┬────────────────────────────┘
                                   │
          ┌────────────────────────┴────────────────────────┐
          ▼                                                 ▼
[ Merchant Gateway / AP2 Server ]               [ Issuing Bank / Ledger ]
 Verifies Mandate Signature                      Settles with Non-Repudiation
```

---

## Core Capabilities

### 1. Three-Tier Mandate Lifecycle State Machine
- **IntentMandate**: Generated at the start of a shopping session. Captures semantic goals, upper spending limits, merchant constraints, and time-to-live (TTL). Signed locally by the user's private key without exposing credit card details.
- **CartMandate**: Compiled when candidate items are selected. Locks down the exact merchant domain, item identifiers, quantities, zip-code-calculated tax, shipping costs, and final landed price into an immutable digest.
- **PaymentMandate**: The final execution token. Transmitted alongside payment credentials (network token, virtual card, or crypto rail) to the merchant or acquirer. Serves as cryptographic proof that the user authorized *this specific payment for this specific cart*.

### 2. Selective Disclosure (SD-JWT) & Privacy Preservation
- **Zero-Knowledge Attribute Proofs**: Leveraging SD-JWT standards, ZenMandate discloses only the bare minimum fields required for each party.
- **Data Minimization**: The merchant receives proof of valid funds and shipping destination without learning the user's broader shopping budget; the intermediary agent navigates the web without access to raw card numbers or private credentials.

### 3. Pre-Flight Cryptographic Circuit Breaker
- **Zero-Tolerance Hallucination Firewall**: Before transmitting the `PaymentMandate`, ZenMandate evaluates the cart digest against the root `IntentMandate`.
- **Immediate Abort Conditions**: If the final landed price exceeds the maximum budget by even $0.01, if unauthorized add-ons are bundled, or if the merchant domain deviates from authorized scopes, the execution pipeline is severed immediately.

### 4. Multi-Rail AP2 Settlement Adapters
- **Visa / Mastercard Network Tokens**: Binds the `PaymentMandate` to a domain-restricted token cryptogram (`zenkuda`).
- **Passkey-Encrypted Card Vault**: Integrates with local device Secure Enclave vaults for 1-tap biometric Face ID purchase authorization (`agentcard`).
- **Web3 x402 & Stablecoin Settlements**: Compatible with ERC-4337 and A2A x402 payment extensions for machine-to-machine micropayments and cross-border agent settlements.

---

## Tool Definitions (Model Context Protocol)

```json
{
  "tools": [
    {
      "name": "zenmandate_issue_intent_mandate",
      "description": "Create and cryptographically sign an IntentMandate defining shopping parameters, budget ceiling, and expiration.",
      "parameters": {
        "type": "object",
        "properties": {
          "user_id": { "type": "string" },
          "category": { "type": "string" },
          "max_budget": { "type": "number", "description": "Strict spending ceiling in base currency" },
          "currency": { "type": "string", "default": "USD" },
          "valid_duration_minutes": { "type": "integer", "default": 120 },
          "merchant_whitelist": { "type": "array", "items": { "type": "string" } }
        },
        "required": ["user_id", "max_budget"]
      }
    },
    {
      "name": "zenmandate_compile_cart_mandate",
      "description": "Lock down a finalized merchant cart into an immutable CartMandate digest and verify compliance with parent IntentMandate.",
      "parameters": {
        "type": "object",
        "properties": {
          "intent_mandate_token": { "type": "string" },
          "merchant_domain": { "type": "string" },
          "line_items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "sku": { "type": "string" },
                "title": { "type": "string" },
                "unit_price": { "type": "number" },
                "quantity": { "type": "integer" }
              },
              "required": ["sku", "unit_price", "quantity"]
            }
          },
          "total_landed_cost": { "type": "number" }
        },
        "required": ["intent_mandate_token", "merchant_domain", "line_items", "total_landed_cost"]
      }
    },
    {
      "name": "zenmandate_execute_payment_mandate",
      "description": "Generate binding PaymentMandate proof and dispatch transaction over authorized payment rail (Token / Passkey / x402).",
      "parameters": {
        "type": "object",
        "properties": {
          "cart_mandate_digest": { "type": "string" },
          "payment_rail": {
            "type": "string",
            "enum": ["network_token", "passkey_vault", "virtual_card", "x402_stablecoin"]
          },
          "biometric_auth_token": { "type": "string", "description": "WebAuthn / Passkey assertion signature" }
        },
        "required": ["cart_mandate_digest", "payment_rail"]
      }
    }
  ]
}
```

---

## Operating Guidelines & Guardrails

1. **Hardware-Enclave Private Key Isolation**: Private signing keys must never leave the local OS Secure Enclave or hardware security module (HSM).
2. **Strict Cryptographic Non-Repudiation**: Every `PaymentMandate` must reference the exact SHA-256 digest of the `CartMandate` and the signature of the parent `IntentMandate`.
3. **No Over-Authorization**: Mandates must have a deterministic expiration timestamp (maximum 2 hours for automated shopping; maximum 24 hours for scheduled drops).
4. **Transparent Audit Logging**: All issued mandates, verified merchant receipts, and payment transaction IDs must be appended to the local tamper-evident ledger (`~/.openclaw/mandates.log`).
