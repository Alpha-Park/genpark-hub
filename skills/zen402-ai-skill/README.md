<div align="center">

# zen402-ai-skill 🪙

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**HTTP 402 Machine-Native Micropayments & On-Chain Resource Settlement Engine distilled from Linux Foundation x402 and Coinbase. Autonomous handling of 402 Paymen...**

</div>

---

## 🌟 Highlights & Core Features

- **HTTP 402 Challenge Handler**: Automatically intercept HTTP 402 Payment Required status codes and parse structured payment challenge headers (network, token, amount, recipient)
- **Programmatic Stablecoin Signer**: Execute sub-second, sub-cent USDC micropayments over Base, Solana, and Polygon using local embedded keypairs
- **Payment Proof Dispatcher**: Re-issue authenticated requests with cryptographic x402 payment proof headers to immediately unlock premium feeds
- **Machine Economy Budget Governor**: Enforce strict per-call ($0.05 max) and daily session ($2.00 max) spending caps backed by local tamper-proof ledgers

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest or execute zen402 workflow
npx genpark run zen402 --demo

# Run with custom parameters in local OpenClaw runtime
npx genpark run zen402 --execute
```

## 🛠 MCP Tools & Agent Protocol
- `zen402_execute`: Primary autonomous execution tool with schema validation.
- `zen402_audit`: Non-destructive state assessment and discrepancy scanner.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
