import { T } from "@/lib/theme";

// Renders a single pin circle in an SVG connector diagram.
// pinColor can be:
//   - a string (solid color)
//   - an object { color, stripe } for striped wire colors (e.g. white/orange)
//   - undefined/null (use defaults)
export default function PinCircle({ cx, cy, r, pinColor, highlighted, label, fontSize = 9 }) {
  const isObj = pinColor && typeof pinColor === "object";
  const baseColor = isObj ? pinColor.color : pinColor;
  const stripeColor = isObj ? pinColor.stripe : null;
  const isWhitish = baseColor === "#fff" || baseColor === "#e5e7eb" || baseColor === "#bbb" || baseColor === "#ccc";
  const isDark = baseColor === "#333" || baseColor === "#222";
  // White wires render as pure white with a visible border
  const fill = highlighted ? (isWhitish ? "#fff" : (baseColor || T.pinActive)) : T.pinBg;
  const stroke = highlighted ? (isWhitish ? "#666" : isDark ? "#999" : (baseColor || T.pinActive)) : T.border;
  const textColor = highlighted
    ? (isWhitish && !stripeColor ? "#333" : isDark ? "#ccc" : "#fff")
    : T.text;
  const clipId = `clip-${cx}-${cy}-${r}`;

  return (
    <g>
      {/* Clip path to constrain stripe inside the circle */}
      {highlighted && stripeColor && (
        <defs>
          <clipPath id={clipId}>
            <circle cx={cx} cy={cy} r={r} />
          </clipPath>
        </defs>
      )}
      {/* Base circle */}
      <circle
        cx={cx} cy={cy} r={r}
        fill={fill}
        stroke={stroke}
        strokeWidth={highlighted ? 2.5 : 1}
      />
      {/* Diagonal stripe band (clipped to circle) */}
      {highlighted && stripeColor && (
        <rect
          x={cx - r * 0.35}
          y={cy - r * 1.2}
          width={r * 0.7}
          height={r * 2.4}
          fill={stripeColor}
          clipPath={`url(#${clipId})`}
          transform={`rotate(45 ${cx} ${cy})`}
        />
      )}
      {/* Pin label */}
      <text
        x={cx} y={cy + 1}
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize={fontSize}
        fontFamily="monospace"
        fontWeight={highlighted ? "bold" : "normal"}
        style={{ textShadow: highlighted && stripeColor ? "0 0 3px rgba(0,0,0,0.8)" : "none" }}
      >
        {label}
      </text>
    </g>
  );
}
