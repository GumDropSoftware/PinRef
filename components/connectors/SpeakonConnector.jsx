import { T } from "@/lib/theme";
import PinCircle from "./PinCircle";

export default function SpeakonConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 160, label, viewLabel }) {
  const sideText = viewLabel;
  // Speakon NL4: pins in a diamond around the central keyway per Neutrik.
  // 1+ top, 1− left, 2+ bottom, 2− right. Solder side mirrors horizontally.
  const positions = side === "solder"
    ? [{ x: 50, y: 28 }, { x: 72, y: 50 }, { x: 50, y: 72 }, { x: 28, y: 50 }]
    : [{ x: 50, y: 28 }, { x: 28, y: 50 }, { x: 50, y: 72 }, { x: 72, y: 50 }];

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={size} height={size} viewBox="0 0 100 100">
        {/* Outer shell — rounded square like real Speakon */}
        <rect x={8} y={8} width={84} height={84} rx={18} fill={T.surface2} stroke={T.border} strokeWidth={2} />
        {/* Latch notch at top */}
        <rect x={40} y={6} width={20} height={8} rx={3} fill={T.bg} stroke={T.border} strokeWidth={1} />
        {/* Center post / keyway */}
        <circle cx={50} cy={50} r={5} fill={T.bg} stroke={T.border} strokeWidth={0.8} opacity={0.6} />
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
        {sideText && <text x={50} y={96} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">{sideText}</text>}
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
