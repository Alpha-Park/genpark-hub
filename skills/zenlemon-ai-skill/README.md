<div align="center">

# zenlemon-ai-skill 🍋

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous Automotive Lemon Law Buyback Enforcement, Dealership Repair Order (RO) OCR Audit & Manufacturer Statutory Repurchase Arbitration Agent.**  
*Distilled from Lemonade, Krohn & Moss, MyLemon & CarEdge paradigms.*

</div>

---

## 🌟 Highlights & Core Features

- **Dealership Repair Order (RO) Deconstruction**: Ingests service invoices to unify fragmented dealership complaint descriptions into single continuous defect lineages.
- **50-State Lemon Law Presumption Solver**: Tracks cumulative "Days Out of Service" (30-day threshold) and repair attempt counts (3–4 attempts) under California Song-Beverly, New York GBL § 198-a, and federal Magnuson-Moss acts.
- **Statutory Buyback Formula Calculator**: Computes 100% refund of down payments, monthly installments, sales tax, and registration fees minus the statutory mileage offset (strictly frozen at first repair mileage).
- **Certified Pre-Litigation Demand Engine**: Automatically compiles court-ready buyback dossiers directly to automaker general counsel portals to force \$30,000–\$90,000 manufacturer repurchases.

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest vehicle repair orders and check lemon law eligibility
npx genpark run zenlemon --vin "1FTEW1E45PKD89211" --orders-dir "invoices/ford_f150/" --state "CA"

# Calculate statutory repurchase refund and compile pre-litigation buyback package
npx genpark run zenlemon --claim-id "LMN-20261101-A9B1" --compile-demand --mfr "Ford"
```

## 🛠 MCP Tools Exposed

- `zenlemon_audit_repair_orders`: Parses dealership invoices and logs cumulative days out of service.
- `zenlemon_evaluate_presumption`: Solves 50-state statutory lemon law thresholds.
- `zenlemon_calculate_buyback`: Computes statutory vehicle repurchase refunds and mileage offsets.
- `zenlemon_compile_demand`: Generates certified pre-litigation buyback demand packages.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
