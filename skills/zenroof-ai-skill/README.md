# ZenRoof (禅瓴) — Homeowners Property Insurance Claim Lowball Audit, Xactimate Re-Engineering & Appraisal Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Gateway](https://img.shields.io/badge/Gateway-v2.6.4%20Active-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> *"A roof is not repaired with mismatched patches; true shelter demands seamless restoration." (瓴瓦齐整，方御风雨；权衡损益，不纳偏私。)*  
> Autonomous Homeowners Property Insurance Claim Lowball Audit, Xactimate Forensic Re-Engineering, Three-Trades Overhead & Profit (O&P 10/10) Enforcement, State Matching Statute Assertion, and Policy Appraisal Clause Invocation Engine distilled from **United Policyholders (UPHelp), ClaimSupplementPro, Florida Matching Statute (FL Stat. § 626.9744), and IICRC S500 restoration standards**.

---

## 🌟 What is ZenRoof?

When storm, water, or fire damage strikes a home, insurance adjusters use Xactimate software to generate depressed estimates, shortchanging homeowners by **\$10,000 to \$60,000**. **ZenRoof** levels the playing field:

1. **Xactimate Scope & Line-Item Audit**: Analyzes insurer repair estimates against independent contractor scopes, restoring hundreds of omitted operations (masking, floor protection, contents manipulation, and code compliance upgrades).
2. **Mandatory 10/10 Overhead & Profit (O&P) Enforcement**: Restores the 20% General Contractor markup (10% overhead, 10% profit) using the established "Three-Trades Rule" across multi-trade repair projects.
3. **State Matching Statute & Regulation Assertion**: When shingles, siding, or continuous flooring are discontinued, invokes state statutory matching laws (e.g. FL Stat. § 626.9744) to force full roof slope or open-concept room replacement instead of mismatched patchwork.
4. **Homeowners Policy Appraisal Clause Invoker**: If adjusters stall or refuse supplements, triggers the policy's statutory Appraisal Clause, appointing an independent appraiser and umpire to force an impartial, binding payout.

---

## 🚀 Quick Usage Example

```javascript
import { OpenClawGateway } from 'openclaw';

const gateway = new OpenClawGateway();
const roof = gateway.getSkill('zenroof-ai-skill');

// 1. Audit an unfair insurer Xactimate estimate
const audit = await roof.auditXactimateEstimate({
  claimNumber: 'CLM-FL-2026-44109',
  carrierName: 'Citizens Property Insurance',
  insurerEstimateRawText: xactimatePdfText,
  contractorEstimateRawText: contractorScopeText,
  distinctTradesIdentified: ['roofing', 'drywall', 'painting', 'flooring'],
  discontinuedMaterials: [
    { itemType: 'roofing_shingle', brandModel: 'CertainTeed Horizon (Discontinued)', itelReportAvailable: true }
  ]
});

console.log(`Missing Scope Deficit: $${audit.discrepancyDeltaUsd}`);
console.log(`Mandatory O&P Restored: $${audit.overheadAndProfitUsd}`);
console.log(`Matching Statute Applied: Full slope replacement required under FL Stat. § 626.9744`);

// 2. Draft an Appraisal Clause demand if carrier refuses supplement
if (audit.discrepancyDeltaUsd > 10000) {
  const appraisalNotice = await roof.invokePropertyAppraisal({
    insuredName: 'David Miller',
    propertyAddress: '1240 Palm Avenue, Tampa, FL 33602',
    carrierName: 'Citizens Property Insurance',
    claimNumber: 'CLM-FL-2026-44109',
    disputedDeltaUsd: audit.discrepancyDeltaUsd,
    independentAppraiserName: 'Apex Independent Property Appraisals LLC',
    independentAppraiserContact: 'claims@apexappraisals.example.com',
    statutoryJurisdictionState: 'FL'
  });
  console.log(`Appraisal Demand Package Ready: ${appraisalNotice.formalDemandLetterReady}`);
}
```

---

## ⭐ Support & Community

If ZenRoof helps you rebuild your home or recover rightful insurance settlement funds, please **[star our GitHub repository](https://github.com/Alpha-Park/genpark-hub)** to support independent consumer property claim defense tools!
