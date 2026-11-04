# Implementation Roadmap

This roadmap is intentionally split into reviewable pull requests. Do not collapse all phases into one large change unless the repository's actual state makes that safer.

## Phase 0 — Repository baseline
- [x] Confirm repository identity, visibility, default branch, and current commit.
- [x] Confirm the initial tree contains only the README.
- [x] Confirm there are no existing open pull requests.
- [ ] Establish the first documentation/foundation PR for agent review.

## Phase 1 — Design and engineering foundation
- [ ] Confirm framework/runtime and package manager.
- [ ] Add the application scaffold and strict TypeScript configuration.
- [ ] Implement semantic design tokens and light/dark themes.
- [ ] Add profile/social/project configuration types and honest empty states.
- [ ] Add lint, typecheck, test, and build scripts.

## Phase 2 — Editorial shell and geometric Arcana
- [ ] Implement responsive header, hero, section navigation, and footer.
- [ ] Create seven original SVG/CSS geometric Arcana cards.
- [ ] Implement scroll-driven reveal/flip with robust state handling.
- [ ] Implement explicit theme selection, keyboard support, and local persistence.
- [ ] Verify reduced-motion behavior and interrupted/reverse scroll.

## Phase 3 — GitHub integration
- [ ] Server-side GitHub API client and environment configuration.
- [ ] Public repository list and featured project integration.
- [ ] Actual GraphQL contribution collection and 12-month heatmap.
- [ ] Activity timeline with source attribution and cache/rate-limit handling.
- [ ] Honest loading, empty, partial, and error states.

## Phase 4 — Projects, social, open source, and contact
- [ ] Curated project cards and project details.
- [ ] Config-driven GitHub, Bilibili, HeyBox, and X links when handles are supplied.
- [ ] Open-source activity section.
- [ ] Contact links and accessible outbound-link behavior.

## Phase 5 — Responsive quality and performance
- [ ] Desktop/tablet/mobile layouts.
- [ ] Motion performance and reduced-motion validation.
- [ ] Image/font loading and layout-shift review.
- [ ] Keyboard, screen-reader, contrast, and touch review.

## Phase 6 — Deployment and final acceptance
- [ ] Vercel deployment guide and environment variable checklist.
- [ ] Node.js/ECS deployment guide with persistent storage assumptions documented.
- [ ] Unit and browser tests.
- [ ] Production build and smoke test.
- [ ] Screenshots at 1440, 1280, 768, 390, and 360 CSS px.
- [ ] Final QA report and follow-up PRs for any review findings.

## Acceptance matrix

| Width | Primary checks |
|---:|---|
| 1440 px | 12-column editorial layout, card composition, heatmap |
| 1280 px | Navigation, text measure, no accidental overflow |
| 768 px | 8-column tablet reflow, readable cards |
| 390 px | 4-column mobile layout, touch interactions |
| 360 px | Narrow-screen content fit and no page-level horizontal overflow |

## PR policy

Each PR must state:
1. What changed and why.
2. Files/modules affected.
3. Tests actually executed and their results.
4. Screenshots for UI changes.
5. Known limitations and deferred work.

Do not merge PRs automatically. The repository owner and their designated review agent decide when a PR is accepted.