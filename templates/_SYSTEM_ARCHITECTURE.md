# System Architecture - [PROJECT_NAME]

**Technical reference for system design, data flow, and component interactions.**

---

## Instructions for Claude

**Reference this file when answering questions about system design, component interactions, or data flow.** This prevents Claude from making incorrect assumptions about how the system works.

- Use these diagrams to understand the system before suggesting changes
- When the user asks about architecture, reference specific diagrams and components from this file
- When architecture changes during a session, prompt the user to update this file

**When to update this file:**
- When new components are added or removed
- When data flow changes
- When security boundaries shift
- When error handling is modified
- At major version releases

**Security note:** Do not include credentials, internal hostnames, or IP addresses in architecture diagrams. Use generic labels like `[DATABASE_HOST]` or `[API_ENDPOINT]`.

---

## High-Level Architecture

<!-- CUSTOMIZE: Replace with your system's architecture -->

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              [PROJECT_NAME]                                      │
│                                                                                  │
│  ┌────────────────────────────────────────────────────────────────────────────┐ │
│  │                              INPUT LAYER                                    │ │
│  │                                                                             │ │
│  │   [Input 1]          [Input 2]          [Input 3]          [Input N]       │ │
│  │       │                  │                  │                  │           │ │
│  └───────┼──────────────────┼──────────────────┼──────────────────┼───────────┘ │
│          │                  │                  │                  │             │
│          ▼                  ▼                  ▼                  ▼             │
│  ┌────────────────────────────────────────────────────────────────────────────┐ │
│  │                           PROCESSING LAYER                                  │ │
│  │                                                                             │ │
│  │   ┌─────────────────┐                      ┌─────────────────┐             │ │
│  │   │   Component A   │─────────────────────►│   Component B   │             │ │
│  │   │   [Purpose]     │                      │   [Purpose]     │             │ │
│  │   └─────────────────┘                      └────────┬────────┘             │ │
│  │                                                     │                      │ │
│  │                                                     ▼                      │ │
│  │                                            ┌─────────────────┐             │ │
│  │                                            │   Component C   │             │ │
│  │                                            │   [Purpose]     │             │ │
│  │                                            └────────┬────────┘             │ │
│  └─────────────────────────────────────────────────────┼──────────────────────┘ │
│                                                        │                        │
│                                                        ▼                        │
│  ┌────────────────────────────────────────────────────────────────────────────┐ │
│  │                             OUTPUT LAYER                                    │ │
│  │                                                                             │ │
│  │   [Output 1]         [Output 2]         [Logs]           [Metrics]         │ │
│  └────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow

<!-- CUSTOMIZE: Show how data moves through your system -->

```
                              ┌─────────────────┐
                              │   USER INPUT    │
                              │   [describe]    │
                              └────────┬────────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │   VALIDATION    │
                              │   [describe]    │
                              └────────┬────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
                    ▼                  ▼                  ▼
           ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
           │   Path A       │ │   Path B       │ │   Path C       │
           │   [condition]  │ │   [condition]  │ │   [condition]  │
           └───────┬────────┘ └───────┬────────┘ └───────┬────────┘
                   │                  │                  │
                   └──────────────────┼──────────────────┘
                                      │
                                      ▼
                              ┌─────────────────┐
                              │    OUTPUT       │
                              │    [describe]   │
                              └─────────────────┘
```

---

## Decision Tree

<!-- CUSTOMIZE: Document option/flag parsing or business logic branches -->

```
                              ┌─────────────────┐
                              │   START         │
                              └────────┬────────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │  Option A set?  │
                              └────────┬────────┘
                                       │
                    ┌──────────────────┴──────────────────┐
                    │ YES                                 │ NO
                    ▼                                     ▼
           ┌────────────────┐                    ┌────────────────┐
           │  Do X          │                    │  Do Y          │
           └───────┬────────┘                    └───────┬────────┘
                   │                                     │
                   └──────────────────┬──────────────────┘
                                      │
                                      ▼
                              ┌─────────────────┐
                              │  Option B set?  │
                              └────────┬────────┘
                                       │
                    ┌──────────────────┴──────────────────┐
                    │ YES                                 │ NO
                    ▼                                     ▼
           ┌────────────────┐                    ┌────────────────┐
           │  Configure Z   │                    │  Use default   │
           └───────┬────────┘                    └───────┬────────┘
                   │                                     │
                   └──────────────────┬──────────────────┘
                                      │
                                      ▼
                              ┌─────────────────┐
                              │  EXECUTE        │
                              └─────────────────┘
```

---

## Component Details

### Component A

**Purpose:** [Description]

**Inputs:**
- [Input 1]: [Description]
- [Input 2]: [Description]

**Outputs:**
- [Output 1]: [Description]

**Dependencies:**
- [Dependency 1]
- [Dependency 2]

