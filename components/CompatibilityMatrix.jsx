"use client";

import React, { useMemo } from "react";
import { CONNECTORS, BUILDS } from "@/data";
import { T, STATUS_META } from "@/lib/theme";
import { buildCompatibilityMatrix } from "@/data/signal-info";

export default function CompatibilityMatrix({ onSelectBuild }) {
  const { matrix, order } = useMemo(() => buildCompatibilityMatrix(BUILDS), []);

  const cellColors = {
    standard: T.green,
    partial: T.yellow,
    field_hack: T.accent,
    not_possible: T.red,
  };

  const cellIcons = {
    standard: "\u2713",
    partial: "\u25D0",
    field_hack: "\u26A1",
    not_possible: "\u2715",
  };

  // Find the best build for a connector pair
  const findBuild = (from, to) => {
    return BUILDS.find(b =>
      (b.from === from && b.to === to) || (b.from === to && b.to === from)
    );
  };

  return (
    <div style={{ overflowX: "auto", marginTop: 8 }}>
      <div style={{ display: "inline-grid", gridTemplateColumns: `48px repeat(${order.length}, 36px)`, gap: 1, fontSize: 8, fontFamily: "monospace" }}>
        {/* Header row */}
        <div style={{ position: "sticky", left: 0, zIndex: 3, background: T.bg }} />
        {order.map(k => (
          <div key={k} style={{
            writingMode: "vertical-rl", textOrientation: "mixed",
            transform: "rotate(180deg)", padding: "4px 2px",
            color: T.text, fontWeight: 700, fontSize: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: 50,
          }}>
            {CONNECTORS[k]?.short || k}
          </div>
        ))}

        {/* Data rows */}
        {order.map(row => (
          <React.Fragment key={row}>
            {/* Row header */}
            <div style={{
              color: T.text, fontWeight: 700, fontSize: 9,
              display: "flex", alignItems: "center", padding: "0 4px",
              whiteSpace: "nowrap",
              position: "sticky", left: 0, zIndex: 2, background: T.bg,
            }}>
              {CONNECTORS[row]?.short || row}
            </div>
            {/* Cells */}
            {order.map(col => {
              const status = matrix[row]?.[col];
              const isSelf = row === col;
              const color = status ? cellColors[status] : T.border;
              const icon = status ? cellIcons[status] : "";
              const build = !isSelf && status ? findBuild(row, col) : null;

              return (
                <div
                  key={`${row}-${col}`}
                  onClick={() => build && onSelectBuild?.(build)}
                  style={{
                    width: 36, height: 36,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: isSelf ? T.surface : status ? color + "18" : T.surface2,
                    border: `1px solid ${isSelf ? T.border : status ? color + "40" : T.border + "60"}`,
                    borderRadius: 3,
                    cursor: build ? "pointer" : "default",
                    fontSize: 14,
                    color: color,
                    transition: "background 0.1s",
                  }}
                  title={build ? `${CONNECTORS[row]?.short} → ${CONNECTORS[col]?.short}: ${STATUS_META[status]?.label}` : isSelf ? "Same connector" : "No build data"}
                >
                  {isSelf ? "\u2022" : icon}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
        {Object.entries(STATUS_META).map(([key, meta]) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ color: meta.color, fontSize: 14 }}>{meta.icon}</span>
            <span style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace" }}>{meta.label}</span>
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ color: T.border, fontSize: 14 }}>&mdash;</span>
          <span style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace" }}>No build yet</span>
        </div>
      </div>

      <p style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace", marginTop: 8 }}>
        Tap a cell to view the build.
      </p>
    </div>
  );
}
