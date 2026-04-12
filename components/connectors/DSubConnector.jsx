import { T } from "@/lib/theme";
import PinCircle from "./PinCircle";

export default function DSubConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 200, label, viewLabel }) {
  const isSolder = side === "solder";
  const sideText = viewLabel || (isSolder ? "SOLDER SIDE" : "FACE VIEW");
  const topRow = conn.topRow;
  const botRow = conn.botRow;
  const isDB25 = conn.pins.length === 25;
  const w = isDB25 ? 220 : 160;
  const pinSpacing = isDB25 ? 14 : 16;
  const startXTop = (w - (topRow.length - 1) * pinSpacing) / 2;
  const startXBot = (w - (botRow.length - 1) * pinSpacing) / 2;

  const getPositions = () => {
    const pts = {};
    topRow.forEach((p, i) => { pts[p] = { x: startXTop + i * pinSpacing, y: 35 }; });
    botRow.forEach((p, i) => { pts[p] = { x: startXBot + i * pinSpacing, y: 55 }; });
    if (isSolder) {
      Object.keys(pts).forEach((k) => { pts[k] = { x: w - pts[k].x, y: pts[k].y }; });
    }
    return pts;
  };

  const pts = getPositions();
  const svgH = 80;

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={Math.min(w, size)} height={svgH} viewBox={`0 0 ${w} ${svgH}`}>
        <rect x={10} y={18} width={w - 20} height={48} rx={8} fill={T.surface2} stroke={T.border} strokeWidth={2} />
        <path d={`M ${20} 20 L ${w - 20} 20 L ${w - 14} 64 L 14 64 Z`} fill="none" stroke={T.border} strokeWidth={1} opacity={0.3} />
        {conn.pins.map((pin) => {
          const pos = pts[pin.id];
          if (!pos) return null;
          const hl = highlightPins.includes(pin.id);
          return (
            <PinCircle
              key={pin.id}
              cx={pos.x} cy={pos.y} r={isDB25 ? 5 : 6}
              pinColor={pinColors[pin.id]}
              highlighted={hl}
              label={pin.label}
              fontSize={isDB25 ? 6 : 7}
            />
          );
        })}
        <text x={w / 2} y={76} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">
          {sideText}
        </text>
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
