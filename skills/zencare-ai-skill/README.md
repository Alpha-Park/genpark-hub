# ZenCare (禅护) — Autonomous Long-Term Care (LTC) & Disability (LTD) Claim Denial Appeal Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Gateway](https://img.shields.io/badge/Gateway-v2.6.4%20Active-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> *"Care in vulnerability is a sacred trust; no algorithmic checklist may sever lifetime promises." (老安少怀，信诺无移；持正卫道，护持余年。)*  
> Autonomous Long-Term Care (LTC) & Long-Term Disability (LTD) Insurance Claim Denial Defense, Activities of Daily Living (ADL) Clinical Evidence Certification, 24-Month "Own Occ to Any Occ" Transition Shield, and ERISA Administrative Appeal Dossier Compiler distilled from **ERISA (29 U.S.C. § 1133 / 29 C.F.R. § 2560.503-1), NAIC Long-Term Care Model Act, and Genworth/Unum/MetLife claim defense frameworks**.

---

## 🌟 What is ZenCare?

When chronic illness, severe injury, or dementia strikes, insurance carriers frequently reject Long-Term Care (LTC) and Long-Term Disability (LTD) claims, withholding **\$50,000 to \$250,000+** in essential benefits. **ZenCare** builds audit-proof clinical and legal appeals:

1. **LTC "2-of-6 ADL" Clinical Certification**: Analyzes nursing logs and daily caregiver notes, proving hands-on or standby assistance needs for bathing, dressing, toileting, transferring, continence, or eating, as well as severe cognitive impairment (Alzheimer's/dementia).
2. **Elimination Period Verification**: Audits qualifying service days and caregiver invoices, preventing carriers from artificially delaying monthly benefit disbursements.
3. **LTD 24-Month "Own Occ to Any Occ" Defense**: Disproves biased insurance doctor "paper reviews" that claim a disabled professional can work "sedentary" alternate jobs, cross-examining DOT job codes against treating physician functional capacity limits.
4. **ERISA 180-Day Administrative Appeal Dossier**: Compiles an exhaustive, court-ready administrative evidentiary record under 29 U.S.C. § 1133 before the strict federal cutoff, ensuring all critical medical evidence is locked into the legal record.

---

## 🚀 Quick Usage Example

```javascript
import { OpenClawGateway } from 'openclaw';

const gateway = new OpenClawGateway();
const care = gateway.getSkill('zencare-ai-skill');

// 1. Audit clinical records for Long-Term Care 2-of-6 ADL eligibility
const ltcAudit = await care.auditLtcClaim({
  claimantName: 'Eleanor Vance',
  carrierName: 'Genworth Life Insurance',
  policyFormType: 'tax_qualified_7702B',
  eliminationPeriodDays: 90,
  eliminationType: 'calendar_days',
  dailyNursingNotesRawText: nursingNotesText,
  physicianStatementsRawText: attendingPhysicianStatementText,
  caregiverInvoices: caregiverInvoicesList
});

console.log(`Eligible ADL Deficits Verified: ${ltcAudit.qualifiedAdlsCount} (Meets >= 2 statutory requirement)`);
console.log(`Cognitive Impairment Standard Satisfied: ${ltcAudit.cognitiveImpairmentMet}`);
console.log(`Elimination Period Satisfied: ${ltcAudit.eliminationPeriodCompleted}`);

// 2. Compile an airtight 180-day ERISA administrative appeal dossier
const erisaAppeal = await care.compileErisaLtdAppeal({
  claimantName: 'Marcus Chen',
  employerPlanName: 'TechCorp Group Long-Term Disability Plan',
  disabilityCarrierName: 'Unum Group',
  denialNoticeDate: '2026-10-15',
  denialRationale: 'own_occ_transition_any_occ',
  preDisabilityOccupation: 'Senior Systems Architect',
  treatingPhysicianStatementRawText: treatingDoctorRfcText,
  vocationalEvaluationSummary: vocationalReportText,
  monthlyBenefitAmountUsd: 8500.00
});

console.log(`ERISA Appeal Dossier Generated: ${erisaAppeal.administrativeRecordReady}`);
console.log(`Statutory Appeal Deadline: ${erisaAppeal.erisa180DayDeadline}`);
```

---

## ⭐ Support & Community

If ZenCare helps you or your family restore rightful long-term care or disability benefits, please **[star our GitHub repository](https://github.com/Alpha-Park/genpark-hub)** to support independent open-source patient advocacy tools!
