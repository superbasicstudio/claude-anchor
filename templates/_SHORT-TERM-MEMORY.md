# SHORT-TERM-MEMORY.md Template

**Purpose:** Maintain Claude's context and awareness between sessions or restarts.

This is Claude's "short-term memory" - a way to preserve session context when:
- System reboots are required
- Sessions time out or restart
- Work spans multiple conversations
- Context needs to be restored quickly

**The memory is temporary** - delete/wipe after the task is complete.

---

## Instructions for Claude

When a new session starts and `SHORT-TERM-MEMORY.md` exists:

1. **Read the memory file FIRST** before responding
2. **Acknowledge context** - Let user know you've caught up
3. **Verify current state** - Confirm where things left off
4. **Resume seamlessly** - Continue from the documented step

**Memory file locations:**
- `$HOME/SHORT-TERM-MEMORY.md` - Main/default location
- `[PROJECT]/SHORT-TERM-MEMORY.md` - Project-specific

---

## Template Structure

When creating a memory file, use this structure:

```markdown
# SHORT-TERM-MEMORY - [DATE]

**STATUS:** [WAITING FOR REBOOT / IN PROGRESS / BLOCKED / WAITING FOR USER]

Brief description of what's happening (e.g., "User is rebooting to complete X")

---

## What We Were Working On

### 1. [Task Name] - [COMPLETED/IN PROGRESS/PENDING]
- What was done
- What remains

### 2. [Task Name] - [STATUS]
- Details...

---

## Current Step

**Where we stopped:**
- Specific step or action in progress
- What the user needs to do (if anything)

**Next Steps After Resume:**
1. Step one
2. Step two
3. Step three

---

## Commands/Changes Made This Session

```bash
# Any new commands, scripts, or aliases created
command --example
```

---

## Context Notes

- Important decisions made
- User preferences discovered
- Blockers or issues encountered

---

*Last updated: [TIMESTAMP]*
```

---

## Status Types

### WAITING FOR REBOOT
```markdown
**STATUS: WAITING FOR REBOOT**
User is rebooting to complete [installation/update/driver enrollment/etc.]

After reboot, user needs to:
1. [Action required on boot screen, if any]
2. [Verification step]

Claude should:
1. Ask if reboot/enrollment succeeded
2. Verify with: `[verification command]`
3. Continue with: [next task]
```

### IN PROGRESS
```markdown
**STATUS: IN PROGRESS**
Currently working on: [task]
Progress: [X of Y steps complete]
```

### WAITING FOR USER
```markdown
**STATUS: WAITING FOR USER**
Waiting for: [download to complete / manual installation / decision / etc.]
Once complete, Claude should: [next steps]
```

### BLOCKED
```markdown
**STATUS: BLOCKED**
Blocked by: [issue description]
Workaround attempted: [what was tried]
Needs: [what's required to unblock]
```

---

## Resume Checklist for Claude

When resuming from a catch-up document:

- [ ] Read the STATUS line first
- [ ] Understand what was in progress
- [ ] Note what the user needed to do
- [ ] Identify the next steps
- [ ] Ask user to confirm previous step completed (if needed)
- [ ] Run any verification commands
- [ ] Continue with next documented step

---

## File Management

**Creating a memory file:**
```bash
# Main location (home directory)
$HOME/SHORT-TERM-MEMORY.md

# Project-specific (in project folder)
[PROJECT_PATH]/SHORT-TERM-MEMORY.md
```

**Wiping SHORT-TERM memory after completion:**
- DELETE `SHORT-TERM-MEMORY.md` when the task/project is complete
- Or clear contents and update STATUS to "MEMORY CLEARED"
- Short-term memory should NOT persist indefinitely - it's temporary by design

**CRITICAL - Memory File Types:**
| File | Type | Action After Task |
|------|------|-------------------|
| `SHORT-TERM-MEMORY.md` | Temporary | DELETE when task complete |
| `LONG-TERM-MEMORY.md` | Persistent | NEVER delete unless explicitly requested |

**NEVER delete LONG-TERM-MEMORY.md** - only wipe SHORT-TERM files.
When in doubt, ASK before deleting any memory file.

---

## Example: Reboot Scenario

```markdown
# SHORT-TERM-MEMORY - [DATE]

**STATUS: WAITING FOR REBOOT**

[USER_NAME] is rebooting to complete [TASK - e.g., driver installation, system update].

---

## What We Were Working On

### 1. [Task A] - COMPLETED
- [What was done]
- [Committed/saved to where]

### 2. [Task B] - IN PROGRESS
- [Progress made]
- [What remains]
- Needs: [Requirement after reboot]

---

## Current Step

**User needs to (on reboot):**
1. [Action 1 - e.g., Complete setup screen]
2. [Action 2 - e.g., Enter password]
3. [Action 3 - e.g., Confirm and reboot]

**Next Steps After Reboot:**
1. [Verification command or step]
2. [Continue with task]
3. [Final step]

---

*Last updated: [TIMESTAMP]*
```

---

*This is a TEMPLATE file. The actual memory file goes in `$HOME/SHORT-TERM-MEMORY.md` or project-specific locations. Wipe after task completion.*
