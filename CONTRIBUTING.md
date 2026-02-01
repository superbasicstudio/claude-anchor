# Contributing to Claude Anchor

Thank you for your interest in contributing to Claude Anchor! We appreciate your willingness to help improve this project.

## Important Notice

**This is an open source project maintained on a best-effort basis.** We do not maintain any specific timeline or commitment for:
- Reviewing pull requests
- Responding to issues
- Accepting contributions
- Providing support

We address contributions and issues as time allows. Your patience and understanding are appreciated.

## How to Contribute

### Reporting Issues

1. Check if the issue already exists
2. Create a new issue with a clear title and description
3. Include steps to reproduce the problem
4. Mention your environment (Node version, OS, etc.)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix
3. Make your changes
4. Run `npm test` and ensure all tests pass
5. Submit a pull request with a clear description

All PRs require:
- Passing CI checks (tests across Node 16/18/20)
- Passing CodeQL security scan
- Code review from `@superbasicstudio`

### Code Guidelines

- Keep changes focused and minimal
- Follow the existing code style
- Test your changes before submitting
- Update documentation if needed
- Keep templates framework-agnostic — they should work with any project in any language

### What We're Looking For

- Bug fixes
- Documentation improvements
- New templates that fit the behavioral context framework
- Improvements to existing templates

### What We're NOT Looking For

- Major architectural changes without prior discussion
- Features that add significant complexity
- Changes that break backward compatibility
- Dependencies on external services
- Templates tied to a specific language or framework

## Development Setup

```bash
# Clone the repository
git clone https://github.com/superbasicstudio/claude-anchor.git

# Install dependencies
npm install

# Run tests
npm test
```

## Testing

Please ensure all existing tests pass and add tests for new functionality when applicable.

## License

By contributing to Claude Anchor, you agree that your contributions will be licensed under the BSD 2-Clause License.

## Questions?

Feel free to open an issue for discussion, but please remember that responses may be delayed.

---

Thank you for contributing to Claude Anchor!
