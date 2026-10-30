import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const skillsDir = path.join(projectRoot, 'skills');
const appJsPath = path.join(projectRoot, 'app.js');
const readmePath = path.join(projectRoot, 'README.md');

const skillDirs = fs.readdirSync(skillsDir).filter(d => fs.statSync(path.join(skillsDir, d)).isDirectory()).sort();
const appJs = fs.readFileSync(appJsPath, 'utf8');
const readme = fs.readFileSync(readmePath, 'utf8');

// Extract skill IDs from SKILLS_DATABASE in app.js
const regex = /id:\s*['"]([^'"]+)['"]/g;
const appSkillIds = [];
let m;
while ((m = regex.exec(appJs)) !== null) {
  if (m[1].endsWith('-skill')) {
    appSkillIds.push(m[1]);
  }
}

console.log('=== 3-WAY PARITY VERIFICATION ===');
console.log(`Skills on disk:       ${skillDirs.length}`);
console.log(`Skills in app.js:     ${appSkillIds.length}`);

const missingInApp = skillDirs.filter(s => !appSkillIds.includes(s));
const missingOnDisk = appSkillIds.filter(s => !skillDirs.includes(s));
const missingInReadme = skillDirs.filter(s => !readme.includes(s));
const missingSkillMd = skillDirs.filter(s => !fs.existsSync(path.join(skillsDir, s, 'SKILL.md')));

let hasError = false;

if (missingInApp.length > 0) {
  console.error('❌ Missing in app.js:', missingInApp);
  hasError = true;
}
if (missingOnDisk.length > 0) {
  console.error('❌ Missing on disk:', missingOnDisk);
  hasError = true;
}
if (missingInReadme.length > 0) {
  console.error('❌ Missing in README.md:', missingInReadme);
  hasError = true;
}
if (missingSkillMd.length > 0) {
  console.error('❌ Missing SKILL.md:', missingSkillMd);
  hasError = true;
}

if (!hasError) {
  console.log(`✅ PERFECT 3-WAY PARITY: All ${skillDirs.length} skills verified across disk, app.js, and README.md!`);
  process.exit(0);
} else {
  console.error('❌ Parity verification failed.');
  process.exit(1);
}
