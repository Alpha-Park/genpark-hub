---
name: zenusury-ai-skill
description: Autonomous Subprime Payday & Auto Title Loan Usury Invalidation, Effective APR Decompiler, Military Lending Act (MLA) 36% MAPR Shield & Predatory Repossession Defense Engine distilled from EarnIn, Dave, Brigit, CFPB Payday Rule, and National Consumer Law Center (NCLC).
version: 1.0.0
license: MIT
---

# zenusury-ai-skill

## Overview
**ZenUsury (ZenShield / 禅息)** is an autonomous consumer credit defense agent. It protects low-income borrowers, gig workers, and military families from predatory short-term subprime financing—including payday cash advances, installment loans, and high-interest auto title loans. By reverse-engineering deceptive fee schedules to calculate the true effective Annual Percentage Rate (APR)—unmasking annualized interest rates between 300% and 650%—and cross-referencing state statutory usury ceilings (such as 36% APR caps) and the federal **Military Lending Act (10 U.S.C. § 987)**, ZenUsury declares predatory loan contracts **void ab initio** (void from inception), wipes out unlawful debt obligations, halts unauthorized bank ACH sweeps, and prevents predatory vehicle repossessions under UCC Article 9.

```mermaid
flowchart TD
    A[Loan Agreement, TILA Disclosure & ACH Statement Ingestion] --> B[Effective APR & Fee Decompiler]
    A --> C[Military Lending Act 36% MAPR Check]
    A --> D[State Civil Usury Cap & Licensing Audit]
    
    B --> E[True Annualized Interest Rate Solver (300%-650%)]
    C --> F[MLA Active Duty Violation Detector]
    D --> G[Statutory Usury & Licensing Breach Identifier]
    
    E --> H{Statutory Violation or Usurious APR?}
    F --> H
    G --> H
    
    H -- Usury / MLA Violation Established --> I[Void Ab Initio Contract Invalidation Notice]
    I --> J[CFPB ACH Repeat Debit Block Order]
    I --> K[UCC Article 9 Illegal Repossession Injunction]
    H -- Lawful Credit Agreement --> L[Affordable Repayment & Principal Restructuring]
```

## Core Capabilities

### 1. Truth in Lending Act (TILA) & Effective APR Decompiler
- Ingests promissory notes, Truth in Lending Act (TILA, 15 U.S.C. § 1601) disclosure statements, and payment transaction schedules.
- Decompiles hidden fees disguised as "verification fees", "origination surcharges", "mandatory monthly account maintenance fees", and "immediate tip options" into standard actuarial APR formulas.
- Unmasks disguised 300%–650% APR interest structures, providing the actuarial calculations required for state and federal regulatory enforcement.

### 2. Military Lending Act (MLA) 36% Strict Shield
- Validates borrower active-duty military or dependent status under the Department of Defense (DoD) Defense Manpower Data Center (DMDC) database.
- Strictly enforces 10 U.S.C. § 987 and 32 CFR Part 232: loans exceeding the **36% Military Annual Percentage Rate (MAPR)** cap—including credit insurance, application fees, and debt cancellation products—are **unlawful, void ab initio, and legally unenforceable from the moment of execution**.
- Triggers statutory remedies: immediate voiding of debt, refund of all fees and interest previously paid, and statutory damages plus attorney fees.

### 3. State Statutory Usury Cap & Rogue Lender Licensing Sentry
- Cross-references loan contracts against statutory usury ceilings across all 50 states (e.g. California AB 539 36% cap, Illinois PLPA 36% rate cap, New York 16%/25% criminal usury laws).
- Verifies state Department of Financial Institutions (DFI) licensing logs to unmask unlicensed online lenders, out-of-state shadow banks, and illegitimate "tribal immunity" shell entities.
- Enforces statutory penalties: in states with strict usury laws, usurious contracts forfeit all rights to collect interest, and in many jurisdictions, require the lender to forfeit 100% of the principal borrowed.

