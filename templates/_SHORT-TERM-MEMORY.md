# Short-Term Memory — [PROJECT_NAME]

**Purpose:** Multi-session temporary context. Tracks active issues, ongoing improvements, and near-term notes that persist across several sessions but are NOT permanent.

---

## Instructions for Claude

**This file bridges the gap between single-session RAM and permanent long-term memory.** It holds context that matters for the next 4-10 sessions — things being actively worked on, recently discovered issues, temporary decisions, and in-progress improvements.

**Read this file at session start (step 1 of the load order, after `_RAM.md` if it exists).** Use it to understand what's currently in flight across sessions.

### What Goes Here

- **Active issues being debugged or improved** — problems identified but not yet fully resolved
- **In-progress feature work** — multi-session tasks that span several conversations
- **Temporary decisions** — choices made for now that may be revisited
- **Recent discoveries** — things learned that are relevant to current work but not yet permanent knowledge
- **Cross-session context** — "we tried X last session and it didn't work, trying Y next"

### What Does NOT Go Here

| Belongs elsewhere | File |
|---|---|
| Single-session crash recovery state | `_RAM.md` |
| Permanent knowledge and preferences | `_LONG-TERM-MEMORY.md` |
| Documented mistakes with root cause analysis | `_LESSONS-LEARNED.md` |
| Formal task tracking with priorities | `_TODOS.md` |

### Lifecycle

- **Created:** When multi-session work begins or context needs to persist beyond a single session
- **Updated:** At session end — capture anything the next session should know
- **Entries removed:** When an issue is resolved, a feature ships, or a note becomes stale
- **Entire file deleted:** When all tracked items are resolved and nothing is in flight
- **Promoted:** If a temporary note proves permanently valuable, move it to `_LONG-TERM-MEMORY.md`

### Staleness Rule

**Review this file at the start of every session.** If an entry is older than 2 weeks and hasn't been touched, either:
1. Resolve it and remove it
2. Promote it to `_LONG-TERM-MEMORY.md` if it's permanent knowledge
3. Move it to `_TODOS.md` if it's deferred work
4. Delete it if it's no longer relevant

---

## Template Structure

```markdown
# Short-Term Memory — [PROJECT_NAME]

*Last reviewed: [DATE]*

---

## Active Issues

### [Issue title] — Started [DATE]
- **Status:** [investigating / fix in progress / testing / nearly resolved]
- **Context:** [What's happening, what we know so far]
- **Last session:** [What was tried, what worked, what didn't]
- **Next session:** [What to try next]

### [Issue title] — Started [DATE]
- **Status:** [status]
- **Context:** [context]

---

## In-Progress Work

### [Feature/task name] — Started [DATE]
- **Goal:** [What we're building/fixing]
- **Progress:** [X of Y steps done, or percentage, or description]
- **Decisions made:** [Key choices and why]
- **Blockers:** [If any]

---

## Temporary Notes

- [Note]: [Context for why it matters right now] — [DATE]
- [Note]: [Context] — [DATE]

---

## Recently Resolved (Remove After Confirming Stable)

- [x] [What was resolved] — [DATE resolved]
- [x] [What was resolved] — [DATE resolved]

---

*Updated: [DATE]*
```

---

## Memory Hierarchy

```
_RAM.md                        _SHORT-TERM-MEMORY.md           _LONG-TERM-MEMORY.md
 - Single session only          - Persists 4-10 sessions        - NEVER delete
 - Crash recovery               - Active issues & work          - Permanent knowledge
 - Overwritten constantly        - Updated between sessions      - Accumulates over time
 - Deleted at session end        - Deleted when items resolve    - Always available
 - "What am I doing NOW?"        - "What are we working ON?"     - "What do I always need to know?"
```

---

## File Management

**Creating:** Create when work spans multiple sessions or when you discover something the next session needs to know.

**Updating:** Update at the end of each session with anything the next session should be aware of. Remove resolved items.

**Deleting:** Delete the entire file when nothing is actively in flight. An empty short-term memory means all near-term work is done.

**Do NOT let this file go stale.** A short-term memory full of month-old entries is worse than no file at all — it wastes context and misleads Claude about what's current.

---

**This file is temporary by design. If something belongs here forever, it belongs in `_LONG-TERM-MEMORY.md` instead.**

<!-- Claude Anchor v1.3 -->