```
┌─────────────────────────────────────────────────────┐
│                   COMPONENT A                        │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Input ──► [Process 1] ──► [Process 2] ──► Output   │
│                 │                                    │
│                 ▼                                    │
│            [Side Effect]                             │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

### Component B

<!-- CUSTOMIZE: Add more component sections as needed -->

---

## File System Layout

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          FILE SYSTEM LAYOUT                                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│   PROJECT ROOT                                                                   │
│   ────────────────────────────────────────────────────                          │
│   /path/to/project/                                                             │
│   ├── CLAUDE.md                Project documentation                            │
│   ├── GOLDEN-RULES.md          Security rules                                   │
│   ├── TODOS.md                 Task tracking                                    │
│   ├── LESSONS-LEARNED.md       Past issues                                      │
│   ├── _CONVERSATION-PREFERENCES.md   Output preferences                         │
│   ├── _SYSTEM_ARCHITECTURE.md  This file                                        │
│   ├── src/                     Source code                                      │
│   │   ├── main.py              Entry point                                      │
│   │   ├── component_a.py       Component A                                      │
│   │   └── component_b.py       Component B                                      │
│   ├── config/                  Configuration                                    │
│   │   └── settings.yaml        Settings file                                    │
│   ├── tests/                   Test suite                                       │
│   └── docs/                    Additional docs                                  │
│                                                                                  │
│   RUNTIME FILES (Temporary)                                                     │
│   ────────────────────────────────────────────────────                          │
│   /tmp/[project]/                                                               │
│   ├── [temp files]                                                              │
│   └── [cache files]                                                             │
│                                                                                  │
│   USER DATA (Persistent)                                                        │
│   ────────────────────────────────────────────────────                          │
│   ~/.config/[project]/         User configuration                               │
│   ~/.local/share/[project]/    User data                                        │
│   ~/.[project].log             Log file                                         │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## State Management

<!-- CUSTOMIZE: If your system maintains state -->

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            STATE TRANSITIONS                                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│   ┌──────────┐    trigger     ┌──────────┐    trigger     ┌──────────┐         │
│   │  IDLE    │ ──────────────►│ RUNNING  │ ──────────────►│ COMPLETE │         │
│   └──────────┘                └──────────┘                └──────────┘         │
│        ▲                           │                                            │
│        │                           │ error                                      │
│        │                           ▼                                            │
│        │                      ┌──────────┐                                      │
│        └──────────────────────│  ERROR   │                                      │
│              reset            └──────────┘                                      │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Error Handling

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           ERROR HANDLING FLOW                                    │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│   ┌─────────────┐                                                               │
│   │  OPERATION  │                                                               │
│   └──────┬──────┘                                                               │
│          │                                                                       │
│          ▼                                                                       │
│   ┌─────────────────────┐                                                       │
│   │   Error occurred?   │                                                       │
│   └──────────┬──────────┘                                                       │
│              │                                                                   │
│   ┌──────────┴──────────┐                                                       │
│   │ YES                 │ NO                                                    │
│   ▼                     ▼                                                       │
│   ┌─────────────┐  ┌─────────────┐                                             │
│   │  Retryable? │  │  SUCCESS    │                                             │
│   └──────┬──────┘  │  Exit 0     │                                             │
│          │         └─────────────┘                                             │
│   ┌──────┴──────┐                                                               │
│   │ YES         │ NO                                                            │
│   ▼             ▼                                                               │
│   ┌──────────┐  ┌──────────┐                                                   │
│   │  RETRY   │  │  FAIL    │                                                   │
│   │  (N max) │  │  Exit 1  │                                                   │
│   └──────────┘  │  Log err │                                                   │
│                 └──────────┘                                                   │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Exit Codes

| Code | Meaning | Action |
|------|---------|--------|
| 0 | Success | Continue |
| 1 | General error | Check logs |
| 2 | Configuration error | Fix config |
| 3 | [Custom] | [Action] |

---

## Performance Considerations

<!-- CUSTOMIZE: Document performance characteristics -->

| Operation | Expected Time | Notes |
|-----------|---------------|-------|
| [Operation 1] | ~X seconds | [Notes] |
| [Operation 2] | ~Y minutes | [Notes] |

---

## Security Model

<!-- CUSTOMIZE: Document trust boundaries, data validation points, authentication flows, and which components handle sensitive data. -->

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          SECURITY BOUNDARIES                                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│   TRUSTED ZONE                    │   UNTRUSTED ZONE                            │
│   ──────────────                  │   ────────────────                          │
│                                   │                                              │
│   [Internal components]      ◄────┼────►  [External inputs]                     │
│   [Config files]                  │        [User data]                          │
│   [Credentials]                   │        [Network data]                       │
│                                   │                                              │
│   VALIDATION BOUNDARY ════════════╪═══════════════════════                      │
│                                   │                                              │
│   All data crossing boundary      │                                              │
│   MUST be validated               │                                              │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

**Document Version:** 1.0
**Created:** [DATE]
**Purpose:** Technical reference for [PROJECT_NAME] internals

<!-- Claude Anchor v1.0 -->
