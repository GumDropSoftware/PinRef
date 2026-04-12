import React from "react";
import { T } from "@/lib/theme";

export default function DT12Connector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 200, label, viewLabel }) {
  const channels = [];
  for (let ch = 1; ch <= 12; ch++) {
    const hi = conn.pins.find(p => p.ch === ch && p.role === "+");
    const lo = conn.pins.find(p => p.ch === ch && p.role === "\u2212");
    const gnd = conn.pins.find(p => p.ch === ch && p.role === "G");
    channels.push({ ch, hi, lo, gnd });
  }

  const hlSet = new Set(highlightPins);

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <div style={{ fontSize: 12, color: T.text, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{conn.name}</div>

      {/* Link to reference diagram */}
      <a
        href="https://www.clarkwire.com/dt12-audio-multipin-pinout"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block", margin: "8px auto", padding: "6px 12px", background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 6, fontSize: 11, color: T.accent, fontFamily: "monospace", textDecoration: "none" }}
      >
        View connector face diagram &rarr;
      </a>

      {/* Channel-to-pin grid */}
      <div style={{ marginTop: 8, textAlign: "left" }}>
        <div style={{ display: "grid", gridTemplateColumns: "28px 1fr 1fr 1fr", gap: 0, fontSize: 11, fontFamily: "monospace" }}>
          <div style={{ color: T.textDim, padding: "4px 4px", fontWeight: 700, borderBottom: `2px solid ${T.border}` }}>Ch</div>
          <div style={{ color: "#ef4444", padding: "4px 4px", fontWeight: 700, textAlign: "center", borderBottom: `2px solid ${T.border}` }}>Hi(+)</div>
          <div style={{ color: "#888", padding: "4px 4px", fontWeight: 700, textAlign: "center", borderBottom: `2px solid ${T.border}` }}>Lo({"\u2212"})</div>
          <div style={{ color: "#22c55e", padding: "4px 4px", fontWeight: 700, textAlign: "center", borderBottom: `2px solid ${T.border}` }}>Gnd</div>
          {channels.map(({ ch, hi, lo, gnd }) => {
            const rowActive = hlSet.has(hi?.id) || hlSet.has(lo?.id) || hlSet.has(gnd?.id);
            const rowBg = rowActive ? T.pinActive + "22" : "transparent";
            const hlColor = (pinId) => {
              const pc = pinColors[pinId];
              if (!pc) return T.pinActive;
              return typeof pc === "string" ? pc : pc.lineColor || pc.color || T.pinActive;
            };
            return (
              <React.Fragment key={ch}>
                <div style={{ color: rowActive ? T.accent : T.text, padding: "3px 4px", fontWeight: 700, borderTop: `1px solid ${T.border}`, background: rowBg }}>{ch}</div>
                <div style={{ padding: "3px 4px", textAlign: "center", borderTop: `1px solid ${T.border}`, background: hlSet.has(hi?.id) ? hlColor(hi?.id) : rowBg, color: hlSet.has(hi?.id) ? "#fff" : T.text, borderRadius: hlSet.has(hi?.id) ? 3 : 0, fontWeight: hlSet.has(hi?.id) ? 700 : 400 }}>
                  {hi?.id}
                </div>
                <div style={{ padding: "3px 4px", textAlign: "center", borderTop: `1px solid ${T.border}`, background: hlSet.has(lo?.id) ? hlColor(lo?.id) : rowBg, color: hlSet.has(lo?.id) ? "#fff" : T.text, borderRadius: hlSet.has(lo?.id) ? 3 : 0, fontWeight: hlSet.has(lo?.id) ? 700 : 400 }}>
                  {lo?.id}
                </div>
                <div style={{ padding: "3px 4px", textAlign: "center", borderTop: `1px solid ${T.border}`, background: hlSet.has(gnd?.id) ? hlColor(gnd?.id) : rowBg, color: hlSet.has(gnd?.id) ? "#fff" : T.text, borderRadius: hlSet.has(gnd?.id) ? 3 : 0, fontWeight: hlSet.has(gnd?.id) ? 700 : 400 }}>
                  {gnd?.id}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div style={{ fontSize: 9, color: T.textDim, marginTop: 4 }}>Pin 22 = spare (unused)</div>
      </div>
    </div>
  );
}
