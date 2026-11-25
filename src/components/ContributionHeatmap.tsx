"use client";

import React, { useMemo, useState } from "react";
import { useApp } from "@/providers/AppProvider";
import type { ContributionSummary } from "@/types/site";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const LEVEL_COLORS = ["var(--hm-0)", "var(--hm-1)", "var(--hm-2)", "var(--hm-3)", "var(--hm-4)"] as const;

export function ContributionHeatmap({ summary }: { summary: ContributionSummary }) {
  const { t } = useApp();
  const [hovered, setHovered] = useState<{ date: string; count: number } | null>(null);

  const weeks = useMemo(() => {
    const cols: typeof summary.days[] = [];
    for (let i = 0; i < summary.days.length; i += 7) {
      cols.push(summary.days.slice(i, i + 7));
    }
    return cols;
  }, [summary.days]);

  const monthLabels = useMemo(() => {
    const labels: { col: number; text: string }[] = [];
    let lastMonth = -1;
    let lastCol = -99;
    weeks.forEach((week, colIdx) => {
      const first = week[0];
      if (!first) return;
      const month = Number(first.date.slice(5, 7)) - 1;
      if (month !== lastMonth) {
        if (colIdx - lastCol >= 3) {
          labels.push({ col: colIdx, text: MONTHS[month] ?? "" });
          lastCol = colIdx;
        }
        lastMonth = month;
      }
    });
    return labels;
  }, [weeks]);

  const cellSize = 12;
  const gap = 3;
  const step = cellSize + gap;
  const svgWidth = weeks.length * step + 4;
  const svgHeight = 7 * step + 22;

  return (
    <div className="card-surface heatmap-card">
      <div className="heatmap-card__meta">
        <div className="heatmap-total">
          {summary.total.toLocaleString()}
          <span>{t.github.contributionsSuffix}</span>
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--ink-muted)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {hovered
            ? `${hovered.date} · ${hovered.count} contributions`
            : summary.source === "live"
              ? t.github.liveNote
              : t.github.snapshotNote}
        </div>
      </div>

      <div className="heatmap-scroll" role="region" aria-label="GitHub 12-month contribution heatmap">
        <svg
          style={{ width: "100%", minWidth: 680, height: "auto", display: "block" }}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          role="img"
          aria-label={`${summary.total} contributions over the last 12 months`}
        >
          {monthLabels.map((m) => (
            <text
              key={`${m.col}-${m.text}`}
              x={m.col * step}
              y={11}
              fill="var(--ink-muted)"
              fontSize="10"
              fontFamily="var(--font-mono)"
            >
              {m.text}
            </text>
          ))}

          {weeks.map((week, colIdx) =>
            week.map((day, rowIdx) => (
              <rect
                key={day.date}
                x={colIdx * step}
                y={20 + rowIdx * step}
                width={cellSize}
                height={cellSize}
                rx={3}
                fill={LEVEL_COLORS[day.level]}
                onMouseEnter={() => setHovered({ date: day.date, count: day.count })}
                onMouseLeave={() => setHovered(null)}
              >
                <title>{`${day.date}: ${day.count} contributions`}</title>
              </rect>
            ))
          )}
        </svg>
      </div>

      <div className="heatmap-footer">
        <span>
          {summary.days[0]?.date} — {summary.days[summary.days.length - 1]?.date}
        </span>
        <div className="heatmap-legend" aria-label="Contribution intensity legend">
          <span>{t.github.less}</span>
          {LEVEL_COLORS.map((color, i) => (
            <span
              key={i}
              className="heatmap-swatch"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            />
          ))}
          <span>{t.github.more}</span>
        </div>
      </div>
    </div>
  );
}
