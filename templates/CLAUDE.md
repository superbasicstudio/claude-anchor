# [PROJECT_NAME]

**Location:** `[PATH]`
**Purpose:** [One-line description of what this project does]
**Last Updated:** [DATE]

---

## CLAUDE SESSION STARTUP - MANDATORY LOAD ORDER

**Before engaging with user, Claude MUST read files in this EXACT order:**

```
1. GOLDEN-RULES.md        ← Read FIRST (security rules - BINDING)
2. TODOS.md               ← Read thoroughly (know what's pending)
3. LESSONS-LEARNED.md     ← Read (avoid past mistakes)
4. _CONVERSATION-PREFERENCES.md  ← Read (display/output preferences)
5. GOLDEN-RULES.md        ← Re-read AGAIN (reinforce - DO NOT FORGET)
6. CLAUDE.md (this file)  ← Then read this for context
7. BEGIN conversation     ← Now ready to assist
```

**Why this order:**
- Security rules must be internalized before ANY action
- TODOs show pending work and priorities
- Lessons prevent repeating past mistakes
- Preferences ensure correct output formatting
- Re-reading Golden Rules prevents them from being "forgotten" in context

**DO NOT SKIP ANY STEP. DO NOT REORDER.**

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

### [Secondary Script/Command]

```bash
[COMMAND] [args]
```

<!-- CUSTOMIZE: Add more command sections as needed -->

---

## Configuration

<!-- CUSTOMIZE: Document configuration files/options -->

### Config File Location

`[PATH]/config.yaml` or `~/.config/[PROJECT_NAME]/`

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `[VAR_NAME]` | [Description] | [default] |

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

## Related Files

| File | Purpose |
|------|---------|
| GOLDEN-RULES.md | Immutable rules |
| LESSONS-LEARNED.md | Past issues and fixes |
| TODOS.md | Planned improvements |
| _CONVERSATION-PREFERENCES.md | Display/output preferences |
| _SYSTEM_ARCHITECTURE.md | Technical diagrams and flow |

---

## Version Info

- Version: [X.Y]
- Last Updated: [DATE]
- Author: [NAME]


---

<!-- CUSTOMIZE: Add project-specific rules or constraints below -->
<!-- Example: terminal limitations, deployment rules, team conventions -->

