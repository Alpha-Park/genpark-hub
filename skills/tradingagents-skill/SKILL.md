---
name: tradingagents-skill
description: Algorithmic trading decision harness. Simulates agent trades and monitors technical triggers locally before executing order loops.
version: 1.0.0
license: MIT
---

# tradingagents-skill

## Overview
Algorithmic trading decision harness. Simulates agent trades and monitors technical triggers locally before executing order loops.

## Core Capabilities
- **Trigger Monitor**: Check technical indicators and price levels locally in real-time
- **Trade Simulator**: Run paper trading simulations to backtest strategies safely
- **Order Executer**: Securely interface with API endpoints for mock order loop routing

## Usage Guide
When starting a session using this skill:
1. Verify mock portfolio constraints and stop-loss boundaries before simulation
2. Do not connect to live broker endpoints; restrict execution to sandboxed environments
3. Generate detailed trade execution report logs on daily boundaries
