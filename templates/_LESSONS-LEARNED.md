# Lessons Learned - [PROJECT_NAME]

**Document issues encountered and how they were resolved. Prevents repeating mistakes.**

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
