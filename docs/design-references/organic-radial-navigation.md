# OWN Organic Radial Navigation

A dependency-free radial navigation identity for OWN-Website. The visual direction is an original organic radial mark: rounded orange/coral rays radiate from a compact shared center, with editorial callout labels connected to their endpoints. It references a broad radial visual language without reproducing Claude's exact logo, silhouette, or trademark artwork.

## Visual target

Use the supplied OWN hero reference as the primary composition target:

- Warm off-white page background, near-black typography, and a restrained coral/orange accent.
- OWN wordmark at the upper left; compact text navigation and a theme control at the upper right.
- A large radial mark centered in the hero. Use approximately 8–12 rounded rays with varied lengths and gently varied directions.
- Rays should feel like soft, elongated strokes with rounded caps, not thin spokes, sharp needles, a spiky sunburst, or a circular outer ring.
- The center is a natural overlap of the rays. Do not add a black hole, black disc, central orb, decorative ring, or heavy hub.
- Place small editorial labels such as About, Blog, Projects, Social, Contact, and More around the mark. Use fine leader lines and small endpoint dots; keep labels outside the ray field and avoid collisions.
- Hero copy sits toward the lower-left; preserve generous negative space and a Swiss / Constructivist typographic hierarchy.
- Do not add glow, glassmorphism, particle clouds, glossy 3D, or gratuitous gradients.

## Motion model

The mark should feel continuously alive without rotating as one rigid object.

- Each ray has its own phase and independently changes its angle, length, curvature, and slight position over time.
- Use slow, non-synchronous, bounded motion. Avoid random jitter, abrupt jumps, and perfect mechanical symmetry.
- Treat the visual as two staggered ray layers (A/B) with slightly different timing and depth/opacity. Their relative prominence can alternate smoothly so the mark appears to weave and breathe.
- If implementing actual over/under crossings, perform local masking at crossing regions; do not create a dark central disc or hide the center with a circular mask.
- Keep the two layers visually coherent: same warm accent family, modest opacity/brightness difference, and no harsh flashing.
- The animation must remain legible as a navigation mark while moving.

## Hover, focus, and navigation behavior

Each ray endpoint is an independent navigation target.

1. On pointer hover, enlarge only the corresponding endpoint dot/rounded tip with a smooth scale transition.
2. Emphasize the associated ray slightly (e.g. opacity, width, or accent intensity) while keeping the other rays visible.
3. Reveal or emphasize that branch's label and leader line.
4. On pointer leave, ease back to the resting state.
5. Keyboard focus must produce an equivalent visible state; do not rely on hover alone.
6. On click/tap, navigate to that item's configured destination. Use real links, not click-only decorative SVG shapes.
7. On touch devices, make the hit area comfortably tappable and ensure the first tap can identify/select a branch without requiring hover.

The interaction demonstrated in the accompanying GIF is a visual behavior reference: idle mark → one branch is highlighted and its endpoint grows → its label is legible → selecting it follows the associated link. The GIF is illustrative, not the implementation itself.

## Component behavior

- Ten animated SVG rays are the initial default; allow the item count and ray count to be configured independently if practical.
- Every navigation endpoint must remain geometrically attached to its corresponding ray as the ray moves.
- Labels and leader lines must follow their endpoint positions and avoid clipping at the viewport edges.
- Destinations are configurable through the element's `items` property or JSON attribute.
- External links open in a new tab with `noopener noreferrer`.
- Reject unsafe URL schemes such as `javascript:` and protocol-relative URLs.
- Native SVG + Web Components; no React, GSAP, canvas, WebGL, or runtime dependency is required.
- Pause animation when outside the viewport, when the document is hidden, or when the `paused` attribute is present.
- Respect `prefers-reduced-motion`; render a stable mark while keeping all links usable.

## Files

- `components/own-radial-nav/own-radial-nav.js` — self-contained custom element.
- `docs/design-references/organic-radial-navigation.md` — design, motion, accessibility, and integration notes.

## Quick integration

Load the component once in the website entry point:

    <script type="module" src="/components/own-radial-nav/own-radial-nav.js"></script>

Place it in the hero or navigation region:

    <own-radial-nav></own-radial-nav>

The fallback destinations are generic anchors. Replace them with verified section IDs and profile URLs before production use.

## Configure actual destinations

    const radialNav = document.querySelector("own-radial-nav");

    radialNav.items = [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Blog", href: "#blog" },
      { label: "Social", href: "#social" },
      { label: "Contact", href: "#contact" }
    ];

Or provide an `items` JSON attribute directly on the element. Only HTTPS/HTTP, root-relative, dot-relative, hash, and mailto URLs are accepted; javascript URLs are rejected.

## Theme tokens

The host page can override these CSS custom properties:

    own-radial-nav {
      --own-radial-fill: #df805f;
      --own-radial-ink: #24231f;
      --own-radial-node: #24231f;
      --own-radial-surface: #f7f4ee;
      --own-radial-accent: #df805f;
    }

Keep the palette restrained and compatible with both light and dark site themes. Avoid using opacity as the only hover feedback; endpoint scale, ray emphasis, and label visibility should communicate selection.

## Responsive and accessibility requirements

- Desktop: retain the editorial hero composition and leader-line labels.
- Mobile: reduce the mark's footprint, reposition labels to avoid overlap, and preserve tappable endpoints.
- Use semantic SVG links with accessible names and visible keyboard focus.
- Maintain sufficient text and control contrast.
- Respect reduced-motion preferences and avoid flashing transitions.
- Test at narrow portrait widths, landscape mobile widths, and desktop layouts.

## Acceptance checklist

- [ ] The mark resembles the supplied OWN radial hero reference, not a ring-and-spokes diagram or a central-hole logo.
- [ ] Rays continuously change position/angle/length/curvature independently and smoothly.
- [ ] The two staggered visual layers alternate prominence without flashing.
- [ ] Hovering one branch enlarges only its endpoint and emphasizes its ray.
- [ ] The matching label and leader line become visible.
- [ ] Clicking/tapping a branch navigates to its configured page.
- [ ] Keyboard focus provides equivalent feedback and activation.
- [ ] Endpoints remain attached to rays throughout animation.
- [ ] Mobile labels and hit areas remain usable.
- [ ] Reduced-motion and off-screen pause behavior work.
- [ ] No heavy visual effects or unnecessary runtime dependencies are introduced.

## Integration caveat

The initial PR adds a portable component and integration guide without guessing the site's framework or route structure. Mounting it in the real hero, replacing fallback destinations with verified OWN routes, and validating the final responsive composition remain integration tasks. Do not describe the feature as production-integrated until those tasks are completed.

## References

- GSAP MorphSVG: https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/
- Motion SVG path morphing: https://motion.dev/examples/js-svg-path-morphing
- Svelte Motion path morphing: https://motion.svelte.page/examples/path-morphing

These references inform path-animation techniques only. The OWN radial geometry and interaction model are original implementation work.
