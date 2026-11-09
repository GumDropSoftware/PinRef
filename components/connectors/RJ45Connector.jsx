import { T } from "@/lib/theme";

export default function RJ45Connector({ conn, side = "face", highlightPins = [], pinColors = {}, size = 160, label, viewLabel }) {
  const w = 200;
  const h = 90;
  const colors = conn.colors;
  const stripes = conn.stripes;
  const stripeColors = conn.stripeColors;
  // Pin 1 is on the LEFT both ways with the clip down: looking into a jack, and looking at the
  // back of a plug where the wires go in (Wikipedia, Modular connector). Never mirror it.
  const pinOrder = [1, 2, 3, 4, 5, 6, 7, 8];
  const sideText = viewLabel || (side === "solder" ? "WIRE-ENTRY SIDE (clip down)" : "JACK FACE (clip down)");
  const pinW = 12;
  const pinH = 32;
  const pinGap = 17;
  const startX = (w - (7 * pinGap)) / 2;

  return (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{label}</div>}
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <rect x={14} y={8} width={w - 28} height={58} rx={5} fill={T.surface2} stroke={T.border} strokeWidth={2} />
        <rect x={w / 2 - 28} y={58} width={56} height={9} rx={2} fill={T.surface2} stroke={T.border} strokeWidth={1} />
        {pinOrder.map((pinNum, i) => {
          const origIdx = pinNum - 1;
          const cx = startX + i * pinGap;
          const hl = highlightPins.includes(pinNum);
          const bg = colors[origIdx];
          const hasStripe = stripes[origIdx];
          const sc = stripeColors[origIdx];
          return (
            <g key={pinNum}>
              {/* Outer highlight box — sits behind the pin, no white touching the color */}
              {hl && (
                <rect x={cx - pinW / 2 - 3} y={10} width={pinW + 6} height={pinH + 6} rx={3}
                  fill="none" stroke="#fff" strokeWidth={1.5}
                />
              )}
              {/* Wire color rect — always shows real T568B color, no white border */}
              <rect x={cx - pinW / 2} y={13} width={pinW} height={pinH} rx={1.5}
                fill={bg}
                stroke={T.border}
                strokeWidth={0.5}
              />
              {/* Stripe — only on white-base striped pairs (pins 1,3,5,7) */}
              {hasStripe && (
                <line x1={cx} y1={15} x2={cx} y2={43} stroke={sc} strokeWidth={3.5} />
              )}
              <text x={cx} y={56} textAnchor="middle" fill={hl ? "#fff" : T.text} fontSize={8} fontFamily="monospace" fontWeight={hl ? "bold" : "normal"}>{pinNum}</text>
            </g>
          );
        })}
        <text x={w / 2} y={80} textAnchor="middle" fill={T.textDim} fontSize={7} fontFamily="monospace">
          {sideText}
        </text>
      </svg>
      <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{conn.name}</div>
    </div>
  );
}
