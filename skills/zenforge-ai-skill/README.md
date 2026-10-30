<div align="center">

# zenforge-ai-skill ⚡

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous Hardware Engineering BOM Procurement, Multi-Distributor Real-Time Pricing Synthesis, Pin-Compatible Component Alternate Arbitrage & Lifecycle Obsoles...**

</div>

---

## 🌟 Highlights & Core Features

- **Engineering BOM Normalizer**: Ingest Altium, KiCad, and Excel BOMs to extract MPNs, reference designators, package footprints, and tolerance constraints
- **Multi-Distributor Stock Radar**: Simultaneously query live stock counts, cut-tape/reel packaging, MOQs, and volume price breaks across DigiKey, Mouser, LCSC, Arrow, and Newark
- **Pin-Compatible Alternate Arbiter**: Search parametric component datasheets to isolate 100% pin-compatible, drop-in replacement parts matching voltage, ESR, and thermal specs
- **Lifecycle & Obsolescence Sentinel**: Screen BOM line items against manufacturer PCN/EOL/NRND notices and lead-time spikes exceeding 26 weeks
- **Freight Knapsack & HS Tariff Compiler**: Classify electronic parts into Harmonized Tariff Schedule (HTS) codes and optimize multi-vendor orders into minimum-cost split shipments

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest or execute zenforge workflow
npx genpark run zenforge --demo

# Run with custom parameters in local OpenClaw runtime
npx genpark run zenforge --execute
```

## 🛠 MCP Tools & Agent Protocol
- `zenforge_execute`: Primary autonomous execution tool with schema validation.
- `zenforge_audit`: Non-destructive state assessment and discrepancy scanner.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
