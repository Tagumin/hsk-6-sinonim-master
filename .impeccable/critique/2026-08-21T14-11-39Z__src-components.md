---
target: all
total_score: 22
p0_count: 1
p1_count: 3
timestamp: 2026-08-21T14-11-39Z
slug: src-components
---
# Full UI Critique

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 3 | Quiz position, mastery, Leitner boxes, and progress are visible, but the next recommended study action is unclear. |
| 2 | Match System / Real World | 3 | Indonesian learning chrome and Chinese content fit, but dashboard and gamified language weaken the study-desk metaphor. |
| 3 | User Control and Freedom | 2 | Modes and filters are available, but search lacks a reliable Escape/backdrop path and quiz recovery is limited. |
| 4 | Consistency and Standards | 1 | Browse and progress use warm paper styling while quiz, flashcards, search, and empty states still use dark slate/sky styling. |
| 5 | Error Prevention | 2 | Reset confirms, but direct mastery marking and automatic box-5 mastery can produce confusing learning state. |
| 6 | Recognition Rather Than Recall | 3 | Definitions, usage notes, collocations, and explanations support recognition; first-run mode guidance is thin. |
| 7 | Flexibility and Efficiency | 3 | Search, filters, bookmarks, and group practice help, but keyboard-first review is limited. |
| 8 | Aesthetic and Minimalist Design | 1 | Repeated cards, pills, shadows, metrics, and dark panels still compete with the distinction content. |
| 9 | Error Recovery | 2 | Quiz explanations help, but mistakes do not lead directly to a focused distinction review flow. |
| 10 | Help and Documentation | 2 | Inline hints exist, but Leitner stages, mode differences, and the first study path are under-explained. |
| **Total** |  | **22/40** | **Needs a focused consistency and accessibility pass** |

## Anti-Patterns Verdict

The product has a credible scholarly foundation, especially in the side-by-side comparison model, but it still fails the AI-slop test in places. The warm paper palette is interrupted by dark slate panels, sky-blue accents, repeated rounded bento cards, performance metrics, Sparkles/Award/Flame iconography, confetti, and the visible footer copy "Bento Grid Learning Architecture." The result feels like two products: a calm vocabulary desk in Browse/Contrast and a generic gamified dashboard in Quiz/Flashcard/Search.

## Cognitive Load

- One study move per screen: partial. Browse and Contrast are focused; Flashcard and Progress combine study controls with management/reporting chrome.
- Progressive disclosure: weak. Browse defaults groups to expanded, creating a long repeated document.
- Important content weight: mixed. Hanzi is strong, but metadata, tags, status controls, and collocations remain visually competitive.
- Feedback: educational explanations are useful, but score language and confetti shift attention toward performance.
- Reading rhythm: weak. Tiny uppercase monospace labels recur too often, especially in dense cards.
- Visible options: Browse and Flashcard expose more than four decision types at once, including filters, status controls, audio, navigation, and study actions.

## Automated Detector

`npx impeccable detect --json src` returned two warnings, both in SearchModal:

- `SearchModal.tsx`: gray text on `bg-amber-500`.
- `SearchModal.tsx`: gray text on `bg-emerald-500`.

The scan exited with code 1 because findings were present. No browser overlay was used in this run.

## What's Working

- ContrastMode's side-by-side word comparison directly serves the distinction-first product principle.
- PRODUCT.md gives unusually clear audience, tone, anti-references, and accessibility direction.
- Vocabulary data is rich and useful: definitions, distinguishing notes, register, connotation, object type, collocations, pinyin, and audio all support nuanced discrimination.

## Priority Issues

### [P0] Unify the visual language across modes

**Why it matters:** Dark slate and sky styling in QuizMode, FlashcardMode, SearchModal, and empty states breaks trust and makes the app feel like a generic tool rather than one calm study environment.

**Fix:** Establish one paper-and-ink token system across every mode. Remove the Bento footer, dark panels, neon-like accents, and confetti. Use text and restrained surface changes for feedback.

**Suggested command:** `impeccable distill`

### [P1] Make Browse progressive instead of fully expanded

**Why it matters:** The default long wall of word cards increases scanning cost and hides the learner's next study move.

**Fix:** Start groups collapsed, keep the key difference visible in each row, and expand only the selected group or the group the learner explicitly opens.

**Suggested command:** `impeccable layout`

### [P1] Turn Progress into a quiet study record

**Why it matters:** Four metric cards, streak language, large percentage tiles, and five stage cards reproduce dashboard conventions that compete with learning.

**Fix:** Prioritize due words, recently missed distinctions, and category coverage. Keep one restrained mastery summary and reduce streak prominence.

**Suggested command:** `impeccable distill`

### [P1] Improve keyboard and modal accessibility

**Why it matters:** Clickable divs in Navbar and Flashcard cannot be keyboard-activated. SearchModal lacks dialog semantics, Escape handling, focus management, and reliable accessible names for icon-only actions.

**Fix:** Use buttons for interactive containers, add `role=dialog`, `aria-modal`, labelled title, Escape dismissal, focus return, visible focus rings, and `aria-label`/`aria-pressed` for stateful icon controls.

**Suggested command:** `impeccable harden`

### [P2] Make quiz feedback teach the distinction before reporting performance

**Why it matters:** Score, accuracy, result labels, and confetti create a performance peak, while the explanation is secondary. This weakens transfer and reflection.

**Fix:** Foreground the explanation and collocation evidence, add a direct "Review this distinction" action, and remove theatrical completion effects.

**Suggested command:** `impeccable clarify`

## Persona Red Flags

**Power learner:** No keyboard-first review loop, no due-now queue, and no quick path from repeated mistakes to a comparison sheet. Repeated controls slow rapid review.

**First-timer:** Five modes appear at once without a clear starting path. Leitner terminology is introduced before its purpose is explained, and the difference between Browse, Contrast, Quiz, and Kartu Ulang is not fully explicit.

**Reflective learner:** There is no confidence rating, learner-authored note, or prompt to explain why an answer fits. Mastery can be marked without demonstrating the distinction.

## Minor Observations

- The footer exposes implementation language that should never be user-facing.
- Sparkles, Award, and Flame carry gamification semantics even when copy is restrained.
- Search results expose several immediate actions, increasing scan cost.
- Focus styling is inconsistent and often relies on color changes after `focus:outline-none`.
- Mobile quiz result cards and flashcard rating controls need responsive stacking.
- Contrast horizontal overflow is defensible, but mobile users are not clearly told more columns exist.
- Many component colors bypass the variables defined in index.css, enabling drift.
- Typography remains a generic system stack rather than a deliberate scholarly pairing.

## Questions to Consider

- What would remain if progress percentages, streaks, badges, and status pills disappeared?
- Should a learner be allowed to mark a word mastered without demonstrating the distinction in context?
- Is the primary unit a word, a synonym group, or a mistaken contrast?
- Could every quiz mistake automatically become a compact comparison sheet?
- Does the interface help the learner answer "Why this word here?" or mainly "Was my answer correct?"?
