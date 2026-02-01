# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.x     | Yes                |

## Reporting a Vulnerability

If you discover a security vulnerability in Claude Anchor, please report it responsibly.

### How to Report

- Open a [GitHub Security Advisory](https://github.com/superbasicstudio/claude-anchor/security/advisories/new) (preferred)
- Or contact the maintainers via the [Super Basic Studio GitHub profile](https://github.com/superbasicstudio)

**Please do not open a public GitHub issue for security vulnerabilities.**

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Affected templates
- Potential impact

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial assessment**: Within 1 week
- **Fix**: Depends on severity

## Scope

Claude Anchor is a collection of markdown templates with no executable code. Security concerns are limited to:

- Template content that could mislead Claude into unsafe behavior
- Placeholder patterns that could cause injection issues when filled in
- Documentation that incorrectly advises storing secrets

Out of scope:
- Vulnerabilities in Claude Code itself
- Issues in user-customized template content
- Social engineering attacks

## Security Design Principles

- **No executable code** — Pure markdown templates
- **No dependencies** — Nothing to audit or update
- **No network requests** — Works entirely offline
- **No secrets handling** — Templates explicitly warn against storing credentials
