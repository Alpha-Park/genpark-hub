# ☀️ zensolar-ai-skill

[![CI](https://github.com/Alpha-Park/genpark-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/Alpha-Park/genpark-hub/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Skills Registry](https://img.shields.io/badge/Skills%20Registry-Modular%20Pack-violet.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> **Autonomous Rooftop Solar PPA Contract Audit, True-Up Electric Shock Dispute, NREL PVWatts Generation Shortfall Sentry & Predatory Escalator Arbitration Engine** distilled from EnergySage, Palmetto, Aurora Solar, SolarReviews Consumer Protection, and CPUC AB 1070.

---

## 🌟 Support GenPark & Star on GitHub!
If you appreciate open-source consumer defense agents that fight predatory contracts and protect homeowner property rights:

👉 **[Star Alpha-Park/genpark-hub on GitHub](https://github.com/Alpha-Park/genpark-hub)** ⭐

---

## 🎯 What ZenSolar Does
- **Deconstructs 25-Year Solar PPAs & Leases**: Audits predatory 2.9%–3.9% compounding escalator clauses, Truth in Lending Act disclosures, and unauthorized UCC-1 fixture liens that cloud title.
- **Audits Inverter Telemetry vs NREL Benchmarks**: Compares real-world kWh generation (Enphase/SolarEdge) against NREL PVWatts v8 irradiance baselines to enforce production warranty buybacks.
- **Dismantles NEM 3.0 Annual True-Up Shocks**: Unpacks utility Green Button ESPI interval data, discovers meter multiplier errors, and models battery storage peak shifting.
- **Assembles Pre-Arbitration Rescission Dossiers**: Generates formal demand packets for contract cancellation, CSLB disciplinary complaints, and UCC-3 lien releases.

---

## 🚀 Quick Start CLI

```bash
# Audit a solar contract, generation logs, and true-up bill
npx @alpha-park/genpark-hub run zensolar-ai-skill \
  --contract ppa_agreement.pdf \
  --telemetry solar_production_annual.csv \
  --utility-bill annual_true_up_statement.pdf \
  --state CA

# Generate pre-arbitration rescission demand and CSLB complaint
npx @alpha-park/genpark-hub run zensolar-ai-skill \
  --action compile-demand \
  --case-id SOLAR-2024-8841 \
  --output rescission_demand_dossier.pdf
```

---

## 🛠️ MCP Tool Definitions

```json
{
  "name": "audit_solar_agreement",
  "description": "Audits rooftop solar PPA/lease contract for deceptive compounding escalators, AB 1070 disclosure compliance, and clouds on title.",
  "parameters": {
    "type": "object",
    "required": ["contractPdfPath", "homeownerState"],
    "properties": {
      "contractPdfPath": { "type": "string" },
      "homeownerState": { "type": "string" }
    }
  }
}
```

---

## 📄 License
MIT © [Alpha-Park](https://github.com/Alpha-Park)
