---
name: zenpet-ai-skill
description: Autonomous Companion Animal Health Profile, Veterinary Prescription Direct-Sourcing & Insurance Claim Dispute Sentinel distilled from Chewy Pharmacy, Dutch, Wisdom Panel & Lemonade Pet. Parses veterinary SOAP notes, audits active pharmacological bioequivalence, eliminates clinic drug markups (40%-65% savings), screens breed genetic mutations (MDR1/HCM/IVDD), automates pet insurance claim compilation, and provides emergency triage decisioning.
version: 1.0.0
license: Apache-2.0
metadata:
  category: commerce
  author: Alpha-Park
  tags:
    - pet-healthcare
    - veterinary-pharmacy
    - chewy-pharmacy
    - dutch-telehealth
    - wisdom-panel-genetics
    - pet-insurance-claims
    - soap-record-ocr
    - mdr1-contraindication
---

# ZenPet (禅宠) — Autonomous Companion Animal Health & Veterinary Pharmacy Sentinel

## Overview

Companion animal care has grown into a \$300+ Billion global industry, yet veterinary medicine faces severe commercial monopolization and runaway inflation (> 45% in recent years). Veterinary corporate roll-ups routinely leverage high-stress clinical moments to impose 100% to 200% markups on prescription drugs (e.g. Apoquel, Bravecto, Vetmedin, Clavamox), while pet health insurance companies exploit "pre-existing condition" exclusions and ambiguous SOAP notes to deny up to 35% of legitimate claims.

**ZenPet (禅宠)**, distilled from the retail transparency of **Chewy Pharmacy (`chewy.com/pharmacy`)**, digital veterinary prescription pioneer **Dutch (`dutch.com`)**, breed genomics platforms (**Wisdom Panel / Embark**), and paperless pet insurance (**Lemonade Pet**), serves as a dedicated, objective companion animal medical and procurement advocate (*"抚幼恤老，性命相依；辩证索方，福泽自全"*).

ZenPet ingests multimodal veterinary receipts, clinical SOAP records, and genetic screening profiles. It liberates prescriptions from high-margin clinic dispensaries to certified online pharmacies, matches bioequivalent FDA/EPA-approved generic compounds, enforces genetic medication contraindication screens (e.g. lethal MDR1 multi-drug resistance in herding breeds), compiles bulletproof insurance reimbursement dossiers, and operates an emergency triage decision tree.

