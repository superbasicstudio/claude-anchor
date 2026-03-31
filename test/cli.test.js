const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const CLI_PATH = path.join(__dirname, '..', 'bin', 'init.js');
const TEST_DIR = path.join(__dirname, '..', 'test-output');
const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');
const PKG = require('../package.json');

// All 11 templates that ship with --full
const ALL_TEMPLATES = [
  'CLAUDE.md',
  '_GOLDEN-RULES.md',
  '_TODOS.md',
  '_LESSONS-LEARNED.md',
  '_CONVERSATION-PREFERENCES.md',
  '_DESIGN-PREFERENCES.md',
  '_VOICE-AND-TONE.md',
  '_LONG-TERM-MEMORY.md',
  '_SHORT-TERM-MEMORY.md',
  '_RAM.md',
  '_SYSTEM_ARCHITECTURE.md'
];

const ESSENTIAL_TEMPLATES = [
  'CLAUDE.md',
  '_GOLDEN-RULES.md',
  '_TODOS.md'
];

function runCLI(args = '') {
  return execSync(`node ${CLI_PATH} ${args}`, {
    encoding: 'utf-8',
    timeout: 30000
  });
}

function runCLIWithError(args = '') {
  try {
    const stdout = execSync(`node ${CLI_PATH} ${args}`, {
      encoding: 'utf-8',
      timeout: 30000
    });
    return { stdout, exitCode: 0 };
  } catch (err) {
    return { stdout: err.stdout || '', stderr: err.stderr || '', exitCode: err.status };
  }
}

beforeEach(async () => {
  await fs.remove(TEST_DIR);
  await fs.ensureDir(TEST_DIR);
});

afterAll(async () => {
  await fs.remove(TEST_DIR);
});

// ---------------------------------------------------------------------------
// CLI basics
// ---------------------------------------------------------------------------
describe('CLI', () => {
  test('shows version matching package.json', () => {
    const output = runCLI('--version');
    expect(output.trim()).toBe(PKG.version);
  });

  test('shows help text', () => {
    const output = runCLI('--help');
    expect(output).toContain('claude-anchor');
    expect(output).toContain('Persistent memory');
  });

  test('help lists both essential and full modes', () => {
    const output = runCLI('init --help');
    expect(output).toContain('--full');
    expect(output).toContain('--force');
    expect(output).toContain('Essential');
  });
});

// ---------------------------------------------------------------------------
// Init - essential mode
// ---------------------------------------------------------------------------
describe('Init (essential)', () => {
  test('creates exactly 3 essential templates', () => {
    const output = runCLI(`init ${TEST_DIR}`);

    expect(output).toContain('[CREATE]');
    expect(output).toContain('Created 3 template');

    for (const file of ESSENTIAL_TEMPLATES) {
      expect(fs.existsSync(path.join(TEST_DIR, file))).toBe(true);
    }

    // Full-only templates must NOT exist
    const fullOnly = ALL_TEMPLATES.filter(f => !ESSENTIAL_TEMPLATES.includes(f));
    for (const file of fullOnly) {
      expect(fs.existsSync(path.join(TEST_DIR, file))).toBe(false);
    }
  });

  test('skips existing files without --force', () => {
    runCLI(`init ${TEST_DIR}`);
    const output = runCLI(`init ${TEST_DIR}`);
    expect(output).toContain('[SKIP]');
    expect(output).toContain('Skipped 3');
    expect(output).not.toContain('[CREATE]');
    expect(output).not.toContain('[OVERWRITE]');
  });

  test('created files match source templates exactly', () => {
    runCLI(`init ${TEST_DIR}`);
    for (const file of ESSENTIAL_TEMPLATES) {
      const src = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      const dest = fs.readFileSync(path.join(TEST_DIR, file), 'utf-8');
      expect(dest).toBe(src);
    }
  });
});

