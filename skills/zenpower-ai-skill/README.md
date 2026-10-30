<div align="center">

# zenpower-ai-skill ⚡

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous Dynamic Energy Arbitrage, Real-Time Wholesale Spot Tariff Optimization (RTP/TOU), Distributed Residential Battery Dispatch & Bidirectional EV (V2H/V2...**

</div>

---

## 🌟 Highlights & Core Features

- **Wholesale Spot Tariff Radar**: Ingest day-ahead hourly electricity spot prices and grid carbon intensity across CAISO, ERCOT, Nord Pool, and Octopus APIs to identify negative pricing slots
- **DER Knapsack Optimizer**: Solve linear optimization models to coordinate battery ESS charging, heat pumps, and smart appliances into sub-cent windows
- **Bidirectional EV (V2H/V2G) Arbiter**: Discharge stored EV battery energy during extreme peak grid stress events ($2.00-$9.00/kWh) while preserving departure range
- **Solar PV Generation Forecaster**: Ingest NOAA meteorological satellite irradiance vectors to align high-draw appliances with peak rooftop generation
- **SREC & Grid Export Settle Engine**: Track clean solar generation behind the meter, mint SREC attribute certificates, and reconcile net-metering utility statements

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest or execute zenpower workflow
npx genpark run zenpower --demo

# Run with custom parameters in local OpenClaw runtime
npx genpark run zenpower --execute
```

## 🛠 MCP Tools & Agent Protocol
- `zenpower_execute`: Primary autonomous execution tool with schema validation.
- `zenpower_audit`: Non-destructive state assessment and discrepancy scanner.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
