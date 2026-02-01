const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const CLI_PATH = path.join(__dirname, '..', 'bin', 'init.js');
const TEST_DIR = path.join(__dirname, '..', 'test-output');

// Helper to run CLI
function runCLI(args = '') {
  return execSync(`node ${CLI_PATH} ${args}`, {
    encoding: 'utf-8',
    timeout: 30000
  });
}

beforeEach(async () => {
  await fs.remove(TEST_DIR);
  await fs.ensureDir(TEST_DIR);
});

afterAll(async () => {
  await fs.remove(TEST_DIR);
});

describe('CLI', () => {
  test('shows version', () => {
    const output = runCLI('--version');
    expect(output.trim()).toBe('1.0.0');
  });

  test('shows help', () => {
    const output = runCLI('--help');
    expect(output).toContain('claude-anchor');
    expect(output).toContain('Persistent memory');
  });
});

describe('Init (essential)', () => {
  test('creates 3 essential templates', () => {
    const output = runCLI(`init ${TEST_DIR}`);

    expect(output).toContain('[CREATE]');
    expect(output).toContain('CLAUDE.md');
    expect(output).toContain('_GOLDEN-RULES.md');
    expect(output).toContain('_TODOS.md');
    expect(output).toContain('Created 3 template');

    expect(fs.existsSync(path.join(TEST_DIR, 'CLAUDE.md'))).toBe(true);
    expect(fs.existsSync(path.join(TEST_DIR, '_GOLDEN-RULES.md'))).toBe(true);
    expect(fs.existsSync(path.join(TEST_DIR, '_TODOS.md'))).toBe(true);

    // Full-only templates should NOT exist
    expect(fs.existsSync(path.join(TEST_DIR, '_LONG-TERM-MEMORY.md'))).toBe(false);
    expect(fs.existsSync(path.join(TEST_DIR, '_SYSTEM_ARCHITECTURE.md'))).toBe(false);
  });

  test('skips existing files without --force', () => {
    runCLI(`init ${TEST_DIR}`);
    const output = runCLI(`init ${TEST_DIR}`);
    expect(output).toContain('[SKIP]');
    expect(output).toContain('Skipped 3');
  });
});

describe('Init (full)', () => {
  test('creates all 8 templates with --full', () => {
    const output = runCLI(`init ${TEST_DIR} --full`);

    expect(output).toContain('[CREATE]');
    expect(output).toContain('Created 8 template');

    const expectedFiles = [
      'CLAUDE.md',
      '_GOLDEN-RULES.md',
      '_TODOS.md',
      '_LESSONS-LEARNED.md',
      '_CONVERSATION-PREFERENCES.md',
      '_LONG-TERM-MEMORY.md',
      '_SHORT-TERM-MEMORY.md',
      '_SYSTEM_ARCHITECTURE.md'
    ];

    for (const file of expectedFiles) {
      expect(fs.existsSync(path.join(TEST_DIR, file))).toBe(true);
    }
  });
});

describe('Init (force)', () => {
  test('overwrites existing files with --force', () => {
    runCLI(`init ${TEST_DIR}`);
    const output = runCLI(`init ${TEST_DIR} --force`);
    expect(output).toContain('[OVERWRITE]');
    expect(output).toContain('Overwrote 3 template');
  });
});

describe('Template content', () => {
  test('templates contain placeholders, not personal info', () => {
    runCLI(`init ${TEST_DIR} --full`);

    const files = fs.readdirSync(TEST_DIR).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const content = fs.readFileSync(path.join(TEST_DIR, file), 'utf-8');

      // Should NOT contain personal info
      expect(content).not.toMatch(/thomas/i);
      expect(content).not.toMatch(/wicker/i);
      expect(content).not.toMatch(/titan-linux/i);
      expect(content).not.toMatch(/\/home\/thomas/i);
      expect(content).not.toMatch(/\/media\/thomas/i);

      // Should contain placeholder patterns
      expect(content).toMatch(/\[.*\]/);
    }
  });

  test('CLAUDE.md contains session load order', () => {
    runCLI(`init ${TEST_DIR}`);
    const content = fs.readFileSync(path.join(TEST_DIR, 'CLAUDE.md'), 'utf-8');
    expect(content).toContain('MANDATORY LOAD ORDER');
    expect(content).toContain('GOLDEN-RULES');
    expect(content).toContain('Re-read AGAIN');
  });

  test('GOLDEN-RULES.md contains binding constraint', () => {
    runCLI(`init ${TEST_DIR}`);
    const content = fs.readFileSync(path.join(TEST_DIR, '_GOLDEN-RULES.md'), 'utf-8');
    expect(content).toContain('IMMUTABLE');
    expect(content).toContain('BINDING');
    expect(content).toContain('NEVER');
  });

  test('LONG-TERM-MEMORY.md warns against storing secrets', () => {
    runCLI(`init ${TEST_DIR} --full`);
    const content = fs.readFileSync(path.join(TEST_DIR, '_LONG-TERM-MEMORY.md'), 'utf-8');
    expect(content).toContain('NEVER store actual passwords');
    expect(content).toContain('NEVER delete');
  });
});
