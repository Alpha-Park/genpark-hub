---
name: zenflex-ai-skill
description: Autonomous FSA/HSA Use-It-Or-Lose-It Forfeiture Salvage, Retroactive Claiming & IRS § 213(d) Health Spend Arbitrage Agent distilled from FSA Store, Bountiful, and Silvernest paradigms. Ingests annual payroll deduction balances, monitors year-end forfeiture deadlines, retroactively scans past 12-month receipt histories (Amazon, Target, Costco) for unsubmitted eligible items, generates Letters of Medical Necessity (LMN), and executes optimal knapsack procurement of 100% eligible wellness and medical hardware to prevent employee wage confiscation.
version: 1.0.0
author: GenPark (AlphaPark Inc)
license: MIT
metadata:
  openclaw_compatible: true
  genpark_protocol_version: "2026.1"
  domain: healthcare_flexible_spending_arbitrage
  target_regulations:
    - "Internal Revenue Code § 213(d) (Deductible Medical Expenses)"
    - "IRS Publication 502 (Medical and Dental Expenses)"
    - "IRS Notice 2021-15 & Consolidated Appropriations Act (FSA Carryover & Grace Period Rules)"
    - "CARES Act § 3702 (Over-the-Counter & Menstrual Care Product FSA Eligibility Expansion)"
---

# ZenFlex: Autonomous FSA/HSA Forfeiture Salvage & Healthcare Spend Arbitrage Agent

`zenflex-ai-skill` is an open-standard, production-grade autonomous decision agent distilled from **FSA Store (`fsastore.com`)**, **Bountiful (`bountiful.com`)**, and **Silvernest / Bend HSA**. In the United States, over 30 million employees contribute pre-tax dollars into Flexible Spending Accounts (FSAs). Under statutory IRS "Use-it-or-lose-it" regulations, any unused balance remaining on December 31 (or the March 15 extension grace period) is **completely forfeited and confiscated by employers/plan administrators**—amounting to over **$4.2 Billion in hard-earned employee wages stolen annually**.

ZenFlex serves as an algorithmic fiduciary health-wealth guardian: tracking deadline cliffs, mining past shopping receipts for unsubmitted eligible items, generating certified Letters of Medical Necessity (LMN), and executing multi-merchant knapsack shopping to rescue 100% of expiring pre-tax balances before forfeiture.

```mermaid
flowchart TD
    FSABalance[FSA / HSA Plan Portal & Balance Cliff Ingestion] --> CliffTracker{Forfeiture Deadline < 30 Days?}
    
    ReceiptArchive[Past 12-Month Amazon / Target / Pharmacy Receipts] --> MLScanner[IRS § 213(d) Eligibility Classifier & UPC Matcher]
    
    MLScanner --> RetroactiveClaims[Retroactive Cash Reimbursement Dossier Assembly]
    RetroactiveClaims --> AdminSubmission[Direct FSA Administrator Reimbursement Submission]
    
    AdminSubmission --> NetRemainingBalance{Unclaimed Balance Still Remaining?}
    NetRemainingBalance -->|Yes: Surplus Exists| KnapsackEngine[Dynamic Multi-Merchant Knapsack Basket Optimizer]
    
    KnapsackEngine --> HealthHardware[100% Eligible Preventive & Medical Hardware: Wearables / First-Aid / Sunscreen]
    KnapsackEngine --> LMNEngine[Letter of Medical Necessity LMN Telehealth Auto-Draft]
    
    HealthHardware --> ZeroBalanceLock[Pre-Tax Dollars Fully Salvaged & Zero Confiscation Enforced]
    LMNEngine --> ZeroBalanceLock
```

---

## 1. Core Architectural Capabilities

### 1.1 Balance Cliff Tracker & Statutory Grace Period Sentinel
Ingests current balances from plan portals (HealthEquity, WEX, Optum Financial, WageWorks/Inspira Financial). Computes real-time countdowns against:
- **December 31 Plan Year End**
- **March 15 Grace Period Window** (2.5 months extension if adopted by employer)
- **Statutory Carryover Ceiling** ($640–$660 limit under IRS Notice rules; all excess is irrevocably forfeited).

### 1.2 Past 12-Month Multi-Merchant Receipt Mining (Retroactive Reimbursement)
Over 75% of consumers already purchased FSA-eligible products throughout the year using personal credit cards without realizing they were deductible under the expanded CARES Act:
- Connects securely to Amazon, Target, Walmart, Costco, and retail pharmacy digital accounts.
- Ingests order histories and cross-references product UPC barcodes against the **IRS § 213(d) Master Eligibility Database** (e.g., SPF 30+ sunscreens, prescription eyewear, contact solution, acne treatments, heating pads, diagnostic blood pressure monitors, bandages).
- Auto-extracts itemized receipts and compiles claim forms, enabling users to request direct cash bank transfers from their FSA pool without spending a single new dollar.

