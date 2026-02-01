# Lessons Learned - Claude Anchor

**Document issues encountered and how they were resolved. Prevents repeating mistakes.**

---

## Instructions for Claude

**Read this file at session start (step 4 of the load order)** to avoid repeating past mistakes.

- Before proposing solutions, check if a similar problem has been documented here
- When a new non-obvious issue is discovered during the session, prompt the user to add it
- Add new entries immediately when issues are resolved — don't wait until the end of the session

**When to update this file:**
- Immediately after resolving any non-obvious issue
- When discovering a gotcha that could affect future work
- When a solution required significant debugging time

---

## How to Use This File

When you encounter a non-obvious problem or gotcha, document it here immediately:

```markdown
## [DATE] - [Brief Problem Title]

**Problem:** What went wrong
**Cause:** Why it happened
**Solution:** How it was fixed
**Prevention:** How to avoid in future
```

---

## 2026-02-28 - Test Assertions Too Specific

**Problem:** PII-detection test was checking for specific placeholder text that could change between template versions, causing brittle test failures.

**Cause:** Test assertions were tied to exact template content rather than pattern-matching for the behavior being tested.

**Solution:** Updated test assertions to use generic PII-detection patterns instead of exact string matches.

**Prevention:** Write tests that validate behavior and structure, not specific content. Templates change more often than the patterns they follow.

---

## 2026-02-20 - Short-Term Memory Conflated with RAM

**Problem:** `_SHORT-TERM-MEMORY.md` was being used for both multi-session context AND single-session crash recovery, which made it unclear when to delete entries.

**Cause:** Original design (v1.0-v1.2) only had two memory tiers. Users needed a middle tier.

**Solution:** Split into three tiers: `_RAM.md` (single session, volatile), `_SHORT-TERM-MEMORY.md` (4-10 sessions, temporary), `_LONG-TERM-MEMORY.md` (permanent).

**Prevention:** Each memory tier has a clear lifecycle. RAM = auto-managed (write continuously, delete at session end). Short-term = manual (delete when items resolve). Long-term = never delete.

---

## 2026-02-16 - Context Decay in Long Sessions

**Problem:** Golden Rules established at session start were being "forgotten" by Claude during long conversations, leading to rule violations.

**Cause:** In long context windows, content read early gets displaced by newer content. Critical rules lose influence over time.

**Solution:** Golden Rules are read TWICE — once at step 2 (early load) and again at step 7 (just before conversation begins). The second read reinforces the rules right before Claude starts working.

**Prevention:** Always maintain the double-read pattern for Golden Rules. Never remove step 7 from the load order.

---

## 2026-02-01 - Templates Without Instructions Were Ignored

**Problem:** Early versions of templates (v1.0) didn't include explicit "Instructions for Claude" sections. Claude would read them but not act on them consistently.

**Cause:** Without explicit behavioral instructions, Claude treated the templates as passive documentation rather than active behavioral constraints.

**Solution:** Added an "Instructions for Claude" section to every template explaining exactly how to use, reference, and update each file.

**Prevention:** Golden Rule #7 now mandates that every template must include this section. Never ship a template without it.

---

<!-- Claude Anchor v1.3 — claude-anchor project -->
