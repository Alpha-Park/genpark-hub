# ZenFitClub (禅炼) — Gym & Fitness Club Dark-Pattern Cancellation & Regulation E Shield

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Gateway](https://img.shields.io/badge/Gateway-v2.6.4%20Active-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> *"Commitment to physical wellness should never become a financial prison; arbitrary barriers to cancellation crumble before statutory parity." (强身健体本由心，岂容契约作囹圄；暗度陈仓阻退约，法定解禁还自由。)*  
> Autonomous Gym & Fitness Club Membership Dark-Pattern Cancellation, State Health Studio Services Act Enforcement, FTC Click-to-Cancel Parity, and Regulation E ACH Revocation Engine distilled from **the FTC Click-to-Cancel Rule (16 CFR Part 425), California Health Studio Services Act (CA Civ. Code § 1812.80 et seq.), Florida Health Studio Statute (FL Stat. § 501.017), New York Health Club Services Law (NY Gen. Bus. Law § 624), and CFPB Regulation E (12 CFR § 1005.10(c))**.

---

## 🌟 What is ZenFitClub?

Commercial fitness chains deliberately trap consumers using asymmetric friction: instant 30-second digital enrollment, followed by certified mail or mandatory in-person confrontation cancellation mazes. **ZenFitClub** restores consumer freedom:

1. **State Health Studio Services Act Audit**: Audits fitness contracts against state laws (e.g. CA Civ. Code § 1812.80, FL Stat. § 501.017, NY Gen. Bus. Law § 624). Missing 14-point bold cooling-off notices or terms exceeding statutory financial/duration limits make contracts **void as a matter of law**.
2. **FTC Click-to-Cancel Parity Enforcement**: Implements 16 CFR Part 425 and state digital cancellation laws. If enrolled online, the club is statutorily prohibited from forcing an in-person visit or certified letter.
3. **Relocation (>25 Miles) & Medical Rescission**: Generates statutory rescission notices for members relocating >25 miles from affiliated facilities or experiencing medical injury, compelling pro-rata prepaid dues refunds.
4. **Regulation E ACH Pre-Authorized Payment Shield**: Emits formal 12 CFR § 1005.10(c) notices to banks and fitness clubs revoking recurring direct debit authorization, preventing unauthorized recurring dues or collection threats.

---

## 🚀 Quick Usage Example

```javascript
import { OpenClawGateway } from 'openclaw';

const gateway = new OpenClawGateway();
const fitClub = gateway.getSkill('zenfitclub-ai-skill');

// 1. Audit gym membership contract against California Health Studio Services Act
const contractAudit = await fitClub.auditGymContract({
  stateOfContract: 'CA',
  contractRawText: gymContractAgreementText,
  enrollmentChannel: 'online_website',
  monthlyDuesUsd: 149.00,
  initiationFeeUsd: 250.00,
  contractTermMonths: 36,
  coolingOffDisclosed: false // Missing statutory 14-pt bold notice!
});

console.log(`Contract Statutorily Void: ${contractAudit.isContractStatutorilyVoid}`);
// Output: true (CA Civ. Code § 1812.91 - Contract void for lack of statutory disclosures)

// 2. Draft Relocation Cancellation Notice (>25 Miles)
const relocationNotice = await fitClub.generateRelocationCancellation({
  memberFullName: 'Samantha Vance',
  memberEmail: 'samantha.v@example.com',
  memberId: 'PF-9481920',
  gymFacilityName: 'IronPeak Fitness Club - Downtown',
  facilityAddress: '100 Main St, Los Angeles, CA 90012',
  stateCode: 'CA',
  cancellationGround: 'relocation_over_25_miles',
  newAddress: '450 Mountain Rd, Boulder, CO 80302',
  calculatedDistanceMiles: 1018,
  unusedPrepaidDuesUsd: 298.00
});

// 3. Issue Regulation E Stop-Payment Notice to Bank
const bankLock = await fitClub.generateRegEAchRevocation({
  consumerFullName: 'Samantha Vance',
  bankName: 'Chase Bank',
  bankRoutingNumberMasked: '*****0192',
  accountNumberMasked: '*****8491',
  gymMerchantOriginatorName: 'IRONPEAK FITNESS LLC',
  expectedRecurringAmountUsd: 149.00,
  cancellationDateServed: '2026-11-04'
});
```

---

## 🛡️ Star & Support

Help eliminate dark-pattern subscription traps for millions of consumers.  
⭐ **Star the repo**: [Alpha-Park/genpark-hub](https://github.com/Alpha-Park/genpark-hub)
