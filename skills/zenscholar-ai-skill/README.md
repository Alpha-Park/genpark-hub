# ZenScholar (禅学) — College Tuition Negotiation, FAFSA Professional Judgment (HEA § 479A) & Merit Aid Arbitrage Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Gateway](https://img.shields.io/badge/Gateway-v2.6.4%20Active-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> *"Wisdom must not be mortgaged to usury; true learning begins when artificial barriers dissolve." (明德致知，解缚脱羁。)*  
> Autonomous College Tuition Negotiation, FAFSA Professional Judgment (HEA § 479A) Special Circumstances Appeals, and Peer Cross-Admit Merit Scholarship Arbitrage Engine distilled from **TuitionFit, MeritMore, and institutional financial aid discount matrices**.

---

## 🌟 What is ZenScholar?

**ZenScholar** dismantles the opaque high-tuition, high-discount university pricing model. It equips students and parents with the exact financial aid auditing and statutory appeal tools used by top educational consultants:

1. **Award Letter De-obfuscation**: Dissects college financial aid packages to isolate genuine "gift aid" (grants, scholarships) from interest-bearing debt (Parent PLUS loans, unsubsidized direct loans) and calculates the true four-year net out-of-pocket degree cost.
2. **FAFSA Professional Judgment (HEA § 479A) Appeals**: For families experiencing sudden life changes (job loss, business downturn, catastrophic medical expenses, sibling college costs), ZenScholar compiles formal audit-proof special circumstances appeals, invoking federal statutory authority to recalculate the Student Aid Index (SAI).
3. **Peer Cross-Admit Merit Aid Arbitrage**: Exploits university enrollment yield models by leveraging verified competing scholarship offers from peer institutions to request institutional grant increases ($5,000–$25,000/year) before the May 1 decision deadline.
4. **Scholarship Cliff & Retention Risk Sentry**: Scans merit scholarship award conditions for perilous retention cliffs (e.g. 3.5 GPA maintenance requirements) and restrictive outside-scholarship stacking policies.

---

## 🚀 Quick Usage Example

```javascript
import { OpenClawGateway } from 'openclaw';

const gateway = new OpenClawGateway();
const scholar = gateway.getSkill('zenscholar-ai-skill');

// 1. Decode deceptive award letter and separate debt from true grants
const audit = await scholar.decodeAwardLetter({
  institutionName: 'Northeastern University',
  academicYear: '2026-2027',
  totalPublishedCoaUsd: 86500,
  directCostsTuitionFeesUsd: 65200,
  directCostsRoomBoardUsd: 21300,
  awardItems: [
    { itemName: 'Dean Scholarship', category: 'merit_scholarship', amountPerYearUsd: 22000, isRenewable: true, renewalGpaRequirement: 3.0 },
    { itemName: 'Federal Direct Unsubsidized Loan', category: 'unsubsidized_loan', amountPerYearUsd: 5500, isRenewable: true },
    { itemName: 'Parent PLUS Loan Recommendation', category: 'parent_plus_loan', amountPerYearUsd: 38000, isRenewable: false }
  ]
});

console.log(`True 1-Year Net Cost: $${audit.netOutofPocketOneYearUsd}`);
console.log(`True 4-Year Debt Obligation: $${audit.projectedFourYearDebtUsd}`);

// 2. Draft an appeal letter leveraging a competing peer offer
const meritAppeal = await scholar.draftPeerMeritAppeal({
  targetInstitution: {
    name: 'Northeastern University',
    offeredGiftAidUsd: 22000,
    netOutofPocketUsd: 64500
  },
  competingOffers: [
    {
      institutionName: 'Boston University',
      carnegieClassification: 'R1 Doctoral',
      offeredGiftAidUsd: 35000,
      netOutofPocketUsd: 51500,
      awardLetterVerified: true
    }
  ],
  studentGpa: 3.92,
  academicDepartmentInterest: 'Computer Science & Cognitive AI'
});

console.log(`Appeal Letter Generated:\n${meritAppeal.appealLetterBody}`);
```

---

## ⭐ Support & Community

If ZenScholar helps you negotiate fair college tuition or reduce student debt, please **[star our GitHub repository](https://github.com/Alpha-Park/genpark-hub)** to empower more students with transparent higher-education financial tools!
