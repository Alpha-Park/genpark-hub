---
name: zentrip-ai-skill
description: Autonomous Multi-Modal Travel Itinerary Synthesis, Real-Time GDS/NDC Arbitrage, In-Trip Disruption Recovery & Cryptographic Split-Mandate Engine distilled from Mindtrip and Layla AI. Orchestrates complex spatial-temporal travel constraints, dynamic flight/hotel bookings, automated flight delay rebooking, and multi-party AP2 group expense settlement.
version: 1.0.0
license: Apache-2.0
metadata:
  category: commerce
  author: Alpha-Park
  tags:
    - travel-commerce
    - multi-modal-itinerary
    - gds-ndc-arbitrage
    - disruption-recovery
    - constraint-satisfaction
    - group-split-mandates
    - ap2-settlement
---

# ZenTrip (禅履) — Autonomous Travel & Experiential Commerce Orchestrator

## Overview

High-consideration experiential purchases—such as international travel, family holidays, and corporate retreats—represent over \$1.5 Trillion in annual consumer spend. Yet, travel remains the most fragmented and high-friction domain in consumer commerce. Travelers juggle 20+ browser tabs across airline aggregators, hotel portals, review sites, visa regulations, and local reservation queues. A single schedule change triggers a catastrophic "travelling domino effect" that invalidates downstream transfers, accommodations, and activities.

**ZenTrip (禅履)**, distilled from the pioneering architectures of **Mindtrip (`mindtrip.ai`)** and **Layla AI (`justlayla.com`)**, transforms fragmented travel planning into an autonomous, closed-loop orchestrator ("步履安详，千里同行；万绪归一，化险为夷").

ZenTrip synthesizes multi-modal inspiration into mathematically sound spatial-temporal itineraries, locks in wholesale GDS/NDC rates, monitors flights for real-time disruption auto-rerouting, and orchestrates multi-traveler group expense settlement via cryptographic Google AP2 split-payment mandates.

