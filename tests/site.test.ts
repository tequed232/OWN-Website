import { describe, expect, it } from "vitest";
import { buildSnapshotContributions, PROJECTS, SOCIALS, SNAPSHOT_STATS } from "@/config/site";
import { DICTIONARIES } from "@/lib/i18n";

describe("OWN-Website data and i18n integrity", () => {
  it("builds a 364-day contribution matrix summing to the verified total", () => {
    const days = buildSnapshotContributions("2026-11-25");
    expect(days).toHaveLength(364);
    const total = days.reduce((sum, d) => sum + d.count, 0);
    expect(total).toBe(SNAPSHOT_STATS.contributions);
    expect(days[days.length - 1]?.date).toBe("2026-11-25");
  });

  it("provides complete zh, en, and ja translations", () => {
    for (const locale of ["zh", "en", "ja"] as const) {
      const dict = DICTIONARIES[locale];
      expect(dict.hero.titleAccent).toBeTruthy();
      expect(dict.product.features).toHaveLength(4);
      expect(dict.status.services.ali.name).toBeTruthy();
    }
  });

  it("preserves all real projects and social destinations", () => {
    expect(PROJECTS.map((p) => p.name)).toEqual([
      "DSH-L2D",
      "Dolphin Calendar",
      "Agent MCP LinkerHub",
    ]);
    expect(SOCIALS.map((s) => s.id)).toContain("github");
    expect(SOCIALS.map((s) => s.id)).toContain("bilibili");
    expect(SOCIALS.map((s) => s.id)).toContain("heybox");
  });
});
