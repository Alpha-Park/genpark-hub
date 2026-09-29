# GenPark & OpenClaw 🦞

> **The Private Personal AI Assistant Ecosystem That Actually Does Things.**  
> Native multi-messenger integration (WhatsApp, Telegram, Slack, iMessage), resident browser computer-use, and modular skills platform.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Gateway](https://img.shields.io/badge/Gateway-v2.6.4%20Active-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![Skills Registry](https://img.shields.io/badge/Skills%20Registry-9%20Modular%20Packs-violet.svg)](#skills-registry-catalog)
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
- 🧩 **Extensible Skills Architecture**: Plug-and-play modular skills defined in standard `SKILL.md` format.

---

## 🔬 Featured Research: Autonomous Decision Agent Architecture & Distillation

We conducted an exhaustive architectural deconstruction analyzing the state-of-the-art 2026 personal agent paradigms:
- **Cloud-Sentinel VM Paradigm**: Cloud-isolated sandboxes with permission brokers and tokenized checkout.
- **Reflex-Concierge Paradigm**: Verbal reinforcement learning (Reflexion) loops with zero-new-interface multi-channel messaging and concierge calling.
- **Trusted Agent Mesh & Active Detective (Late-Sept 2026 Updates)**: Direct Agent-to-Agent (A2A) coordination and runtime hallucination/PII guardrails.

📖 **Read the full architectural research report**:  
👉 [**自主个人决策与代购 Agent 架构解构与能力蒸馏**](docs/research/autonomous-decision-agent-architectural-deconstruction.md)

### Key Architectural Distillations in GenPark:
1. **Local-First Security Enclave**: Replaced cloud VM credential custody with a local hardware-backed vault.
2. **Reflexion-Driven Decision Engine**: Integrated self-reflective trial-and-error loops for autonomous shopping and web navigation.
3. **Anti-Bot Resident Session Relay**: Bypasses merchant anti-bot protections by operating within the user's authentic local browser context.
4. **Sentinel Human-In-The-Loop (HITL) Gate**: Pre-stages checkout actions and sends one-tap interactive approval cards directly to your WhatsApp or Telegram before committing payments.
5. **A2A Trusted Negotiation Mesh**: Decentralized P2P agent protocol for collaborative bulk purchases and zero-knowledge calendar alignment.
6. **Active Detective In-Flight Shield**: Intercepts ungrounded parameter hallucinations and prevents accidental address leaks during form submission.

---

## 🛠️ Flagship Skills: The Decision, Peer & Security Triad

Based on our architectural research, we officially released the **Decision & Security Triad**:

| Skill | Module | Breakthrough Distillation |
| :--- | :--- | :--- |
| 🛒 [`zenchoice-ai-skill`](skills/zenchoice-ai-skill/SKILL.md) | **ZenChoice (禅选)** | Autonomous multi-site shopping, Reddit sentiment audit, MAUT trade-off scoring, and staged cart checkout. |
| 🤝 [`zenpeer-ai-skill`](skills/zenpeer-ai-skill/SKILL.md) | **ZenPeer (跨体协行)** | Encrypted Agent-to-Agent (A2A) peer negotiation for group buying arbitrage, zero-knowledge bookings, and split billing. |
| 🛡️ [`aegis-guard-skill`](skills/aegis-guard-skill/SKILL.md) | **Aegis Guard (行前护盾)** | Active Detective runtime anti-hallucination interceptor and PII address/credential redaction firewall. |

---

## 📦 Skills Registry Catalog

GenPark comes bundled with production-grade skills:

| Skill | Category | Description |
| :--- | :--- | :--- |
| 🛒 [`zenchoice-ai-skill`](skills/zenchoice-ai-skill/SKILL.md) | **Personal Agent / Decisions** | ZenChoice autonomous shopping, multi-site comparison, Reddit sentiment audit, and staged checkout. |
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
