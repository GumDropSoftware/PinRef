// ─── CONNECTOR DATA ──────────────────────────────────────────────────────────

import { RJ45_WIRE_COLORS } from "@/lib/theme";

export const CONNECTORS = {
  xlr3: {
    name: "XLR 3-Pin",
    short: "XLR3",
    type: "circular",
    group: "audio",
    pins: [
      { id: 1, label: "1", name: "Ground / Shield" },
      { id: 2, label: "2", name: "Signal + (Hot)" },
      { id: 3, label: "3", name: "Signal \u2212 (Cold)" },
    ],
    facePositions: [
      { x: 30, y: 35 },  // pin 1 — top left (near notch)
      { x: 70, y: 35 },  // pin 2 — top right (notch side)
      { x: 50, y: 68 },  // pin 3 — bottom center
    ],
    radius: 42,
    notch: "top",
    sources: [
      { label: "AES14-1992 (pin 2 hot standard)", url: "https://www.aes.org/publications/standards/search.cfm?docID=36" },
      { label: "Sescom XLR Pin 2 Hot Reference", url: "https://www.sescom.com/Portals/0/Documents/3-Pin%20XLR%20Pinouts%20and%20Pin%202%20Hot%20Wiring%20Information.pdf" },
    ],
  },
  xlr5: {
    name: "XLR 5-Pin",
    short: "XLR5",
    type: "circular",
    group: "audio",
    pins: [
      { id: 1, label: "1", name: "Ground / Shield" },
      { id: 2, label: "2", name: "Mic Signal (Hot)" },
      { id: 3, label: "3", name: "Earphone Return (Ground)" },
      { id: 4, label: "4", name: "Left Earphone (Hot)" },
      { id: 5, label: "5", name: "Right Earphone (Hot)" },
    ],
    facePositions: [
      { x: 30, y: 28 },  // pin 1 — top left (near notch)
      { x: 24, y: 55 },  // pin 2 — left
      { x: 50, y: 75 },  // pin 3 — bottom center
      { x: 76, y: 55 },  // pin 4 — right
      { x: 70, y: 28 },  // pin 5 — top right
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
    pins: [
      { id: 1, label: "1", name: "Mic Ground / Shield" },
      { id: 2, label: "2", name: "Mic Signal (Hot)" },
      { id: 3, label: "3", name: "Earphone Return (Ground)" },
      { id: 4, label: "4", name: "Earphone Signal (Hot)" },
    ],
    facePositions: [
      { x: 35, y: 68 },
      { x: 35, y: 32 },
      { x: 65, y: 32 },
      { x: 65, y: 68 },
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
    pins: [
      { id: 1, label: "1", name: "Ch 1 High (+)", ch: 1, role: "+" },
      { id: 2, label: "2", name: "Ch 1 Ground", ch: 1, role: "G" },
      { id: 3, label: "3", name: "Ch 2 High (+)", ch: 2, role: "+" },
      { id: 4, label: "4", name: "Ch 2 Ground", ch: 2, role: "G" },
      { id: 5, label: "5", name: "Ch 1 Low (\u2212)", ch: 1, role: "\u2212" },
      { id: 6, label: "6", name: "Ch 2 Low (\u2212)", ch: 2, role: "\u2212" },
      { id: 7, label: "7", name: "Ch 3 Ground", ch: 3, role: "G" },
      { id: 8, label: "8", name: "Ch 3 High (+)", ch: 3, role: "+" },
      { id: 9, label: "9", name: "Ch 3 Low (\u2212)", ch: 3, role: "\u2212" },
      { id: 10, label: "10", name: "Ch 4 High (+)", ch: 4, role: "+" },
      { id: 11, label: "11", name: "Ch 4 Ground", ch: 4, role: "G" },
      { id: 12, label: "12", name: "Ch 4 Low (\u2212)", ch: 4, role: "\u2212" },
      { id: 13, label: "13", name: "Ch 5 Ground", ch: 5, role: "G" },
      { id: 14, label: "14", name: "Ch 5 High (+)", ch: 5, role: "+" },
      { id: 15, label: "15", name: "Ch 5 Low (\u2212)", ch: 5, role: "\u2212" },
      { id: 16, label: "16", name: "Ch 6 High (+)", ch: 6, role: "+" },
      { id: 17, label: "17", name: "Ch 6 Ground", ch: 6, role: "G" },
      { id: 18, label: "18", name: "Ch 6 Low (\u2212)", ch: 6, role: "\u2212" },
      { id: 19, label: "19", name: "Ch 7 High (+)", ch: 7, role: "+" },
      { id: 20, label: "20", name: "Ch 7 Ground", ch: 7, role: "G" },
      { id: 21, label: "21", name: "Ch 7 Low (\u2212)", ch: 7, role: "\u2212" },
      { id: 22, label: "22", name: "Spare (unused)" },
      { id: 23, label: "23", name: "Ch 8 High (+)", ch: 8, role: "+" },
      { id: 24, label: "24", name: "Ch 8 Ground", ch: 8, role: "G" },
      { id: 25, label: "25", name: "Ch 8 Low (\u2212)", ch: 8, role: "\u2212" },
      { id: 26, label: "26", name: "Ch 9 Ground", ch: 9, role: "G" },
      { id: 27, label: "27", name: "Ch 9 High (+)", ch: 9, role: "+" },
      { id: 28, label: "28", name: "Ch 9 Low (\u2212)", ch: 9, role: "\u2212" },
      { id: 29, label: "29", name: "Ch 10 High (+)", ch: 10, role: "+" },
      { id: 30, label: "30", name: "Ch 10 Ground", ch: 10, role: "G" },
      { id: 31, label: "31", name: "Ch 10 Low (\u2212)", ch: 10, role: "\u2212" },
      { id: 32, label: "32", name: "Ch 11 Ground", ch: 11, role: "G" },
      { id: 33, label: "33", name: "Ch 11 High (+)", ch: 11, role: "+" },
      { id: 34, label: "34", name: "Ch 11 Low (\u2212)", ch: 11, role: "\u2212" },
      { id: 35, label: "35", name: "Ch 12 High (+)", ch: 12, role: "+" },
      { id: 36, label: "36", name: "Ch 12 Ground", ch: 12, role: "G" },
      { id: 37, label: "37", name: "Ch 12 Low (\u2212)", ch: 12, role: "\u2212" },
    ],
    facePositions: (() => {
      // FK37 DT12 female face view — channels in hex diamond pattern
      // Layout: 2-3-3-3-1 rows, matching Whirlwind reference
      const pts = {};
      const s = 4.2; // pin spacing within channel triangle
      // Channel centers in hex diamond grid
      const grid = [
        // Row 1: Ch3, Ch6
        { ch: 3, x: 36, y: 16 }, { ch: 6, x: 64, y: 16 },
        // Row 2: Ch1, Ch5, Ch2
        { ch: 1, x: 22, y: 33 }, { ch: 5, x: 50, y: 33 }, { ch: 2, x: 78, y: 33 },
        // Row 3: Ch4, Ch10, Ch7
        { ch: 4, x: 22, y: 52 }, { ch: 10, x: 50, y: 52 }, { ch: 7, x: 78, y: 52 },
        // Row 4: Ch8, Ch11, Ch9
        { ch: 8, x: 22, y: 71 }, { ch: 11, x: 50, y: 71 }, { ch: 9, x: 78, y: 71 },
        // Row 5: Ch12
        { ch: 12, x: 50, y: 88 },
      ];
      const chPins = {
        1: [1, 2, 5], 2: [3, 4, 6], 3: [8, 7, 9],
        4: [10, 11, 12], 5: [14, 13, 15], 6: [16, 17, 18],
        7: [19, 20, 21], 8: [23, 24, 25], 9: [27, 26, 28],
        10: [29, 30, 31], 11: [33, 32, 34], 12: [35, 36, 37],
      };
      grid.forEach(({ ch, x, y }) => {
        const [hi, gnd, lo] = chPins[ch];
        // Triangle: Hi(+) top-left, Gnd top-right, Lo(-) bottom-center
        pts[hi]  = { x: x - s, y: y - s * 0.6 };
        pts[gnd] = { x: x + s, y: y - s * 0.6 };
        pts[lo]  = { x: x, y: y + s * 0.8 };
      });
      // Pin 22 = spare
      pts[22] = { x: 36, y: 52 };
      const arr = [];
      for (let i = 1; i <= 37; i++) arr.push(pts[i] || { x: 50, y: 50 });
      return arr;
    })(),
    radius: 48,
    notch: "top",
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
      { id: 1, label: "1", name: "Pin 1 \u2014 White" },
      { id: 2, label: "2", name: "Pin 2 \u2014 Black" },
      { id: 3, label: "3", name: "Pin 3 \u2014 Red" },
      { id: 4, label: "4", name: "Pin 4 \u2014 Green" },
      { id: 5, label: "5", name: "Pin 5 \u2014 Yellow" },
      { id: 6, label: "6", name: "Pin 6 \u2014 Blue" },
    ],
  },
  bnc: {
    name: "BNC",
    short: "BNC",
    type: "coax",
    group: "video",
    pins: [
      { id: 1, label: "C", name: "Center \u2014 Signal" },
      { id: 2, label: "S", name: "Shell \u2014 Ground / Shield" },
    ],
  },
  triax: {
    name: "Triax",
    short: "Triax",
    type: "coax",
    group: "video",
    pins: [
      { id: 1, label: "C", name: "Center \u2014 Signal" },
      { id: 2, label: "I", name: "Inner Shield \u2014 Return / Power" },
      { id: 3, label: "O", name: "Outer Shield \u2014 Ground" },
    ],
  },
  db9: {
    name: "DB9",
    short: "DB9",
    type: "dsub",
    group: "data",
    pins: [
      { id: 1, label: "1", name: "Pin 1" },
      { id: 2, label: "2", name: "Pin 2 \u2014 RxD (Receive)" },
      { id: 3, label: "3", name: "Pin 3 \u2014 TxD (Transmit)" },
      { id: 4, label: "4", name: "Pin 4 \u2014 DTR" },
      { id: 5, label: "5", name: "Pin 5 \u2014 Ground" },
      { id: 6, label: "6", name: "Pin 6 \u2014 DSR" },
      { id: 7, label: "7", name: "Pin 7 \u2014 RTS" },
      { id: 8, label: "8", name: "Pin 8 \u2014 CTS" },
      { id: 9, label: "9", name: "Pin 9" },
    ],
    topRow: [1, 2, 3, 4, 5],
    botRow: [6, 7, 8, 9],
  },
  db25: {
    name: "DB25",
    short: "DB25",
    type: "dsub",
    group: "data",
    pins: Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      label: `${i + 1}`,
      name: `Pin ${i + 1}`,
    })),
    topRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    botRow: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  },
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
    facePositions: [
      { x: 30, y: 30 },
      { x: 70, y: 30 },
      { x: 70, y: 70 },
      { x: 30, y: 70 },
    ],
    radius: 42,
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
      { id: 1, label: "C", name: "Center \u2014 Signal" },
      { id: 2, label: "S", name: "Shell \u2014 Ground" },
    ],
  },
  powercon: {
    name: "PowerCON",
    short: "PCON",
    type: "powercon",
    group: "other",
    pins: [
      { id: 1, label: "L", name: "Line (Hot) \u2014 Brown" },
      { id: 2, label: "N", name: "Neutral \u2014 Blue" },
      { id: 3, label: "G", name: "Ground \u2014 Green/Yellow" },
    ],
    facePositions: [
      { x: 35, y: 35 },
      { x: 65, y: 35 },
      { x: 50, y: 68 },
    ],
    radius: 42,
  },
};
