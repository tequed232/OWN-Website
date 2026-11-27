"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyCommand({
  command,
  label,
  copyLabel,
  copiedLabel,
}: {
  command: string;
  label?: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      {label && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "var(--ink-muted)",
            marginBottom: 8,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      )}
      <div className="cli-box">
        <code>{command}</code>
        <button
          type="button"
          className="copy-btn"
          data-copied={copied}
          onClick={onCopy}
        >
          {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
          <span>{copied ? copiedLabel : copyLabel}</span>
        </button>
      </div>
    </div>
  );
}
