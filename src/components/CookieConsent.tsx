"use client";

import React from "react";
import { useApp } from "@/providers/AppProvider";

export function CookieConsent() {
  const { t, consent, updateConsent, consentOpen, setConsentOpen } = useApp();

  if (!consentOpen) {
    return (
      <button
        type="button"
        className="cookie-pill"
        onClick={() => setConsentOpen(true)}
        aria-label={t.cookie.pill}
      >
        {t.cookie.pill}
      </button>
    );
  }

  return (
    <aside className="cookie-sheet" role="dialog" aria-label={t.cookie.title}>
      <h2 className="cookie-sheet__title">{t.cookie.title}</h2>
      <p className="cookie-sheet__body">{t.cookie.body}</p>
      {consent.decision && (
        <p
          style={{
            margin: "0 0 14px",
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "var(--ink-secondary)",
          }}
        >
          {t.cookie.savedPrefix} {t.cookie.analytics}:{consent.analytics ? t.cookie.on : t.cookie.off} /{" "}
          {t.cookie.visitorLog}:{consent.visitorLog ? t.cookie.on : t.cookie.off}
        </p>
      )}
      <div className="cookie-sheet__actions">
        <button
          type="button"
          className="cookie-btn cookie-btn--primary"
          onClick={() => updateConsent("all")}
        >
          {t.cookie.acceptAll}
        </button>
        <button
          type="button"
          className="cookie-btn"
          onClick={() => updateConsent("necessary")}
        >
          {t.cookie.necessaryOnly}
        </button>
        <button
          type="button"
          className="cookie-btn"
          onClick={() => updateConsent("reject")}
        >
          {t.cookie.rejectExtra}
        </button>
      </div>
    </aside>
  );
}
