<div align="center">

# zenlease-ai-skill 🏠

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous Housing Tenant Rights, Security Deposit Recovery & Habitability Enforcement Agent for GenPark & OpenClaw Ecosystem.**  
*Distilled from Tenantcube, JustFix, RentersRights.ai & Roost paradigms.*

</div>

---

## 🌟 Highlights & Core Features

- **Statutory Deadline Enforcement**: Instantly detects when landlords miss state deposit return deadlines (e.g. 14 days in NY, 21 days in CA, 30 days in TX), triggering complete forfeiture of deduction rights.
- **Normal Wear & Tear Protection**: Utilizes HUD useful life depreciation tables to strike down illegal repainting and whole-carpet replacement charges.
- **Punitive Treble Damages Escalation**: Weaponizes statutory bad-faith penalties ($2\times$ to $3\times$ deposit amount) to force rapid pre-trial settlement.
- **Habitability Repair Notices**: Generates formal 14-day statutory notices to cure for mold, broken heating, or plumbing failures, unlocking rent withholding remedies.

---

## 🚀 Quick Start & CLI Usage

```bash
# Audit landlord deposit deduction statement
npx genpark run zenlease --state "NY" --deposit 3200 --end-date "2026-09-30" --notice-date "2026-10-18"

# Generate certified demand with 2x statutory bad faith penalty
npx genpark run zenlease --case-id "DEP-20261026-B8C1" --dispatch-demand --multiplier 2
```

## 🛠 MCP Tools Exposed

- `zenlease_audit_deposit_timeline`: Evaluates statutory return deadlines by state/jurisdiction.
- `zenlease_amortize_damage`: Calculates allowable depreciation deductions under normal wear-and-tear guidelines.
- `zenlease_generate_certified_demand`: Auto-compiles certified pre-litigation demand letters with statutory citations.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
