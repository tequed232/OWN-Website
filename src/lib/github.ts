import {
  SITE_META,
  SNAPSHOT_ACTIVITY,
  SNAPSHOT_STATS,
  buildSnapshotContributions,
} from "@/config/site";
import type { ActivityEvent, ContributionDay, ContributionSummary } from "@/types/site";

const GITHUB_USER = process.env.GITHUB_USERNAME || SITE_META.githubUser;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function getContributionSummary(): Promise<ContributionSummary> {
  const fallback: ContributionSummary = {
    total: SNAPSHOT_STATS.contributions,
    repositories: SNAPSHOT_STATS.repositories,
    followers: SNAPSHOT_STATS.followers,
    days: buildSnapshotContributions(),
    source: "snapshot",
    updatedAt: "2026-11-25T15:00:00Z",
  };

  if (!GITHUB_TOKEN) {
    return fallback;
  }

  try {
    const query = `
      query($login: String!) {
        user(login: $login) {
          repositories(privacy: PUBLIC) { totalCount }
          followers { totalCount }
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "OWN-Website",
      },
      body: JSON.stringify({ query, variables: { login: GITHUB_USER } }),
      next: { revalidate: 1800 },
    });

    if (!res.ok) return fallback;
    const json = (await res.json()) as {
      data?: {
        user?: {
          repositories?: { totalCount: number };
          followers?: { totalCount: number };
          contributionsCollection?: {
            contributionCalendar?: {
              totalContributions: number;
              weeks: { contributionDays: { date: string; contributionCount: number }[] }[];
            };
          };
        };
      };
    };

    const user = json.data?.user;
    const calendar = user?.contributionsCollection?.contributionCalendar;
    if (!user || !calendar) return fallback;

    const days: ContributionDay[] = calendar.weeks
      .flatMap((w) => w.contributionDays)
      .slice(-364)
      .map((d) => {
        const count = d.contributionCount;
        const level: 0 | 1 | 2 | 3 | 4 =
          count === 0 ? 0 : count <= 1 ? 1 : count <= 3 ? 2 : count <= 6 ? 3 : 4;
        return { date: d.date, count, level };
      });

    return {
      total: calendar.totalContributions,
      repositories: user.repositories?.totalCount ?? fallback.repositories,
      followers: user.followers?.totalCount ?? fallback.followers,
      days,
      source: "live",
      updatedAt: new Date().toISOString(),
    };
  } catch {
    return fallback;
  }
}

export async function getRecentActivity(): Promise<{
  events: ActivityEvent[];
  source: "live" | "snapshot";
}> {
  if (!GITHUB_TOKEN) {
    return { events: SNAPSHOT_ACTIVITY, source: "snapshot" };
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(GITHUB_USER)}/events/public?per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "User-Agent": "OWN-Website",
        },
        next: { revalidate: 900 },
      }
    );
    if (!res.ok) return { events: SNAPSHOT_ACTIVITY, source: "snapshot" };
    const raw = (await res.json()) as Array<{
      id: string;
      type: string;
      created_at: string;
      repo?: { name: string };
    }>;

    const mapType = (t: string): ActivityEvent["type"] => {
      if (t === "ForkEvent") return "Fork";
      if (t === "WatchEvent") return "Watch";
      if (t === "PublicEvent") return "Public";
      if (t === "ReleaseEvent") return "Release";
      if (t === "CreateEvent") return "Create";
      return "Push";
    };

    const events: ActivityEvent[] = raw.slice(0, 8).map((item) => {
      const repo = item.repo?.name ?? `${GITHUB_USER}/OWN-Website`;
      return {
        id: item.id,
        date: item.created_at.slice(0, 10),
        type: mapType(item.type),
        repo,
        url: `https://github.com/${repo}`,
      };
    });

    return events.length > 0
      ? { events, source: "live" }
      : { events: SNAPSHOT_ACTIVITY, source: "snapshot" };
  } catch {
    return { events: SNAPSHOT_ACTIVITY, source: "snapshot" };
  }
}
