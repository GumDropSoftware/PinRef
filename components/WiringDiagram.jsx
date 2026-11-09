"use client";

import { useState, useMemo } from "react";
import { CONNECTORS } from "@/data";
import { T, STATUS_META, CH_COLORS, SHELL_WIRE_COLORS, RJ45_WIRE_COLORS, CABLE_WIRE_COLORS, styles } from "@/lib/theme";
import { SIGNAL_INFO } from "@/data/signal-info";
import ConnectorDiagram from "./connectors/ConnectorDiagram";
import SourcesList from "./SourcesList";

// Determine which connector is the "cable" — the one whose wire colors drive the diagram.
// XLR → RJ45 = Cat5 cable with XLR ends, so RJ45 pin colors drive everything.
// DE-9 → RJ45 saved builds = Cable Wholesale shell, shell colors drive.
// XLR → XLR = mic cable, no standard wire colors → fall back to arbitrary.
function getCableConnector(build) {
  // If one side is RJ45, the cable is Cat5 — RJ45 pin colors drive
  if (build.to === "rj45") return "to";
  if (build.from === "rj45") return "from";
  // If one side is RJ12, that side's colors drive
  if (build.to === "rj12") return "to";
  if (build.from === "rj12") return "from";
  // Saved DE-9 builds with shell wire colors
  if (build.tag === "shell") {
    if (build.to === "de9") return "to";
    if (build.from === "de9") return "from";
  }
  return null; // no standard cable colors, use arbitrary
}

// Resolve a visible line color — white and black wires need adjusted colors for dark backgrounds
function visibleLineColor(hexColor) {
  if (hexColor === "#e5e7eb" || hexColor === "#fff") return "#bbb";
  if (hexColor === "#333") return "#777";
  return hexColor;
}

// Get wire color info for a pin on a connector
function getPhysicalWireColor(connKey, pinId, build) {
  if (connKey === "rj45") return RJ45_WIRE_COLORS[pinId] || null;
  if (connKey === "rj12" && SHELL_WIRE_COLORS.rj12[pinId]) {
    const sw = SHELL_WIRE_COLORS.rj12[pinId];
    return { color: sw.color, name: sw.name, hasStripe: false, lineColor: visibleLineColor(sw.color) };
  }
  // Saved DE-9 builds use Cable Wholesale grey shell colors
  if (connKey === "de9" && build?.tag === "shell" && SHELL_WIRE_COLORS.de9_grey[pinId]) {
    const sw = SHELL_WIRE_COLORS.de9_grey[pinId];
    return { color: sw.color, name: sw.name, hasStripe: false, lineColor: visibleLineColor(sw.color) };
  }
  // Standard cable wire colors for all other connectors
  const cableColors = CABLE_WIRE_COLORS[connKey];
  if (cableColors && cableColors[pinId]) {
    const cc = cableColors[pinId];
    return { color: cc.color, name: cc.name, hasStripe: false, lineColor: cc.lineColor };
  }
  return null;
}

// For a wiring entry, resolve the wire color from the cable side.
// Returns { wireInfo, lineColor } — wireInfo is the full color object, lineColor is for lines/highlights.
// cableSide can be explicitly passed to override the auto-detect (e.g. when user sorts by a specific end).
function resolveWireColor(w, build, fallbackColor, cableSide) {
  if (cableSide === undefined) cableSide = getCableConnector(build);
  // Prioritized cable side (RJ45/RJ12/shell adapter drives when present)
  if (cableSide === "to") {
    const wc = getPhysicalWireColor(build.to, w.toPin, build);
    if (wc) return { wireInfo: wc, lineColor: wc.lineColor };
  } else if (cableSide === "from") {
    const wc = getPhysicalWireColor(build.from, w.fromPin, build);
    if (wc) return { wireInfo: wc, lineColor: wc.lineColor };
  }
  // No prioritized side — try "to" then "from" for standard cable colors
  const toWc = getPhysicalWireColor(build.to, w.toPin, build);
  if (toWc) return { wireInfo: toWc, lineColor: toWc.lineColor };
  const fromWc = getPhysicalWireColor(build.from, w.fromPin, build);
  if (fromWc) return { wireInfo: fromWc, lineColor: fromWc.lineColor };
  return { wireInfo: null, lineColor: fallbackColor };
}