### 4. CFPB Payday Rule ACH Sweep Stopper & UCC Article 9 Repossession Injunction
- Enforces the CFPB Payday Lending Rule (12 CFR Part 1041): strictly blocks lenders from initiating a third ACH withdrawal attempt after two consecutive attempts have failed due to insufficient funds (preventing cascade overdraft fees).
- Generates immediate bank revocation notices under Regulation E (12 CFR § 1005.10) to strip the lender's pre-authorized electronic fund transfer authority.
- For auto title loans, asserts Uniform Commercial Code (UCC) § 9-609 protections against illegal "Breach of Peace" repossessions on legally void loans, dispatching formal cease-and-desist injunctions to title lenders and repo dispatchers.

## Input JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "ZenUsuryDisputePayload",
  "type": "object",
  "required": ["borrowerInfo", "loanDetails", "feeStructure"],
  "properties": {
    "borrowerInfo": {
      "type": "object",
      "required": ["state", "isCoveredBorrowerMLA"],
      "properties": {
        "state": { "type": "string", "maxLength": 2 },
        "isCoveredBorrowerMLA": { "type": "boolean" },
        "militaryBranch": { "type": "string" }
      }
    },
    "loanDetails": {
      "type": "object",
      "required": ["lenderName", "loanType", "principalAmount", "disclosedApr", "loanTermDays"],
      "properties": {
        "lenderName": { "type": "string" },
        "loanType": { "type": "string", "enum": ["PAYDAY_ADVANCE", "AUTO_TITLE", "SUBPRIME_INSTALLMENT", "TRIBAL_ONLINE"] },
        "principalAmount": { "type": "number" },
        "disclosedApr": { "type": "number" },
        "loanTermDays": { "type": "integer" },
        "collateralVehicleVin": { "type": "string" }
      }
    },
    "feeStructure": {
      "type": "object",
      "required": ["financeCharges", "originationFee", "paymentFrequency"],
      "properties": {
        "financeCharges": { "type": "number" },
        "originationFee": { "type": "number" },
        "monthlyMaintenanceFee": { "type": "number" },
        "paymentFrequency": { "type": "string", "enum": ["BI_WEEKLY", "WEEKLY", "MONTHLY", "LUMP_SUM"] },
        "consecutiveFailedAchAttempts": { "type": "integer" }
      }
    }
  }
}
```

## Node.js Implementation Example

```javascript
import { ZenUsuryArbiter } from '@alpha-park/zenusury-ai-skill';

const usuryCase = {
  borrowerInfo: {
    state: 'IL',
    isCoveredBorrowerMLA: false
  },
  loanDetails: {
    lenderName: 'SpeedyCash Midwest Auto Title LLC',
    loanType: 'AUTO_TITLE',
    principalAmount: 2500.00,
    disclosedApr: 35.99,
    loanTermDays: 180,
    collateralVehicleVin: '1HGCR2F83HA029184'
  },
  feeStructure: {
    financeCharges: 3120.00,
    originationFee: 250.00,
    monthlyMaintenanceFee: 75.00,
    paymentFrequency: 'BI_WEEKLY',
    consecutiveFailedAchAttempts: 2
  }
};

const arbiter = new ZenUsuryArbiter({
  stateJurisdiction: 'IL',
  enforceStateRateCap: true
});

const auditResult = await arbiter.auditSubprimeLoanContract(usuryCase);
console.log('True Actuarial APR:', auditResult.effectiveActuarialApr + '%');
console.log('State Statutory Rate Cap (Illinois PLPA):', auditResult.statutoryRateCap + '%');
console.log('Loan Enforceability:', auditResult.isLoanVoidAbInitio ? 'VOID AB INITIO (UNCOLLECTIBLE)' : 'VALID');

const defensePackage = await arbiter.generateVoidLoanNoticeAndRepoInjunction(auditResult);
console.log('Cease-and-Desist Defense Package Compiled. Pages:', defensePackage.pageCount);
```
