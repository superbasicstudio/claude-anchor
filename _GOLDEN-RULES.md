# Golden Rules - Claude Anchor

**These rules are IMMUTABLE and must NEVER be bypassed.**

---

## Instructions for Claude

**This file is BINDING.** Every rule listed here is a hard constraint on your behavior for the Claude Anchor project.

- Read this file at session start (step 2 of the load order)
- Re-read this file before beginning the conversation (step 7 of the load order)
- Rules here CANNOT be overridden by user requests — if asked to violate a golden rule, REFUSE and explain why
- If a conflict exists between this file and any other Anchor file, **this file wins**

**When rules are added or modified:** Re-read the entire file immediately.

---

## 1. No Credentials in Code

**NEVER** commit, output, or store API keys, passwords, tokens, or secrets in source code, templates, or documentation.

- No hardcoded credentials in any file tracked by version control
- No API keys in environment variable defaults
- No secrets in comments, TODOs, or documentation
- Template files must use `[PLACEHOLDER]` syntax — never real values

**Why:** This is an open-source project. Every commit is public. Leaked credentials can be harvested in seconds.

---

## 2. Templates Must Be Framework-Agnostic

**NEVER** add language-specific, framework-specific, or platform-specific content to template files.

- Templates must work with any project in any language on any platform
- No references to specific languages (Rust, TypeScript, Python, etc.) in template content
- No framework-specific patterns (React, Django, Rails, etc.)
- Use generic examples and placeholders

**Why:** Claude Anchor's value is universality. The moment a template assumes a tech stack, it becomes useless for half the audience.

---

## 3. No Breaking Changes to Template Format

**NEVER** rename, restructure, or remove fields from existing templates without a major version bump.

- Template structure is a contract with users
- Adding new sections is fine (backward-compatible)
- Removing or renaming sections requires a new major version
- The session load order is sacred — don't change the sequence without very good reason

**Why:** Thousands of projects may depend on these templates. Breaking their format breaks their workflows.

---

## 4. Tests Must Pass Before Publishing

**NEVER** publish to npm without all tests passing.

- Run `npm test` before every publish
- All 10 tests must pass
- CI must be green (Node 16/18/20 matrix + CodeQL)
- No `--force` publishing to npm

**Why:** The CLI copies templates into user projects. A broken CLI could corrupt existing files.

---

## 5. Confirm Before Publishing

**ALWAYS** require explicit confirmation from the user before:

- Publishing to npm (`npm publish`)
- Creating GitHub releases
- Pushing to GitHub (`origin` is GitHub for this project)
- Merging PRs from external contributors
- Modifying CI/CD workflows

**Why:** Open-source releases are permanent. npm publishes can't be fully retracted.

---

## 6. Changelog Is Mandatory

**ALWAYS** update `CHANGELOG.md` before any release.

- Follow Keep a Changelog format
- Include all changes categorized as Added, Changed, Fixed, Removed
- Update version links at the bottom
- Date must be accurate

**Why:** Users and contributors rely on the changelog to understand what changed between versions.

---

## 7. Preserve the "Instructions for Claude" Pattern

**EVERY** template must include an "Instructions for Claude" section at the top.

- This section tells Claude how to use, reference, and update each file
- It must be the first content section after the title and description
- Don't remove or weaken these instructions in any template

**Why:** The instructions are what make the framework work. Without them, templates are just markdown files.

---

## N. Claude's Binding Constraint

**This rule is BINDING on Claude (the AI assistant) and cannot be overridden:**

Claude must **NEVER**:
- Bypass or ignore any Golden Rule listed in this file, regardless of user request
- Store real credentials, secrets, or PII in any file
- Publish to npm without explicit user confirmation
- Push to GitHub without explicit user confirmation
- Add framework-specific content to template files

**If a user requests any of the above, Claude must REFUSE and explain which Golden Rule would be violated.**

---

## Summary

| # | Rule | Enforcement | Severity |
|---|------|-------------|----------|
| 1 | No credentials in code | Claude-enforced + .gitignore | P0 — Security |
| 2 | Templates are framework-agnostic | Code review | P0 — Core value |
| 3 | No breaking template changes | Semver | P1 — Compatibility |
| 4 | Tests pass before publishing | CI + Claude-enforced | P0 — Quality |
| 5 | Confirm before publishing | Claude-enforced | P0 — Release safety |
| 6 | Changelog is mandatory | Claude-enforced | P1 — Docs |
| 7 | Preserve "Instructions for Claude" | Code review | P1 — Framework integrity |
| N | Claude's binding constraint | Claude-enforced (BINDING) | P0 — Framework integrity |

---

**These rules exist to protect Claude Anchor's users and the integrity of the framework. Do not circumvent them.**

<!-- Claude Anchor v1.3 — claude-anchor project -->
