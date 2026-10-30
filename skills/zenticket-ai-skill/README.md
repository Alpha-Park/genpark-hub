<div align="center">

# zenticket-ai-skill 🚗

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous Municipal Traffic & Parking Citation Defense, Automated Speed/Red-Light Camera Radar Calibration Challenge & Written Trial by Declaration Dismissal Agent.**  
*Distilled from DoNotPay, Off The Record & WinIt paradigms.*

</div>

---

## 🌟 Highlights & Core Features

- **Procedural Defect Sentry**: Parses traffic and parking citations to detect fatal legal flaws (obscured signage, faded curb markings, blank mandatory fields).
- **Automated Camera & Radar Calibration Audit**: Cross-references NHTSA radar calibration logs and yellow-light interval minimums to strike down automated camera tickets.
- **Trial by Written Declaration (TR-205)**: Compiles formal court-certified written defense briefs and evidence packages to dismiss citations by mail without attending court.
- **Insurance Premium & Point Shield**: Eliminates moving violation points on driving records, preventing 15%–30% multi-year insurance premium surcharges.

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest ticket photo and inspect procedural flaws
npx genpark run zenticket --image "evidence/speed_ticket.jpg" --jurisdiction "SFMTA"

# Compile California Form TR-205 Trial by Written Declaration
npx genpark run zenticket --case-id "TCK-20261031-C1D2" --generate-declaration --include-radar-audit
```

## 🛠 MCP Tools Exposed

- `zenticket_parse_citation`: OCR parsing of ticket violation codes and deadlines.
- `zenticket_audit_signage`: Compares street photo evidence against federal MUTCD standards.
- `zenticket_verify_radar_calibration`: Checks speed camera sensor maintenance records.
- `zenticket_generate_declaration`: Compiles state-specific written court declaration dossiers.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
