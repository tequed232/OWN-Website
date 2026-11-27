"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useApp } from "@/providers/AppProvider";
import { SiteFooter } from "@/components/SiteFooter";
import type { MetricsPayload } from "@/types/site";

export function StatusClient() {
  const { t } = useApp();
  const [metrics, setMetrics] = useState<MetricsPayload | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch("/api/admin/metrics", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as MetricsPayload;
        if (active) setMetrics(data);
      } catch {
        // Keep last good state
      }
    };
    load();
    const timer = window.setInterval(load, 30000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  const bars = Array.from({ length: 30 }, (_, i) => i);

  const formattedTime = metrics
    ? new Date(metrics.ts).toISOString().replace("T", " ").slice(0, 19) + " UTC"
    : "—";

  const services = [
    {
      id: "web",
      name: t.status.services.web.name,
      desc: t.status.services.web.desc,
      state: "operational" as const,
      meta: null as string | null,
    },
    {
      id: "api",
      name: t.status.services.api.name,
      desc: t.status.services.api.desc,
      state: "operational" as const,
      meta: null as string | null,
    },
    {
      id: "ali",
      name: t.status.services.ali.name,
      desc: t.status.services.ali.desc,
      state: "operational" as const,
      meta:
        metrics?.ali.cpu != null && metrics?.ali.ram != null
          ? `CPU ${metrics.ali.cpu.toFixed(1)}% · RAM ${metrics.ali.ram.toFixed(1)}%`
          : null,
    },
    {
      id: "tencent",
      name: t.status.services.tencent.name,
      desc: t.status.services.tencent.desc,
      state: metrics?.tencent.cpu != null ? ("operational" as const) : ("pending" as const),
      meta: metrics?.tencent.note ?? "tencent agent pending",
    },
  ];

  return (
    <>
      <header className="subpage-hero">
        <div className="swiss-wrap">
          <div className="swiss-eyebrow">
            <span className="swiss-eyebrow__dot" aria-hidden="true" />
            <span>{t.status.kicker}</span>
          </div>
          <h1 className="subpage-hero__title">{t.status.title}</h1>
          <p className="subpage-hero__lead">{t.status.lead}</p>
        </div>
      </header>

      <section className="editorial-section">
        <div className="swiss-wrap">
          <div className="status-banner" role="status">
            <div className="status-banner__title">
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{t.status.allOperational}</span>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
              99.98% · 30D
            </span>
          </div>

          <div className="status-list">
            {services.map((svc) => (
              <div key={svc.id} className="card-surface status-row">
                <div className="status-row__top">
                  <div>
                    <h2 className="status-row__name">{svc.name}</h2>
                    <p className="status-row__desc">{svc.desc}</p>
                  </div>
                  <span
                    className={`status-pill ${
                      svc.state === "operational" ? "status-pill--active" : "status-pill--pending"
                    }`}
                  >
                    <span className="status-dot" aria-hidden="true" />
                    {svc.state === "operational" ? t.status.operational : t.status.pending}
                  </span>
                </div>

                <div className="status-bars" aria-hidden="true">
                  {bars.map((idx) => (
                    <span
                      key={idx}
                      className={`status-bar ${svc.state === "pending" ? "status-bar--pending" : ""}`}
                    />
                  ))}
                </div>

                {svc.meta && (
                  <div className="status-metrics-strip">
                    <span>{svc.meta}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 22,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--ink-muted)",
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <span>
              {t.status.lastUpdated} · {formattedTime}
            </span>
            <span>·</span>
            <span>{t.status.autoRefresh}</span>
            <span>·</span>
            <span>
              {t.status.sourceLabel}: {metrics?.source ?? "push"}
            </span>
          </div>
        </div>
      </section>

      <SiteFooter compact />
    </>
  );
}
