# Long-Term Memory - Claude Anchor

**Owner:** [YOUR-NAME]
**Created:** 2026-03-19
**Last Updated:** 2026-03-19

---

## About the User

### Identity
- Name: [YOUR-NAME]
- Role: [YOUR-ROLE]
- Experience level: [EXPERIENCE-LEVEL]
- Company: [YOUR-COMPANY]

### Communication Preferences
- Concise responses, no fluff
- High technical depth
- Skip pleasantries, focus on work
- Direct and expects the same back

---

## Project Context

### npm Package
- Package name: `claude-anchor`
- Current version: 1.3.1
- Registry: npmjs.com
- Install: `npx claude-anchor` or `npx claude-anchor --full`
- Published files: `templates/`, `bin/`, `README.md`

### Git
- Remote: `origin` → `git@github.com:superbasicstudio/claude-anchor.git`
- Branch strategy: `main` is default, feature branches for PRs
- Conventional commits used (feat:, fix:, chore:, docs:)

### Companion Project
- Claude Conductor: `https://github.com/superbasicstudio/claude-conductor`
- Anchor = behavioral brain, Conductor = codebase brain
- Both by Super Basic Studio, both open source

### Related Ecosystem
- [PROJECT-NAME]: `/path/to/project/` — [DESCRIPTION]
- [Additional related projects as needed]

---

## System Environment

### Primary Machine
- OS: Linux (kernel 6.17+, Ubuntu/Fedora)
- Shell: bash
- Node.js: >=16 (tested on 16/18/20)
- Editor: [YOUR-EDITOR]

### Common Paths

| Purpose | Path |
|---------|------|
| Claude Anchor source | `/path/to/claude-anchor/` |
| [PROJECT-NAME] | `/path/to/project/` |

---

## Key Decisions

- **BSD 2-Clause license** — chosen for maximum permissiveness while maintaining attribution
- **No telemetry, no analytics** in the CLI — privacy-first, zero network requests
- **Chalk v4** (not v5) — v5 is ESM-only which breaks CommonJS compatibility with older Node versions
- **Commander.js** for CLI — lightweight, well-maintained, minimal dependency tree
- **Jest** for tests — standard, widely understood, good for snapshot and behavioral testing
- **GitHub only** — single remote for this project

---

## NEVER Store in This File

- API keys, tokens, passwords, or secrets
- Personal contact information beyond what's already here
- Financial or payment details
- Other people's personal information

---

<!-- Claude Anchor v1.3 — claude-anchor project -->
