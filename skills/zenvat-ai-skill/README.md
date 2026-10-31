<div align="center">

# zenvat-ai-skill 🛍️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous Cross-Border Travel VAT Refund Arbitrage, Digital Customs Barcode Validation & Zero-Fee Repatriation Agent.**  
*Distilled from Utu, Wevat & Planet paradigms.*

</div>

---

## 🌟 Highlights & Core Features

- **Eliminate 35%–50% Middleman Processing Fees**: Bypasses predatory airport refund counters (Global Blue, Planet) to reclaim 100% of statutory VAT directly to your bank account or card.
- **1-Second Digital Customs Barcode**: Generates official digital customs barcodes (France PABLO, Spain DIVA, Italy OTIRE, Japan Tax-Free QR) for instant 1-second kiosk terminal scans—no more 2-hour physical queues!
- **Multi-Store Basket Aggregation**: Groups disparate boutique receipts across an entire trip to surpass national single-store spending thresholds.
- **Points & Miles Boost Arbitrage (Utu Model)**: Option to convert tax refunds into airline frequent flyer miles at up to a **125%–140% bonus value multiplier**.

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest receipts and passport details for France/Spain trip
npx genpark run zenvat --receipts "receipts/paris_nov2026/" --jurisdiction "FRANCE_PABLO"

# Generate digital PABLO customs barcode for airport kiosk
npx genpark run zenvat --dossier-id "VAT-20261101-A1B2" --generate-barcode
```

## 🛠 MCP Tools Exposed

- `zenvat_compile_receipts`: Ingests receipt invoices and calculates statutory VAT entitlements.
- `zenvat_generate_customs_barcode`: Issues electronic PABLO/DIVA/OTIRE departure barcodes.
- `zenvat_verify_kiosk_attestation`: Validates electronic customs clearance proof.
- `zenvat_settle_payout`: Executes zero-fee payout routing to bank cards, SEPA, or airline miles.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
