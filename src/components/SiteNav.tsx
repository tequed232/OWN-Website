"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
import { useApp } from "@/providers/AppProvider";
import { SITE_META } from "@/config/site";
import type { Locale } from "@/types/site";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "zh", label: "ZH" },
  { code: "en", label: "EN" },
  { code: "ja", label: "JA" },
];

export function SiteNav() {
  const pathname = usePathname();
  const { locale, setLocale, t, theme, toggleTheme } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const homeItems = [
    { label: t.nav.about, href: "#draw" },
    { label: t.nav.github, href: "#github" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.social, href: "#social" },
    { label: t.nav.activity, href: "#activity" },
    { label: t.nav.product, href: "/product" },
    { label: t.nav.download, href: "/download" },
    { label: t.nav.status, href: "/status" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const subpageItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.product, href: "/product" },
    { label: t.nav.download, href: "/download" },
    { label: t.nav.status, href: "/status" },
  ];

  const navItems = isHome ? homeItems : subpageItems;

  return (
    <>
      <nav className="site-nav" aria-label="Primary Navigation">
        <div className="swiss-wrap site-nav__inner">
          <Link href="/" className="brand-mark" aria-label="OWN Home">
            <span className="brand-mark__square" aria-hidden="true" />
            <span>{SITE_META.brand}</span>
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => {
              const isCurrent = item.href === pathname;
              const isAnchor = item.href.startsWith("#");
              return (
                <li key={item.href}>
                  {isAnchor ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <Link href={item.href} aria-current={isCurrent ? "page" : undefined}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
            {!isHome && (
              <li>
                <a
                  href={SITE_META.harnessRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ArrowUpRight size={13} style={{ marginLeft: 3 }} aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>

          <div className="nav-controls">
            <div className="lang-segmented" role="group" aria-label="Language">
              {LOCALES.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  aria-pressed={locale === item.code}
                  onClick={() => setLocale(item.code)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={t.nav.themeToggle}
              title={t.nav.themeToggle}
            >
              {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            <button
              type="button"
              className="nav-menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={menuOpen ? t.nav.close : t.nav.menu}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-nav-drawer" className="mobile-drawer" role="dialog" aria-label="Mobile Navigation">
          {navItems.map((item) => {
            const isAnchor = item.href.startsWith("#");
            return isAnchor ? (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{item.label}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{item.label}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
