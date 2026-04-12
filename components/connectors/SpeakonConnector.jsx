import { T } from "@/lib/theme";
import PinCircle from "./PinCircle";

export default function SpeakonConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 160, label, viewLabel }) {
  const sideText = viewLabel || (side === "solder" ? "SOLDER SIDE" : "FACE VIEW");
  // Speakon has 4 pins in a square pattern with a latch notch
  const positions = side === "solder"
    ? [{ x: 70, y: 30 }, { x: 30, y: 30 }, { x: 30, y: 70 }, { x: 70, y: 70 }]
    : [{ x: 30, y: 30 }, { x: 70, y: 30 }, { x: 70, y: 70 }, { x: 30, y: 70 }];

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={size} height={size} viewBox="0 0 100 100">
        {/* Outer shell — rounded square like real Speakon */}
        <rect x={8} y={8} width={84} height={84} rx={18} fill={T.surface2} stroke={T.border} strokeWidth={2} />
        {/* Latch notch at top */}
        <rect x={40} y={6} width={20} height={8} rx={3} fill={T.bg} stroke={T.border} strokeWidth={1} />
        {/* Divider cross */}
        <line x1={50} y1={18} x2={50} y2={82} stroke={T.border} strokeWidth={0.8} opacity={0.4} />
        <line x1={18} y1={50} x2={82} y2={50} stroke={T.border} strokeWidth={0.8} opacity={0.4} />
        {/* Channel labels */}
        <text x={30} y={52} textAnchor="middle" fill={T.textDim} fontSize={6} fontFamily="monospace" opacity={0.5}>Ch1</text>
        <text x={70} y={52} textAnchor="middle" fill={T.textDim} fontSize={6} fontFamily="monospace" opacity={0.5}>Ch2</text>
        {/* Pins */}
        {conn.pins.map((pin, i) => {
          const pos = positions[i];
          const hl = highlightPins.includes(pin.id);
          return (
            <PinCircle
              key={pin.id}
              cx={pos.x} cy={pos.y} r={11}
              pinColor={pinColors[pin.id]}
              highlighted={hl}
              label={pin.label}
              fontSize={8}
            />
          );
        })}
        <text x={50} y={96} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">{sideText}</text>
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
