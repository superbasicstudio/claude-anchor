# Conversation Preferences - [PROJECT_NAME]

**Output formatting, communication style, and display preferences for Claude.**

---

## Instructions for Claude

**Read this file at session start (step 5 of the load order).** Apply these formatting preferences to ALL output in this session.

- These preferences are requirements, not suggestions — follow them consistently
- If a user request conflicts with these preferences, follow the user's request for that specific instance
- Use the progress bar format for operations processing >10 items or expected to take >30 seconds
- For simple one-line results, a brief status message is sufficient — don't over-format

**When to update this file:** When the user requests a different output format, verbosity level, or communication style.

**Scope:** These preferences apply to interactive terminal/conversation output. For generated files and documentation, use standard markdown formatting.

---

## Display Preferences

<!-- CUSTOMIZE: Define how you want output formatted. These are examples — adjust to your preference. -->

### Progress Reporting

When showing progress or status updates, **ALWAYS** use visual formats:

**CORRECT:**
```
=== [Task Name] Progress ===
[████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░]  40%

Items:    400 / 1,000
Rate:     50 items/min
Elapsed:  8m 00s
ETA:      ~12m remaining
Errors:   0
```

**INCORRECT:**
```
Progress: 400/1000 (40%)
Errors: 0
```

### Progress Bar Format

```
# 50-character bar showing percentage
[████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░]  48%

Legend:
█ = completed
░ = remaining
```

---

## Status Summary Format

```
Items:    CURRENT / TOTAL
Rate:     X items/min
Elapsed:  Xh Xm
ETA:      ~Xh remaining
Status:   [OK / WARNING / ERROR]
```

---

## Color Preferences

<!-- CUSTOMIZE: If your terminal supports colors -->

| Type | Color | Usage |
|------|-------|-------|
| Errors | Red | Critical failures |
| Warnings | Yellow | Non-blocking issues |
| Success | Green | Completions, confirmations |
| Info | Cyan | Informational messages |
| Headers | Bold | Section titles |

---

## Startup Banners

<!-- CUSTOMIZE: Define if/how you want startup banners displayed -->

When [PROJECT_NAME] starts a major operation, display:

1. **Header** - Project name / operation name
2. **Configuration** - Current settings/flags
3. **Target** - What's being processed

**Example:**
```
╔══════════════════════════════════════════════════════════╗
║                    [PROJECT_NAME]                         ║
║                   [Operation Type]                        ║
╚══════════════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────┐
│ CONFIGURATION                                             │
├──────────────────────────────────────────────────────────┤
│ Target:     /path/to/target                              │
│ Mode:       [mode name]                                  │
│ Options:    --flag1 --flag2                              │
└──────────────────────────────────────────────────────────┘

Operation starting at HH:MM:SS...
```

---

## Communication Style

<!-- CUSTOMIZE: Define preferred tone and verbosity -->

### Verbosity Level

- **Errors:** Always show full context and suggested fixes
- **Warnings:** Show brief explanation and mitigation
- **Success:** Keep brief, one line when possible
- **Progress:** Update frequently for long operations

### Tone

- Professional but not formal
- Direct and concise
- Explain the "why" for non-obvious decisions

---

## File References

When referencing files or paths in output:

- Use absolute paths when ambiguous
- Use `code formatting` for paths and commands
- Include line numbers when referencing code: `file.py:42`

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

## Long-Running Tasks

For operations expected to take >1 minute:

1. Show estimated duration at start
2. Display progress bar updating in real-time
3. Provide status check command if running in background
4. Show completion summary with elapsed time

---

**These preferences ensure consistent, scannable output.**

<!-- Claude Anchor v1.0 -->
