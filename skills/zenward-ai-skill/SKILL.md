---
name: zenward-ai-skill
description: Autonomous Warranty Guardian, Credit Card Purchase Protection Arbitrage & 1-Click Repair Claim Engine distilled from Mulberry and Extend. Neutralizes predatory retail checkout warranty upsells, indexes manufacturer and credit card complimentary extended warranty coverages, monitors CPSC product recalls, and compiles automated evidence packets to recover 100% repair or replacement reimbursements.
version: 1.0.0
license: Apache-2.0
metadata:
  category: finance
  author: Alpha-Park
  tags:
    - warranty-guardian
    - purchase-protection
    - mulberry-paradigm
    - extend-arbitrage
    - credit-card-extended-warranty
    - automated-claim-filing
    - cpsc-recall-monitor
---

# ZenWard (禅佑) — Autonomous Warranty Guardian & Protection Arbitrage Engine

## Overview

Consumer electronics, home appliances, power tools, and personal tech constitute hundreds of billions in annual purchases, yet post-purchase protection remains a consumer trap. Retailers aggressively push overpriced extended warranties at checkout (e.g., Best Buy Geek Squad, Amazon Asurion) with profit margins exceeding 80%—preying on consumer fear. Meanwhile, consumers are completely unaware that their premium credit cards (Chase Sapphire, Amex Platinum/Gold, Capital One Venture X) already provide **complimentary 1-year extended warranty coverage and 90-day accidental damage/theft protection** up to \$10,000 per claim.

When an appliance fails after 11 or 18 months, 85% of consumers simply throw it away or pay out of pocket, deterred by the bureaucratic nightmare of locating proof-of-purchase receipts, credit card statements, and repair diagnostic sheets.

**ZenWard (禅佑)**, distilled from the breakthrough architectures of **Mulberry (`getmulberry.com`)** and **Extend (`extend.com`)**, transforms consumer asset protection into an automated, zero-effort guardian system ("防患未然，有备无患；物尽其天，安享其用").

ZenWard suppresses predatory warranty upsells at checkout, maintains a living local "Vault of Ownership", monitors federal safety recall databases (CPSC/NHTSA), and automatically compiles insurance-compliant claim dossiers to recover 100% of repair or replacement costs in 60 seconds.

