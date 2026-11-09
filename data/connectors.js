// ─── CONNECTOR DATA ──────────────────────────────────────────────────────────

import { RJ45_WIRE_COLORS } from "@/lib/theme";

export const CONNECTORS = {
  xlr3: {
    name: "XLR 3-Pin",
    short: "XLR3",
    type: "circular",
    group: "audio",
    faceGender: "female",
    pins: [
      { id: 1, label: "1", name: "Signal Ground" },
      { id: 2, label: "2", name: "Signal + (Hot)" },
      { id: 3, label: "3", name: "Signal \u2212 (Cold)" },
    ],
    // Cable-shield drain wire (where used) terminates on the connector's metal shell/tab,
    // NOT on a numbered pin. In simpler/cheaper cable construction the shield is bonded
    // to pin 1 inside the connector — that should be modeled as an explicit pin1↔shell
    // jumper at the build level, not by conflating shield into pin 1's label.
    shell: { id: "shell", label: "T", name: "Shell / Tab \u2014 Cable Shield Drain" },
    // Female face view per physical inspection: Pin 2 top-left on female
    // (Pin 2 top-right on male; female is the mirror).
    facePositions: [
      { x: 70, y: 35 },  // pin 1 — top right (female face)
      { x: 30, y: 35 },  // pin 2 — top left (female face)
      { x: 50, y: 68 },  // pin 3 — bottom center
    ],
    radius: 42,
    notch: "top",
    sources: [
      { label: "AES14-1992 (pin 2 hot standard)", url: "https://www.aes.org/publications/standards/search.cfm?docID=36" },
      { label: "Sescom XLR Pin 2 Hot Reference (pin functions; its face drawing is the mirror of the face shown here)", url: "https://www.sescom.com/Portals/0/Documents/3-Pin%20XLR%20Pinouts%20and%20Pin%202%20Hot%20Wiring%20Information.pdf" },
      { label: "Wikimedia Commons — XLR pinouts (female face: 2 top-left, 1 top-right, 3 bottom)", url: "https://commons.wikimedia.org/wiki/File:XLR_pinouts.svg" },
    ],
  },
  xlr5: {
    name: "XLR 5-Pin",
    short: "XLR5",
    type: "circular",
    group: "audio",
    faceGender: "female",
    pins: [
      { id: 1, label: "1", name: "Mic Ground" },
      { id: 2, label: "2", name: "Mic Signal (Hot)" },
      { id: 3, label: "3", name: "Earphone Return (Ground)" },
      { id: 4, label: "4", name: "Left Earphone (Hot)" },
      { id: 5, label: "5", name: "Right Earphone (Hot)" },
    ],
    // Cable shield (where present as a discrete conductor — typical in higher-quality
    // production headset cables like the Telex PH-88R5) terminates on the connector
    // shell/tab, NOT on pin 1. Pin 1 is the dedicated mic-capsule return ("mic signal
    // low" in RTS docs, "Mic Screen" in Clear-Com docs). In cheaper 2-conductor+shield
    // cable construction the shield braid pulls double-duty as pin 1's wire — model
    // that as an explicit pin1↔shell jumper at the build level, not by conflating
    // shield into pin 1's label.
    shell: { id: "shell", label: "T", name: "Shell / Tab \u2014 Cable Shield Drain" },
    // Female face view per Clear-Com XLR-5F diagram (verified against a physical male:
    // Pin 5 is top-right on male → Pin 5 top-left on female face, mirror).
    facePositions: [
      { x: 70, y: 28 },  // pin 1 — top right (female face)
      { x: 76, y: 55 },  // pin 2 — right
      { x: 50, y: 75 },  // pin 3 — bottom center
      { x: 24, y: 55 },  // pin 4 — left
      { x: 30, y: 28 },  // pin 5 — top left (female face)
    ],
    radius: 42,
    notch: "top",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
      { label: "Telex/RTS Pinouts (plsystem.com)", url: "https://www.plsystem.com/pinout1.htm" },
    ],
  },
  xlr4: {
    name: "XLR 4-Pin",
    short: "XLR4",
    type: "circular",
    group: "audio",
    faceGender: "female",
    pins: [
      { id: 1, label: "1", name: "Mic Ground" },
      { id: 2, label: "2", name: "Mic Signal (Hot)" },
      { id: 3, label: "3", name: "Earphone Return (Ground)" },
      { id: 4, label: "4", name: "Earphone Signal (Hot)" },
    ],
    // Cable shield (where present as a discrete conductor) terminates on the connector
    // shell/tab, NOT on pin 1. Pin 1 is the dedicated mic-capsule return. In cheaper
    // 2-conductor+shield cable construction the shield braid pulls double-duty as pin
    // 1's wire — model that as an explicit pin1↔shell jumper at the build level.
    shell: { id: "shell", label: "T", name: "Shell / Tab \u2014 Cable Shield Drain" },
    // Female face view per Clear-Com XLR-4M diagram (rotated to notch-top).
    // Male face: pins go 1→2→3→4 counter-clockwise starting upper-left. Female is mirrored.
    facePositions: [
      { x: 65, y: 32 },  // pin 1 — upper right (female face)
      { x: 65, y: 68 },  // pin 2 — lower right
      { x: 35, y: 68 },  // pin 3 — lower left
      { x: 35, y: 32 },  // pin 4 — upper left
    ],
    radius: 42,
    notch: "top",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
      { label: "Telex BTR-800 Pinouts", url: "https://www.plsystem.com/pinout9.htm" },
      { label: "PinoutGuide.com XLR4", url: "https://pinoutguide.com/Audio-Video-Hardware/xlr4_pinout.shtml" },
    ],
  },
  dt12: {
    name: "DT12 (FK37) \u2014 37 Pin",
    short: "DT12",
    type: "dt12",
    group: "multi",
    // Pin assignments per Clark Wire DT12 pinout (clarkwire.com/dt12-audio-multipin-pinout).
    // Pin 37 is the unused/spare contact.
    pins: [
      { id: 1,  label: "1",  name: "Ch 1 Ground",    ch: 1,  role: "G" },
      { id: 2,  label: "2",  name: "Ch 2 Ground",    ch: 2,  role: "G" },
      { id: 3,  label: "3",  name: "Ch 2 Hot (+)",   ch: 2,  role: "+" },
      { id: 4,  label: "4",  name: "Ch 3 Ground",    ch: 3,  role: "G" },
      { id: 5,  label: "5",  name: "Ch 1 Hot (+)",   ch: 1,  role: "+" },
      { id: 6,  label: "6",  name: "Ch 1 Cold (\u2212)", ch: 1,  role: "\u2212" },
      { id: 7,  label: "7",  name: "Ch 2 Cold (\u2212)", ch: 2,  role: "\u2212" },
      { id: 8,  label: "8",  name: "Ch 3 Hot (+)",   ch: 3,  role: "+" },
      { id: 9,  label: "9",  name: "Ch 3 Cold (\u2212)", ch: 3,  role: "\u2212" },
      { id: 10, label: "10", name: "Ch 4 Ground",    ch: 4,  role: "G" },
      { id: 11, label: "11", name: "Ch 5 Ground",    ch: 5,  role: "G" },
      { id: 12, label: "12", name: "Ch 5 Hot (+)",   ch: 5,  role: "+" },
      { id: 13, label: "13", name: "Ch 6 Ground",    ch: 6,  role: "G" },
      { id: 14, label: "14", name: "Ch 7 Ground",    ch: 7,  role: "G" },
      { id: 15, label: "15", name: "Ch 7 Hot (+)",   ch: 7,  role: "+" },
      { id: 16, label: "16", name: "Ch 4 Hot (+)",   ch: 4,  role: "+" },
      { id: 17, label: "17", name: "Ch 4 Cold (\u2212)", ch: 4,  role: "\u2212" },
      { id: 18, label: "18", name: "Ch 5 Cold (\u2212)", ch: 5,  role: "\u2212" },
      { id: 19, label: "19", name: "Ch 6 Hot (+)",   ch: 6,  role: "+" },
      { id: 20, label: "20", name: "Ch 6 Cold (\u2212)", ch: 6,  role: "\u2212" },
      { id: 21, label: "21", name: "Ch 7 Cold (\u2212)", ch: 7,  role: "\u2212" },
      { id: 22, label: "22", name: "Ch 11 Ground",   ch: 11, role: "G" },
      { id: 23, label: "23", name: "Ch 8 Ground",    ch: 8,  role: "G" },
      { id: 24, label: "24", name: "Ch 8 Hot (+)",   ch: 8,  role: "+" },
      { id: 25, label: "25", name: "Ch 9 Ground",    ch: 9,  role: "G" },
      { id: 26, label: "26", name: "Ch 10 Ground",   ch: 10, role: "G" },
      { id: 27, label: "27", name: "Ch 10 Hot (+)",  ch: 10, role: "+" },
      { id: 28, label: "28", name: "Ch 11 Hot (+)",  ch: 11, role: "+" },
      { id: 29, label: "29", name: "Ch 8 Cold (\u2212)", ch: 8,  role: "\u2212" },
      { id: 30, label: "30", name: "Ch 9 Hot (+)",   ch: 9,  role: "+" },
      { id: 31, label: "31", name: "Ch 9 Cold (\u2212)", ch: 9,  role: "\u2212" },
      { id: 32, label: "32", name: "Ch 10 Cold (\u2212)", ch: 10, role: "\u2212" },
      { id: 33, label: "33", name: "Ch 11 Cold (\u2212)", ch: 11, role: "\u2212" },
      { id: 34, label: "34", name: "Ch 12 Ground",   ch: 12, role: "G" },
      { id: 35, label: "35", name: "Ch 12 Hot (+)",  ch: 12, role: "+" },
      { id: 36, label: "36", name: "Ch 12 Cold (\u2212)", ch: 12, role: "\u2212" },
      { id: 37, label: "37", name: "Spare (unused)" },
    ],
    facePositions: (() => {
      // FK37 DT12 female-face view (mirror of Clark Wire's female-rear diagram).
      // 3-4-4-1 channel grid per Clark Wire. Pin 22 (Ch11 Gnd) sits on the right
      // edge between rows 2 and 3; pin 37 (spare) sits to the right of Ch12.
      const pts = {};
      const s = 3.6; // pin spacing within channel triangle
      const grid = [
        { ch: 1,  x: 25, y: 20 }, { ch: 2,  x: 50, y: 20 }, { ch: 3,  x: 75, y: 20 },
        { ch: 4,  x: 18, y: 42 }, { ch: 5,  x: 39, y: 42 }, { ch: 6,  x: 60, y: 42 }, { ch: 7,  x: 81, y: 42 },
        { ch: 8,  x: 18, y: 64 }, { ch: 9,  x: 39, y: 64 }, { ch: 10, x: 60, y: 64 }, { ch: 11, x: 81, y: 64 },
        { ch: 12, x: 39, y: 86 },
      ];
      // [Gnd, Hot, Cold] pin IDs per channel (Clark Wire table).
      const chPins = {
        1:  [1,  5,  6],  2:  [2,  3,  7],  3:  [4,  8,  9],
        4:  [10, 16, 17], 5:  [11, 12, 18], 6:  [13, 19, 20], 7: [14, 15, 21],
        8:  [23, 24, 29], 9:  [25, 30, 31], 10: [26, 27, 32], 11: [22, 28, 33],
        12: [34, 35, 36],
      };
      grid.forEach(({ ch, x, y }) => {
        const [gnd, hi, lo] = chPins[ch];
        // Triangle: Gnd top-left, Hot top-right, Cold bottom-center
        pts[gnd] = { x: x - s, y: y - s * 0.6 };
        pts[hi]  = { x: x + s, y: y - s * 0.6 };
        pts[lo]  = { x: x, y: y + s * 0.8 };
      });
      // Pin 22 (Ch11 Gnd) is physically offset to the right edge of the face,
      // not inside the Ch11 triangle. Place it there and leave Ch11 as a pair.
      pts[22] = { x: 93, y: 52 };
      // Re-center Ch11 triangle as a 2-pin pair since its Gnd is offset.
      pts[28] = { x: 81 - s, y: 64 - s * 0.6 };
      pts[33] = { x: 81 + s, y: 64 - s * 0.6 };
      // Pin 37 = spare, offset right of Ch12
      pts[37] = { x: 62, y: 86 };
      const arr = [];
      for (let i = 1; i <= 37; i++) arr.push(pts[i] || { x: 50, y: 50 });
      return arr;
    })(),
    radius: 48,
    notch: "top",
    sources: [
      { label: "Clark Wire DT12 Audio Multipin Pinout", url: "https://www.clarkwire.com/dt12-audio-multipin-pinout" },
      { label: "Whirlwind DT12 Series", url: "https://www.whirlwindusa.com/products/ac-power-dt-12-dt12-series-broadcast-multipin-connectors" },
    ],
  },
  trs: {
    name: '1/4" TRS',
    short: "TRS",
    type: "trs",
    group: "audio",
    pins: [
      { id: 1, label: "T", name: "Tip \u2014 Signal + (Hot)" },
      { id: 2, label: "R", name: "Ring \u2014 Signal \u2212 (Cold)" },
      { id: 3, label: "S", name: "Sleeve \u2014 Ground / Shield" },
    ],
  },
  rj45: {
    name: "RJ45",
    short: "RJ45",
    type: "rj45",
    group: "data",
    pins: [
      { id: 1, label: "1", name: "Pin 1 \u2014 White/Orange" },
      { id: 2, label: "2", name: "Pin 2 \u2014 Orange" },
      { id: 3, label: "3", name: "Pin 3 \u2014 White/Green" },
      { id: 4, label: "4", name: "Pin 4 \u2014 Blue" },
      { id: 5, label: "5", name: "Pin 5 \u2014 White/Blue" },
      { id: 6, label: "6", name: "Pin 6 \u2014 Green" },
      { id: 7, label: "7", name: "Pin 7 \u2014 White/Brown" },
      { id: 8, label: "8", name: "Pin 8 \u2014 Brown" },
    ],
    // Derived from RJ45_WIRE_COLORS (T568B) — single source of truth in theme.js
    colors: Array.from({ length: 8 }, (_, i) => RJ45_WIRE_COLORS[i + 1].color),
    stripes: Array.from({ length: 8 }, (_, i) => RJ45_WIRE_COLORS[i + 1].hasStripe || false),
    stripeColors: Array.from({ length: 8 }, (_, i) => RJ45_WIRE_COLORS[i + 1].stripe || null),
  },
  rj12: {
    name: "RJ12 (6P6C)",
    short: "RJ12",
    type: "rj12",
    group: "data",
    pins: [
      { id: 1, label: "1", name: "Pin 1 \u2014 White (T3)" },
      { id: 2, label: "2", name: "Pin 2 \u2014 Black (T2)" },
      { id: 3, label: "3", name: "Pin 3 \u2014 Red (R1)" },
      { id: 4, label: "4", name: "Pin 4 \u2014 Green (T1)" },
      { id: 5, label: "5", name: "Pin 5 \u2014 Yellow (R2)" },
      { id: 6, label: "6", name: "Pin 6 \u2014 Blue (R3)" },
    ],
    sources: [
      { label: "Registered jack \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Registered_jack" },
      { label: "Pshine Cable \u2014 RJ12 6P6C Color Order", url: "https://www.pshinecable.com/article/how-to-connect-the-network-cables-and-what-is-their-color-order.html" },
      { label: "Telex/RTS RJ12 Pinouts (plsystem.com)", url: "https://www.plsystem.com/pinout1.htm" },
    ],
  },
  bnc: {
    name: "BNC",
    short: "BNC",
    type: "coax",
    group: "video",
    pins: [
      { id: 1, label: "C", name: "Center \u2014 Signal (75\u03A9 broadcast)" },
      { id: 2, label: "S", name: "Shell \u2014 Ground / Shield (bayonet lug)" },
    ],
    sources: [
      { label: "BNC connector \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/BNC_connector" },
      { label: "SMPTE ST 292 (HD-SDI over 75\u03A9 BNC)", url: "https://pub.smpte.org/doc/292-1/" },
    ],
  },
  triax: {
    name: "Triax",
    short: "Triax",
    type: "coax",
    group: "video",
    pins: [
      { id: 1, label: "C", name: "Center \u2014 Signal (video/data, modulated) + camera DC supply (Sony CCU: up to 180 VDC)" },
      { id: 2, label: "I", name: "Inner Shield \u2014 Signal / DC return (centre + inner shield form the 75 \u03a9 coax)" },
      { id: 3, label: "O", name: "Outer Shield \u2014 Protective earth / housing (no supply voltage)" },
    ],
    sources: [
      { label: "Triaxial cable \u2014 Wikipedia (core = power + signal, inner screen = return, outer sheath = protective earth)", url: "https://en.wikipedia.org/wiki/Triaxial_cable" },
      { label: "Sony HXCU-100 Operating Instructions p.8 \u2014 180 V DC camera supply over the triax", url: "https://www.manualslib.com/manual/969011/Sony-Hxcu-100.html?page=8" },
      { label: "Canford LEMO/Triax/HDTV Fibre Connector Guide (PDF)", url: "https://www.canford.co.uk/ProductResources/resources/Reference/Lemo%20and%20Fischer%20Triax%20and%20HDTV%20Fibre%20connectors%20guide%20IBC%20lr%20Connector%20Guide.pdf" },
    ],
  },
  de9: (() => {
    const variants = [
      {
        id: "rs232",
        name: "RS-232 (EIA-574, PC side)",
        default: true,
        description: "PC/DTE-side RS-232 on a 9-pin D-sub. Single-ended: every signal is measured against pin 5, so a cable without pin 5 (or another ground) cannot work.",
        pins: [
          { id: 1, label: "1", name: "Pin 1 \u2014 DCD (Data Carrier Detect)" },
          { id: 2, label: "2", name: "Pin 2 \u2014 RxD (Receive)" },
          { id: 3, label: "3", name: "Pin 3 \u2014 TxD (Transmit)" },
          { id: 4, label: "4", name: "Pin 4 \u2014 DTR (Data Terminal Ready)" },
          { id: 5, label: "5", name: "Pin 5 \u2014 GND (Signal Ground)" },
          { id: 6, label: "6", name: "Pin 6 \u2014 DSR (Data Set Ready)" },
          { id: 7, label: "7", name: "Pin 7 \u2014 RTS (Request to Send)" },
          { id: 8, label: "8", name: "Pin 8 \u2014 CTS (Clear to Send)" },
          { id: 9, label: "9", name: "Pin 9 \u2014 RI (Ring Indicator)" },
        ],
        sources: [
          { label: "D-subminiature \u2014 Wikipedia (DE-9 naming)", url: "https://en.wikipedia.org/wiki/D-subminiature" },
          { label: "TI SNLA039 AN-917 \u2014 EIA/TIA-574 DB-9 (Fig. 7)", url: "https://www.ti.com/lit/an/snla039/snla039.pdf" },
        ],
      },
      {
        id: "sony_rs422",
        name: "RS-422 \u2014 Sony 9-pin / SMPTE 207M (Kalypso serial ports)",
        description: "Differential pairs: RX on pins 2/7, TX on pins 3/8 (controller side; the controlled device sees them reversed). Pins 1/4/9 chassis ground, 6 common, 5 not used.",
        pins: [
          { id: 1, label: "1", name: "Pin 1 \u2014 Chassis Ground" },
          { id: 2, label: "2", name: "Pin 2 \u2014 RX\u2212 (Receive A) \u2014 TX on the controlled device" },
          { id: 3, label: "3", name: "Pin 3 \u2014 TX+ (Transmit B) \u2014 RX on the controlled device" },
          { id: 4, label: "4", name: "Pin 4 \u2014 Chassis Ground" },
          { id: 5, label: "5", name: "Pin 5 \u2014 Not used" },
          { id: 6, label: "6", name: "Pin 6 \u2014 Common (signal ground)" },
          { id: 7, label: "7", name: "Pin 7 \u2014 RX+ (Receive B)" },
          { id: 8, label: "8", name: "Pin 8 \u2014 TX\u2212 (Transmit A)" },
          { id: 9, label: "9", name: "Pin 9 \u2014 Chassis Ground" },
        ],
        sources: [
          { label: "Grass Valley Kalypso HD/Duo Installation & Service Manual v15.0 p.68 \u2014 Serial (RS-422) port", url: "https://www.yumpu.com/en/document/view/11330522/kalypso-version-150-installation-service-manual-grass-valley/68" },
          { label: "9-Pin Protocol \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/9-Pin_Protocol" },
        ],
      },
      {
        id: "rts_keypanel",
        name: "RTS keypanel matrix line (KP-32 DB9S)",
        description: "RS-485 keypanel data on 1/2, keypanel audio OUT to the matrix on 4/5, audio IN from the matrix on 8/7. Used by the Adam KP shell adapters. Pins 3/6/9 follow the KP-32 data sheet; the older KP98-7 table (plsystem.com) has 3 = data ground, 6 = audio ground, 9 = NC.",
        pins: [
          { id: 1, label: "1", name: "Pin 1 \u2014 Data + (RS-485 keypanel data)" },
          { id: 2, label: "2", name: "Pin 2 \u2014 Data \u2212 (RS-485 keypanel data)" },
          { id: 3, label: "3", name: "Pin 3 \u2014 Audio in (from matrix) shield" },
          { id: 4, label: "4", name: "Pin 4 \u2014 Audio out (to matrix) +" },
          { id: 5, label: "5", name: "Pin 5 \u2014 Audio out (to matrix) \u2212" },
          { id: 6, label: "6", name: "Pin 6 \u2014 Data shield" },
          { id: 7, label: "7", name: "Pin 7 \u2014 Audio in (from matrix) \u2212" },
          { id: 8, label: "8", name: "Pin 8 \u2014 Audio in (from matrix) +" },
          { id: 9, label: "9", name: "Pin 9 \u2014 Audio out (to matrix) shield" },
        ],
        sources: [
          { label: "RTS/Bosch KP-32 Technical Data Sheet p.2 \u2014 Connectors", url: "https://products.telex.com/download/98171" },
          { label: "Telex/RTS pinouts (plsystem.com)", url: "https://www.plsystem.com/pinout1.htm" },
        ],
      },
    ];
    const defaultVariant = variants.find(v => v.default) || variants[0];
    return {
      name: "DE-9",
      short: "DE-9",
      type: "dsub",
      group: "data",
      faceGender: "male",
      topRow: [1, 2, 3, 4, 5],
      botRow: [6, 7, 8, 9],
      pins: defaultVariant.pins,
      sources: defaultVariant.sources,
      variants,
    };
  })(),
  db25: (() => {
    const variants = [
      {
        id: "tascam_analog",
        name: "Tascam Analog (AES59)",
        default: true,
        description: "8-channel balanced analog audio breakout. The broadcast/pro-audio standard.",
        pins: [
          { id: 1,  label: "1",  name: "Pin 1 \u2014 Ch 8 Hot (+)" },
          { id: 2,  label: "2",  name: "Pin 2 \u2014 Ch 8 Shield (GND)" },
          { id: 3,  label: "3",  name: "Pin 3 \u2014 Ch 7 Cold (\u2212)" },
          { id: 4,  label: "4",  name: "Pin 4 \u2014 Ch 6 Hot (+)" },
          { id: 5,  label: "5",  name: "Pin 5 \u2014 Ch 6 Shield (GND)" },
          { id: 6,  label: "6",  name: "Pin 6 \u2014 Ch 5 Cold (\u2212)" },
          { id: 7,  label: "7",  name: "Pin 7 \u2014 Ch 4 Hot (+)" },
          { id: 8,  label: "8",  name: "Pin 8 \u2014 Ch 4 Shield (GND)" },
          { id: 9,  label: "9",  name: "Pin 9 \u2014 Ch 3 Cold (\u2212)" },
          { id: 10, label: "10", name: "Pin 10 \u2014 Ch 2 Hot (+)" },
          { id: 11, label: "11", name: "Pin 11 \u2014 Ch 2 Shield (GND)" },
          { id: 12, label: "12", name: "Pin 12 \u2014 Ch 1 Cold (\u2212)" },
          { id: 13, label: "13", name: "Pin 13 \u2014 NC" },
          { id: 14, label: "14", name: "Pin 14 \u2014 Ch 8 Cold (\u2212)" },
          { id: 15, label: "15", name: "Pin 15 \u2014 Ch 7 Hot (+)" },
          { id: 16, label: "16", name: "Pin 16 \u2014 Ch 7 Shield (GND)" },
          { id: 17, label: "17", name: "Pin 17 \u2014 Ch 6 Cold (\u2212)" },
          { id: 18, label: "18", name: "Pin 18 \u2014 Ch 5 Hot (+)" },
          { id: 19, label: "19", name: "Pin 19 \u2014 Ch 5 Shield (GND)" },
          { id: 20, label: "20", name: "Pin 20 \u2014 Ch 4 Cold (\u2212)" },
          { id: 21, label: "21", name: "Pin 21 \u2014 Ch 3 Hot (+)" },
          { id: 22, label: "22", name: "Pin 22 \u2014 Ch 3 Shield (GND)" },
          { id: 23, label: "23", name: "Pin 23 \u2014 Ch 2 Cold (\u2212)" },
          { id: 24, label: "24", name: "Pin 24 \u2014 Ch 1 Hot (+)" },
          { id: 25, label: "25", name: "Pin 25 \u2014 Ch 1 Shield (GND)" },
        ],
        sources: [
          { label: "TASCAM DB-25 Pinout Standard (PDF)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
          { label: "AES59-2012 Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=92" },
          { label: "Hosa \"DB-25 Enigma\" Explainer", url: "https://hosatech.com/press-release/db-25-enigma/" },
          { label: "Aviom DB25 Pinout Reference (PDF)", url: "https://www.aviom.com/library/Technical-Resources/75_DB25-Pinout-Information.pdf" },
        ],
      },
      {
        id: "tascam_aesebu",
        name: "Tascam AES/EBU",
        description: "4 AES3 input pairs + 4 AES3 output pairs. Same physical pinout as Tascam analog, re-labeled: analog Ch 1\u20134 = AES IN 1\u20134, analog Ch 5\u20138 = AES OUT 1\u20134. DB25\u2194DB25 cables need a crossover (IN end meets OUT end).",
        pins: [
          { id: 1,  label: "1",  name: "Pin 1 \u2014 AES OUT 7/8 Hot (+)" },
          { id: 2,  label: "2",  name: "Pin 2 \u2014 AES OUT 7/8 Shield (GND)" },
          { id: 3,  label: "3",  name: "Pin 3 \u2014 AES OUT 5/6 Cold (\u2212)" },
          { id: 4,  label: "4",  name: "Pin 4 \u2014 AES OUT 3/4 Hot (+)" },
          { id: 5,  label: "5",  name: "Pin 5 \u2014 AES OUT 3/4 Shield (GND)" },
          { id: 6,  label: "6",  name: "Pin 6 \u2014 AES OUT 1/2 Cold (\u2212)" },
          { id: 7,  label: "7",  name: "Pin 7 \u2014 AES IN 7/8 Hot (+)" },
          { id: 8,  label: "8",  name: "Pin 8 \u2014 AES IN 7/8 Shield (GND)" },
          { id: 9,  label: "9",  name: "Pin 9 \u2014 AES IN 5/6 Cold (\u2212)" },
          { id: 10, label: "10", name: "Pin 10 \u2014 AES IN 3/4 Hot (+)" },
          { id: 11, label: "11", name: "Pin 11 \u2014 AES IN 3/4 Shield (GND)" },
          { id: 12, label: "12", name: "Pin 12 \u2014 AES IN 1/2 Cold (\u2212)" },
          { id: 13, label: "13", name: "Pin 13 \u2014 NC" },
          { id: 14, label: "14", name: "Pin 14 \u2014 AES OUT 7/8 Cold (\u2212)" },
          { id: 15, label: "15", name: "Pin 15 \u2014 AES OUT 5/6 Hot (+)" },
          { id: 16, label: "16", name: "Pin 16 \u2014 AES OUT 5/6 Shield (GND)" },
          { id: 17, label: "17", name: "Pin 17 \u2014 AES OUT 3/4 Cold (\u2212)" },
          { id: 18, label: "18", name: "Pin 18 \u2014 AES OUT 1/2 Hot (+)" },
          { id: 19, label: "19", name: "Pin 19 \u2014 AES OUT 1/2 Shield (GND)" },
          { id: 20, label: "20", name: "Pin 20 \u2014 AES IN 7/8 Cold (\u2212)" },
          { id: 21, label: "21", name: "Pin 21 \u2014 AES IN 5/6 Hot (+)" },
          { id: 22, label: "22", name: "Pin 22 \u2014 AES IN 5/6 Shield (GND)" },
          { id: 23, label: "23", name: "Pin 23 \u2014 AES IN 3/4 Cold (\u2212)" },
          { id: 24, label: "24", name: "Pin 24 \u2014 AES IN 1/2 Hot (+)" },
          { id: 25, label: "25", name: "Pin 25 \u2014 AES IN 1/2 Shield (GND)" },
        ],
        sources: [
          { label: "TASCAM DB-25 Pinout Standard (PDF)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
          { label: "Aviom DB25 Pinout Reference (PDF)", url: "https://www.aviom.com/library/Technical-Resources/75_DB25-Pinout-Information.pdf" },
        ],
      },
      {
        id: "yamaha_aesebu",
        name: "Yamaha AES/EBU",
        description: "4 AES3 input pairs + 4 AES3 output pairs. Different pin layout from Tascam \u2014 all Hots on pins 1\u20138, all Colds on pins 14\u201321, grounds clustered at 10/12/13/22\u201325. Used by Yamaha YGDAI cards (MY8-AE series), Apogee, and Mackie.",
        pins: [
          { id: 1,  label: "1",  name: "Pin 1 \u2014 AES IN 1/2 Hot (+)" },
          { id: 2,  label: "2",  name: "Pin 2 \u2014 AES IN 3/4 Hot (+)" },
          { id: 3,  label: "3",  name: "Pin 3 \u2014 AES IN 5/6 Hot (+)" },
          { id: 4,  label: "4",  name: "Pin 4 \u2014 AES IN 7/8 Hot (+)" },
          { id: 5,  label: "5",  name: "Pin 5 \u2014 AES OUT 1/2 Hot (+)" },
          { id: 6,  label: "6",  name: "Pin 6 \u2014 AES OUT 3/4 Hot (+)" },
          { id: 7,  label: "7",  name: "Pin 7 \u2014 AES OUT 5/6 Hot (+)" },
          { id: 8,  label: "8",  name: "Pin 8 \u2014 AES OUT 7/8 Hot (+)" },
          { id: 9,  label: "9",  name: "Pin 9 \u2014 NC" },
          { id: 10, label: "10", name: "Pin 10 \u2014 GND" },
          { id: 11, label: "11", name: "Pin 11 \u2014 NC" },
          { id: 12, label: "12", name: "Pin 12 \u2014 GND" },
          { id: 13, label: "13", name: "Pin 13 \u2014 GND" },
          { id: 14, label: "14", name: "Pin 14 \u2014 AES IN 1/2 Cold (\u2212)" },
          { id: 15, label: "15", name: "Pin 15 \u2014 AES IN 3/4 Cold (\u2212)" },
          { id: 16, label: "16", name: "Pin 16 \u2014 AES IN 5/6 Cold (\u2212)" },
          { id: 17, label: "17", name: "Pin 17 \u2014 AES IN 7/8 Cold (\u2212)" },
          { id: 18, label: "18", name: "Pin 18 \u2014 AES OUT 1/2 Cold (\u2212)" },
          { id: 19, label: "19", name: "Pin 19 \u2014 AES OUT 3/4 Cold (\u2212)" },
          { id: 20, label: "20", name: "Pin 20 \u2014 AES OUT 5/6 Cold (\u2212)" },
          { id: 21, label: "21", name: "Pin 21 \u2014 AES OUT 7/8 Cold (\u2212)" },
          { id: 22, label: "22", name: "Pin 22 \u2014 GND" },
          { id: 23, label: "23", name: "Pin 23 \u2014 GND" },
          { id: 24, label: "24", name: "Pin 24 \u2014 GND" },
          { id: 25, label: "25", name: "Pin 25 \u2014 GND" },
        ],
        sources: [
          { label: "Aviom DB25 Pinout Reference (PDF)", url: "https://www.aviom.com/library/Technical-Resources/75_DB25-Pinout-Information.pdf" },
          { label: "Yamaha AES/EBU YGDAI Card FAQ", url: "https://faq.yamaha.com/usa/s/article/U0001834" },
        ],
      },
      {
        id: "rs232",
        name: "RS-232 (EIA-232)",
        description: "Legacy serial port on a 25-pin D-sub (DTE naming: pin 2 TxD, 3 RxD, 7 Signal Ground). Same shell as the Tascam audio snake \u2014 label cables by use.",
        pins: [
          { id: 1,  label: "1",  name: "Pin 1 \u2014 Protective Ground (shield)" },
          { id: 2,  label: "2",  name: "Pin 2 \u2014 TxD (Transmitted Data)" },
          { id: 3,  label: "3",  name: "Pin 3 \u2014 RxD (Received Data)" },
          { id: 4,  label: "4",  name: "Pin 4 \u2014 RTS (Request to Send)" },
          { id: 5,  label: "5",  name: "Pin 5 \u2014 CTS (Clear to Send)" },
          { id: 6,  label: "6",  name: "Pin 6 \u2014 DSR (Data Set Ready)" },
          { id: 7,  label: "7",  name: "Pin 7 \u2014 Signal Ground" },
          { id: 8,  label: "8",  name: "Pin 8 \u2014 DCD (Data Carrier Detect)" },
          { id: 9,  label: "9",  name: "Pin 9 \u2014 NC (unused in a 9-wire link)" },
          { id: 10,  label: "10",  name: "Pin 10 \u2014 NC (unused in a 9-wire link)" },
          { id: 11,  label: "11",  name: "Pin 11 \u2014 NC (unused in a 9-wire link)" },
          { id: 12,  label: "12",  name: "Pin 12 \u2014 NC (unused in a 9-wire link)" },
          { id: 13,  label: "13",  name: "Pin 13 \u2014 NC (unused in a 9-wire link)" },
          { id: 14,  label: "14",  name: "Pin 14 \u2014 NC (unused in a 9-wire link)" },
          { id: 15,  label: "15",  name: "Pin 15 \u2014 NC (unused in a 9-wire link)" },
          { id: 16,  label: "16",  name: "Pin 16 \u2014 NC (unused in a 9-wire link)" },
          { id: 17,  label: "17",  name: "Pin 17 \u2014 NC (unused in a 9-wire link)" },
          { id: 18,  label: "18",  name: "Pin 18 \u2014 NC (unused in a 9-wire link)" },
          { id: 19,  label: "19",  name: "Pin 19 \u2014 NC (unused in a 9-wire link)" },
          { id: 20,  label: "20",  name: "Pin 20 \u2014 DTR (Data Terminal Ready)" },
          { id: 21,  label: "21",  name: "Pin 21 \u2014 NC (unused in a 9-wire link)" },
          { id: 22,  label: "22",  name: "Pin 22 \u2014 RI (Ring Indicator)" },
          { id: 23,  label: "23",  name: "Pin 23 \u2014 NC (unused in a 9-wire link)" },
          { id: 24,  label: "24",  name: "Pin 24 \u2014 NC (unused in a 9-wire link)" },
          { id: 25,  label: "25",  name: "Pin 25 \u2014 NC (unused in a 9-wire link)" },
        ],
        sources: [
          { label: "TI SNLA039 AN-917 \u2014 Popular Connector Pin Assignments (RS-232 DB-25, Fig. 1)", url: "https://www.ti.com/lit/an/snla039/snla039.pdf" },
        ],
      },
    ];
    const defaultVariant = variants.find(v => v.default) || variants[0];
    return {
      name: "DB25",
      short: "DB25",
      type: "dsub",
      group: "data",
      faceGender: "male",
      topRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      botRow: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      // Top-level pins/sources mirror the default variant so builds.js and
      // non-variant-aware consumers keep working without changes.
      pins: defaultVariant.pins,
      sources: defaultVariant.sources,
      variants,
    };
  })(),
  speakon: {
    name: "Speakon NL4",
    short: "NL4",
    type: "speakon",
    group: "audio",
    pins: [
      { id: 1, label: "1+", name: "1+ \u2014 Speaker + (Channel 1)" },
      { id: 2, label: "1\u2212", name: "1\u2212 \u2014 Speaker \u2212 (Channel 1)" },
      { id: 3, label: "2+", name: "2+ \u2014 Speaker + (Channel 2)" },
      { id: 4, label: "2\u2212", name: "2\u2212 \u2014 Speaker \u2212 (Channel 2)" },
    ],
    // Diamond layout per Neutrik: 1+ top, 1− left, 2+ bottom, 2− right.
    // Channel 1 pins on the vertical/left axis, Channel 2 pins on the opposite.
    facePositions: [
      { x: 50, y: 24 },  // pin 1 (1+) — top
      { x: 24, y: 50 },  // pin 2 (1−) — left
      { x: 50, y: 76 },  // pin 3 (2+) — bottom
      { x: 76, y: 50 },  // pin 4 (2−) — right
    ],
    radius: 42,
    sources: [
      { label: "Neutrik Speakon Wiring Suggestion (PDF)", url: "https://www.neutrik.com/media/8027/download/speakon-wiring-suggestion.pdf" },
    ],
  },
  ts: {
    name: '1/4" TS (Mono)',
    short: "TS",
    type: "ts",
    group: "audio",
    pins: [
      { id: 1, label: "T", name: "Tip \u2014 Signal" },
      { id: 2, label: "S", name: "Sleeve \u2014 Ground" },
    ],
  },
  mini_trs: {
    name: "3.5mm TRS",
    short: "3.5mm",
    type: "mini_trs",
    group: "audio",
    pins: [
      { id: 1, label: "T", name: "Tip \u2014 Signal + (Left / Hot)" },
      { id: 2, label: "R", name: "Ring \u2014 Signal \u2212 (Right / Cold)" },
      { id: 3, label: "S", name: "Sleeve \u2014 Ground" },
    ],
  },
  mini_trrs: {
    name: "3.5mm TRRS",
    short: "TRRS",
    type: "mini_trrs",
    group: "audio",
    pins: [
      { id: 1, label: "T", name: "Tip \u2014 Left Audio" },
      { id: 2, label: "R1", name: "Ring 1 \u2014 Right Audio" },
      { id: 3, label: "R2", name: "Ring 2 \u2014 Ground (CTIA)" },
      { id: 4, label: "S", name: "Sleeve \u2014 Microphone (CTIA)" },
    ],
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec (LRGM)", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "Audio-Technica CTIA/OMTP Compatibility Note", url: "https://www.audio-technica.com/en-gb/support/why-audio-technica-headsets-wont-work-correctly-with-some-older-devices" },
      { label: "Wikipedia — Phone connector (audio)", url: "https://en.wikipedia.org/wiki/Phone_connector_(audio)" },
    ],
  },
  rca: {
    name: "RCA",
    short: "RCA",
    type: "coax",
    group: "other",
    pins: [
      { id: 1, label: "C", name: "Center \u2014 Signal (audio / composite video / S/PDIF)" },
      { id: 2, label: "S", name: "Shell \u2014 Ground / Shield" },
    ],
    sources: [
      { label: "RCA connector \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/RCA_connector" },
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  powercon: {
    name: "PowerCON",
    short: "PCON",
    type: "powercon",
    group: "other",
    pins: [
      { id: 1, label: "L", name: "Line (Hot) \u2014 Brown (IEC) / Black (US NEC)" },
      { id: 2, label: "N", name: "Neutral \u2014 Blue (IEC) / White (US NEC)" },
      { id: 3, label: "PE", name: "Protective Earth \u2014 Green/Yellow (IEC) / Green (US NEC)" },
    ],
    facePositions: [
      { x: 35, y: 35 },
      { x: 65, y: 35 },
      { x: 50, y: 68 },
    ],
    radius: 42,
    sources: [
      { label: "Neutrik powerCON Assembly Instruction (BDA 452)", url: "https://www.neutrik.com/media/10217/download/BDA%20452%20V4%20-%20powerCON%20-%20NAC3FCA%20+%20NAC3FCB.pdf" },
      { label: "Neutrik NAC3FCA Product Page (Power IN, Blue)", url: "https://www.neutrik.com/en/product/nac3fca" },
      { label: "Neutrik NAC3FCB Product Page (Power OUT, Grey)", url: "https://www.neutrik.com/en/product/nac3fcb" },
    ],
  },
};
