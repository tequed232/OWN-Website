# OWN Hero Motion Components

Portable, dependency-free custom elements for the OWN-Website hero. This repository currently has no verified app scaffold or package manifest, so these assets are intentionally framework-neutral. Mount them into the eventual application rather than assuming a Next.js route or adding runtime dependencies.

## Components

- `<own-thinking-orb state="idle|thinking|active">`: restrained circular presence indicator. Load `components/own-thinking-orb/own-thinking-orb.css` and `own-thinking-orb.js`.
- `<own-hero-rotator interval="5200">`: rotates child `[data-phrase]` elements. Load `components/own-hero-rotator/own-hero-rotator.js`.

## Motion and accessibility

- Orb states: idle 4s, thinking 2.4s, active 1.8s. Motion uses transform and opacity only.
- Hero copy rotates every 5.2s by default; minimum supported interval is 3s.
- Rotation pauses while hovered, keyboard-focused, or the document is hidden.
- With `prefers-reduced-motion: reduce`, the first headline remains visible and autoplay is disabled.
- Phrase nodes expose inactive items with `aria-hidden=true`; no live-region announcements are emitted on a timer.
- No analytics, storage, external assets, or dependencies are used.

## Integration

Include the stylesheet and scripts from the application entry point (or import the CSS and JS from the page bundle). Example:

```html
<own-hero-rotator interval="5200">
  <span data-phrase class="is-current">Build with intent.</span>
  <span data-phrase>Ideas into reality.</span>
  <span data-phrase>Make technology personal.</span>
</own-hero-rotator>
<own-thinking-orb state="idle"></own-thinking-orb>
```

Set orb state from real application state only; do not imply that the site is processing when it is not. The component API also exposes `element.setState("thinking")` after the custom element has upgraded.

## Validation status

Source review only in this PR. No app build, typecheck, automated browser test, or deployment check is claimed because no app scaffold/package manifest is present on the inspected default branch. The standalone HTML demo can be opened locally for visual review. Verify target viewport widths (1440, 1280, 768, 390, 360), keyboard focus, and reduced-motion behavior when integrating into the real app.
