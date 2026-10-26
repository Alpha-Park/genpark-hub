<div align="center">

# zenclaim-ai-skill ✈️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous Airline Passenger Rights & Delay Compensation Arbitrage Agent for GenPark & OpenClaw Ecosystem.**  
*Distilled from AirHelp, Flightright & ClaimCompass paradigms.*

</div>

---

## 🌟 Highlights & Core Features

- **Break Fraudulent Airline Weather Excuses**: Cross-references historical ADS-B radar telemetry and METAR airport observations to dismantle fake "extraordinary circumstances" claims.
- **Multi-Jurisdiction Cash Maximization**: Solves EU261/UK261 (€600/passenger), US DOT Title 14 CFR Part 260 mandatory cash refunds, and Montreal Convention baggage indemnities (up to 1,288 SDR).
- **Voucher Trap Destroyer**: Prohibits deceptive airline credit voucher conversions; strictly enforces cash and direct bank transfer compensation.
- **Certified Legal Demand Engine**: Auto-drafts and dispatches statutory demand notices directly to airline compliance gateways with 14-day statutory deadlines.

---

## 🚀 Quick Start & CLI Usage

```bash
# Analyze flight disruption from PNR or boarding pass
npx genpark run zenclaim --pnr "X8K9LQ" --carrier "LH" --flight "LH402" --delay 4.5

# Generate and send legal demand letter
npx genpark run zenclaim --claim-id "CLM-20261026-A9F2" --dispatch-demand --iban "DE89370400440532013000"
```

## 🛠 MCP Tools Exposed

- `zenclaim_assess_pnr`: Ingests passenger PNR, computes statutory cash entitlement under EU261, UK261, and US DOT rules.
- `zenclaim_audit_telemetry`: Verifies weather and ATC delay rebuttals using ADS-B radar telemetry.
- `zenclaim_generate_legal_demand`: Compiles formal legal demand notice with statutory citations and IBAN payout routing.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
