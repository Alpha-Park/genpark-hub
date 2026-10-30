# Contributing to GenPark Hub 🦞

Thank you for your interest in contributing to **GenPark Hub**! We welcome contributions from developers, researchers, and creators worldwide.

---

## 🌟 How Can You Contribute?

1. **Distill a New Agent Skill**: Author a new autonomous decision or procurement skill following the `SKILL.md` specification.
2. **Improve Core Infrastructure**: Enhance the Agent Wallet Guard, Cross-Store Basket Optimizer, Product TruthGuard, or Circle Trend Radar in `src/`.
3. **Expand MCP Tool Integrations**: Add or refine Model Context Protocol (MCP) servers and tools in `mcp/server.js`.
4. **Fix Bugs & Improve Documentation**: Report edge cases, add unit tests, or refine the architectural research whitepapers.

---

## 🛠 Local Development & Testing Workflow

### 1. Prerequisites
- Node.js >= 20.0.0
- npm >= 9.0.0
- Git

### 2. Setup
```bash
git clone https://github.com/Alpha-Park/genpark-hub.git
cd genpark-hub
npm test
```

### 3. Verification Commands
Before submitting a Pull Request, ensure all tests and parity checks pass:

```bash
# Run core module unit tests
npm test

# Run full quality check (Unit tests + app.js syntax + 3-way parity)
npm run check
```

---

## 📐 Standards for Submitting a New Skill

Every skill in GenPark Hub must adhere to the **3-Way Parity Standard**:

1. **Skill Directory (`skills/<skill-name>-ai-skill/`)**:
   - `SKILL.md`: Standard specification with YAML frontmatter (`name`, `description`, `version`, `author`, `license`), architecture diagram (`mermaid`), JSON schema definition, and tool calling examples.
   - `README.md`: Public-facing overview, feature bullets, CLI quickstart, and GitHub Star CTA.
2. **App Registration (`app.js`)**:
   - Register the skill in the `SKILLS_DATABASE` array (with `id`, `name`, `description`, `category`, `developer`, `logo`).
   - Add generator preset handling in the `loadSkillToGenerator` function (`capInput` and `guideInput`).
3. **Research Document Alignment**:
   - Add the architectural analysis section to [`docs/research/autonomous-decision-agent-architectural-deconstruction.md`](docs/research/autonomous-decision-agent-architectural-deconstruction.md) and update the Table of Contents.
4. **README Catalog Indexing (`README.md`)**:
   - Add feature highlights in the *What is GenPark?* section.
   - Add entries in the *Flagship Skills* table and *Skills Registry Catalog* table.
   - Update the badge counter in `README.md`.

---

## 📜 Pull Request Process

1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feat/distill-new-skill
   ```
2. Make your changes adhering to existing code conventions.
3. Verify with `npm run check`.
4. Submit a Pull Request targeting `Alpha-Park/genpark-hub:main`.
5. Ensure CI checks pass.

---

## ⭐ Support Us

If you love what we are building, please **[Star the Repository](https://github.com/Alpha-Park/genpark-hub)** to help more developers discover autonomous decision agents!
