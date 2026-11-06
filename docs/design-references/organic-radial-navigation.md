# OWN Organic Radial Navigation

A dependency-free, responsive radial navigation mark for OWN-Website. It borrows the broad visual vocabulary of radial, organic brand marks, but uses an original ten-ray geometry rather than reproducing Claude's logo or silhouette.

## Behavior

- Ten curved SVG rays continuously change length, curvature and rotation.
- Every outer tip is a real SVG link endpoint.
- Endpoint labels appear on hover and keyboard focus.
- Destinations are configurable through the element's items property or JSON attribute.
- Native SVG + Web Components; no React, GSAP, canvas, WebGL or runtime dependency.
- Pauses when outside the viewport, when the document is hidden, or when the paused attribute is present.
- Respects prefers-reduced-motion; the shape freezes but links remain interactive.
- External links open in a new tab with noopener noreferrer.

## Files

- components/own-radial-nav/own-radial-nav.js — self-contained custom element.
- docs/design-references/organic-radial-navigation.md — design and integration notes.

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
      { label: "GitHub", href: "https://github.com/tequed232" },
      { label: "Bilibili", href: "https://www.bilibili.com/" },
      { label: "Social", href: "#social" },
      { label: "Contact", href: "#contact" }
    ];

Or provide an items JSON attribute directly on the element. Only HTTPS/HTTP, root-relative, dot-relative, hash and mailto URLs are accepted; javascript URLs are rejected.

## Theme tokens

The host page can override these CSS custom properties:

    own-radial-nav {
      --own-radial-fill: #d97757;
      --own-radial-ink: #24231f;
      --own-radial-core: #24231f;
      --own-radial-node: #24231f;
      --own-radial-surface: #faf9f5;
      --own-radial-accent: #d97757;
    }

The default palette is a restrained warm neutral with one accent. Avoid gradients, glassmorphism, particle clouds and heavy glow to keep the mark consistent with OWN's Swiss / Constructivist direction.

## Integration caveat

The current main branch exposes a README but no detectable application entry point or package manifest through the connected repository view. This PR therefore adds a portable component and integration guide without guessing the site's framework, route structure or existing navigation. A follow-up integration commit should mount it in the actual hero/navigation region and replace fallback destinations with verified OWN-Website routes.

## References

- GSAP MorphSVG: https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/
- Motion SVG path morphing: https://motion.dev/examples/js-svg-path-morphing
- Svelte Motion path morphing: https://motion.svelte.page/examples/path-morphing

These references inform the motion technique only. The OWN radial geometry and interaction model are original implementation work.
