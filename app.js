/* ==========================================
   GenPark & OpenClaw Client Logic (app.js)
   Aesthetic: Kyoto Minimalist Premium Interactivity
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // 1. Ichigo Ichie - Dynamic Ambient Greeting
    initAmbientGreeting();

    // 2. Terminal Typing Simulation
    initTerminalSimulation();

    // 3. Kyoto Philosophy Tab Handler
    initPhilosophyTabs();

    // 4. Skills Catalog Registry
    initSkillsCatalog();

    // 5. Interactive SKILL.md Generator
    initSkillGenerator();
});

/* ==========================================
   1. Ichigo Ichie Ambient Greeting
   ========================================== */
function initAmbientGreeting() {
    const greetingText = document.getElementById('ichigo-ichie-greeting');
    if (!greetingText) return;

    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "A calm morning in Kyoto. Let us build with precision.";
    } else if (hour >= 12 && hour < 17) {
        greeting = "A focused afternoon. Embrace the clarity of restraint.";
    } else if (hour >= 17 && hour < 22) {
        greeting = "A peaceful evening. The gateway is quiet and ready.";
    } else {
        greeting = "Late-night stillness. Designing beautiful agent systems.";
    }

    greetingText.textContent = greeting;
}

/* ==========================================
   2. Terminal Simulator Logic
   ========================================== */
const SIMULATED_STEPS = [
    { type: 'input', text: 'openclaw gateway --start' },
    { type: 'output', text: '🦞 [OpenClaw] Core gateway daemon started successfully.' },
    { type: 'output', text: '🦞 [OpenClaw] Active session bound: https://gateway.openclaw.ai:18789' },
    { type: 'input', text: 'openclaw run-skill --name "zenchoice-ai-skill" --query "Find ANC headphones <$250"' },
    { type: 'output', text: '🛒 [ZenChoice] Intent extracted: Over-ear, ANC, long flights, budget cap $250.' },
    { type: 'output', text: '🔍 [ReviewAuditor] Crawled Reddit r/BuyItForLife & 4 retailers. Filtered 12 sponsored reviews.' },
    { type: 'input', text: 'openclaw a2a-mesh --negotiate "zenpeer-ai-skill" --peer "sarah@openclaw"' },
    { type: 'output', text: '🤝 [ZenPeer A2A] Discovered Sarah wants Bose QC. Negotiated BOGO bundle: -$56.85 each.' },
    { type: 'output', text: '🛡️ [AegisGuard] Pre-execution scan: Hallucination 0.00. Redacted physical address PII.' },
    { type: 'input', text: 'openclaw send-message --channel "whatsapp" --template "a2a_approval_card"' },
    { type: 'output', text: '💬 [Sentinel HITL] Interactive card pushed to WhatsApp: [Approve Bundle $222.15].' },
    { type: 'output', text: '✔ [Outbound] Awaiting user tap. Local credentials safely isolated in OS Vault.' }
];

