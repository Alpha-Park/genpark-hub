<div align="center">

# zenmux-ai-skill 🎛️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous MCP Tool Capability Marketplace, Runtime Dynamic Tool Router, Pay-per-Call Universal Wallet & Fault-Tolerant Circuit Breaker Multiplexer distilled fr...**

</div>

---

## 🌟 Highlights & Core Features

- **Unified MCP Capability Gateway**: Expose hundreds of on-demand external tools (stealth proxies, OCR, vertical domain APIs) through a single standard local MCP endpoint
- **Pay-per-Call Universal Wallet**: Execute sub-cent micro-debit settlements per successful call from local prepaid wallet, eliminating unused monthly SaaS subscriptions
- **Pareto Latency/Cost Benchmark Router**: Dynamically benchmark live provider QoS (p95 latency, price, success rate) and route requests to optimal providers
- **Adaptive Sub-50ms Circuit Breaker**: Automatically trip on 3 consecutive 4xx/5xx errors or latency spikes, cascading to warm standby secondary providers
- **Schema Contract & Injection Sandbox**: Enforce strict JSON Schema validation and strip malicious prompt injection payloads from external tool outputs

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest or execute zenmux workflow
npx genpark run zenmux --demo

# Run with custom parameters in local OpenClaw runtime
npx genpark run zenmux --execute
```

## 🛠 MCP Tools & Agent Protocol
- `zenmux_execute`: Primary autonomous execution tool with schema validation.
- `zenmux_audit`: Non-destructive state assessment and discrepancy scanner.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
