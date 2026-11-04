# OWN-Website Architecture

## 1. Product scope

OWN-Website is a personal portfolio and developer hub. It presents profile information, selected projects, GitHub activity, open-source work, social destinations, and contact links through a geometric Arcana navigation experience.

## 2. Proposed stack

Confirm the repository's actual toolchain before implementation. The intended baseline is:

- Next.js App Router
- React + TypeScript (strict)
- CSS Modules and CSS custom properties
- Framer Motion only where native CSS/Intersection Observer is insufficient
- Lucide icons
- Next.js Route Handlers for server-side API aggregation
- Vitest for unit tests; Playwright for browser-level acceptance
- Prisma as an optional data-access layer only if persistent editable data is required

Do not add dependencies without a concrete requirement. Prefer platform APIs for simple behavior.

## 3. Information architecture

1. Opening / Hero
2. 0 — The Fool / Profile
3. I — The Magician / GitHub and Contributions
4. IV — The Emperor / Featured Projects
5. XVII — The Star / Open Source
6. XVIII — The Moon / Social
7. X — Wheel of Fortune / Activity
8. XXI — The World / Contact

The page may use a continuous editorial scroll with section navigation. Cards are visual section devices; they must not make essential content inaccessible.

## 4. Suggested source structure

Adapt this to the framework already present; do not force this tree if the project has a better established convention.

```text
src/
  app/
    api/
      profile/route.ts
      socials/route.ts
      github/
        repos/route.ts
        contributions/route.ts
        activity/route.ts
      projects/route.ts
      health/route.ts
  components/
    hero/
    tarot/
    github/
    projects/
    social/
    activity/
    navigation/
  config/
    profile.ts
    socials.ts
    projects.ts
    arcanas.ts
    themes.ts
  hooks/
  lib/
  providers/
  services/
  styles/
  types/
public/
  cards/
  icons/
  images/
docs/
skills/
tests/
```

## 5. Configuration and source-of-truth

Keep manually curated identity data separate from API-derived data.

- `profile.ts`: display name, bio, location only if user supplies it, role/areas of interest, avatar asset path.
- `socials.ts`: platform, handle, URL, display label; omit any unknown account.
- `projects.ts`: repository URL, title, summary, featured flag, manually curated tags.
- `arcanas.ts`: card index, section mapping, geometry variant, theme identifier.
- `themes.ts`: semantic light/dark/theme tokens.

Never infer or fabricate handles, URLs, project status, followers, views, stars, or activity. Use explicit TODO values or omit the item until confirmed.

## 6. GitHub integration

Use server-side GitHub REST/GraphQL requests. The token, if used, must remain in server-only environment variables.

Suggested endpoints:
- `GET /api/github/repos`
- `GET /api/github/contributions`
- `GET /api/github/activity`
- `GET /api/profile`
- `GET /api/socials`
- `GET /api/projects`
- `GET /api/health`

The contribution heatmap should request the user's actual GraphQL `contributionsCollection` for a rolling 12-month window. Keep contribution totals and contribution types faithful to the API response. Do not substitute repository commit counts for user-wide contributions. If a token or API response is unavailable, show an honest unavailable state and preserve the rest of the page.

Implement caching and rate-limit handling. Do not expose private repository metadata on a public page. The user must explicitly choose which projects are public/featured.

## 7. Persistence and deployment

Targets:
- Vercel
- Self-hosted Node.js on Alibaba Cloud ECS

Do not assume SQLite is durable on Vercel serverless functions. If editable persistent data is later required, define a storage adapter and choose a Vercel-compatible managed database for Vercel, while allowing SQLite on a persistent ECS volume if operationally appropriate.

Prefer static TypeScript configuration for a personal site unless there is a demonstrated need for runtime editing. This reduces operational complexity and avoids unnecessary visitor data storage.

## 8. Security and privacy

- Keep all secrets server-only.
- Validate and normalize external API data.
- Use safe outbound links and appropriate rel attributes.
- Avoid analytics and visitor profiling by default.
- Do not expose private repository names, activity, or contribution details.
- Add rate limits or caching to public API routes where appropriate.
- Provide generic error responses without leaking tokens or upstream secrets.

## 9. Failure and empty states

The page must remain useful if GitHub API requests fail. Profile, projects, and contact content should render independently of GitHub data. Each dynamic section needs loading, empty, partial, and error states. A missing social profile should be omitted rather than replaced with a fake card.