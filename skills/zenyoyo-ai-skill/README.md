# ZenYoYo (禅旋) — Auto Dealership "Yo-Yo Financing" & Spot Delivery Scam Defense Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Gateway](https://img.shields.io/badge/Gateway-v2.6.4%20Active-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> *"A covenant sealed in writing cannot be unwound at arbitrary whim; no dealer may hold equity hostage." (立券成契，岂容反覆；挟车要价，法不容私。)*  
> Autonomous Automotive Dealership "Yo-Yo Financing" & Spot Delivery Scam Defense, FTC CARS Rule Enforcement, TILA 15 U.S.C. § 1601 Truth in Lending Disclosure Lock, and Trade-In Hostage Recovery Engine distilled from **the FTC CARS Rule (16 CFR Part 463), Truth in Lending Act (Regulation Z 12 CFR Part 1026), and NCLC Automobile Fraud standards**.

---

## 🌟 What is ZenYoYo?

"Yo-Yo Financing" (or the Spot Delivery Scam) traps car buyers by letting them drive away in a newly purchased car, only for the dealer to call days later claiming "financing fell through" and demanding a higher APR or down payment while holding the trade-in hostage. **ZenYoYo** dismantles dealership coercion:

1. **Statutory Rescission Window Audit**: Scans purchase contracts against state law (e.g. California 10-day rule, Washington 4-day rule). If the dealer missed the statutory deadline, the financing is legally final.
2. **TILA Creditor Binding Sentry**: If the dealer is listed as the Creditor/Seller on the Retail Installment Sales Contract (RISC), federal law holds the dealer bound to the agreed terms—they cannot cancel merely because third-party lenders rejected assignment.
3. **Statutory Unwind & Trade-In Hostage Recovery**: Formulates formal legal notices demanding 100% immediate down payment refund and return of the trade-in vehicle without mileage or cleaning deductions, asserting civil theft conversion claims if the trade-in was sold.
4. **FTC CARS Rule Enforcement Dossier**: Compiles regulatory complaints to state DMV dealer licensing boards, State Attorneys General, and the FTC for unlawful deceptive spot delivery practices under 16 CFR Part 463.

---

## 🚀 Quick Usage Example

```javascript
import { OpenClawGateway } from 'openclaw';

const gateway = new OpenClawGateway();
const yoyo = gateway.getSkill('zenyoyo-ai-skill');

// 1. Audit dealer yo-yo demand against purchase contract and timing
const audit = await yoyo.auditYoYoFinancing({
  buyerFullName: 'Carlos Rodriguez',
  dealershipName: 'Premier Auto Gallery',
  stateOfTransaction: 'CA',
  riscAgreementRawText: riscContractText,
  conditionalDeliveryRiderRawText: bailmentRiderText,
  dealerCommunicationHistory: [
    '2026-10-10: Vehicle delivered with signed RISC at 5.9% APR',
    '2026-10-25: Dealer called stating financing rejected, demanding 14.9% APR or surrender'
  ],
  tradeInDetails: {
    makeModelYear: '2019 Honda Civic EX',
    tradeInAllowanceUsd: 12500,
    dealerStatus: 'refusing_return'
  },
  downPaymentAmountUsd: 3500.00
});

console.log(`Dealer Notice Timely: ${audit.isNoticeUntimely ? 'NO - 10-day statutory window EXPIRED!' : 'YES'}`);
console.log(`Dealer Bound to Paper: ${audit.dealerListedAsPrimaryCreditor}`);

// 2. Draft an immediate 100% Unwind and Civil Theft Notice
const unwindDemand = await yoyo.generateUnwindDemand({
  buyerName: 'Carlos Rodriguez',
  dealershipName: 'Premier Auto Gallery',
  dealerGeneralManagerEmail: 'gm@premierautogallery.example.com',
  stateCode: 'CA',
  originalPurchaseDate: '2026-10-10',
  tradeInMakeModel: '2019 Honda Civic EX',
  downPaymentRefundAmountUsd: 3500.00,
  unwindReason: 'statutory_deadline_expired'
});

console.log(`Unwind Demand Generated: ${unwindDemand.statutoryDemandReady}`);
```

---

## ⭐ Support & Community

If ZenYoYo helps you defeat dealership yo-yo scams or recover your trade-in vehicle, please **[star our GitHub repository](https://github.com/Alpha-Park/genpark-hub)** to support independent open-source auto fraud defense tools!
