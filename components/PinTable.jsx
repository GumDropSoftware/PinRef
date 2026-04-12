import { T, CABLE_WIRE_COLORS } from "@/lib/theme";

function PinSwatch({ wireColor, size = 14 }) {
  if (!wireColor) return null;
  const isDark = wireColor.color === "#333" || wireColor.color === "#964B00";
  const isWhite = wireColor.color === "#fff" || wireColor.color === "#e5e7eb" || wireColor.color === "#bbb" || wireColor.color === "#ccc";
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
      <circle cx={7} cy={7} r={6} fill={isWhite ? "#fff" : wireColor.color} stroke={isWhite ? "#666" : isDark ? "#888" : wireColor.color} strokeWidth={isWhite ? 1.5 : 0.5} />
      {wireColor.hasStripe && wireColor.stripe && (
        <line x1={3} y1={11} x2={11} y2={3} stroke={wireColor.stripe} strokeWidth={3} />
      )}
    </svg>
  );
}

export default function PinTable({ conn, connKey }) {
  const wireColors = connKey ? CABLE_WIRE_COLORS[connKey] : null;

  return (
    <div style={{ marginTop: 12 }}>
      {conn.pins.map((pin) => {
        const wc = wireColors?.[pin.id];
        return (
          <div key={pin.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderBottom: `1px solid ${T.border}`, fontSize: 13 }}>
            <span style={{ fontFamily: "monospace", color: wc ? (wc.lineColor || T.accent) : T.accent, fontWeight: 700, minWidth: 28 }}>{pin.label}</span>
            {wc && <PinSwatch wireColor={wc} />}
            {wc && <span style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace", minWidth: 40 }}>{wc.name}</span>}
            <span style={{ color: T.text }}>{pin.name}</span>
          </div>
        );
      })}
    </div>
  );
}