// ---------------------------------------------------------------------------
// Init - full mode
// ---------------------------------------------------------------------------
describe('Init (full)', () => {
  test('creates all 11 templates with --full', () => {
    const output = runCLI(`init ${TEST_DIR} --full`);

    expect(output).toContain('[CREATE]');
    expect(output).toContain('Created 11 template');

    for (const file of ALL_TEMPLATES) {
      expect(fs.existsSync(path.join(TEST_DIR, file))).toBe(true);
    }
  });

  test('full mode files match source templates exactly', () => {
    runCLI(`init ${TEST_DIR} --full`);
    for (const file of ALL_TEMPLATES) {
      const src = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      const dest = fs.readFileSync(path.join(TEST_DIR, file), 'utf-8');
      expect(dest).toBe(src);
    }
  });

  test('full mode skips all 11 on second run', () => {
    runCLI(`init ${TEST_DIR} --full`);
    const output = runCLI(`init ${TEST_DIR} --full`);
    expect(output).toContain('Skipped 11');
    expect(output).not.toContain('[CREATE]');
  });
});

// ---------------------------------------------------------------------------
// Init - force mode
// ---------------------------------------------------------------------------
describe('Init (force)', () => {
  test('overwrites existing files with --force', () => {
    runCLI(`init ${TEST_DIR}`);
    const output = runCLI(`init ${TEST_DIR} --force`);
    expect(output).toContain('[OVERWRITE]');
    expect(output).toContain('Overwrote 3 template');
  });

  test('force overwrites all 11 in full mode', () => {
    runCLI(`init ${TEST_DIR} --full`);
    const output = runCLI(`init ${TEST_DIR} --full --force`);
    expect(output).toContain('Overwrote 11 template');
  });

  test('force-overwritten files match source templates', () => {
    runCLI(`init ${TEST_DIR} --full`);

    // Corrupt a file
    fs.writeFileSync(path.join(TEST_DIR, 'CLAUDE.md'), 'corrupted');

    runCLI(`init ${TEST_DIR} --full --force`);

    const src = fs.readFileSync(path.join(TEMPLATES_DIR, 'CLAUDE.md'), 'utf-8');
    const dest = fs.readFileSync(path.join(TEST_DIR, 'CLAUDE.md'), 'utf-8');
    expect(dest).toBe(src);
  });
});

// ---------------------------------------------------------------------------
// Init - target directory handling
// ---------------------------------------------------------------------------
describe('Init (directory handling)', () => {
  test('creates nested target directory if it does not exist', () => {
    const nested = path.join(TEST_DIR, 'deep', 'nested', 'dir');
    runCLI(`init ${nested}`);
    expect(fs.existsSync(path.join(nested, 'CLAUDE.md'))).toBe(true);
  });

  test('essential then full adds the missing 8 templates', () => {
    runCLI(`init ${TEST_DIR}`);
    const output = runCLI(`init ${TEST_DIR} --full`);

    // 3 essential should be skipped, 8 new ones created
    expect(output).toContain('Created 8');
    expect(output).toContain('Skipped 3');

    for (const file of ALL_TEMPLATES) {
      expect(fs.existsSync(path.join(TEST_DIR, file))).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// Template source integrity
// ---------------------------------------------------------------------------
describe('Template source files', () => {
  test('all 11 template source files exist', () => {
    for (const file of ALL_TEMPLATES) {
      const exists = fs.existsSync(path.join(TEMPLATES_DIR, file));
      expect(exists).toBe(true);
    }
  });

  test('no extra unexpected files in templates directory', () => {
    const actual = fs.readdirSync(TEMPLATES_DIR).filter(f => !f.startsWith('.'));
    expect(actual.sort()).toEqual(ALL_TEMPLATES.sort());
  });

  test('every template is non-empty', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      expect(content.trim().length).toBeGreaterThan(0);
    }
  });

  test('every template contains placeholder patterns', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      expect(content).toMatch(/\[.*\]/);
    }
  });

  test('every template has a version footer comment', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      expect(content).toMatch(/<!-- Claude Anchor v\d+\.\d+ -->/);
    }
  });
});

