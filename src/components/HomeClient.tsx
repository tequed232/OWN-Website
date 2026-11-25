"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe, Terminal, Gamepad2, Compass, Code2 } from "lucide-react";
import { useApp } from "@/providers/AppProvider";
import { PROJECTS, SITE_META, SOCIALS } from "@/config/site";
import { SwissRadialDial } from "@/components/SwissRadialDial";
import { ContributionHeatmap } from "@/components/ContributionHeatmap";
import { SiteFooter } from "@/components/SiteFooter";
import type { ActivityEvent, ContributionSummary, SocialItem } from "@/types/site";

function SocialIcon({ id }: { id: SocialItem["id"] }) {
  switch (id) {
    case "github":
      return <Code2 size={18} aria-hidden="true" />;
    case "bilibili":
      return <Compass size={18} aria-hidden="true" />;
    case "steam":
      return <Gamepad2 size={18} aria-hidden="true" />;
    case "heybox":
      return <Terminal size={18} aria-hidden="true" />;
    case "x":
      return <Globe size={18} aria-hidden="true" />;
  }
}

export function HomeClient({
  contributions,
  activity,
}: {
  contributions: ContributionSummary;
  activity: ActivityEvent[];
}) {
  const { locale, t } = useApp();

  const flagship = PROJECTS.find((p) => p.featured) ?? PROJECTS[0]!;
  const secondaryProjects = PROJECTS.filter((p) => p.id !== flagship.id);

  const pad2 = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {/* 00 · HERO */}
      <header className="hero" id="top">
        <div className="swiss-wrap hero__grid">
          <div className="hero__copy">
            <div className="swiss-eyebrow">
              <span className="swiss-eyebrow__dot" aria-hidden="true" />
              <span>{t.hero.eyebrow}</span>
            </div>

            <h1 className="hero__title">
              {t.hero.titleLine1} {t.hero.titleLine2}
              <span className="hero__title-accent">{t.hero.titleAccent}</span>
            </h1>

            <p className="hero__tagline">{t.hero.tagline}</p>

            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                <span>{t.hero.primaryCta}</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <Link href="/product" className="btn btn--secondary">
                <span>{t.hero.secondaryCta}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <dl className="hero__stats" aria-label="GitHub Summary">
              <div className="hero__stat">
                <dt>{t.hero.stats.repos}</dt>
                <dd>{pad2(contributions.repositories)}</dd>
              </div>
              <div className="hero__stat">
                <dt>{t.hero.stats.followers}</dt>
                <dd>{pad2(contributions.followers)}</dd>
              </div>
              <div className="hero__stat">
                <dt>{t.hero.stats.contributions}</dt>
                <dd>{contributions.total}</dd>
              </div>
            </dl>
          </div>

          <div className="hero__stage">
            <SwissRadialDial />
          </div>
        </div>
      </header>

      {/* 01 · FEATURED (THE DRAW) */}
      <section className="editorial-section" id="draw" aria-labelledby="heading-draw">
        <div className="swiss-wrap">
          <div className="section-header">
            <div className="section-header__left">
              <div className="section-kicker">{t.draw.kicker}</div>
              <h2 id="heading-draw" className="section-title">
                {t.draw.title}
              </h2>
              <p className="section-desc">{t.draw.description}</p>
            </div>
            <div className="section-header__right">
              <a
                href={SITE_META.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <span>{t.draw.cta}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="bento-featured">
            {/* Flagship Bento Card */}
            <a
              href={flagship.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface card-surface--interactive bento-flagship"
            >
              <div className="bento-flagship__top">
                <span className="status-pill status-pill--active">
                  <span className="status-dot" aria-hidden="true" />
                  {flagship.status}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--ink-muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t.draw.flagshipLabel}
                </span>
              </div>

              <div className="bento-flagship__body">
                <h3 className="bento-flagship__name">{flagship.name}</h3>
                <p className="bento-flagship__desc">{flagship.summary[locale]}</p>
                <div className="tag-row">
                  {flagship.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Swiss Constructivist Precision Vector Emblem */}
              <svg
                className="bento-flagship__art"
                viewBox="0 0 220 220"
                aria-hidden="true"
              >
                <rect
                  x="24"
                  y="24"
                  width="172"
                  height="172"
                  fill="none"
                  stroke="var(--rule)"
                  strokeWidth="1"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="64"
                  fill="none"
                  stroke="var(--rule-strong)"
                  strokeWidth="1.25"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="24"
                  fill="none"
                  stroke="var(--rule)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />
                <line
                  x1="36"
                  y1="184"
                  x2="184"
                  y2="36"
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
                <circle cx="110" cy="110" r="4.5" fill="var(--accent)" />
              </svg>
            </a>

            {/* Secondary Stacked Bento Cards */}
            <div className="bento-stack">
              {secondaryProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface card-surface--interactive bento-mini"
                >
                  <div>
                    <div className="bento-mini__head">
                      <span className="status-pill">{project.status}</span>
                      <ArrowUpRight size={16} color="var(--ink-muted)" aria-hidden="true" />
                    </div>
                    <h3 className="bento-mini__name" style={{ marginTop: 14 }}>
                      {project.name}
                    </h3>
                    <p className="bento-mini__desc">{project.summary[locale]}</p>
                  </div>
                  <div className="tag-row" style={{ marginTop: 0 }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 · GITHUB CONTRIBUTIONS */}
      <section className="editorial-section" id="github" aria-labelledby="heading-github">
        <div className="swiss-wrap">
          <div className="section-header">
            <div className="section-header__left">
              <div className="section-kicker">{t.github.kicker}</div>
              <h2 id="heading-github" className="section-title">
                {t.github.title}
              </h2>
              <p className="section-desc">{t.github.description}</p>
            </div>
            <div className="section-header__right">
              <a
                href={SITE_META.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <span>{t.github.cta}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <ContributionHeatmap summary={contributions} />
        </div>
      </section>

      {/* 03 · PROJECTS INDEX */}
      <section className="editorial-section" id="projects" aria-labelledby="heading-projects">
        <div className="swiss-wrap">
          <div className="section-header">
            <div className="section-header__left">
              <div className="section-kicker">{t.projects.kicker}</div>
              <h2 id="heading-projects" className="section-title">
                {t.projects.title}
              </h2>
              <p className="section-desc">{t.projects.description}</p>
            </div>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface card-surface--interactive project-card"
              >
                <div>
                  <div className="project-card__top">
                    <span className="project-monogram" aria-hidden="true">
                      {project.monogram}
                    </span>
                    <span
                      className={`status-pill ${
                        project.status === "ACTIVE" ? "status-pill--active" : ""
                      }`}
                    >
                      {project.status === "ACTIVE" && (
                        <span className="status-dot" aria-hidden="true" />
                      )}
                      {project.status}
                    </span>
                  </div>
                  <h3 className="project-card__title">{project.name}</h3>
                  <p className="project-card__desc">{project.summary[locale]}</p>
                </div>

                <div className="project-card__foot">
                  <span>{project.arcanaCode}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    {t.projects.openRepo} <ArrowUpRight size={13} aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 04 · SOCIAL DIRECTORY */}
      <section className="editorial-section" id="social" aria-labelledby="heading-social">
        <div className="swiss-wrap">
          <div className="section-header">
            <div className="section-header__left">
              <div className="section-kicker">{t.social.kicker}</div>
              <h2 id="heading-social" className="section-title">
                {t.social.title}
              </h2>
              <p className="section-desc">{t.social.description}</p>
            </div>
          </div>

          <div className="social-grid">
            {SOCIALS.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface card-surface--interactive social-card"
              >
                <div className="social-card__head">
                  <SocialIcon id={item.id} />
                  <ArrowUpRight size={15} color="var(--ink-muted)" aria-hidden="true" />
                </div>
                <div>
                  <div className="social-card__label">{item.label[locale]}</div>
                  <div className="social-card__handle">{item.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · ACTIVITY LEDGER */}
      <section className="editorial-section" id="activity" aria-labelledby="heading-activity">
        <div className="swiss-wrap">
          <div className="section-header">
            <div className="section-header__left">
              <div className="section-kicker">{t.activity.kicker}</div>
              <h2 id="heading-activity" className="section-title">
                {t.activity.title}
              </h2>
              <p className="section-desc">{t.activity.description}</p>
            </div>
            <div className="section-header__right">
              <a
                href={SITE_META.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <span>{t.activity.cta}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="card-surface ledger">
            <div className="ledger-head" aria-hidden="true">
              <span>{t.activity.colDate}</span>
              <span>{t.activity.colType}</span>
              <span>{t.activity.colRepo}</span>
              <span />
            </div>
            {activity.map((event) => (
              <a
                key={event.id}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ledger-row"
              >
                <span className="ledger-date">{event.date}</span>
                <span className="ledger-type">{event.type}</span>
                <span className="ledger-repo">{event.repo}</span>
                <ArrowUpRight size={15} color="var(--ink-muted)" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · FOOTER */}
      <SiteFooter />
    </>
  );
}
