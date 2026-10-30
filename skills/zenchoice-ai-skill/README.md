<div align="center">

# zenchoice-ai-skill 🛒

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous personal decision & shopping copilot. Executes cross-platform product research, Reddit review sentiment audit, MAUT trade-off scoring, cart staging, ...**

</div>

---

## 🌟 Highlights & Core Features

- **Intent Profiler**: Parse implicit user constraints and long-term shopping preferences
- **Review Auditor**: Scrape live web pricing and Reddit/forum sentiment to filter fake reviews
- **Decision Matrix**: Rank items via MAUT (Price, Quality, Shipping, Returns)
- **Reflexion Loop**: Self-correct on stockouts, dynamic shipping fees, and coupon failure
- **Cart Stager & HITL Gate**: Stage checkout and push 1-tap confirmation card to WhatsApp/Telegram

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest or execute zenchoice workflow
npx genpark run zenchoice --demo

# Run with custom parameters in local OpenClaw runtime
npx genpark run zenchoice --execute
```

## 🛠 MCP Tools & Agent Protocol
- `zenchoice_execute`: Primary autonomous execution tool with schema validation.
- `zenchoice_audit`: Non-destructive state assessment and discrepancy scanner.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
