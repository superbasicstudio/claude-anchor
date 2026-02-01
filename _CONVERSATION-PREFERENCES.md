# Conversation Preferences - Claude Anchor

**Output formatting, communication style, and display preferences for Claude.**

---

## Instructions for Claude

**Read this file at session start (step 6 of the load order).** Apply these formatting preferences to ALL output in this session.

- These preferences are requirements, not suggestions — follow them consistently
- If a user request conflicts with these preferences, follow the user's request for that specific instance
- For simple one-line results, a brief status message is sufficient — don't over-format

**When to update this file:** When the user requests a different output format, verbosity level, or communication style.

---

## Display Preferences

### Progress Reporting

When showing progress or status updates, use visual formats:

```
=== [Task Name] Progress ===
[                                                  ]  40%

Items:    400 / 1,000
Rate:     50 items/min
Elapsed:  8m 00s
ETA:      ~12m remaining
Errors:   0
```

---

## Communication Style

### Verbosity Level

- **Errors:** Always show full context and suggested fixes
- **Warnings:** Show brief explanation and mitigation
- **Success:** Keep brief, one line when possible
- **Progress:** Update frequently for long operations

### Tone

- Direct and concise
- Explain the "why" for non-obvious decisions
- No pleasantries or filler

---

## File References

When referencing files or paths in output:

- Use absolute paths when ambiguous
- Use `code formatting` for paths and commands
- Include line numbers when referencing code: `file.py:42`
- Use relative paths from project root when context is clear

---

## Error Display

When errors occur, format as:

```
ERROR: [Brief description]

Details:
  File: /path/to/file
  Line: 42
  Code: [error code if applicable]

Cause: [What went wrong]

Fix: [Suggested resolution]
```

---

## npm/Publishing Context

When discussing npm publishing or releases:

- Always show the full version being published
- List all files that will be included (from `package.json` `files` field)
- Confirm the changelog entry exists
- Remind about `npm test` before publishing

---

<!-- Claude Anchor v1.3 — claude-anchor project -->
