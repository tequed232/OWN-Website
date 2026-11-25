"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useApp } from "@/providers/AppProvider";
import { SITE_META } from "@/config/site";
import { CopyCommand } from "@/components/CopyCommand";
import { SiteFooter } from "@/components/SiteFooter";

export function ProductClient() {
  const { t } = useApp();

  return (
    <>
      <header className="subpage-hero">
        <div className="swiss-wrap">
          <div className="swiss-eyebrow">
            <span className="swiss-eyebrow__dot" aria-hidden="true" />
            <span>{t.product.kicker}</span>
          </div>
          <h1 className="subpage-hero__title">{t.product.title}</h1>
          <p className="subpage-hero__lead">{t.product.lead}</p>
          <div className="hero__actions">
            <Link href="/download" className="btn btn--primary">
              <span>{t.product.goDownload}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href={SITE_META.harnessRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <span>{t.product.viewGithub}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section className="editorial-section">
        <div className="swiss-wrap">
          <div className="section-header">
            <div className="section-header__left">
              <div className="section-kicker">01 · ARCHITECTURE</div>
              <h2 className="section-title">{t.product.featuresTitle}</h2>
              <p className="section-desc">{t.product.featuresSubtitle}</p>
            </div>
          </div>

          <div className="feature-grid-4">
            {t.product.features.map((feat) => (
              <article key={feat.code} className="card-surface feature-card">
                <span className="feature-card__code">{feat.code}</span>
                <h3 className="feature-card__title">{feat.title}</h3>
                <p className="feature-card__body">{feat.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="swiss-wrap">
          <div className="card-surface" style={{ padding: "clamp(28px, 4vw, 44px)" }}>
            <div className="section-kicker">02 · QUICK START</div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}>
              {t.product.quickStartTitle}
            </h2>
            <p className="section-desc" style={{ marginBottom: 24 }}>
              {t.product.quickStartLead}
            </p>
            <CopyCommand
              command="npm install deepseek-harness"
              copyLabel={t.product.copy}
              copiedLabel={t.product.copied}
            />
          </div>
        </div>
      </section>

      <SiteFooter compact />
    </>
  );
}
