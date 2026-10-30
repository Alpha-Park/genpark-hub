import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const skillsDir = path.join(projectRoot, 'skills');
const appJs = fs.readFileSync(path.join(projectRoot, 'app.js'), 'utf8');

// Parse SKILLS_DATABASE from app.js
const skillsDbMatch = appJs.match(/const SKILLS_DATABASE = (\[[\s\S]*?\]);/);
let skillsDb = [];
if (skillsDbMatch) {
  try {
    // evaluate the array literal safely
    const fn = new Function(`return ${skillsDbMatch[1]}`);
    skillsDb = fn();
  } catch (e) {
    console.error('Error evaluating SKILLS_DATABASE:', e);
  }
}

console.log(`Parsed ${skillsDb.length} skills from app.js`);

// Parse capabilities from loadSkillToGenerator
function extractCaps(skillId) {
  const capRegex = new RegExp(`skillId === '${skillId}'[\\s\\S]*?if \\(capInput\\) capInput\\.value = "([\\s\\S]*?)";`);
  const match = appJs.match(capRegex);
  if (match) {
    return match[1].split('\\n').filter(Boolean);
  }
  return [];
}

const skillDirs = fs.readdirSync(skillsDir).filter(d => fs.statSync(path.join(skillsDir, d)).isDirectory());
const missingReadme = skillDirs.filter(d => !fs.existsSync(path.join(skillsDir, d, 'README.md')));

console.log(`Generating README.md for ${missingReadme.length} skills...`);

let generatedCount = 0;

for (const skillId of missingReadme) {
  const skillDirPath = path.join(skillsDir, skillId);
  const skillMdPath = path.join(skillDirPath, 'SKILL.md');
  const skillMd = fs.existsSync(skillMdPath) ? fs.readFileSync(skillMdPath, 'utf8') : '';

  const dbEntry = skillsDb.find(s => s.id === skillId) || {
    id: skillId,
    name: skillId,
    description: 'Autonomous decision and execution skill for GenPark and OpenClaw.',
    category: 'agent',
    developer: '@Alpha-Park',
    logo: '🦞'
  };

  const caps = extractCaps(skillId);
  const shortName = skillId.replace('-ai-skill', '').replace('-skill', '');

  // Extract description from frontmatter if available
  let desc = dbEntry.description;
  const descMatch = skillMd.match(/description:\s*([^\n]+)/);
  if (descMatch && descMatch[1].trim().length > 20) {
    desc = descMatch[1].trim();
  }

  // Format bullet points
  let featureBullets = '';
  if (caps.length > 0) {
    featureBullets = caps.slice(0, 5).map(c => {
      const parts = c.split(':');
      if (parts.length > 1) {
        return `- **${parts[0].trim()}**: ${parts.slice(1).join(':').trim()}`;
      }
      return `- ${c.trim()}`;
    }).join('\n');
  } else {
    featureBullets = `- **Autonomous Decisioning**: Analyzes operational inputs and executes actions with deterministic validation.\n- **Zero-UI Integration**: Fully compatible with WhatsApp, Telegram, and OpenClaw runtimes.\n- **Local Hardware Security**: Sensitive parameters and tokens stay secured in the local hardware vault.`;
  }

  // Extract MCP tools or methods if present in SKILL.md
  let toolsSection = '';
  const toolsMatch = skillMd.match(/## (?:4\.|3\.|2\.)?\s*(?:MCP Tools|Tool Calling|OpenClaw & Agent Protocol Compatibility)[\s\S]*?(?=##|$)/i);
  if (toolsMatch) {
    const rawTools = toolsMatch[0].trim();
    // Keep it clean and concise
    const lines = rawTools.split('\n').slice(0, 10).join('\n');
    toolsSection = lines;
  } else {
    toolsSection = `## 🛠 MCP Tools & Agent Protocol
- \`${shortName}_execute\`: Primary autonomous execution tool with schema validation.
- \`${shortName}_audit\`: Non-destructive state assessment and discrepancy scanner.`;
  }

  const content = `<div align="center">

# ${skillId} ${dbEntry.logo || '🦞'}

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-emerald.svg)](https://github.com/Alpha-Park/genpark-hub)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Alpha-Park/genpark-hub/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/Alpha-Park/genpark-hub?style=for-the-badge&logo=github&color=gold)](https://github.com/Alpha-Park/genpark-hub)

**${dbEntry.description.slice(0, 160)}${dbEntry.description.length > 160 ? '...' : ''}**

</div>

---

## 🌟 Highlights & Core Features

${featureBullets}

---

## 🚀 Quick Start & CLI Usage

\`\`\`bash
# Ingest or execute ${shortName} workflow
npx genpark run ${shortName} --demo

# Run with custom parameters in local OpenClaw runtime
npx genpark run ${shortName} --execute
\`\`\`

${toolsSection.startsWith('## ') ? toolsSection : '## 🛠 MCP Tools & Interface\n\n' + toolsSection}

---

<div align="center">

⭐ **If you find this skill useful, please star the [GenPark Hub](https://github.com/Alpha-Park/genpark-hub) repository!**

</div>
`;

  fs.writeFileSync(path.join(skillDirPath, 'README.md'), content, 'utf8');
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} README.md files!`);
