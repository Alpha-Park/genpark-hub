---
name: zenphia-ai-skill
description: Multi-Dimensional Value Matrix, Sustainable Supply-Chain Auditor & Secondary Market Resale Depreciation Forecaster for GenPark & OpenClaw. Distilled from Phia (phia.com / Phoebe Gates & Sophia Kianni) to evaluate purchases beyond flat price—scoring fabric longevity, cost-per-wear (CPW), verified circular sustainability, and predictive resale value across secondary marketplaces (Vestiaire, The RealReal, Poshmark).
version: 1.0.0
license: MIT
---

# zenphia-ai-skill

## Overview
`zenphia-ai-skill` (ZenPhia / 禅菲·禅斐) is the multi-dimensional value matrix and circular sustainability decision agent for GenPark & OpenClaw. Distilled from **Phia's (phia.com / Phoebe Gates & Sophia Kianni) Gen-Z conscious consumer decision engine and circular fashion forecasting platform**, ZenPhia revolutionizes how autonomous shopping agents judge product value by eliminating the dangerous **"Flat-Price Fallacy"**.

Traditional shopping bots and coupon scrapers suffer from severe tunnel vision: they obsess exclusively over nominal sticker price and promo codes, steering buyers toward low-quality, disposable, and sweatshop-manufactured goods. ZenPhia replaces single-dimensional price comparison with a **Holistic 5-Dimension True Value Matrix**:
1. **Upfront Price Integrity & Artificial Discount Detection**: Audits historical price volatility to catch fake markdowns and artificial price hikes.
2. **Material Science & Craft Durability**: Parses fabric composition (e.g., 100% long-staple organic cotton vs. virgin polyester blends), GSM weight, stitching density, and repairability indices.
3. **Verified Sustainable Supply-Chain & Anti-Greenwashing Shield**: Cross-examines brand marketing buzzwords against third-party certifications (OEKO-TEX, GOTS, B-Corp, Higg Index, Fair Labor Association) to expose deceptive eco-claims.
4. **Predictive Secondary Market Resale Depreciation Curve**: Forecasts residual liquidation value at 6, 12, 24, and 36 months by ingesting historical transaction data from The RealReal, Vestiaire Collective, Poshmark, and eBay.
5. **Realized Cost-Per-Wear (CPW) & Circular Longevity**: Models real consumption cost using the formula:
   $$\text{True Cost-Per-Wear} = \frac{\text{Landed Price} - \text{Projected Resale Value}}{\text{Predicted Total Usages}}$$

Operating local-first within OpenClaw, ZenPhia transforms GenPark from a simple procurement bot into an elite, ethical personal concierge that protects user wallets, wardrobes, and environmental impact.

---

## Core Capabilities

### 1. Multi-Dimensional Value Arbiter (`TrueValueMatrix`)
- Evaluates purchases across five weighted dimensions: Price Integrity, Material Craftsmanship, ESG Verification, Resale Depreciation, and Cost-Per-Wear.
- Flags misleading "deals" where high initial discounts conceal brittle materials engineered for planned obsolescence.

### 2. Predictive Resale Residual Forecaster (`SecondaryResaleForecaster`)
- Queries millions of secondary marketplace liquidation points (The RealReal, Vestiaire Collective, Grailed, Poshmark):
  - Projects brand and model depreciation curves over a 3-year horizon.
  - Distinguishes fast-depreciating fashion ($0 residual value after 1 wash) from archival, value-retentive heritage garments (50%–90% value retention).
  - Calculates net ownership cost before the user commits to a checkout.

### 3. Sustainable Supply-Chain & Anti-Greenwashing Shield (`GreenwashingShield`)
- Audits merchant marketing copy against verified open ESG databases and factory audit registries.
- Flags unverified greenwashing buzzwords (*"eco-friendly"*, *"conscious"*, *"natural"*) that lack verifiable chain-of-custody certificates.
- Assesses environmental impacts including microplastic shedding risk, water intensive dyeing, and chemical toxicity.

### 4. Ethical Dupe & Craft Alternative Recommender (`EthicalDupeEngine`)
- When a user requests an affordable alternative ("dupe") to a luxury or trending piece:
  - Discards low-grade, exploitative ultra-fast-fashion knockoffs.
  - Recommends independent, ethically verified craft makers who deliver equivalent fabric specifications (GSM weight, French seams, natural dyes) at rational direct-to-consumer prices.

---

## Standard Multi-Dimensional Decision Schema

```json
{
  "matrix_protocol": "zenphia-value/v1.0",
  "audit_id": "aud_phia_88491c",
  "item_context": {
    "title": "Minimalist Cashmere Knit Sweater",
    "brand": "Everlane",
    "category": "Apparel/Knitwear",
    "retail_price_usd": 198.00
  },
  "holistic_score_card": {
    "composite_index": 87.4,
    "dimensions": {
      "price_integrity": {
        "score_100": 92,
        "historical_low_usd": 178.00,
        "is_artificial_discount": false,
        "deal_confidence": "high"
      },
      "material_durability": {
        "score_100": 85,
        "fiber_spec": "100% Grade-A Mongolian Cashmere, 2-ply 12GG",
        "pilling_resistance": "medium-high",
        "repairability_grade": "A"
      },
      "sustainability_audit": {
        "score_100": 89,
        "certifications": ["OEKO-TEX Standard 100", "Good Cashmere Standard (GCS)"],
        "greenwashing_risk": "low",
        "supply_chain_transparency": "Tier-1 & Tier-2 Audited"
      },
      "secondary_resale_forecast": {
        "score_100": 78,
        "projected_resale_12mo_usd": 95.00,
        "projected_resale_24mo_usd": 70.00,
        "liquid_platforms": ["Vestiaire Collective", "Poshmark"],
        "depreciation_tier": "low_depreciation"
      }
    }
  },
  "financial_realization": {
    "estimated_annual_wears": 35,
    "projected_lifespan_years": 4,
    "total_lifecycle_wears": 140,
    "projected_liquidation_value_usd": 70.00,
    "true_cost_per_wear_usd": 0.91
  },
  "verdict": {
    "recommendation": "strong_buy",
    "reasoning": "High-durability grade-A fiber with certified ethical sourcing and stable secondary resale value ($70 residual). Realized CPW is under $1.00."
  }
}
```

---

## Operational Guidelines

1. **Reject Single-Dimensional Price Bias**: Never recommend an item purely because it is the cheapest dollar amount; always compute the Net True Cost-Per-Wear (CPW) and salvage value.
2. **Zero Tolerance for Greenwashing**: Automatically penalize brand claims that fail cryptographic certification verification (GOTS, OEKO-TEX, B-Corp).
3. **Resale Liquidity Awareness**: Inform users upfront if an item has near-zero secondary market liquidity versus items that hold archival resale value.
4. **Local-First Execution**: Ensure all consumer wardrobe profiles and purchase history remain encrypted within OpenClaw local storage.
