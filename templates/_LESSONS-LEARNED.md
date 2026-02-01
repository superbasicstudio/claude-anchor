# Lessons Learned - [PROJECT_NAME]

**Document issues encountered and how they were resolved. Prevents repeating mistakes.**

---

## Instructions for Claude

**Read this file at session start (step 3 of the load order)** to avoid repeating past mistakes.

- Before proposing solutions, check if a similar problem has been documented here
- When a new non-obvious issue is discovered during the session, prompt the user to add it
- Reference specific lessons when they are relevant to the current task
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

<!-- CUSTOMIZE: Add your lessons below. Delete these examples once you have real ones. -->

## [DATE] - Example: API Rate Limiting Issue

**Problem:** Script started failing intermittently with 429 errors.

**Cause:** Exceeded API rate limit of 100 requests/minute during batch processing.

**Solution:** Added exponential backoff with jitter:
```python
import time
import random

def api_call_with_retry(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return func()
        except RateLimitError:
            wait = (2 ** attempt) + random.uniform(0, 1)
            time.sleep(wait)
    raise Exception("Max retries exceeded")
```

**Prevention:** Always implement rate limiting for external API calls. Add to code review checklist.

---

## [DATE] - Example: File Permission Edge Case

**Problem:** Script worked locally but failed in production with "Permission denied".

**Cause:** Production runs as service account without write access to `/tmp/[project]/`.

**Solution:** Changed temp directory to user-writable location:
```bash
TEMP_DIR="${XDG_RUNTIME_DIR:-/tmp}/[project]-$$"
```

**Prevention:** Test scripts as non-privileged user before deployment. Document required permissions.

---

## [DATE] - Example: Silent Data Corruption

**Problem:** Output files occasionally had truncated data.

**Cause:** Script wasn't flushing buffers before process exit.

**Solution:** Added explicit flush and fsync:
```python
with open(output_file, 'w') as f:
    f.write(data)
    f.flush()
    os.fsync(f.fileno())
```

**Prevention:** Always explicitly flush when data integrity is critical. Add to coding standards.

---

## [DATE] - Example: Credential Leak in Git History

**Problem:** API key was accidentally committed to `.env.example` file and pushed to a public repo.

**Cause:** The `.env.example` file was supposed to contain placeholder values, but a real key was copy-pasted instead of a dummy value.

**Solution:** Revoked the compromised key immediately. Used `git filter-branch` to remove the secret from git history. Generated a new key.

**Prevention:**
- Add pre-commit hooks that scan for credential patterns (e.g., `detect-secrets`, `gitleaks`)
- Use placeholder values like `your-api-key-here` in example files, never real credentials
- See Golden Rule #1: No Credentials in Code
- Run `git diff --cached` before every commit to review staged changes

---

<!-- NOTE: Delete the example entries above once you have real lessons from your project. -->

## Categories

<!-- Optional: Organize lessons by category as the list grows -->

### Configuration Issues
- [Link to lesson above]

### Performance Issues
- [Link to lesson]

### Security Issues
- [Link to lesson]

### Integration Issues
- [Link to lesson]

---

**Add entries immediately when issues are discovered. Future you will thank past you.**

<!-- Claude Anchor v1.0 -->
