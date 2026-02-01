# Claude Anchor

**Location:** `/path/to/claude-anchor/`
**Purpose:** Open-source persistent memory and behavioral context framework for Claude Code
**Type:** Markdown template collection + lightweight Node.js CLI installer
**npm:** `claude-anchor` (v1.3.1)
**License:** BSD 2-Clause
**Author:** Super Basic Studio
**Last Updated:** 2026-03-19

---

## Instructions for Claude

**This file is the master context for the Claude Anchor project.** Claude Anchor is a behavioral context framework — and this project IS Claude Anchor itself. Meta, but stay focused.

**On every session start, you MUST follow the load order below.** Do not skip steps. Do not reorder.

After loading, reference these files throughout the session:
- Check `_VOICE-AND-TONE.md` for communication style
- Check `_GOLDEN-RULES.md` before any operation that modifies code, publishes to npm, or touches git
- Check `_TODOS.md` before starting new work
- Check `_LESSONS-LEARNED.md` before proposing solutions
- Check `_LONG-TERM-MEMORY.md` for project conventions and decisions

**When this file changes:** Re-read it completely.

---

## CLAUDE SESSION STARTUP - MANDATORY LOAD ORDER

**Before engaging with user, Claude MUST read files in this EXACT order:**

```
0. _SHORT-TERM-MEMORY.md         <- IF EXISTS: resume interrupted work
1. _VOICE-AND-TONE.md            <- READ FIRST — personality, attitude, language style
2. _GOLDEN-RULES.md              <- BINDING rules — security and constraints (MUST FOLLOW)
3. _TODOS.md                     <- Read thoroughly (know what's pending)
4. _LESSONS-LEARNED.md           <- Read (avoid past mistakes)
5. _LONG-TERM-MEMORY.md          <- Read (persistent knowledge and preferences)
6. _CONVERSATION-PREFERENCES.md  <- Read (display/output preferences)
7. _GOLDEN-RULES.md              <- Re-read AGAIN (reinforce — DO NOT FORGET)
8. CLAUDE.md (this file)          <- Then read this for full project context
9. BEGIN conversation             <- Now ready to assist
```

**DO NOT SKIP ANY STEP. DO NOT REORDER.**

---

## What This Is

**Claude Anchor** is an open-source behavioral context framework — a set of markdown templates that give Claude persistent memory, enforceable rules, and session continuity. It's published on npm as `claude-anchor` and installed via `npx claude-anchor`.

This is a standalone open-source project maintained by Super Basic Studio.

### Companion Project

