// ─── SIGNAL TYPE, IMPEDANCE, AND MAX RUN DATA ───────────────────────────────

export const SIGNAL_INFO = {
  xlr3: {
    signals: ["Balanced Audio", "AES3 Digital", "DMX512 (non-standard but common)", "SMPTE LTC Timecode"],
    impedance: "110\u03A9 (AES3/DMX) / Low-Z (analog)",
    maxRun: { analog: "1000 ft", aes3: "330 ft", dmx: "1000 ft" },
    notes: "Most versatile pro audio connector. Pin 2 hot is AES14-1992 standard. AES3 digital audio requires true 110\u03A9 cable (not regular mic cable) for spec-compliant jitter performance. DMX over XLR3 is non-compliant per USITT but extremely common; DMX polarity is inverted vs audio (pin 2 = Data\u2212).",
    sources: [
      { label: "AES14-1992 Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=36" },
      { label: "AES3 — Wikipedia", url: "https://en.wikipedia.org/wiki/AES3" },
    ],
  },
  xlr5: {
    signals: ["Intercom (Clear-Com / RTS)", "Stereo Audio", "DMX512 (USITT standard)"],
    impedance: "Low-Z",
    maxRun: { intercom: "500 ft (~1000 ft with line impedance switching)", audio: "1000 ft", dmx: "1640 ft" },
    notes: "5-pin is the USITT DMX512 standard connector and the intercom headset standard. Clear-Com's own documentation recommends partyline runs under 500 ft; longer runs need proper termination. DMX polarity: pin 2 = Data\u2212, pin 3 = Data+ (inverted from audio).",
    sources: [
      { label: "Clear-Com Partyline Cabling Guide", url: "https://clearcom.com/DownloadCenter/technicaldocs/Digital-Analog_Partyline_Cabling_Comparison_Technical_Guide.pdf" },
      { label: "USITT DMX512-A / ANSI E1.11", url: "https://tsp.esta.org/tsp/documents/docs/DMX512-A_Guide_(8x10)_ESTA.PDF" },
    ],
  },
  xlr4: {
    signals: ["Intercom Headset (Clear-Com / RTS / Telex)", "DC Power (some devices)"],
    impedance: "Low-Z",
    maxRun: { intercom: "500 ft" },
    notes: "Broadcast intercom headset standard (Clear-Com, RTS, Telex): pin 2 = mic signal (unbalanced hot), pin 3 = earphone return (ground), pin 4 = earphone signal (mono). Headset mic is unbalanced \u2014 no balanced mic negative. Some LED and AV gear uses XLR4 for DC power with a different pin assignment.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
    ],
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
    signals: ["SD/HD/3G/6G/12G-SDI", "Genlock/Blackburst", "Tri-Level Sync", "Timecode (LTC)", "Composite Video"],
    impedance: "75\u03A9",
    maxRun: { "sd-sdi": "1000 ft", "hd-sdi": "330 ft (1694A)", "3g-sdi": "255 ft (1694A) / 325 ft (1.5CUHD)", "12g-sdi": "255 ft (4694R / L-5.5CUHD only)", genlock: "1000 ft+" },
    notes: "MUST use 75\u03A9 cable. Belden 1694A covers HD/3G-SDI but is NOT 12G-rated \u2014 use Belden 4694R, 4794R, or Canare L-5.5CUHD for 12G-SDI. 50\u03A9 BNC connectors look identical but cause reflections and are not compatible. Analog sync (blackburst, tri-level) runs longer than SDI on the same cable because it's baseband, not gigahertz.",
    sources: [
      { label: "Belden 12G-SDI Cable Portfolio", url: "https://www.belden.com/products/cable/broadcast-cable/sdi-video-coax-cable/12g-sdi" },
      { label: "Anixter/Belden Distance Chart", url: "https://www.anixter.com/content/dam/Suppliers/Belden/Brochures/Recommended_Transmission_Distance_Chart.pdf" },
    ],
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
    signals: ["8-Ch Analog Audio (Tascam/AES59)", "AES3 Digital (Yamaha 4-in/4-out)", "Serial Data (RS-232/RS-530)"],
    impedance: "110\u03A9 (AES) / Low-Z (analog)",
    maxRun: { audio: "100 ft", aes: "330 ft" },
    notes: "Tascam (= AES59-2012) is the analog audio standard, 8 channels one direction. Channels run RIGHT-TO-LEFT on the connector \u2014 Ch1 at pins 24/12/25, Ch8 at pins 1/14/2, pin 13 = NC. Yamaha (YGDAI) is a DIFFERENT standard used for AES3 digital (4 in + 4 out). The two are mutually incompatible without a crossover cable.",
    sources: [
      { label: "TASCAM DB-25 Pinout (official)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
      { label: "AES59-2012 Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=92" },
      { label: "Hosa DB-25 Enigma", url: "https://hosatech.com/press-release/db-25-enigma/" },
    ],
  },
  speakon: {
    signals: ["Amplified Speaker (passive)"],
    impedance: "Low-Z (speaker level)",
    maxRun: { speaker: "100 ft (12 AWG min for long runs)" },
    notes: "Locking connector designed for speaker level. NL4 carries two speaker channels (bi-amp: 1+/1\u2212 = LF/woofer, 2+/2\u2212 = HF/tweeter by convention). NEVER plug Speakon speaker signal into a line input \u2014 tens of volts will destroy the input stage. Neutrik Speakon-to-XLR adapters tie XLR pin 1 to Speakon 1\u2212 (not open); pin 3 is NC.",
    sources: [
      { label: "Neutrik Speakon Wiring Suggestion", url: "https://www.neutrik.com/media/8027/download/speakon-wiring-suggestion.pdf" },
    ],
  },
  mini_trs: {
    signals: ["Stereo Audio (unbalanced)", "Balanced Mono", "IFB/IEM"],
    impedance: "Low-Z",
    maxRun: { unbalanced: "10 ft", balanced: "50 ft" },
    notes: "Fragile for field use. Carry spares. Common on IFB receivers and phone feeds.",
  },
  mini_trrs: {
    signals: ["Stereo Audio + Mic (CTIA headset)", "Headset Intercom Adapter"],
    impedance: "Low-Z",
    maxRun: { unbalanced: "10 ft" },
    notes: "CTIA / AHJ standard (iPhone, modern Android, per Android AOSP spec): Tip=Left, Ring1=Right, Ring2=Ground, Sleeve=Mic. OMTP (older Nokia/Samsung, pre-2012 Chinese iPhones) swaps Ring 2 and Sleeve. If mic and audio appear swapped when adapting, the headset is OMTP \u2014 reverse those two contacts.",
    sources: [
      { label: "Android AOSP Headset Jack Spec", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "Audio-Technica CTIA/OMTP Note", url: "https://www.audio-technica.com/en-gb/support/why-audio-technica-headsets-wont-work-correctly-with-some-older-devices" },
    ],
  },
  rca: {
    signals: ["Unbalanced Audio (\u221210 dBV)", "Composite Video", "S/PDIF Digital"],
    impedance: "75\u03A9 (video/SPDIF) / Low-Z (audio)",
    maxRun: { audio: "25 ft", video: "50 ft (short with consumer RCA; 300 ft on true 75\u03A9)", spdif: "30 ft" },
    notes: "Consumer connector. Level difference to pro +4 dBu is ~12 dB (consumer \u221210 dBV = 316 mVrms vs pro +4 dBu = 1.228 Vrms). Consumer inputs usually have NO gain control \u2014 bridging pro-to-consumer needs a pad, passive DI, or transformer. Composite video and S/PDIF require true 75\u03A9 coax (Belden 1505A / 1694A); consumer RCA plugs are rarely true 75\u03A9 \u2014 keep video runs short unless using proper 75\u03A9 connectors.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Benchmark \u2014 Balanced vs. Unbalanced", url: "https://benchmarkmedia.com/blogs/application_notes/balanced-vs-unbalanced-analog-interfaces" },
    ],
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
