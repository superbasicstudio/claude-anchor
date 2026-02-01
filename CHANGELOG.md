# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[1.1.0]: https://github.com/superbasicstudio/claude-anchor/releases/tag/v1.1.0
[1.0.0]: https://github.com/superbasicstudio/claude-anchor/releases/tag/v1.0.0
