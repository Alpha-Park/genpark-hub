---
name: zenvital-ai-skill
description: Autonomous Biomarker-to-Nutrient Clinical Mapping, Bioavailability Verification & Longevity Supplement Procurement Engine distilled from Function Health and InsideTracker. Synthesizes 100+ longitudinal lab biomarkers and wearable telemetry, audits nutrient bioavailability forms, eliminates polypharmacy contraindications, verifies USP/NSF 3rd-party lab purity, and schedules automated replenishment aligned with clinical blood re-testing cadences.
version: 1.0.0
license: Apache-2.0
metadata:
  category: health
  author: Alpha-Park
  tags:
    - biomarker-nutrition
    - longevity-supplementation
    - function-health-paradigm
    - insidetracker-mapping
    - bioavailability-audit
    - contraindication-sentinel
    - lab-tested-purity
---

# ZenVital (禅元) — Autonomous Biomarker Nutrition & Longevity Supplement Engine

## Overview

Over \$50 Billion is spent annually on dietary supplements and longevity vitamins, yet more than 80% of consumer supplementation is driven by generic marketing, social media fads, or ungrounded multivitamins ("expensive urine"). Consumers routinely ingest low-bioavailability forms (such as magnesium oxide with a dismal 4% absorption rate instead of therapeutic glycinate or L-threonate), risk dangerous polypharmacy interactions (e.g., high-dose zinc causing severe copper deficiency, or iron competing with calcium/caffeine), and blindly take pills without ever measuring actual baseline blood levels.

**ZenVital (禅元)**, distilled from the breakthrough clinical architectures of **Function Health (`functionhealth.com`)** and **InsideTracker (`insidetracker.com`)**, replaces blind supplement guesswork with biomarker-grounded autonomous procurement ("养生固本，因体施调；去伪存真，元气自足").

ZenVital ingests longitudinal lab panels (Quest/Labcorp) and wearable sleep/recovery telemetry, maps verified clinical deficits to bioavailable therapeutic compounds, filters for third-party certified pure ingredients (NSF Certified for Sport, USP), enforces strict chronological ingestion timing, and synchronizes replenishment with 6-month blood re-test schedules.

