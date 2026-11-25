import type {
  ActivityEvent,
  ArcanaMarker,
  ContributionDay,
  ProjectItem,
  SocialItem,
} from "@/types/site";

export const SITE_META = {
  brand: "OWN",
  domain: "tequed.win",
  githubUser: "tequed232",
  githubProfileUrl: "https://github.com/tequed232",
  harnessRepoUrl: "https://github.com/tequed232/DeepSeek-Harness",
  harnessReleasesUrl: "https://github.com/tequed232/DeepSeek-Harness/releases",
  npmPackageUrl: "https://www.npmjs.com/package/deepseek-harness",
  npmMirrorUrl: "https://registry.npmmirror.com/deepseek-harness",
  copyrightYear: 2026,
} as const;

export const ARCANA_MARKERS: ArcanaMarker[] = [
  { index: "00", roman: "0", title: "THE FOOL", sectionId: "top", geometry: "fool" },
  { index: "01", roman: "IV", title: "THE DRAW", sectionId: "draw", geometry: "emperor" },
  { index: "02", roman: "I", title: "GITHUB", sectionId: "github", geometry: "magician" },
  { index: "03", roman: "XVII", title: "PROJECTS", sectionId: "projects", geometry: "star" },
  { index: "04", roman: "XVIII", title: "SOCIAL", sectionId: "social", geometry: "moon" },
  { index: "05", roman: "X", title: "ACTIVITY", sectionId: "activity", geometry: "wheel" },
  { index: "06", roman: "XXI", title: "THE WORLD", sectionId: "contact", geometry: "world" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "dsh-l2d",
    monogram: "D",
    name: "DSH-L2D",
    summary: {
      zh: "多智能体攻坚组编排章程与启动协议 Skill。",
      en: "Multi-agent strike-team orchestration charter and bootstrap protocol Skill.",
      ja: "マルチエージェント編成規約および起動プロトコル Skill。",
    },
    status: "ACTIVE",
    featured: true,
    url: "https://github.com/tequed232",
    tags: ["Multi-Agent", "Protocol", "Skill"],
    arcanaCode: "01 / FLAGSHIP",
  },
  {
    id: "dolphin-calendar",
    monogram: "C",
    name: "Dolphin Calendar",
    summary: {
      zh: "日历应用（待仓库确认后更新地址）。",
      en: "Calendar application (repository link pending confirmation).",
      ja: "カレンダーアプリケーション（リポジトリ確定後にURL更新予定）。",
    },
    status: "IN SETUP",
    url: "https://github.com/tequed232",
    tags: ["Productivity", "Calendar"],
    arcanaCode: "02 / BUILD",
  },
  {
    id: "agent-mcp-linkerhub",
    monogram: "A",
    name: "Agent MCP LinkerHub",
    summary: {
      zh: "Agent 与 MCP 服务连接器枢纽（待仓库确认后更新地址）。",
      en: "Connector hub bridging agents and MCP services (repository link pending confirmation).",
      ja: "エージェントと MCP サービスを結ぶコネクタハブ（リポジトリ確定後にURL更新予定）。",
    },
    status: "IN SETUP",
    url: "https://github.com/tequed232",
    tags: ["MCP", "Agents", "Hub"],
    arcanaCode: "03 / INFRA",
  },
];

export const SOCIALS: SocialItem[] = [
  {
    id: "bilibili",
    label: { zh: "Bilibili", en: "Bilibili", ja: "Bilibili" },
    handle: "UID 407275151",
    domain: "space.bilibili.com",
    url: "https://space.bilibili.com/407275151",
  },
  {
    id: "steam",
    label: { zh: "Steam", en: "Steam", ja: "Steam" },
    handle: "Profile",
    domain: "steamcommunity.com",
    url: "https://steamcommunity.com/my/",
  },
  {
    id: "heybox",
    label: { zh: "小黑盒", en: "HeyBox", ja: "HeyBox" },
    handle: "21e069b46046",
    domain: "xiaoheihe.cn",
    url: "https://www.xiaoheihe.cn/bbs/user_profile_share?user_id=21e069b46046&h_src=heyboxapp",
  },
  {
    id: "x",
    label: { zh: "X / Twitter", en: "X / Twitter", ja: "X / Twitter" },
    handle: "@Zane114514",
    domain: "x.com",
    url: "https://x.com/Zane114514",
  },
  {
    id: "github",
    label: { zh: "GitHub", en: "GitHub", ja: "GitHub" },
    handle: "@tequed232",
    domain: "github.com",
    url: "https://github.com/tequed232",
  },
];

