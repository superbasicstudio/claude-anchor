# RAM — Session State Recovery

**Purpose:** Volatile single-session memory. Written to continuously. Exists only to recover state if the session is interrupted.

---

## Instructions for Claude

**This is crash recovery memory — like RAM in a computer.** It holds the working state of the current session so that if the session is killed, context overflows, or work is interrupted, the next session can pick up exactly where this one left off.

**This file is the FIRST thing Claude reads if it exists (step 0 of the load order).** If `_RAM.md` is present at session start, it means the previous session was interrupted and this file contains the recovery state.

### Write Rules

- **Write to this file constantly during the session.** Every time meaningful progress is made — a bug is identified, a fix is applied, a file is modified, a decision is made — update this file.
- **Overwrite, don't append.** This file should always reflect the CURRENT state, not a log. Replace the contents each time you update it.
- **Be specific.** Include exact file paths, line numbers, function names, error messages, and command outputs. Vague summaries are useless for recovery.
- **Write before risky operations.** Before running commands that could crash the session or trigger context overflow, update this file first.

### Lifecycle

- **Created:** At session start or when substantive work begins
- **Updated:** Continuously throughout the session
- **Deleted:** When the session ends normally and work is committed/saved
- **Survives:** Session crashes, context overflow, terminal disconnects, timeouts

### Difference from Short-Term Memory

| | `_RAM.md` | `_SHORT-TERM-MEMORY.md` |
|---|---|---|
| **Scope** | Single session | Multiple sessions (4-10) |
| **Purpose** | Crash recovery | Active project context |
| **Contents** | Exact working state right now | Ongoing issues, active improvements, near-term notes |
| **Update frequency** | Constantly | When context changes between sessions |
| **Delete when** | Session ends normally | Items are resolved or become stale |

---

## Template Structure

When writing to this file during a session, use this structure:

```markdown
# RAM — [DATE] [TIME]

**SESSION STATUS:** [ACTIVE / INTERRUPTED / RECOVERING]
**WORKING ON:** [One-line description of current task]

---

## Current State

### What I Was Doing
- [Exact task in progress]
- [Which file(s) open / being modified]
- [What step of the process]

### Files Modified This Session
| File | Change | Status |
|------|--------|--------|
| [path/to/file.ext] | [What was changed] | [saved/unsaved/partial] |

### Last Action Taken
- [Exact command run, edit made, or decision reached]
- [Output/result of that action]

### Next Action Queued
- [What was about to happen when session ended]
- [Any prerequisites or context needed]

---

## Errors / Blockers in Progress

- [Any error messages being debugged]
- [Stack traces or log output]
- [Hypotheses being tested]

---

## Key Decisions Made This Session

- [Decision]: [Reasoning]
- [Decision]: [Reasoning]

---

## Recovery Instructions

If resuming from this file:
1. [First thing to verify]
2. [First thing to do]
3. [Continue with...]

---

*Last written: [TIMESTAMP]*
```

---

## Recovery Checklist for Claude

When a new session starts and `_RAM.md` exists:

- [ ] Read `_RAM.md` FIRST before any other Anchor file
- [ ] Check the timestamp — how old is this state?
- [ ] Understand what was in progress
- [ ] Verify file states match what's documented (files may have been partially saved)
- [ ] Follow the Recovery Instructions section
- [ ] Inform the user: "Recovering from interrupted session — here's where we left off"
- [ ] Resume work from the documented state
- [ ] Once recovered and stable, delete the old `_RAM.md` and start fresh

---

## File Management

**Creating:** Claude creates this file automatically when substantive work begins in a session.

**Updating:** Claude overwrites this file throughout the session as state changes. Every meaningful action should trigger an update.

**Deleting:** When the session ends normally:
1. Work is committed or saved
2. Delete `_RAM.md`
3. If any context should persist across sessions, move it to `_SHORT-TERM-MEMORY.md` instead

**If `_RAM.md` exists at session start:** The previous session was interrupted. Read it, recover, then delete and recreate fresh for the current session.

---

**CRITICAL:** This file is NOT a log. It is NOT a journal. It is a snapshot of working state at this exact moment. Keep it current, keep it specific, keep it useful for recovery.

<!-- Claude Anchor v1.3 -->
