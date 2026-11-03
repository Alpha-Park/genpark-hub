# ZenStinct (禅觉) — Multi-Party Group Chat Air-Gapped Mesh & On-the-Fly Dynamic Tool Synthesizer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Gateway](https://img.shields.io/badge/Gateway-v2.6.4%20Active-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

> *"Direct intuition requires no contrivance; the true master acts before the thought arises." (灵犀直觉，无相无碍，动于未萌。)*  
> Multi-Party Group Chat Air-Gapped Sandbox Mesh, On-the-Fly Dynamic Micro-Tool Synthesizer, Proactive Temporal Horizon Sentinel, and Zero-UI Reflex Architecture distilled from **Instinct (Spear Street Technology / Noah Shinn 2026)**.

---

## 🌟 What is ZenStinct?

**ZenStinct** embodies the "Zero-New-UI" philosophy popularized by **Instinct (Spear Street Technology)**. It frees personal agents from conversational isolation, allowing them to:
1. **Coordinate Group Chats with Zero Privacy Leaks**: Joins iMessage, WhatsApp, and Telegram group threads to plan group dinners, trips, and bill splitting while maintaining an air-gapped cryptographic boundary that shields the host's private financial vault and calendar history from group participants.
2. **Synthesize Micro-Tools on the Fly**: Dynamically generates, tests in a temporary sandbox, and executes disposable headless browser automation scripts for long-tail zero-API websites, self-healing broken selectors via Reflexion.
3. **Act Proactively Across Time Horizons**: Automatically alerts and checks in for flights at T-24h, triggers prescription refills at T-5d, and catches trial subscription expirations.
4. **Enforce Controlled Blast-Radius Spending**: Caps task budgets to the exact cent, using single-use virtual card tokens.

---

## 🚀 Quick Usage Example

```javascript
import { OpenClawGateway } from 'openclaw';

const gateway = new OpenClawGateway();
const instinct = gateway.getSkill('zenstinct-ai-skill');

// 1. Coordinate group dining in iMessage thread
const result = await instinct.coordinateGroupThread({
  platform: 'imessage',
  threadId: 'group_dinner_tokyo_2026',
  hostUserId: 'user_norman',
  taskCategory: 'group_dining',
  memberPreferences: [
    { memberId: 'alice', dietaryRestrictions: ['vegan'], budgetConstraintUsd: 60 },
    { memberId: 'bob', dietaryRestrictions: [], budgetConstraintUsd: 80 }
  ]
});
console.log(`Group consensus reached: ${result.consensusResult.selectedOptionTitle}`);

// 2. Synthesize on-the-fly automation for a local zero-API website
const booking = await instinct.synthesizeMicroTool({
  targetUrl: 'https://local-artisan-bakery.example.com/order',
  desiredAction: 'fill_form',
  parameterPayload: { item: 'sourdough_loaf', quantity: 2, pickupTime: '09:00' },
  budgetLimitUsd: 15.00
});
console.log(`Order staged successfully: ${booking.executionStatus}`);
```

---

## ⭐ Support & Star the Project

If you find ZenStinct and our modular skills helpful in advancing autonomous personal AI agents, please star our repository:
👉 **[https://github.com/Alpha-Park/genpark-hub](https://github.com/Alpha-Park/genpark-hub)**
