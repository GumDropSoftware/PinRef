import { T } from "@/lib/theme";

export default function MiniTRSConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 140, label, viewLabel }) {
  const w = 140;
  const h = 60;
  const sideText = viewLabel || (side === "solder" ? "SOLDER SIDE" : "SIDE VIEW");

  const getColor = (pinId) => {
    const pc = pinColors[pinId];
    if (!pc) return T.pinActive;
    return typeof pc === "string" ? pc : pc.color || T.pinActive;
  };

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={w} height={h} viewBox="0 0 140 60">
        {/* Sleeve */}
        <rect x={8} y={18} width={65} height={22} rx={3}
          fill={highlightPins.includes(3) ? getColor(3) : T.pinBg}
          stroke={highlightPins.includes(3) ? getColor(3) : T.border}
          strokeWidth={highlightPins.includes(3) ? 2 : 1} />
        <text x={40} y={31} textAnchor="middle" fill="#fff" fontSize={7} fontFamily="monospace">SLEEVE</text>
        {/* Ring */}
        <rect x={73} y={21} width={22} height={16} rx={2}
          fill={highlightPins.includes(2) ? getColor(2) : T.pinBg}
          stroke={highlightPins.includes(2) ? getColor(2) : T.border}
          strokeWidth={highlightPins.includes(2) ? 2 : 1} />
        <text x={84} y={31} textAnchor="middle" fill="#fff" fontSize={7} fontFamily="monospace">R</text>
        {/* Tip */}
        <path d="M 95 23 L 125 29 L 95 35 Z"
          fill={highlightPins.includes(1) ? getColor(1) : T.pinBg}
          stroke={highlightPins.includes(1) ? getColor(1) : T.border}
          strokeWidth={highlightPins.includes(1) ? 2 : 1} />
        <text x={105} y={31} textAnchor="middle" fill="#fff" fontSize={7} fontFamily="monospace">T</text>
        {/* Dividers */}
        <line x1={72} y1={18} x2={72} y2={40} stroke={T.bg} strokeWidth={2} />
        <line x1={94} y1={20} x2={94} y2={38} stroke={T.bg} strokeWidth={2} />
        {/* Size label */}
        <text x={8} y={50} fill={T.textDim} fontSize={6} fontFamily="monospace">3.5mm</text>
        <text x={70} y={53} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">{sideText}</text>
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
