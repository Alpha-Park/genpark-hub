# 💍 zenvow-ai-skill

[![CI](https://github.com/Alpha-Park/genpark-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/Alpha-Park/genpark-hub/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Skills Registry](https://img.shields.io/badge/Skills%20Registry-Modular%20Pack-violet.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> **Autonomous Wedding & Luxury Event Contract Audit, Non-Refundable Retainer Salvage, Liquidated Damages Penalty Stripper & Re-Booking Mitigation Sentry** distilled from Zola, Wedgewood Weddings, The Knot, DoNotPay Event Defense, and Restatement (Second) of Contracts § 356.

---

## 🌟 Support GenPark & Star on GitHub!
If you believe couples and families shouldn't lose $10,000–$30,000 in unearned wedding deposits to predatory venue forfeiture clauses:

👉 **[Star Alpha-Park/genpark-hub on GitHub](https://github.com/Alpha-Park/genpark-hub)** ⭐

---

## 🎯 What ZenVow Does
- **Deconstructs Event Rental & Vendor Contracts**: Audits boilerplate "100% non-refundable deposit" forfeiture clauses under Restatement § 356 and UCC § 2-718 to invalidate punitive liquidated damages.
- **Audits Venue Affirmative Mitigation & Re-Booking**: Crawls public reservation portals and wedding registry platforms to prove the venue re-rented the date, exposing double-dipping and forcing restitution.
- **Triggers Force Majeure & Frustration of Purpose**: Compiles statutory excuses of performance for extreme meteorological events, civil declarations, and health emergencies.
- **Assembles Pre-Litigation Demands & Small Claims Briefs**: Generates formal certified legal demand packages that force venue management into refund settlements without costly attorney retainers.

---

## 🚀 Quick Start CLI

```bash
# Audit a wedding venue agreement and cancellation timeline
npx @alpha-park/genpark-hub run zenvow-ai-skill \
  --contract venue_contract.pdf \
  --cancellation-date 2024-11-15 \
  --event-date 2025-06-21 \
  --deposit 14250 \
  --state CA

# Verify venue re-booking on public calendar and compile restitution demand
npx @alpha-park/genpark-hub run zenvow-ai-skill \
  --action compile-demand \
  --case-id VOW-2024-4901 \
  --rebooking-url "https://thegrandmeadow.com/calendar?date=2025-06-21" \
  --output deposit_restitution_dossier.pdf
```

---

## 🛠️ MCP Tool Definitions

```json
{
  "name": "audit_event_penalty_clause",
  "description": "Audits wedding and event venue agreements to identify unenforceable liquidated damages penalties and verify statutory mitigation obligations.",
  "parameters": {
    "type": "object",
    "required": ["contractPdfPath", "depositAmount", "daysNoticeGiven"],
    "properties": {
      "contractPdfPath": { "type": "string" },
      "depositAmount": { "type": "number" },
      "daysNoticeGiven": { "type": "integer" }
    }
  }
}
```

---

## 📄 License
MIT © [Alpha-Park](https://github.com/Alpha-Park)
