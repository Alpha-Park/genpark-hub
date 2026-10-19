---
name: zenpango-ai-skill
description: Agentic Post-Purchase Operating System, Autonomous Carrier Routing & Smart Reverse Logistics for GenPark & OpenClaw. Distilled from Pango (pango.ai / YC S26) to unify post-checkout logistics, automate multi-carrier tracking, dynamically route shipments, arbitrate intelligent returnless refunds, and eliminate wardrobing fraud.
version: 1.0.0
license: MIT
---

# zenpango-ai-skill

## Overview
`zenpango-ai-skill` (ZenPango / 禅盘) is the agentic post-purchase operating system and smart reverse logistics coordinator for GenPark & OpenClaw. Distilled from **Pango's (pango.ai / YC S26 / Steve Rahimi & Lukasz Reszczynski) Agentic E-Commerce Logistics Engine**, ZenPango resolves the most fragmented, costly phase of the e-commerce lifecycle: **everything that happens after the user clicks "Buy"**.

In traditional retail and autonomous agentic commerce, post-purchase operations are hopelessly fractured across 5 to 7 isolated point solutions:
- Carrier shipping APIs, warehouse WMS systems (ShipBob, Ongoing), tracking portals (AfterShip), return platforms (Loop Returns), and customer support helpdesks (Zendesk, Gorgias) operate in separate silos;
- Rigid, static "if-then" rule trees cause delivery exceptions to escalate into angry support tickets;
- Blanket return policies bleed millions in reverse freight and restocking costs, while opening doors to wardrobing and empty-box return fraud.

Operating as an event-driven agentic state machine within OpenClaw, ZenPango establishes a single unified source of truth:
- **Autonomous Multi-Carrier Dispatch & Routing**: Evaluates live carrier transit velocities, weather delays, and delivery promise guarantees to route parcels dynamically across FedEx, UPS, DHL, and local regional couriers.
- **Context-Aware Reverse Logistics & Intelligent RMA**: Abandons rigid return windows in favor of holistic multi-factor evaluation (customer lifetime value, item category, return reason, geographic transit cost).
- **Automated Returnless Refund Arbitration**: Dynamically calculates reverse salvage economics—if return freight plus warehouse restocking exceeds residual inventory value, it instantly issues a returnless refund, eliminating carbon emissions and warehouse congestion.
- **Revenue-Retaining Exchange & Anti-Fraud Shield**: Prompts high-satisfaction product or size exchanges before defaulting to cash churn, while detecting serial returners, tag-tucking, and weight discrepancies across order histories.

---

## Core Capabilities

### 1. Unified Logistics Orchestrator (`UnifiedLogisticsOrchestrator`)
- Merges warehouse management systems (WMS), carrier tracking telemetry, and customer accounts onto a single dynamic state machine.
- Proactively flags transit delays, customs holds, or carrier exceptions before the buyer notices, dispatching proactive mitigation notifications to paired messengers.

### 2. Context-Aware Dynamic RMA Engine (`ContextAwareRMAEngine`)
- Evaluates incoming return requests against dynamic criteria:
  - Assesses buyer relationship health, item category, and reported defect severity.
  - Automatically generates mobile carrier QR drop-off codes (eliminating consumer printer requirements).
  - Synchronizes return inspection milestones directly with warehouse receiving docks.

### 3. Returnless Refund Economic Arbiter (`ReturnlessRefundArbiter`)
- Evaluates real-time reverse unit economics:
  $$\text{Net Salvage Value} = \text{Item Resale Residual} - (\text{Return Freight} + \text{Warehouse Restocking Cost})$$
- When net salvage value is negative (typical for bulky, low-margin, or hazardous goods), the agent triggers an instant returnless refund, directing the user to donate or recycle the item locally.

### 4. Revenue-Retaining Exchange & Fraud Shield (`RevenueExchangeShield`)
- Protects merchant top-line revenue by offering frictionless 1-tap size/color exchanges or bonus store credit (+10% incentive) before issuing cash refunds.
- Profiles behavioral return anomalies across multiple orders to neutralize serial returners and wardrobing fraud.

---

## Standard Post-Purchase Logistics Schema

```json
{
  "logistics_protocol": "zenpango-fulfillment/v1.0",
  "order_id": "ord_pango_77192x",
  "merchant_context": {
    "store_domain": "alpine-gear.com",
    "wms_system": "ongoing_wms_cloud"
  },
  "outbound_dispatch": {
    "selected_carrier": "dhl_express_carbon_neutral",
    "tracking_number": "DHL-991204812",
    "promised_delivery_window": "2026-10-22T16:00:00Z",
    "dynamic_routing_rationale": "Switched from standard ground due to Midwest blizzard delay warning."
  },
  "reverse_logistics_context": {
    "rma_requested": true,
    "sku": "ALP-MERINO-BASE-L",
    "return_reason": "size_too_large",
    "item_retail_price_usd": 65.00,
    "reverse_freight_est_usd": 12.50,
    "restocking_cost_usd": 6.00,
    "resale_residual_usd": 45.00,
    "arbitration_verdict": "exchange_offered_with_instant_label"
  },
  "exchange_resolution": {
    "buyer_accepted_action": "exchange_size_medium",
    "outbound_replacement_sku": "ALP-MERINO-BASE-M",
    "carrier_qr_code": "data:image/png;base64,iVBORw0KGgo...",
    "retained_revenue_usd": 65.00,
    "fraud_risk_score": 0.04
  }
}
```

---

## Operational Guidelines

1. **Proactive Exception Management**: Never wait for customers to complain about lost or delayed packages; detect shipping anomalies at the carrier API level and notify the buyer proactively.
2. **Economic Rationality on Returns**: Always run the reverse economic calculation before issuing return labels; avoid paying \$15 in return freight for items valued under \$20.
3. **Printer-Free Returns**: Ensure all generated return labels include carrier digital QR codes compatible with postal/courier drop-off centers.
4. **Data Privacy**: Store customer addresses, tracking tokens, and dispute records encrypted locally within OpenClaw.
