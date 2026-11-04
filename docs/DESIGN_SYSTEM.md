# OWN-Website Design System

**Direction:** Swiss International Typographic Style × Constructivist graphic composition  
**Principle:** Less decoration. More information. Stronger structure.

## 1. Design intent

The Swiss tradition provides the information architecture: objective hierarchy, disciplined grids, asymmetric composition, sans-serif typography, and generous whitespace. Constructivism contributes controlled visual tension through diagonals, circles, bars, planes, numbering, and deliberate color blocks.

This is not a retro poster skin. It is a contemporary, responsive interface in which every graphic element has a navigational, semantic, or compositional purpose.

## 2. Explicitly avoid

- AI-generated fantasy illustration or generic AI landing-page artwork
- Character portraits or fantasy scenes as tarot-card art
- Starscapes, crystals, magic circles, metallic embossing, gold filigree
- Glassmorphism, glowing neon, large decorative gradients, floating particles
- Random parallax, perpetual floating, decorative bouncing, excessive spring motion
- Dense ornament that competes with content
- Fake counters, invented social metrics, placeholder testimonials presented as real

## 3. Color tokens

Initial light palette:

| Token | Value | Purpose |
|---|---|---|
| `--color-paper` | `#F4F2EC` | Main canvas |
| `--color-ink` | `#171717` | Primary text and structure |
| `--color-red` | `#E6332A` | Constructivist accent |
| `--color-muted` | `#D6D2C8` | Rules, quiet surfaces |
| `--color-blue` | `#244A78` | Secondary accent |
| `--color-white` | `#FFFFFF` | Raised/contrast surfaces |

Use a mostly neutral foundation. A section should generally have one dominant accent and, only when justified, one secondary accent. Do not assign a different arbitrary bright color to every card.

Dark mode must be designed as a complete semantic token set—not a simple inversion. Verify text, rules, focus rings, card faces, and interactive states independently.

## 4. Typography

- Preferred stack: Inter, Arial, and platform sans-serif fallbacks. Use Helvetica Neue only where legally and technically available.
- Use a clear editorial scale with fluid sizing via `clamp()`.
- Use tabular numerals for dates, contribution counts, and metrics.
- Large headings may be oversized, but must remain readable and must not overlap essential content.
- Use uppercase labels, numbering, and tracking sparingly for metadata—not for long reading text.
- Do not use more typefaces merely to create visual variety.

## 5. Grid and spacing

- Desktop: 12-column grid.
- Tablet: 8-column grid.
- Mobile: 4-column grid.
- Establish consistent page margins, gutters, and baseline rhythm.
- Use asymmetric spans intentionally; align edges and baselines deliberately.
- Break the grid only when the break has a clear compositional or semantic reason.
- Prefer CSS Grid/Flexbox and intrinsic sizing over JavaScript layout measurements.

## 6. Geometric Arcana cards

Create seven original cards as SVG/CSS compositions. They are section markers and interaction surfaces—not replicas of copyrighted game art or traditional tarot illustrations.

| Arcana | Section | Geometric language |
|---|---|---|
| 0 — The Fool | Profile | Open circle, origin point, incomplete path |
| I — The Magician | GitHub & Contributions | Axes, rectangle, connected nodes |
| IV — The Emperor | Projects | Square, modular grid, solid planes |
| XVII — The Star | Open Source | Radial lines, measured points |
| XVIII — The Moon | Social | Semicircle, occlusion, negative space |
| X — Wheel of Fortune | Activity | Concentric circles, rotation axis |
| XXI — The World | Contact | Closed ring, balanced enclosure |

Every card follows one shared system: consistent frame, index placement, title hierarchy, section label, geometric alignment, and controlled accent use. The card back uses a single repeatable geometric pattern.

### Interaction contract
- Scroll position can reveal/flip a card.
- Scroll reveal must never silently select a theme.
- A distinct, explicit “Choose this theme” action changes the global theme.
- Selection state must be keyboard-operable and announced accessibly.
- Persist only the explicit theme choice in local storage.
- Fast scrolling, reverse scrolling, interrupted animation, and repeated input must not leave cards in inconsistent states.

## 7. Motion

Motion should explain state and spatial relationships.

| Interaction | Initial timing |
|---|---:|
| Hover/focus feedback | 120–180 ms |
| Card flip | 450–650 ms |
| Section transition | 500–750 ms |
| Theme transition | 350–500 ms |

Use these as starting values, then validate on real devices.

Preferred primitives: `transform`, `opacity`, CSS 3D transforms for card flips, clip-path/mask reveals where supported and performant, and scroll progress or Intersection Observer for section activation.

Avoid layout-triggering animation where possible. Every animation must be interruptible and have a `prefers-reduced-motion: reduce` alternative. Reduced motion should preserve content and state, not hide functionality.

## 8. Responsive behavior

- Desktop: editorial, asymmetric, 12-column compositions.
- Tablet: reorganized 8-column layouts with reduced decorative complexity.
- Mobile: vertical poster-like sequence, 4-column structure, compact card interactions, no forced desktop scaling.
- No horizontal overflow except explicitly intentional, labelled horizontal card/heatmap regions.
- Respect safe areas and touch target sizes.

## 9. Accessibility and content

- Semantic landmarks and heading order.
- Keyboard-operable navigation and card selection.
- Visible focus indication and adequate contrast.
- Do not encode meaning through color alone.
- Provide text alternatives for geometric SVGs when they carry meaning.
- Include empty, loading, error, and partial-data states.
- Do not collect visitor data unless a future feature has a clear user-facing purpose and documented consent model.

## 10. Acceptance checklist

- [ ] Visual hierarchy is understandable without animation.
- [ ] Grid alignment is deliberate at all target widths.
- [ ] No decorative AI-style imagery or effects have slipped in.
- [ ] Card reveal and explicit theme selection are separate actions.
- [ ] Light and dark themes both pass contrast review.
- [ ] Reduced-motion mode remains fully usable.
- [ ] Focus, touch, and keyboard states are designed—not incidental.