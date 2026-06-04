---
name: swap-commerce-skill
description: Autonomous commerce coordinator. Manages catalog synchronization, cross-border tax adjustments, and returns routing.
version: 1.0.0
license: MIT
---

# swap-commerce-skill

## Overview
Autonomous commerce coordinator. Manages catalog synchronization, cross-border tax adjustments, and returns routing.

## Core Capabilities
- **Catalog Syncer**: Sync local and global inventory levels and pricing dynamic metadata
- **Tax Adjuster**: Auto-calculate local and international sales tax, duties, and landed cost boundaries
- **Returns Router**: Streamline post-purchase return sessions, QR code shipping labels, and WMS sync
- **Virtual Try-On**: Activate visual try-on modules for matching apparel attributes

## Usage Guide
When starting a session using this skill:
1. Validate API connection to Swap-OS credentials before syncing catalog
2. Confirm shipping destination coordinates for DDP calculations
3. Initiate return workflows only after validating purchase history and token
4. Render try-on images and visual assets within secure sandboxed overlays