```
       ┌────────────────────────────────────────────────────────┐
       │         New Purchase Receipt / Checkout Staged         │
       │    e.g. $850 Breville Espresso Machine or iPad Pro     │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │      Checkout Warranty Upsell Suppressor & Shield      │
       │  • Detects retailer warranty upsell (e.g. +$149 2-yr)  │
       │  • Verifies card cardholder perk (Chase/Amex +1 yr)   │
       │  • Vetoes redundant retail warranty, saving 15-25%     │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │        Living Vault of Ownership & Expiry Radar        │
       │  • Binds e-receipt, serial number, and order date      │
       │  • Tracks OEM manufacturer warranty (Months 1–12)      │
       │  • Tracks Credit Card Extended Warranty (Months 13–24) │
       │  • T-60 & T-30 days expiration inspection reminders    │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │        CPSC & OEM Safety Recall Continuous Sentinel    │
       │  • Cross-references serials against CPSC recall feeds  │
       │  • Alerts user of free factory repair/replacement kits │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │       1-Click Automated Claim Dossier Compiler         │
       │  • Device failure detected -> triggers claim workflow  │
       │  • Packages: Itemized Receipt + Card Statement Proof   │
       │    + Repair Diagnostic Estimate + Serial Photograph    │
       │  • Auto-submits to Card Benefit Services / OEM portal  │
       │  • Recovers 100% reimbursement check directly to user  │
       └────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. Checkout Warranty Upsell Suppressor
- **Zero-Markup Defense**: Intercepts high-margin warranty popups (Asurion, Allstate, Geek Squad) during checkout.
- **Credit Card Benefit Cross-Check**: Queries `zenpoint` to verify if the payment card selected provides complimentary extended warranty coverage (e.g., adding +1 additional year to manufacturer warranties of 3 years or less), automatically declining the merchant's \$50–\$200 upsell.

### 2. Living Vault of Ownership & Warranty Expiration Radar
- **Automated Ingestion**: Automatically captures purchase receipts from `zensierra`, `zencart`, or email webhooks, indexing the manufacturer warranty timeline and credit card extended coverage window.
- **T-60 / T-30 Expiration Notice**: Alerts the user 60 days and 30 days before the manufacturer's limited warranty expires, prompting a quick self-inspection for battery degradation, loose hinges, or screen defects before the free OEM repair window closes.

### 3. CPSC & OEM Safety Recall Sentinel
- **Continuous Defect Surveillance**: Monitors official recall databases (US CPSC, NHTSA, EU Safety Gate/RAPEX) and manufacturer service bulletins.
- **Automated Remedy Claiming**: If an appliance (e.g. an air fryer or lithium battery pack) is recalled, ZenWard notifies the user and stages the official OEM claim for a free replacement unit or full cash refund.

### 4. 1-Click Automated Claim Dossier Compiler
- **Bureaucracy Elimination**: Assembles all four required proof artifacts in under 60 seconds:
  1. Original itemized merchant receipt;
  2. Redacted credit card billing statement showing the exact purchase transaction;
  3. Manufacturer serial number and warranty certificate;
  4. Authorized repair diagnostic estimate or replacement invoice.
- **Direct Submission**: Submits the insurance claim packet directly to benefit portals (e.g., Card Benefit Services / eClaimsline / Allianz) and monitors adjuster review status until payment disbursement.

---

## Tool Definitions (MCP Schema)

```json
{
  "tools": [
    {
      "name": "evaluate_warranty_upsell",
      "description": "Evaluates whether an offered retail extended warranty should be rejected due to overlapping credit card or statutory manufacturer coverage.",
      "parameters": {
        "type": "object",
        "properties": {
          "product_title": { "type": "string" },
          "product_price_usd": { "type": "number" },
          "warranty_price_usd": { "type": "number" },
          "warranty_duration_months": { "type": "integer" },
          "payment_card_bin": { "type": "string", "description": "First 6 digits or card profile name to check cardholder benefits" }
        },
        "required": ["product_title", "product_price_usd", "warranty_price_usd"]
      }
    },
    {
      "name": "index_asset_warranty",
      "description": "Registers a physical product in the local Vault of Ownership, calculating manufacturer and extended warranty horizons.",
      "parameters": {
        "type": "object",
        "properties": {
          "item_name": { "type": "string" },
          "brand": { "type": "string" },
          "model_number": { "type": "string" },
          "serial_number": { "type": "string" },
          "purchase_date": { "type": "string", "format": "date" },
          "purchase_price_usd": { "type": "number" },
          "payment_method": { "type": "string" },
          "receipt_uri": { "type": "string" }
        },
        "required": ["item_name", "brand", "purchase_date", "purchase_price_usd"]
      }
    },
    {
      "name": "monitor_product_recalls",
      "description": "Scans official CPSC, NHTSA, and EU RAPEX databases to check registered household inventory for active safety recalls.",
      "parameters": {
        "type": "object",
        "properties": {
          "brand": { "type": "string" },
          "model_number": { "type": "string" }
        },
        "required": ["brand"]
      }
    },
    {
      "name": "compile_and_file_warranty_claim",
      "description": "Assembles itemized receipt, credit card statement proof, serial photo, and repair diagnostic sheet into an insurance-ready claim packet.",
      "parameters": {
        "type": "object",
        "properties": {
          "asset_id": { "type": "string" },
          "claim_type": { "type": "string", "enum": ["credit_card_extended_warranty", "purchase_protection_90_day", "oem_manufacturer_warranty", "safety_recall"] },
          "incident_date": { "type": "string", "format": "date" },
          "failure_description": { "type": "string" },
          "repair_estimate_usd": { "type": "number" }
        },
        "required": ["asset_id", "claim_type", "failure_description", "repair_estimate_usd"]
      }
    }
  ]
}
```

---

## Operational Guardrails & HITL Safety Gates

1. **Anti-Fraud Integrity Lock**: ZenWard strictly requires verified repair estimates from manufacturer-authorized service centers; it automatically rejects exaggerated or falsified damage claims to preserve legal compliance with insurance fraud statutes.
2. **PII Statement Redaction Sentinel**: When exporting monthly credit card billing statements for insurance submission, ZenWard automatically blacklists and redacts all unrelated line items (e.g. personal groceries, medical bills), exposing only the specific product transaction.
3. **No-Deductible Prioritization**: Whenever multiple claim routes exist (e.g. homeowner's insurance vs. credit card purchase protection), ZenWard always prioritizes the credit card benefit rail to avoid homeowner deductible fees or premium rate spikes.
