"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DICTIONARIES, type Dictionary } from "@/lib/i18n";
import type { ConsentState, Locale, ThemeMode } from "@/types/site";

interface AppContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Dictionary;
  theme: ThemeMode;
  toggleTheme: () => void;
  consent: ConsentState;
  updateConsent: (decision: "all" | "necessary" | "reject") => void;
  consentOpen: boolean;
  setConsentOpen: (open: boolean) => void;
}

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  visitorLog: false,
  version: 1,
  decision: null,
  decidedAt: null,
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [consentOpen, setConsentOpen] = useState(false);

  useEffect(() => {
    try {
      const savedLang = window.localStorage.getItem("ph-lang");
      if (savedLang === "zh" || savedLang === "en" || savedLang === "ja") {
        setLocaleState(savedLang);
      }

      const savedTheme = window.localStorage.getItem("own-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }

      const savedConsent = window.localStorage.getItem("ph-consent");
      if (savedConsent) {
        const parsed = JSON.parse(savedConsent) as Partial<ConsentState>;
        if (parsed.version === 1) {
          setConsent({
            necessary: true,
            analytics: Boolean(parsed.analytics),
            visitorLog: Boolean(parsed.visitorLog),
            version: 1,
            decision: parsed.decision ?? "necessary",
            decidedAt: parsed.decidedAt ?? null,
          });
        }
      }
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, []);

  useEffect(() => {
    const langAttr = locale === "zh" ? "zh-CN" : locale;
    document.documentElement.lang = langAttr;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem("ph-lang", next);
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: ThemeMode = prev === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        window.localStorage.setItem("own-theme", next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const updateConsent = useCallback((decision: "all" | "necessary" | "reject") => {
    const next: ConsentState = {
      necessary: true,
      analytics: decision === "all",
      visitorLog: decision === "all",
      version: 1,
      decision,
      decidedAt: new Date().toISOString(),
    };
    setConsent(next);
    setConsentOpen(false);
    try {
      window.localStorage.setItem("ph-consent", JSON.stringify(next));
    } catch {
      // ignore
    }
    if (decision === "all") {
      fetch("/api/visitor-log", {
        method: "POST",
        headers: { "x-ph-consent": "visitor-log", "Content-Type": "application/json" },
        body: JSON.stringify({ path: window.location.pathname }),
      }).catch(() => {});
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        t: DICTIONARIES[locale],
        theme,
        toggleTheme,
        consent,
        updateConsent,
        consentOpen,
        setConsentOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
