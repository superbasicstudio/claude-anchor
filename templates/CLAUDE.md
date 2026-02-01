# [PROJECT_NAME]

**Location:** `[PATH]`
**Purpose:** [One-line description of what this project does]
**Last Updated:** [DATE]

---

## Instructions for Claude

**This file is the entry point for all project context.** Claude Anchor is a behavioral context framework — it gives you persistent memory, enforceable rules, and session continuity.

**On every session start, you MUST follow the load order below.** Do not skip steps. Do not reorder. The framework depends on this sequence to function correctly.

After loading, reference these files throughout the session:
- Check `_GOLDEN-RULES.md` before any operation that modifies data, deploys code, or touches credentials
- Check `_TODOS.md` before starting new work to understand priorities
- Check `_LESSONS-LEARNED.md` before proposing solutions to see if the problem has been solved before
- Check `_LONG-TERM-MEMORY.md` for user preferences, system details, and project conventions
- Check `_SHORT-TERM-MEMORY.md` (if it exists) to resume interrupted work

**When this file changes:** Re-read it completely. Architecture and context may have shifted.

---

## CLAUDE SESSION STARTUP - MANDATORY LOAD ORDER

**Before engaging with user, Claude MUST read files in this EXACT order:**

```
0. _SHORT-TERM-MEMORY.md   ← IF EXISTS: read FIRST (resume interrupted work)
1. _GOLDEN-RULES.md        ← Read FIRST (security rules - BINDING)
2. _TODOS.md               ← Read thoroughly (know what's pending)
3. _LESSONS-LEARNED.md     ← Read (avoid past mistakes)
4. _LONG-TERM-MEMORY.md    ← Read (persistent knowledge and preferences)
5. _CONVERSATION-PREFERENCES.md  ← Read (display/output preferences)
6. _GOLDEN-RULES.md        ← Re-read AGAIN (reinforce - DO NOT FORGET)
7. CLAUDE.md (this file)   ← Then read this for full project context
8. BEGIN conversation       ← Now ready to assist
```

**Why this order:**
- Short-term memory (if present) restores interrupted session context immediately
- Security rules must be internalized before ANY action
- TODOs show pending work and priorities
- Lessons prevent repeating past mistakes
- Long-term memory provides user preferences and system configuration
- Preferences ensure correct output formatting
- Re-reading Golden Rules prevents them from being "forgotten" in long contexts

**DO NOT SKIP ANY STEP. DO NOT REORDER.**

---

## Anchor Files Reference

| File | Purpose | Lifecycle | Priority |
|------|---------|-----------|----------|
| `_GOLDEN-RULES.md` | Immutable constraints Claude MUST follow | Permanent — update when new rules needed | BINDING |
| `_TODOS.md` | Active tasks with priorities and blockers | Ongoing — tasks move from pending to completed | High |
| `_LESSONS-LEARNED.md` | Past mistakes with root cause and prevention | Permanent — add entries when issues discovered | High |
| `_CONVERSATION-PREFERENCES.md` | Output formatting and communication style | Permanent — adjust to match your preferences | Medium |
| `_LONG-TERM-MEMORY.md` | Persistent knowledge (user, system, project) | **NEVER delete** — accumulates over time | High |
| `_SHORT-TERM-MEMORY.md` | Session context for resuming interrupted work | **Delete when task complete** | Conditional |
| `_SYSTEM_ARCHITECTURE.md` | Technical diagrams, data flow, security model | On-demand — update when architecture changes | Reference |

---

## TL;DR - Quick Commands

<!-- CUSTOMIZE: Add your most common commands here -->

```bash
# [Most common operation]
[COMMAND]

# [Second most common]
[COMMAND]

# [Third most common]
[COMMAND]

# Help
[COMMAND] --help
```

---

## Architecture

<!-- CUSTOMIZE: Add ASCII diagram of your system -->

```
┌─────────────────────────────────────────────────────┐
│                   [PROJECT_NAME]                     │
│                                                      │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────┐ │
│  │ Component A │───►│ Component B │───►│ Output  │ │
│  └─────────────┘    └─────────────┘    └─────────┘ │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Components

| Component | Location | Purpose |
|-----------|----------|---------|
| [Component A] | ./path/to/a | [Description] |
| [Component B] | ./path/to/b | [Description] |
| [Config] | ./config/ | [Description] |

---

## Usage

### [Primary Script/Command]

```bash
# Basic usage
[COMMAND] [args]

# With options
[COMMAND] --option1 --option2 [args]
```

**Options:**

| Flag | Description | Default |
|------|-------------|---------|
| `--option1` | [Description] | [default] |
| `--option2` | [Description] | [default] |
| `--help` | Show help | - |

**Exit Codes:**
- 0 = Success
- 1 = Error (describe)
- 2 = Error (describe)

---

## Configuration

<!-- CUSTOMIZE: Document configuration files/options -->

### Config File Location

`[PATH]/config.yaml` or `~/.config/[PROJECT_NAME]/`

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `[VAR_NAME]` | [Description] | [default] |

**Security note:** Never store credentials or API keys directly in configuration files. Use environment variables or a secrets manager.

---

## File Locations

| Purpose | Path |
|---------|------|
| Main scripts | [PATH] |
| Configuration | [PATH] |
| Logs | [PATH] |
| Temp files | [PATH] |
| Output | [PATH] |

---

## Troubleshooting

### [Common Problem 1]

```bash
# Solution
[COMMAND]
```

### [Common Problem 2]

[Explanation and fix]

---

## Related Anchor Files

| File | Purpose | When to Reference |
|------|---------|-------------------|
| [_GOLDEN-RULES.md](./_GOLDEN-RULES.md) | Immutable rules | Before any destructive operation |
| [_LESSONS-LEARNED.md](./_LESSONS-LEARNED.md) | Past issues and fixes | Before proposing solutions |
| [_TODOS.md](./_TODOS.md) | Planned improvements | When starting new work |
| [_CONVERSATION-PREFERENCES.md](./_CONVERSATION-PREFERENCES.md) | Display/output preferences | When formatting output |
| [_LONG-TERM-MEMORY.md](./_LONG-TERM-MEMORY.md) | Persistent knowledge | For user preferences and system details |
| [_SHORT-TERM-MEMORY.md](./_SHORT-TERM-MEMORY.md) | Session context | When resuming interrupted work |
| [_SYSTEM_ARCHITECTURE.md](./_SYSTEM_ARCHITECTURE.md) | Technical diagrams | When discussing architecture |

---

## Version Info

- Version: [X.Y]
- Last Updated: [DATE]
- Author: [NAME/ORG]

---

<!-- CUSTOMIZE: Add project-specific rules or constraints below -->
<!-- Example: terminal limitations, deployment rules, team conventions -->
<!-- Claude Anchor v1.0 -->
