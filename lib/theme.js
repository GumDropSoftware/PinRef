// ─── THEME ───────────────────────────────────────────────────────────────────

export const T = {
  bg: "#0a0e14",
  surface: "#131920",
  surface2: "#1a2230",
  border: "#263040",
  text: "#d4dae4",
  textDim: "#6e7a8a",
  accent: "#ff6b35",
  accent2: "#00c2ff",
  green: "#34d399",
  yellow: "#fbbf24",
  red: "#f87171",
  pinBg: "#1e2a3a",
  pinActive: "#ff6b35",
  wire: "#00c2ff",
};

export const STATUS_META = {
  standard: { label: "Standard", color: T.green, icon: "\u2713", desc: "This is a legit build. It will work." },
  partial: { label: "Partial", color: T.yellow, icon: "\u25D0", desc: "Functional, but some pins are dead or you lose something." },
  field_hack: { label: "Field Hack", color: T.accent, icon: "\u26A1", desc: "Creative wiring. Not standard \u2014 label both ends." },
  not_possible: { label: "Nope", color: T.red, icon: "\u2715", desc: "Different signal types. Cannot be adapted." },
};

// Channel colors — each added cable gets its own color
export const CH_COLORS = [
  "#ff6b35", "#00c2ff", "#34d399", "#fbbf24", "#c084fc", "#f472b6",
  "#22d3ee", "#a3e635", "#fb923c", "#818cf8", "#f87171", "#4ade80",
];

// ─── WIRE PALETTE ─────────────────────────────────────────────────────────────
// Single source of truth for wire jacket colors.
// EIA/TIA standard multi-conductor colors (used in DE-9, DB25, XLR, TRS, etc.)
// T568B Ethernet jacket colors are distinct — stored as t568_* below.
export const WIRE_PALETTE = {
  // EIA standard
  black:  { color: "#333",    lineColor: "#777",    name: "Black" },
  red:    { color: "#ef4444", lineColor: "#ef4444", name: "Red" },
  orange: { color: "#f97316", lineColor: "#f97316", name: "Orange" },
  yellow: { color: "#eab308", lineColor: "#eab308", name: "Yellow" },
  green:  { color: "#22c55e", lineColor: "#22c55e", name: "Green" },
  blue:   { color: "#3b82f6", lineColor: "#3b82f6", name: "Blue" },
  violet: { color: "#8b5cf6", lineColor: "#8b5cf6", name: "Violet" },
  grey:   { color: "#999",    lineColor: "#999",    name: "Grey" },
  white:  { color: "#e5e7eb", lineColor: "#bbb",    name: "White" },
  brown:  { color: "#92400e", lineColor: "#92400e", name: "Brown" },
  // Broadcast audio cable — green braid with black stripe (ground/shield)
  ground: { color: "#86efac", lineColor: "#86efac", name: "Ground", stripe: "#333", hasStripe: true },
  // Coax center conductor (bare copper appearance)
  copper: { color: "#c87533", lineColor: "#c87533", name: "Center" },
  // Shield / braid conductor
  shield: { color: "#999",    lineColor: "#999",    name: "Shield" },
  // T568B Ethernet cable jacket colors — these are the physical jacket shades
  // used on Cat5/Cat6 pairs and differ from EIA palette
  t568_orange: { color: "#ff8800", lineColor: "#ff8800", name: "Orange" },
  t568_green:  { color: "#00aa00", lineColor: "#00aa00", name: "Green" },
  t568_blue:   { color: "#0088ff", lineColor: "#6cb4ee", name: "Blue" },
  t568_brown:  { color: "#964B00", lineColor: "#964B00", name: "Brown" },
};

// Shorthand alias
const W = WIRE_PALETTE;

// T568B wire colors for RJ45 pins — built from WIRE_PALETTE.t568_* entries
export const RJ45_WIRE_COLORS = {
  1: { color: "#fff", stripe: W.t568_orange.color, name: "Wht/Org",  hasStripe: true,  lineColor: W.t568_orange.lineColor },
  2: { color: W.t568_orange.color,                 name: "Orange",   hasStripe: false, lineColor: W.t568_orange.lineColor },
  3: { color: "#fff", stripe: W.t568_green.color,  name: "Wht/Grn",  hasStripe: true,  lineColor: W.t568_green.lineColor  },
  4: { color: W.t568_blue.color,                   name: "Blue",     hasStripe: false, lineColor: W.t568_blue.lineColor   },
  5: { color: "#fff", stripe: W.t568_blue.color,   name: "Wht/Blue", hasStripe: true,  lineColor: W.t568_blue.lineColor   },
  6: { color: W.t568_green.color,                  name: "Green",    hasStripe: false, lineColor: W.t568_green.lineColor  },
  7: { color: "#fff", stripe: W.t568_brown.color,  name: "Wht/Brn",  hasStripe: true,  lineColor: W.t568_brown.lineColor  },
  8: { color: W.t568_brown.color,                  name: "Brown",    hasStripe: false, lineColor: W.t568_brown.lineColor  },
};

