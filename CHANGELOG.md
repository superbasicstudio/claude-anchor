# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-02-16

### Added
- **`_VOICE-AND-TONE.md`** — New template for controlling Claude's personality, attitude, language style, vocabulary, response structure, commit message style, and error communication. Loaded as **step 1** in the session load order so Claude's personality is established before anything else.
- **`_DESIGN-PREFERENCES.md`** — New template for visual design rules: lighter hover colors on interactive elements only (never dark), WCAG AA accessibility, keyboard/screen reader support, typography hierarchy, flat iconography, spacing scale, and UX principles.
- Framework now ships **10 templates** (up from 8) in `--full` mode
- Updated session load order: Voice & Tone is step 1, Golden Rules is step 2
- Hover state rules explicitly scoped to interactive elements only — no hover effects on static content

### Changed
- Session load order reordered: `_VOICE-AND-TONE.md` now loads first (step 1), `_GOLDEN-RULES.md` loads second (step 2) as the BINDING enforcement layer
- Anchor Files Reference table updated with new priority column values: `FIRST` for voice/tone, `BINDING` for golden rules
- CLI help text updated to reflect 10 templates

## [1.1.0] - 2026-02-01

### Added
- **CLI**: `npx claude-anchor` installs templates into your project
  - Essential mode (default): 3 core templates
  - Full mode (`--full`): all 8 behavioral templates
  - Force mode (`--force`): overwrite existing files
  - Colored output with progress indicators
- **Instructions for Claude**: Every template now includes an "Instructions for Claude" section explaining how Claude should use, reference, and update each file automatically
- **Starter security rules** in `_GOLDEN-RULES.md`: No credentials in code, no PII exposure, confirm destructive operations, validate inputs
- **Security examples** in `_LESSONS-LEARNED.md`: Credential leak example with prevention steps
- **Cross-linking**: Templates reference each other with relative markdown links
- **Anchor Files Reference** table in `CLAUDE.md` listing all templates with purpose, lifecycle, and priority
- **Memory files in load order**: `_SHORT-TERM-MEMORY.md` and `_LONG-TERM-MEMORY.md` now included in session startup sequence
- **PII privacy warnings** in `_LONG-TERM-MEMORY.md` and `_SHORT-TERM-MEMORY.md`
- **Staleness detection** guidance for `_SHORT-TERM-MEMORY.md` (7-day age check)
- **Version footers** (`<!-- Claude Anchor v1.0 -->`) in all templates
- 10 automated tests including PII detection scan

### Fixed
- Load order filenames now use correct underscore prefix (`_GOLDEN-RULES.md` not `GOLDEN-RULES.md`)

## [1.0.0] - 2025-06-17

### Added
- Initial open-source release
- 7 template files for AI behavioral context management:
  - `_GOLDEN-RULES.md` — Immutable rules with enforcement summary
  - `_TODOS.md` — Priority-based task tracking
  - `_LESSONS-LEARNED.md` — Problem/Cause/Solution/Prevention documentation
  - `_CONVERSATION-PREFERENCES.md` — Output formatting, progress bars, verbosity
  - `_LONG-TERM-MEMORY.md` — Persistent memory with lifecycle rules
  - `_SHORT-TERM-MEMORY.md` — Session context with resume checklist
  - `_SYSTEM_ARCHITECTURE.md` — ASCII diagrams, data flows, security model
- `CLAUDE.md` template with mandatory session load order
- Mandatory session load order with golden rules re-reading
- Memory hierarchy (long-term persistent vs short-term temporary)
- Naming conventions for template organization
- Minimal and full setup options
- Project CLAUDE.md with framework context for AI navigation
- SECURITY.md with vulnerability reporting policy
- BSD 2-Clause license

[1.2.0]: https://github.com/superbasicstudio/claude-anchor/releases/tag/v1.2.0
[1.1.0]: https://github.com/superbasicstudio/claude-anchor/releases/tag/v1.1.0
[1.0.0]: https://github.com/superbasicstudio/claude-anchor/releases/tag/v1.0.0
