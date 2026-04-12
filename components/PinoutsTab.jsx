"use client";

import { useState } from "react";
import { CONNECTORS, BUILDS } from "@/data";
import { T, CABLE_WIRE_COLORS, styles } from "@/lib/theme";
import { SIGNAL_INFO } from "@/data/signal-info";
import ConnectorDiagram from "./connectors/ConnectorDiagram";
import PinTable from "./PinTable";
import ConnectorPicker from "./ConnectorPicker";

// Build pinColors map for a connector from its cable wire colors
function getPinColors(connKey) {
  const colors = CABLE_WIRE_COLORS[connKey];
  if (!colors) return { highlights: [], pinColors: {} };
  const conn = CONNECTORS[connKey];
  const highlights = conn.pins.map(p => p.id);
  const pinColors = {};
  conn.pins.forEach(p => {
    const wc = colors[p.id];
    if (wc) {
      pinColors[p.id] = wc.hasStripe
        ? { color: wc.color, stripe: wc.stripe }
        : wc.lineColor || wc.color;
    }
  });
  return { highlights, pinColors };
}

export default function PinoutsTab({ onNavigateToBuild }) {
  const [selected, setSelected] = useState(null);
  const [side, setSide] = useState("face");
  const connKeys = Object.keys(CONNECTORS);

  if (selected) {
    const conn = CONNECTORS[selected];
    const { highlights, pinColors } = getPinColors(selected);

    return (
      <div>
        <button onClick={() => setSelected(null)} style={styles.backBtn}>&larr; All Connectors</button>
        <h2 style={{ color: T.text, fontSize: 18, margin: "12px 0 4px", fontFamily: "'JetBrains Mono', monospace" }}>{conn.name}</h2>

        {conn.type !== "coax" && conn.type !== "dt12" && (
          <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
            {["face", "solder"].map((s) => (
              <button key={s} onClick={() => setSide(s)} style={{
                ...styles.toggleBtn,
                background: side === s ? T.accent : T.surface2,
                color: side === s ? "#fff" : T.textDim,
              }}>
                {s === "face" ? "Face View" : "Solder Side"}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
          <ConnectorDiagram connKey={selected} side={side} highlightPins={highlights} pinColors={pinColors} />
        </div>
        <PinTable conn={conn} connKey={selected} />

        {/* Signal info */}
        {SIGNAL_INFO[selected] && (() => {
          const info = SIGNAL_INFO[selected];
          return (
            <div style={{ marginTop: 16, padding: 10, background: T.surface2, borderRadius: 6, border: `1px solid ${T.border}` }}>
              <div style={{ fontSize: 11, color: T.accent2, fontWeight: 700, fontFamily: "monospace", marginBottom: 6, letterSpacing: 1 }}>SIGNAL INFO</div>
              <div style={{ fontSize: 11, color: T.text, fontFamily: "monospace", lineHeight: 1.8 }}>
                <div><span style={{ color: T.textDim }}>Signals:</span> {info.signals.join(", ")}</div>
                <div><span style={{ color: T.textDim }}>Impedance:</span> {info.impedance}</div>
                <div><span style={{ color: T.textDim }}>Max run:</span> {Object.entries(info.maxRun).map(([k, v]) => `${k}: ${v}`).join(" | ")}</div>
                {info.notes && <div style={{ marginTop: 4, fontSize: 10, color: T.textDim }}>{info.notes}</div>}
              </div>
            </div>
          );
        })()}

        {/* Cross-link to builds */}
        {onNavigateToBuild && BUILDS.some(b => b.from === selected || b.to === selected) && (
          <button
            onClick={() => onNavigateToBuild(selected)}
            style={{ ...styles.backBtn, color: T.accent2, marginTop: 12 }}
          >
            See builds with {conn.short} &rarr;
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <p style={{ color: T.textDim, fontSize: 13, margin: "0 0 12px" }}>Tap a connector to see its pinout diagram.</p>
      <ConnectorPicker connKeys={connKeys} onSelect={setSelected} />
    </div>
  );
}
