import { T } from "@/lib/theme";

export default function TSConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 160, label, viewLabel }) {
  const w = 160;
  const h = 70;
  const sideText = viewLabel || (side === "solder" ? "SOLDER SIDE" : "SIDE VIEW");

  const getColor = (pinId) => {
    const pc = pinColors[pinId];
    if (!pc) return T.pinActive;
    return typeof pc === "string" ? pc : pc.color || T.pinActive;
  };

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={w} height={h} viewBox="0 0 160 70">
        {/* Sleeve */}
        <rect x={10} y={22} width={90} height={26} rx={4}
          fill={highlightPins.includes(2) ? getColor(2) : T.pinBg}
          stroke={highlightPins.includes(2) ? getColor(2) : T.border}
          strokeWidth={highlightPins.includes(2) ? 2 : 1} />
        <text x={55} y={37} textAnchor="middle" fill="#fff" fontSize={8} fontFamily="monospace">SLEEVE (S)</text>
        {/* Tip */}
        <path d="M 100 28 L 145 35 L 100 42 Z"
          fill={highlightPins.includes(1) ? getColor(1) : T.pinBg}
          stroke={highlightPins.includes(1) ? getColor(1) : T.border}
          strokeWidth={highlightPins.includes(1) ? 2 : 1} />
        <text x={118} y={37} textAnchor="middle" fill="#fff" fontSize={8} fontFamily="monospace">T</text>
        {/* Divider */}
        <line x1={99} y1={22} x2={99} y2={48} stroke={T.bg} strokeWidth={2} />
        <text x={80} y={62} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">{sideText}</text>
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
