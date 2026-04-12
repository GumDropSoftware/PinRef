// ─── SIGNAL TYPE, IMPEDANCE, AND MAX RUN DATA ───────────────────────────────

export const SIGNAL_INFO = {
  xlr3: {
    signals: ["Balanced Audio", "AES3 Digital", "DMX512"],
    impedance: "110\u03A9 (AES3/DMX) / Low-Z (analog)",
    maxRun: { analog: "1000 ft", aes3: "330 ft", dmx: "1000 ft" },
    notes: "Most versatile pro audio connector. Pin 2 hot is standard (AES/EBU convention).",
  },
  xlr5: {
    signals: ["Intercom (Clear-Com / RTS)", "Stereo Audio", "DMX512"],
    impedance: "Low-Z",
    maxRun: { intercom: "2000 ft", audio: "1000 ft" },
    notes: "5-pin is the intercom standard. Also used for dual-channel or stereo audio.",
  },
  xlr4: {
    signals: ["Headset Audio (Stereo)", "DC Power (some devices)"],
    impedance: "Low-Z",
    maxRun: { audio: "100 ft" },
    notes: "Primarily headset connectors. Some LED fixtures use XLR4 for DC power.",
  },
  dt12: {
    signals: ["12-Channel Balanced Audio"],
    impedance: "Low-Z",
    maxRun: { audio: "500 ft" },
    notes: "Broadcast multi-channel audio standard. FK37 connector carries 12 balanced pairs.",
  },
  trs: {
    signals: ["Balanced Audio", "Stereo Audio (unbalanced)", "Insert Send/Return"],
    impedance: "Low-Z",
    maxRun: { balanced: "100 ft", unbalanced: "25 ft" },
    notes: "Context matters: balanced line level on mixers, unbalanced stereo on headphones.",
  },
  ts: {
    signals: ["Unbalanced Audio (Guitar/Line)", "Speaker (legacy)"],
    impedance: "Low-Z / Hi-Z (instrument)",
    maxRun: { instrument: "25 ft", line: "50 ft" },
    notes: "Keep runs short \u2014 unbalanced = susceptible to interference. Not for speaker level anymore.",
  },
  rj45: {
    signals: ["Ethernet (100/1000BASE-T)", "PoE", "Dante/AES67", "Audio over Cat5"],
    impedance: "100\u03A9 (Ethernet)",
    maxRun: { ethernet: "328 ft (100m)", audio: "500 ft", poe: "328 ft" },
    notes: "T568B is broadcast standard. Cat5e minimum for gigabit. Cat6a for 10Gig/Dante.",
  },
  rj12: {
    signals: ["Telephone", "Serial Data", "Tally/GPI"],
    impedance: "Varies",
    maxRun: { data: "200 ft" },
    notes: "6P6C modular connector. Common on tally systems and older control interfaces.",
  },
  bnc: {
    signals: ["SD/HD/3G-SDI", "Genlock/Blackburst", "Timecode (LTC)", "Composite Video"],
    impedance: "75\u03A9",
    maxRun: { "sd-sdi": "1000 ft", "hd-sdi": "330 ft", "3g-sdi": "200 ft", genlock: "1000 ft" },
    notes: "MUST use 75\u03A9 cable (Belden 1694A). 50\u03A9 BNC looks identical but causes reflections.",
  },
  triax: {
    signals: ["Camera Control + Return Video", "Camera Power"],
    impedance: "75\u03A9",
    maxRun: { camera: "5000 ft" },
    notes: "Long-distance camera runs. Carries bidirectional video, audio, data, and power on one cable.",
  },
  db9: {
    signals: ["RS-232 Serial", "RS-422 Serial", "Tally/GPI"],
    impedance: "Varies",
    maxRun: { "rs-232": "50 ft", "rs-422": "4000 ft" },
    notes: "RS-232 is short range. RS-422 is differential and runs much farther. Check baud rate vs distance.",
  },
  db25: {
    signals: ["8-Ch Analog Audio (Tascam/Yamaha)", "AES3 Digital (4 pairs)", "Serial Data"],
    impedance: "110\u03A9 (AES) / Low-Z (analog)",
    maxRun: { audio: "100 ft", aes: "330 ft" },
    notes: "Tascam and Yamaha use DIFFERENT pin assignments. Always verify which standard your gear uses.",
  },
  speakon: {
    signals: ["Amplified Speaker"],
    impedance: "Low-Z (speaker level)",
    maxRun: { speaker: "100 ft (depends on gauge)" },
    notes: "Locking connector designed for speaker level. Use minimum 12 AWG for long runs.",
  },
  mini_trs: {
    signals: ["Stereo Audio (unbalanced)", "Balanced Mono", "IFB/IEM"],
    impedance: "Low-Z",
    maxRun: { unbalanced: "10 ft", balanced: "50 ft" },
    notes: "Fragile for field use. Carry spares. Common on IFB receivers and phone feeds.",
  },
  mini_trrs: {
    signals: ["Stereo Audio + Mic (CTIA)", "Headset Intercom Adapter"],
    impedance: "Low-Z",
    maxRun: { unbalanced: "10 ft" },
    notes: "CTIA standard (Apple/Android). Tip=L, R1=R, R2=Mic, Sleeve=Gnd. OMTP is reversed \u2014 check your headset.",
  },
  rca: {
    signals: ["Unbalanced Audio", "Composite Video", "S/PDIF Digital"],
    impedance: "75\u03A9 (video/SPDIF) / Low-Z (audio)",
    maxRun: { audio: "25 ft", video: "50 ft", spdif: "30 ft" },
    notes: "Consumer connector. Expect level differences when connecting to pro gear (\u223C10dB).",
  },
  powercon: {
    signals: ["AC Mains Power (20A)"],
    impedance: "N/A",
    maxRun: { power: "Per NEC/local code" },
    notes: "Blue = power in, Grey = power out (through). NEVER connect blue to blue.",
  },
};

// ─── COMPATIBILITY MATRIX ────────────────────────────────────────────────────
// Each cell: "standard" | "partial" | "field_hack" | "not_possible" | null (no data)
// This drives the football-schedule grid

const connectorOrder = [
  "xlr3", "xlr5", "xlr4", "trs", "ts", "mini_trs", "mini_trrs", "rca",
  "speakon", "rj45", "rj12", "bnc", "triax", "dt12", "db9", "db25", "powercon",
];

// Build the matrix from existing BUILDS data at runtime
export function buildCompatibilityMatrix(builds) {
  const matrix = {};
  connectorOrder.forEach(a => {
    matrix[a] = {};
    connectorOrder.forEach(b => {
      if (a === b) {
        matrix[a][b] = "standard"; // same-to-same is always standard
      } else {
        matrix[a][b] = null; // unknown
      }
    });
  });

  // Fill from builds data
  builds.forEach(b => {
    const key = b.status;
    // Set both directions
    if (!matrix[b.from]) matrix[b.from] = {};
    if (!matrix[b.to]) matrix[b.to] = {};
    // Only upgrade: standard > partial > field_hack > not_possible > null
    const rank = { standard: 4, partial: 3, field_hack: 2, not_possible: 1 };
    const current = matrix[b.from]?.[b.to];
    if (!current || (rank[key] || 0) > (rank[current] || 0)) {
      matrix[b.from][b.to] = key;
      matrix[b.to][b.from] = key; // symmetric
    }
  });

  return { matrix, order: connectorOrder };
}
