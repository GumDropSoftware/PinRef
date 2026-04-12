import { T } from "@/lib/theme";

export default function RJ12Connector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 140, label, viewLabel }) {
  const w = 130;
  const h = 70;
  const pinOrder = side === "solder" ? [6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6];
  const sideText = viewLabel || (side === "solder" ? "SOLDER SIDE" : "FACE VIEW (clip down)");

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <rect x={18} y={10} width={94} height={40} rx={4} fill={T.surface2} stroke={T.border} strokeWidth={2} />
        <rect x={42} y={42} width={46} height={7} rx={2} fill={T.surface2} stroke={T.border} strokeWidth={1} />
        {pinOrder.map((pinNum, i) => {
          const x = 30 + i * 14;
          const hl = highlightPins.includes(pinNum);
          return (
            <g key={pinNum}>
              <rect x={x - 4} y={14} width={8} height={24} rx={1} fill={hl ? (pinColors[pinNum] || T.pinActive) : T.pinBg} stroke={hl ? (pinColors[pinNum] || T.accent) : T.border} strokeWidth={hl ? 2 : 0.5} />
              <text x={x} y={46} textAnchor="middle" fill={T.text} fontSize={7} fontFamily="monospace">{pinNum}</text>
            </g>
          );
        })}
        <text x={65} y={64} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">{sideText}</text>
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
