#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const packageJson = require('../package.json');

const program = new Command();

// Template definitions
const MINIMAL_TEMPLATES = [
  { src: 'CLAUDE.md', desc: 'Project context with session load order' },
  { src: '_GOLDEN-RULES.md', desc: 'Immutable rules (read twice per session)' },
  { src: '_TODOS.md', desc: 'Priority-based task tracking' }
];

const FULL_TEMPLATES = [
  ...MINIMAL_TEMPLATES,
  { src: '_LESSONS-LEARNED.md', desc: 'Problem/Cause/Solution/Prevention patterns' },
  { src: '_CONVERSATION-PREFERENCES.md', desc: 'Output formatting and communication style' },
  { src: '_LONG-TERM-MEMORY.md', desc: 'Persistent memory (NEVER delete)' },
  { src: '_SHORT-TERM-MEMORY.md', desc: 'Session context (delete when done)' },
  { src: '_SYSTEM_ARCHITECTURE.md', desc: 'Technical diagrams and system design' }
];

program
  .name('claude-anchor')
  .description('Claude Anchor - Persistent memory and behavioral context for Claude Code')
  .version(packageJson.version);

program
  .command('init [target-dir]', { isDefault: true })
  .description('Copy Anchor templates into your project')
  .option('-f, --force', 'Overwrite existing files')
  .option('--full', 'Copy all 8 templates (default: 3 essential templates)')
  .addHelpText('after', `
Examples:
  $ npx claude-anchor                  # Copy 3 essential templates
  $ npx claude-anchor --full           # Copy all 8 templates
  $ npx claude-anchor ./my-project     # Copy into specific directory
  $ npx claude-anchor --force          # Overwrite existing files

Essential templates (default):
  - CLAUDE.md (session load order + project context)
  - _GOLDEN-RULES.md (immutable constraints)
  - _TODOS.md (task tracking)

Full template set (--full):
  All essential templates plus:
  - _LESSONS-LEARNED.md, _CONVERSATION-PREFERENCES.md
  - _LONG-TERM-MEMORY.md, _SHORT-TERM-MEMORY.md
  - _SYSTEM_ARCHITECTURE.md`)
  .action(async (targetDir, options) => {
    try {
      const dir = targetDir || '.';
      await initializeAnchor(dir, options);
    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);

async function initializeAnchor(targetDir, options) {
  const templatesDir = path.join(__dirname, '..', 'templates');
  const targetPath = path.resolve(targetDir);
  const templates = options.full ? FULL_TEMPLATES : MINIMAL_TEMPLATES;
  const mode = options.full ? 'full' : 'essential';

  // Banner
  console.log('');
  console.log(chalk.cyan.bold('  ┌─────────────────────────────────────────────┐'));
  console.log(chalk.cyan.bold('  │                                             │'));
  console.log(chalk.cyan.bold('  │') + chalk.white.bold('            Claude Anchor                ') + chalk.cyan.bold('│'));
  console.log(chalk.cyan.bold('  │') + chalk.gray('     Behavioral Context Framework        ') + chalk.cyan.bold('│'));
  console.log(chalk.cyan.bold('  │                                             │'));
  console.log(chalk.cyan.bold('  └─────────────────────────────────────────────┘'));
  console.log('');
  console.log(chalk.gray('  Made with love by ') + chalk.blue.underline('Super Basic Studio'));
  console.log(chalk.gray('  ') + chalk.blue.underline('https://superbasic.studio'));
  console.log('');

  // Mode display
  if (options.full) {
    console.log(chalk.blue('+---------------------------------------+'));
    console.log(chalk.blue('|') + chalk.blue.bold(' FULL: All 8 behavioral templates       ') + chalk.blue('|'));
    console.log(chalk.blue('+---------------------------------------+'));
    console.log(chalk.gray('  Rules, memory, preferences, architecture'));
    console.log(chalk.gray('  Complete behavioral context for Claude'));
  } else {
    console.log(chalk.green('+---------------------------------------+'));
    console.log(chalk.green('|') + chalk.green.bold(' ESSENTIAL: 3 core templates            ') + chalk.green('|'));
    console.log(chalk.green('+---------------------------------------+'));
    console.log(chalk.gray('  CLAUDE.md + Golden Rules + TODOs'));
    console.log(chalk.gray('  Use --full for all 8 templates'));
  }
  console.log('');

  if (options.force) {
    console.log(chalk.yellow('  ⚠ Force mode: existing files will be overwritten'));
    console.log('');
  }

  console.log(chalk.blue.bold('[*] Initializing Anchor templates...'));
  console.log(chalk.gray(`    Target: ${targetPath}`));
  console.log(chalk.gray(`    Mode:   ${mode} (${templates.length} templates)`));
  console.log('');

  // Ensure target directory exists
  await fs.ensureDir(targetPath);

  let created = 0;
  let skipped = 0;
  let overwritten = 0;

  for (const template of templates) {
    const srcPath = path.join(templatesDir, template.src);
    const destPath = path.join(targetPath, template.src);
    const exists = await fs.pathExists(destPath);

    if (exists && !options.force) {
      console.log(chalk.yellow('  [SKIP] ') + chalk.gray(template.src) + chalk.yellow(' (already exists)'));
      skipped++;
      continue;
    }

    try {
      await fs.copy(srcPath, destPath, { overwrite: options.force });

      if (exists && options.force) {
        console.log(chalk.blue('  [OVERWRITE] ') + chalk.white(template.src));
        overwritten++;
      } else {
        console.log(chalk.green('  [CREATE] ') + chalk.white(template.src) + chalk.gray(` — ${template.desc}`));
        created++;
      }
    } catch (err) {
      console.error(chalk.red(`  [ERROR] ${template.src}: ${err.message}`));
    }
  }

  // Summary
  console.log('');
  console.log(chalk.cyan('─'.repeat(47)));
  console.log('');

  if (created > 0) {
    console.log(chalk.green.bold(`  ✓ Created ${created} template${created !== 1 ? 's' : ''}`));
  }
  if (overwritten > 0) {
    console.log(chalk.blue.bold(`  ✓ Overwrote ${overwritten} template${overwritten !== 1 ? 's' : ''}`));
  }
  if (skipped > 0) {
    console.log(chalk.yellow(`  ○ Skipped ${skipped} (use --force to overwrite)`));
  }

  console.log('');

  // Next steps
  if (created > 0 || overwritten > 0) {
    console.log(chalk.white.bold('  Next steps:'));
    console.log(chalk.gray('  1. Edit each template — replace [PLACEHOLDERS] with your project details'));
    console.log(chalk.gray('  2. Customize _GOLDEN-RULES.md with your project\'s constraints'));
    console.log(chalk.gray('  3. Claude reads these files automatically at session start'));
    console.log('');

    if (!options.full) {
      console.log(chalk.gray('  Want more? Run ') + chalk.cyan('npx claude-anchor --full') + chalk.gray(' for all 8 templates'));
      console.log('');
    }

    console.log(chalk.gray('  Companion project: ') + chalk.blue.underline('https://github.com/superbasicstudio/claude-conductor'));
    console.log(chalk.gray('  Conductor documents your codebase — Anchor manages Claude\'s behavior'));
  } else {
    console.log(chalk.gray('  All templates already exist. Use --force to overwrite.'));
  }

  console.log('');
}
