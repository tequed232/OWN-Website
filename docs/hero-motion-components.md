# OWN Hero Motion Components

Portable, dependency-free custom elements for the OWN-Website hero. The repository currently has no verified production app entry point or package manifest, so these assets remain framework-neutral.

## Components

- `<own-thinking-orb state="idle|thinking|active">`: restrained circular presence indicator. Load `components/own-thinking-orb/own-thinking-orb.css` and `own-thinking-orb.js`.
- `<own-hero-rotator interval="1700">`: ChatGPT-style simulated streaming headline. Load `components/own-hero-rotator/own-hero-rotator.js`. Each child `[data-phrase]` is a phrase in the rotation.

## Streaming text behavior

- Text is emitted in uneven short chunks (including partial words), not swapped as whole phrases.
- Character/token pacing varies slightly; punctuation introduces a longer pause.
- Once a phrase completes, it holds, deletes in short bursts, pauses briefly, then streams the next phrase.
- `interval` controls the completed-phrase hold duration in milliseconds (default 1700; minimum 800). It is not a fixed rotation interval.
- A blinking caret marks the current insertion point.
- Uses `textContent` for safe rendering; no HTML from phrase strings is interpreted.
- The component exposes the current full phrase through an accessible label and does not use a live region, avoiding repetitive screen-reader announcements.

## Accessibility and lifecycle

- With `prefers-reduced-motion: reduce`, the first phrase is shown statically and autoplay/caret animation are disabled.
- Streaming pauses while the document is hidden and restarts cleanly when visible.
- Timers and event listeners are cleaned up when the element is disconnected.
- No analytics, storage, external assets, or runtime dependencies are used.

## Integration

```html
<own-hero-rotator interval="1700">
  <span data-phrase>Build with intent.</span>
  <span data-phrase>Ideas into reality.</span>
  <span data-phrase>Make technology personal.</span>
</own-hero-rotator>
```

Set orb state from real application state only; do not imply that the site is processing when it is not. The orb component exposes `element.setState("thinking")` after custom-element registration.

## Validation status

Source review only. No app build, typecheck, automated browser test, or deployment check is claimed because no production app scaffold/package manifest is present on the inspected default branch. Open `examples/hero-motion/index.html` locally for a visual prototype. Verify target widths (1440, 1280, 768, 390, 360), keyboard/focus behavior, and reduced-motion behavior when integrating.
