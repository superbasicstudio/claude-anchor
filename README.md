<p align="center">
  <strong>Claude Anchor</strong>
</p>

<h1 align="center">Claude Anchor</h1>

<p align="center">
  <em>for Claude Code command line</em>
</p>

<p align="center">
  <em>A persistent memory, rules, and behavioral context framework for AI-assisted development with Claude Code.</em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/claude-anchor">
    <img src="https://img.shields.io/npm/v/claude-anchor.svg" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/claude-anchor">
    <img src="https://img.shields.io/npm/dm/claude-anchor.svg" alt="npm downloads">
  </a>
  <a href="https://github.com/superbasicstudio/claude-anchor/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/claude-anchor.svg" alt="license">
  </a>
</p>

---

> [!IMPORTANT]
> ## Open Source Project Notice
>
> **This is open source software maintained by ONE individual in their free time.**
>
> While the templates are tested and reviewed before releases, you should **ALWAYS** have:
> - A proper GitHub/Git strategy in place
> - Regular backups of your work
> - Version control before running ANY script from the internet
>
> **DISCLAIMER**: This software is provided "as is" without warranty of any kind. Super Basic Studio and the maintainers of Claude Anchor are not responsible for any issues, data loss, or damages that may occur from using this tool. By using Claude Anchor, you acknowledge that you run it at your own risk.

---

Give Claude persistent memory, enforceable rules, and behavioral consistency across sessions. Claude Anchor is the **behavioral brain** — it tells Claude *how to think and behave* in your project.

## Table of Contents