// Extract just the signal/purpose from a wiring description.
// "DE-9 pin 1 → RJ45 pin 1 (Wht/Org) — DATA +" → "DATA +"
// "Ground to Ground" → "Ground"
// "Hot (+) (pin 2) to Tip" → "Hot (+)"
function extractSignal(desc) {
  if (!desc) return null;
  // If it has " — " (em dash separator), take everything after it
  const emParts = desc.split(" \u2014 ");
  if (emParts.length > 1) return emParts[emParts.length - 1].trim();
  // If it has " — " with regular dash
  const dashParts = desc.split(" — ");
  if (dashParts.length > 1) return dashParts[dashParts.length - 1].trim();
  // "X to X" pattern — take the first part before " to "
  const toParts = desc.split(" to ");
  if (toParts.length === 2) {
    // Clean up: strip "(pin N)" and connector prefixes
    let sig = toParts[0].replace(/\(pin \d+\)/g, "").replace(/^(Ground|Hot|Cold|Signal|Tip|Ring|Sleeve|Pin \d+|Center|Shell|Inner|Outer)\b/i, "$1").trim();
    return sig;
  }
  // "Pin N to Pin N" — not useful
  if (/^Pin \d+ to Pin \d+$/.test(desc)) return null;
  return null;
}

// Render a wire color swatch — small circle with optional stripe
function WireSwatch({ wireColor, size = 14 }) {
  if (!wireColor) return null;
  const isDark = wireColor.color === "#333" || wireColor.color === "#964B00";
  const isWhite = wireColor.color === "#fff" || wireColor.color === "#e5e7eb";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
      <svg width={size} height={size} viewBox="0 0 14 14">
        <circle cx={7} cy={7} r={6} fill={wireColor.color} stroke={isWhite ? "#666" : isDark ? "#888" : wireColor.color} strokeWidth={isWhite ? 1 : 0.5} />
        {wireColor.hasStripe && wireColor.stripe && (
          <line x1={3} y1={11} x2={11} y2={3} stroke={wireColor.stripe} strokeWidth={3} />
        )}
      </svg>
      <span style={{ fontSize: 9, color: T.textDim, fontFamily: "monospace" }}>{wireColor.name}</span>
    </span>
  );
}

