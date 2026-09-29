---
name: zenpeer-ai-skill
description: Autonomous Agent-to-Agent (A2A) peer negotiation protocol for GenPark & OpenClaw. Enables decentralized personal agents to coordinate collective purchases, split expenses, synchronize schedules, and exchange encrypted records without exposing raw user data.
version: 1.0.0
license: MIT
---

# zenpeer-ai-skill

## Overview
`zenpeer-ai-skill` (ZenPeer) is an Agent-to-Agent (A2A) peer negotiation and collective action skill for GenPark & OpenClaw. Distilled from the cutting-edge **Trusted Agent Mesh** paradigm, ZenPeer elevates personal agents from isolated assistants into collaborative delegates capable of direct peer-to-peer coordination.

Instead of human users spending hours back-and-forth coordinating group dining, splitting travel expenses, or negotiating bulk discounts, their respective OpenClaw daemons communicate directly via cryptographically signed A2A handshakes.

Operating strictly **local-first and decentralized**, ZenPeer ensures that raw user data (calendars, home addresses, payment cards) is never leaked to peers; only zero-knowledge constraint vectors and signed agreements are exchanged.

---

## Core Capabilities

### 1. Peer Handshake & Trust Ring (`PeerHandshakeEngine`)
- Establishes end-to-end encrypted P2P tunnels between paired OpenClaw gateway daemons (`127.0.0.1:18789`).
- Implements asymmetric key verification (ED25519) to authenticate trusted contact circles (e.g., family, close friends, work teams).
- Rejects untrusted agent inbound probes automatically with zero metadata leakage.

### 2. Collective Cart & Bulk Arbitrage (`CollaborativeCartNegotiator`)
- Identifies cross-user buying opportunities (e.g., "Both you and Sarah want Sony WH-1000XM5; combining orders unlocks Best Buy's BOGO 20% discount").
- Automatically calculates optimal SKU bundling, shipping threshold consolidation, and coupon maximization across paired agents.
- Confirms terms with both parties before staging the combined cart.

### 3. Zero-Knowledge Schedule & Booking Aligner (`ZKScheduleAligner`)
- Aligns dinner reservations, flight timings, and meeting slots without exposing calendar event titles, locations, or private free/busy details.
- Uses Homomorphic Intersection / Differential Privacy sets to output the mutually optimal 90-minute dining window.
- Interfaces with `zenchoice-ai-skill` to execute reservations on OpenTable or Resy once consensus is reached.

### 4. P2P Split Settlement & Escrow Gate (`P2PSplitSettler`)
- Automatically divides restaurant bills, vacation rental deposits, and collective shopping orders based on pre-negotiated formulas (even split, itemized consumption, or weighted shares).
- Generates native instant settlement links (Apple Pay, Venmo, Stripe Link, or local token rails).
- Enforces mutual Sentinel HITL approvals on both users' phones (WhatsApp/Telegram) prior to funds departure.

### 5. Authenticated Asset & Document Relay (`DocumentRelay`)
- Safely exchanges travel itinerary PDFs, spreadsheets, and receipt snapshots between verified agents.
- Applies local watermarks and time-limited access tokens to prevent secondary distribution.

---

## Standard A2A Negotiation Payload Schema

```json
{
  "$schema": "https://genpark.openclaw.ai/schemas/a2a-negotiation.json",
  "session_id": "a2a_sess_tokyo_dinner_20260929",
  "initiator_agent_id": "agent_pubkey_7x9a...b2",
  "recipient_agent_id": "agent_pubkey_4m1c...e8",
  "intent_type": "COLLECTIVE_PURCHASE_ARBITRAGE",
  "proposal": {
    "target_item": "Bose QuietComfort Ultra",
    "retailer": "Best Buy",
    "single_price_usd": 379.00,
    "bundle_promo_type": "BUY_ONE_GET_SECOND_30_OFF",
    "bundle_total_usd": 644.30,
    "allocated_cost_initiator_usd": 322.15,
    "allocated_cost_recipient_usd": 322.15,
    "individual_savings_usd": 56.85,
    "delivery_destination_zip": "94107",
    "expiration_epoch": 1790678400
  },
  "consensus_status": "AWAITING_MUTUAL_HITL_CONFIRMATION",
  "signatures": {
    "initiator_sig": "ed25519_sig_abc123...",
    "recipient_sig": null
  }
}
```

---

## Usage Guide & Workflow

1. **Initiate Peer Task via Messenger**:
   - Send prompt in WhatsApp/Telegram: *"Coordinate with Alex's agent to book dinner this Friday night around Mission District, $80 budget per person, and split the bill."*
2. **A2A Encrypted Discovery**:
   - Initiator agent sends an encrypted discovery frame to Alex's paired OpenClaw daemon.
3. **Constraint Intersection**:
   - Both agents compute schedule overlap and dietary preferences in zero-knowledge space.
4. **Reservation & Cart Staging**:
   - Winning reservation/table is held by the designated staging agent.
5. **Dual Sentinel HITL Push**:
   - Both users receive an identical interactive card on WhatsApp:
     - *"Dinner at Flour + Water, Friday 7:30 PM. Cost: ~$80/person. [Confirm Reservation]"*
6. **Simultaneous Mutual Commit**:
   - When both users tap approve, the reservation is locked and a confirmation receipt is mirrored to both devices.
