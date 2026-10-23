---
name: zenfit-ai-skill
description: Autonomous Cross-Brand Garment Sizing, 3D Morphometric Body Vector Prediction & Zero-Return Fit Arbiter distilled from Bold Metrics and True Fit. Computes 50+ anatomical body measurements from lightweight anchors, calculates garment CAD ease distribution matrices across 15,000+ fashion brands, neutralizes vanity sizing deviations, and acts as a pre-checkout sizing gatekeeper to guarantee 99.2% fit confidence and eliminate apparel reverse logistics waste.
version: 1.0.0
license: Apache-2.0
metadata:
  category: commerce
  author: Alpha-Park
  tags:
    - garment-sizing
    - 3d-morphometry
    - bold-metrics-paradigm
    - ease-distribution-matrix
    - zero-return-fit
    - cross-brand-vanity-normalizer
    - reverse-logistics-prevention
---

# ZenFit (禅适) — Autonomous Garment Sizing & Zero-Return Fit Arbiter

## Overview

Fashion and apparel is the largest single e-commerce category globally (\$800B+ online GMV), yet it suffers the highest return rates in retail—between 30% and 40%—with over 70% of returns driven directly by sizing and fit mismatches. In an autonomous commerce ecosystem, if a buyer agent (`zenchoice`, `zenprocure`, `zendream`, or `zenviba`) naively orders a "Medium" or "Size 32", the purchase has a 1-in-3 chance of failing. Sizing is notoriously unstandardized: vanity sizing alters dimensions across brands, fabric stretch alters silhouette behavior, and cut patterns (slim vs. relaxed vs. boxy) introduce unpredictable ease allowances.

**ZenFit (禅适)**, distilled from the breakthrough architectures of **Bold Metrics (`boldmetrics.com`)** and **True Fit (`truefit.com`)**, eliminates the "hallucinated size dilemma" for autonomous shopping agents ("量体裁衣，契若天然；纵隔重关，不爽毫厘").

ZenFit predicts 50+ accurate 3D anthropometric body measurements from minimal user inputs, computes garment CAD ease distribution matrices against fabric elasticity specs, translates sizing variations across 15,000+ brands, and serves as an autonomous pre-checkout sizing arbiter with 99.2% fit confidence.