async function initTerminalSimulation() {
    const terminalBody = document.getElementById('terminal-lines');
    if (!terminalBody) return;

    let stepIndex = 0;

    while (true) {
        // Find or create prompt/typing container
        let cursorLine = terminalBody.querySelector('.typing-cursor-line');
        if (!cursorLine) {
            cursorLine = document.createElement('div');
            cursorLine.className = 'terminal-line typing-cursor-line';
            cursorLine.innerHTML = `<span class="terminal-prompt">normcorn@macbook ~ % </span><span class="typing-target"></span><span class="cursor">|</span>`;
            terminalBody.appendChild(cursorLine);
        }

        const typingTarget = cursorLine.querySelector('.typing-target');
        const currentStep = SIMULATED_STEPS[stepIndex];

        if (currentStep.type === 'input') {
            // Remove cursor from previous lines if any
            typingTarget.textContent = '';
            cursorLine.style.display = 'block';

            // Simulate typing
            for (let i = 0; i < currentStep.text.length; i++) {
                typingTarget.textContent += currentStep.text[i];
                terminalBody.scrollTop = terminalBody.scrollHeight;
                await sleep(60 + Math.random() * 40);
            }

            await sleep(600); // Hold command before execution

            // Convert typing container to static line
            cursorLine.className = 'terminal-line';
            cursorLine.innerHTML = `<span class="terminal-prompt">normcorn@macbook ~ % </span><span>${currentStep.text}</span>`;
        } else {
            // Simulate output print
            const outputLine = document.createElement('div');
            outputLine.className = `terminal-line ${currentStep.text.startsWith('✔') ? 'text-success' : 'text-secondary'}`;
            outputLine.textContent = currentStep.text;
            
            // Insert output line before cursor line
            terminalBody.insertBefore(outputLine, cursorLine);
            terminalBody.scrollTop = terminalBody.scrollHeight;
            await sleep(400 + Math.random() * 300);
        }

        stepIndex = (stepIndex + 1) % SIMULATED_STEPS.length;
        
        // Reset terminal lines if it gets too full
        if (stepIndex === 0) {
            await sleep(3000);
            terminalBody.innerHTML = `
                <div class="terminal-line text-muted">Initialize OpenClaw personal gateway daemon...</div>
                <div class="terminal-line text-success">✔ Gateway bound to 127.0.0.1:18789 (Launchd active)</div>
                <div class="terminal-line text-success">✔ Connected Messengers: WhatsApp [paired], Telegram [active]</div>
            `;
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* ==========================================
   3. Philosophy Tabs Handler
   ========================================== */
function initPhilosophyTabs() {
    const tabs = document.querySelectorAll('.philosophy-tab-btn');
    const contents = document.querySelectorAll('.philosophy-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // Deactivate all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Activate target
            tab.classList.add('active');
            const targetContent = document.getElementById(`content-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

/* ==========================================
   4. Skills Registry Catalog
   ========================================== */
const SKILLS_DATABASE = [
    {
        id: 'zenchoice-ai-skill',
        name: 'zenchoice-ai-skill',
        description: 'Autonomous personal decision & shopping copilot. Executes cross-platform product research, Reddit review sentiment audit, MAUT trade-off scoring, cart staging, and tokenized checkout via local sandboxed browser.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🛒'
    },
    {
        id: 'zenprocure-ai-skill',
        name: 'zenprocure-ai-skill',
        description: 'Dedicated 0% ad curation and universal native in-chat checkout. Curated Triad paralysis-breaker, anti-sponsorship filtering, and post-purchase price-drop guarantee.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🎯'
    },
    {
        id: 'zenviba-ai-skill',
        name: 'zenviba-ai-skill',
        description: 'Scene-aware aesthetic styling and inspiration-to-shopping agent distilled from ViBA. Features personal styling room, Angel & Devil dual-persona critique, and instant Look-to-SKU procurement.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🎨'
    },
    {
        id: 'zenlumen-ai-skill',
        name: 'zenlumen-ai-skill',
        description: 'M2AI (Marketing-to-AI) & Agentic Commerce merchant infrastructure distilled from DeepLumen. Agentic Pages compiler, GEO/AEO semantic optimizer, and agent traffic attribution.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '💡'
    },
    {
        id: 'zennile-ai-skill',
        name: 'zennile-ai-skill',
        description: 'Multi-rail agent distribution and sovereign checkout gateway distilled from Nile. Context cards compiler, multi-rail ACP/UCP/MCP/Skills broadcasting, and sovereign checkout routing.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🌊'
    },
    {
        id: 'zenfermat-ai-skill',
        name: 'zenfermat-ai-skill',
        description: 'Closed-loop funnel optimization and adaptive conversion agent distilled from FERMÀT. Behavior-to-intent resolution, dynamic landing generation, and SaaS stack consolidation.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '⚡'
    },
    {
        id: 'zengenius-ai-skill',
        name: 'zengenius-ai-skill',
        description: 'Real-time PDP seller agent and sensory micro-telemetry engine distilled from Product Genius. Touchscreen/trackpad sensory analysis, in-scroll story cards, and ad intent feedback.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🧠'
    },
    {
        id: 'zenfire-ai-skill',
        name: 'zenfire-ai-skill',
        description: 'KYA (Know Your Agent) identity verification and spend-capped programmatic wallet infrastructure distilled from Skyfire. Cryptographic human delegation proofs, anti-403 WAF handshake, and virtual card/USDC dual-rail settlement.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🔥'
    },
    {
        id: 'zenrye-ai-skill',
        name: 'zenrye-ai-skill',
        description: 'Universal zero-opt-in headless checkout engine distilled from Rye. Smashes the checkout wall across any Shopify, Amazon, or open-web store via self-healing funnels, residential session relays, and dynamic coupon arbitrage.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🌾'
    },
    {
        id: 'zendream-ai-skill',
        name: 'zendream-ai-skill',
        description: 'Multimodal conversational aesthetic discovery and style vector graph engine distilled from Daydream. Multi-modal intent alignment, "Say More" iterative prompt refinement, 50+ dimension aesthetic vectors, and in-store merchant search agents.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '✨'
    },
    {
        id: 'zencart-ai-skill',
        name: 'zencart-ai-skill',
        description: 'Federated cross-merchant universal cart and dynamic price arbitrage radar distilled from Google Universal Cart and Carted. Cross-domain unified basket, live price-drop radar, knapsack shipping optimization, and automated post-purchase refund claims.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🛒'
    },
    {
        id: 'zensierra-ai-skill',
        name: 'zensierra-ai-skill',
        description: 'Deterministic action execution and autonomous post-purchase resolution agent distilled from Sierra. Operates verified schema-driven API mutations for order cancellations, shipping modifications, automated returns, and Enterprise PAP brand negotiations.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '⛰️'
    },
    {
        id: 'zenkuda-ai-skill',
        name: 'zenkuda-ai-skill',
        description: 'Web Model Context Protocol (WebMCP) client and network-tokenized payment agent distilled from Nekuda and Visa Intelligent Commerce. Bypasses Computer-Use visual scraping via navigator.modelContext tool calling and domain-bound network token settlement.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🧭'
    },
    {
        id: 'zenwild-ai-skill',
        name: 'zenwild-ai-skill',
        description: 'Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and Share of Model (SoM) command center distilled from Wildcard. Audits recommendation visibility across LLMs, mines Reddit citation graphs, and deploys agents.json manifests.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🌐'
    },
    {
        id: 'zenfirm-ai-skill',
        name: 'zenfirm-ai-skill',
        description: 'Protocol-agnostic agentic checkout broker and Merchant-of-Record (MoR) protector distilled from Firmly and Perplexity Buy with Pro. Unifies MCP, ACP, UCP, TAP, and PAP rails for native in-chat checkout with passkey authorization.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🏛️'
    },
    {
        id: 'zenphia-ai-skill',
        name: 'zenphia-ai-skill',
        description: 'Multi-dimensional value matrix and circular sustainability decision agent distilled from Phia (Phoebe Gates & Sophia Kianni). Evaluates purchases beyond flat price—scoring fabric longevity, cost-per-wear (CPW), verified ESG supply chains, and secondary market resale depreciation curves (Vestiaire/RealReal).',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🌿'
    },
    {
        id: 'zenklar-ai-skill',
        name: 'zenklar-ai-skill',
        description: 'Personal consumer financial orchestrator and liquidity guardrail agent distilled from Klarna AI Assistant. Synchronizes 0%-APR installment schedules with paycheck cycles, freezes dispute invoices during returns, and enforces anti-impulse spending guardrails.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '💎'
    },
    {
        id: 'zenman-ai-skill',
        name: 'zenman-ai-skill',
        description: 'Agent-to-human micro-procurement and physical task escrow gateway distilled from Payman AI. Enables AI shopping agents to hire verified local humans for offline inspections, in-person pickups, and real-world verifications via deterministic escrow contracts and non-LLM policy guardrails.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🤝'
    },
    {
        id: 'zenpal-ai-skill',
        name: 'zenpal-ai-skill',
        description: 'Dedicated marketplace sales agent, virtual cursor co-pilot, and bilateral collector negotiation engine distilled from Palisade (YC S26). Guides buyers through non-commodity passion goods (cards, vintage, art) with autonomous cursor navigation, cross-session memory, and fair market comps.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🏮'
    },
    {
        id: 'zenpango-ai-skill',
        name: 'zenpango-ai-skill',
        description: 'Agentic post-purchase operating system and reverse logistics arbiter distilled from Pango (YC S26). Unifies WMS, dynamic carrier routing, and customer support into an autonomous state machine with returnless refund unit economics and anti-wardrobing shields.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '📦'
    },
    {
        id: 'zenchannel-ai-skill',
        name: 'zenchannel-ai-skill',
        description: 'Universal open product knowledge graph and Model Context Protocol (MCP) search infrastructure distilled from Channel3 (YC S25). Empowers AI shopping agents with 100M+ normalized products, multimodal text/image discovery, variant de-duplication, and native affiliate attribution clearing.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🌐'
    },
    {
        id: 'zenpass-ai-skill',
        name: 'zenpass-ai-skill',
        description: 'Portable personal AI context passport and sovereign identity protocol distilled from Egoist Machines (YC S26). Eliminates agent context silos with user-owned sizing, tastes, allergies, zero-knowledge claims, and scoped "Sign in with ZenPass" permissions.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🪪'
    },
    {
        id: 'zenpact-ai-skill',
        name: 'zenpact-ai-skill',
        description: 'Autonomous bilateral algorithmic price negotiation and dynamic bargaining agent distilled from Nibble and Pactum AI. Engages merchant pricing bots in game-theoretic concession rounds with BATNA walk-away limits, non-price variable trading, and anti-gouging shields.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🤝'
    },
    {
        id: 'zenpine-ai-skill',
        name: 'zenpine-ai-skill',
        description: 'Autonomous recurring subscription auditor, dark-pattern cancellation driver, and consumer rights refund recovery agent distilled from Pine AI. Enforces FTC Click-to-Cancel rules, extracts zero-usage refund recovery, and compiles FCBA chargeback arbitration packages.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🌲'
    },
    {
        id: 'zenvoice-ai-skill',
        name: 'zenvoice-ai-skill',
        description: 'Autonomous outbound PSTN voice procurement and physical desk telephony engine distilled from Bland AI and Retell AI. Smashes the offline API void across brick-and-mortar retail, local pharmacies, and service desks via sub-600ms speech turn-taking, in-store stock hold negotiation, and live messenger drop-in handoff.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '📞'
    },
    {
        id: 'zenkinect-ai-skill',
        name: 'zenkinect-ai-skill',
        description: 'Dual-surface omnichannel merchant engine and real-time objection resolver distilled from Kinect (YC Spring 2026). Dynamically splits storefronts into human-facing adaptive visual PDP storytelling and machine-facing low-token agent context endpoints with zero-hallucination engineering specs.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '⚡'
    },
    {
        id: 'zenmandate-ai-skill',
        name: 'zenmandate-ai-skill',
        description: 'Cryptographic Intent Mandate & Agent Payments Protocol (AP2) engine distilled from Google Agentic Commerce AP2 and Agentcard. Enforces mathematical proof-of-intent, SD-JWT selective disclosure, three-tier mandate lifecycles (IntentMandate, CartMandate, PaymentMandate), passkey biometric delegation, and multi-rail payment execution without probabilistic hallucinations.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '📜'
    },
    {
        id: 'zenzoma-ai-skill',
        name: 'zenzoma-ai-skill',
        description: 'Enterprise Agentic Commerce Optimization (ACO) and Synthetic Shopper Simulation engine distilled from Azoma (Ecomtent). Implements the 5 Cs framework (Completeness, Context, Citations, Correctness, Customer Acquisition), Digital Twin shopper persona simulations across ChatGPT, Gemini, Rufus, and Sparky, and automated LLM hallucination correction manifests.',
        category: 'marketing',
        developer: '@Alpha-Park',
        logo: '🎯'
    },
    {
        id: 'zenrindler-ai-skill',
        name: 'zenrindler-ai-skill',
        description: 'Universal Web-to-MCP State Machine Compiler & Deterministic Agent Tooling engine distilled from Rindler (YC Summer 2026). Transforms arbitrary non-API websites into strongly typed, remote Model Context Protocol (MCP) server endpoints with self-healing DOM state-action graphs, sub-200ms headless execution, and 95% token cost reduction over visual computer-use.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🛤️'
    },
    {
        id: 'zentrip-ai-skill',
        name: 'zentrip-ai-skill',
        description: 'Autonomous Multi-Modal Travel Itinerary Synthesis, Real-Time GDS/NDC Arbitrage, In-Trip Disruption Recovery & Cryptographic Split-Mandate Engine distilled from Mindtrip and Layla AI. Orchestrates complex spatial-temporal travel constraints, dynamic flight/hotel bookings, automated flight delay rebooking, and multi-party AP2 group expense settlement.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🧳'
    },
    {
        id: 'zenpantry-ai-skill',
        name: 'zenpantry-ai-skill',
        description: 'Autonomous Domestic Pantry Depletion Modeling, Nutritional Macro Constraint Solver & Zero-Waste Grocery Replenishment Engine distilled from Hungryroot and Jow. Models kitchen inventory depletion curves, optimizes weekly dinner plans under dietary/allergen constraints, clusters perishables to eliminate food waste, and stages federated 1-click grocery fulfillment.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🥫'
    },
    {
        id: 'zenfit-ai-skill',
        name: 'zenfit-ai-skill',
        description: 'Autonomous Cross-Brand Garment Sizing, 3D Morphometric Body Vector Prediction & Zero-Return Fit Arbiter distilled from Bold Metrics and True Fit. Computes 50+ anatomical body measurements from lightweight anchors, calculates garment CAD ease distribution matrices across 15,000+ fashion brands, neutralizes vanity sizing deviations, and acts as a pre-checkout sizing gatekeeper to guarantee 99.2% fit confidence.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '📐'
    },
    {
        id: 'zenpoint-ai-skill',
        name: 'zenpoint-ai-skill',
        description: 'Autonomous Credit Card Category Multiplier, Loyalty Rewards Arbitrage & Transfer Partner Points Optimization Engine distilled from Point.me and Kudos. Analyzes merchant MCC codes, auto-activates card-linked cashback offers, computes Cents-Per-Point (CPP) redemption arbitrage against cash prices, and routes transactions to maximize economic yield across credit cards, airline miles, and hotel points.',
        category: 'finance',
        developer: '@Alpha-Park',
        logo: '💳'
    },
    {
        id: 'zengift-ai-skill',
        name: 'zengift-ai-skill',
        description: 'Autonomous Social Gifting, Relationship Milestone Sentinel & Addressless Privacy-First Gifting Engine distilled from Goody and Giftpack AI. Tracks personal relationship milestones, synthesizes hyper-personalized gift recommendations under dietary/lifestyle safeguards, dispatches zero-address magic gift links via WhatsApp/Telegram/email, and allows recipients to select their delivery address, size/color variant, or equal-value swaps before payment commitment.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🎁'
    },
    {
        id: 'zenward-ai-skill',
        name: 'zenward-ai-skill',
        description: 'Autonomous Warranty Guardian, Credit Card Purchase Protection Arbitrage & 1-Click Repair Claim Engine distilled from Mulberry and Extend. Neutralizes predatory retail checkout warranty upsells, indexes manufacturer and credit card complimentary extended warranty coverages, monitors CPSC product recalls, and compiles automated evidence packets to recover 100% repair or replacement reimbursements.',
        category: 'finance',
        developer: '@Alpha-Park',
        logo: '🛡️'
    },
    {
        id: 'zenauto-ai-skill',
        name: 'zenauto-ai-skill',
        description: 'Autonomous Automotive Procurement, Days-on-Lot Inventory Telemetry, Deceptive Dealer Add-On Stripper, MMR Wholesale Auction Benchmarking & Binding Out-the-Door (OTD) Price Negotiation Engine distilled from CarEdge and CoPilot. Isolates dealer floorplan aging leverage, audits factory Monroney window stickers, eliminates predatory dealer fees, protects trade-in equity, and pits regional dealerships against each other via anonymous RFQs.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🚗'
    },
    {
        id: 'zenvital-ai-skill',
        name: 'zenvital-ai-skill',
        description: 'Autonomous Biomarker Nutrition, Bioavailability Form Audit & Longevity Supplement Procurement Engine distilled from Function Health and InsideTracker. Synthesizes 100+ longitudinal lab biomarkers, audits chemical bioavailability, verifies USP/NSF third-party purity, eliminates absorption antagonisms, and synchronizes supplement procurement with 180-day blood re-test cadences.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🧬'
    },
    {
        id: 'zenfix-ai-skill',
        name: 'zenfix-ai-skill',
        description: 'Autonomous Home Maintenance, Diagnostic Repair & Appliance Lifecycle Commerce Engine distilled from Frontdoor, Streem & iFixit. Multimodal visual/acoustic fault isolation, exploded OEM CAD schematic resolution, 50% economic repairability lifecycle arbitration, RSMeans standardized labor rate audit, direct-to-part wholesale procurement, and AP2 milestone escrow pay-on-proof.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🔧'
    },
    {
        id: 'zentap-ai-skill',
        name: 'zentap-ai-skill',
        description: 'Visa Trusted Agent Protocol (TAP) & RFC 9421 Cryptographic HTTP Message Signature Engine. Eliminates false-positive bot blocks, verifies agent identity via open registries, binds requests to human IntentMandates, and unlocks frictionless merchant CDN fast-tracks.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🔏'
    },
    {
        id: 'zen402-ai-skill',
        name: 'zen402-ai-skill',
        description: 'HTTP 402 Machine-Native Micropayments & On-Chain Resource Settlement Engine distilled from Linux Foundation x402 and Coinbase. Autonomous handling of 402 Payment Required challenges, sub-cent stablecoin micropayments (USDC on Base/Solana), and instant pay-per-call API access without subscriptions.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🪙'
    },
    {
        id: 'zenbill-ai-skill',
        name: 'zenbill-ai-skill',
        description: 'Autonomous Medical Bill Audit, CPT/HCPCS Upcoding Stripper, CMS Price Transparency MRF Benchmarking & No Surprises Act Legal Arbitration Engine distilled from Goodbill, Turquoise Health & Healthcare Bluebook. Ingests itemized hospital bills, detects unbundled codes and phantom room charges, cross-references federal machine-readable price files, evaluates IRS Section 501(r) non-profit hospital charity care write-offs, and compiles statutory dispute packages.',
        category: 'finance',
        developer: '@Alpha-Park',
        logo: '🏥'
    },
    {
        id: 'zentax-ai-skill',
        name: 'zentax-ai-skill',
        description: 'Autonomous Property Tax Assessment Appeal, Automated Mass Appraisal (AMA) Error Detection, Comparable Sales ML Adjustment & Uniform Equity Arbitration Engine distilled from Ownwell & TaxProper. Ingests county tax parcel records, detects building characteristic discrepancies, runs paired sales comparable adjustments, computes assessment-to-market equity ratios, and compiles formal Appraisal Review Board (ARB) appeal packets.',
        category: 'finance',
        developer: '@Alpha-Park',
        logo: '🏛️'
    },
    {
        id: 'zenforge-ai-skill',
        name: 'zenforge-ai-skill',
        description: 'Autonomous Hardware Engineering BOM Procurement, Multi-Distributor Real-Time Pricing Synthesis, Pin-Compatible Component Alternate Arbitrage & Lifecycle Obsolescence (EOL/NRND) Sentinel distilled from Waybill (YC S26). Ingests engineering BOMs (Altium, KiCad), queries live distributor stocks (DigiKey, Mouser, LCSC), resolves stockouts via parametric drop-in alternates, and optimizes multi-vendor shipments into minimum-cost freight knapsacks.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '⚡'
    },
    {
        id: 'zenpower-ai-skill',
        name: 'zenpower-ai-skill',
        description: 'Autonomous Dynamic Energy Arbitrage, Real-Time Wholesale Spot Tariff Optimization (RTP/TOU), Distributed Residential Battery Dispatch & Bidirectional EV (V2H/V2G) Grid Settle Engine distilled from Octopus Energy (Kraken) and Enphase Energy.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '⚡'
    },
    {
        id: 'zenmux-ai-skill',
        name: 'zenmux-ai-skill',
        description: 'Autonomous MCP Tool Capability Marketplace, Runtime Dynamic Tool Router, Pay-per-Call Universal Wallet & Fault-Tolerant Circuit Breaker Multiplexer distilled from Amorphic Labs (Agentmuxer, YC S26). Connects personal decision agents to on-demand external tools with zero SaaS subscription setup, pay-per-call micro-debits, and sub-50ms multi-provider fallback.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🎛️'
    },
    {
        id: 'zenproof-ai-skill',
        name: 'zenproof-ai-skill',
        description: 'Autonomous Proof-of-Human Delegation, Zero-Knowledge Biometric Unicity Proofs, Anti-Sybil Semaphore Nullifiers & CAPTCHA-Bypass Protocol distilled from World ID for Agents (AgentKit, World ID 4.0 & AgentBook). Empowers personal agents to prove unique human authorization, bypass edge WAF CAPTCHAs, and guarantee 1-person-1-drop allocation privacy.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '👁️‍🗨️'
    },
    {
        id: 'zensure-ai-skill',
        name: 'zensure-ai-skill',
        description: 'Autonomous Insurance Policy Re-Shopping, Declarations Page (Dec-Page) OCR Ingestion, Algorithmic Price Optimization Surcharge Neutralizer, Mid-Term Switching & Pro-Rata Refund Engine distilled from CoverageCat and Jerry. Ingests P&C policy declaration pages, normalizes coverage limits (100k/300k/100k, deductibles), queries multi-carrier rating APIs for identical loss-leader tiers, automatically executes mid-term carrier switching, and reclaims unearned pro-rata premium refunds.',
        category: 'finance',
        developer: '@Alpha-Park',
        logo: '🛡️'
    },
    {
        id: 'zenplea-ai-skill',
        name: 'zenplea-ai-skill',
        description: 'Autonomous Consumer Debt Lawsuit Defense, Summons & Complaint OCR, Statute of Limitations (SOL) Affirmative Defense, Debt Buyer Chain-of-Title Sentry & Formal Court Answer Filing Engine distilled from SoloSuit, DoNotPay & Dispute. Ingests debt collection court summons, verifies time-barred statutory debt expiration, challenges third-party standing (Midland/Portfolio/Encore), compiles formal court-compliant verified answers with affirmative defenses, and weaponizes FDCPA violations into debt dismissals.',
        category: 'finance',
        developer: '@Alpha-Park',
        logo: '⚖️'
    },
    {
        id: 'zenpet-ai-skill',
        name: 'zenpet-ai-skill',
        description: 'Autonomous Companion Animal Health Profile, Veterinary Prescription Direct-Sourcing & Insurance Claim Dispute Sentinel distilled from Chewy Pharmacy, Dutch, Wisdom Panel & Lemonade Pet. Parses veterinary SOAP notes, audits active pharmacological bioequivalence, eliminates clinic drug markups (40%-65% savings), screens breed genetic mutations (MDR1/HCM/IVDD), automates pet insurance claim compilation, and provides emergency triage decisioning.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🐾'
    },
    {
        id: 'zenclaim-ai-skill',
        name: 'zenclaim-ai-skill',
        description: 'Autonomous Airline Flight Delay, Cancellation Compensation & Passenger Rights Arbitrage Agent distilled from AirHelp, Flightright & ClaimCompass. Parses PNR & boarding passes, cross-references ADS-B telemetry and METAR weather records to dismantle fraudulent airline weather excuses, calculates EU261 €600, US DOT mandatory cash refunds, and Montreal Convention baggage compensations, enforces voucher rejection, and dispatches formal statutory demand letters directly to airline compliance portals.',
        category: 'finance',
        developer: '@Alpha-Park',
        logo: '✈️'
    },
    {
        id: 'zenlease-ai-skill',
        name: 'zenlease-ai-skill',
        description: 'Autonomous Housing Tenant Rights, Security Deposit Recovery & Habitability Repair Enforcement Agent distilled from Tenantcube, JustFix, RentersRights.ai & Roost. Enforces statutory deposit return deadlines (14-30 days), audits deductions against normal wear-and-tear using HUD useful life depreciation tables, triggers bad-faith treble damages (2x-3x), generates certified pre-litigation demand notices, and enforces habitability notices to cure.',
        category: 'finance',
        developer: '@Alpha-Park',
        logo: '🏠'
    },
    {
        id: 'zenbridge-ai-skill',
        name: 'zenbridge-ai-skill',
        description: 'Hybrid Personal Agent Protocol (PAP) and Resident Browser Bridge. Standardized OAuth merchant handshake with seamless resident browser fallback.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '⚡'
    },
    {
        id: 'zenpeer-ai-skill',
        name: 'zenpeer-ai-skill',
        description: 'Agent-to-Agent (A2A) peer negotiation protocol. Decentralized collective buying arbitrage, zero-knowledge schedule alignment, and P2P expense splitting.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🤝'
    },
    {
        id: 'aegis-guard-skill',
        name: 'aegis-guard-skill',
        description: 'Active Detective runtime security and PII shield. Real-time in-flight hallucination suppression, PII address redaction, and spending boundary firewall.',
        category: 'analytics',
        developer: '@Alpha-Park',
        logo: '🛡️'
    },
    {
        id: 'trooly-ai-skill',
        name: 'trooly-ai-skill',
        description: 'Qualitative customer research and customer empathy engine. Automates scraping of qualitative feedback and builds in-depth persona blueprints.',
        category: 'analytics',
        developer: '@alphaparkinc',
        logo: '🔍'
    },
    {
        id: 'mktflywheel-ai-skill',
        name: 'mktflywheel-ai-skill',
        description: 'Automated Chief Marketing Officer (CMO) agent loop. Bulk plans campaign structures, distributes cross-channel copy, and performs keyword research.',
        category: 'marketing',
        developer: '@alphaparkinc',
        logo: '🚀'
    },
    {
        id: 'character-ai-skill',
        name: 'character-ai-skill',
        description: 'Advanced roleplay, customer-support agent simulator, and deep character customization pipeline running in sandboxed system spaces.',
        category: 'analytics',
        developer: '@krispang',
        logo: '🎭'
    },
    {
        id: 'nexad-ai-skill',
        name: 'nexad-ai-skill',
        description: 'Automate multi-variant creative copywriting and creative asset structure variations testing. Direct ad copy optimizations.',
        category: 'marketing',
        developer: '@alphaparkinc',
        logo: '📢'
    },
    {
        id: 'swap-commerce-skill',
        name: 'swap-commerce-skill',
        description: 'Autonomous commerce coordinator. Manages catalog synchronization, cross-border tax adjustments, and returns routing.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '💳'
    },
    {
        id: 'tradingagents-skill',
        name: 'tradingagents-skill',
        description: 'Algorithmic trading decision harness. Simulates agent trades and monitors technical triggers locally before executing order loops.',
        category: 'analytics',
        developer: '@Alpha-Park',
        logo: '📈'
    }
];

function initSkillsCatalog() {
    const grid = document.getElementById('skills-grid-container');
    const searchInput = document.getElementById('skills-search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (!grid) return;

    // Render skills database initial state
    renderSkills(SKILLS_DATABASE);

    // Bind search typing events
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filterAndRenderSkills();
        });
    }

    // Bind category filters
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterAndRenderSkills();
        });
    });

    function filterAndRenderSkills() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeFilterBtn = document.querySelector('.filter-btn.active');
        const categoryFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';

        const filtered = SKILLS_DATABASE.filter(skill => {
            const matchesQuery = skill.name.toLowerCase().includes(query) || 
                                 skill.description.toLowerCase().includes(query) ||
                                 skill.developer.toLowerCase().includes(query);
            const matchesCategory = categoryFilter === 'all' || skill.category === categoryFilter;
            
            return matchesQuery && matchesCategory;
        });

        renderSkills(filtered);
    }

    function renderSkills(list) {
        grid.innerHTML = '';

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="terminal-line text-muted" style="grid-column: 1 / -1; text-align: center; padding: 40px 0;">
                    No skills matched the active search constraints. Try clear query or filters.
                </div>
            `;
            return;
        }

        list.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-registry-card';
            card.setAttribute('data-id', skill.id);
            card.innerHTML = `
                <div class="skill-card-header">
                    <span class="skill-card-badge ${skill.category}">${skill.category}</span>
                    <span class="skill-card-logo">${skill.logo}</span>
                </div>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
                <div class="skill-card-footer">
                    <span class="skill-card-developer">${skill.developer}</span>
                    <span class="skill-card-action" onclick="loadSkillToGenerator('${skill.id}')">
                        <span>Load Builder</span>
                        <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
                    </span>
                </div>
            `;
            grid.appendChild(card);
        });

        // Recreate Lucide Icons on newly rendered cards
        lucide.createIcons();
    }
}

// Global scope loader hook to let cards set the generator values
window.loadSkillToGenerator = function(skillId) {
    const skill = SKILLS_DATABASE.find(s => s.id === skillId);
    if (!skill) return;

    const nameInput = document.getElementById('skill-name');
    const descInput = document.getElementById('skill-desc');
    const capInput = document.getElementById('skill-capabilities');
    const guideInput = document.getElementById('skill-guidelines');

    if (nameInput) nameInput.value = skill.name;
    if (descInput) descInput.value = skill.description;

    // Custom skills map properties to inputs
    if (skillId === 'zenchoice-ai-skill') {
        if (capInput) capInput.value = "Intent Profiler: Parse implicit user constraints and long-term shopping preferences\nReview Auditor: Scrape live web pricing and Reddit/forum sentiment to filter fake reviews\nDecision Matrix: Rank items via MAUT (Price, Quality, Shipping, Returns)\nReflexion Loop: Self-correct on stockouts, dynamic shipping fees, and coupon failure\nCart Stager & HITL Gate: Stage checkout and push 1-tap confirmation card to WhatsApp/Telegram\nResident Session: Emulate authentic browser cookies to bypass merchant anti-bot blocks";
        if (guideInput) guideInput.value = "Maintain all credentials strictly within OS local keychain / vault\nEnforce Sentinel HITL confirmation before any payment execution\nAudit merchant price history and verify return policy limits\nLog decision rationale and user feedback to local memory store";
    } else if (skillId === 'zenprocure-ai-skill') {
        if (capInput) capInput.value = "Anti-Ad Filter: 100% elimination of sponsored listings and affiliate bias\nCurated Triad: Synthesize Benchmark, Pragmatist, and Enthusiast picks\nUniversal Checkout: Headless 1-tap checkout directly in chat\nPrice-Drop Guardian: Post-purchase refund claim and return label automation";
        if (guideInput) guideInput.value = "Strictly refuse commercial affiliate kickbacks or sponsored ranking manipulation\nAlways highlight core durability trade-offs for each curated option\nOnly commit universal checkout after explicit single-tap approval in messenger";
    } else if (skillId === 'zenviba-ai-skill') {
        if (capInput) capInput.value = "Scene Context Encoder: Translate real-life occasions, weather, and dress codes into vibe vectors\nDual-Persona Stylist: Angel (affirmative validation) & Devil (brutal honesty roast) fashion critique\nVirtual Styling Room: Assemble multi-layered outfits adhering to visual harmony rules\nLook-to-SKU Mapper: Resolve aesthetic moodboards to shoppable merchant SKUs via zenlumen & zenprocure\nVibe Journal Tracker: Maintain private local aesthetic taste evolution vector in OpenClaw storage";
        if (guideInput) guideInput.value = "Preserve private outfit selfies and body metrics strictly within local OpenClaw storage\nFilter fashion recommendations to verified authentic merchant inventory with zero ad bias\nProvide side-by-side Angel and Devil critiques before triggering staged checkout cards\nEnsure selected garment silhouettes match user comfort and occasion formality boundaries";
    } else if (skillId === 'zenlumen-ai-skill') {
        if (capInput) capInput.value = "Agentic Page Compiler: Transform storefront into token-efficient /agentic/ shadow catalog\nGEO/AEO Optimizer: Inject Schema.org JSON-LD and comparative benchmark tables\nPAP Endpoint Synthesizer: Auto-deploy /.well-known/poppy.json OAuth manifest\nAgent Traffic Attributor: Track headless AI crawler visits and agentic GMV conversion\nSmart Agent Firewall: Protect bandwidth and pricing while welcoming verified buyer agents";
        if (guideInput) guideInput.value = "Compile shadow endpoints with zero CSS/JS presentation overhead\nEnsure landed cost includes real-time tax and shipping commitments\nVerify PAP merchant certificates and refresh Poppy schema weekly\nMaintain strict local audit logging for incoming agent queries";
    } else if (skillId === 'zennile-ai-skill') {
        if (capInput) capInput.value = "Context Card Compiler: Structure raw catalog feeds into high-density 'Who it's for, When to recommend, Why it fits' vectors\nMulti-Rail Distributor: Broadcast product endpoints across ACP, UCP, MCP, and Agent Skills rails\nSovereign Checkout Router: Enforce headless checkout handoff directly to merchant's domain\nAgent Attribution Engine: Track LLM referral traffic, prompt intent categorizations, and GEO rankings";
        if (guideInput) guideInput.value = "Maintain context card payload size below 400 tokens per SKU\nAlways preserve sovereign checkout routing without third-party commission hijacking\nRefresh inventory levels and pricing across all broadcast rails within 10 minutes\nKeep customer identity and payment tokens strictly within merchant's native store";
    } else if (skillId === 'zenfermat-ai-skill') {
        if (capInput) capInput.value = "Shopper Intent Resolver: Unify upstream ad angles with on-site micro-behavior to uncover purchase barriers\nRevenue Recovery Ranker: Prioritize high-yield funnel mutations and component adjustments\nDynamic Experience Synthesizer: Generate brand-native, 1:1 tailored landing pages in under 50ms\nClosed-Loop Governor: Run multi-armed bandit allocations and consolidate fragmented CRO SaaS stacks";
        if (guideInput) guideInput.value = "Enforce strict compliance with merchant design tokens and brand typography\nMaintain sub-50ms latency for edge hydration to eliminate cumulative layout shifts\nRequire 95%+ statistical significance before locking in winning experience variants\nProvide clear visual diffs for all AI-generated storefront adjustments";
    } else if (skillId === 'zengenius-ai-skill') {
        if (capInput) capInput.value = "Sensory Telemetry Engine: Capture millisecond linger and skip velocity on trackpad and touchscreens\nStory Card Sequencer: Dynamically sequence artisan heritage, lab proof, and upsell cards inside scroll streams\nIn-Scroll Search Harness: Embed proactive semantic discovery pills directly inside natural scroll flow\nAd Telemetry Bridge: Feed high-fidelity AI session intent scores back to Meta CAPI and Google Ads";
        if (guideInput) guideInput.value = "Execute sensory event listeners client-side with zero main-thread blocking (<5ms)\nVerify that all story card claims reflect authentic merchant specifications\nCapture interaction telemetry anonymously without storing biometrics or keystrokes\nBlend cards naturally into vertical scroll without intrusive modal popups";
    } else if (skillId === 'zenfire-ai-skill') {
        if (capInput) capInput.value = "KYA Identity Attester: Issue cryptographic proof-of-delegation tokens bound to human principal\nProgrammatic Budget Wallet: Sandbox funds with hard transaction ceilings and merchant whitelists\nAnti-403 Gateway Negotiator: Transmit X-Agent-KYA-Token headers to satisfy merchant WAF anti-bot checks\nCrypto Transaction Auditor: Maintain append-only cryptographic ledger and dispatch real-time mobile push notifications";
        if (guideInput) guideInput.value = "Instantly abort transaction if total exceeds authorized ceiling by even $0.01\nKeep private keys and master card seeds strictly within OS local Secure Enclave\nRequire interactive dual-HITL approval on paired messenger for transactions over $100.00\nImmediately revoke and destroy ephemeral payment tokens upon order confirmation";
    } else if (skillId === 'zenrye-ai-skill') {
        if (capInput) capInput.value = "Universal Product Resolver: Parse variant IDs, live stock, and base pricing across any arbitrary e-commerce URL\nSelf-Healing Checkout Driver: Navigate dynamic checkout DOMs, payment iframes, and address forms autonomously\nResidential Session Relay: Route requests via resident browser profiles to neutralize bot heuristics\nCost and Coupon Arbitrageur: Auto-test verified merchant discount codes and calculate exact zip-code tax/shipping";
        if (guideInput) guideInput.value = "Strictly enforce max-authorized price ceilings before final checkout submission\nAlways dispatch interactive approval card with full landed cost to messenger prior to ordering\nCapture confirmed order ID, tracking URL, and merchant receipt PDF directly to user thread\nNever log plain-text CVV or raw payment credentials in unencrypted storage";
    } else if (skillId === 'zendream-ai-skill') {
        if (capInput) capInput.value = "Multimodal Aesthetic Seeker: Translate natural language prompts and reference photos into structured style vectors\nSay More Refinement Engine: Dynamically steer recommendations via conversational feedback in <50ms\nAesthetic Vector Graph: Deconstruct SKUs into 50+ dimensional sensory and silhouette attributes\nIn-Store Search SDK: Replace static merchant search bars with brand-native conversational AI stylists";
        if (guideInput) guideInput.value = "Maintain 100% taste-neutral recommendations without commercial placement bias\nKeep vector mutation latency below 50ms for instantaneous conversational feedback\nAnalyze user selfies and moodboard photos strictly within local OpenClaw enclave\nHand off confirmed candidate SKUs directly to zenrye or zenprocure for one-tap checkout";
    } else if (skillId === 'zencart-ai-skill') {
        if (capInput) capInput.value = "Federated Cart Manager: Maintain unified real-time cart state across Shopify, Amazon, and DTC stores\nPrice-Drop Radar: Continuously monitor historical price baselines and alert on genuine flash sales\nKnapsack Shipping Optimizer: Solve multi-merchant split orders to hit free-shipping tiers and maximize coupon stacking\nPost-Purchase Price Arbitrageur: Auto-monitor 14/30-day merchant price guarantees and claim automated refunds";
        if (guideInput) guideInput.value = "Require explicit HITL confirmation on paired WhatsApp/Telegram before any multi-store purchase\nRe-verify merchant inventory and variant availability within 60s before order dispatch\nSecure all cart sessions, receipts, and order tracking links in local encrypted storage\nFilter price-drop alerts to genuine discounts exceeding 10% or $15.00 to prevent notification fatigue";
    } else if (skillId === 'zensierra-ai-skill') {
        if (capInput) capInput.value = "Deterministic Action Engine: Execute binding API mutations for order cancellations, address changes, and subscription pauses\nAutomated Return Arbitrator: Interpret return policies, generate instant QR/carrier return labels, and monitor refunds\nEnterprise PAP Client: Engage in cryptographic Agent-to-Agent negotiation with brand customer support agents\nNon-Hallucinatory Outcome Auditor: Commit actions only upon verified HTTP receipts and maintain append-only resolution ledger";
        if (guideInput) guideInput.value = "Enforce zero hallucination tolerance; require verified API receipts before reporting order status\nValidate merchant return window eligibility before filing dispute or return requests\nSecurely archive dispute resolution audit trails in local OpenClaw encrypted storage\nAlert operator immediately if merchant requires human-in-the-loop escalation or identity re-verification";
    } else if (skillId === 'zenkuda-ai-skill') {
        if (capInput) capInput.value = "WebMCP Tool Inspector: Interrogate navigator.modelContext for in-page client tool definitions\nSynthetic DOM Polyfill: Inject executable client adapters on legacy storefronts to expose structured tools\nNetwork Token Transactor: Acquire domain-bound Visa/Mastercard network cryptograms and transmit directly to gateways\nSession State Synchronizer: Maintain shared cart and cookie states seamlessly across mobile and desktop daemons";
        if (guideInput) guideInput.value = "Prioritize navigator.modelContext native tools over visual computer-use and heuristic DOM clicking\nBind payment network tokens strictly to destination merchant domain and transaction ceiling\nNever cache or expose plain-text primary account numbers (PAN) or CVVs in memory or logs\nKeep tool invocation latency under 100ms to guarantee instantaneous user response";
    } else if (skillId === 'zenwild-ai-skill') {
        if (capInput) capInput.value = "Share of Model Radar: Audit brand recommendation rank and sentiment across ChatGPT, Claude, Rufus, and Perplexity\nCitation Graph Miner: Reverse-engineer Reddit, review sites, and YouTube discussions driving competitor agent recommendations\nAgents.json Synthesizer: Deploy and maintain standard /.well-known/agents.json machine-readable manifests\nPDP Attribute Enricher: Auto-inject 40+ structured Schema.org attributes to prevent agent retrieval disqualification";
        if (guideInput) guideInput.value = "Adhere strictly to white-hat citation and attribute surfacing without synthetic review manipulation\nValidate agents.json and Schema.org JSON-LD syntax against W3C linters before live deployment\nPerform weekly Share of Model benchmarking to track foundation model weight updates\nExpose verified inventory and return policies directly to AI buyer agents via open endpoints";
    } else if (skillId === 'zenfirm-ai-skill') {
        if (capInput) capInput.value = "Universal Protocol Broker: Transpile between MCP, ACP, UCP, TAP, and PAP commerce standards\nIn-Chat Checkout Engine: Render compact interactive checkout cards and execute 1-tap purchases in messenger\nMerchant MoR Protector: Ensure merchant retains Merchant of Record status, direct customer LTV, and CRM ownership\nPasskey Biometric Gate: Authorize transaction settlement via device-bound FIDO2 credentials in <400ms";
        if (guideInput) guideInput.value = "Maintain absolute protocol neutrality without forcing proprietary vendor lock-in\nRoute customer payments directly to merchant-owned accounts to safeguard brand sovereignty\nRequire explicit biometric passkey confirmation on paired mobile messenger before finalizing transactions\nEnsure full landed cost (tax, shipping, duties) is verified within 500ms before settlement";
    } else if (skillId === 'zenphia-ai-skill') {
        if (capInput) capInput.value = "True Value Matrix: Evaluate purchases across price integrity, material durability, ESG verification, and net cost-per-wear (CPW)\nSecondary Resale Forecaster: Model 3-year depreciation curves based on millions of Vestiaire, RealReal, and Poshmark transactions\nGreenwashing Shield: Audit marketing claims against third-party certifications (OEKO-TEX, GOTS, B-Corp) with zero tolerance for fake eco-tags\nEthical Dupe Engine: Discover affordable, responsibly crafted alternatives to luxury items without resorting to sweatshop knockoffs";
        if (guideInput) guideInput.value = "Reject flat-price bias; always calculate realized Cost-Per-Wear (CPW) and residual liquidation value\nPenalize brand claims lacking cryptographic or accredited third-party ESG certification\nAlert users to secondary market liquidity and projected salvage depreciation before checkout\nStore all wardrobe profiles, sizing, and style preferences encrypted within OpenClaw local vault";
    } else if (skillId === 'zenklar-ai-skill') {
        if (capInput) capInput.value = "Liquidity Schedule Router: Align 0%-APR 4-installment payment schedules with verified income paycheck deposit dates\nDispute Freeze Engine: Issue binding hold requests to payment gateways upon order return or merchant dispute initiation\nFX & VAT Free Arbitrageur: Neutralize predatory Dynamic Currency Conversion (DCC) markups and auto-compile digital VAT refund forms\nFinancial Wellness Sentinel: Enforce 30-day discretionary spending ceilings and mandatory cooling-off periods on impulse purchases";
        if (guideInput) guideInput.value = "Prioritize 0%-APR financing and never recommend predatory revolving credit or penalty-prone debt\nKeep all bank balances, income schedules, and credit thresholds encrypted strictly in local hardware vault\nTrigger instant payment pause (hold_intent) the moment zensierra logs an order cancellation or return\nReject merchant DCC conversion proposals in favor of native interbank clearing rates";
    } else if (skillId === 'zenman-ai-skill') {
        if (capInput) capInput.value = "Human Task Dispatcher: Decompose physical in-store inspections, pickups, and verifications into geo-fenced micro-gigs\nDeterministic Escrow Engine: Lock bounty funds in programmatic smart escrow until multi-modal proof is validated\nAgent Financial Firewall: Enforce non-LLM hard spending limits, payee whitelists, and anti-jailbreak transaction ceilings\nImmutable Proof Ledger: Anchor user commands, contractor signatures, and GPS-tagged proof photos in tamper-proof store";
        if (guideInput) guideInput.value = "Never grant probabilistic LLMs direct transfer authority; all disbursements must pass the non-LLM policy firewall\nRequire cryptographically verified multi-modal evidence (GPS EXIF + store receipt OCR) before escrow release\nRoute high-bounty tasks (> $50.00) to paired mobile messenger for interactive human-in-the-loop signoff\nStore all tasker communications and location data strictly within local OpenClaw encrypted storage";
    } else if (skillId === 'zenpal-ai-skill') {
        if (capInput) capInput.value = "Virtual Cursor Co-Pilot: Navigate non-commodity storefronts with visible autonomous cursor and macro flaw zoom\nCollector Memory Engine: Maintain cross-session registry of owned portfolio, grading tolerances, and past rejected offers\nBilateral Negotiation Arbiter: Formulate comp-backed opening bids and evaluate seller counter-offers in real-time\nOmnichannel Watchdog: Track seller reserve drops and alert collector via WhatsApp/Telegram for instant in-chat counter-offers";
        if (guideInput) guideInput.value = "Proactively spotlight physical defects (whitening, scratches, patina) before discussing pricing or checkout\nKeep user collection registries, private purchase history, and max willingness-to-pay encrypted locally\nGround every negotiation offer in verified secondary market transaction comps (PSA APR, eBay Sold)\nRequire explicit human confirmation on paired messenger before dispatching legally binding purchase bids";
    } else if (skillId === 'zenpango-ai-skill') {
        if (capInput) capInput.value = "Post-Purchase State Machine: Unify fragmented WMS, carrier, and support silos onto an event-driven fulfillment graph\nDynamic Carrier Router: Continuously re-evaluate regional carrier SLA, weather, and hub congestion for on-time delivery\nReturnless Refund Arbiter: Calculate net salvage value vs. reverse freight to trigger instantaneous returnless refunds\nAnti-Wardrobing Shield: Audit historical return frequency, claim patterns, and product condition telemetry to block return abuse";
        if (guideInput) guideInput.value = "Prioritize size/color exchanges and store credit incentives before executing cash refunds\nTrigger automated returnless refunds whenever return shipping + restock exceeds item resale value\nStore all RMA tracking tokens, carrier manifests, and customer dispute ledgers in local encrypted storage\nAlert merchant operator immediately if return abuse velocity exceeds safety threshold";
    } else if (skillId === 'zenchannel-ai-skill') {
        if (capInput) capInput.value = "Universal Catalog Indexer: Normalize heterogeneous web schemas into 100M+ unified canonical product graph\nMultimodal Entity De-Duplicator: Cluster identical physical SKUs across retailers using vision embeddings and title semantics\nOpen MCP Search Engine: Expose search_products, lookup_product_url, and compare_merchant_offers tool endpoints\nUniversal Affiliate Clearing Hub: Auto-inject compliant affiliate tracking tokens and attribute commission splits via x-user-id";
        if (guideInput) guideInput.value = "Guarantee live inventory validation with TTL < 5 minutes before recommending offers\nMaintain strict relevance and landed-price ranking neutrality without affiliate bias\nProcess reference images and body sizing ephemerally within local sandboxed session\nHand off confirmed candidate SKUs directly to zenrye or zenfirm for instant checkout execution";
    } else if (skillId === 'zenpass-ai-skill') {
        if (capInput) capInput.value = "Sovereign Context Vault: Encrypt sizing, allergies, taste vectors, and spending limits in local hardware enclave\nSign in with ZenPass Broker: Issue scoped, time-bounded permission tokens for external buyer agents and merchant bots\nZero-Knowledge Claim Generator: Prove age, location zip, and budget thresholds cryptographically without exposing raw PII\nBi-Directional Context Harmonizer: Propose preference patches from active sessions and enforce paired-messenger HITL approval";
        if (guideInput) guideInput.value = "Store all master context attributes exclusively within OS Secure Enclave / local vault\nStrictly enforce the principle of least privilege; deny any broad unscoped context requests\nRequire explicit one-tap user confirmation on mobile messenger before committing profile mutations\nLog every read and write access attempt to the append-only local audit ledger";
    } else if (skillId === 'zenpact-ai-skill') {
        if (capInput) capInput.value = "Game-Theoretic Bargaining Driver: Execute automated multi-round concession protocols against merchant pricing bots\nBATNA Reservation Modeler: Calculate strict walk-away prices based on real-time cross-merchant alternative baselines\nMulti-Issue Concession Trader: Offer fulfillment flexibility (slow ground delivery, off-peak shifts) and add-ons to extract cash discounts\nAnti-Gouging Shield: Suppress fake scarcity countdowns and neutralize device-type dynamic price discrimination";
        if (guideInput) guideInput.value = "Never exceed user's strict max willingness-to-pay ceiling under any negotiation outcome\nMaintain monotonic concession schedules without revealing final reservation price prematurely\nAdhere strictly to merchant API rate limits without aggressive request flooding\nHand off finalized negotiated promotion codes directly to zenrye or zenfirm for instant checkout execution";
    } else if (skillId === 'zenpine-ai-skill') {
        if (capInput) capInput.value = "Recurring Audit Radar: Parse transaction streams and bank feeds to flag dormant zombie subscriptions\nDark-Pattern Cancellation Driver: Autonomously penetrate multi-step cancellation mazes and retention surveys\nFTC Click-to-Cancel Enforcer: Cite federal/EU statutory cooling-off rights to legally nullify cancellation phone calls\nZero-Usage Refund Demander: Break merchant 'no-refund' boilerplates using verified non-usage telemetry and auto-compile FCBA chargeback packages";
        if (guideInput) guideInput.value = "Always require explicit human approval card on paired messenger before executing service cancellations\nNever fabricate or exaggerate non-usage activity logs in legal dispute demands\nEncrypt all bank statements, transaction histories, and card identifiers strictly in local Secure Enclave\nTrack merchant refund clearing and escalate to credit card issuer chargeback if unpaid after 7 business days";
    } else if (skillId === 'zenvoice-ai-skill') {
        if (capInput) capInput.value = "PSTN Telephony Orchestrator: Dispatch outbound telephone calls to brick-and-mortar storefronts, pharmacies, and service desks\nSub-Second Voice Engine: Maintain conversational turn-taking latency below 600ms with dynamic noise suppression and interruption handling\nOffline Inventory Extractor: Interrogate retail clerks to verify physical on-shelf stock and lock behind-the-counter hold confirmations\nLive Whisper & Takeover Gate: Stream real-time call transcription to paired WhatsApp/Telegram with 1-tap live human phone takeover";
        if (guideInput) guideInput.value = "Limit automated redials to a maximum of 3 attempts with exponential backoff (5m, 15m, 45m)\nAlways disclose AI identity when required by state or federal recording consent statutes\nEncrypt all call audio recordings and transcripts locally inside OpenClaw vault with user-owned keys\nTrigger immediate live call handoff if store clerk requests complex personal identification or express human intervention";
    } else if (skillId === 'zenkinect-ai-skill') {
        if (capInput) capInput.value = "Dual-Surface Synthesizer: Dynamically split storefront into sub-300-token machine catalog and human-facing adaptive visual PDP\nReal-Time Objection Resolver: Detect hesitation micro-patterns (dwell time, size toggling) and inject authentic proof cards before bounce\nBrand Truth Knowledge Graph: Ingest factory CAD packs, garment shrinkage specs, and QA logs for zero-hallucination answers\nM2M Buyer Agent Interface: Expose standardized machine endpoints for automated stock-hold vouchers and buyer agent price agreements";
        if (guideInput) guideInput.value = "Enforce deterministic accuracy; return unspecified_by_merchant if garment technical pack data is missing\nMaintain machine context endpoint latency under 30ms via edge CDN caching for external buyer agents\nBlend reassurance cards naturally into the vertical scroll stream without intrusive full-screen modal takeovers\nCapture shopper interaction telemetry anonymously without storing biometric keystroke dynamics or PII";
    } else if (skillId === 'zenmandate-ai-skill') {
        if (capInput) capInput.value = "Intent Mandate Issuer: Create cryptographically signed SD-JWT user intent mandates with strict budget caps and merchant constraints\nCart Mandate Compiler: Freeze candidate SKU selections, zip-code taxes, and landed costs into immutable SHA-256 cart digests\nPayment Mandate Broker: Dispatch binding AP2 payment tokens to merchant gateways linking cart digests to authorized payment instruments\nPre-Flight Policy Circuit Breaker: Halt execution immediately if landed price exceeds authorized max budget by even $0.01";
        if (guideInput) guideInput.value = "Keep private signing keys strictly within local hardware Secure Enclave / HSM\nRequire explicit biometric passkey confirmation for high-value transactions or initial session mandate signing\nNever transmit full unredacted customer context; apply SD-JWT selective disclosure on merchant requests\nAppend every issued mandate and settled transaction to local tamper-evident audit ledger";
    } else if (skillId === 'zenzoma-ai-skill') {
        if (capInput) capInput.value = "5C ACO Auditor: Benchmark enterprise SKUs against Completeness, Context, Citations, Correctness, and Acquisition\nDigital Twin Shopper Swarm: Simulate thousands of multi-archetype AI buyer personas across ChatGPT, Gemini, Rufus, and Sparky\nHallucination Detection Radar: Continuously scan LLM outputs to catch factual model errors and deploy corrective Schema.org JSON-LD manifests\nShare of Model Forecaster: Track brand recommendation win/loss ratios against competitors and diagnose prompt elimination bottlenecks";
        if (guideInput) guideInput.value = "Ground all catalog enrichment and correction declarations strictly in verified enterprise lab tests and CAD specs\nNever inject deceptive synthetic reviews or manipulate third-party community forums\nSchedule weekly Share of Model re-indexing to adapt dynamically to foundation model checkpoint updates\nKeep confidential wholesale pricing thresholds and internal engineering blueprints securely inside local vault";
    } else if (skillId === 'zenrindler-ai-skill') {
        if (capInput) capInput.value = "Web-to-MCP Compiler: Deconstruct target storefront into strongly typed remote Model Context Protocol (MCP) server endpoints\nZero-Screenshot Execution: Eliminate visual computer-use token bloat by routing actions through deterministic headless DOM primitives\nSelf-Healing Selector Relay: Neutralize marketing popups, cookie consent overlays, and CSS layout shifts via semantic landmark heuristics\nAtomic Action Pipeline: Execute complex multi-step shopping funnels (search, filter, variant pick, stage cart) in sub-200ms with 95% token savings";
        if (guideInput) guideInput.value = "Prioritize compiled MCP tool endpoints over visual screenshot coordinate clicking whenever available\nIsolate session cookies and anti-bot turnstile relays strictly within local OpenClaw resident browser enclave\nReturn typed machine error codes (e.g., stock_depleted) immediately upon unrecoverable merchant hurdles\nThrottle automated requests to realistic human thresholds (<5 req/sec) to avoid triggering merchant IP bans";
    } else if (skillId === 'zentrip-ai-skill') {
        if (capInput) capInput.value = "Spatial-Temporal Constraint Engine: Synthesize end-to-end multi-modal itineraries resolving minimum connection times (MCT), jetlag, and operating hours\nGDS & NDC Wholesale Arbitrageur: Query direct airline NDC and GDS channels for wholesale tariffs with 24-hr fare freeze and post-booking price drop tracking\nIn-Trip Disruption Recovery Sentinel: Continuously monitor ADS-B air telemetry to automatically trigger interline rebooking and hotel voucher locks\nMulti-Party Consensus & Split AP2 Mandates: Harmonize group travel preferences via A2A mesh and dispatch cryptographically signed proportional payment mandates";
        if (guideInput) guideInput.value = "Explicitly highlight non-refundable or non-changeable tariffs in bold amber and require one-tap user approval\nTerminate booking immediately if mandatory destination visa requirements or passport 6-month validity thresholds are breached\nLock individual AP2 payment mandate bounds so cumulative sum strictly equals total wholesale master invoice (deviation < $0.01)\nDynamically reschedule outdoor itinerary items to verified indoor cultural venues when local precipitation exceeds 60%";
    } else if (skillId === 'zenpantry-ai-skill') {
        if (capInput) capInput.value = "Digital Twin Pantry State Machine: Ingest online grocery e-receipts and delivery manifests to model household stock depletion velocity\nNutritional Macro CSP Solver: Formulate multi-objective linear constraints balancing daily protein/carb/fat targets and <25-minute weeknight prep times\nZero-Waste Perishable Amortizer: Cluster fresh herbs and produce across multiple weekly meals to reduce domestic food waste by 60%\nFederated Grocery Knapsack Fulfillment: Map ingredient lines to store SKUs across Instacart, Whole Foods, and Kroger while optimizing free-delivery tiers";
        if (guideInput) guideInput.value = "Enforce strict zero-tolerance circuit breaker against any allergen blacklist items (peanuts, gluten, shellfish)\nSuppress re-ordering of non-perishable staples whenever digital twin inventory indicates remaining capacity > 30%\nStage weekly replenishment plans as interactive WhatsApp/Telegram cards on Sunday mornings for single-tap user approval\nNever permit automated substitutions for dairy or nut-free alternatives without verified user consent";
    } else if (skillId === 'zenfit-ai-skill') {
        if (capInput) capInput.value = "3D Morphometric Body Predictor: Infer 50+ detailed anatomical vectors (chest, waist drop, shoulder slope, inseam) from lightweight statistical anchors\nGarment CAD Ease Tensor: Compute mechanical ease allowance (Garment - Body) and simulate fabric elastane stretch dynamics\nCross-Brand Vanity Sizing Normalizer: Map size variations across 15,000+ brands and calibrate subjective fit preferences (tailored vs. oversized)\nPre-Checkout Zero-Return Arbiter: Intercept apparel purchases to evaluate fit confidence percentage, vetoing high-risk misfits to slash reverse logistics";
        if (guideInput) guideInput.value = "Veto checkout automatically if fit confidence score is < 80% or if non-returnable garment is < 90%\nFactor in a +3% to +5% fabric contraction allowance for unwashed raw natural fibers (selvage denim, un-shrunk wool)\nFlag shoe width pinch hazards whenever footwear lacks wide fittings (E/EE) for users with wide foot morphology\nStage precise alteration suggestions (e.g., sleeve hemming) on intermediate 80-94% fit confidence items";
    } else if (skillId === 'zenpoint-ai-skill') {
        if (capInput) capInput.value = "Merchant MCC Radar: Pre-screen merchant category codes to route checkout to the card yielding maximum category multipliers\nCard-Linked Offer Auto-Stacker: Automatically detect and clip targeted Amex, Chase, and Citi merchant cashback promos in <100ms\nCents-Per-Point Arbitrageur: Dynamically compute CPP conversion hurdles to decide between cash checkout vs. airline/hotel award redemptions\nTransfer Partner Route Compiler: Map points across 30+ airline frequent flyer and hotel programs, harvesting active transfer bonus multipliers";
        if (guideInput) guideInput.value = "Enforce strict redemption hurdle lock (never burn Chase UR < 1.5¢, Amex MR < 1.6¢, or Bilt < 1.8¢)\nBlacklist cards with foreign transaction fees on cross-border merchant checkouts\nAlert user if high-ticket purchase pushes individual card credit utilization above 30%\nVerify live airline award seat availability before initiating non-reversible bank-to-airline points transfers";
    } else if (skillId === 'zengift-ai-skill') {
        if (capInput) capInput.value = "Relational Milestone Sentinel: Monitor personal calendar dates to trigger T-14 and T-7 curated gifting proposals directly in WhatsApp/Telegram\nSocial Taboo Safeguard Shield: Automatically cross-reference dietary, allergy, and sobriety constraints (alcohol, nuts, gluten, wool)\nAddressless Magic Link Engine: Generate encrypted unwrapping links allowing recipients to privately input shipping addresses and choose custom variants\nSilent Equal-Value Swap Protector: Allow recipients to 1-click swap gifts for equivalent-value catalog items without notifying sender\nStaged AP2 Settlement: Hold pre-authorized payment mandates and execute settlement only upon verified recipient claim (14-day auto-release)";
        if (guideInput) guideInput.value = "Flag corporate etiquette and compliance risks for gifts exceeding $100 to professional clients or colleagues\nEnforce strict age-verification gate for any gift containing alcoholic components on both sender and recipient interfaces\nNever disclose recipient physical shipping addresses or private variant choices to the sender daemon\nRelease pre-authorized payment holds immediately if magic gift link remains unclaimed past 14 calendar days";
    } else if (skillId === 'zenward-ai-skill') {
        if (capInput) capInput.value = "Checkout Warranty Upsell Suppressor: Intercept predatory 80%-margin retailer warranty popups and verify cardholder complimentary extended warranties\nLiving Vault of Ownership: Bind receipts, serial numbers, and warranty horizons to alert users at T-60 and T-30 days before OEM expiry\nCPSC & OEM Safety Recall Sentinel: Continuously monitor global recall registries (CPSC, NHTSA, RAPEX) to trigger free remedy replacements\n1-Click Claim Dossier Compiler: Assemble itemized receipts, card statement line items, serial photos, and repair diagnostic sheets to file claims in 60s";
        if (guideInput) guideInput.value = "Strictly reject ungrounded or fraudulent damage estimates; require verified diagnostic sheets from authorized service centers\nAutomatically redact unrelated line items on monthly credit card billing statements prior to insurance submission\nPrioritize 0-deductible credit card extended warranty claims over homeowner insurance to protect user loss history\nEnforce statutory consumer rights (Magnuson-Moss, EU 2-year guarantee) before paying out of pocket";
    } else if (skillId === 'zenauto-ai-skill') {
        if (capInput) capInput.value = "Days-on-Lot Leverage Radar: Monitor regional dealer inventory aging (>60d) and Market Days Supply (MDS >80d) to maximize buyer negotiation leverage\nMonroney Window Sticker Deconstruction: Cross-reference factory window stickers against dealer proposals to identify and strip deceptive add-ons ($1,500 ceramic coatings, $895 nitrogen fills, $995 doc fees)\nMMR Wholesale Auction Arbiter: Benchmark trade-ins against real-time Manheim Market Report (MMR) auction transactions to decouple trade-in value from new car pricing\nAnonymous Multi-Dealer RFQ Engine: Issue standardized quote requests with ephemeral aliases to 5-15 regional dealers within 150 miles demanding itemized Out-the-Door (OTD) price sheets\nGame-Theoretic OTD Counter-Bidding: Run structured bilateral counter-offer rounds across competing dealer quotes to drive price down to wholesale regional floor";
        if (guideInput) guideInput.value = "Strictly forbid discussing monthly payments or financing terms until the net Out-The-Door (OTD) purchase price has been signed and locked\nMandate immediate negotiation termination if a dealership refuses to strip non-factory dealer installed accessories\nRequire independent trade-in purchase agreements decoupled from new vehicle acquisition to prevent equity dilution\nTrigger human approval card on WhatsApp/Telegram with full fee breakdown before authorizing binding deposit";
    } else if (skillId === 'zenvital-ai-skill') {
        if (capInput) capInput.value = "Biomarker Telemetry Synthesis: Ingest Quest/Labcorp panels, genetics, and wearable data to map systemic nutrient deficiencies and optimal longevity ranges\nBioavailability Form Auditor: Evaluate nutrient chemical forms to eliminate low-absorption compounds (e.g. Magnesium Oxide) in favor of high-bioavailability chelates (Glycinate, Threonate)\nNutrient Antagonism & Circadian Arbiter: Eliminate absorption competition (Zinc vs. Copper, Iron vs. Calcium) and partition supplements into morning, afternoon, and evening protocols\nUSP/NSF Purity Gatekeeper: Filter out heavy metal contaminants, unverified proprietary blends, and low-grade fillers via third-party certification databases\nDynamic Titration & Retest Procurement: Tie bottle fulfillment quantities to 180-day blood draw milestones and auto-titrate dosages based on longitudinal delta vectors";
        if (guideInput) guideInput.value = "Strictly veto mega-dosing of fat-soluble vitamins (A, D, E, K) that exceed established clinical toxicity upper limits without recent lab confirmation\nEnforce strict pharmaceutical contraindication screening (e.g. Vitamin K with Warfarin, St. John's Wort with SSRIs)\nSeparate competitive mineral pairs (Zinc/Copper, Calcium/Iron) by at least 2 hours in daily protocol scheduling\nTrigger 180-day follow-up lab test notifications prior to automatically re-ordering ongoing maintenance dosages";
    } else if (skillId === 'zenfix-ai-skill') {
        if (capInput) capInput.value = "Multimodal Fault Diagnostic: Ingest model plate OCR, error codes, and acoustic recordings to isolate appliance failure root causes\nExploded OEM CAD Resolver: Cross-reference 5M+ industrial parts schematics to pinpoint exact OEM part numbers and certified alternatives\n50% Economic Lifecycle Arbiter: Calculate depreciated asset value vs. repair cost to issue definitive Repair vs. Replace decisions\nRSMeans Labor Rate Auditor: Deconstruct contractor lump-sum bids and benchmark against regional trade prevailing wage tables to stop price gouging\nDirect-to-Part Wholesale: Enable direct consumer procurement of verified OEM/aftermarket components bypassing 200% trade markup\nAP2 Milestone Escrow: Hold contractor funds in cryptographic escrow and release payment only upon verified multimodal proof-of-completion";
        if (guideInput) guideInput.value = "Enforce mandatory safety disconnect and licensed trade referral for 240V, high-voltage capacitors, or natural gas connections\nMandate itemized labor and parts breakdown from contractors; reject all ungrounded lump-sum repair estimates\nPrioritize UL/CSA-certified high-durability aftermarket parts for non-critical mechanical items to maximize cost savings\nRequire post-repair thermal, pressure, or operational cycle verification before releasing funds from AP2 escrow";
    } else if (skillId === 'zentap-ai-skill') {
        if (capInput) capInput.value = "RFC 9421 HTTP Message Signer: Generate asymmetric Ed25519 and ECDSA cryptographic signatures across HTTP methods, target URIs, authorities, and content digests\nAgent Registry Resolver: Broadcast and resolve public keys via open agent registries, enabling merchant edge firewalls to authenticate agents in <5ms\nConsumer Mandate Attestation: Bind signed HTTP requests directly to verified human IntentMandate tokens proving authorized purchasing authority\nEdge CDN Fast-Track Negotiator: Upgrade standard browser sessions into certified machine buyer sessions, bypassing CAPTCHAs and unlocking dedicated /agentic/ endpoints";
        if (guideInput) guideInput.value = "Store private signing keys strictly within local hardware security enclave; never export keys or telemetry off-device\nRefuse to attach TAP signature headers to outbound HTTP calls lacking an active, spend-capped user IntentMandate\nMaintain sub-5ms cryptographic signing overhead to preserve seamless real-time shopping speeds\nFall back gracefully to resident browser automation if merchant edge gateways lack TAP support";
    } else if (skillId === 'zen402-ai-skill') {
        if (capInput) capInput.value = "HTTP 402 Challenge Handler: Automatically intercept HTTP 402 Payment Required status codes and parse structured payment challenge headers (network, token, amount, recipient)\nProgrammatic Stablecoin Signer: Execute sub-second, sub-cent USDC micropayments over Base, Solana, and Polygon using local embedded keypairs\nPayment Proof Dispatcher: Re-issue authenticated requests with cryptographic x402 payment proof headers to immediately unlock premium feeds\nMachine Economy Budget Governor: Enforce strict per-call ($0.05 max) and daily session ($2.00 max) spending caps backed by local tamper-proof ledgers";
        if (guideInput) guideInput.value = "Strictly veto any micropayment request that exceeds the predefined per-call budget cap without explicit user approval\nVerify recipient contract addresses against verified machine API registry whitelists to prevent drain attacks\nRecord every on-chain micropayment in local append-only cryptographic ledger (~/.openclaw/vault/x402_payments.ledger)\nAutomatically cancel payment challenges if quote validity TTL has expired before transaction dispatch";
    } else if (skillId === 'zenbill-ai-skill') {
        if (capInput) capInput.value = "CPT/HCPCS Code Deconstruction: Ingest multi-page itemized hospital bills and EOBs to map every line item to 5-digit procedure and revenue codes\nUpcoding & Unbundling Sentry: Apply CMS NCCI bundling edits to strip fragmented supply charges and audit emergency room severity levels\nCMS Price Transparency MRF Benchmark: Cross-reference hospital federal machine-readable files to benchmark chargemaster prices against discounted cash and median negotiated rates\nNo Surprises Act Statutory Radar: Detect illegal out-of-network balance billing for emergency or ancillary hospital services and trigger federal PPDR disputes\nIRS 501(r) Charity Care Write-Off: Match household income to hospital Financial Assistance Policies (FAP) to mandate 50-100% debt forgiveness\nMedicare 150% Settlement Compiler: Compile formal certified dispute dossiers offering 150% of Medicare fee schedule to settle unpaid balances";
        if (guideInput) guideInput.value = "Redact all patient medical history, clinical diagnostic notes, and SSNs in local Secure Enclave memory; never leak PHI off-device\nMandate official itemized bills with standard CPT/HCPCS codes before initiating dispute routines; reject summary balance-due statements\nVerify statutory dispute notification deadlines (30-60 days) to prevent premature collections agency reporting\nPrioritize IRS 501(r) non-profit charity care write-offs before cash settlement offers to maximize statutory debt elimination";
    } else if (skillId === 'zentax-ai-skill') {
        if (capInput) capInput.value = "County Tax Parcel Ingestion: Extract parcel numbers, assessed land/improvement values, millage rates, and protest filing countdown clocks\nAMA Characteristic Defect Audit: Detect county property database errors in square footage, room counts, building grade, and effective age\nML Comparable Sales Adjustment Grid: Select arms-length neighborhood sales and apply paired regression adjustment matrices for lot size, age, and condition\nUniform & Equal Equity Ratio Arbiter: Analyze assessment-to-market ratios across peer properties to substantiate constitutional unequal appraisal claims\nDeferred Maintenance Deduction: Compile contractor bids and photographic proof of foundation cracks, aging roofs, and structural defects into cost-to-cure deductions\nAutomated ARB Appeal Dossier: Assemble state-compliant protest petitions, comparable sales grids, and legal briefs for appraisal review boards";
        if (guideInput) guideInput.value = "Strictly enforce county statutory appeal filing deadlines; verify postmark and online timestamp rules to prevent rights forfeiture\nIn equal and uniform jurisdictions, always advance the equity argument alongside market value claims to maximize reduction probability\nRequire contractor repair bids to be licensed, itemized, and dated within 90 days of the assessment lien date\nAudit and verify that all entitled statutory exemptions (Homestead cap, senior, disability) are actively applied to property records";
    } else if (skillId === 'zenforge-ai-skill') {
        if (capInput) capInput.value = "Engineering BOM Normalizer: Ingest Altium, KiCad, and Excel BOMs to extract MPNs, reference designators, package footprints, and tolerance constraints\nMulti-Distributor Stock Radar: Simultaneously query live stock counts, cut-tape/reel packaging, MOQs, and volume price breaks across DigiKey, Mouser, LCSC, Arrow, and Newark\nPin-Compatible Alternate Arbiter: Search parametric component datasheets to isolate 100% pin-compatible, drop-in replacement parts matching voltage, ESR, and thermal specs\nLifecycle & Obsolescence Sentinel: Screen BOM line items against manufacturer PCN/EOL/NRND notices and lead-time spikes exceeding 26 weeks\nFreight Knapsack & HS Tariff Compiler: Classify electronic parts into Harmonized Tariff Schedule (HTS) codes and optimize multi-vendor orders into minimum-cost split shipments";
        if (guideInput) guideInput.value = "Strictly forbid substituting safety-critical components (power MOSFETs, fuses, isolation transformers) without verified identical thermal and voltage ratings\nVeto any component flagged as NRND (Not Recommended for New Designs) or EOL (End of Life) for production batch runs\nVerify distributor packaging formats (Cut Tape vs. Tape & Reel) against assembly line SMT feeder requirements before purchase\nRequire human approval card on WhatsApp/Telegram with full landed cost breakdown before releasing multi-vendor POs";
    } else if (skillId === 'zenpower-ai-skill') {
        if (capInput) capInput.value = "Wholesale Spot Tariff Radar: Ingest day-ahead hourly electricity spot prices and grid carbon intensity across CAISO, ERCOT, Nord Pool, and Octopus APIs to identify negative pricing slots\nDER Knapsack Optimizer: Solve linear optimization models to coordinate battery ESS charging, heat pumps, and smart appliances into sub-cent windows\nBidirectional EV (V2H/V2G) Arbiter: Discharge stored EV battery energy during extreme peak grid stress events ($2.00-$9.00/kWh) while preserving departure range\nSolar PV Generation Forecaster: Ingest NOAA meteorological satellite irradiance vectors to align high-draw appliances with peak rooftop generation\nSREC & Grid Export Settle Engine: Track clean solar generation behind the meter, mint SREC attribute certificates, and reconcile net-metering utility statements";
        if (guideInput) guideInput.value = "Enforce strict 20% minimum blackout emergency reserve shield on all residential storage assets\nLimit battery depth-of-discharge (DoD) to optimal electro-chemical lifespan boundaries (15%-85% daily cycling)\nGuarantee EV reaches target departure state-of-charge (SoC >= 80%) at least 2 hours before user commute\nRequire interactive WhatsApp/Telegram approval card before executing live high-volume V2G export transactions";
    } else if (skillId === 'zenmux-ai-skill') {
        if (capInput) capInput.value = "Unified MCP Capability Gateway: Expose hundreds of on-demand external tools (stealth proxies, OCR, vertical domain APIs) through a single standard local MCP endpoint\nPay-per-Call Universal Wallet: Execute sub-cent micro-debit settlements per successful call from local prepaid wallet, eliminating unused monthly SaaS subscriptions\nPareto Latency/Cost Benchmark Router: Dynamically benchmark live provider QoS (p95 latency, price, success rate) and route requests to optimal providers\nAdaptive Sub-50ms Circuit Breaker: Automatically trip on 3 consecutive 4xx/5xx errors or latency spikes, cascading to warm standby secondary providers\nSchema Contract & Injection Sandbox: Enforce strict JSON Schema validation and strip malicious prompt injection payloads from external tool outputs";
        if (guideInput) guideInput.value = "Enforce strict $0.10 USD maximum per-call expenditure ceiling before executing any external tool invocation\nFreeze automated tool multiplexing if cumulative daily session spend exceeds $5.00 USD without explicit user top-up\nRequire explicit biometric or OTP confirmation before unlocking high-risk capabilities (code execution or credential injection)\nAlert user via WhatsApp/Telegram if upstream provider failovers exceed 3 consecutive cascades";
    } else if (skillId === 'zenproof-ai-skill') {
        if (capInput) capInput.value = "ZK Proof-of-Human Delegator: Generate Groth16 zero-knowledge proofs asserting agent execution is authorized by an Orb-verified unique living human\nScoped Action Nullifier Sentry: Compute deterministic, unlinkable Poseidon nullifier hashes to mathematically enforce 1-person-1-drop allocation rules\nWAF Fast-Pass Header Handshake: Dispatch Sec-Proof-Of-Human and X-WorldID headers to Cloudflare and Akamai edge workers to bypass CAPTCHAs in <10ms\nAgentBook On-Chain Rotator: Maintain ephemeral agent signing keypairs registered on World Chain with automated 24-hour TTL expiration\nAnti-Sybil Flash Sale Arbiter: Claim high-demand allocations during limited GPU and ticket drops without exposing biometric data or identity";
        if (guideInput) guideInput.value = "Never export master World ID identity secrets or biometric hashes; retain credentials in user OS Secure Enclave\nPrompt user for biometric confirmation via World App or WhatsApp before unlocking nullifiers for transactions > $500 USD\nAutomatically revoke and wipe ephemeral session signing keys after 24 hours to prevent unauthorized replay\nRefuse to proceed if merchant verification level demands Orb verification and the human identity tier only supports Device";
    } else if (skillId === 'zensure-ai-skill') {
        if (capInput) capInput.value = "Dec-Page OCR Ingestion: Extract bodily injury, property damage, deductibles, and custom endorsements into normalized coverage envelopes\nMulti-Carrier Rating Arbitrage: Query 50+ carrier APIs with normalized driver risk profiles to discover identical-coverage loss-leader tiers\nLoyalty Surcharge Sentry: Audit renewal rate drift (Delta R > 5%) at T-45 days to eliminate algorithmic price optimization penalties\nMid-Term Switching Autopilot: Legally cancel inflated policies mid-term with zero coverage gaps and bind replacement policies instantly\nPro-Rata Refund Recovery: Calculate unearned premium to the exact day and enforce statutory 100% pro-rata refund disbursement";
        if (guideInput) guideInput.value = "Strictly forbid downgrading liability limits or raising deductibles solely to display artificially lower premium quotes\nEnsure the new replacement policy binder is fully active and verified before issuing cancellation notice to the prior carrier\nAutomatically coordinate mortgagee clause updates and escrow disbursement notifications for homeowners policies\nStore driver license and CLUE claims history strictly in local hardware-backed enclave";
    } else if (skillId === 'zenplea-ai-skill') {
        if (capInput) capInput.value = "Summons & Complaint OCR: Ingest process service documents, extracting court jurisdiction, case docket numbers, and 20-30 day filing deadlines\nStatute of Limitations (SOL) Arbiter: Cross-reference date of default against state-specific time-barred debt limits (3-6 years) for dismissal with prejudice\nLack of Standing Sentry: Challenge third-party debt buyer assignments, demanding original signed loan contracts and complete unredacted ledgers\nCertified Court Answer Generator: Formulate verified Answers with structured paragraph pleadings (Admit, Deny, Lack of Knowledge) and 12+ affirmative defenses\nFDCPA Counter-Arbitrage: Weaponize debt collection violations ($1,000 statutory damages per count) into complete lawsuit dismissals or zero-liability walkaways";
        if (guideInput) guideInput.value = "Prioritize jurisdictional answer deadlines above all else to strictly prevent automatic default judgments\nNever admit alleged balances prematurely; utilize 'Deny for Lack of Knowledge' to place the burden of proof onto the plaintiff\nFormulate and attach a formal Certificate of Service verifying that an identical copy was served to plaintiff counsel via USPS Certified Mail\nRetain all case dockets, credit reports, and defense filings strictly in local Secure Enclave memory";
    } else if (skillId === 'zenpet-ai-skill') {
        if (capInput) capInput.value = "Veterinary SOAP & Rx OCR: Ingest clinical exam notes, invoices, and prescriptions to parse active compounds, dosages, and diagnostic codes\nPharmacological Equivalence Arbiter: Cross-reference FDA-approved generic salts to eliminate clinic pharmacy markups (40%-65% savings) via certified PetRx hubs\nBreed Genetic Contraindication Shield: Ingest Wisdom Panel/Embark DNA profiles to flag lethal MDR1 mutations against ivermectin/loperamide and screen breed risks\nPet Insurance Claim Compiler: Reconcile medical history against policy terms, pre-existing condition exclusions, and deductible limits to auto-file itemized claims\nEmergency Clinical Triage Decision Tree: Evaluate critical symptoms (GDV bloat, urethral obstruction, respiratory distress) to route immediately to 24/7 emergency centers";
        if (guideInput) guideInput.value = "Strictly forbid autonomous pharmaceutical substitutions without verified identical active salt, concentration, and route of administration\nMandate immediate emergency hospital dispatch if triage algorithms detect life-threatening red-flag indicators\nVerify AVMA-compliant veterinary prescription transfer requirements before routing orders to external certified pharmacies\nStore pet medical history, vaccination records, and microchip IDs securely in local hardware-backed vault";
    } else if (skillId === 'zenclaim-ai-skill') {
        if (capInput) capInput.value = "Multi-modal PNR & E-Ticket Parser: Ingest booking confirmation codes, flight segments, fare rules, and baggage claim tags\nADS-B Telemetry & Weather Rebuttal Engine: Correlate aircraft tail number flight paths and METAR historical observations to refute airline 'extraordinary weather' excuses\nStatutory Multi-Jurisdiction Compensation Solver: Compute mandatory cash payouts under EU261/UK261 (€250-€600), US DOT Title 14 CFR Part 260 full cash refunds, and Montreal Convention 1,288 SDR baggage limits\nVoucher Downgrade Shield: Reject depreciating airline travel credits; strictly enforce unencumbered cash or original payment method refunds\nCertified Statutory Demand Generator: Draft and dispatch formal legal notices of claim with strict 14-day settlement windows directly to carrier regulatory portals";
        if (guideInput) guideInput.value = "Mandate verification of ADS-B historical flight logs and airport METAR observations before accepting airline claims of extraordinary weather circumstances\nStrictly prohibit passenger acceptance of lowball travel voucher credits without explicit informed consent and disclosure of statutory cash rights\nVerify all flight distance calculations using Great Circle formula to guarantee maximum statutory tier payout under EU261\nEnsure all passenger PNR, passport numbers, and payout bank IBAN/ACH credentials are encrypted in local secure storage";
    } else if (skillId === 'zenlease-ai-skill') {
        if (capInput) capInput.value = "Multimodal Move-In/Move-Out Inspection Audit: Analyze timestamped photos and walkthrough videos with EXIF metadata to classify normal wear-and-tear vs damage\nStatutory Accounting Timeline Enforcement: Track state postmark deadlines (NY 14d, CA 21d, TX 30d) to trigger total forfeiture of deductions if missed\nHUD Useful Life Depreciation Engine: Audit replacement charges for carpet, paint, and appliances against statutory amortization tables to eliminate full replacement fraud\nBad-Faith Treble Damages Escalator: Assert statutory 2x to 3x punitive damage multipliers under state landlord-tenant codes to compel rapid pre-trial settlement\nWarranty of Habitability Notice Generator: Issue formal statutory 14-day notices to cure for heating, plumbing, or mold violations, unlocking repair-and-deduct remedies";
        if (guideInput) guideInput.value = "Strictly distinguish between normal wear-and-tear and tenant-caused property damage using state civil code definitions and judicial precedents\nAutomatically assert immediate forfeiture of landlord deduction rights whenever the statutory accounting deadline has elapsed without itemized receipts\nVerify useful life depreciation calculations for all billed capital assets using HUD standard amortization schedules\nEncrypt lease contracts, landlord contact information, and bank settlement routing numbers in local hardware-backed vault";
    } else if (skillId === 'zenbridge-ai-skill') {
        if (capInput) capInput.value = "PAP Discovery: Auto-resolve /.well-known/poppy.json merchant endpoints\nOAuth Broker: Scoped guest and authenticated session tokens\nDynamic Router: Dual-path routing (PAP API vs. Resident Browser fallback)\nA2B Negotiator: Counteract merchant Seller AI dynamic pricing and retention traps";
        if (guideInput) guideInput.value = "Verify PAP merchant TLS certificates and signature validity\nFall back gracefully to resident browser profile when merchants lack PAP endpoints\nRestrict OAuth permissions to minimum necessary cart and inventory scopes";
    } else if (skillId === 'zenpeer-ai-skill') {
        if (capInput) capInput.value = "Peer Handshake: End-to-end encrypted ED25519 agent discovery tunnel\nCollective Buyer: Cross-user cart bundling and BOGO discount arbitrage\nZK Schedule Aligner: Zero-knowledge meeting/dining overlap calculation\nP2P Split Settler: Proportional bill division with dual-HITL approval gate";
        if (guideInput) guideInput.value = "Validate peer public key signature before exchanging negotiation proposals\nNever expose raw calendar entries or private contact details to peer daemons\nRequire mutual authorization from both users before locking shared reservations";
    } else if (skillId === 'aegis-guard-skill') {
        if (capInput) capInput.value = "Active Detective: Real-time in-flight token hallucination suppression\nPII Shield: Redact residential street addresses, CVVs, and chat history traces\nSanity Firewall: Single transaction limits and auto-renewal trap detector\nAudit Logger: Local append-only cryptographic tamper-proof ledger";
        if (guideInput) guideInput.value = "Run pre-execution inspection in <15ms before browser form submission\nNever transmit audit logs or telemetry off the host machine\nEnforce strict human confirmation for any transaction exceeding policy ceiling";
    } else if (skillId === 'trooly-ai-skill') {
        if (capInput) capInput.value = "Empathy Engine: Build qualitative persona blueprints\nUser Feedback: Auto-scrape reviews across targeted platforms\nFormat Output: Compile empathy graphs and core triggers";
        if (guideInput) guideInput.value = "Confirm target customer niche before execution\nVerify qualitative data density limits\nRender output using structured markdown templates";
    } else if (skillId === 'mktflywheel-ai-skill') {
        if (capInput) capInput.value = "Marketing Strategist: Structural cross-channel campaign maps\nBulk Copy: Generate highly tailored landing page ad copies\nSEO Engine: Run immediate organic search keyword audit";
        if (guideInput) guideInput.value = "Ensure product description and ICP details are active\nTest generated copy variations under MFS rules\nCompile campaign map to structured CSV files";
    } else if (skillId === 'swap-commerce-skill') {
        if (capInput) capInput.value = "Catalog Syncer: Sync local and global inventory levels and pricing dynamic metadata\nTax Adjuster: Auto-calculate local and international sales tax, duties, and landed cost boundaries\nReturns Router: Streamline post-purchase return sessions, QR code shipping labels, and WMS sync\nVirtual Try-On: Activate visual try-on modules for matching apparel attributes";
        if (guideInput) guideInput.value = "Validate API connection to Swap-OS credentials before syncing catalog\nConfirm shipping destination coordinates for DDP calculations\nInitiate return workflows only after validating purchase history and token\nRender try-on images and visual assets within secure sandboxed overlays";
    } else if (skillId === 'character-ai-skill') {
        if (capInput) capInput.value = "Persona Blueprinting: Build deep psychological traits and speaking mannerisms for customized agents\nSandboxed Simulator: Run safe roleplay and customer-support agent simulations\nSentiment Analytics: Gauge user sentiment and adapt conversation tone in real-time";
        if (guideInput) guideInput.value = "Keep roleplay agent interactions strictly within sandboxed boundaries\nValidate tone and safety filters before replying to simulation inputs\nSave agent chat logs for post-simulation performance review";
    } else if (skillId === 'nexad-ai-skill') {
        if (capInput) capInput.value = "Copywriter Pro: Generate engaging, high-conversion copy for multi-channel digital campaigns\nA/B Variant Generator: Create multiple distinct copy variants for performance testing\nAsset Structure Planner: Design visual and text hierarchies optimized for ad networks";
        if (guideInput) guideInput.value = "Align ad copy tone with brand tone and target audience specifications\nVerify length limitations for target channels\nCompile generated variants into a structured output format for easy deployment";
    } else if (skillId === 'tradingagents-skill') {
        if (capInput) capInput.value = "Trigger Monitor: Check technical indicators and price levels locally in real-time\nTrade Simulator: Run paper trading simulations to backtest strategies safely\nOrder Executer: Securely interface with API endpoints for mock order loop routing";
        if (guideInput) guideInput.value = "Verify mock portfolio constraints and stop-loss boundaries before simulation\nDo not connect to live broker endpoints; restrict execution to sandboxed environments\nGenerate detailed trade execution report logs on daily boundaries";
    }

    // Trigger update
    updateSkillMarkdown();
    
    // Smooth scroll to builder
    const builderSection = document.getElementById('generator');
    if (builderSection) {
        builderSection.scrollIntoView({ behavior: 'smooth' });
    }
};

/* ==========================================
   5. Interactive SKILL.md Generator Logic
   ========================================== */
function initSkillGenerator() {
    const inputs = [
        'skill-name', 'skill-desc', 'skill-version', 
        'skill-license', 'skill-capabilities', 'skill-guidelines'
    ];

    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', updateSkillMarkdown);
        }
    });

    const copyBtn = document.getElementById('btn-copy-skill');
    if (copyBtn) {
        copyBtn.addEventListener('click', copySkillToClipboard);
    }

    const downloadBtn = document.getElementById('btn-download-skill');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadSkillFile);
    }

    // Initial render
    updateSkillMarkdown();
}