export default function WiringDiagram({ build }) {
  const fromConn = CONNECTORS[build.from];
  const toConn = CONNECTORS[build.to];
  const [side, setSide] = useState("solder");
  const [channelCount, setChannelCount] = useState(1);
  const [sortBy, setSortBy] = useState("default");

  const mc = build.multiChannel;
  const maxCh = mc ? mc.max : 1;
  const multiSide = mc?.multiSide || "from"; // which connector multiplies

  const allWiring = useMemo(() => {
    if (!mc || channelCount <= 1) {
      return build.wiring.map(w => ({ ...w, ch: 0 }));
    }
    const wires = [];
    for (let i = 0; i < channelCount; i++) {
      const chWiring = mc.perChannel[i]?.wiring || [];
      chWiring.forEach(w => wires.push({ ...w, ch: i }));
    }
    return wires;
  }, [build, mc, channelCount]);

  const fromHighlight = allWiring.map(w => w.fromPin).filter(p => p !== "shell");
  const toHighlight = allWiring.map(w => w.toPin).filter(p => p !== "shell");
  // Shell-pin highlighting: any wire targeting "shell" lights up the connector's
  // tab/shell graphic. Pick the first such wire's resolved color to drive the visual.
  const fromShellWireIdx = allWiring.findIndex(w => w.fromPin === "shell");
  const toShellWireIdx = allWiring.findIndex(w => w.toPin === "shell");
  const fromShellHighlighted = fromShellWireIdx >= 0;
  const toShellHighlighted = toShellWireIdx >= 0;

  // Resolve wire colors: the "cable side" drives pin colors on BOTH connectors.
  // When the user sorts by a specific connector, that end becomes the color reference.
  const defaultCableSide = getCableConnector(build);
  const effectiveCableSide = sortBy === "from" ? "from"
    : sortBy === "to" ? "to"
    : defaultCableSide;
  const cableSide = effectiveCableSide;
  const fromPinColors = {};
  const toPinColors = {};
  const wireColors = []; // parallel to allWiring — resolved color per wire
  allWiring.forEach((w, i) => {
    const fallback = (mc && channelCount > 1) ? CH_COLORS[w.ch] : CH_COLORS[i % CH_COLORS.length];
    // Table row color is perspective-driven (sortBy determines which end is "active")
    const resolved = resolveWireColor(w, build, fallback, effectiveCableSide);
    wireColors.push(resolved);
    // Each connector diagram always shows its OWN physical wire colors, never the other side's palette
    const fromWire = getPhysicalWireColor(build.from, w.fromPin, build);
    const toWire = getPhysicalWireColor(build.to, w.toPin, build);
    if (w.fromPin !== "shell") {
      fromPinColors[w.fromPin] = fromWire
        ? { color: fromWire.color, stripe: fromWire.stripe || null }
        : (resolved.wireInfo ? { color: resolved.wireInfo.color, stripe: resolved.wireInfo.stripe || null } : resolved.lineColor);
    }
    if (w.toPin !== "shell") {
      toPinColors[w.toPin] = toWire
        ? { color: toWire.color, stripe: toWire.stripe || null }
        : (resolved.wireInfo ? { color: resolved.wireInfo.color, stripe: resolved.wireInfo.stripe || null } : resolved.lineColor);
    }
  });

  // When TO side multiplies (e.g. XLR5 → 2× XLR3), the TO connector diagram is a
  // template — all 3 pins appear identically on every cable. Recolor them neutral so
  // the diagram reads as "use all these pins" rather than showing one channel's color.
  if (multiSide === "to" && mc && channelCount > 1) {
    Object.keys(toPinColors).forEach(pin => {
      toPinColors[pin] = T.accent2;
    });
  }

  const sm = STATUS_META[build.status];

  const fromSide = side;
  const toSide = side;
  const viewLabelFor = () => (side === "solder" ? "SOLDER SIDE" : "FACE VIEW");
  const genderedConns = [fromConn, toConn].filter(c => c?.faceGender);

  const sameType = build.from === build.to;
  const fromLabel = sameType ? "MALE end" : fromConn.short;
  const toLabel = sameType ? "FEMALE end" : toConn.short;

  return (
    <div>
      {/* Status badge with explanation */}
      <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4, flexWrap: "wrap" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 12, background: sm.color + "18", border: `1px solid ${sm.color}40` }}>
          <span style={{ fontSize: 13 }}>{sm.icon}</span>
          <span style={{ fontSize: 11, color: sm.color, fontWeight: 600, fontFamily: "monospace" }}>{sm.label}</span>
        </div>
      </div>
      {sm.desc && <div style={{ fontSize: 11, color: sm.color, marginBottom: 8, fontFamily: "monospace", opacity: 0.8 }}>{sm.desc}</div>}
      {/* Five-angle audit state. A build is "verified" only when documentation, power, circuit,
          field-practice and red-team reviews all agreed and it has an opened primary source.
          Anything else gets the meter warning. */}
      {build.status !== "not_possible" && (build.audit?.verified ? (
        <div style={{ fontSize: 10, color: T.green, marginBottom: 8, fontFamily: "monospace", opacity: 0.85 }}>
          {"\u2713"} Verified {build.audit.date ? `${build.audit.date} ` : ""}{"\u2014"} five independent checks agree{build.audit.note ? `. ${build.audit.note}` : ""}
        </div>
      ) : (
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10, padding: "8px 10px", borderRadius: 8, background: T.yellow + "1a", border: `1px solid ${T.yellow}80` }}>
          <span style={{ fontSize: 16, lineHeight: 1 }}>{"\u26A0"}</span>
          <div style={{ fontSize: 11, color: T.yellow, fontFamily: "monospace", lineHeight: 1.4 }}>
            <strong>UNVERIFIED {"\u2014"} check every pin with a meter before connecting powered gear.</strong>
            {build.audit?.note ? ` ${build.audit.note}` : " This build has not passed all five independent checks (documentation, power, circuit, field practice, red team) against an opened source."}
          </div>
        </div>
      ))}

      <h3 style={{ color: T.text, fontSize: 16, margin: "4px 0 2px", fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.3 }}>{build.title}</h3>
      <p style={{ color: T.textDim, fontSize: 12, margin: "2px 0 4px" }}>{build.use}</p>
      {/* Build direction + print buttons */}
      {build.status !== "not_possible" && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontSize: 10, color: T.accent2, fontFamily: "monospace", opacity: 0.8 }}>
            {defaultCableSide === "to" ? `Cable: ${toConn.name} cable with ${fromConn.short} ends`
              : defaultCableSide === "from" ? `Cable: ${fromConn.name} cable with ${toConn.short} ends`
              : sameType ? `Cable: ${fromConn.name}, straight-through`
              : `Cable: ${fromConn.short} \u2192 ${toConn.short}`}
          </div>
          <div className="no-print" style={{ display: "flex", gap: 4 }}>
            <button onClick={() => { document.body.classList.remove("print-bw"); window.print(); }} style={{ padding: "3px 8px", borderRadius: 4, border: `1px solid ${T.border}`, background: T.surface2, color: T.textDim, fontSize: 10, fontFamily: "monospace", cursor: "pointer" }}>
              Print Color
            </button>
            <button onClick={() => { document.body.classList.add("print-bw"); window.print(); setTimeout(() => document.body.classList.remove("print-bw"), 1000); }} style={{ padding: "3px 8px", borderRadius: 4, border: `1px solid ${T.border}`, background: T.surface2, color: T.textDim, fontSize: 10, fontFamily: "monospace", cursor: "pointer" }}>
              Print B&W
            </button>
          </div>
        </div>
      )}

      {/* Multi-channel selector */}
      {mc && maxCh > 1 && (
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, padding: "8px 12px", background: T.surface2, borderRadius: 8, border: `1px solid ${T.border}` }}>
          <span style={{ fontSize: 12, color: T.textDim, fontFamily: "monospace" }}>Cables:</span>
          <button
            onClick={() => setChannelCount(c => Math.max(1, c - 1))}
            disabled={channelCount <= 1}
            style={{
              width: 32, height: 32, borderRadius: 6, border: `1px solid ${T.border}`,
              background: channelCount <= 1 ? T.surface : T.accent, color: channelCount <= 1 ? T.textDim : "#fff",
              fontSize: 18, fontWeight: 700, cursor: channelCount <= 1 ? "default" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace",
            }}
          >&minus;</button>
          <span style={{ fontSize: 20, fontWeight: 800, color: T.text, fontFamily: "'JetBrains Mono', monospace", minWidth: 28, textAlign: "center" }}>{channelCount}</span>
          <button
            onClick={() => setChannelCount(c => Math.min(maxCh, c + 1))}
            disabled={channelCount >= maxCh}
            style={{
              width: 32, height: 32, borderRadius: 6, border: `1px solid ${T.border}`,
              background: channelCount >= maxCh ? T.surface : T.accent, color: channelCount >= maxCh ? T.textDim : "#fff",
              fontSize: 18, fontWeight: 700, cursor: channelCount >= maxCh ? "default" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace",
            }}
          >+</button>
          <span style={{ fontSize: 11, color: T.textDim, fontFamily: "monospace" }}>/ {maxCh} max</span>
        </div>
      )}

      {/* Channel color legend */}
      {mc && channelCount > 1 && (
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
          {Array.from({ length: channelCount }, (_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: CH_COLORS[i] }} />
              <span style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace" }}>
                {mc.channelLabels?.[i] || `Cable ${i + 1} (Ch ${i + 1})`}
              </span>
            </div>
          ))}
        </div>
      )}

      {build.status === "not_possible" ? (
        <div style={{ textAlign: "center", padding: 32 }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>&#x1F6AB;</div>
          <p style={{ color: T.red, fontSize: 14, fontWeight: 600 }}>Cannot be built</p>
          <p style={{ color: T.textDim, fontSize: 13, maxWidth: 280, margin: "8px auto" }}>{build.use}</p>
        </div>
      ) : (
        <>
          {/* Solder/Face toggle — hide for DT12 and coax-only builds */}
          {fromConn.type !== "dt12" && toConn.type !== "dt12" && (fromConn.type !== "coax" || toConn.type !== "coax") && (
            <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
              {["solder", "face"].map((s) => (
                <button key={s} onClick={() => setSide(s)} style={{
                  ...styles.toggleBtn,
                  background: side === s ? T.accent : T.surface2,
                  color: side === s ? "#fff" : T.textDim,
                }}>
                  {s === "face" ? "Face View" : "Solder Side"}
                </button>
              ))}
            </div>
          )}
          {genderedConns.length > 0 && fromConn.type !== "dt12" && toConn.type !== "dt12" && (
            <div style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace", marginTop: -6, marginBottom: 12, lineHeight: 1.4 }}>
              {genderedConns.map(c => {
                const g = c.faceGender, o = g === "female" ? "male" : "female";
                return <div key={c.name}>{c.short}: {side === "solder" ? `solder side of a ${g.toUpperCase()} end = mating face of a ${o} end` : `${g.toUpperCase()} mating face = solder side of a ${o} end`} — check the build's gender note.</div>;
              })}
            </div>
          )}

          {/* Visual diagrams side by side */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 12, padding: "8px 0", flexWrap: "wrap" }}>
            <div>
              {channelCount > 1 && multiSide === "from" ? (
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{channelCount}&times; {fromConn.short}</div>
                  <ConnectorDiagram connKey={build.from} side={fromSide} highlightPins={fromHighlight} pinColors={fromPinColors} viewLabel={viewLabelFor(fromConn)} shellHighlighted={fromShellHighlighted} shellColor={fromShellWireIdx >= 0 ? wireColors[fromShellWireIdx]?.lineColor : null} />
                </div>
              ) : (
                <ConnectorDiagram connKey={build.from} side={fromSide} highlightPins={fromHighlight} pinColors={fromPinColors} label={fromLabel} viewLabel={viewLabelFor(fromConn)} shellHighlighted={fromShellHighlighted} shellColor={fromShellWireIdx >= 0 ? wireColors[fromShellWireIdx]?.lineColor : null} />
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 100, padding: "0 2px" }}>
              {allWiring.map((w, i) => {
                const resolved = wireColors[i];
                const fallback = resolved.lineColor;
                const fLabel = w.fromPin === "shell" ? "S" : (fromConn.pins.find(p => p.id === w.fromPin)?.label || w.fromPin);
                const tLabel = w.toPin === "shell" ? "S" : (toConn.pins.find(p => p.id === w.toPin)?.label || w.toPin);
                // Get physical colors for both ends
                const fWire = getPhysicalWireColor(build.from, w.fromPin, build);
                const tWire = getPhysicalWireColor(build.to, w.toPin, build);
                const fColor = fWire ? fWire.lineColor : fallback;
                const tColor = tWire ? tWire.lineColor : fallback;
                const fHasStripe = fWire && fWire.hasStripe;
                const tHasStripe = tWire && tWire.hasStripe;
                const fDotFill = fWire ? (fWire.hasStripe ? "#fff" : fWire.lineColor) : fallback;
                const tDotFill = tWire ? (tWire.hasStripe ? "#fff" : tWire.lineColor) : fallback;
                const gradId = `grad-${i}`;
                const bothSameColor = fColor === tColor && !fHasStripe && !tHasStripe;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 3 }}>
                    <span style={{ fontSize: 7, color: fColor, fontFamily: "monospace", fontWeight: 700, minWidth: 12, textAlign: "right" }}>{fLabel}</span>
                    <svg width={50} height={10} viewBox="0 0 50 10">
                      <defs>
                        <linearGradient id={gradId} x1="6" y1="0" x2="44" y2="0" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor={fColor} />
                          <stop offset="40%" stopColor={fColor} />
                          <stop offset="60%" stopColor={tColor} />
                          <stop offset="100%" stopColor={tColor} />
                        </linearGradient>
                      </defs>
                      {/* Left dot — FROM connector color */}
                      <circle cx={3} cy={5} r={3} fill={fDotFill} stroke={fHasStripe ? fColor : "none"} strokeWidth={0.5} />
                      {fHasStripe && fWire.stripe && <line x1={3} y1={2.5} x2={3} y2={7.5} stroke={fWire.stripe} strokeWidth={2} />}
                      {/* Gradient wire line */}
                      <line x1={6} y1={5} x2={44} y2={5} stroke={bothSameColor ? fColor : `url(#${gradId})`} strokeWidth={3} />
                      {/* Right dot — TO connector color */}
                      <circle cx={47} cy={5} r={3} fill={tDotFill} stroke={tHasStripe ? tColor : "none"} strokeWidth={0.5} />
                      {tHasStripe && tWire.stripe && <line x1={47} y1={2.5} x2={47} y2={7.5} stroke={tWire.stripe} strokeWidth={2} />}
                    </svg>
                    <span style={{ fontSize: 7, color: tColor, fontFamily: "monospace", fontWeight: 700, minWidth: 12 }}>{tLabel}</span>
                  </div>
                );
              })}
            </div>
            {channelCount > 1 && multiSide === "to" ? (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, color: T.textDim, marginBottom: 4, fontFamily: "monospace" }}>{channelCount}&times; {toConn.short}</div>
                <ConnectorDiagram connKey={build.to} side={toSide} highlightPins={toHighlight} pinColors={toPinColors} viewLabel={viewLabelFor(toConn)} shellHighlighted={toShellHighlighted} shellColor={toShellWireIdx >= 0 ? wireColors[toShellWireIdx]?.lineColor : null} />
              </div>
            ) : (
              <ConnectorDiagram connKey={build.to} side={toSide} highlightPins={toHighlight} pinColors={toPinColors} label={toLabel} viewLabel={viewLabelFor(toConn)} shellHighlighted={toShellHighlighted} shellColor={toShellWireIdx >= 0 ? wireColors[toShellWireIdx]?.lineColor : null} />
            )}
          </div>

          {/* Wire-by-wire list */}
          <div style={{ marginTop: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <div style={{ fontSize: 12, color: T.accent, fontWeight: 700, fontFamily: "monospace", letterSpacing: 1 }}>
                SOLDER THESE WIRES:
              </div>
              <div style={{ display: "flex", gap: 3 }}>
                {[
                  { id: "default", label: "Order" },
                  { id: "from", label: fromConn.short },
                  { id: "to", label: toConn.short },
                ].map(s => (
                  <button key={s.id} onClick={() => setSortBy(s.id)} style={{
                    padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "monospace", fontWeight: 700,
                    border: `1px solid ${sortBy === s.id ? T.accent : T.border}`,
                    background: sortBy === s.id ? T.accent : T.surface2,
                    color: sortBy === s.id ? "#fff" : T.textDim,
                    cursor: "pointer",
                  }}>{s.label}</button>
                ))}
              </div>
            </div>
            {(() => {
              const tagged = allWiring.map((w, i) => ({ ...w, origIdx: i }));
              if (sortBy === "from") {
                tagged.sort((a, b) => {
                  const aPin = a.fromPin === "shell" ? -1 : a.fromPin;
                  const bPin = b.fromPin === "shell" ? -1 : b.fromPin;
                  return aPin - bPin;
                });
              } else if (sortBy === "to") {
                tagged.sort((a, b) => {
                  const aPin = a.toPin === "shell" ? -1 : a.toPin;
                  const bPin = b.toPin === "shell" ? -1 : b.toPin;
                  return aPin - bPin;
                });
              }
              return tagged.map((w) => {
                const i = w.origIdx;
                const resolved = wireColors[i];
                const color = resolved.lineColor;
                const fLabel = w.fromPin === "shell" ? "SHELL" : (fromConn.pins.find(p => p.id === w.fromPin)?.label || w.fromPin);
                const tLabel = w.toPin === "shell" ? "SHELL" : (toConn.pins.find(p => p.id === w.toPin)?.label || w.toPin);
                const fromWire = getPhysicalWireColor(build.from, w.fromPin, build);
                const toWire = getPhysicalWireColor(build.to, w.toPin, build);
                // Extract just the signal purpose from desc — strip redundant pin/color info
                const signal = extractSignal(w.desc);
                return (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 6, padding: "6px 8px",
                    borderBottom: `1px solid ${T.border}`, fontSize: 12,
                    borderLeft: `3px solid ${color}`,
                  }}>
                    {mc && channelCount > 1 && (
                      <span style={{ fontSize: 9, color, fontFamily: "monospace", fontWeight: 700, minWidth: 18 }}>C{w.ch + 1}</span>
                    )}
                    {/* FROM */}
                    <div style={{ display: "flex", alignItems: "center", gap: 3, minWidth: 0 }}>
                      {fromWire && <WireSwatch wireColor={fromWire} size={12} />}
                      <span style={{ fontFamily: "monospace", color, fontWeight: 700, whiteSpace: "nowrap" }}>
                        {fromConn.short} {fLabel}
                      </span>
                    </div>
                    <span style={{ color, fontSize: 14, flexShrink: 0 }}>&rarr;</span>
                    {/* TO */}
                    <div style={{ display: "flex", alignItems: "center", gap: 3, minWidth: 0 }}>
                      {toWire && <WireSwatch wireColor={toWire} size={12} />}
                      <span style={{ fontFamily: "monospace", color, fontWeight: 700, whiteSpace: "nowrap" }}>
                        {toConn.short} {tLabel}
                      </span>
                    </div>
                    {/* Signal purpose only */}
                    {signal && <span style={{ color: T.textDim, fontSize: 10, fontFamily: "monospace", marginLeft: 4 }}>{signal}</span>}
                  </div>
                );
              });
            })()}
          </div>

          {/* Dead ends */}
          {(!mc || channelCount <= 1) && build.deadEnds && build.deadEnds.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 12, color: T.yellow, fontWeight: 700, marginBottom: 6, fontFamily: "monospace", letterSpacing: 1 }}>
                DEAD ENDS (leave unconnected):
              </div>
              {build.deadEnds.map((d, i) => (
                <div key={i} style={{ padding: "4px 8px", borderBottom: `1px solid ${T.border}`, fontSize: 12, color: T.yellow }}>
                  {d.desc}
                </div>
              ))}
            </div>
          )}

          {/* Notes */}
          {build.notes && (
            <div style={{ marginTop: 12, padding: 10, background: T.surface2, borderRadius: 6, border: `1px solid ${T.border}` }}>
              <div style={{ fontSize: 11, color: T.accent, fontWeight: 700, fontFamily: "monospace", marginBottom: 4 }}>NOTE:</div>
              <div style={{ fontSize: 12, color: T.textDim, lineHeight: 1.5 }}>{build.notes}</div>
            </div>
          )}

          {/* Sources */}
          <SourcesList sources={build.sources} />

          {/* Signal info for both connectors */}
          {(() => {
            const fromInfo = SIGNAL_INFO[build.from];
            const toInfo = SIGNAL_INFO[build.to];
            if (!fromInfo && !toInfo) return null;
            return (
              <div style={{ marginTop: 12, padding: 10, background: T.surface2, borderRadius: 6, border: `1px solid ${T.border}` }}>
                <div style={{ fontSize: 11, color: T.accent2, fontWeight: 700, fontFamily: "monospace", marginBottom: 6, letterSpacing: 1 }}>SIGNAL INFO:</div>
                {[
                  { label: fromConn.short, info: fromInfo },
                  ...(build.from !== build.to ? [{ label: toConn.short, info: toInfo }] : []),
                ].filter(s => s.info).map(({ label, info }) => (
                  <div key={label} style={{ marginBottom: 8 }}>
                    <div style={{ fontSize: 11, color: T.text, fontWeight: 700, fontFamily: "monospace" }}>{label}</div>
                    <div style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace", marginTop: 2 }}>
                      Signals: {info.signals.join(", ")}
                    </div>
                    <div style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace" }}>
                      Impedance: {info.impedance}
                    </div>
                    <div style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace" }}>
                      Max run: {Object.entries(info.maxRun).map(([k, v]) => `${k}: ${v}`).join(" | ")}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* Continuity test checklist */}
          <div style={{ marginTop: 12, padding: 10, background: T.surface2, borderRadius: 6, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 11, color: T.green, fontWeight: 700, fontFamily: "monospace", marginBottom: 6, letterSpacing: 1 }}>TEST WITH METER:</div>
            {allWiring.map((w, i) => {
              const fLabel = w.fromPin === "shell" ? "SHELL" : (fromConn.pins.find(p => p.id === w.fromPin)?.label || w.fromPin);
              const tLabel = w.toPin === "shell" ? "SHELL" : (toConn.pins.find(p => p.id === w.toPin)?.label || w.toPin);
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", fontSize: 11, fontFamily: "monospace", color: T.textDim }}>
                  <span style={{ color: T.green, fontSize: 12 }}>{"\u25CB"}</span>
                  <span>{fromConn.short} {fLabel} &harr; {toConn.short} {tLabel} &mdash; should read continuity</span>
                </div>
              );
            })}
            {build.deadEnds && build.deadEnds.length > 0 && (
              <div style={{ marginTop: 6, borderTop: `1px solid ${T.border}`, paddingTop: 6 }}>
                {build.deadEnds.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", fontSize: 11, fontFamily: "monospace", color: T.yellow }}>
                    <span style={{ fontSize: 12 }}>{"\u25CB"}</span>
                    <span>{d.desc.split(" \u2014 ")[0]} &mdash; should read OPEN (no continuity)</span>
                  </div>
                ))}
              </div>
            )}
            <div style={{ fontSize: 9, color: T.textDim, fontFamily: "monospace", marginTop: 6, opacity: 0.7 }}>
              Set meter to continuity/buzzer mode. Touch probes to pins at each end.
            </div>
          </div>
        </>
      )}
    </div>
  );
}
