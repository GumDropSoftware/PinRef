import { T } from "@/lib/theme";
import PinCircle from "./PinCircle";

export function mirrorX(positions) {
  return positions.map((p) => ({ x: 100 - p.x, y: p.y }));
}

export default function CircularConnector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 160, label, viewLabel, shellHighlighted = false, shellColor = null }) {
  const isSolder = side === "solder";
  const positions = isSolder ? mirrorX(conn.facePositions) : conn.facePositions;
  const pinSize = conn.pins.length > 8 ? 7 : conn.pins.length > 4 ? 9 : 11;
  const sideText = viewLabel;
  // The notch rect at the top doubles as the shell/tab indicator when conn.shell
  // is defined. When a build routes a wire to "shell", parent passes shellHighlighted
  // and CircularConnector recolors the notch to match the wire color, just like a pin.
  const hasShell = !!conn.shell;
  const shellFill = shellHighlighted
    ? (typeof shellColor === "object" && shellColor ? shellColor.color : shellColor) || T.pinActive
    : T.bg;
  const shellStroke = shellHighlighted ? (shellFill === T.bg ? T.pinActive : shellFill) : T.border;
  const shellTextColor = shellHighlighted ? "#fff" : T.textDim;

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx={50} cy={50} r={conn.radius} fill={T.surface2} stroke={T.border} strokeWidth={2} />
        <rect
          x={44} y={50 - conn.radius - 1} width={12} height={6} rx={2}
          fill={shellFill} stroke={shellStroke} strokeWidth={shellHighlighted ? 1.5 : 1}
        />
        {hasShell && shellHighlighted && (
          <text
            x={50} y={50 - conn.radius + 3}
            textAnchor="middle" dominantBaseline="central"
            fill={shellTextColor} fontSize={5} fontFamily="monospace" fontWeight="bold"
          >
            {conn.shell.label || "T"}
          </text>
        )}
        {conn.pins.map((pin, i) => {
          const pos = positions[i];
          const hl = highlightPins.includes(pin.id);
          return (
            <PinCircle
              key={pin.id}
              cx={pos.x} cy={pos.y} r={pinSize}
              pinColor={pinColors[pin.id]}
              highlighted={hl}
              label={pin.label}
              fontSize={conn.pins.length > 8 ? 7 : 9}
            />
          );
        })}
        {sideText && (
          <text x={50} y={96} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">
            {sideText}
          </text>
        )}
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