function updateSkillMarkdown() {
    const name = document.getElementById('skill-name')?.value.trim() || 'my-custom-skill';
    const desc = document.getElementById('skill-desc')?.value.trim() || 'No description provided.';
    const version = document.getElementById('skill-version')?.value.trim() || '1.0.0';
    const license = document.getElementById('skill-license')?.value || 'MIT';
    
    const capabilitiesRaw = document.getElementById('skill-capabilities')?.value || '';
    const guidelinesRaw = document.getElementById('skill-guidelines')?.value || '';

    const capabilities = capabilitiesRaw.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    const guidelines = guidelinesRaw.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    let md = `---
name: ${name}
description: ${desc}
version: ${version}
license: ${license}
---

# ${name}

## Overview
${desc}

## Core Capabilities
`;

    if (capabilities.length > 0) {
        capabilities.forEach(cap => {
            md += `- **${cap.split(':')[0] || 'Capability'}**: ${cap.split(':')[1]?.trim() || cap}\n`;
        });
    } else {
        md += `- **General Automation**: Employs agent tools to automate custom user commands.\n`;
    }

    md += `
## Usage Guide
When starting a session using this skill:
`;

    if (guidelines.length > 0) {
        guidelines.forEach((guide, index) => {
            md += `${index + 1}. ${guide}\n`;
        });
    } else {
        md += `1. Verify requirements with the operator.\n`;
        md += `2. Run target agent commands.\n`;
        md += `3. Output status updates directly.\n`;
    }

    const renderBlock = document.getElementById('skill-markdown-render');
    if (renderBlock) {
        renderBlock.querySelector('code').textContent = md;
    }
}

function copySkillToClipboard() {
    const codeBlock = document.querySelector('#skill-markdown-render code');
    if (!codeBlock) return;

    const text = codeBlock.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('btn-copy-skill');
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="check" style="color: var(--color-accent-emerald);"></i> <span style="color: var(--color-accent-emerald);">Copied!</span>`;
            lucide.createIcons();
            
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                lucide.createIcons();
            }, 2000);
        }
    });
}

function downloadSkillFile() {
    const codeBlock = document.querySelector('#skill-markdown-render code');
    if (!codeBlock) return;

    const text = codeBlock.textContent;
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SKILL.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
