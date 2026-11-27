"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useApp } from "@/providers/AppProvider";
import { SITE_META } from "@/config/site";

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  const { t } = useApp();

  return (
    <footer className="site-footer" id="contact">
      <div className="swiss-wrap">
        {!compact && (
          <div className="footer-hero">
            <div className="footer-hero__left">
              <div className="section-kicker">{t.contact.kicker}</div>
              <h2 className="footer-title">{t.contact.title}</h2>
              <p className="footer-idea">{t.contact.idea}</p>
            </div>
            <div className="footer-hero__right">
              <a href="#projects" className="btn btn--secondary">
                {t.contact.exploreProjects}
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a href="#social" className="btn btn--primary">
                {t.contact.contactMe}
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}

        <div className="footer-legal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span className="brand-mark__square" aria-hidden="true" />
            <strong style={{ color: "var(--ink)" }}>
              {SITE_META.brand} · {SITE_META.domain}
            </strong>
          </div>
          <div style={{ display: "inline-flex", flexWrap: "wrap", gap: 18 }}>
            <Link href="/">{t.nav.home}</Link>
            <Link href="/product">{t.nav.product}</Link>
            <Link href="/download">{t.nav.download}</Link>
            <Link href="/status">{t.nav.status}</Link>
          </div>
          <div>
            {t.contact.motto} · {t.contact.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
