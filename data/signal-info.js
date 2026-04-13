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
    notes: "Broadcast multi-channel audio standard. The DT12 name (coined by Whirlwind) describes the Cannon/ITT FK37 37-pin circular connector. Carries 12 balanced pairs — each channel uses 3 pins (Hi / Gnd / Lo). Pin 22 is spare.",
    sources: [
      { label: "Clark Wire DT12 Audio Multipin Pinout", url: "https://www.clarkwire.com/dt12-audio-multipin-pinout" },
      { label: "Whirlwind DT12 Series", url: "https://www.whirlwindusa.com/products/ac-power-dt-12-dt12-series-broadcast-multipin-connectors" },
    ],
  },
  trs: {
    signals: ["Balanced Audio", "Stereo Audio (unbalanced)", "Insert Send/Return"],
    impedance: "Low-Z",
    maxRun: { balanced: "100 ft", unbalanced: "25 ft" },
    notes: "Context determines wiring: balanced mono (Tip=Hot, Ring=Cold, Sleeve=Gnd) on pro line-level gear vs stereo unbalanced (Tip=L, Ring=R, Sleeve=Gnd) on headphones. Same physical connector; read the silkscreen.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Sweetwater \u2014 Tip Ring Sleeve (TRS)", url: "https://www.sweetwater.com/insync/tip-ring-sleeve-trs/" },
    ],
  },
  ts: {
    signals: ["Unbalanced Audio (Guitar/Line)", "Speaker (legacy)"],
    impedance: "Low-Z / Hi-Z (instrument)",
    maxRun: { instrument: "25 ft", line: "50 ft" },
    notes: "Keep runs short \u2014 unbalanced connections are susceptible to interference and ground-loop hum. Legacy 1/4\" speaker use is obsolete; use Speakon for modern amp outputs.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Phone connector \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Phone_connector_(audio)" },
    ],
  },
  rj45: {
    signals: ["Ethernet (100/1000BASE-T)", "PoE", "Dante/AES67", "Audio over Cat5 (StudioHub+)"],
    impedance: "100\u03A9 (Ethernet)",
    maxRun: { ethernet: "328 ft (100m)", audio: "1000 ft (line level)", poe: "328 ft" },
    notes: "T568B is the broadcast standard wiring. Cat5e minimum for gigabit; Cat6a for 10Gig and Dante. Audio-over-Cat5 conventions vary \u2014 StudioHub+ is the dominant de-facto standard (Axia/Telos/Angry Audio). AES72 is the formal standard but has multiple incompatible variants (Type 4E/2O/1M) and Radial Catapult uses yet another mapping.",
    sources: [
      { label: "TIA/EIA-568-B Wiring Standard", url: "https://www.truecable.com/blogs/cable-academy/t568a-vs-t568b" },
      { label: "StudioHub+ Adapter Pinout Guide", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },
  rj12: {
    signals: ["Telephone (USOC)", "Intercom (Clear-Com HelixNet / RTS AIO)", "Tally/GPI", "Serial Control"],
    impedance: "Varies by use",
    maxRun: { data: "200 ft" },
    notes: "6P6C modular connector. USOC color order (pin 1-6, tab-down): White/Black/Red/Green/Yellow/Blue. No universal broadcast standard \u2014 pin function is manufacturer-specific (Clear-Com, RTS, Telex each wire it differently). Always label both ends.",
    sources: [
      { label: "Registered jack \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Registered_jack" },
      { label: "Telex/RTS RJ12 Pinouts (plsystem.com)", url: "https://www.plsystem.com/pinout1.htm" },
    ],
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
    signals: ["Camera Control + Return Video", "Camera Power (120\u2013170 VDC)"],
    impedance: "75\u03A9 (broadcast) \u2014 50\u03A9 / 90\u03A9 variants also exist",
    maxRun: { camera: "5000 ft" },
    notes: "Long-distance broadcast camera runs. Carries bidirectional video, audio, data, tally, and DC power multiplexed on one cable. Three conductors: center (signal), inner shield (DC return), outer shield (DC supply / ground). Use Belden 9232/1857A, Canare LV-77S, Clark Wire TV-series for broadcast (75\u03A9). Lab/instrumentation triax at 50\u03A9 or 90\u03A9 is NOT compatible with SDI.",
    sources: [
      { label: "Canford LEMO/Triax/HDTV Fibre Guide", url: "https://www.canford.co.uk/ProductResources/resources/Reference/Lemo%20and%20Fischer%20Triax%20and%20HDTV%20Fibre%20connectors%20guide%20IBC%20lr%20Connector%20Guide.pdf" },
      { label: "Triaxial cable \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Triaxial_cable" },
    ],
  },
  db9: {
    signals: ["RS-232 Serial", "RS-422 Serial (Sony 9-pin)", "Tally/GPI"],
    impedance: "Varies",
    maxRun: { "rs-232": "50 ft", "rs-422": "4000 ft" },
    notes: "RS-232 (EIA-574) on DB9 is single-ended, short-range. Sony 9-pin / SMPTE 207M uses DB9 for RS-422 broadcast control (VTR, router, switcher). DTE pinout: Pin 2=RxD, 3=TxD, 5=GND, 7=RTS, 8=CTS.",
    sources: [
      { label: "RS-232 \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/RS-232" },
      { label: "TI SNLA039 \u2014 Popular Connector Pin Assignments", url: "https://www.ti.com/lit/an/snla039/snla039.pdf" },
      { label: "Sony 9-pin (SMPTE 207M) Pinout", url: "https://en.wikipedia.org/wiki/9-Pin_Protocol" },
    ],
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
    signals: ["Stereo Audio (unbalanced)", "Balanced Mono", "IFB/IEM", "Plug-in Power (PiP) for electret mics"],
    impedance: "Low-Z",
    maxRun: { unbalanced: "10 ft", balanced: "50 ft" },
    notes: "Fragile for field use \u2014 carry spares. Common on IFB receivers, phone/laptop feeds, and portable recorders. Some field recorders (Zoom F3, Sound Devices MixPre) deliver low-voltage PiP (~3\u20135V) for electret mics \u2014 NOT the same as XLR phantom power. Do NOT use TRS for +48V phantom; ring-to-sleeve shorts during insertion can damage gear.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Phone connector \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Phone_connector_(audio)" },
    ],
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
    signals: ["AC Mains Power (20A, 250V AC rated)"],
    impedance: "N/A",
    maxRun: { power: "Per NEC / local code" },
    notes: "Neutrik NAC3FCA (BLUE) = Power IN; NAC3FCB (GREY) = Power OUT. Keyed so blue cannot mate with grey. Standard PowerCON is NOT rated for hot-plug \u2014 power must be dead before mating/unmating. TRUE1 (different shell, mechanically incompatible with standard PowerCON) is hot-plug rated and is now preferred for touring/film. Wire colors: IEC Europe = Brown/Blue/Green-Yellow; NEC US = Black/White/Green. Terminals are labelled L/N/PE on the body, not 1/2/3.",
    sources: [
      { label: "Neutrik powerCON Assembly Instruction (BDA 452)", url: "https://www.neutrik.com/media/10217/download/BDA%20452%20V4%20-%20powerCON%20-%20NAC3FCA%20+%20NAC3FCB.pdf" },
      { label: "Neutrik NAC3FCA Product Page", url: "https://www.neutrik.com/en/product/nac3fca" },
    ],
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
