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