[Claude Conductor](https://github.com/superbasicstudio/claude-conductor) — codebase documentation framework. Anchor is the behavioral brain (how to think), Conductor is the codebase brain (what the project is). Together they give Claude full context.

---

## Project Architecture

```
claude-anchor/
│
├── CLAUDE.md                         <- YOU ARE HERE — Project context
├── _VOICE-AND-TONE.md                <- Claude's personality & communication style
├── _GOLDEN-RULES.md                  <- BINDING rules for this project
├── _TODOS.md                         <- Task tracking
├── _LESSONS-LEARNED.md               <- Past mistakes and fixes
├── _CONVERSATION-PREFERENCES.md      <- Output formatting preferences
├── _LONG-TERM-MEMORY.md              <- Persistent knowledge (NEVER DELETE)
│
├── README.md                         <- Public-facing docs (npm + GitHub)
├── CHANGELOG.md                      <- Version history (Keep a Changelog format)
├── CONTRIBUTING.md                   <- Contribution guidelines
├── SECURITY.md                       <- Vulnerability reporting policy
├── LICENSE                           <- BSD 2-Clause
├── package.json                      <- npm config (v1.3.1, claude-anchor)
│
├── bin/
│   └── init.js                       <- CLI entry point (npx claude-anchor)
│
├── templates/                        <- THE PRODUCT — 11 markdown templates
│   ├── CLAUDE.md                     <- Template: project context + load order
│   ├── _GOLDEN-RULES.md              <- Template: immutable rules
│   ├── _TODOS.md                     <- Template: task tracking
│   ├── _LESSONS-LEARNED.md           <- Template: problem/solution log
│   ├── _CONVERSATION-PREFERENCES.md  <- Template: output formatting
│   ├── _DESIGN-PREFERENCES.md        <- Template: visual design rules
│   ├── _VOICE-AND-TONE.md            <- Template: personality + language style
│   ├── _LONG-TERM-MEMORY.md          <- Template: persistent memory
│   ├── _SHORT-TERM-MEMORY.md         <- Template: multi-session context
│   ├── _RAM.md                       <- Template: single-session crash recovery
│   └── _SYSTEM_ARCHITECTURE.md       <- Template: technical diagrams
│
├── test/
│   └── cli.test.js                   <- 10 automated tests (Jest)
│
├── docs/
│   └── index.html                    <- GitHub Pages docs site
│
├── .github/
│   ├── CODEOWNERS                    <- @superbasicstudio owns all
│   ├── FUNDING.yml                   <- GitHub Sponsors + Patreon
│   ├── ISSUE_TEMPLATE/               <- Bug report + feature request templates
│   └── workflows/                    <- CI (Node 16/18/20) + CodeQL security scan
│
├── .gitignore                        <- Standard Node + secrets exclusions
└── node_modules/                     <- Dependencies (chalk, commander, fs-extra)
```

---

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Language | JavaScript (Node.js) |
| CLI framework | Commander.js |
| Terminal output | Chalk v4 |
| File operations | fs-extra |
| Testing | Jest |
| CI/CD | GitHub Actions (Node 16/18/20 matrix) |
| Security scanning | CodeQL |
| Package registry | npm |
| Hosting | GitHub (code) + GitHub Pages (docs) |

### No Executable Code in Templates

The templates are pure markdown. Zero dependencies. They work with any project, any language, any platform. The only executable code is the CLI installer (`bin/init.js`).

---

## CLI Usage

```bash
# Copy 3 essential templates (CLAUDE.md, _GOLDEN-RULES.md, _TODOS.md)
npx claude-anchor

# Copy all 11 templates
npx claude-anchor --full

# Copy into a specific directory
npx claude-anchor ./my-project

# Overwrite existing files
npx claude-anchor --force
```

---

## Template Hierarchy

### Essential (default install)
1. `CLAUDE.md` — Project context with session load order
2. `_GOLDEN-RULES.md` — Immutable constraints (read twice per session)
3. `_TODOS.md` — Priority-based task tracking

### Full (--full flag)
All essential templates plus:
4. `_LESSONS-LEARNED.md` — Problem/Cause/Solution/Prevention patterns
5. `_CONVERSATION-PREFERENCES.md` — Output formatting
6. `_DESIGN-PREFERENCES.md` — Visual design + accessibility rules
7. `_VOICE-AND-TONE.md` — Personality + language style
8. `_LONG-TERM-MEMORY.md` — Persistent memory
9. `_SHORT-TERM-MEMORY.md` — Multi-session temporary context
10. `_RAM.md` — Single-session volatile memory (crash recovery)
11. `_SYSTEM_ARCHITECTURE.md` — Technical diagrams

### Memory Model
```
_LONG-TERM-MEMORY.md           _SHORT-TERM-MEMORY.md          _RAM.md
 - NEVER delete                 - Persists 4-10 sessions       - Single session only
 - Accumulates over time        - Active issues & work          - Crash recovery
 - User preferences, decisions  - In-progress improvements      - Written continuously
 - System configuration         - Delete when items resolve     - Deleted at session end
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.3.1 | 2026-02-28 | Updated tests, hardened .gitignore, CodeQL + CI, GitHub community files |
| v1.3.0 | 2026-02-20 | Added _RAM.md, redefined short-term memory, git push directive, zero sycophancy |
| v1.2.0 | 2026-02-16 | Added _VOICE-AND-TONE.md and _DESIGN-PREFERENCES.md (10 templates) |
| v1.1.0 | 2026-02-01 | Batteries-included: Claude instructions in every template, CLI, starter security rules |
| v1.0.0 | 2025-06-17 | Initial open-source release with 7 template files |

---

## Key Design Decisions

- **Golden Rules read twice** — Critical rules at start AND end of load order prevents context decay in long sessions
- **Voice & Tone first** — Personality established before anything else so it colors all subsequent processing
- **No executable code in templates** — Framework-agnostic, works with any language/platform
- **Three-tier memory** — RAM (single session) → Short-term (4-10 sessions) → Long-term (permanent)
- **Placeholders, not examples** — Templates use `[PLACEHOLDER]` syntax so users fill in their own content

---

## Anti-Patterns (Avoid These)

- Don't store actual secrets in any template
- Don't leave stale `_SHORT-TERM-MEMORY.md` entries after items resolve
- Don't leave `_RAM.md` from previous sessions — indicates interrupted work
- Don't write vague golden rules — be specific, include "why"
- Don't skip the load order
- Don't let `_TODOS.md` go stale
- Don't add language/framework-specific content to templates — keep them universal

---

## Publishing Checklist

1. Update version in `package.json`
2. Update `CHANGELOG.md` with new entry
3. Run `npm test` — all 10 tests must pass
4. Update version footers in affected templates (`<!-- Claude Anchor vX.X -->`)
5. Commit with conventional commit message
6. `npm publish`
7. Create GitHub release with tag `vX.X.X`
8. Update docs site if needed

---

## GOLDEN RULE — YOU ARE NOT THE PROJECT MANAGER

**NEVER deprioritize, dismiss, or defer any issue the user raises.**

- NEVER say something "isn't critical", "can wait", "is a nice-to-have", or "not needed right now"
- NEVER suggest deferring a fix to a later session or a future opening of the case
- NEVER editorialize about what features or fixes are more or less important
- The user decides what matters. You diagnose and fix what is asked, immediately, without commentary about priority
- You are a tool, not a project manager. No opinions on roadmap, priority, or scheduling

**If a component is broken, diagnose it and fix it. Period.**

---

## GOLDEN RULE — NEVER BLAME HARDWARE FIRST

**When something isn't working, NEVER jump to "hardware issue", "bad wiring", or "damaged component" as a conclusion.**

- The problem is almost always software, configuration, or timing
- Only suggest hardware problems AFTER exhausting all software explanations
- The user built the hardware and knows it works. Trust that.
- Never say "possible hardware issue", "check your wiring", or "component might be damaged" unless the user specifically asks about hardware
- Diagnose software first. Always.

---

<!-- Claude Anchor v1.3 — claude-anchor project -->