```
       ┌─────────────────────────────────────────────────────────┐
       │     Veterinary Ingestion & Clinical SOAP Parser         │
       │  • Clinic invoice, prescription & SOAP note OCR         │
       │  • Active compound extraction & dosage calculation      │
       │  • Extraction of lab telemetry (BUN/Cre, ALT, SDMA)     │
       └───────────────────────────┬─────────────────────────────┘
                                   │
                                   ▼
       ┌─────────────────────────────────────────────────────────┐
       │   Pharmacological Equivalence & Direct-Sourcing Engine  │
       │  • Compares clinic price against certified PetRx hubs   │
       │  • Matches brand names to FDA-approved generic salts    │
       │  • Automated AVMA-compliant prescription transfer draft │
       └───────────────────────────┬─────────────────────────────┘
                                   │
                                   ▼
       ┌─────────────────────────────────────────────────────────┐
       │     Breed Genetic Predisposition & Longevity Sentinel   │
       │  • Wisdom Panel / Embark DNA test ingestion             │
       │  • MDR1 gene mutation block (Ivermectin/Loperamide)     │
       │  • Proactive joint (IVDD/Dysplasia) & cardiac protocols │
       └───────────────────────────┬─────────────────────────────┘
                                   │
                                   ▼
       ┌─────────────────────────────────────────────────────────┐
       │     Pet Insurance Claim Compiler & Exclusion Shield     │
       │  • Timeline pre-audit against "pre-existing" loopholes  │
       │  • 1-Click claim package (Invoice + SOAP + Diagnostics) │
       │  • Automated legal rebuttal against bad-faith denials   │
       └───────────────────────────┬─────────────────────────────┘
                                   │
                                   ▼
       ┌─────────────────────────────────────────────────────────┐
       │       Emergency Triage & Telehealth Routing Gateway     │
       │  • Red-flag ER triage (GDV, FLUTD, toxic lily/xylitol)  │
       │  • Non-emergent symptom triage via Dutch telehealth     │
       │  • AP2 settlement & automated recurring Rx replenishment│
       └─────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. Clinical SOAP Note & Prescription OCR Parser
- **Multimodal Record Parsing**: Scans and parses clinic invoice sheets, prescription pads, and veterinary SOAP records (Subjective, Objective, Assessment, Plan) with clinical-grade accuracy.
- **Biomarker & Diagnosis Extraction**: Extracts longitudinal diagnostic telemetry including complete blood count (CBC), chemistry panels (BUN, Creatinine, SDMA, ALT, ALP), urinalysis specific gravity (USG), and cardiac biomarkers (NT-proBNP).

### 2. Pharmacological Bioequivalence & Direct PetRx Sourcing
- **Prescription Release Automation**: Generates standardized, AVMA-compliant prescription release requests, enforcing the pet owner's legal right to have prescriptions filled off-site without administrative fees.
- **Bioequivalent Generic Matching**: Matches high-cost branded pet pharmaceuticals to FDA/EPA-approved bioequivalent generics and human-label equivalents under AMDUCA regulations:
  - Antibiotics: Clavamox $\rightarrow$ Amoxicillin-Clavulanate generic (-60% cost);
  - Cardiac: Vetmedin (Pimobendan) compounded bioequivalent solutions;
  - Dermatology: Apoquel (Oclacitinib) dosage schedule optimization;
  - Parasiticides: NexGard / Bravecto / Revolution Plus direct cross-merchant price arbitrage across Chewy, Costco, and 1-800-PetMeds.

### 3. Breed Genomics & MDR1 Contraindication Shield
- **DNA Profiling Ingestion**: Ingests raw genome screening panels from Wisdom Panel and Embark to identify single-nucleotide polymorphisms (SNPs) and structural variants.
- **MDR1 Safety Circuit Breaker**: Hard-stops prescription of P-glycoprotein substrate drugs (Ivermectin, Selamectin, Loperamide, Vincristine) in dogs carrying the ABCB1-1$\Delta$ (MDR1) mutation, preventing fatal neurotoxicity in Collies, Australian Shepherds, and Whippets.
- **Targeted Preventive Nutrition**: Recommends targeted, clinical-grade supplements (EPA/DHA, chondroitin sulfate, glucosamine, CoQ10) aligned with breed-specific risks before radiological or symptomatic onset.

### 4. Pet Insurance Claim Compiler & Pre-Existing Shield
- **Denial Proofing**: Audits historical veterinary medical charts prior to filing claims to preemptively identify potential "pre-existing condition" trigger terms used by insurers.
- **Automated Claim Dossier Assembly**: Packages itemized paid receipts, discharge instructions, diagnostic lab PDF reports, and attending veterinarian SOAP notes into certified claim submissions for Trupanion, Lemonade, Nationwide, and Healthy Paws.
- **Formal Denial Rebuttal Generator**: Crafts evidence-backed appeals citing veterinary clinical literature and prior normal baseline bloodwork to overturn improper insurer claim rejections.

### 5. Emergency Triage vs. Telehealth Routing Gateway
- **Immediate Life-Threatening Red-Flag Radar**: Instantly flags lethal emergencies:
  - Gastric Dilatation-Volvulus (GDV/Bloat in large dogs);
  - Feline Lower Urinary Tract Disease (FLUTD / blocked male cats);
  - Acute toxicities (Lilies for felines; Xylitol, dark chocolate, grapes for canines).
  Provides turn-by-turn navigation and direct phone dispatch to the nearest 24/7 emergency veterinary hospital.
- **Low-Acuity Telehealth Redirection**: Routes mild, non-emergency concerns (mild pruritus, minor dietary indiscretion) to affordable licensed veterinary telehealth channels (Dutch, Anipanion) for \$20–\$30, bypassing unnecessary \$300 emergency exam fees.

---

## Tool Definitions (MCP Schema)

```json
{
  "tools": [
    {
      "name": "parse_vet_soap_records",
      "description": "Performs multimodal OCR on veterinary invoices, prescription slips, and SOAP medical notes to extract diagnosis, prescribed drugs, and lab telemetry.",
      "parameters": {
        "type": "object",
        "properties": {
          "document_image_url": { "type": "string", "description": "URL or local path to veterinary document or invoice" },
          "pet_name": { "type": "string", "description": "Name of the companion animal" },
          "species": { "type": "string", "enum": ["canine", "feline", "other"] }
        },
        "required": ["document_image_url", "species"]
      }
    },
    {
      "name": "audit_pet_pharmacy_pricing",
      "description": "Cross-references prescribed veterinary drugs against FDA-approved bioequivalent generics and verified online pet pharmacies.",
      "parameters": {
        "type": "object",
        "properties": {
          "prescribed_drug_name": { "type": "string", "description": "Brand or active compound name (e.g. Apoquel, Vetmedin, Clavamox)" },
          "dosage_mg": { "type": "number", "description": "Dosage strength in milligrams" },
          "quantity": { "type": "number", "description": "Number of units/tablets prescribed" },
          "clinic_quoted_price": { "type": "number", "description": "Price quoted by attending veterinary clinic in USD" }
        },
        "required": ["prescribed_drug_name", "dosage_mg", "quantity"]
      }
    },
    {
      "name": "screen_breed_genetics_contraindications",
      "description": "Cross-references proposed pharmaceutical regimen against pet breed and genetic test results (e.g. MDR1 mutation, HCM, IVDD).",
      "parameters": {
        "type": "object",
        "properties": {
          "breed": { "type": "string", "description": "Primary breed or breed mix" },
          "known_genetic_mutations": { 
            "type": "array", 
            "items": { "type": "string" }, 
            "description": "List of confirmed genetic mutations (e.g. MDR1_MUTATION, HCM_MYBPC3)" 
          },
          "proposed_medications": { 
            "type": "array", 
            "items": { "type": "string" }, 
            "description": "List of medications considered for administration" 
          }
        },
        "required": ["breed", "proposed_medications"]
      }
    },
    {
      "name": "compile_pet_insurance_claim",
      "description": "Assembles structured insurance claim dossier, audits pre-existing condition risks, and produces formal appeal rebuttals if claim was denied.",
      "parameters": {
        "type": "object",
        "properties": {
          "insurer_name": { "type": "string", "description": "Pet insurance provider (e.g. Lemonade, Trupanion, Nationwide)" },
          "total_invoice_amount": { "type": "number", "description": "Total veterinary invoice cost in USD" },
          "diagnosis_code": { "type": "string", "description": "Primary diagnosis or presenting complaint" },
          "soap_record_url": { "type": "string", "description": "Verified SOAP clinical note path" },
          "is_denial_appeal": { "type": "boolean", "description": "Whether this is a formal rebuttal of a denied claim" }
        },
        "required": ["insurer_name", "total_invoice_amount", "diagnosis_code"]
      }
    },
    {
      "name": "triage_pet_symptoms",
      "description": "Evaluates acute clinical symptoms against emergency red-flag thresholds to route to 24/7 ER vs. affordable digital telehealth.",
      "parameters": {
        "type": "object",
        "properties": {
          "species": { "type": "string", "enum": ["canine", "feline"] },
          "observed_symptoms": { "type": "array", "items": { "type": "string" } },
          "suspected_toxin_ingestion": { "type": "string", "description": "Name of ingested substance if any (e.g. lily, dark chocolate, human meds)" },
          "user_location_zip": { "type": "string", "description": "Current postal zip code for nearest ER facility mapping" }
        },
        "required": ["species", "observed_symptoms"]
      }
    }
  ]
}
```

---

## Standard Output Payload Schema

```json
{
  "$schema": "https://genpark.openclaw.ai/schemas/zenpet-health-report.json",
  "incident_id": "pet_sess_canine_golden_20261024",
  "pet_profile": {
    "name": "Cooper",
    "species": "CANINE",
    "breed": "Golden Retriever",
    "age_years": 4.5,
    "weight_kg": 32.4,
    "genomic_risk_profile": {
      "dna_test_provider": "Embark",
      "mdr1_status": "NORMAL_CLEAR",
      "hip_dysplasia_predisposition": "MODERATE_ELEVATED",
      "ichthyosis_status": "CARRIER_NON_AFFECTED"
    }
  },
  "clinical_assessment": {
    "primary_complaint": "Bilateral seasonal atopic dermatitis & secondary pododermatitis",
    "prescribed_regimen": [
      {
        "medication": "Apoquel (Oclacitinib maleate)",
        "dosage": "16mg tablet",
        "frequency": "Once daily",
        "quantity": 60,
        "clinic_quoted_price_usd": 158.00,
        "direct_pharmacy_price_usd": 86.40,
        "savings_percentage": 45.3,
        "sourcing_channel": "Chewy Pharmacy (via digital Rx transfer)"
      },
      {
        "medication": "Simparica Trio",
        "active_ingredients": "Sarolaner, Moxidectin, Pyrantel",
        "clinic_quoted_price_usd": 184.00,
        "direct_pharmacy_price_usd": 128.50,
        "savings_percentage": 30.2,
        "sourcing_channel": "Costco PetRx"
      }
    ],
    "total_clinic_quote_usd": 342.00,
    "total_optimized_cost_usd": 214.90,
    "net_patient_savings_usd": 127.10
  },
  "insurance_arbitration": {
    "carrier": "Lemonade Pet",
    "policy_deductible_remaining_usd": 100.00,
    "coverage_rate": 0.80,
    "pre_existing_exclusion_risk": "LOW",
    "claim_dossier_status": "PACKAGED_AND_READY_FOR_SUBMISSION",
    "estimated_reimbursement_usd": 91.92
  },
  "preventative_longevity_stack": {
    "joint_health": "Recommended addition of 1,200mg EPA/DHA Omega-3 + 500mg UC-II Undenatured Type II Collagen",
    "monitoring_cadence": "Annual orthopedic evaluation + baseline SDMA kidney profile at age 6"
  },
  "action_gate": {
    "rx_transfer_letter_ready": true,
    "one_tap_pharmacy_dispatch": true,
    "insurance_claim_staged": true,
    "status": "AWAITING_USER_APPROVAL"
  }
}
```

---

## Usage Guide & Workflow

1. **Veterinary Visit Follow-Up**:
   - Take a photo of the veterinary bill or prescription slip and send it to your assistant on WhatsApp/Telegram:
     *"Here is Cooper's vet invoice from today. Can you check if we can get his Apoquel cheaper and file our Lemonade claim?"*
2. **Prescription Arbitrage & Generic Audit**:
   - ZenPet parses the dosages, confirms safety against genetic records, and generates an interactive pricing comparison card showing direct pharmacy savings.
3. **One-Tap Prescription Transfer**:
   - With one tap, ZenPet generates and dispatches an official prescription transfer mandate to the clinic and queues order delivery through Chewy or Costco PetRx.
4. **Seamless Insurance Claim Submission**:
   - ZenPet compiles the invoice, medical notes, and diagnostic results into a complete claim submission, monitoring approval status and contesting unwarranted denials.

---

## Operational & Veterinary Safety Boundaries

- **Toxicity & Emergency Non-Interference**: If acute poisoning (lily, xylitol, rodenticide) or life-threatening symptoms (GDV, dyspnea, acute urinary blockage) are detected, ZenPet bypasses price comparison entirely to prioritize 24/7 emergency facility routing.
- **Strict VCPR Compliance**: ZenPet does not diagnose new medical conditions de novo or prescribe controlled substances; all prescription sourcing strictly executes valid instructions from licensed veterinarians holding a valid Veterinary-Client-Patient Relationship (VCPR).
- **LegitScript Certification Guard**: Only sources pharmaceuticals from accredited, verified veterinary pharmacies holding active state board of pharmacy licensure.
