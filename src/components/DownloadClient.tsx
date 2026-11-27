"use client";

import React from "react";
import { ArrowUpRight, Package } from "lucide-react";
import { useApp } from "@/providers/AppProvider";
import { SITE_META } from "@/config/site";
import { CopyCommand } from "@/components/CopyCommand";
import { SiteFooter } from "@/components/SiteFooter";

export function DownloadClient() {
  const { t } = useApp();

  const mirrors = [
    {
      code: "01",
      name: "GitHub Releases",
      desc: "github.com/tequed232/DeepSeek-Harness/releases",
      url: SITE_META.harnessReleasesUrl,
    },
    {
      code: "02",
      name: "npm registry",
      desc: "npmjs.com/package/deepseek-harness",
      url: SITE_META.npmPackageUrl,
    },
    {
      code: "03",
      name: "npmmirror（中国大陆镜像）",
      desc: "registry.npmmirror.com/deepseek-harness",
      url: SITE_META.npmMirrorUrl,
    },
  ];

  return (
    <>
      <header className="subpage-hero">
        <div className="swiss-wrap">
          <div className="swiss-eyebrow">
            <span className="swiss-eyebrow__dot" aria-hidden="true" />
            <span>{t.download.kicker}</span>
          </div>
          <h1 className="subpage-hero__title">{t.download.title}</h1>
          <p className="subpage-hero__lead">{t.download.lead}</p>
        </div>
      </header>

      <section className="editorial-section">
        <div className="swiss-wrap" style={{ display: "grid", gap: 28 }}>
          {/* Honest Release Status Card */}
          <div className="card-surface" style={{ padding: "clamp(24px, 3.5vw, 36px)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <Package size={18} color="var(--accent)" aria-hidden="true" />
                <h2 style={{ margin: 0, fontSize: 19, fontWeight: 700 }}>{t.download.latestTitle}</h2>
              </div>
              <a
                href={SITE_META.harnessReleasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <span>{t.download.allReleases}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <p style={{ margin: "14px 0 0", fontSize: 15, color: "var(--ink-muted)", maxWidth: "66ch" }}>
              {t.download.latestFallback}
            </p>
          </div>

          {/* Mirrors Grid */}
          <div>
            <div className="section-kicker">01 · MIRRORS</div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}>
              {t.download.mirrorsTitle}
            </h2>
            <p className="section-desc" style={{ marginBottom: 24 }}>
              {t.download.mirrorsSubtitle}
            </p>

            <div className="projects-grid">
              {mirrors.map((m) => (
                <a
                  key={m.code}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface card-surface--interactive"
                  style={{ padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 18 }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="feature-card__code">{m.code}</span>
                    <ArrowUpRight size={16} color="var(--ink-muted)" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{m.name}</h3>
                    <p style={{ margin: "6px 0 0", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-muted)", wordBreak: "break-all" }}>
                      {m.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CLI Installation */}
          <div className="card-surface" style={{ padding: "clamp(24px, 3.5vw, 36px)" }}>
            <div className="section-kicker">02 · CLI</div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}>
              {t.download.cliTitle}
            </h2>
            <p className="section-desc" style={{ marginBottom: 24 }}>
              {t.download.cliSubtitle}
            </p>
            <div style={{ display: "grid", gap: 18 }}>
              <CopyCommand
                label={t.download.npmInstallLabel}
                command="npm install deepseek-harness"
                copyLabel={t.download.copy}
                copiedLabel={t.download.copied}
              />
              <CopyCommand
                label={t.download.npxRunLabel}
                command="npx deepseek-harness"
                copyLabel={t.download.copy}
                copiedLabel={t.download.copied}
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter compact />
    </>
  );
}
