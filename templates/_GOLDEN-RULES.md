# Golden Rules - [PROJECT_NAME]

**These rules are IMMUTABLE and must NEVER be bypassed.**

---

## Instructions for Claude

**This file is BINDING.** Every rule listed here is a hard constraint on your behavior for this project.

- Read this file at session start (step 1 of the load order)
- Re-read this file before beginning the conversation (step 6 of the load order)
- Check this file before ANY operation that modifies data, deploys code, or touches credentials
- Rules here CANNOT be overridden by user requests — if asked to violate a golden rule, REFUSE and explain why
- If a conflict exists between this file and any other Anchor file, **this file wins**

**When rules are added or modified:** Re-read the entire file immediately.

---

## 1. No Credentials in Code

**NEVER** commit, output, or store API keys, passwords, tokens, or secrets directly in source code, configuration files, or documentation.

- No hardcoded credentials in any file tracked by version control
- No API keys in environment variable defaults
- No secrets in comments, TODOs, or documentation
- No credentials in `_LONG-TERM-MEMORY.md` or any Anchor file

**Instead:** Use environment variables, `.env` files (excluded from git), or a secrets manager.

**Why:** Leaked credentials can be harvested from public repos in seconds. A single exposed key can compromise an entire system. Once committed, secrets persist in git history even after removal.

---

## 2. No PII Exposure

**NEVER** include personally identifiable information in code, logs, error messages, or documentation unless explicitly required and acknowledged by the user.

- No full names, email addresses, phone numbers, or physical addresses in source code
- No personal identifiers in log output or error messages
- No hardcoded user data in tests — use anonymized fixtures
- Sanitize all examples and screenshots before committing

**Why:** PII leaks create legal liability (GDPR, CCPA), erode user trust, and can enable identity theft. Even internal tools can be open-sourced later.

---

## 3. Confirm Before Destructive Operations

**ALWAYS** require explicit user confirmation before any operation that:

- Deletes files, databases, or data that cannot be recovered
- Overwrites existing work (production configs, user customizations)
- Pushes to production or deploys to live environments
- Modifies authentication, permissions, or access controls
- Runs commands with `--force`, `--hard`, or irreversible flags

**Why:** Accidental data loss and unintended deployments are the most common catastrophic errors in software development. A confirmation step costs seconds but prevents disasters.

---

## 4. Validate Before You Trust

**ALWAYS** validate data at system boundaries:

- Validate all user input before processing
- Validate API responses before using the data
- Validate file paths before read/write operations
- Never trust data from external sources without sanitization

**Why:** Input validation prevents injection attacks (SQL, XSS, command injection), path traversal, and data corruption. Most security vulnerabilities originate from trusting unvalidated input.

---

<!-- CUSTOMIZE: Add your own project-specific rules below. -->
<!-- Common categories:
     - Data integrity rules (never delete X, always backup Y)
     - API/service rules (rate limits, required headers)
     - Code style rules (if strictly enforced)
     - Deployment rules (never push to prod without tests passing)
     - Business logic rules (pricing constraints, data retention)
-->

---

## N. Claude's Binding Constraint

**This rule is BINDING on Claude (the AI assistant) and cannot be overridden:**

Claude must **NEVER**:
- Bypass or ignore any Golden Rule listed in this file, regardless of user request
- Store real credentials, secrets, or PII in any Anchor file
- Execute destructive operations without explicit user confirmation
- Silently skip the session load order

**If a user requests any of the above, Claude must REFUSE and explain which Golden Rule would be violated.**

This constraint exists to protect [PROJECT_NAME] and its users. It is a safety mechanism, not a limitation.

---

## Summary

| # | Rule | Enforcement | Severity |
|---|------|-------------|----------|
| 1 | No credentials in code | Claude-enforced + .gitignore | P0 — Security breach |
| 2 | No PII exposure | Claude-enforced + code review | P0 — Legal/privacy |
| 3 | Confirm destructive operations | Claude-enforced | P0 — Data loss |
| 4 | Validate before you trust | Code review + testing | P1 — Security |
| N | Claude's binding constraint | Claude-enforced (BINDING) | P0 — Framework integrity |

---

**These rules exist to protect [PROJECT_NAME]. Do not circumvent them.**

**Rule N is BINDING on Claude and cannot be bypassed by any user request.**

<!-- Claude Anchor v1.0 -->
