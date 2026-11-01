# 🕊️ zenfuneral-ai-skill

[![CI](https://github.com/Alpha-Park/genpark-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/Alpha-Park/genpark-hub/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Skills Registry](https://img.shields.io/badge/Skills%20Registry-Modular%20Pack-violet.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> **Autonomous Funeral Home Price Transparency, FTC Funeral Rule 16 CFR Part 453 Unbundling, Direct-to-Consumer Casket Price Arbitrage & Embalming Anti-Gouging Arbiter** distilled from Lantern, Parting, Empathy, Titan Casket, and Funeral Consumers Alliance.

---

## 🌟 Support GenPark & Star on GitHub!
If you believe grieving families should be protected from deceptive sales tactics and price gouging at life's most difficult moments:

👉 **[Star Alpha-Park/genpark-hub on GitHub](https://github.com/Alpha-Park/genpark-hub)** ⭐

---

## 🎯 What ZenFuneral Does
- **Deconstructs Bloated Funeral Package Quotes**: Ingests General Price Lists (GPL) and unbundles packaged ceremonies into transparent statutory line items.
- **Enforces the Federal FTC Funeral Rule (16 CFR Part 453)**: Eliminates strictly illegal third-party casket handling surcharges ($500–$1,500) and exposes false claims regarding mandatory embalming.
- **Unlocks Direct-to-Consumer Casket Savings**: Matches showroom caskets ($3,000–$8,000) with identical direct-to-consumer models (Titan Casket / Costco) at $800–$1,500, saving $3,000–$6,000.
- **Audits Pre-Need Funeral Trusts & Policies**: Reviews prepaid contracts for state statutory refundability, inflation guarantees, and cross-state portability.

---

## 🚀 Quick Start CLI

```bash
# Analyze a funeral home quote and General Price List
npx @alpha-park/genpark-hub run zenfuneral-ai-skill \
  --quote funeral_home_quote.pdf \
  --gpl funeral_home_gpl.pdf \
  --casket-source direct-to-consumer \
  --state PA

# Generate FTC Funeral Rule compliance directive and itemized order
npx @alpha-park/genpark-hub run zenfuneral-ai-skill \
  --action compile-order \
  --case-id FUNERAL-2024-1904 \
  --output ftc_itemized_directive.pdf
```

---

## 🛠️ MCP Tool Definitions

```json
{
  "name": "audit_funeral_gpl",
  "description": "Unbundles funeral home quotes against the General Price List and audits compliance with the federal FTC Funeral Rule (16 CFR Part 453).",
  "parameters": {
    "type": "object",
    "required": ["quoteText", "stateJurisdiction"],
    "properties": {
      "quoteText": { "type": "string" },
      "stateJurisdiction": { "type": "string" }
    }
  }
}
```

---

## 📄 License
MIT © [Alpha-Park](https://github.com/Alpha-Park)
