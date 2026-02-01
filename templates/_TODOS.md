# TODOs - [PROJECT_NAME]

**Planned improvements and tasks.**

---

## Instructions for Claude

**Read this file at session start (step 2 of the load order)** to understand what work is pending, in progress, or blocked.

- Before starting new work, check if a relevant task already exists here
- When user completes a task, move it to the Completed section with a completion date
- When new tasks emerge during a session, add them to the appropriate priority section
- Always ask before reprioritizing existing tasks
- If a task reveals a non-obvious issue, also document it in [_LESSONS-LEARNED.md](./_LESSONS-LEARNED.md)
- Reference task items by their title when discussing work priorities

**When to update this file:**
- After completing any task
- When new work is identified
- When priorities shift
- When blockers are discovered or resolved

---

## High Priority

<!-- CUSTOMIZE: Add urgent/blocking tasks here. These are worked on first. -->

- [ ] **Review and customize _GOLDEN-RULES.md**
  - Add project-specific security rules
  - Define deployment constraints
  - **Added:** [DATE]

- [ ] **[Task Title]**
  - [Subtask or detail]
  - [Subtask or detail]
  - **Blocked by:** [dependency, if any]
  - **Added:** [DATE]

---

## Medium Priority

<!-- CUSTOMIZE: Add important but non-urgent tasks -->

- [ ] **Set up CI/CD pipeline**
  - Configure automated testing on push
  - Add deployment workflow
  - **Acceptance criteria:** All tests pass before merge, auto-deploy to staging
  - **Added:** [DATE]

- [ ] **[Task Title]**
  - [Description]
  - [Acceptance criteria]
  - **Added:** [DATE]

---

## Low Priority

<!-- CUSTOMIZE: Add nice-to-have improvements -->

- [ ] **Add input validation to all API endpoints**
  - Sanitize user input at system boundaries
  - See Golden Rule #4: Validate Before You Trust
  - **Added:** [DATE]

- [ ] **[Task Title]**
  - [Description]
  - **Added:** [DATE]

---

## Completed

<!-- Move completed tasks here with [x] checkbox and completion date -->

- [x] Set up Claude Anchor framework — **Completed:** [DATE]

---

## Ideas for Future

<!-- Parking lot for ideas not yet committed to -->

- [Idea 1]
- [Idea 2]
- [Idea 3]

---

## Maintenance

- **Review** this file at each session start — remove stale items, update priorities
- **Archive** completed tasks quarterly if the list grows long
- **Cross-reference** with `_LESSONS-LEARNED.md` when tasks reveal gotchas

**Add new items as they come up. Move to Completed when done.**

<!-- Claude Anchor v1.0 -->
