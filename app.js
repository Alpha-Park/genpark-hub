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
    { type: 'input', text: 'openclaw run-skill --name "personal-decision-buyer-skill" --query "Find ANC headphones <$250"' },
    { type: 'output', text: '🛒 [DecisionAgent] Distilling intent: Over-ear, ANC, long flights, budget cap $250.' },
    { type: 'output', text: '🔍 [ReviewAuditor] Crawled Reddit r/BuyItForLife & 4 retailers. Filtered 12 sponsored reviews.' },
    { type: 'output', text: '⚖ [DecisionMatrix] Ranked 3 items: Sony XM5 (Score: 0.88), Bose QC (0.86), Sennheiser (0.81).' },
    { type: 'output', text: '🛍 [CartStager] Best Buy deal ($239.99 w/ coupon) staged in resident browser cart.' },
    { type: 'input', text: 'openclaw send-message --channel "whatsapp" --template "decision_approval_card"' },
    { type: 'output', text: '💬 [Sentinel HITL] Interactive purchase card dispatched to WhatsApp: [Approve $239.99].' },
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
        id: 'personal-decision-buyer-skill',
        name: 'personal-decision-buyer-skill',
        description: 'Autonomous personal decision & shopping copilot distilled from Meta Muse and Instinct. Cross-platform product research, Reddit sentiment audit, MAUT trade-off scoring, cart staging, and tokenized checkout via local sandboxed browser.',
        category: 'commerce',
        developer: '@Alpha-Park',
        logo: '🛒'
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
    if (skillId === 'personal-decision-buyer-skill') {
        if (capInput) capInput.value = "Intent Profiler: Parse implicit user constraints and long-term shopping preferences\nReview Auditor: Scrape live web pricing and Reddit/forum sentiment to filter fake reviews\nDecision Matrix: Rank items via MAUT (Price, Quality, Shipping, Returns)\nReflexion Loop: Self-correct on stockouts, dynamic shipping fees, and coupon failure\nCart Stager & HITL Gate: Stage checkout and push 1-tap confirmation card to WhatsApp/Telegram\nResident Session: Emulate authentic browser cookies to bypass merchant anti-bot blocks";
        if (guideInput) guideInput.value = "Maintain all credentials strictly within OS local keychain / vault\nEnforce Sentinel HITL confirmation before any payment execution\nAudit merchant price history and verify return policy limits\nLog decision rationale and user feedback to local memory store";
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
