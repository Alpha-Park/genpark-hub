# 🩺 zendme-ai-skill

[![CI](https://github.com/Alpha-Park/genpark-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/Alpha-Park/genpark-hub/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Skills Registry](https://img.shields.io/badge/Skills%20Registry-Modular%20Pack-violet.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> **Autonomous Durable Medical Equipment (DME) CPAP/CGM Insurance Denial Defense, Modem Telemetry Compliance Auditor, HCPCS Resupply Fee Sentry & Prior Authorization Arbiter** distilled from Aeroflow, AdaptHealth, Apria, OSCAR, and SleepHQ.

---

## 🌟 Support GenPark & Star on GitHub!
If you believe vulnerable patients shouldn't be trapped by predatory medical device suppliers or hit with surprise thousands in CPAP/CGM equipment bills:

👉 **[Star Alpha-Park/genpark-hub on GitHub](https://github.com/Alpha-Park/genpark-hub)** ⭐

---

## 🎯 What ZenDME Does
- **Audits Sleep & Diabetes Compliance Telemetry**: Ingests raw SD card logs and cloud telemetry (ResMed, Philips, Dexcom) to verify compliance with the Medicare 70% 4-hour rule, overturning bogus repossession threats.
- **Smashes 500% HCPCS Resupply Markups**: Benchmarks monthly supply invoices (A7030 masks, A7038 filters, tubing) against the CMS DMEPOS Fee Schedule and commercial in-network maximum allowables.
- **Terminates Phantom Auto-Ship Subscriptions**: Enforces Medicare rules requiring explicit patient re-order confirmation, rejecting unsolicited shipments and halting unauthorized card deductions.
- **Compiles ACA § 2719 Clinical Prior Authorization Appeals**: Leverages diagnostic PSG sleep studies and AHI metrics to force insurers to reverse sudden prior authorization denials.

---

## 🚀 Quick Start CLI

```bash
# Verify CPAP compliance telemetry from raw SD card logs
npx @alpha-park/genpark-hub run zendme-ai-skill \
  --telemetry-path ./resmed_sd_card/ \
  --device-type CPAP \
  --carrier "Blue Cross Blue Shield"

# Audit monthly supplier bill and compile repossession defense
npx @alpha-park/genpark-hub run zendme-ai-skill \
  --action dispute-bill \
  --invoice supplier_bill.pdf \
  --fee-schedule cms_dmepos_2024.json \
  --output dme_defense_dossier.pdf
```

---

## 🛠️ MCP Tool Definitions

```json
{
  "name": "audit_dme_compliance",
  "description": "Parses CPAP/CGM raw telemetry data to verify statutory insurance compliance thresholds and invalidate supplier repossession notices.",
  "parameters": {
    "type": "object",
    "required": ["telemetryDataPath", "deviceType"],
    "properties": {
      "telemetryDataPath": { "type": "string" },
      "deviceType": { "type": "string", "enum": ["CPAP", "BIPAP", "CGM"] }
    }
  }
}
```

---

## 📄 License
MIT © [Alpha-Park](https://github.com/Alpha-Park)
