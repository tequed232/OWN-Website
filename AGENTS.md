# Agent Guidelines

## Mission
Build OWN-Website as a personal portfolio and developer hub. The experience combines a Swiss International Typographic Style information system with restrained Constructivist geometry. The result must feel editorial, precise, useful, and authored—not like an AI-generated landing-page template.

## Before changing code
1. Read this file and the relevant documents in `docs/`.
2. Inspect the current branch, working tree, open pull requests, and affected files.
3. Preserve existing user work. Do not replace files or restructure directories without first understanding their purpose.
4. Confirm current framework and package versions from the repository before introducing dependencies.
5. Do not invent personal details, social handles, project metrics, GitHub activity, testimonials, or contact information. Use explicit configuration and honest empty states.

## Product decisions
- Default appearance: warm light paper; provide a complete dark theme.
- Responsive layouts are designed independently for desktop, tablet, and mobile.
- The seven original geometric Arcana cards are navigation/section devices, not fortune-telling claims.
- Scrolling may reveal/flip cards. A theme changes only after an explicit user selection.
- Theme choice may persist locally; no account or tracking is required.
- GitHub data must come from GitHub APIs. Keep credentials server-side.
- Do not treat repository commit counts as a user's complete contribution count.
- Social links and project highlights must be configuration-driven.

## Visual constraints
- Use grid, typography, whitespace, rules, and a small set of geometric primitives as the primary visual language.
- Avoid AI-looking fantasy illustrations, character art, ornate tarot ornament, glassmorphism, glowing gradients, random particles, excessive blur, and decorative animation without information value.
- Prefer CSS/SVG for geometric artwork. Do not introduce WebGL for simple shapes.
- Use semantic HTML, visible focus states, keyboard support, touch-friendly targets, and reduced-motion alternatives.
- Animate primarily `transform` and `opacity`; never use blanket `transition: all`.

## Engineering constraints
- TypeScript strictness should remain enabled.
- Keep UI components, configuration, API clients, and data access separated.
- Validate external API responses and handle rate limits, missing credentials, and partial failures.
- Never expose GitHub tokens or private environment values to client bundles.
- Vercel serverless storage is not a durable SQLite volume. Choose a persistence adapter appropriate to each deployment target.
- Add tests for meaningful state transitions and API behavior.
- Do not claim tests passed unless they were actually run.

## Git workflow
- Work on a feature branch; never commit directly to `main`.
- Keep pull requests scoped, reviewable, and documented.
- Do not force-push, merge, or close a user PR without explicit authorization.
- PR descriptions must include scope, design rationale, tests actually run, screenshots where UI changes, and known limitations.
- If blocked by missing credentials or user-owned content, add a clearly documented configuration placeholder rather than fabricating data.

## Required checks before requesting review
- Typecheck, lint, unit tests, production build, and relevant browser tests.
- Verify layouts at 1440, 1280, 768, 390, and 360 CSS px.
- Check keyboard navigation, reduced motion, theme persistence, fast/reverse scrolling, and API failure states.
- Report any check that could not be run and why.