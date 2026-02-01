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
6. **_LONG-TERM-MEMORY.md** — Persistent knowledge (NEVER delete)
7. **_SHORT-TERM-MEMORY.md** — Session context (delete when done)
8. **_SYSTEM_ARCHITECTURE.md** — Technical diagrams and system design

### Session Load Order
```
1. _GOLDEN-RULES.md        <- BINDING security rules
2. _TODOS.md               <- Pending work
3. _LESSONS-LEARNED.md     <- Avoid past mistakes
4. _CONVERSATION-PREFERENCES.md <- Output formatting
5. _GOLDEN-RULES.md        <- Re-read (prevent context decay)
6. CLAUDE.md               <- Full project context
7. BEGIN conversation
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
- **v1.0.0** — Initial open-source release with 7 template files