- [Quick Start](#quick-start)
- [What It Does](#what-it-does)
- [Templates](#templates)
  - [Minimal Setup](#minimal-setup-simple-projects)
  - [Full Setup](#full-setup-complex-projects)
- [Session Load Order](#session-load-order)
- [Template Overview](#template-overview)
- [Customization Guide](#customization-guide)
- [Naming Conventions](#naming-conventions)
- [Companion Project: Claude Conductor](#companion-project-claude-conductor)
- [Contributing](#contributing)
- [Privacy & Security](#privacy--security)
- [License](#license)

### External Resources

- [npm package](https://www.npmjs.com/package/claude-anchor) — `npx claude-anchor`
- [Claude Conductor](https://github.com/superbasicstudio/claude-conductor) — Companion codebase documentation framework
- [Changelog](CHANGELOG.md)
- [Security Policy](SECURITY.md)

## Quick Start

[Back to top](#table-of-contents)

### Option 1: npx (Recommended)

```bash
# Copy 3 essential templates into your project
npx claude-anchor

# Copy all 8 templates
npx claude-anchor --full

# Copy into a specific directory
npx claude-anchor ./my-project

# Overwrite existing files
npx claude-anchor --force
```

### Option 2: Manual (git clone)

```bash
# Clone the templates
git clone https://github.com/superbasicstudio/claude-anchor.git

# Copy the templates you need into your project
cp claude-anchor/templates/_GOLDEN-RULES.md ./your-project/
cp claude-anchor/templates/_TODOS.md ./your-project/
cp claude-anchor/templates/_LONG-TERM-MEMORY.md ./your-project/
```

### Then:

1. Edit each `.md` file, replacing `[PLACEHOLDERS]` with your project-specific content
2. Customize `_GOLDEN-RULES.md` with your project's constraints
3. Claude reads these files automatically at the start of each session

## What It Does

[Back to top](#table-of-contents)

Claude Anchor provides a structured template system that gives Claude:

- **Persistent memory** — Long-term knowledge that survives across sessions (user preferences, project conventions, important decisions)
- **Session continuity** — Short-term context for resuming work after interruptions or reboots
- **Enforceable rules** — Immutable constraints ("NEVER do X") that Claude must follow, read twice per session to prevent context decay
- **Conversation preferences** — Standardized output formatting, verbosity levels, and communication style
- **Lessons learned** — A living record of past mistakes and their fixes, so Claude doesn't repeat them
- **Task tracking** — Priority-based TODOs with blockers and dependencies

### The Problem It Solves

Without persistent context, Claude:
- Loses crucial knowledge between sessions
- Repeats the same mistakes
- Forgets your preferences and conventions
- Can't resume interrupted work
- Has no enforceable behavioral constraints

Anchor fixes all of this with a structured set of markdown templates that Claude reads at session start.

## Templates

[Back to top](#table-of-contents)

### Minimal Setup (Simple Projects)

```
your-project/
├── CLAUDE.md                    # Your existing project docs
├── _GOLDEN-RULES.md             # Immutable rules
└── _TODOS.md                    # Active tasks
```

### Full Setup (Complex Projects)

```
your-project/
├── CLAUDE.md                    # Project context (with load order block)
├── _GOLDEN-RULES.md             # Immutable rules (read twice per session)
├── _TODOS.md                    # Active tasks and priorities
├── _LESSONS-LEARNED.md          # Past mistakes and fixes
├── _CONVERSATION-PREFERENCES.md # Output formatting and communication style
├── _LONG-TERM-MEMORY.md         # Persistent memory (NEVER delete)
├── _SHORT-TERM-MEMORY.md        # Session context (delete when done)
└── _SYSTEM_ARCHITECTURE.md      # Technical diagrams and system design
```

## Session Load Order

[Back to top](#table-of-contents)

The CLAUDE.md template includes a mandatory startup block. When Claude enters a project with Anchor files, it reads them in this exact sequence:

```
1. _GOLDEN-RULES.md              <- Security rules (BINDING)
2. _TODOS.md                     <- Know what's pending
3. _LESSONS-LEARNED.md           <- Avoid past mistakes
4. _CONVERSATION-PREFERENCES.md  <- Output formatting
5. _GOLDEN-RULES.md              <- Re-read (reinforce)
6. CLAUDE.md                     <- Full project context
7. BEGIN conversation
```

**Why read GOLDEN-RULES twice?** In long contexts, content read early can get "forgotten" as the context window fills. Re-reading critical rules last keeps them fresh and prevents behavioral drift during the session.

## Template Overview

[Back to top](#table-of-contents)

| Template | Purpose | Lifecycle |
|----------|---------|-----------|
| `_GOLDEN-RULES.md` | Immutable constraints — things Claude must NEVER/ALWAYS do | Permanent. Updated when new rules are needed. |
| `_TODOS.md` | Active tasks with priorities, blockers, and dependencies | Ongoing. Tasks move from pending to completed. |
| `_LESSONS-LEARNED.md` | Documented mistakes with root cause and prevention | Permanent. Add entries immediately when issues are discovered. |
| `_CONVERSATION-PREFERENCES.md` | Output formatting, colors, progress bars, verbosity | Permanent. Adjusted to match your communication style. |
| `_LONG-TERM-MEMORY.md` | Persistent knowledge: user identity, system config, code style, decisions | **NEVER delete.** Accumulates over months/years. |
| `_SHORT-TERM-MEMORY.md` | Session context: current task, progress, what to resume | **Delete when task is complete.** Prevents stale context. |
| `_SYSTEM_ARCHITECTURE.md` | ASCII diagrams, data flows, component maps, security model | On-demand reference. Updated when architecture changes. |

### Memory Model

```
_LONG-TERM-MEMORY.md                   _SHORT-TERM-MEMORY.md
 - NEVER delete                         - DELETE when task complete
 - Accumulates over time                - Temporary session state
 - User preferences, decisions          - Current task progress
 - System configuration                 - Reboot/restart status
 - Always available to Claude           - Prevents stale context
```

## Customization Guide

[Back to top](#table-of-contents)

All template files use placeholder syntax:

```
[PROJECT_NAME]  — Your project name
[DESCRIPTION]   — Brief description
[DATE]          — Current date
[PATH]          — File/folder paths
[COMMAND]       — CLI commands
```

### Tips

1. **_GOLDEN-RULES.md** — Be specific. Vague rules get ignored. Include "why" for each rule.
2. **_TODOS.md** — Keep it current. Stale TODOs confuse Claude about priorities.
3. **_LESSONS-LEARNED.md** — Add entries immediately when you discover gotchas. Future you will thank past you.
4. **_CONVERSATION-PREFERENCES.md** — Include visual examples of your preferred output format.
5. **_LONG-TERM-MEMORY.md** — Start with your identity, system environment, and code style. It grows naturally over time.
6. **_SHORT-TERM-MEMORY.md** — Create one when you need to pause work. Delete it when you resume and finish.
7. **_SYSTEM_ARCHITECTURE.md** — ASCII diagrams are universally understood. Use them.

## Naming Conventions

[Back to top](#table-of-contents)

| Pattern | Meaning | Example |
|---------|---------|---------|
| `ALLCAPS.md` | Core documentation | `CLAUDE.md`, `TODOS.md` |
| `_UNDERSCORE.md` | Supporting/reference docs | `_SYSTEM_ARCHITECTURE.md` |
| `HYPHENATED.md` | Multi-word names | `GOLDEN-RULES.md`, `LESSONS-LEARNED.md` |

The underscore prefix keeps supporting files visually grouped at the top of directory listings.

## Companion Project: Claude Conductor

[Back to top](#table-of-contents)

**Two repos, two tools, complementary not competitive.**

Anchor is the **behavioral brain** — it manages Claude's rules, memory, conversation preferences, and session continuity. It tells Claude *how to think and behave*.

[Claude Conductor](https://github.com/superbasicstudio/claude-conductor) is the **codebase brain** — it documents your project's architecture, APIs, build systems, errors, and development history. It tells Claude *what your project is*.

Together they give Claude full context — what the project is AND how to work on it.

| | Conductor | Anchor |
|---|---|---|
| **Focus** | Codebase documentation | AI behavior and memory |
| **Generates** | ARCHITECTURE.md, BUILD.md, API.md, JOURNAL.md | _GOLDEN-RULES.md, _LONG-TERM-MEMORY.md, _TODOS.md |
| **Delivery** | `npx claude-conductor` (automated CLI) | Copy templates into project |
| **Answers** | "What is this codebase?" | "How should Claude behave?" |

A project can use one or both. They don't overlap — they stack.

## Contributing

[Back to top](#table-of-contents)

We welcome contributions! If you have ideas for new templates, improvements to existing ones, or better documentation:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please keep templates framework-agnostic — they should work with any project in any language.

## Privacy & Security

[Back to top](#table-of-contents)

**Claude Anchor is a collection of markdown templates. It:**
- Has no executable code
- Makes zero network requests
- Has no dependencies
- Has no telemetry or analytics
- Runs entirely on your local machine
- Never collects or transmits any data

The `_LONG-TERM-MEMORY.md` template includes a warning to NEVER store actual passwords or secrets. Follow this guidance.

## License

[Back to top](#table-of-contents)

BSD 2-Clause (c) Super Basic Studio

---

Made with love by [Super Basic Studio](https://superbasic.studio)

## Keywords

claude, claude code, claude anchor, ai memory, ai context, persistent memory, rules framework, claude code framework, vibe coding, super basic studio