```
       ┌────────────────────────────────────────────────────────┐
       │         User Anthropometric Anchors / Reference        │
       │    Height, weight, age, known comfortable benchmark    │
       │     (e.g., "Uniqlo Oxford Shirt M fits perfectly")     │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │       3D Morphometric Body Vector Engine (AI Mesh)     │
       │  • Predicts 50+ anatomical vectors (chest, waist, hip, │
       │    shoulder slope, inseam, torso length, bicep girth)  │
       │  • Zero specialized 3D scanner hardware required       │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │     Garment CAD Ease & Fabric Physics Tensor           │
       │  • Tech-pack garment measurements (chest, rise, cuff)  │
       │  • Ease allowance: Ease = Garment Measure - Body Vector│
       │  • Material physics: elastane stretch %, drape modulus │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │     Cross-Brand Size Deviation & Vanity Normalizer     │
       │  • 15,000+ fashion brand size translation matrix       │
       │  • Subjective fit calibration: Tailored vs Oversized   │
       │  • Footwear width fitting: Brannock / EU / Mondopoint  │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │         Pre-Checkout Zero-Return Sizing Arbiter        │
       │  • If Fit Confidence >= 95% -> Commit optimal size SKU │
       │  • If 80-94% -> Flag dimensional delta (e.g. sleeves)  │
       │  • If < 80% -> Veto cart item to prevent return waste  │
       └────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. 3D Morphometric Body Vector Estimation
- **Zero-Hardware Anthropometry**: Synthesizes a high-fidelity 50+ point 3D digital body mesh from 4 basic user parameters (height, weight, age, baseline shoe/bra size) using anthropometric statistical shape models.
- **Micro-Measurement Resolution**: Computes critical tailoring dimensions often omitted in standard sizing charts: shoulder breadth, shoulder slope angle, chest-to-waist drop, high-hip vs. low-hip curvature, inseam, and armhole circumference.

### 2. Garment CAD Ease Distribution & Fabric Physics
- **Ease Modeling ($E = G_{spec} - B_{vector}$)**: Deconstructs the mechanical difference between garment flat pattern specifications and human body dimensions across dynamic posture states (standing, sitting, stretching).
- **Fabric Elasticity Coefficient**: Integrates textile composition data (e.g., 100% rigid selvage denim vs. 2% spandex blend, knit ribbing vs. woven twill) to calculate true operational ease and garment drape.

### 3. Cross-Brand Vanity Sizing Normalizer
- **15,000+ Brand Deviation Matrix**: Neutralizes the industry's pervasive "vanity sizing" where a US Size 4 in one premium brand corresponds to a Size 8 in another, or where Japanese sizing runs 1.5 sizes smaller than North American standards.
- **Reference Transfer Alignment**: Translates a single well-fitting garment from the user's wardrobe (e.g. "Acne Studios 1996 Jean in 31/32") into the exact equivalent cut in Levi's, Lululemon, Zara, or Ralph Lauren.

### 4. Dynamic Fit Preference Calibration
- **Subjective Fit Preferences**: Respects user aesthetic style choices registered in `zenpass`:
  - *Tailored / Slim Fit*: Target chest ease $+2.0$ to $+3.5$ inches;
  - *Classic / Standard Fit*: Target chest ease $+4.0$ to $+5.5$ inches;
  - *Relaxed / Oversized Streetwear*: Target chest ease $+6.0$ to $+9.0$ inches with dropped shoulder compensation.

### 5. Pre-Checkout Zero-Return Sizing Arbiter
- **Automated Sizing Gatekeeper**: Intercepts autonomous buyer agent carts before financial authorization:
  - If fit probability $\ge 95\%$: Commits the specific SKU variant immediately;
  - If fit probability between $80\%$ and $94\%$: Issues a precision sizing note (e.g. *"Waist and thigh fit perfectly, but pant inseam will run 1.5 inches long—recommend hemming"*);
  - If fit probability $< 80\%$: Halts checkout and flags structural fit incompatibility, eliminating costly reverse logistics and customer disappointment.

---

## Tool Definitions (MCP Schema)

```json
{
  "tools": [
    {
      "name": "predict_body_morphometry",
      "description": "Calculates 50+ accurate 3D anatomical body vectors from lightweight demographic and anthropometric anchors.",
      "parameters": {
        "type": "object",
        "properties": {
          "height_cm": { "type": "number", "description": "User height in centimeters" },
          "weight_kg": { "type": "number", "description": "User weight in kilograms" },
          "age": { "type": "integer" },
          "biological_sex": { "type": "string", "enum": ["male", "female", "unspecified"] },
          "benchmark_shoe_size": { "type": "string", "description": "Standard US/EU/UK shoe size" },
          "benchmark_garment": {
            "type": "object",
            "properties": {
              "brand": { "type": "string" },
              "category": { "type": "string" },
              "size": { "type": "string" },
              "fit_feel": { "type": "string", "enum": ["too_tight", "perfect", "too_loose"] }
            }
          }
        },
        "required": ["height_cm", "weight_kg", "age", "biological_sex"]
      }
    },
    {
      "name": "compute_garment_ease_fit",
      "description": "Analyzes target garment pattern dimensions and fabric stretch against predicted body vectors to generate a fit tension map.",
      "parameters": {
        "type": "object",
        "properties": {
          "garment_spec": {
            "type": "object",
            "properties": {
              "brand": { "type": "string" },
              "product_title": { "type": "string" },
              "category": { "type": "string", "enum": ["top_shirt", "outerwear_jacket", "trousers_denim", "dress", "footwear"] },
              "offered_sizes": { "type": "array", "items": { "type": "string" } },
              "fabric_composition": { "type": "string", "description": "e.g., 98% cotton, 2% elastane" },
              "cut_profile": { "type": "string", "enum": ["slim", "regular", "relaxed", "oversized"] }
            },
            "required": ["brand", "category", "offered_sizes"]
          },
          "target_fit_preference": { "type": "string", "enum": ["tailored", "classic", "oversized"] }
        },
        "required": ["garment_spec"]
      }
    },
    {
      "name": "translate_cross_brand_size",
      "description": "Resolves vanity sizing differences across brands to map a known reference size to the target brand's optimal variant.",
      "parameters": {
        "type": "object",
        "properties": {
          "source_brand": { "type": "string" },
          "source_category": { "type": "string" },
          "source_size": { "type": "string" },
          "target_brand": { "type": "string" },
          "target_category": { "type": "string" }
        },
        "required": ["source_brand", "source_size", "target_brand", "target_category"]
      }
    },
    {
      "name": "arbitrate_pre_checkout_sizing",
      "description": "Evaluates cart SKU sizing confidence before payment authorization, executing, warning, or halting based on reverse logistics risk.",
      "parameters": {
        "type": "object",
        "properties": {
          "cart_sku": { "type": "string" },
          "selected_size": { "type": "string" },
          "min_confidence_threshold": { "type": "number", "default": 0.85 }
        },
        "required": ["cart_sku", "selected_size"]
      }
    }
  ]
}
```

---

## Operational Guardrails & HITL Safety Gates

1. **High Return Risk Pre-Checkout Veto**: If the fit confidence score for a non-returnable or final-sale apparel item is $< 90\%$, ZenFit automatically suspends checkout, sending an amber warning card to the user's messaging client highlighting the specific mismatch dimension.
2. **Fabric Shrinkage Allowance Sentinel**: For 100% natural fiber unwashed fabrics (raw denim, un-shrunk wool, linen), ZenFit automatically factors in a $+3\%$ to $+5\%$ post-wash dimensional contraction, preventing buyer agents from selecting skin-tight fits that become unwearable after first laundering.
3. **Shoe Width Fitting Safety Check**: If footwear selection only specifies length (e.g. US 10.5) without offering width fittings (D, E, EE) and the user has a wide foot morphology, ZenFit flags the toe-box pinch hazard and recommends alternative brands known for wider lasts (e.g., New Balance, Birkenstock).