// ---------------------------------------------------------------------------
// Security - no PII or secrets in templates
// ---------------------------------------------------------------------------
describe('Security - no PII in templates', () => {
  test('no hardcoded home directory paths', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      // Real home paths (not placeholder patterns like [USER_HOME])
      expect(content).not.toMatch(/\/home\/[a-z][a-z0-9_-]{1,30}\//i);
      expect(content).not.toMatch(/\/Users\/[a-z][a-z0-9_-]{1,30}\//i);
      expect(content).not.toMatch(/\/media\/[a-z][a-z0-9_-]{1,30}\//i);
      expect(content).not.toMatch(/C:\\Users\\[a-z][a-z0-9_-]{1,30}\\/i);
    }
  });

  test('no real email addresses', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      expect(content).not.toMatch(/[a-z0-9._%+-]+@(gmail|yahoo|hotmail|outlook|proton)\.[a-z]{2,}/i);
    }
  });

  test('no API keys or tokens', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      expect(content).not.toMatch(/sk-[a-zA-Z0-9]{20,}/);
      expect(content).not.toMatch(/ghp_[a-zA-Z0-9]{36}/);
      expect(content).not.toMatch(/xox[bpras]-[a-zA-Z0-9-]{10,}/);
      expect(content).not.toMatch(/AKIA[A-Z0-9]{16}/);
    }
  });

  test('no private SSH or PGP key blocks', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      expect(content).not.toContain('BEGIN RSA PRIVATE KEY');
      expect(content).not.toContain('BEGIN OPENSSH PRIVATE KEY');
      expect(content).not.toContain('BEGIN PGP PRIVATE KEY');
    }
  });

  test('no IP addresses (non-localhost)', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      const ips = content.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g) || [];
      const nonLocal = ips.filter(ip =>
        !ip.startsWith('127.') &&
        !ip.startsWith('0.') &&
        !ip.startsWith('192.168.') &&
        !ip.startsWith('10.') &&
        !ip.startsWith('172.')
      );
      expect(nonLocal).toEqual([]);
    }
  });
});

// ---------------------------------------------------------------------------
// Security - no executable code in templates
// ---------------------------------------------------------------------------
describe('Security - no executable code in templates', () => {
  test('no script tags', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      expect(content.toLowerCase()).not.toMatch(/<script[\s>]/);
    }
  });

  test('no eval or Function constructor', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      expect(content).not.toMatch(/\beval\s*\(/);
      expect(content).not.toMatch(/new\s+Function\s*\(/);
    }
  });

  test('no shell injection patterns', () => {
    for (const file of ALL_TEMPLATES) {
      const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf-8');
      expect(content).not.toMatch(/\$\(.*\)/);
      expect(content).not.toContain('`rm ');
      expect(content).not.toContain('`curl ');
    }
  });
});

// ---------------------------------------------------------------------------
// Template content - key markers per file
// ---------------------------------------------------------------------------
describe('Template content markers', () => {
  test('CLAUDE.md has mandatory load order', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, 'CLAUDE.md'), 'utf-8');
    expect(content).toContain('MANDATORY LOAD ORDER');
    expect(content).toContain('GOLDEN-RULES');
    expect(content).toContain('Re-read AGAIN');
  });

  test('_GOLDEN-RULES.md has binding constraints', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_GOLDEN-RULES.md'), 'utf-8');
    expect(content).toContain('IMMUTABLE');
    expect(content).toContain('BINDING');
    expect(content).toContain('NEVER');
    expect(content).toContain('No Credentials in Code');
    expect(content).toContain('No PII Exposure');
  });

  test('_TODOS.md has priority levels', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_TODOS.md'), 'utf-8');
    expect(content).toContain('High Priority');
    expect(content).toContain('Medium Priority');
    expect(content).toContain('Low Priority');
  });

  test('_LONG-TERM-MEMORY.md has secrets warning and never-delete rule', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_LONG-TERM-MEMORY.md'), 'utf-8');
    expect(content).toContain('NEVER store actual passwords');
    expect(content).toContain('NEVER delete');
  });

  test('_SHORT-TERM-MEMORY.md has staleness rule', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_SHORT-TERM-MEMORY.md'), 'utf-8');
    expect(content).toMatch(/stale/i);
    expect(content).toContain('Active Issues');
  });

  test('_RAM.md has session state and recovery', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_RAM.md'), 'utf-8');
    expect(content).toContain('SESSION STATUS');
    expect(content).toContain('Recovery');
    expect(content).toContain('Last Action Taken');
  });

  test('_VOICE-AND-TONE.md has zero sycophancy rule', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_VOICE-AND-TONE.md'), 'utf-8');
    expect(content).toMatch(/sycophancy/i);
    expect(content).toContain('Personality');
  });

  test('_DESIGN-PREFERENCES.md has accessibility rules', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_DESIGN-PREFERENCES.md'), 'utf-8');
    expect(content).toContain('Accessibility');
    expect(content).toMatch(/WCAG/);
    expect(content).toContain('Hover');
  });

  test('_CONVERSATION-PREFERENCES.md has formatting rules', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_CONVERSATION-PREFERENCES.md'), 'utf-8');
    expect(content).toContain('Progress');
    expect(content).toContain('Communication Style');
  });

  test('_LESSONS-LEARNED.md has problem/cause/solution pattern', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_LESSONS-LEARNED.md'), 'utf-8');
    expect(content).toContain('Problem');
    expect(content).toContain('Cause');
    expect(content).toContain('Solution');
    expect(content).toContain('Prevention');
  });

  test('_SYSTEM_ARCHITECTURE.md has architecture sections', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, '_SYSTEM_ARCHITECTURE.md'), 'utf-8');
    expect(content).toContain('Architecture');
    expect(content).toContain('Data Flow');
    expect(content).toContain('Security');
  });
});

