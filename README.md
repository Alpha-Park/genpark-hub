# GenPark & OpenClaw 🦞

> **The Private Personal AI Assistant Ecosystem That Actually Does Things.**  
> Native multi-messenger integration (WhatsApp, Telegram, Slack, iMessage), resident browser computer-use, and modular skills platform.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Gateway](https://img.shields.io/badge/Gateway-v2.6.4%20Active-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![Skills Registry](https://img.shields.io/badge/Skills%20Registry-7%20Modular%20Packs-violet.svg)](#skills-registry-catalog)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=social)](https://github.com/Alpha-Park/genpark-hub)

---

## 🌟 What is GenPark?

GenPark is an open-source, local-first personal AI assistant framework powered by the **OpenClaw** gateway daemon. While conventional chatbots are trapped in web windows answering questions, GenPark agents execute complex, multi-step tasks across your physical and digital world:

- 🔒 **Local-First & Private**: Your credentials, cookies, and chat history remain on your machine inside the OS Secure Enclave / Local Vault. No cloud vendor data harvesting.
- 💬 **Zero-New-Interface**: Coordinate everything natively through the apps you already live in—**WhatsApp, Telegram, Slack, and iMessage**.
- 🌐 **Resident Browser Execution**: Solves the bot-blocking and IP-banning issues that plague cloud agents (e.g., Amazon's ban on Meta Muse) by leveraging your resident browser profile and residential IP.
- 🧩 **Extensible Skills Architecture**: Plug-and-play modular skills defined in standard `SKILL.md` format.

---

## 🔬 Featured Research: Meta Muse vs. Instinct Deconstruction

We conducted an exhaustive technical and product deconstruction of the two landmark 2026 personal agents:
- **Meta Muse** (Meta's cloud Secure VM, headless Chromium, and Sentinel/authd security layer).
- **Instinct** (Spear Street Technology / Noah Shinn's Reflexion-powered, zero-interface personal life-admin copilot).

📖 **Read the full 15-page architectural report**:  
👉 [**Meta Muse vs. Instinct: 2026 个人 Agent 范式演进与能力蒸馏**](docs/research/meta-muse-vs-instinct-agent-deconstruction.md)

### Key Distillations Implemented in GenPark:
1. **Local-First Security Enclave**: Replaced Meta's cloud VM credential custody with a local hardware-backed vault.
2. **Reflexion-Driven Decision Engine**: Integrated Noah Shinn's self-reflective trial-and-error loop for autonomous shopping and web navigation.
3. **Anti-Bot Resident Session Relay**: Bypasses merchant anti-bot protections (such as Amazon's countermeasures) by operating within the user's authentic browser context.
4. **Sentinel Human-In-The-Loop (HITL) Gate**: Pre-stages checkout actions and sends one-tap interactive approval cards directly to your WhatsApp or Telegram before committing payments.

---

## 🛠️ Flagship Skill: Autonomous Decision & Buyer Agent

Based on our research, we officially released the **`personal-decision-buyer-skill`**:

| Feature | Description |
| :--- | :--- |
| **Intent & Profile Miner** | Ingests ambiguous requests, cross-references long-term user constraints (size, budget, preferences). |
| **Fact & Sentiment Scraper** | Scrapes live retail listings and cross-checks with Reddit/Zhihu forums to eliminate astroturfed reviews. |
| **MAUT Decision Matrix** | Evaluates price, durability, shipping speed, and return policies using Multi-Attribute Utility Theory. |
| **Reflexion Self-Correction** | Automatically detects out-of-stock items or hidden fees and pivots to alternative merchants. |
| **Two-Phase Staged Checkout** | Stages items into carts and dispatches instant approval buttons to WhatsApp/Telegram. |

👉 View specification: [`skills/personal-decision-buyer-skill/SKILL.md`](skills/personal-decision-buyer-skill/SKILL.md)

---

## 📦 Skills Registry Catalog

GenPark comes bundled with production-grade skills:

| Skill | Category | Description |
| :--- | :--- | :--- |
| 🛒 [`personal-decision-buyer-skill`](skills/personal-decision-buyer-skill/SKILL.md) | **Personal Agent / Commerce** | Distilled from Meta Muse & Instinct. Multi-site shopping, Reddit sentiment audit, and staged checkout. |
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

### 2. Invoke the Decision & Buyer Agent via Messenger
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
