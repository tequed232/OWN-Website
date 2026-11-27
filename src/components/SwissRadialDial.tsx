"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/providers/AppProvider";

interface DialNode {
  id: string;
  label: string;
  href: string;
  angleDeg: number;
  code: string;
}

export function SwissRadialDial() {
  const { t } = useApp();
  const router = useRouter();
  const [activeId, setActiveId] = useState<string | null>(null);

  const nodes: DialNode[] = [
    { id: "product", label: t.nav.product, href: "/product", angleDeg: -90, code: "01" },
    { id: "contact", label: t.nav.contact, href: "#contact", angleDeg: -38, code: "02" },
    { id: "github", label: t.nav.github, href: "#github", angleDeg: 14, code: "03" },
    { id: "projects", label: t.nav.projects, href: "#projects", angleDeg: 66, code: "04" },
    { id: "social", label: t.nav.social, href: "#social", angleDeg: 118, code: "05" },
    { id: "activity", label: t.nav.activity, href: "#activity", angleDeg: 170, code: "06" },
    { id: "download", label: t.nav.download, href: "/download", angleDeg: 222, code: "07" },
  ];

  const cx = 200;
  const cy = 200;
  const ringR = 136;
  const labelR = 170;

  const navigate = (href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    router.push(href);
  };

  // 60 Swiss precision dial ticks
  const ticks = Array.from({ length: 60 }, (_, i) => {
    const rad = ((i * 6 - 90) * Math.PI) / 180;
    const isMajor = i % 5 === 0;
    const r1 = isMajor ? 124 : 130;
    const r2 = 136;
    return {
      x1: cx + Math.cos(rad) * r1,
      y1: cy + Math.sin(rad) * r1,
      x2: cx + Math.cos(rad) * r2,
      y2: cy + Math.sin(rad) * r2,
      isMajor,
    };
  });

  return (
    <div className="swiss-dial" role="navigation" aria-label={t.hero.dialHint}>
      <svg className="swiss-dial__svg" viewBox="0 0 400 400" role="img" aria-label="OWN Precision Index Dial">
        {/* Outer architectural guide rings */}
        <circle cx={cx} cy={cy} r={ringR} fill="none" stroke="var(--rule)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={88} fill="none" stroke="var(--rule)" strokeWidth="1" strokeDasharray="2 5" />
        <circle cx={cx} cy={cy} r={42} fill="var(--surface)" stroke="var(--rule-strong)" strokeWidth="1.25" />

        {/* Crosshair axes */}
        <line x1={cx - 144} y1={cy} x2={cx + 144} y2={cy} stroke="var(--rule)" strokeWidth="0.75" />
        <line x1={cx} y1={cy - 144} x2={cx} y2={cy + 144} stroke="var(--rule)" strokeWidth="0.75" />

        {/* 60 Swiss railway ticks */}
        {ticks.map((tick, idx) => (
          <line
            key={idx}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={tick.isMajor ? "var(--rule-strong)" : "var(--rule)"}
            strokeWidth={tick.isMajor ? "1.4" : "0.9"}
          />
        ))}

        {/* Radial vectors & interactive nodes */}
        {nodes.map((node) => {
          const rad = (node.angleDeg * Math.PI) / 180;
          const xStart = cx + Math.cos(rad) * 44;
          const yStart = cy + Math.sin(rad) * 44;
          const xEnd = cx + Math.cos(rad) * ringR;
          const yEnd = cy + Math.sin(rad) * ringR;
          const xLabel = cx + Math.cos(rad) * labelR;
          const yLabel = cy + Math.sin(rad) * labelR;
          const isActive = activeId === node.id;

          return (
            <g
              key={node.id}
              className="swiss-dial__node"
              tabIndex={0}
              role="link"
              aria-label={node.label}
              onMouseEnter={() => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(node.id)}
              onBlur={() => setActiveId(null)}
              onClick={() => navigate(node.href)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(node.href);
                }
              }}
            >
              <line
                x1={xStart}
                y1={yStart}
                x2={xEnd}
                y2={yEnd}
                stroke={isActive ? "var(--accent)" : "var(--rule-strong)"}
                strokeWidth={isActive ? "2" : "1"}
              />
              <circle
                cx={xEnd}
                cy={yEnd}
                r={isActive ? 6.5 : 4.5}
                fill={isActive ? "var(--accent)" : "var(--surface)"}
                stroke={isActive ? "var(--accent)" : "var(--ink)"}
                strokeWidth="1.5"
              />
              <text
                x={xLabel}
                y={yLabel}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isActive ? "var(--accent)" : "var(--ink-secondary)"}
                fontSize="11.5"
                fontWeight={isActive ? "700" : "500"}
                fontFamily="var(--font-sans)"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Center OWN Monogram + Swiss Red Pivot */}
        <circle cx={cx} cy={cy - 18} r="3" fill="var(--accent)" />
        <text
          x={cx}
          y={cy + 3}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--ink)"
          fontSize="12"
          fontWeight="700"
          letterSpacing="0.16em"
          fontFamily="var(--font-mono)"
        >
          OWN
        </text>
        <text
          x={cx}
          y={cy + 18}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--ink-muted)"
          fontSize="8.5"
          letterSpacing="0.12em"
          fontFamily="var(--font-mono)"
        >
          2026
        </text>
      </svg>
      <p className="swiss-dial__hint">{t.hero.dialHint}</p>
    </div>
  );
}
