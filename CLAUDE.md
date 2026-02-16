# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical Context (Read First)
- **Project**: Claude Anchor — persistent memory and behavioral context framework
- **Type**: Markdown template collection (no executable code)
- **Core Mechanic**: Structured templates that give Claude persistent memory, enforceable rules, and session continuity
- **Companion Project**: [Claude Conductor](https://github.com/superbasicstudio/claude-conductor) (codebase documentation)
- **Platform Support**: Any project using Claude Code or AI assistants
- **DO NOT**: Store actual passwords, API keys, or secrets in any template

## Project Architecture

Claude Anchor is a **behavioral context framework** — a set of markdown templates that manage Claude's memory, rules, and communication preferences across sessions.

### Template Files (in `templates/`)
1. **CLAUDE.md** — Project context template with mandatory session load order
2. **_GOLDEN-RULES.md** — Immutable constraints (read twice per session)
3. **_TODOS.md** — Active tasks with priorities and blockers
4. **_LESSONS-LEARNED.md** — Past mistakes and their fixes
5. **_CONVERSATION-PREFERENCES.md** — Output formatting and communication style
6. **_DESIGN-PREFERENCES.md** — Visual design, hover states, accessibility, iconography, UX rules
7. **_VOICE-AND-TONE.md** — Personality, attitude, language style, communication vibe
8. **_LONG-TERM-MEMORY.md** — Persistent knowledge (NEVER delete)
9. **_SHORT-TERM-MEMORY.md** — Session context (delete when done)
10. **_SYSTEM_ARCHITECTURE.md** — Technical diagrams and system design

### Session Load Order
```
1. _VOICE-AND-TONE.md       <- READ FIRST — personality and language style
2. _GOLDEN-RULES.md         <- BINDING rules — MUST FOLLOW every session
3. _TODOS.md                <- Pending work
4. _LESSONS-LEARNED.md      <- Avoid past mistakes
5. _CONVERSATION-PREFERENCES.md <- Output formatting
6. _DESIGN-PREFERENCES.md   <- Visual design and UX rules
7. _GOLDEN-RULES.md         <- Re-read (prevent context decay)
8. CLAUDE.md                <- Full project context
9. BEGIN conversation
```

## Key Design Decisions

### Memory Hierarchy
- **Long-term memory** — Persistent, never deleted, accumulates over months/years
- **Short-term memory** — Temporary, deleted after task completion, prevents stale context

### Golden Rules Read Twice
Critical rules are read at the start AND re-read before conversation begins. This prevents early context from being "forgotten" in long sessions.

### No Executable Code
This is intentionally a pure markdown framework with zero dependencies. It works with any project, any language, any platform.

## Companion Project: Claude Conductor

Two repos, two tools, complementary not competitive.

- **Anchor** is the **behavioral brain** — rules, memory, preferences, session continuity
- **Conductor** is the **codebase brain** — architecture, APIs, build systems, development history

Together they give Claude full context — what the project is AND how to work on it.

## Anti-Patterns (Avoid These)
- Don't store actual secrets in _LONG-TERM-MEMORY.md
- Don't leave stale _SHORT-TERM-MEMORY.md files around after tasks complete
- Don't write vague golden rules — be specific and include "why"
- Don't skip the load order — it exists for a reason
- Don't let _TODOS.md go stale — update it regularly

## Version History
- **v1.2.0** — Added `_DESIGN-PREFERENCES.md` and `_VOICE-AND-TONE.md` templates (10 templates total)
- **v1.0.0** — Initial open-source release with 7 template files

---

## GOLDEN RULE — YOU ARE NOT THE PROJECT MANAGER

**NEVER deprioritize, dismiss, or defer any issue the user raises.**

- NEVER say something "isn't critical", "can wait", "is a nice-to-have", or "not needed right now"
- NEVER suggest deferring a fix to a later session or a future opening of the case
- NEVER editorialize about what features or fixes are more or less important
- The user decides what matters. You diagnose and fix what is asked, immediately, without commentary about priority
- You are a tool, not a project manager. No opinions on roadmap, priority, or scheduling

**If a component is broken, diagnose it and fix it. Period.**
