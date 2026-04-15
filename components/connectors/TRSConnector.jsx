import { T } from "@/lib/theme";

export default function TRSConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 160, label, viewLabel }) {
  const w = 160;
  const h = 70;
  const sideText = viewLabel;

  // Extract a usable CSS color from a pinColors entry (may be a string or {color,stripe}).
  const getColor = (pinId) => {
    const pc = pinColors[pinId];
    if (!pc) return T.pinActive;
    return typeof pc === "string" ? pc : pc.color || T.pinActive;
  };

  // Returns [fill, stroke, strokeWidth] for a given pin rect/path.
  const shapeStyle = (pinId) => {
    if (!highlightPins.includes(pinId)) return [T.pinBg, T.border, 1];
    const c = getColor(pinId);
    return [c, c, 2];
  };

  const [sFill, sStroke, sSW] = shapeStyle(3); // Sleeve
  const [rFill, rStroke, rSW] = shapeStyle(2); // Ring
  const [tFill, tStroke, tSW] = shapeStyle(1); // Tip

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={w} height={h} viewBox="0 0 160 70">
        <rect x={10} y={22} width={80} height={26} rx={4} fill={sFill} stroke={sStroke} strokeWidth={sSW} />
        <text x={50} y={37} textAnchor="middle" fill="#fff" fontSize={8} fontFamily="monospace">SLEEVE (S)</text>
        <rect x={90} y={25} width={25} height={20} rx={3} fill={rFill} stroke={rStroke} strokeWidth={rSW} />
        <text x={102} y={37} textAnchor="middle" fill="#fff" fontSize={8} fontFamily="monospace">R</text>
        <path d="M 115 28 L 145 35 L 115 42 Z" fill={tFill} stroke={tStroke} strokeWidth={tSW} />
        <text x={126} y={37} textAnchor="middle" fill="#fff" fontSize={8} fontFamily="monospace">T</text>
        <line x1={89} y1={22} x2={89} y2={48} stroke={T.bg} strokeWidth={2} />
        <line x1={114} y1={25} x2={114} y2={45} stroke={T.bg} strokeWidth={2} />
        {sideText && (
          <text x={80} y={62} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">
            {sideText}
          </text>
        )}
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
