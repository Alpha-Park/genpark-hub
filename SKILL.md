---
name: genpark-next-features
description: Next-Generation Feature Suite for GenPark & OpenClaw AI Shopping Agents, including Agent Wallet Guard, Cross-Store Basket Optimizer, Product TruthGuard, and Circle Trend Radar.
version: 1.0.0
author: GenPark (AlphaPark Inc)
license: MIT
metadata:
  openclaw_compatible: true
  genpark_protocol_version: "2026.1"
  mcp_support: true
---

# GenPark Next-Gen Features Skill

This skill equips OpenClaw and autonomous shopping agents with four mission-critical capabilities for **[GenPark.ai](https://genpark.ai)**.

## Capabilities

### 1. 🛡️ Agent Wallet Guard (`genpark_wallet_checkout`)
- **Intent**: Controlled autonomous purchasing with strict budget policies.
- **When to invoke**: When an agent prepares to execute a product checkout on behalf of the user.
- **Safety guarantees**:
  - Automatically verifies per-order caps (default $150) and daily rolling allowance ($500).
  - Escalates to human approval via HMAC-SHA256 signature when thresholds are exceeded or merchants have low trust scores.
  - Generates tamper-evident cryptographic virtual receipts for auditability.

### 2. 🛒 Cross-Store Basket Optimizer (`genpark_optimize_basket`)
- **Intent**: Combinatorial multi-merchant shopping cart optimization.
- **When to invoke**: When a user wants to buy multiple items across different stores/vendors.
- **Benefits**:
  - Solves the knapsack and free-shipping threshold optimization problem.
  - Automatically calculates whether consolidating into one store or splitting across multiple merchants yields the lowest net cost (including shipping fees).

### 3. 🔍 Product TruthGuard (`genpark_audit_reviews`)
- **Intent**: Counterfactual and anti-hallucination review forensics.
- **When to invoke**: When an agent investigates a product before recommending it to the user.
- **Benefits**:
  - Detects synthetic AI bot reviews and temporal rating spikes.
  - Isolates genuine verified purchaser complaints into categorized flaw clusters (Durability, Sizing, Battery, Support).
  - Outputs an authentic adjusted rating score and Trust Grade (A through F).

### 4. 📡 Circle Trend Radar (`genpark_circle_trend_radar`)
- **Intent**: Autonomous trend discovery and Circle community curation.
- **When to invoke**: When curating daily shopping briefings or publishing insightful posts to GenPark Circle (洞见).
- **Benefits**:
  - Computes discussion velocity and acceleration metrics.
  - Synthesizes user feedback into editorial-ready markdown articles with citations.

## MCP Server Configuration

Add to your `openclaw.json` or MCP settings:

```json
{
  "mcpServers": {
    "genpark-features": {
      "command": "node",
      "args": ["path/to/genpark-next-features/mcp/server.js"]
    }
  }
}
```
