"use client";

import { T } from "@/lib/theme";

export default function SourcesList({ sources, label = "SOURCES" }) {
  if (!sources || sources.length === 0) return null;
  return (
    <div
      style={{
        marginTop: 12,
        padding: 10,
        background: T.surface2,
        borderRadius: 6,
        border: `1px solid ${T.border}`,
      }}
    >
      <div
        style={{
          fontSize: 11,
          color: T.accent2,
          fontWeight: 700,
          fontFamily: "monospace",
          marginBottom: 6,
          letterSpacing: 1,
        }}
      >
        {label}:
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {sources.map((s, i) => (
          <li
            key={i}
            style={{
              fontSize: 11,
              color: T.textDim,
              marginBottom: 4,
              lineHeight: 1.45,
              wordBreak: "break-word",
            }}
          >
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: T.accent2,
                  textDecoration: "none",
                  display: "inline-block",
                  padding: "2px 0",
                }}
              >
                {s.label} <span style={{ fontSize: 10, opacity: 0.7 }}>↗</span>
              </a>
            ) : (
              <span style={{ fontStyle: "italic" }}>{s.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
