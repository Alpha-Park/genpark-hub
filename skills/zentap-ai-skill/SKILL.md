---
name: zentap-ai-skill
description: Visa Trusted Agent Protocol (TAP) & RFC 9421 Cryptographic HTTP Message Signature Engine for GenPark & OpenClaw. Solves the 'Good Bot vs. Bad Bot' dilemma by embedding cryptographic identity proofs, agent registry verification, and consumer delegation headers into HTTP requests, securing friction-free merchant CDN access, anti-bot bypass, and authentic buyer clearance.
version: 1.0.0
license: MIT
---

# zentap-ai-skill

## Overview
`zentap-ai-skill` (ZenTAP / 禅证) is the Visa Trusted Agent Protocol (TAP) and RFC 9421 cryptographic HTTP message signature engine for GenPark & OpenClaw. Distilled from **Visa's Trusted Agent Protocol (TAP) specification** and **IETF RFC 9421 HTTP Message Signatures**, ZenTAP resolves the most damaging false-positive barrier in autonomous commerce: **the "Good Bot vs. Bad Bot" classification dilemma**.

As autonomous AI agents browse web stores to discover, compare, and stage purchases on behalf of real paying humans, legacy anti-bot web application firewalls (WAFs) and CDN edge proxies (Cloudflare, Akamai, Fastly) frequently classify legitimate buyer agents as malicious scrapers or DDoS bots, triggering IP bans, rate-limit throttling, and unsolvable CAPTCHA walls.

Operating local-first within OpenClaw, ZenTAP provides a standardized, cryptographic trust handshake between personal agents and merchant gateways:
- **RFC 9421 HTTP Message Signatures**: Cryptographically signs critical HTTP request headers (`Signature`, `Signature-Input`) using device-bound asymmetric private keys stored in the OS Secure Enclave.
- **Agent Registry Verification**: Publishes and validates public key identities against open agent registries, enabling merchant CDN proxies to instantly confirm the legitimacy of visiting agents.
- **Consumer Mandate Attestation**: Binds signed HTTP requests to verified human consumer authorization tokens, proving that the agent is an authentic, economically productive buyer rather than a web scraper.
- **Friction-Free WAF Bypass & VIP Machine Lanes**: Unlocks dedicated machine-readable endpoints (`/agentic/`) and bypasses visual CAPTCHAs without triggering anti-bot heuristics.

---

## Core Capabilities

### 1. RFC 9421 HTTP Signature Generator (`RFC9421MessageSigner`)
- Injects cryptographically verifiable signature headers into outbound HTTP calls:
  - Signs canonical request components: method, target URI, `@authority`, timestamp, and body digest.
  - Supports modern elliptic curve algorithms: Ed25519 and ECDSA P-256.
  - Formats headers according to IETF RFC 9421 specifications:
    ```http
    Signature-Input: sig1=("@method" "@target-uri" "@authority" "content-digest");keyid="agent-key-8812";alg="ed25519";created=1730000000
    Signature: sig1=:q7x8Z...tamperproof_signature...=:
    ```

### 2. Trusted Agent Registry Resolver (`AgentRegistryResolver`)
- Interfaces with federated and decentralized Agent Registries:
  - Broadcasts public keys and metadata (agent developer, compliance audit, principal identity link).
  - Enables merchant edge workers to verify cryptographic signatures within 5ms using cached public key sets.
  - Automatically handles key rotation and revocation without disrupting active shopping sessions.

### 3. Human Mandate Attestation Broker (`ConsumerMandateAttester`)
- Links network requests to human principal delegation:
  - Embeds the cryptographic hash of the user's active `IntentMandate` directly into HTTP request headers (`X-Visa-TAP-Mandate`).
  - Proves the agent holds explicit, spend-capped permission to execute shopping actions.
  - Conforms to Visa and Mastercard agent security standards for card-not-present authorization.

### 4. Edge CDN Fast-Track Negotiator (`EdgeCDNGatewayNegotiator`)
- Communicates directly with merchant reverse proxies and CDN firewalls:
  - Upgrades standard browser user-agents into certified buyer agent sessions.
  - Obtains machine-rate quota allocations, preventing rate-limiting on high-density SKU queries.
  - Establishes zero-friction access to raw JSON product feeds and headless checkout endpoints.

---

## Standard Visa TAP HTTP Request Schema

```http
POST /api/v1/checkout/stage HTTP/1.1
Host: store.patagonia.com
Content-Type: application/json
Content-Digest: sha-256=:X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=:
X-Visa-TAP-Agent-ID: openclaw://agent/alpha-park/instance_9981bc
X-Visa-TAP-Registry: https://registry.visa.com/v1/agents/alpha-park
X-Visa-TAP-Mandate: sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
Signature-Input: sig1=("@method" "@target-uri" "@authority" "content-type" "content-digest" "x-visa-tap-agent-id" "x-visa-tap-mandate");keyid="tap-key-2026-10";alg="ed25519";created=1792834000
Signature: sig1=:dGhpcyBpcyBhIHZlcmlmaWVkIFZpc2EgVEFQIGNyeXB0b2dyYXBoaWMgc2lnbmF0dXJlIGZvciBPcGVuQ2xhdw==:

{
  "cart_id": "cart_live_991823",
  "sku": "84212-BLK-M",
  "quantity": 1,
  "max_authorized_total": 289.00
}
```

---

## Operational Guidelines

1. **Hardware-Backed Private Key Storage**: Master signing keys must never leave the local OS Secure Enclave or hardware security module (HSM).
2. **Sub-5ms Signature Generation**: Maintain cryptographic signing overhead under 5ms to preserve instantaneous conversational response times.
3. **Mandate-Bound Execution**: Refuse to attach TAP signature headers to any HTTP request lacking an active, cryptographically signed user `IntentMandate`.
4. **Graceful Fallback**: If a merchant edge proxy does not yet support Visa TAP verification, fall back cleanly to `zenrye-ai-skill` resident browser automation.