### 1.3 Letter of Medical Necessity (LMN) Telehealth Generator
Certain high-value wellness products (ergonomic standing desks, sleep apnea monitors, red light therapy devices, orthopedic pillows, air purifiers for asthma) require a formal physician's **Letter of Medical Necessity (LMN)**:
- Pre-populates clinical diagnosis codes (ICD-10) based on verified health records.
- Packages medical justification dossiers ready for one-tap digital signature via licensed telehealth partner APIs, unlocking thousands in pre-tax deductions.

### 1.4 Mathematical Knapsack Basket Optimizer for Surplus Balances
If an expiring surplus cannot be fully exhausted by retroactive claims:
- ZenFlex models the residual balance as a **Bounded Knapsack Optimization Problem**:
  $$\max \sum_{i \in \text{Cart}} \text{Utility}(i) \quad \text{s.t.} \quad \sum_{i \in \text{Cart}} \text{Price}(i) \le \text{ExpiringBalance}$$
- Curates long-shelf-life medical essentials, family first-aid replenishment, emergency trauma kits, and high-utility diagnostic hardware across certified FSA merchants.
- Stages checkout carts for one-click completion before the midnight forfeiture deadline.

---

## 2. JSON Schema Definitions

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "FSABalanceSalvagePlan",
  "type": "object",
  "required": ["planId", "administrator", "currentBalance", "forfeitureDate", "retroactiveSavings", "salvageStrategy"],
  "properties": {
    "planId": { "type": "string", "pattern": "^FSA-[0-9]{8}-[A-Z0-9]{4}$" },
    "administrator": { "type": "string", "enum": ["HEALTHEQUITY", "WEX", "OPTUM", "WAGEWORKS", "METLIFE", "OTHER"] },
    "currentBalance": { "type": "number", "minimum": 0 },
    "forfeitureDate": { "type": "string", "format": "date" },
    "maxAllowableCarryover": { "type": "number" },
    "atRiskForfeitureAmount": { "type": "number" },
    "retroactiveFindings": {
      "type": "object",
      "required": ["totalEligibleFound", "receiptCount"],
      "properties": {
        "totalEligibleFound": { "type": "number" },
        "receiptCount": { "type": "integer" },
        "eligibleItems": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "merchant": { "type": "string" },
              "purchaseDate": { "type": "string", "format": "date" },
              "productName": { "type": "string" },
              "amount": { "type": "number" },
              "irsCategory": { "type": "string" }
            }
          }
        }
      }
    },
    "knapsackBasket": {
      "type": "object",
      "properties": {
        "allocatedSpend": { "type": "number" },
        "recommendedProducts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "sku": { "type": "string" },
              "title": { "type": "string" },
              "price": { "type": "number" },
              "vendor": { "type": "string" }
            }
          }
        }
      }
    }
  }
}
```

---

## 3. Tool Calling & Code Example

```javascript
import { ZenFlexEngine } from 'genpark-hub/zenflex';

// 1. Audit FSA account balance and forfeiture cliff
const fsaSession = await ZenFlexEngine.assessAccountCliff({
  administrator: "HEALTHEQUITY",
  accountType: "HEALTH_FSA",
  reportedBalance: 1250.00,
  planYearEnd: "2026-12-31",
  carryoverAllowed: 640.00
});

console.log(`At-risk forfeiture amount: $${fsaSession.atRiskForfeitureAmount}`);

// 2. Scan past 12-month personal Amazon & Target receipts for retroactive claims
const retroactiveAudit = await fsaSession.scanReceiptArchives({
  sources: ["AMAZON_ORDERS", "TARGET_PURCHASES"],
  lookbackMonths: 11
});

console.log(`Found $${retroactiveAudit.totalEligibleFound} in forgotten eligible purchases!`);
// Auto-generate claim PDF package for direct cash deposit
await fsaSession.generateFSAClaimDossier(retroactiveAudit.eligibleItems);

// 3. Optimize knapsack basket for residual $450 surplus
if (fsaSession.residualSurplus > 0) {
  const basket = await fsaSession.optimizeKnapsackBasket({
    targetBudget: fsaSession.residualSurplus,
    prioritizeCategories: ["DIAGNOSTIC_HARDWARE", "SUN_CARE", "FIRST_AID"]
  });
  console.log(`Staged 100% FSA-eligible basket: ${basket.items.length} items totaling $${basket.total}`);
}
```

---

## 4. MCP Tools & OpenClaw Integration
- `zenflex_audit_cliff`: Evaluates FSA/HSA balances against IRS carryover and forfeiture limits.
- `zenflex_scan_receipts`: Parses purchase order history and matches UPCs against IRS § 213(d) eligibility rules.
- `zenflex_generate_lmn`: Compiles compliant Letter of Medical Necessity drafts for telehealth sign-off.
- `zenflex_knapsack_basket`: Solves optimal item selection for expiring balances.