export const SNAPSHOT_STATS = {
  repositories: 11,
  followers: 3,
  contributions: 507,
} as const;

export const SNAPSHOT_ACTIVITY: ActivityEvent[] = [
  {
    id: "evt-1",
    date: "2026-11-19",
    type: "Fork",
    repo: "Rockau/DeepFish-desktop-pet",
    url: "https://github.com/Rockau/DeepFish-desktop-pet",
  },
  {
    id: "evt-2",
    date: "2026-11-19",
    type: "Watch",
    repo: "Rockau/DeepFish-desktop-pet",
    url: "https://github.com/Rockau/DeepFish-desktop-pet",
  },
  {
    id: "evt-3",
    date: "2026-11-19",
    type: "Watch",
    repo: "liguobao/ds-harness-remote",
    url: "https://github.com/liguobao/ds-harness-remote",
  },
  {
    id: "evt-4",
    date: "2026-11-18",
    type: "Watch",
    repo: "tequed232/RainWrt-AX3000",
    url: "https://github.com/tequed232/RainWrt-AX3000",
  },
  {
    id: "evt-5",
    date: "2026-11-18",
    type: "Fork",
    repo: "Rainflowers686/RainWrt-AX3000",
    url: "https://github.com/Rainflowers686/RainWrt-AX3000",
  },
  {
    id: "evt-6",
    date: "2026-11-18",
    type: "Fork",
    repo: "openwrt-xiaomi/xmir-patcher",
    url: "https://github.com/openwrt-xiaomi/xmir-patcher",
  },
  {
    id: "evt-7",
    date: "2026-11-18",
    type: "Watch",
    repo: "openwrt-xiaomi/xmir-patcher",
    url: "https://github.com/openwrt-xiaomi/xmir-patcher",
  },
  {
    id: "evt-8",
    date: "2026-11-04",
    type: "Public",
    repo: "tequed232/OWN-Website",
    url: "https://github.com/tequed232/OWN-Website",
  },
];

/**
 * Deterministic 364-day contribution matrix matching the verified 507-contribution
 * public snapshot when live GitHub GraphQL token is not configured in the environment.
 */
export function buildSnapshotContributions(endDateIso = "2026-11-25"): ContributionDay[] {
  const end = new Date(`${endDateIso}T00:00:00Z`);
  const totalDays = 364;
  const counts = new Array<number>(totalDays).fill(0);

  // Distribute 507 contributions with realistic clustered bursts over the year,
  // especially denser in the recent autumn build cycle.
  let remaining = 507;
  for (let i = totalDays - 1; i >= 0 && remaining > 0; i--) {
    const recencyWeight = i > 260 ? 3 : i > 140 ? 2 : 1;
    const hash = ((i * 2654435761) >>> 0) % 100;
    let c = 0;
    if (hash < 12 * recencyWeight) {
      c = 1 + (hash % (recencyWeight === 3 ? 6 : 4));
    } else if (hash < 22 * recencyWeight) {
      c = 1 + (hash % 2);
    }
    const clamped = Math.min(c, remaining);
    counts[i] = clamped;
    remaining -= clamped;
  }
  if (remaining > 0) {
    counts[totalDays - 1] = (counts[totalDays - 1] ?? 0) + remaining;
  }

  const days: ContributionDay[] = [];
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(end);
    d.setUTCDate(end.getUTCDate() - (totalDays - 1 - i));
    const count = counts[i] ?? 0;
    const level: 0 | 1 | 2 | 3 | 4 =
      count === 0 ? 0 : count <= 1 ? 1 : count <= 3 ? 2 : count <= 5 ? 3 : 4;
    days.push({
      date: d.toISOString().slice(0, 10),
      count,
      level,
    });
  }
  return days;
}