// Internal wire colors inside Cable Wholesale DE-9-to-RJ45/RJ12 adapter shells.
// These are the physical wires inside the adapter housing (standard multi-conductor).
// NOTE: Different from T568B — these use EIA palette colors, not Ethernet jacket shades.
export const SHELL_WIRE_COLORS = {
  rj45: {
    1: W.blue,
    2: W.orange,
    3: W.black,
    4: W.red,
    5: W.green,
    6: W.yellow,
    7: W.brown,
    8: W.white,
  },
  rj12: {
    // USOC color code (pin 1→6, tab-down): White, Black, Red, Green, Yellow, Blue.
    1: W.white,
    2: W.black,
    3: W.red,
    4: W.green,
    5: W.yellow,
    6: W.blue,
  },
  de9_grey: {
    1: W.blue,
    2: W.red,
    3: W.black,
    4: W.brown,
    5: W.white,
    6: W.orange,
    7: W.green,
    8: W.yellow,
  },
};

// Standard internal wire colors for common broadcast cable types.
// All entries reference WIRE_PALETTE so one hex change propagates everywhere.
export const CABLE_WIRE_COLORS = {
  xlr3: {
    1: W.ground,
    2: W.red,
    3: W.black,
  },
  xlr5: {
    1: W.ground,
    2: W.red,
    3: W.black,
    4: W.white,
    5: W.green,
  },
  xlr4: {
    1: W.ground,
    2: W.red,
    3: W.black,
    4: W.white,
  },
  trs: {
    1: W.red,
    2: W.black,
    3: W.ground,
  },
  bnc: {
    1: W.copper,
    2: W.shield,
  },
  triax: {
    1: W.copper,
    // Inner and outer shields use distinct grays to show the layered construction
    2: { color: "#ccc", lineColor: "#aaa", name: "Inner Shield" },
    3: { color: "#888", lineColor: "#888", name: "Outer Shield" },
  },
  de9: {
    1: W.black,
    2: W.red,
    3: W.orange,
    4: W.yellow,
    5: W.green,
    6: W.blue,
    7: W.violet,
    8: W.grey,
    9: W.white,
  },
  db25: (() => {
    // EIA color cycle: Black, Red, Orange, Yellow, Green, Blue, Violet, Grey, White, Brown
    // Repeats with stripe suffix for conductors 11–25
    const eia = [
      W.black, W.red, W.orange, W.yellow, W.green,
      W.blue, W.violet, W.grey, W.white, W.brown,
    ];
    const map = {};
    for (let i = 1; i <= 25; i++) {
      const c = eia[(i - 1) % 10];
      const cycle = Math.floor((i - 1) / 10);
      const suffix = cycle > 0 ? `/${eia[cycle].name}` : "";
      map[i] = { color: c.color, name: c.name + suffix, lineColor: c.lineColor };
    }
    return map;
  })(),
  rj45: RJ45_WIRE_COLORS,
  rj12: {
    // USOC color code (pin 1→6, tab-down): White, Black, Red, Green, Yellow, Blue.
    1: W.white,
    2: W.black,
    3: W.red,
    4: W.green,
    5: W.yellow,
    6: W.blue,
  },
  speakon: {
    // NL4: positive conductors are solid, negatives are white-striped
    1: W.blue,
    2: { ...W.blue,  stripe: "#fff", name: "Blue/Wht", hasStripe: true },
    3: W.red,
    4: { ...W.red,   stripe: "#fff", name: "Red/Wht",  hasStripe: true },
  },
  ts: {
    1: W.red,
    2: W.ground,
  },
  mini_trs: {
    1: W.red,
    2: W.black,
    3: W.ground,
  },
  mini_trrs: {
    // CTIA: Tip=L, R1=R, R2=Ground, S=Mic. Ground always shown green.
    1: W.red,
    2: W.black,
    3: W.ground,
    4: W.blue,
  },
  rca: {
    1: W.copper,
    2: W.shield,
  },
  powercon: {
    // IEC/EU mains wiring colors: Brown=Line, Blue=Neutral, Green/Yellow=Ground
    1: W.brown,
    2: W.blue,
    3: { ...W.green, stripe: W.yellow.color, name: "Grn/Yel", hasStripe: true, lineColor: W.green.lineColor },
  },
};

export const styles = {
  backBtn: {
    background: "none",
    border: "none",
    color: T.accent,
    fontSize: 13,
    fontFamily: "monospace",
    cursor: "pointer",
    padding: "4px 0",
    marginBottom: 8,
    display: "block",
  },
  toggleBtn: {
    padding: "6px 14px",
    borderRadius: 6,
    border: `1px solid ${T.border}`,
    fontSize: 12,
    fontFamily: "monospace",
    cursor: "pointer",
    fontWeight: 600,
  },
  connCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    padding: "14px 8px",
    background: T.surface2,
    border: `1px solid ${T.border}`,
    borderRadius: 8,
    cursor: "pointer",
    transition: "border-color 0.15s",
  },
  buildCard: {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "10px 12px",
    marginBottom: 6,
    background: T.surface2,
    border: `1px solid ${T.border}`,
    borderLeft: "3px solid",
    borderRadius: 6,
    cursor: "pointer",
  },
  tab: {
    flex: 1,
    padding: "10px 0",
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: 1.5,
    border: "none",
    cursor: "pointer",
    transition: "all 0.15s",
  },
};
