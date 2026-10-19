---
name: zenklar-ai-skill
description: Personal Consumer Financial Orchestrator, Paycheck-Synchronized Installment Planner & Invoice Dispute Shield for GenPark & OpenClaw. Distilled from Klarna's AI Assistant architecture (OpenAI enterprise flagship) to safeguard personal liquidity, align BNPL payment schedules with income calendars, freeze disputed invoices instantly, and enforce anti-impulse spending guardrails.
version: 1.0.0
license: MIT
---

# zenklar-ai-skill

## Overview
`zenklar-ai-skill` (ZenKlar / 禅澄) is the personal consumer financial orchestrator and liquidity guardrail agent for GenPark & OpenClaw. Distilled from **Klarna's enterprise AI Assistant architecture**—the world's largest production deployment of conversational financial and shopping AI, managing hundreds of millions of interactions across 85 million active global consumers—ZenKlar bridges autonomous shopping decisions with **rigorous personal cash-flow discipline**.

When personal AI agents are given autonomous purchasing authority, users face severe financial vulnerabilities: runaway discretionary spending, hidden financing fees, missed installment due dates triggering penalty interest, and the agonizing friction of paying credit card balances on disputed or returned orders. 

Operating local-first within OpenClaw's encrypted hardware enclave, ZenKlar acts as the consumer's private Chief Financial Officer:
- **Paycheck-Synchronized Liquidity Planner**: Analyzes purchase commitments against the user's authentic income schedule, determining whether to pay in full or route through 0%-APR installments so monthly cash reserves never dip below safety thresholds.
- **Dispute Invoice Freeze Engine ("Pause Payment")**: When an order arrives damaged, counterfeit, or delayed, ZenKlar dispatches cryptographic freeze requests to payment gateways and merchant APIs, putting installment obligations on ice so the user never pays for unresolved disputes.
- **Cross-Border FX & VAT Tax-Free Arbitrageur**: Evaluates multi-currency clearing rates, card issuer foreign transaction markups, and dynamic VAT refund documentation to capture the lowest landed price internationally.
- **Anti-Impulse Spending Sentinel**: Enforces user-configured cooling-off periods and hard monthly category limits, demanding deliberate biometrics before executing high-ticket emotional checkouts.

---

## Core Capabilities

### 1. Paycheck-Aligned Installment Router (`LiquidityScheduleRouter`)
- Simulates cash-flow trajectories over 30-, 60-, and 90-day horizons.
- Evaluates whether to settle via lump-sum debit, credit rewards points, or 4-stage interest-free installments.
- Aligns bi-weekly and monthly installment debits with validated salary deposit dates, eliminating bank overdraft penalties.

### 2. Instant Dispute Invoice Freeze Engine (`DisputeFreezeEngine`)
- Bridges with payment gateway APIs (Stripe, Klarna, PayPal, Visa network):
  - Emits binding hold requests (`hold_intent`) the instant an item return or shipping dispute is initiated via `zensierra-ai-skill`.
  - Freezes automatic card deductions without impacting user credit standing or incurring late fees during merchant investigations.

### 3. FX Dynamic Currency & Tax-Free Arbitrage (`CrossBorderFXArbitrageur`)
- Compares merchant Dynamic Currency Conversion (DCC) rates against interbank spot rates.
- Flags and rejects merchant DCC markups (typically 3%–7% predatory fees), enforcing billing in native foreign currency with zero-markup card rails.
- Pre-compiles global digital VAT / GST export reclaim receipts for international travelers and cross-border shoppers.

### 4. Financial Wellness & Anti-Impulse Sentinel (`FinancialWellnessSentinel`)
- Tracks 30-day trailing discretionary spending against monthly net disposable income.
- Injects a mandatory 12-hour or 24-hour "cooling-off pause" when an agent-staged purchase exceeds 15% of monthly disposable budget.
- Distinguishes essential replacement procurement from dopamine-driven impulsive luxury purchases.

---

## Standard Consumer Financial Orchestration Schema

```json
{
  "financial_protocol": "zenklar-liquidity/v1.0",
  "plan_id": "fin_klar_77412e",
  "purchase_context": {
    "merchant": "Arcteryx DTC Flagship",
    "item_title": "Beta AR Gore-Tex Pro Jacket",
    "gross_amount_usd": 600.00,
    "currency": "USD"
  },
  "liquidity_assessment": {
    "current_monthly_discretionary_allowance_usd": 1200.00,
    "committed_prior_spending_usd": 750.00,
    "uncommitted_surplus_usd": 450.00,
    "affordability_verdict": "exceeds_instant_surplus"
  },
  "recommended_settlement_strategy": {
    "strategy": "split_4_paycheck_aligned",
    "apr_percentage": 0.0,
    "total_interest_fees_usd": 0.00,
    "installment_schedule": [
      {
        "installment_index": 1,
        "amount_usd": 150.00,
        "due_date": "2026-10-20",
        "funding_source": "primary_debit_vault"
      },
      {
        "installment_index": 2,
        "amount_usd": 150.00,
        "due_date": "2026-11-03",
        "paycheck_deposit_reference": "paycheck_nov_early",
        "funding_source": "primary_debit_vault"
      },
      {
        "installment_index": 3,
        "amount_usd": 150.00,
        "due_date": "2026-11-17",
        "paycheck_deposit_reference": "paycheck_nov_mid",
        "funding_source": "primary_debit_vault"
      },
      {
        "installment_index": 4,
        "amount_usd": 150.00,
        "due_date": "2026-12-01",
        "paycheck_deposit_reference": "paycheck_dec_early",
        "funding_source": "primary_debit_vault"
      }
    ]
  },
  "protection_guards": {
    "cooling_off_applied": false,
    "dispute_freeze_policy": "automatic_on_sierra_return_initiation",
    "fx_optimization": "native_usd_clearing"
  }
}
```

---

## Operational Guidelines

1. **Zero-Interest Rigor**: Never recommend or route transactions through high-APR revolving debt or penalty-prone financing schemes; prioritize 0%-APR or lump-sum liquidity.
2. **Local Financial Privacy**: Keep bank balances, paycheck cycles, and credit thresholds encrypted inside the local device enclave; never transmit cash-flow logs to external cloud AI providers.
3. **Proactive Freeze on Disputes**: The moment an order return, transit damage, or cancellation is detected, immediately signal the payment layer to pause scheduled debits.
4. **Transparent Landed Currency**: Always reject merchant DCC dynamic currency traps to protect buyers from inflated conversion margins.
