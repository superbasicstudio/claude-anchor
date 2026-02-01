# LONG-TERM-MEMORY.md Template

**Purpose:** Persistent memory that Claude should ALWAYS reference and NEVER forget.

This is Claude's "long-term memory" - permanent knowledge about:
- User preferences and working style
- System configuration and environment
- Project conventions and patterns
- Learned lessons and important decisions
- Things that should NEVER be forgotten

**This file is PERSISTENT** - never delete unless explicitly requested by user.

---

## Instructions for Claude

**Read this file at session start (step 4 of the load order).** This is your persistent knowledge base for this project and user.

**On EVERY session start:**
1. Check if `_LONG-TERM-MEMORY.md` exists
2. If yes, READ IT COMPLETELY before engaging
3. Apply all preferences, context, and rules contained within
4. Reference this memory throughout the conversation

**Memory file locations:**
- `[PROJECT]/_LONG-TERM-MEMORY.md` - Project-specific persistent memory
- Optionally: `$HOME/_LONG-TERM-MEMORY.md` - Global memory (if user creates one)

**Conflict resolution:** If content here conflicts with `_GOLDEN-RULES.md`, the Golden Rules ALWAYS take precedence.

**NEVER delete this file** unless the user explicitly requests it.

---

## Template Structure

```markdown
# LONG-TERM-MEMORY

**Owner:** [Name]
**Created:** [Date]
**Last Updated:** [Date]

---

## About the User

**Privacy note:** Only include information you are comfortable having in a file that may be committed to version control. Use initials, a username, or a pseudonym if preferred. See Golden Rule #2: No PII Exposure.

### Identity
- Name: [Name or username — your choice]
- Role: [Developer/Admin/etc.]
- Experience level: [Senior/Mid/Junior]

### Communication Preferences
- [Concise vs detailed responses]
- [Technical depth preferred]
- [Tone: casual/professional]

### Working Style
- [Iterative vs big-bang changes]
- [Prefers planning vs diving in]
- [Documentation preferences]

---

## System Environment

### Primary Machine
- Hostname: [NAME]
- OS: [OS and version]
- Key specs: [CPU, RAM, GPU if relevant]

### Common Paths
| Purpose | Path |
|---------|------|
| Projects | [path] |
| Scripts | [path] |
| Config | [path] |

### Key Services
| Service | Port | Purpose |
|---------|------|---------|
| [service] | [port] | [purpose] |

---

## Preferences & Rules

### Always Do
- [ ] [Preference 1]
- [ ] [Preference 2]
- [ ] [Preference 3]

### Never Do
- [ ] [Anti-preference 1]
- [ ] [Anti-preference 2]
- [ ] [Anti-preference 3]

### Code Style
- [Language preferences]
- [Formatting rules]
- [Comment policy]

---

## Learned Context

### Important Decisions Made
| Date | Decision | Reason |
|------|----------|--------|
| [date] | [decision] | [why] |

### Patterns Established
- [Pattern 1]: [Description]
- [Pattern 2]: [Description]

### Things to Remember
- [Important fact 1]
- [Important fact 2]
- [Important fact 3]

---

## Project Knowledge

### Active Projects
| Project | Location | Status |
|---------|----------|--------|
| [name] | [path] | [active/paused] |

### Conventions by Project
- **[Project A]**: [conventions]
- **[Project B]**: [conventions]

---

## Credentials & Access (References Only)

**NEVER store actual passwords, API keys, tokens, or secrets here.** See Golden Rule #1.

| Service | Where to Find Credentials | Notes |
|---------|---------------------------|-------|
| [service] | [e.g., 1Password vault "Dev"] | [notes] |
| [service] | [e.g., `~/.config/[app]/credentials`] | [notes] |

---

## Update Log

| Date | Change | Reason |
|------|--------|--------|
| [date] | [what changed] | [why] |

---

*Last verified: [DATE]*
```

---

## What Belongs in Long-Term Memory

**YES - Store these:**
- User identity and preferences
- System configuration details
- Code style preferences
- Project conventions
- Important decisions and their rationale
- Learned patterns and workflows
- Things the user has said "always" or "never" do

**NO - Don't store these:**
- Temporary task state (use SHORT-TERM-MEMORY.md)
- Passwords, API keys, secrets
- Session-specific context
- Outdated information (update instead)

---

## Memory Maintenance

### Adding New Information
When user states a preference or important fact:
1. Acknowledge it in conversation
2. Ask: "Should I add this to long-term memory?"
3. If yes, update the appropriate section

### Updating Existing Information
When information changes:
1. Update the relevant section
2. Add entry to Update Log
3. Update "Last verified" date

### Verifying Memory
Periodically (or when asked):
1. Review entries for accuracy
2. Remove outdated information
3. Update timestamps

---

## Difference from Short-Term Memory

| Aspect | SHORT-TERM | LONG-TERM |
|--------|------------|-----------|
| Duration | Single task/session | Permanent |
| Content | Current task state | User preferences, system config |
| After task | DELETE | KEEP |
| Updates | Overwrite each session | Append/modify carefully |
| Purpose | Session continuity | Persistent knowledge |

---

## Example: Populated Long-Term Memory

```markdown
# LONG-TERM-MEMORY

**Owner:** [USER_NAME]
**Created:** [DATE]
**Last Updated:** [DATE]

---

## About the User

### Identity
- Name: [USER_NAME]
- Role: [ROLE - e.g., Developer, Admin, Designer]
- Experience level: [Senior/Mid/Junior]

### Communication Preferences
- [e.g., Concise responses, no fluff]
- [e.g., High technical depth]
- [e.g., Skip pleasantries, focus on work]

### Working Style
- [e.g., Iterative builds with testing between changes]
- [e.g., Safety-conscious - validate before moving on]
- [e.g., Prefers targeted fixes over scope creep]

---

## System Environment

### Primary Machine
- Hostname: [HOSTNAME]
- OS: [OS and version]
- Specs: [Key hardware specs]

### Common Paths
| Purpose | Path |
|---------|------|
| Projects | [USER_HOME]/projects/ |
| Scripts | [USER_HOME]/scripts/ |
| Config | [USER_HOME]/.config/ |

---

## Preferences & Rules

### Always Do
- [x] [User preference 1]
- [x] [User preference 2]
- [x] [User preference 3]

### Never Do
- [x] [Anti-preference 1]
- [x] [Anti-preference 2]
- [x] [Anti-preference 3]

---

*Last verified: [DATE]*
```

---

*This is a TEMPLATE. Customize it with your project details. NEVER DELETE without explicit user request.*

<!-- Claude Anchor v1.0 -->
