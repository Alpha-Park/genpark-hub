<div align="center">

# zenpango-ai-skill 📦

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Agentic post-purchase operating system and reverse logistics arbiter distilled from Pango (YC S26). Unifies WMS, dynamic carrier routing, and customer support i...**

</div>

---

## 🌟 Highlights & Core Features

- **Post-Purchase State Machine**: Unify fragmented WMS, carrier, and support silos onto an event-driven fulfillment graph
- **Dynamic Carrier Router**: Continuously re-evaluate regional carrier SLA, weather, and hub congestion for on-time delivery
- **Returnless Refund Arbiter**: Calculate net salvage value vs. reverse freight to trigger instantaneous returnless refunds
- **Anti-Wardrobing Shield**: Audit historical return frequency, claim patterns, and product condition telemetry to block return abuse

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest or execute zenpango workflow
npx genpark run zenpango --demo

# Run with custom parameters in local OpenClaw runtime
npx genpark run zenpango --execute
```

## 🛠 MCP Tools & Agent Protocol
- `zenpango_execute`: Primary autonomous execution tool with schema validation.
- `zenpango_audit`: Non-destructive state assessment and discrepancy scanner.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
