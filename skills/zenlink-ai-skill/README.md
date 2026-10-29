<div align="center">

# zenlink-ai-skill 📡

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous Telecom & Broadband Fee Stripping, Retentions Negotiation & Service SLA Enforcement Agent.**  
*Distilled from Rocket Money, Billshark & Cushion paradigms.*

</div>

---

## 🌟 Highlights & Core Features

- **Junk Fee & Loyalty Markup Stripping**: Ingests telecom PDF bills, catches expired promotional spikes, and strips arbitrary hidden carrier surcharges.
- **Unlawful Modem Rental Eraser (TVPA § 642)**: Detects customer-owned DOCSIS 3.1 modems to strike off unauthorized \$15/month rental charges.
- **24/7 Network SLA Telemetry**: Monitors latency and throughput logs to prove carrier throttling and claim pro-rata outage credits.
- **Automated Retentions Negotiation**: Deploys localized competitor pricing (BATNA) to negotiate bills down to introductory tiers (\$360–\$720/year savings).

---

## 🚀 Quick Start & CLI Usage

```bash
# Audit telecom statement PDF
npx genpark run zenlink --bill-pdf "statements/comcast_oct2026.pdf" --modem-mac "00:1A:C2:7B:00:44"

# Execute autonomous retentions negotiation
npx genpark run zenlink --audit-id "TEL-20261029-A1B2" --zip "94107" --negotiate
```

## 🛠 MCP Tools Exposed

- `zenlink_audit_bill`: Ingests and audits monthly ISP bills.
- `zenlink_verify_owned_equipment`: Verifies customer hardware against billing records to remove rental fees.
- `zenlink_run_retentions_bargaining`: Deploys BATNA-driven negotiation scripts to retentions desks.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
