---
name: zenman-ai-skill
description: Agent-to-Human Micro-Procurement, Real-World Task Escrow & Deterministic Financial Gateway for GenPark & OpenClaw. Distilled from Payman AI (paymanai.com) to smash the 'physical last-mile barrier'—enabling AI shopping agents to hire verified local humans for offline inspections, in-store pickups, phone verifications, and physical tasks via programmatic escrow contracts and non-LLM deterministic security guardrails.
version: 1.0.0
license: MIT
---

# zenman-ai-skill

## Overview
`zenman-ai-skill` (ZenMan / 禅幔) is the agent-to-human micro-procurement and physical task escrow gateway for GenPark & OpenClaw. Distilled from **Payman AI's (paymanai.com) Agentic Financial Infrastructure and AI-to-Human Task Orchestration Engine**, ZenMan resolves the ultimate bottleneck confronting autonomous personal agents: **the Physical & Human Last-Mile Barrier**.

While autonomous decision agents excel at parsing digital web catalogs, scraping Reddit reviews, and optimizing checkout funnels, their agency abruptly collapses the moment reality intervenes:
- Inspecting a vintage designer jacket or rare guitar in an offline Tokyo thrift store before purchase;
- Verifying whether a used computer monitor listed on Facebook Marketplace boots up without dead pixels;
- Overcoming impenetrable physical roadblocks, phone-based store confirmations, or in-person curbside pickups.

ZenMan bridges the digital-to-physical divide by providing a secure, programmatic **AI-to-Human Escrow Rail**:
- **Agent-to-Human Micro-Task Dispatcher**: Converts physical roadblocks into structured, geo-fenced gigs with explicit completion criteria and bounty budgets.
- **Deterministic Escrow & Milestone Release**: Strictly decouples probabilistic LLM reasoning from actual financial payouts. Funds remain locked in an escrow smart contract until multi-modal proof (GPS-tagged photos, video, physical merchant receipts) is validated by non-LLM policy rules or user HITL approval.
- **Non-LLM Financial Policy Firewall**: Guarantees that prompt injections, social engineering attacks from taskers, or model hallucinations can never drain user bank accounts by enforcing hard spend ceilings, task velocity caps, and cryptographic signing.
- **Cryptographic Proof Ledger**: Maintains an immutable, append-only audit trail linking the user's initial prompt, the agent's task decomposition, the human contractor's verified evidence, and the finalized banking disbursement.

---

## Core Capabilities

### 1. Agent-to-Human Bounty Dispatcher (`HumanTaskDispatcher`)
- Decomposes offline physical barriers into actionable human gigs:
  - In-store physical condition audits (fabric pilling, zipper integrity, hardware scratches).
  - Local pickup and domestic forwarding for items restricted to local-only sale.
  - Offline phone calls or in-person bargaining with brick-and-mortar proprietors.
- Publishes tasks to verified on-demand task networks with automated dynamic bounty pricing.

### 2. Deterministic Escrow Engine (`DeterministicEscrowEngine`)
- Locks allocated bounty funds inside an isolated escrow container prior to task initiation.
- Requires dual-factor multi-modal verification before releasing funds:
  - Cryptographically verifies EXIF timestamp and GPS coordinates of uploaded proof media.
  - OCR scans physical register receipts and store logos.
  - Releases payout only when deterministic rule satisfaction reaches 100%.

### 3. Non-LLM Financial Policy Firewall (`AgentFinancialFirewall`)
- Enforces rigid institutional security rules outside the probabilistic LLM runtime:
  - Caps maximum payout per physical task (e.g., $25.00 default ceiling).
  - Enforces daily aggregate bounty budgets across all autonomous subagents.
  - Intercepts and rejects any payout request referencing unapproved bank accounts or suspicious third-party wallets.

### 4. Immutable Proof & Audit Trail (`ImmutableProofLedger`)
- Generates an end-to-end audit bundle for every dispatched physical task:
  - Retains original user command, agent intent decomposition, contractor digital signature, high-resolution media proof, and banking ACH/FedNow/SEPA settlement receipt.
  - Stores all records locally in OpenClaw's encrypted SQLite audit store.

---

## Standard Agent-to-Human Task & Escrow Schema

```json
{
  "task_protocol": "zenman-a2h/v1.0",
  "task_id": "tsk_man_91823a",
  "initiator_agent": "openclaw_zenprocure",
  "objective": "physical_in_store_condition_audit",
  "physical_target": {
    "store_name": "Ragtag Harajuku Flagship",
    "location": "Jingumae 4-3-15, Shibuya-ku, Tokyo, Japan",
    "target_item": "Undercover 2004 'But Beautiful' Hand-stitched Jacket",
    "item_sku": "RT-UC-04-BLK"
  },
  "bounty_terms": {
    "allocated_bounty_usd": 25.00,
    "escrow_status": "locked_in_vault",
    "expiration_window_hours": 4,
    "verification_requirements": [
      "minimum_3_geotagged_photos_of_interior_tags_and_cuffs",
      "video_check_of_main_riri_zipper_smoothness",
      "physical_odor_check_report"
    ]
  },
  "execution_payload": {
    "contractor_id": "usr_tokyo_runner_44",
    "proof_bundle": {
      "gps_match": true,
      "geotag_coordinates": [35.6664, 139.7058],
      "photo_hashes": ["sha256_d89f7a...", "sha256_b312c4..."],
      "ocr_tag_serial_verified": "UC-04-M-9912",
      "odor_report": "neutral_no_smoke_no_mildew"
    },
    "policy_firewall_verdict": "passed_all_deterministic_rules",
    "settlement": {
      "payout_status": "disbursed",
      "rail": "instant_fiat_ach",
      "payout_timestamp": "2026-10-20T02:00:00Z"
    }
  }
}
```

---

## Operational Guidelines

1. **Strict Non-LLM Money Movement**: Never allow a probabilistic LLM to directly trigger bank transfers or adjust spend limits; all financial movements must traverse the deterministic policy firewall.
2. **Escrow Mandatory**: Never release funds upfront to human taskers without cryptographically validated multi-modal proof of task completion.
3. **HITL Escalation Threshold**: Automatically route high-bounty tasks (> $50.00) or physical purchase handoffs to paired WhatsApp/Telegram for interactive user approval before funds lock.
4. **Local Audit Sovereignty**: Store all human tasker telemetry, location matches, and receipt proofs inside the user's private OpenClaw vault.
