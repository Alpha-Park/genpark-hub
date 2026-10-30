<div align="center">

# zenmandate-ai-skill 📜

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Cryptographic Intent Mandate & Agent Payments Protocol (AP2) engine distilled from Google Agentic Commerce AP2 and Agentcard. Enforces mathematical proof-of-int...**

</div>

---

## 🌟 Highlights & Core Features

- **Intent Mandate Issuer**: Create cryptographically signed SD-JWT user intent mandates with strict budget caps and merchant constraints
- **Cart Mandate Compiler**: Freeze candidate SKU selections, zip-code taxes, and landed costs into immutable SHA-256 cart digests
- **Payment Mandate Broker**: Dispatch binding AP2 payment tokens to merchant gateways linking cart digests to authorized payment instruments
- **Pre-Flight Policy Circuit Breaker**: Halt execution immediately if landed price exceeds authorized max budget by even $0.01

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest or execute zenmandate workflow
npx genpark run zenmandate --demo

# Run with custom parameters in local OpenClaw runtime
npx genpark run zenmandate --execute
```

## 🛠 MCP Tools & Agent Protocol
- `zenmandate_execute`: Primary autonomous execution tool with schema validation.
- `zenmandate_audit`: Non-destructive state assessment and discrepancy scanner.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
