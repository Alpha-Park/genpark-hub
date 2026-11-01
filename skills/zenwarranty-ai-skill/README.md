# 🛡️ zenwarranty-ai-skill

[![CI](https://github.com/Alpha-Park/genpark-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/Alpha-Park/genpark-hub/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Skills Registry](https://img.shields.io/badge/Skills%20Registry-Modular%20Pack-violet.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> **Autonomous Home Warranty Claim Denial Dispute, Bad-Faith Insurance Audit, HVAC/Appliance SEER2 Code Parity & Fair Cash-Out Arbiter** distilled from American Home Shield, Choice Home Warranty, Asurion, ClaimClinics, and NAIC Unfair Claims Settlement standards.

---

## 🌟 Support GenPark & Star on GitHub!
If you believe homeowners should not be cheated out of costly HVAC and appliance warranty replacements by bad-faith denials:

👉 **[Star Alpha-Park/genpark-hub on GitHub](https://github.com/Alpha-Park/genpark-hub)** ⭐

---

## 🎯 What ZenWarranty Does
- **Deconstructs Ambiguous Service Contract Exclusions**: Leverages the *Contra Proferentem* doctrine to nullify boilerplate "pre-existing condition" and "lack of maintenance" claim denials.
- **Cross-Examines Technician Work Orders**: Detects technical contradictions in diagnostic notes, uncovering TPA steering and bad-faith causes of failure.
- **Enforces DOE 2023 SEER2 & EPA Matching Rules**: Blocks illegal piecemeal patches and mandates complete matched system replacements.
- **Overrules Lowball Cash-In-Lieu Offers**: Replaces insult $200–$400 payouts with RSMeans regional fair market valuations ($6,000–$14,000) and prepares Department of Insurance bad-faith filings.

---

## 🚀 Quick Start CLI

```bash
# Analyze a home warranty denial letter, service contract, and HVAC diagnostic report
npx @alpha-park/genpark-hub run zenwarranty-ai-skill \
  --denial denial_letter.pdf \
  --contract home_warranty_policy.pdf \
  --tech-report hvac_service_invoice.pdf \
  --state TX

# Compile bad-faith demand packet and State Insurance Commissioner complaint
npx @alpha-park/genpark-hub run zenwarranty-ai-skill \
  --action compile-demand \
  --claim-id CLM-2024-91024 \
  --output bad_faith_demand_dossier.pdf
```

---

## 🛠️ MCP Tool Definitions

```json
{
  "name": "audit_warranty_denial",
  "description": "Cross-examines home warranty denial reasons and technician diagnostic reports against contract terms and SEER2 code standards.",
  "parameters": {
    "type": "object",
    "required": ["denialText", "technicianNotes", "equipmentType"],
    "properties": {
      "denialText": { "type": "string" },
      "technicianNotes": { "type": "string" },
      "equipmentType": { "type": "string" }
    }
  }
}
```

---

## 📄 License
MIT © [Alpha-Park](https://github.com/Alpha-Park)