// ---------------------------------------------------------------------------
// CLAUDE.md load order cross-references actual template files
// ---------------------------------------------------------------------------
describe('Load order consistency', () => {
  test('CLAUDE.md load order references only files that exist as templates', () => {
    const content = fs.readFileSync(path.join(TEMPLATES_DIR, 'CLAUDE.md'), 'utf-8');

    // Extract filenames from the load order block
    const loadOrderFiles = [];
    const lines = content.split('\n');
    let inLoadOrder = false;
    for (const line of lines) {
      if (line.includes('MANDATORY LOAD ORDER')) inLoadOrder = true;
      if (inLoadOrder && line.includes('```') && loadOrderFiles.length > 0) break;
      const match = line.match(/^\d+\.\s+(\S+\.md)/);
      if (inLoadOrder && match) {
        loadOrderFiles.push(match[1]);
      }
    }

    // Every referenced file should exist in templates (except CLAUDE.md referencing itself)
    for (const file of loadOrderFiles) {
      if (file === 'CLAUDE.md') continue;
      expect(ALL_TEMPLATES).toContain(file);
    }
  });

  test('init.js template lists match ALL_TEMPLATES constant', () => {
    const initSrc = fs.readFileSync(path.join(__dirname, '..', 'bin', 'init.js'), 'utf-8');

    for (const file of ALL_TEMPLATES) {
      expect(initSrc).toContain(file);
    }
  });
});

// ---------------------------------------------------------------------------
// Package integrity
// ---------------------------------------------------------------------------
describe('Package integrity', () => {
  test('package.json version matches CLI output', () => {
    const output = runCLI('--version');
    expect(output.trim()).toBe(PKG.version);
  });

  test('package-lock.json exists', () => {
    const lockPath = path.join(__dirname, '..', 'package-lock.json');
    expect(fs.existsSync(lockPath)).toBe(true);
  });

  test('package-lock.json is valid JSON', () => {
    const lockPath = path.join(__dirname, '..', 'package-lock.json');
    const content = fs.readFileSync(lockPath, 'utf-8');
    expect(() => JSON.parse(content)).not.toThrow();
  });

  test('package-lock.json version matches package.json', () => {
    const lockPath = path.join(__dirname, '..', 'package-lock.json');
    const lock = JSON.parse(fs.readFileSync(lockPath, 'utf-8'));
    expect(lock.version).toBe(PKG.version);
  });

  test('dependencies use exact versions (no caret or tilde)', () => {
    for (const [name, version] of Object.entries(PKG.dependencies || {})) {
      expect(version).not.toMatch(/^[\^~]/);
    }
  });

  test('devDependencies use exact versions (no caret or tilde)', () => {
    for (const [name, version] of Object.entries(PKG.devDependencies || {})) {
      expect(version).not.toMatch(/^[\^~]/);
    }
  });

  test('files field restricts published contents', () => {
    expect(PKG.files).toBeDefined();
    expect(PKG.files).toContain('templates/');
    expect(PKG.files).toContain('bin/');
    expect(PKG.files).not.toContain('test/');
    expect(PKG.files).not.toContain('.github/');
  });

  test('engines field requires Node >= 22', () => {
    expect(PKG.engines).toBeDefined();
    expect(PKG.engines.node).toBe('>=22.0.0');
  });
});
