# GenPark & OpenClaw 🦞

> **The Private Personal AI Assistant Ecosystem That Actually Does Things.**  
> Native multi-messenger integration (WhatsApp, Telegram, Slack, iMessage), resident browser computer-use, and modular skills platform.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Gateway](https://img.shields.io/badge/Gateway-v2.6.4%20Active-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![Skills Registry](https://img.shields.io/badge/Skills%20Registry-16%20Modular%20Packs-violet.svg)](#skills-registry-catalog)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=social)](https://github.com/Alpha-Park/genpark-hub)

---

## 🌟 What is GenPark?

GenPark is an open-source, local-first personal AI assistant framework powered by the **OpenClaw** gateway daemon. While conventional chatbots are trapped in web windows answering questions, GenPark agents execute complex, multi-step tasks across your physical and digital world:

- 🔒 **Local-First & Private**: Your credentials, cookies, and chat history remain on your machine inside the OS Secure Enclave / Local Vault. No cloud vendor data harvesting.
- 💬 **Zero-New-Interface**: Coordinate everything natively through the apps you already live in—**WhatsApp, Telegram, Slack, and iMessage**.
- 🌐 **Resident Browser Execution**: Solves the bot-blocking and IP-banning issues that plague commercial cloud agents by leveraging your resident browser profile and residential IP.
- 🤝 **Agent-to-Agent (A2A) Mesh**: Peer agents coordinate shared shopping, group discounts, and split billing via encrypted zero-knowledge handshakes.
- 🛡️ **Active Detective Shield**: Runtime pre-execution interception that prevents model hallucinations and stops PII address leaks before network dispatch.
- ⚡ **Personal Agent Protocol (PAP) Bridge**: Standardized OAuth merchant interactions with fallback to resident browser automation for closed platforms.
- 🎯 **0% Ad Curation & In-Chat Checkout**: Anti-sponsorship neutral recommendations and instant headless purchasing.
- 💡 **M2AI Merchant Infrastructure**: Transforms online stores into agent-ready platforms via Agentic Pages, GEO/AEO optimization, and agent GMV attribution.
- 🎨 **Scene-Aware Aesthetic Styling (Look-to-SKU)**: Bridges real-life occasions and vibes with virtual styling and instant SKU procurement.
- 🌐 **Multi-Rail Agent Distribution**: Serves context cards across ACP/UCP/MCP rails while keeping checkout sovereign on the brand's store.
- 🔄 **Closed-Loop Dynamic Funnel Optimization**: Replaces fragmented SaaS stacks with intent-driven dynamic landing generation.
- 👁️ **Sensory Micro-Telemetry & In-Scroll Cards**: Reads trackpad/touchscreen linger dynamics on PDPs to sequence narrative cards and in-scroll search.
- 🧩 **Extensible Skills Architecture**: Plug-and-play modular skills defined in standard `SKILL.md` format.

---

## 🔬 Featured Research: Autonomous Decision Agent Architecture & Distillation

We conducted an exhaustive architectural deconstruction analyzing the state-of-the-art 2026 personal agent paradigms:
- **Cloud-Sentinel VM Paradigm**: Cloud-isolated sandboxes with permission brokers and tokenized checkout.
- **Reflex-Concierge Paradigm**: Verbal reinforcement learning (Reflexion) loops with zero-new-interface multi-channel messaging and concierge calling.
- **Trusted Agent Mesh & Active Detective (Late-Sept 2026 Updates)**: Direct Agent-to-Agent (A2A) coordination and runtime hallucination/PII guardrails.
- **Personal Agent Protocol & Dedicated Procurement (October 2026 Advances)**: Open PAP handshake standard (`/.well-known/poppy.json`), anti-ad procurement (Marc Lore / Wizard model), and buyer vs. seller AI dynamics.
- **M2AI & Merchant-Side Infrastructure (DeepLumen Distillation)**: Transitioning web stores from human visual rendering to machine-readable Agentic Pages, GEO/AEO citations, and agentic attribution.
- **Aesthetics & Scene-Aware Inspiration-to-Shopping (ViBA Distillation)**: Transitioning from rigid spec comparison to vibe-driven styling, Angel/Devil dual persona, and Look-to-SKU seamless commerce.
- **Multi-Rail Agent Distribution & Sovereign Checkout (Nile Distillation)**: Context cards as the new shelf, broadcasting across ACP/UCP/MCP/Skills, and sovereign checkout routing.
- **AI-Native Conversion & Closed-Loop Funnels (FERMÀT Distillation)**: Replacing fragmented e-commerce SaaS stacks with intent-driven dynamic landing generation and revenue recovery.
- **Sensory Micro-Telemetry & PDP Seller Agent (Product Genius Distillation)**: "Sensitive skin of a robot" touch/scroll parsing, dynamic in-scroll story cards, in-scroll search, and ad-platform intent feedback.

📖 **Read the full architectural research report**:  
👉 [**自主个人决策与代购 Agent 架构解构与能力蒸馏**](docs/research/autonomous-decision-agent-architectural-deconstruction.md)

### Key Architectural Distillations in GenPark:
1. **Local-First Security Enclave**: Replaced cloud VM credential custody with a local hardware-backed vault.
2. **Reflexion-Driven Decision Engine**: Integrated self-reflective trial-and-error loops for autonomous shopping and web navigation.
3. **Anti-Bot Resident Session Relay**: Bypasses merchant anti-bot protections by operating within the user's authentic local browser context.
4. **Sentinel Human-In-The-Loop (HITL) Gate**: Pre-stages checkout actions and sends one-tap interactive approval cards directly to your WhatsApp or Telegram before committing payments.
5. **A2A Trusted Negotiation Mesh**: Decentralized P2P agent protocol for collaborative bulk purchases and zero-knowledge calendar alignment.
6. **Active Detective In-Flight Shield**: Intercepts ungrounded parameter hallucinations and prevents accidental address leaks during form submission.
7. **PAP Hybrid Bridge & Adaptive Routing**: Connects via OAuth Poppy endpoints where available, and falls back to local browser emulation on Amazon/walled gardens.
8. **Anti-Ad Curated Triad**: Delivers exactly 3 uncompromising choices with 0% sponsor bias and one-tap in-chat checkout.
9. **M2AI & Agentic Pages Merchant Stack**: Empowers merchants to serve machine-readable shadow catalogs, inject GEO/AEO entity graphs, and attribute agent GMV.
10. **Scene-Aware Vibe & Look-to-SKU Loop**: Translates real-life occasions and aesthetics into verified merchant SKUs with dual-persona styling advice.
11. **Multi-Rail Context Broadcasting**: Serves lightweight ACP, UCP, MCP, and Agent Skills manifests while keeping checkout sovereign on the brand's store.
12. **Closed-Loop Funnel Adaptation**: Transforms raw session behavior into dynamic, intent-aligned landing experiences without static SaaS bloat.
13. **Real-Time PDP Seller Engine**: Interleaves algorithmic story cards and semantic search inside natural scroll streams to engage silent shoppers.

---

## 🛠️ Flagship Skills: The Decision, Procurement & Merchant Suite

Based on our architectural research, we officially released the **Agentic Commerce Ecosystem**:

| Skill | Module | Breakthrough Distillation |
| :--- | :--- | :--- |
| 🛒 [`zenchoice-ai-skill`](skills/zenchoice-ai-skill/SKILL.md) | **ZenChoice (禅选)** | Autonomous multi-site shopping, Reddit sentiment audit, MAUT trade-off scoring, and staged cart checkout. |
| 🎯 [`zenprocure-ai-skill`](skills/zenprocure-ai-skill/SKILL.md) | **ZenProcure (禅购)** | Dedicated 0% ad curation, Curated Triad paralysis-breaker, and universal headless in-chat checkout. |
| 🎨 [`zenviba-ai-skill`](skills/zenviba-ai-skill/SKILL.md) | **ZenViba (禅韵)** | Inspiration-to-Shopping agent: Scene-aware aesthetic styling, Angel & Devil dual-persona critique, and Look-to-SKU procurement. |
| 💡 [`zenlumen-ai-skill`](skills/zenlumen-ai-skill/SKILL.md) | **ZenLumen (禅明)** | M2AI & Agentic Commerce merchant infrastructure: Agentic Pages, GEO/AEO optimization, and agent attribution. |
| 🌊 [`zennile-ai-skill`](skills/zennile-ai-skill/SKILL.md) | **ZenNile (禅川)** | Multi-rail agent distribution (ACP/UCP/MCP/Skills), Context Cards compiler, and sovereign checkout handoff. |
| ⚡ [`zenfermat-ai-skill`](skills/zenfermat-ai-skill/SKILL.md) | **ZenFermat (禅策)** | Closed-loop funnel adaptation, behavior-to-intent analysis, dynamic experience synthesis, and SaaS tool consolidation. |
| 🧠 [`zengenius-ai-skill`](skills/zengenius-ai-skill/SKILL.md) | **ZenGenius (禅灵)** | Real-time PDP seller agent, sensory micro-gesture telemetry ("sensitive skin"), in-scroll story cards, and ad intent feedback. |
| 🌉 [`zenbridge-ai-skill`](skills/zenbridge-ai-skill/SKILL.md) | **ZenBridge (桥联)** | Hybrid Personal Agent Protocol (PAP) OAuth client + Resident Browser adaptive fallback. |
| 🤝 [`zenpeer-ai-skill`](skills/zenpeer-ai-skill/SKILL.md) | **ZenPeer (跨体协行)** | Encrypted Agent-to-Agent (A2A) peer negotiation for group buying arbitrage, zero-knowledge bookings, and split billing. |
| 🛡️ [`aegis-guard-skill`](skills/aegis-guard-skill/SKILL.md) | **Aegis Guard (行前护盾)** | Active Detective runtime anti-hallucination interceptor and PII address/credential redaction firewall. |

---

## 📦 Skills Registry Catalog

GenPark comes bundled with production-grade skills:

| Skill | Category | Description |
| :--- | :--- | :--- |
| 🛒 [`zenchoice-ai-skill`](skills/zenchoice-ai-skill/SKILL.md) | **Personal Agent / Decisions** | ZenChoice autonomous shopping, multi-site comparison, Reddit sentiment audit, and staged checkout. |
| 🎯 [`zenprocure-ai-skill`](skills/zenprocure-ai-skill/SKILL.md) | **Commerce / Procurement** | Dedicated 0% ad curation, Triad recommendation, and universal in-chat checkout. |
| 🎨 [`zenviba-ai-skill`](skills/zenviba-ai-skill/SKILL.md) | **Commerce / Aesthetic & Lifestyle** | Distilled from ViBA. Scene-to-vibe styling room, Angel/Devil dual persona, and Look-to-SKU in-chat procurement. |
| 💡 [`zenlumen-ai-skill`](skills/zenlumen-ai-skill/SKILL.md) | **Commerce / Merchant M2AI** | Distilled from DeepLumen. Agentic Pages compiler, GEO/AEO semantic optimizer, and agent traffic attribution. |
| 🌊 [`zennile-ai-skill`](skills/zennile-ai-skill/SKILL.md) | **Commerce / Agent Distribution** | Distilled from Nile. Multi-rail context cards (ACP/UCP/MCP/Skills), agent salesperson, and sovereign merchant checkout. |
| ⚡ [`zenfermat-ai-skill`](skills/zenfermat-ai-skill/SKILL.md) | **Commerce / Funnel Optimization** | Distilled from FERMÀT. Behavior-to-intent analysis, dynamic landing synthesis, and SaaS consolidation. |
| 🧠 [`zengenius-ai-skill`](skills/zengenius-ai-skill/SKILL.md) | **Commerce / PDP Personalization** | Distilled from Product Genius. Micro-gesture tactile sensor, in-scroll story cards, in-scroll search, and ad intent telemetry. |
| 🌉 [`zenbridge-ai-skill`](skills/zenbridge-ai-skill/SKILL.md) | **Commerce / Protocol** | Personal Agent Protocol (PAP) OAuth handshake with resident browser fallback. |
| 🤝 [`zenpeer-ai-skill`](skills/zenpeer-ai-skill/SKILL.md) | **Personal Agent / Collaboration** | Agent-to-Agent (A2A) peer negotiation, collective buying arbitrage, and privacy-preserving bookings. |
| 🛡️ [`aegis-guard-skill`](skills/aegis-guard-skill/SKILL.md) | **Security & Guardrails** | Pre-execution active hallucination interceptor and token-level PII address/card leakage shield. |
| 💳 [`swap-commerce-skill`](skills/swap-commerce-skill/SKILL.md) | **Commerce** | Autonomous commerce coordinator for catalog sync, cross-border tax, and returns routing. |
| 🔍 [`trooly-ai-skill`](skills/trooly-ai-skill/SKILL.md) | **Analytics** | Qualitative customer empathy engine and review scraping blueprint builder. |
| 🚀 [`mktflywheel-ai-skill`](skills/mktflywheel-ai-skill/SKILL.md) | **Marketing** | Autonomous CMO agent loop for cross-channel campaigns, ad copy, and SEO. |
| 📢 [`nexad-ai-skill`](skills/nexad-ai-skill/SKILL.md) | **Marketing** | Multi-variant creative copywriting and visual hierarchy asset testing. |
| 🎭 [`character-ai-skill`](skills/character-ai-skill/SKILL.md) | **Simulation** | Sandboxed character customization and customer-support agent simulator. |
| 📈 [`tradingagents-skill`](skills/tradingagents-skill/SKILL.md) | **Finance** | Algorithmic trading harness and local backtesting execution loop. |

---

## 🚀 Quick Start

### 1. Initialize OpenClaw Personal Gateway
```bash
# Clone the repository
git clone https://github.com/Alpha-Park/genpark-hub.git
cd genpark-hub

# Start the local gateway daemon
openclaw gateway --start
# ✔ Gateway bound to 127.0.0.1:18789 (Launchd/systemd active)
# ✔ Paired Messengers: WhatsApp [active], Telegram [active]
```

### 2. Invoke the ZenChoice Agent via Messenger
Simply text your paired WhatsApp or Telegram bot:
```text
"Find me over-ear noise-canceling headphones under $250 for long flights. 
Compare reviews on Reddit, check Best Buy vs. Amazon, and stage the best deal in my cart."
```

The agent will:
1. Conduct real-time research in a sandboxed resident browser.
2. Return a structured comparative decision matrix with pros, cons, and net landed costs.
3. Stage the best item in your cart and send an interactive approval card with a `[Confirm Purchase]` button.

---

## 🌐 Web UI & Skill Builder

GenPark includes a Kyoto-minimalist interactive dashboard and visual SKILL.md builder. Simply open `index.html` in your browser or serve it via:
```bash
npx serve .
# Visit http://localhost:3000
```

---

## 🤝 Contributing & Community

Contributions are welcomed! Feel free to submit custom skills, enhance the OpenClaw gateway daemon, or improve our decision models.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewSkill`)
3. Commit your Changes (`git commit -m 'Add NewSkill'`)
4. Push to the Branch (`git push origin feature/NewSkill`)
5. Open a Pull Request

---

## ⭐ Support Us

If you believe in private, autonomous personal agents that work for individuals rather than big tech platforms, please give us a **Star on GitHub**!

[![Star on GitHub](https://img.shields.io/badge/⭐-Star%20GenPark%20on%20GitHub-gold?style=for-the-badge)](https://github.com/Alpha-Park/genpark-hub)
