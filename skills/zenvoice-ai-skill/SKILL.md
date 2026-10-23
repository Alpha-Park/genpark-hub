---
name: zenvoice-ai-skill
description: Autonomous Outbound PSTN Voice Procurement & Physical Desk Telephony Engine for GenPark & OpenClaw. Distilled from Bland AI (bland.ai) and Retell AI (retellai.com) to smash the 'offline API void' across brick-and-mortar retail, local pharmacies, specialty auto/hardware suppliers, and service counters, featuring sub-600ms conversational turn-taking, in-store stock hold negotiation, secure DTMF payment tokenization, and live messenger drop-in handoff.
version: 1.0.0
license: MIT
---

# zenvoice-ai-skill

## Overview
`zenvoice-ai-skill` (ZenVoice / 禅语) is the autonomous outbound PSTN voice procurement and physical desk telephony engine for GenPark & OpenClaw. Distilled from **Bland AI's (bland.ai) Conversational Pathways infrastructure** and **Retell AI's (retellai.com) sub-second latency voice engine**, ZenVoice resolves the deepest physical blind spot of modern AI shopping agents: **the "Offline API Void" (无 API 物理离线世界黑盒)**.

While web crawlers, headless browsers, and e-commerce APIs excel at digital catalogs, over 70% of real-world local commerce—neighborhood boutiques, local hardware yards, specialized compounding pharmacies, vintage dealers, physical auto parts desks, and independent restaurants—possesses **zero public inventory APIs, zero PAP manifests, and zero real-time web inventory**. When a user needs an urgent item on physical retail shelves or a phone-only service hold, web-only agents hit a dead end.

Operating local-first within OpenClaw, ZenVoice bridges digital agents with the analog telephone network (PSTN):
- **Autonomous Outbound PSTN Voice Dialing**: Dials physical telephone numbers via encrypted SIP/WebRTC trunks directly to local storefronts, customer service desks, and merchant counters.
- **Sub-600ms Conversational Turn-Taking**: Employs low-latency speech-to-speech models with natural conversational cadence, dynamic interruption handling, and background noise suppression tailored for noisy retail environments.
- **Physical Shelf Stock & Hold Extraction**: Interrogates store clerks with polite, natural phrasing, confirming physical on-shelf availability, shelf location, and negotiating behind-the-counter holds under the user's name.
- **PCI-DSS Compliant DTMF Payment Transmission**: Safely passes single-use virtual card numbers or reservation deposit tokens via masked Dual-Tone Multi-Frequency (DTMF) tones without exposing voice transcripts or raw cards.
- **Live Streamed Transcription & 1-Tap Call Takeover (HITL)**: Streams live transcription and audio snippets directly to the user's paired WhatsApp/Telegram channel, enabling seamless one-tap human takeover if required.

---

## Core Capabilities

### 1. Autonomous PSTN Telephony Orchestrator (`AutonomousPSTNVoiceDialer`)
- Dispatches outbound calls across global carrier networks (Twilio, Telnyx, SIP trunking):
  - Traverses Automated Call Distribution (ACD) phone trees and Interactive Voice Response (IVR) menus (*"Press 2 for pharmacy, then 1 for stock"*).
  - Handles busy signals, voicemail detection, and merchant callback queues with intelligent retry schedules.
  - Automatically adheres to national calling-hour regulations and Do-Not-Call (DNC) compliance rules.

### 2. Low-Latency Speech-to-Speech Engine (`SubSecondSpeechTurnTaking`)
- Eliminates robotic voice lag and unnatural pauses:
  - Maintains round-trip latency below 600ms for authentic conversational human turn-taking.
  - Dynamically pauses when retail clerks interrupt or request hold time (*"Hold on, let me walk back to the aisle to check"*).
  - Listens patiently during store background music or PA announcements without hallucinations.

### 3. Physical Inventory & Store Hold Negotiator (`OfflinePhysicalInventoryExtractor`)
- Extracts precise unstructured audio confirmations into structured JSON:
  - Verifies exact SKU attributes: sizing, colorway, expiration dates, and physical condition.
  - Secures formal behind-the-counter holds: clerk employee name, hold expiration deadline, and pickup hold confirmation IDs.
  - Negotiates in-store price matching or cash payment discounts over the phone.

### 4. PCI-DSS Secure Voice Tokenizer (`PCIDSSVoicePaymentHarness`)
- Executes phone-order reservations requiring card deposits:
  - Injects single-use virtual card credentials directly into carrier DTMF tone generators.
  - Mutes voice audio recording during token transmission to guarantee zero credential leakage into logs.
  - Restricts payment amounts strictly to pre-authorized transaction ceilings.

### 5. Live Audio Whisper & Messenger Handoff Gate (`LiveAudioWhisperTakeover`)
- Bridges real-time phone calls to user chat interfaces:
  - Streams real-time speech-to-text transcripts to paired WhatsApp / Telegram conversations.
  - Provides a 1-tap `[Bridge Call to My Phone]` interactive button, instantly transferring the active call to the user's mobile device with zero audio interruption.
  - Generates post-call itemized summaries with clerk names, pickup deadlines, and driving directions.

---

## Standard Voice Telephony Procurement Schema

```json
{
  "protocol": "zenvoice-telephony/v1.0",
  "call_task_id": "call_task_882910f",
  "target_merchant": {
    "merchant_name": "Patagonia Austin Downtown Store",
    "phone_number": "+15124783395",
    "physical_address": "316 Congress Ave, Austin, TX 78701",
    "timezone": "America/Chicago"
  },
  "procurement_goal": {
    "target_sku": "Men's Nano Puff Hoody - Black - Size M",
    "sku_code": "84212-BLK-M",
    "max_authorized_price": 289.00,
    "request_hold": true,
    "hold_duration_hours": 3,
    "customer_name": "Alexander Wright"
  },
  "telephony_execution_state": {
    "call_status": "completed_success",
    "duration_seconds": 114,
    "ivr_traversal": ["press_2_retail", "wait_for_clerk"],
    "clerk_identified": "Marcus (Floor Associate)",
    "stock_verified": true,
    "physical_shelf_count": 2,
    "hold_confirmed": true,
    "hold_confirmation_id": "HOLD-PAT-0912",
    "hold_expiry_timestamp": "2026-10-24T18:00:00-05:00",
    "actual_price": 289.00,
    "deposit_required": false
  },
  "messenger_relay": {
    "notification_channel": "telegram",
    "summary_message": "✅ Patagonia Austin has 2 Nano Puff Hoodies (Black, M) in stock! Marcus held one behind the front counter under 'Alexander' until 6:00 PM today.",
    "pickup_navigation_url": "https://maps.apple.com/?daddr=316+Congress+Ave+Austin+TX",
    "audio_recording_uri": "vault://telephony/recordings/call_task_882910f.enc"
  }
}
```

---

## Operational Guidelines

1. **Anti-Harassment Calling Limits**: Limit automated redials to a maximum of 3 attempts with exponential backoff (5m, 15m, 45m).
2. **Transparent Machine Identity**: Always disclose AI machine identity when legally mandated by state or federal recording consent laws (*"Hello, this is an automated purchasing assistant calling on behalf of Alexander"*).
3. **Local Enclave Audio Encryption**: Encrypt all call recordings and transcripts locally inside OpenClaw vault with user-owned keys.
4. **Instant Human Takeover**: If the retail associate expresses confusion, frustration, or requests complex personal identification, trigger an immediate live call transfer to the user's phone.
