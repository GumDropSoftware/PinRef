import { T } from "@/lib/theme";

export default function CoaxConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 150, label, viewLabel }) {
  const isTriax = conn.pins.length === 3;
  const sideText = viewLabel || "CROSS-SECTION";

  // Get the actual pin color (may be string or object)
  const getPinColor = (pinId) => {
    const pc = pinColors[pinId];
    if (!pc) return null;
    return typeof pc === "string" ? pc : pc.color || null;
  };

  // Outer shell pin (shield/ground)
  const outerPinId = isTriax ? 3 : 2;
  const outerHl = highlightPins.includes(outerPinId);
  const outerColor = getPinColor(outerPinId);
  // Center pin
  const centerHl = highlightPins.includes(1);
  const centerColor = getPinColor(1);

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={size} height={size + 16} viewBox="0 0 100 116">
        {/* Outer shell / shield */}
        <circle cx={50} cy={50} r={40}
          fill={T.surface2}
          stroke={outerHl ? (outerColor || T.accent) : T.border}
          strokeWidth={outerHl ? 2.5 : 1.5}
        />
        {/* Outer label */}
        <text x={50} y={8} textAnchor="middle" fill={T.textDim} fontSize={6} fontFamily="monospace">
          {conn.pins[isTriax ? 2 : 1]?.label || "S"} — {isTriax ? "Outer Shield" : "Shell / Ground"}
        </text>

        {/* Inner shield (triax only) */}
        {isTriax && (
          <>
            <circle cx={50} cy={50} r={28}
              fill={T.pinBg}
              stroke={highlightPins.includes(2) ? (getPinColor(2) || T.accent) : T.border}
              strokeWidth={highlightPins.includes(2) ? 2 : 1.5}
            />
            <text x={50} y={26} textAnchor="middle" fill={T.textDim} fontSize={5.5} fontFamily="monospace">
              {conn.pins[1]?.label || "I"} — Inner
            </text>
          </>
        )}

        {/* Dielectric / insulator */}
        <circle cx={50} cy={50} r={isTriax ? 16 : 20} fill={T.bg} stroke={T.border} strokeWidth={1} />

        {/* Center conductor */}
        <circle cx={50} cy={50} r={7}
          fill={centerHl ? (centerColor || T.pinActive) : T.pinBg}
          stroke={centerHl ? (centerColor || T.accent) : T.border}
          strokeWidth={centerHl ? 2 : 1}
        />
        <text x={50} y={52.5} textAnchor="middle" fill="#fff" fontSize={7} fontFamily="monospace" fontWeight="bold">
          {conn.pins[0]?.label || "C"}
        </text>

        {/* View label */}
        <text x={50} y={105} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">
          {sideText}
        </text>
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