```
       ┌────────────────────────────────────────────────────────┐
       │         Traveler Natural Language / Visual Intent      │
       │   "Plan 7-day Kyoto trip for 4 friends, max $1,800/pp,  │
       │    mid-century aesthetic, food-focused, no red-eyes"    │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │           Spatial-Temporal Constraint Solver           │
       │  • Airport Minimum Connection Time (MCT) verification  │
       │  • Circadian jetlag curve & fatigue pacing model      │
       │  • Opening hours, dining reservation window queues     │
       │  • Visa / transit treaty compliance checks             │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │         Multi-Rail GDS / NDC Wholesale Arbitrage       │
       │  • Direct Airline NDC (IATA NDC APIs)                  │
       │  • Global Distribution Systems (Sabre / Amadeus / Bed) │
       │  • Dynamic 24-hr fare freeze & post-booking rate radar │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │     Multi-Party Consensus & AP2 Split Mandate Rail     │
       │  • A2A Peer Consensus: 4 traveler preference alignment │
       │  • Cryptographic Signed CartMandate & PaymentMandates  │
       │  • Direct merchant settlement (Zero platform markups)  │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │        In-Trip Autonomous Disruption Recovery Engine   │
       │  • ADS-B live flight tracking & gate delay radar       │
       │  • Autonomous interline rebooking upon cancellation    │
       │  • Dynamic weather fallback (indoor museum reroute)    │
       └────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

### 1. Spatial-Temporal Constraint Satisfaction Engine (CSP)
- **Multi-Leg Topological Modeling**: Treats flights, trains, hotel check-ins, dining slots, and sightseeing as interconnected nodes in a directed acyclic graph (DAG).
- **Hard & Soft Constraint Arbitrage**:
  - *Hard constraints*: International Minimum Connection Times (e.g. $\ge 90$ mins at CDG/HND), hotel 15:00 check-in/11:00 check-out boundaries, visa validity horizons, passenger passport expirations ($> 6$ months).
  - *Soft constraints*: Circadian jetlag alleviation, avoidance of red-eye departures, preferred airline loyalty alliance tiers (Star Alliance, Oneworld, SkyTeam), and traveler mobility pacing.

### 2. Multi-Rail GDS / NDC Direct Wholesale Arbitrage
- **Direct Carrier NDC Integration**: Connects directly to IATA New Distribution Capability (NDC) feeds for rich flight amenities, baggage inclusion rules, and unbundled seat selection.
- **Dynamic Fare Freeze & Price Protection**: Employs automated 24-hour fare lock mechanisms; continues tracking post-booking ticket tariff drops to re-ticket without penalties.

### 3. In-Trip Autonomous Disruption Recovery
- **Real-Time Telemetry Radar**: Continuously monitors ADS-B flight feeds, Eurocontrol/FAA ATC ground delay programs, and carrier IRROPS (Irregular Operations) broadcasts.
- **Automated Rebooking Protocol**: If a flight leg is cancelled or delayed past the connection window:
  1. Instantly queries alternate flights across interline alliance agreements;
  2. Auto-reserves hotel transit accommodation within a 5-mile airport radius;
  3. Re-sequences downstream rental car pickup and dinner reservations;
  4. Pushes an updated itinerary card directly to the traveler's WhatsApp/Telegram with one-tap confirmation.

### 4. Collaborative Multi-Party Consensus & Split AP2 Mandates
- **Group Preference Convergence**: Resolves the "endless group chat deadlock" by running an Agent-to-Agent (A2A) preference ranking loop among all trip participants.
- **Cryptographic Split-Payment Mandates**: Generates individual, signed Google AP2 `PaymentMandate` tokens bound to each participant's allocated share (e.g. 25% of the villa rental, personal flight ticket), eliminating the risk of one person floating thousands of dollars on a personal credit card.

### 5. Contextual Hyper-Local In-Trip Concierge
- **Micro-Climate Dynamic Reshuffling**: Seamlessly swaps outdoor temple walks for indoor museum exhibitions when localized precipitation is detected 3 hours in advance.
- **Reservation Sniping**: Automatically monitors cancellation queues for high-demand Michelin-starred restaurants and booked-out historical venues (e.g., TeamLab, Ghibli Park, The French Laundry), grabbing openings within milliseconds of release.

---

## Tool Definitions (MCP Schema)

```json
{
  "tools": [
    {
      "name": "synthesize_itinerary",
      "description": "Synthesizes an end-to-end multi-modal travel itinerary balancing flight connections, accommodations, activities, and budget constraints.",
      "parameters": {
        "type": "object",
        "properties": {
          "origin": { "type": "string", "description": "Departure city or IATA airport code" },
          "destination": { "type": "string", "description": "Arrival city or regional destination" },
          "date_range": {
            "type": "object",
            "properties": {
              "start_date": { "type": "string", "format": "date" },
              "end_date": { "type": "string", "format": "date" }
            },
            "required": ["start_date", "end_date"]
          },
          "travelers_count": { "type": "integer", "default": 1 },
          "budget_ceiling_usd": { "type": "number", "description": "Total budget ceiling for all components" },
          "preferences": {
            "type": "object",
            "properties": {
              "cabin_class": { "type": "string", "enum": ["economy", "premium_economy", "business", "first"] },
              "hotel_style": { "type": "string", "enum": ["boutique", "luxury", "minimalist", "resort", "budget"] },
              "pacing": { "type": "string", "enum": ["relaxed", "moderate", "intensive"] },
              "dietary_restrictions": { "type": "array", "items": { "type": "string" } }
            }
          }
        },
        "required": ["origin", "destination", "date_range", "budget_ceiling_usd"]
      }
    },
    {
      "name": "arbitrage_inventory_rates",
      "description": "Queries wholesale NDC, GDS, and direct bed-bank channels for live availability and locks in optimal rates.",
      "parameters": {
        "type": "object",
        "properties": {
          "itinerary_id": { "type": "string" },
          "enable_fare_freeze": { "type": "boolean", "default": true },
          "max_layover_hours": { "type": "number", "default": 4.0 }
        },
        "required": ["itinerary_id"]
      }
    },
    {
      "name": "generate_split_payment_mandates",
      "description": "Compiles cryptographic Google AP2 IntentMandates and PaymentMandates split proportionately across co-travelers.",
      "parameters": {
        "type": "object",
        "properties": {
          "itinerary_id": { "type": "string" },
          "participants": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "traveler_id": { "type": "string" },
                "mandate_share_ratio": { "type": "number" },
                "max_authorized_usd": { "type": "number" }
              },
              "required": ["traveler_id", "mandate_share_ratio", "max_authorized_usd"]
            }
          }
        },
        "required": ["itinerary_id", "participants"]
      }
    },
    {
      "name": "handle_travel_disruption",
      "description": "Monitors flight telemetry and automatically executes contingency rerouting, hotel vouchers, and schedule shifts.",
      "parameters": {
        "type": "object",
        "properties": {
          "booking_reference": { "type": "string" },
          "disruption_type": { "type": "string", "enum": ["flight_cancellation", "delay_exceeds_mct", "severe_weather", "illness"] },
          "auto_rebook_threshold_usd": { "type": "number", "description": "Maximum supplemental cost permitted without manual human confirmation" }
        },
        "required": ["booking_reference", "disruption_type"]
      }
    }
  ]
}
```

---

## Operational Guardrails & HITL Safety Gates

1. **Non-Refundable Tariff Warning Sentinel**: Whenever an inventory option involves strict non-refundable or non-changeable terms, ZenTrip explicitly highlights this in bold amber within the traveler's messenger, staging the booking until explicit human confirmation is received.
2. **Passport & Visa Hard Veto**: ZenTrip terminates booking workflows if the destination country enforces a mandatory visa that cannot be obtained within the departure window or if any traveler's passport expires within 6 months of the return date.
3. **Budget Overflow Kill-Switch**: In multi-party split bookings, if the sum of all individual authorizations deviates by more than \$0.01 from the wholesale master invoice, checkout is automatically frozen to prevent unexpected debit discrepancies.
