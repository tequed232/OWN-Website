export type Locale = "zh" | "en" | "ja";

export type ThemeMode = "light" | "dark";

export type ProjectStatus = "ACTIVE" | "IN SETUP" | "RELEASED";

export interface ProjectItem {
  id: string;
  monogram: string;
  name: string;
  summary: Record<Locale, string>;
  status: ProjectStatus;
  featured?: boolean;
  url: string;
  tags: string[];
  arcanaCode: string;
}

export interface SocialItem {
  id: "github" | "bilibili" | "steam" | "heybox" | "x";
  label: Record<Locale, string>;
  handle: string;
  domain: string;
  url: string;
}

export interface ActivityEvent {
  id: string;
  date: string;
  type: "Public" | "Fork" | "Watch" | "Push" | "Release" | "Create";
  repo: string;
  url: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionSummary {
  total: number;
  repositories: number;
  followers: number;
  days: ContributionDay[];
  source: "live" | "snapshot";
  updatedAt: string;
}

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  visitorLog: boolean;
  version: 1;
  decision: "all" | "necessary" | "reject" | "custom" | null;
  decidedAt: string | null;
}

export interface ServiceNodeMetrics {
  cpu: number | null;
  ram: number | null;
  note?: string;
  at?: number;
}

export interface MetricsPayload {
  ali: ServiceNodeMetrics;
  tencent: ServiceNodeMetrics;
  ts: number;
  source: string;
}

export interface ArcanaMarker {
  index: string;
  roman: string;
  title: string;
  sectionId: string;
  geometry: "fool" | "magician" | "emperor" | "star" | "moon" | "wheel" | "world";
}
