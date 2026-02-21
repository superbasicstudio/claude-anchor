# [PROJECT_NAME]

**Location:** `[PATH]`
**Purpose:** [One-line description of what this project does]
**Last Updated:** [DATE]

---

## Instructions for Claude

**This file is the entry point for all project context.** Claude Anchor is a behavioral context framework — it gives you persistent memory, enforceable rules, and session continuity.

**On every session start, you MUST follow the load order below.** Do not skip steps. Do not reorder. The framework depends on this sequence to function correctly.

After loading, reference these files throughout the session:
- Check `_VOICE-AND-TONE.md` for communication style, personality, and language preferences — this shapes ALL output
- Check `_GOLDEN-RULES.md` before any operation that modifies data, deploys code, or touches credentials
- Check `_TODOS.md` before starting new work to understand priorities
- Check `_LESSONS-LEARNED.md` before proposing solutions to see if the problem has been solved before
- Check `_LONG-TERM-MEMORY.md` for user preferences, system details, and project conventions
- Check `_DESIGN-PREFERENCES.md` before writing any CSS, styling, or UI components
- Check `_SHORT-TERM-MEMORY.md` (if it exists) for active multi-session context
- Write to `_RAM.md` continuously — update it after every meaningful action during the session

**When this file changes:** Re-read it completely. Architecture and context may have shifted.

---

## CLAUDE SESSION STARTUP - MANDATORY LOAD ORDER

**Before engaging with user, Claude MUST read files in this EXACT order:**

```
0. _RAM.md                       ← IF EXISTS: recover interrupted session state FIRST
1. _SHORT-TERM-MEMORY.md         ← IF EXISTS: read active multi-session context
2. _VOICE-AND-TONE.md            ← Personality, attitude, language style
3. _GOLDEN-RULES.md              ← BINDING rules — security and constraints (MUST FOLLOW)
4. _TODOS.md                     ← Read thoroughly (know what's pending)
5. _LESSONS-LEARNED.md           ← Read (avoid past mistakes)
6. _LONG-TERM-MEMORY.md          ← Read (persistent knowledge and preferences)
7. _CONVERSATION-PREFERENCES.md  ← Read (display/output preferences)
8. _DESIGN-PREFERENCES.md        ← Read (visual design and UX rules)
9. _GOLDEN-RULES.md              ← Re-read AGAIN (reinforce - DO NOT FORGET)
10. CLAUDE.md (this file)         ← Then read this for full project context
11. BEGIN conversation            ← Now ready to assist
```

**Why this order:**
- **RAM (if present) restores interrupted session state immediately** — this is crash recovery, read before everything
- Short-term memory (if present) provides active multi-session context — ongoing issues, in-progress work
- **Voice and tone sets Claude's personality before anything else happens**
- Golden Rules are BINDING constraints that MUST be followed every session — loaded right after tone so Claude knows HOW to talk and WHAT it cannot do before any work begins
- TODOs show pending work and priorities
- Lessons prevent repeating past mistakes
- Long-term memory provides user preferences and system configuration
- Preferences ensure correct output formatting
- Design preferences enforce visual and UX consistency
- Re-reading Golden Rules prevents them from being "forgotten" in long contexts

**DO NOT SKIP ANY STEP. DO NOT REORDER.**

---

## Anchor Files Reference

| File | Purpose | Lifecycle | Priority |
|------|---------|-----------|----------|
| `_RAM.md` | Single-session volatile state — crash recovery | **Auto-managed** — written continuously, deleted at session end | **RECOVERY** |
| `_VOICE-AND-TONE.md` | Personality, attitude, language style — loaded FIRST | Permanent — adjust to match your working style | **FIRST** |
| `_GOLDEN-RULES.md` | Immutable constraints Claude MUST follow every session | Permanent — update when new rules needed | **BINDING** |
| `_TODOS.md` | Active tasks with priorities and blockers | Ongoing — tasks move from pending to completed | High |
| `_LESSONS-LEARNED.md` | Past mistakes with root cause and prevention | Permanent — add entries when issues discovered | High |
| `_CONVERSATION-PREFERENCES.md` | Output formatting and communication style | Permanent — adjust to match your preferences | Medium |
| `_DESIGN-PREFERENCES.md` | Visual design, hover states, accessibility, UX rules | Permanent — adjust to match your design system | High |
| `_LONG-TERM-MEMORY.md` | Persistent knowledge (user, system, project) | **NEVER delete** — accumulates over time | High |
| `_SHORT-TERM-MEMORY.md` | Multi-session temporary context (active issues, in-progress work) | **Delete when all items resolved** — persists 4-10 sessions | Conditional |
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
| [_RAM.md](./_RAM.md) | Crash recovery — single-session state | Written continuously; read at session start if exists |
| [_VOICE-AND-TONE.md](./_VOICE-AND-TONE.md) | Personality and language style | Always — shapes all communication |
| [_GOLDEN-RULES.md](./_GOLDEN-RULES.md) | Immutable rules | Before any destructive operation |
| [_TODOS.md](./_TODOS.md) | Planned improvements | When starting new work |
| [_LESSONS-LEARNED.md](./_LESSONS-LEARNED.md) | Past issues and fixes | Before proposing solutions |
| [_CONVERSATION-PREFERENCES.md](./_CONVERSATION-PREFERENCES.md) | Display/output preferences | When formatting output |
| [_DESIGN-PREFERENCES.md](./_DESIGN-PREFERENCES.md) | Visual design and UX rules | When writing CSS, styling, or UI components |
| [_LONG-TERM-MEMORY.md](./_LONG-TERM-MEMORY.md) | Persistent knowledge | For user preferences and system details |
| [_SHORT-TERM-MEMORY.md](./_SHORT-TERM-MEMORY.md) | Multi-session temporary context | Active issues and in-progress work across sessions |
| [_SYSTEM_ARCHITECTURE.md](./_SYSTEM_ARCHITECTURE.md) | Technical diagrams | When discussing architecture |

---

## Version Info

- Version: [X.Y]
- Last Updated: [DATE]
- Author: [NAME/ORG]

---

<!-- CUSTOMIZE: Add project-specific rules or constraints below -->
<!-- Example: terminal limitations, deployment rules, team conventions -->
<!-- Claude Anchor v1.3 -->

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