```
       ┌────────────────────────────────────────────────────────┐
       │         Lab Biomarker Ingestion (100+ Lab Markers)     │
       │    e.g. Vitamin D (25-OH), ApoB, hs-CRP, Ferritin,     │
       │         HbA1c, Homocysteine, Oura/Apple Health HRV     │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │        Biomarker-to-Nutrient Clinical Mapping Engine   │
       │  • Identifies suboptimal biological ranges vs "normal" │
       │  • Formulates targeted therapeutic interventions       │
       │  • Enforces non-pharmaceutical OTC boundary            │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │     Bioavailability & Third-Party Lab Purity Audit     │
       │  • Eliminates poor absorption forms (Oxide, Carbonate) │
       │  • Selects bioavailable salts (Glycinate, Threonate)   │
       │  • Enforces USP, NSF Certified for Sport, Labdoor      │
       │  • Heavy metal, microplastic, and filler filtration    │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │      Contraindication & Chronological Timing Sentinel  │
       │  • De-duplicates competitive absorption (Zinc vs Copper│
       │  • AM fat-soluble stack (D3 + K2 with dietary fats)    │
       │  • PM neuro-recovery stack (Magnesium L-Threonate)     │
       │  • Upper intake limits (UL) to prevent toxicity        │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │        Biomarker Retest & Depletion Replenishment      │
       │  • Synchronizes pill inventory with 180-day lab cycle  │
       │  • Halts or titrates dosage when biomarkers normalize  │
       │  • 1-Click interactive approval card via WhatsApp/AP2  │
       └────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. Longitudinal Biomarker & Wearable Telemetry Ingestion
- **Clinical Lab Ingestion**: Automatically parses standard blood panel PDFs and HL7/FHIR health data exports (Quest Diagnostics, Labcorp, Function Health) covering 100+ biomarkers across metabolic, cardiovascular, hormonal, and micronutrient pillars.
- **Wearable Recovery Context**: Integrates sleep architecture, nocturnal resting heart rate (RHR), and heart rate variability (HRV) from Apple Health and Oura to contextualize acute physiological stress versus chronic deficiency.

### 2. Bioavailability Form & Purity Screening
- **Chemical Form Optimization**: Rejects cheap, unabsorbable compound iterations in favor of clinically proven bioavailable forms:
  - *Magnesium*: Mandates Bisglycinate (for somatic muscle relaxation) or L-Threonate (for blood-brain barrier cognitive support) over poorly absorbed Oxide;
  - *B-Vitamins*: Enforces methylated active forms (L-Methylfolate, Methylcobalamin) to bypass MTHFR gene enzyme bottlenecks;
  - *Omega-3*: Mandates triglyceride (rTG) form over oxidized ethyl esters.
- **Third-Party Purity Verification**: Restricts procurement catalog strictly to brands possessing third-party independent lab seals (NSF Certified for Sport, USP Verified, Informed-Choice, ConsumerLab) to ensure 0% heavy metal contamination, zero undisclosed steroids, and accurate label potency.

### 3. Chronological Timing & Contraindication Sentinel
- **Nutrient Conflict Separation**: Separates antagonistic nutrients into distinct circadian ingestion windows:
  - Morning stack: Vitamin D3 + K2 (fat-soluble, requires meal) + CoQ10;
  - Mid-day: B-complex (mitochondrial energy, prevents sleep disruption);
  - Evening/Pre-bed: Magnesium + L-Theanine (GABAergic sleep induction);
  - Separates Iron from Calcium and polyphenolic tea/coffee by $\ge 2$ hours to maximize transferrin saturation.
- **Toxicity Upper Limit (UL) Circuit Breaker**: Hard mathematical ceiling checks prevent hypervitaminosis (e.g. Vitamin D3 capped at safe therapeutic limits, Vitamin A retinol toxicity defense, Iron supplementation banned in males without confirmed low ferritin).

### 4. Biomarker Re-Test Depletion Synchronizer
- **Closed-Loop Feedback**: Supplementation is not a lifetime sentence; it is a titration regimen. ZenVital sizes bottle quantities to match the exact duration until the next scheduled 90-day or 180-day blood draw.
- **Dosage Titration on Normalization**: When follow-up lab tests confirm optimal biomarker levels (e.g., Vitamin D normalized to 50–70 ng/mL), ZenVital automatically reduces the re-order dosage from therapeutic loading to maintenance, preventing over-accumulation.

### 5. Physician Discussion Brief Generator
- **Clinician-Friendly Export**: Packages proposed supplementation regimens, lab biomarker deltas, and research citations into a crisp 1-page structured briefing for the user's primary care physician, preserving professional medical alignment.

---

## Tool Definitions (MCP Schema)

```json
{
  "tools": [
    {
      "name": "ingest_lab_biomarkers",
      "description": "Parses laboratory blood panel results and updates the local user health baseline state machine.",
      "parameters": {
        "type": "object",
        "properties": {
          "lab_provider": { "type": "string", "enum": ["quest", "labcorp", "function_health", "manual_entry"] },
          "test_date": { "type": "string", "format": "date" },
          "biomarkers": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": { "type": "string" },
                "value": { "type": "number" },
                "unit": { "type": "string" },
                "reference_range": { "type": "string" }
              },
              "required": ["name", "value", "unit"]
            }
          }
        },
        "required": ["test_date", "biomarkers"]
      }
    },
    {
      "name": "evaluate_supplement_regimen",
      "description": "Audits a proposed or current supplement stack against biomarker deficits, flagging contraindications, timing conflicts, and poor bioavailability forms.",
      "parameters": {
        "type": "object",
        "properties": {
          "current_supplements": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "compound_name": { "type": "string" },
                "chemical_form": { "type": "string" },
                "dosage_mg": { "type": "number" },
                "frequency": { "type": "string" }
              },
              "required": ["compound_name", "dosage_mg"]
            }
          }
        },
        "required": ["current_supplements"]
      }
    },
    {
      "name": "curate_certified_supplements",
      "description": "Selects verified USP/NSF-certified SKUs matching required clinical forms, therapeutic dosages, and optimal pricing.",
      "parameters": {
        "type": "object",
        "properties": {
          "target_deficiencies": {
            "type": "array",
            "items": { "type": "string" }
          },
          "require_third_party_certification": { "type": "boolean", "default": true },
          "supply_duration_days": { "type": "integer", "default": 90 }
        },
        "required": ["target_deficiencies"]
      }
    },
    {
      "name": "generate_physician_discussion_brief",
      "description": "Compiles a clinical 1-page summary of biomarker deficits, proposed nutraceutical titrations, and scientific rationale for physician review.",
      "parameters": {
        "type": "object",
        "properties": {
          "patient_name": { "type": "string" },
          "target_biomarkers": { "type": "array", "items": { "type": "string" } }
        },
        "required": ["patient_name"]
      }
    }
  ]
}
```

---

## Operational Guardrails & HITL Safety Gates

1. **Strict OTC Non-Prescription Boundary**: ZenVital strictly restricts recommendations to over-the-counter dietary supplements, vitamins, and minerals. It is hard-coded to refuse and veto any prescription pharmaceutical drugs, controlled substances, or unregulated research peptides.
2. **Medical Disclaimer & No-Diagnosis Firewall**: ZenVital explicitly states in every output that it provides nutritional optimization analysis, not formal medical diagnosis or treatment of disease, and mandates primary care physician review for any marker outside critical lab alert values.
3. **Pregnancy & Nursing Hard Veto**: If a user profile indicates pregnancy or nursing, ZenVital immediately disables all automated supplement recommendations and requires explicit obstetrician-approved protocols.
