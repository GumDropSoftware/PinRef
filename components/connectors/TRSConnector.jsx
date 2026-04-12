import { T } from "@/lib/theme";

export default function TRSConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 160, label, viewLabel }) {
  const w = 160;
  const h = 70;
  const sideText = viewLabel || (side === "solder" ? "SOLDER SIDE" : "SIDE VIEW");
  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={w} height={h} viewBox="0 0 160 70">
        <rect x={10} y={22} width={80} height={26} rx={4} fill={highlightPins.includes(3) ? (pinColors[3] || T.pinActive) : T.pinBg} stroke={highlightPins.includes(3) ? (pinColors[3] || T.accent) : T.border} strokeWidth={highlightPins.includes(3) ? 2 : 1} />
        <text x={50} y={37} textAnchor="middle" fill="#fff" fontSize={8} fontFamily="monospace">SLEEVE (S)</text>
        <rect x={90} y={25} width={25} height={20} rx={3} fill={highlightPins.includes(2) ? (pinColors[2] || T.pinActive) : T.pinBg} stroke={highlightPins.includes(2) ? (pinColors[2] || T.accent) : T.border} strokeWidth={highlightPins.includes(2) ? 2 : 1} />
        <text x={102} y={37} textAnchor="middle" fill="#fff" fontSize={8} fontFamily="monospace">R</text>
        <path d="M 115 28 L 145 35 L 115 42 Z" fill={highlightPins.includes(1) ? (pinColors[1] || T.pinActive) : T.pinBg} stroke={highlightPins.includes(1) ? (pinColors[1] || T.accent) : T.border} strokeWidth={highlightPins.includes(1) ? 2 : 1} />
        <text x={126} y={37} textAnchor="middle" fill="#fff" fontSize={8} fontFamily="monospace">T</text>
        <line x1={89} y1={22} x2={89} y2={48} stroke={T.bg} strokeWidth={2} />
        <line x1={114} y1={25} x2={114} y2={45} stroke={T.bg} strokeWidth={2} />
        <text x={80} y={62} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">
          {sideText}
        </text>
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
