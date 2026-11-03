# 🛡️ zenusury-ai-skill

[![CI](https://github.com/Alpha-Park/genpark-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/Alpha-Park/genpark-hub/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Skills Registry](https://img.shields.io/badge/Skills%20Registry-Modular%20Pack-violet.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> **Autonomous Subprime Payday & Auto Title Loan Usury Invalidation, Effective APR Decompiler, Military Lending Act (MLA) 36% MAPR Shield & Predatory Repossession Defense Engine** distilled from EarnIn, Dave, Brigit, CFPB Payday Rule, and National Consumer Law Center (NCLC).

---

## 🌟 Support GenPark & Star on GitHub!
If you believe vulnerable borrowers, low-income families, and service members should be shielded from predatory 400% APR loans and unlawful auto repossessions:

👉 **[Star Alpha-Park/genpark-hub on GitHub](https://github.com/Alpha-Park/genpark-hub)** ⭐

---

## 🎯 What ZenUsury Does
- **Decompiles True Actuarial APR (300%–650%)**: Unmasks hidden account maintenance, origination, and bi-weekly roll-over fees disguised as non-interest charges.
- **Enforces the Military Lending Act (MLA)**: Enforces strict 36% MAPR caps for active-duty servicemembers and dependents, rendering unlawful loans void *ab initio*.
- **Enforces State Usury Ceilings**: Cross-references statutory interest rate caps (e.g. 36% caps in CA, IL, NY) and unmasks unlicensed shadow lenders, wiping out debt enforceability.
- **Halts Predatory ACH Sweeps & Blocks Repossession**: Triggers CFPB repeat-debit protections to stop bank overdraft cascades and generates UCC Article 9 anti-repossession injunctions.

---

## 🚀 Quick Start CLI

```bash
# Audit a subprime payday or title loan contract for usurious APR
npx @alpha-park/genpark-hub run zenusury-ai-skill \
  --loan-agreement loan_contract.pdf \
  --tila-disclosure tila_form.pdf \
  --borrower-type civilian \
  --state IL

# Generate void ab initio contract notice and bank ACH stop order
npx @alpha-park/genpark-hub run zenusury-ai-skill \
  --action compile-defense \
  --case-id USURY-2024-8192 \
  --output void_loan_defense_dossier.pdf
```

---

## 🛠️ MCP Tool Definitions

```json
{
  "name": "audit_loan_usury",
  "description": "Calculates the true actuarial APR of subprime loans and checks compliance against state usury rate caps and the Military Lending Act.",
  "parameters": {
    "type": "object",
    "required": ["loanPdfPath", "stateJurisdiction"],
    "properties": {
      "loanPdfPath": { "type": "string" },
      "stateJurisdiction": { "type": "string" },
      "isMilitaryBorrower": { "type": "boolean" }
    }
  }
}
```

---

## 📄 License
MIT © [Alpha-Park](https://github.com/Alpha-Park)
