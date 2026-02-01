# Design Preferences - [PROJECT_NAME]

**Visual design rules, interaction patterns, and UI/UX constraints for Claude.**

---

## Instructions for Claude

**Read this file at session start (after _CONVERSATION-PREFERENCES.md in the load order).** Apply these design preferences to ALL UI work — HTML, CSS, components, layouts, and generated interfaces.

- These preferences are requirements, not suggestions — follow them consistently
- If a user request conflicts with these preferences, follow the user's request for that specific instance
- Reference this file before writing any CSS, styling code, or UI component

**When to update this file:** When the user establishes new design rules, changes visual direction, or adopts a new design system.

**Scope:** All visual and interactive elements — web, mobile, desktop, emails, PDFs, and any generated UI.

---

## Hover & Interaction States

<!-- CUSTOMIZE: Adjust colors and specific values to match your design system -->

### Hover Effects — MANDATORY (Interactive Elements Only)

**ALWAYS use lighter colors on hover for interactive elements** (buttons, links, clickable cards, nav items, form controls). Never darken an element on hover. **Only apply hover states to elements that are actually interactive** — do not add hover effects to static text, headings, paragraphs, images, or non-clickable containers.

| State | Rule | Example |
|-------|------|---------|
| Default | Base color | `background: #3B82F6` |
| Hover | Lighter shade | `background: #60A5FA` |
| Active/Pressed | Slightly lighter than default | `background: #93C5FD` |

**NEVER:**
- Darken a background color on hover
- Use a darker shade for `:hover` or `:focus` states
- Apply dark overlays on interactive elements
- Add hover effects to non-interactive elements (static text, decorative containers, images, headings)

**WHY:** Lighter hover states signal interactivity without reducing contrast or readability. Dark hover effects can obscure content and feel heavy/oppressive to users. Hover effects on non-interactive elements confuse users about what is clickable.

### Transition Guidelines

- Use subtle transitions for hover states: `transition: background-color 150ms ease`
- Avoid abrupt color jumps — smooth transitions feel more polished
- Keep transition durations between 100ms–200ms for hover, 200ms–300ms for larger state changes

---

## Accessibility — MANDATORY

### Color Contrast

- **Text on backgrounds:** Minimum WCAG AA (4.5:1 for normal text, 3:1 for large text)
- **Interactive elements:** Minimum 3:1 contrast against adjacent colors
- **Focus indicators:** Visible, high-contrast focus rings on all interactive elements
- **Never rely on color alone** to convey information — always pair with icons, text, or patterns

### Keyboard Navigation

- All interactive elements must be keyboard-accessible
- Logical tab order following visual layout
- Visible focus states on every focusable element
- Skip navigation links for content-heavy pages

### Screen Readers

- Semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<button>`, not `<div onclick>`)
- Meaningful `alt` text on images — describe purpose, not appearance
- ARIA labels on icon-only buttons and non-text interactive elements
- Announce dynamic content changes with ARIA live regions where appropriate

### Motion & Animation

- Respect `prefers-reduced-motion` — provide reduced or no-animation alternatives
- No auto-playing animations that cannot be paused
- Avoid flashing content (3 flashes per second maximum)

---

## Typography

<!-- CUSTOMIZE: Replace with your project's type system -->

### Hierarchy

- Establish clear visual hierarchy with consistent heading sizes
- Limit to 2–3 font families maximum (1 for headings, 1 for body, 1 optional for code)
- Use font weight and size — not just color — to create distinction between levels

### Readability

| Property | Guideline |
|----------|-----------|
| Body text size | 16px minimum (1rem) |
| Line height | 1.5–1.75 for body text |
| Line length | 45–75 characters per line (optimal readability) |
| Paragraph spacing | At least 1.5x the line height between paragraphs |
| Letter spacing | Default for body; slight tracking (0.02em–0.05em) for all-caps labels |

### Responsive Typography

- Use relative units (`rem`, `em`) — avoid fixed `px` for font sizes
- Scale type proportionally across breakpoints
- Ensure minimum 16px body text on mobile to prevent forced zoom

---

## Iconography

### Flat Icons — MANDATORY

**Use tasteful, flat-style icons** to reinforce content, categories, and steps. Icons should support comprehension, not decorate.

**DO:**
- Use flat, minimal icons (single color, no gradients, no shadows)
- Match icon weight/stroke to the surrounding text weight
- Use icons to reinforce meaning — navigation, categories, status, actions
- Maintain consistent icon size within context (e.g., all nav icons same size)
- Include labels alongside icons — icons alone are often ambiguous

**DON'T:**
- Use 3D, skeuomorphic, or heavily detailed icons
- Use icons purely for decoration with no semantic purpose
- Mix icon styles (outlined + filled + 3D in the same interface)
- Use icons without accessible labels (`aria-label` or visible text)

### Icon Placement

| Context | Placement | Example |
|---------|-----------|---------|
| Navigation | Left of label | `[icon] Dashboard` |
| Buttons | Left of text (actions), or icon-only with aria-label | `[icon] Save` |
| Lists/Categories | Left of item, vertically aligned | `[icon] Category Name` |
| Status indicators | Left of status text | `[icon] Active` |
| Steps/Progress | Above or left of step label | `[icon] Step 1: Setup` |

---

## UX Principles

### General

- **Clarity over cleverness** — every element should have an obvious purpose
- **Consistent patterns** — same action = same visual treatment everywhere
- **Progressive disclosure** — show essential info first, details on demand
- **Forgiving inputs** — accept multiple formats, validate helpfully, never lose user data

### Interactive Feedback

- Every user action should produce visible feedback within 100ms
- Loading states for any operation taking >300ms
- Success/error states must be visually distinct and include text (not just color)
- Disabled elements should look visibly different and explain why they're disabled (tooltip or helper text)

### Spacing & Layout

- Use a consistent spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
- Generous whitespace — never crowd elements
- Group related items visually; separate unrelated items with space
- Align elements to a grid — visual alignment creates order and trust

---

## Summary

| Rule | Enforcement | Priority |
|------|-------------|----------|
| Lighter colors on hover — never dark | All CSS/styling | MANDATORY |
| WCAG AA contrast minimum | All UI elements | MANDATORY |
| Keyboard + screen reader accessible | All interactive elements | MANDATORY |
| Respect `prefers-reduced-motion` | All animations | MANDATORY |
| Flat, consistent iconography | All icons | MANDATORY |
| Clear typographic hierarchy | All text content | High |
| Consistent spacing scale | All layouts | High |
| Visual feedback on all interactions | All interactive elements | High |

---

**These preferences ensure consistent, accessible, and user-friendly interfaces.**

<!-- Claude Anchor v1.1 -->
