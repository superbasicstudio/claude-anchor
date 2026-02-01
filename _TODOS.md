# TODOs - Claude Anchor

**Planned improvements and tasks for the Claude Anchor framework.**

---

## Instructions for Claude

**Read this file at session start (step 3 of the load order)** to understand what work is pending, in progress, or blocked.

- Before starting new work, check if a relevant task already exists here
- When the user completes a task, move it to the Completed section with a completion date
- When new tasks emerge during a session, add them to the appropriate priority section
- Always ask before reprioritizing existing tasks
- If a task reveals a non-obvious issue, also document it in [_LESSONS-LEARNED.md](./_LESSONS-LEARNED.md)

**When to update this file:**
- After completing any task
- When new work is identified
- When priorities shift
- When blockers are discovered or resolved

---

## High Priority

- [ ] **Plan v1.4.0 release**
  - Identify new template improvements based on real-world usage
  - Review community feedback (GitHub issues)
  - **Added:** 2026-03-19

---

## Medium Priority

- [ ] **Review and update docs site**
  - `docs/index.html` — ensure it reflects current template set and v1.3.1
  - Add interactive examples or a "get started" wizard
  - **Added:** 2026-03-19

- [ ] **Expand test coverage**
  - Currently 10 tests — add edge case tests for `--force` overwrites, missing templates dir, permission errors
  - Test template content validation (placeholder syntax check)
  - **Added:** 2026-03-19

---

## Low Priority

- [ ] **Consider adding a `--dry-run` flag to CLI**
  - Show what would be copied without actually copying
  - Useful for users who want to preview before committing
  - **Added:** 2026-03-19

- [ ] **Community template contributions**
  - Define a process for accepting community-contributed templates
  - Must maintain framework-agnostic principle (Golden Rule #2)
  - **Added:** 2026-03-19

---

## Completed

- [x] **v1.3.1 release** — Updated tests, hardened .gitignore, CodeQL + CI, GitHub community files — **Completed:** 2026-02-28
- [x] **v1.3.0 release** — Added _RAM.md, redefined short-term memory, zero sycophancy — **Completed:** 2026-02-20
- [x] **v1.2.0 release** — Added Voice & Tone + Design Preferences templates — **Completed:** 2026-02-16
- [x] **v1.1.0 release** — Batteries-included templates, CLI installer — **Completed:** 2026-02-01
- [x] **v1.0.0 initial release** — 7 template files, open-source — **Completed:** 2025-06-17
- [x] **Add GitHub CI and CodeQL** — Node 16/18/20 matrix, security scanning — **Completed:** 2026-02-28
- [x] **Add CONTRIBUTING.md and community files** — CODEOWNERS, issue templates, FUNDING.yml — **Completed:** 2026-02-28
- [x] **Add docs site** — GitHub Pages with Umami analytics — **Completed:** 2026-03-05

---

<!-- Claude Anchor v1.3 — claude-anchor project -->
