<div align="center">

# zenloan-ai-skill 🎓

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**Autonomous Student Loan Repayment, Public Service Loan Forgiveness (PSLF) & Servicer Dispute Agent.**  
*Distilled from Summer, Savi & Chipper paradigms.*

</div>

---

## 🌟 Highlights & Core Features

- **Income-Driven Repayment (IDR) Optimization**: Mathematical simulation of SAVE, PAYE, and IBR plans paired with Married-Filing-Separately (MFS) tax arbitrage to minimize monthly payments down to \$0.
- **PSLF 120-Month Ledger Audit**: Cross-checks 10 years of servicer transactions to catch uncredited qualifying payments and clerical misallocations.
- **Automated Digital ECF Workflow**: Auto-populates and dispatches electronic Employment Certification Forms to qualifying 501(c)(3) and government employers.
- **CFPB & FSA Ombudsman Dispute Sentry**: Generates legally binding administrative complaints against servicer misconduct (MOHELA, Nelnet, Aidvantage) under 12 U.S.C. § 5531.

---

## 🚀 Quick Start & CLI Usage

```bash
# Ingest StudentAid NSLDS file and simulate optimal IDR plan
npx genpark run zenloan --nslds "data/nslds.txt" --agi 68000 --household 3

# Audit PSLF qualifying payment ledger against MOHELA records
npx genpark run zenloan --case-id "LOAN-20261029-B2C3" --audit-pslf --servicer "MOHELA"
```

## 🛠 MCP Tools Exposed

- `zenloan_parse_nslds`: Extracts standardized loan portfolios from federal data exports.
- `zenloan_simulate_idr`: Simulates federal income-driven repayment equations.
- `zenloan_audit_pslf_ledger`: Reconciles servicer payment histories with PSLF requirements.
- `zenloan_generate_cfpb_petition`: Auto-compiles formal CFPB and FSA Ombudsman dispute dossiers.

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
