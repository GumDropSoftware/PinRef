import { T } from "@/lib/theme";
import PinCircle from "./PinCircle";

export default function PowerCONConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 160, label, viewLabel }) {
  const sideText = viewLabel;
  // 3 pins in triangle — Line and Neutral up top, Ground at bottom
  const positions = side === "solder"
    ? [{ x: 65, y: 35 }, { x: 35, y: 35 }, { x: 50, y: 68 }]
    : [{ x: 35, y: 35 }, { x: 65, y: 35 }, { x: 50, y: 68 }];

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={size} height={size} viewBox="0 0 100 100">
        {/* Outer shell */}
        <circle cx={50} cy={50} r={conn.radius} fill={T.surface2} stroke={T.border} strokeWidth={2} />
        {/* Latch notch */}
        <rect x={44} y={50 - conn.radius - 1} width={12} height={6} rx={2} fill={T.bg} stroke={T.border} strokeWidth={1} />
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
              fontSize={9}
            />
          );
        })}
        {sideText && <text x={50} y={96} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">{sideText}</text>}
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
