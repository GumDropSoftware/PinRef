// ─── CABLE BUILD DATA ────────────────────────────────────────────────────────

const STANDARD_BUILDS = [
  // XLR3 combos
  {
    from: "xlr3", to: "xlr3", status: "standard", title: "XLR3 Mic Cable (Straight-Through)",
    use: "Standard microphone or balanced audio cable",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Hot (+) to Hot (+)" },
      { fromPin: 3, toPin: 3, desc: "Cold (\u2212) to Cold (\u2212)" },
    ],
  },
  {
    from: "xlr3", to: "xlr5", status: "standard", title: "XLR3 to XLR5 \u2014 Intercom / Audio",
    use: "Send one or both balanced channels into an XLR5 intercom connector. One cable = mic send only; two cables = full send + earpiece return.",
    multiChannel: {
      max: 2,
      multiSide: "from",
      channelLabels: ["Send \u2014 Mic (XLR5 Pins 2/3)", "Return \u2014 Earpiece (XLR5 Pins 4/5)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 2, toPin: 2, desc: "XLR3 pin 2 (Hot +) to XLR5 pin 2 (Mic +)" },
            { fromPin: 3, toPin: 3, desc: "XLR3 pin 3 (Cold \u2212) to XLR5 pin 3 (Mic \u2212)" },
            { fromPin: 1, toPin: 1, desc: "XLR3 pin 1 (Ground) to XLR5 pin 1 (Ground)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 4, desc: "XLR3 pin 2 (Hot +) to XLR5 pin 4 (Earpiece +)" },
            { fromPin: 3, toPin: 5, desc: "XLR3 pin 3 (Cold \u2212) to XLR5 pin 5 (Earpiece \u2212)" },
            { fromPin: 1, toPin: 1, desc: "XLR3 pin 1 (Ground) to XLR5 pin 1 (Ground)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Hot (+) to Hot (+)" },
      { fromPin: 3, toPin: 3, desc: "Cold (\u2212) to Cold (\u2212)" },
    ],
    deadEnds: [{ connector: "to", pin: 4, desc: "Pin 4 \u2014 unused (add 2nd XLR3 for earpiece return)" }, { connector: "to", pin: 5, desc: "Pin 5 \u2014 unused (add 2nd XLR3 for earpiece return)" }],
    notes: "Use 1 cable for send-only. Add a 2nd XLR3 for the earpiece return to fully wire the XLR5 intercom connector.",
  },
  {
    from: "xlr3", to: "trs", status: "standard", title: "XLR3 to 1/4\" TRS \u2014 Balanced Audio",
    use: "Balanced line-level audio between XLR and TRS gear",
    wiring: [
      { fromPin: 1, toPin: 3, desc: "Ground (pin 1) to Sleeve" },
      { fromPin: 2, toPin: 1, desc: "Hot (+) (pin 2) to Tip" },
      { fromPin: 3, toPin: 2, desc: "Cold (\u2212) (pin 3) to Ring" },
    ],
  },
  {
    from: "xlr3", to: "rj45", status: "standard", title: "XLR3 to RJ45 \u2014 Audio over Cat5",
    use: "Clear-Com or audio balun. Up to 2 balanced channels over Cat5.",
    multiChannel: {
      max: 2,
      perChannel: [
        {
          wiring: [
            { fromPin: 2, toPin: 1, desc: "Hot (+) to RJ45 pin 1 (Wht/Org)" },
            { fromPin: 3, toPin: 2, desc: "Cold (\u2212) to RJ45 pin 2 (Orange)" },
            { fromPin: 1, toPin: 4, desc: "Ground to RJ45 pin 4 (Blue)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 3, desc: "Hot (+) to RJ45 pin 3 (Wht/Grn)" },
            { fromPin: 3, toPin: 6, desc: "Cold (\u2212) to RJ45 pin 6 (Green)" },
            { fromPin: 1, toPin: 5, desc: "Ground to RJ45 pin 5 (Wht/Blue)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) (pin 2) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 3, toPin: 2, desc: "Cold (\u2212) (pin 3) to RJ45 pin 2 (Orange)" },
      { fromPin: 1, toPin: 4, desc: "Ground (pin 1) to RJ45 pin 4 (Blue)" },
    ],
    deadEnds: [
      { connector: "to", pin: 3, desc: "RJ45 pin 3 \u2014 unused" },
      { connector: "to", pin: 5, desc: "RJ45 pin 5 \u2014 unused" },
      { connector: "to", pin: 6, desc: "RJ45 pin 6 \u2014 unused" },
      { connector: "to", pin: 7, desc: "RJ45 pin 7 \u2014 unused" },
      { connector: "to", pin: 8, desc: "RJ45 pin 8 \u2014 unused" },
    ],
    notes: "Cat5 has 4 pairs. 2 balanced audio channels use 3 pairs. Pins 7-8 remain unused.",
  },
  {
    from: "xlr3", to: "db9", status: "field_hack", title: "XLR3 to DB9 \u2014 Serial Intercom Adapter",
    use: "Field hack: repurposing XLR cable to carry RS-232 serial (timing/scoring data). Not standard \u2014 document your pinout!",
    wiring: [
      { fromPin: 1, toPin: 5, desc: "Ground (XLR 1) to DB9 pin 5 (Ground)" },
      { fromPin: 2, toPin: 2, desc: "Hot (XLR 2) to DB9 pin 2 (RxD)" },
      { fromPin: 3, toPin: 3, desc: "Cold (XLR 3) to DB9 pin 3 (TxD)" },
    ],
    notes: "Non-standard \u2014 label both ends! Works for short RS-232 runs under 50 feet.",
  },
  {
    from: "xlr3", to: "db25", status: "field_hack", title: "XLR3 to DB25 \u2014 Audio Snake Channel",
    use: "Field hack: wiring one channel of a DB25 audio snake breakout. Pin mapping depends on your snake's channel assignment.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground (XLR 1) to DB25 pin 1 (Ch 1 Ground)" },
      { fromPin: 2, toPin: 2, desc: "Hot (XLR 2) to DB25 pin 2 (Ch 1 Hot)" },
      { fromPin: 3, toPin: 3, desc: "Cold (XLR 3) to DB25 pin 3 (Ch 1 Cold)" },
    ],
    notes: "This is Channel 1 on a Tascam-standard DB25 pinout. For other channels, shift by 3 pins per channel.",
  },
  {
    from: "xlr3", to: "xlr4", status: "partial", title: "XLR3 to XLR4 \u2014 Mono Feed to Headset",
    use: "Sends mono audio to both ears of an XLR4 headset jack. Pin 4 gets the same signal as pin 2.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground (pin 1) to Ground (pin 1)" },
      { fromPin: 2, toPin: 2, desc: "Hot (+) to Left + (pin 2)" },
      { fromPin: 3, toPin: 3, desc: "Cold (\u2212) to Left \u2212 (pin 3)" },
    ],
    deadEnds: [{ connector: "to", pin: 4, desc: "Pin 4 (Right +) \u2014 unused or jumper from pin 2 for dual-ear mono" }],
    notes: "To send mono to both ears, add a jumper wire from XLR4 pin 2 to pin 4 at the XLR4 end.",
  },
  {
    from: "xlr3", to: "bnc", status: "not_possible", title: "XLR3 to BNC \u2014 Not Compatible",
    use: "XLR carries balanced audio; BNC carries 75\u03A9 video. Different impedance, different signal type. Cannot be adapted.",
    wiring: [],
  },
  {
    from: "xlr3", to: "triax", status: "not_possible", title: "XLR3 to Triax \u2014 Not Compatible",
    use: "Triax carries camera control + power at different impedance. Completely different system from balanced audio.",
    wiring: [],
  },
  {
    from: "xlr3", to: "dt12", status: "standard", title: "XLR3 to DT12 \u2014 Channel Breakout",
    use: "Connecting audio channels from a DT12 multi-channel snake. Up to 12 XLR3 cables.",
    multiChannel: {
      max: 12,
      perChannel: [
        { wiring: [{ fromPin: 2, toPin: 1, desc: "Hot \u2192 DT12 pin 1 (Ch1 Hi)" }, { fromPin: 3, toPin: 5, desc: "Cold \u2192 DT12 pin 5 (Ch1 Lo)" }, { fromPin: 1, toPin: 2, desc: "Gnd \u2192 DT12 pin 2 (Ch1 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 3, desc: "Hot \u2192 DT12 pin 3 (Ch2 Hi)" }, { fromPin: 3, toPin: 6, desc: "Cold \u2192 DT12 pin 6 (Ch2 Lo)" }, { fromPin: 1, toPin: 4, desc: "Gnd \u2192 DT12 pin 4 (Ch2 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 8, desc: "Hot \u2192 DT12 pin 8 (Ch3 Hi)" }, { fromPin: 3, toPin: 9, desc: "Cold \u2192 DT12 pin 9 (Ch3 Lo)" }, { fromPin: 1, toPin: 7, desc: "Gnd \u2192 DT12 pin 7 (Ch3 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 10, desc: "Hot \u2192 DT12 pin 10 (Ch4 Hi)" }, { fromPin: 3, toPin: 12, desc: "Cold \u2192 DT12 pin 12 (Ch4 Lo)" }, { fromPin: 1, toPin: 11, desc: "Gnd \u2192 DT12 pin 11 (Ch4 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 14, desc: "Hot \u2192 DT12 pin 14 (Ch5 Hi)" }, { fromPin: 3, toPin: 15, desc: "Cold \u2192 DT12 pin 15 (Ch5 Lo)" }, { fromPin: 1, toPin: 13, desc: "Gnd \u2192 DT12 pin 13 (Ch5 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 16, desc: "Hot \u2192 DT12 pin 16 (Ch6 Hi)" }, { fromPin: 3, toPin: 18, desc: "Cold \u2192 DT12 pin 18 (Ch6 Lo)" }, { fromPin: 1, toPin: 17, desc: "Gnd \u2192 DT12 pin 17 (Ch6 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 19, desc: "Hot \u2192 DT12 pin 19 (Ch7 Hi)" }, { fromPin: 3, toPin: 21, desc: "Cold \u2192 DT12 pin 21 (Ch7 Lo)" }, { fromPin: 1, toPin: 20, desc: "Gnd \u2192 DT12 pin 20 (Ch7 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 23, desc: "Hot \u2192 DT12 pin 23 (Ch8 Hi)" }, { fromPin: 3, toPin: 25, desc: "Cold \u2192 DT12 pin 25 (Ch8 Lo)" }, { fromPin: 1, toPin: 24, desc: "Gnd \u2192 DT12 pin 24 (Ch8 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 27, desc: "Hot \u2192 DT12 pin 27 (Ch9 Hi)" }, { fromPin: 3, toPin: 28, desc: "Cold \u2192 DT12 pin 28 (Ch9 Lo)" }, { fromPin: 1, toPin: 26, desc: "Gnd \u2192 DT12 pin 26 (Ch9 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 29, desc: "Hot \u2192 DT12 pin 29 (Ch10 Hi)" }, { fromPin: 3, toPin: 31, desc: "Cold \u2192 DT12 pin 31 (Ch10 Lo)" }, { fromPin: 1, toPin: 30, desc: "Gnd \u2192 DT12 pin 30 (Ch10 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 33, desc: "Hot \u2192 DT12 pin 33 (Ch11 Hi)" }, { fromPin: 3, toPin: 34, desc: "Cold \u2192 DT12 pin 34 (Ch11 Lo)" }, { fromPin: 1, toPin: 32, desc: "Gnd \u2192 DT12 pin 32 (Ch11 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 35, desc: "Hot \u2192 DT12 pin 35 (Ch12 Hi)" }, { fromPin: 3, toPin: 37, desc: "Cold \u2192 DT12 pin 37 (Ch12 Lo)" }, { fromPin: 1, toPin: 36, desc: "Gnd \u2192 DT12 pin 36 (Ch12 Gnd)" }] },
      ],
    },
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) (XLR pin 2) to DT12 pin 1 (Ch 1 High)" },
      { fromPin: 3, toPin: 5, desc: "Cold (\u2212) (XLR pin 3) to DT12 pin 5 (Ch 1 Low)" },
      { fromPin: 1, toPin: 2, desc: "Ground (XLR pin 1) to DT12 pin 2 (Ch 1 Ground)" },
    ],
    deadEnds: [
      { connector: "to", pin: 3, desc: "DT12 pins 3\u201337 unused (other channels)" },
    ],
    notes: "Use the + button to add more XLR channels. Each XLR cable gets its own channel on the DT12.",
  },

  {
    from: "xlr3", to: "mini_trs", status: "standard", title: "XLR3 to 3.5mm TRS \u2014 Balanced to Headphone",
    use: "Pro balanced XLR output to a 3.5mm input (field recorder, IFB receiver, phone).",
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) to Tip" },
      { fromPin: 3, toPin: 2, desc: "Cold (\u2212) to Ring" },
      { fromPin: 1, toPin: 3, desc: "Ground to Sleeve" },
    ],
    notes: "Ring carries Cold (\u2212) signal. If the destination device shorts Ring to Sleeve, tie XLR pin 3 to pin 1 for clean mono unbalanced.",
  },
  {
    from: "xlr3", to: "ts", status: "standard", title: "XLR3 to TS \u2014 Balanced to Unbalanced",
    use: "Balanced XLR output to a 1/4\u201d unbalanced input (guitar amp, DI box, unbalanced insert).",
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) to Tip \u2014 Signal" },
      { fromPin: 1, toPin: 2, desc: "Ground to Sleeve" },
    ],
    deadEnds: [{ connector: "from", pin: 3, desc: "XLR pin 3 (Cold \u2212) \u2014 tie to Ground for best noise rejection" }],
    notes: "Balanced to unbalanced conversion. Tie XLR pin 3 to pin 1 at the XLR end for cleanest signal.",
  },
  {
    from: "xlr3", to: "rca", status: "standard", title: "XLR3 to RCA \u2014 Pro to Consumer",
    use: "Pro XLR output to consumer RCA input (amp, receiver, recording interface).",
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) to Center \u2014 Signal" },
      { fromPin: 1, toPin: 2, desc: "Ground to Shell" },
    ],
    deadEnds: [{ connector: "from", pin: 3, desc: "XLR pin 3 (Cold \u2212) \u2014 tie to Ground or float" }],
    notes: "~10dB level difference expected \u2014 adjust gain at the receiving end.",
  },

  // XLR5 combos
  {
    from: "xlr5", to: "xlr5", status: "standard", title: "XLR5 Straight-Through",
    use: "Clear-Com intercom extension or stereo audio",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Pin 2 to Pin 2" },
      { fromPin: 3, toPin: 3, desc: "Pin 3 to Pin 3" },
      { fromPin: 4, toPin: 4, desc: "Pin 4 to Pin 4" },
      { fromPin: 5, toPin: 5, desc: "Pin 5 to Pin 5" },
    ],
  },
  {
    from: "xlr5", to: "xlr4", status: "partial", title: "XLR5 to XLR4 \u2014 Intercom to Headset",
    use: "Clear-Com beltpack to XLR4 headset. Pin 5 is dead (no mic return on XLR4).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Left audio + to Left + (pin 2)" },
      { fromPin: 3, toPin: 3, desc: "Left audio \u2212 to Left \u2212 (pin 3)" },
      { fromPin: 4, toPin: 4, desc: "Right / return to Right + (pin 4)" },
    ],
    deadEnds: [{ connector: "from", pin: 5, desc: "XLR5 pin 5 \u2014 unused (mic bias / return \u2212)" }],
  },
  {
    from: "xlr5", to: "rj45", status: "standard", title: "XLR5 to RJ45 \u2014 Intercom over Cat5",
    use: "Clear-Com intercom over structured cabling. Up to 1 channel (uses 5 of 8 wires).",
    multiChannel: {
      max: 1,
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 4, desc: "Ground (pin 1) to RJ45 pin 4 (Blue)" },
            { fromPin: 2, toPin: 1, desc: "Pin 2 to RJ45 pin 1 (Wht/Org)" },
            { fromPin: 3, toPin: 2, desc: "Pin 3 to RJ45 pin 2 (Orange)" },
            { fromPin: 4, toPin: 3, desc: "Pin 4 to RJ45 pin 3 (Wht/Grn)" },
            { fromPin: 5, toPin: 6, desc: "Pin 5 to RJ45 pin 6 (Green)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Ground (pin 1) to RJ45 pin 4 (Blue)" },
      { fromPin: 2, toPin: 1, desc: "Pin 2 to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 3, toPin: 2, desc: "Pin 3 to RJ45 pin 2 (Orange)" },
      { fromPin: 4, toPin: 3, desc: "Pin 4 to RJ45 pin 3 (Wht/Grn)" },
      { fromPin: 5, toPin: 6, desc: "Pin 5 to RJ45 pin 6 (Green)" },
    ],
    deadEnds: [
      { connector: "to", pin: 5, desc: "RJ45 pin 5 \u2014 unused" },
      { connector: "to", pin: 7, desc: "RJ45 pin 7 \u2014 unused" },
      { connector: "to", pin: 8, desc: "RJ45 pin 8 \u2014 unused" },
    ],
  },
  {
    from: "xlr5", to: "db25", status: "field_hack", title: "XLR5 to DB25 \u2014 Intercom Snake Breakout",
    use: "Field hack for multi-channel intercom breakouts on DB25. Non-standard.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground (XLR5 1) to DB25 pin 1" },
      { fromPin: 2, toPin: 2, desc: "XLR5 pin 2 to DB25 pin 2" },
      { fromPin: 3, toPin: 3, desc: "XLR5 pin 3 to DB25 pin 3" },
      { fromPin: 4, toPin: 4, desc: "XLR5 pin 4 to DB25 pin 4" },
      { fromPin: 5, toPin: 5, desc: "XLR5 pin 5 to DB25 pin 5" },
    ],
    notes: "Non-standard \u2014 label clearly. This maps one intercom channel to pins 1-5 of the DB25.",
  },

  {
    from: "xlr5", to: "xlr3", status: "partial", title: "XLR5 to XLR3 \u2014 Intercom Breakout",
    use: "Tap one or both balanced channels from an XLR5 intercom line. One cable = send only; two cables = full send + return.",
    multiChannel: {
      max: 2,
      multiSide: "to",
      channelLabels: ["Send \u2014 Mic (Pins 2/3)", "Return \u2014 Earpiece (Pins 4/5)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 2, toPin: 2, desc: "XLR5 pin 2 (Mic +) to XLR3 pin 2 (Hot +)" },
            { fromPin: 3, toPin: 3, desc: "XLR5 pin 3 (Mic \u2212) to XLR3 pin 3 (Cold \u2212)" },
            { fromPin: 1, toPin: 1, desc: "XLR5 pin 1 (Ground) to XLR3 pin 1 (Ground)" },
          ],
        },
        {
          wiring: [
            { fromPin: 4, toPin: 2, desc: "XLR5 pin 4 (Earpiece +) to XLR3 pin 2 (Hot +)" },
            { fromPin: 5, toPin: 3, desc: "XLR5 pin 5 (Earpiece \u2212) to XLR3 pin 3 (Cold \u2212)" },
            { fromPin: 1, toPin: 1, desc: "XLR5 pin 1 (Ground) to XLR3 pin 1 (Ground)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Pin 2 (Mic +) to Hot (+)" },
      { fromPin: 3, toPin: 3, desc: "Pin 3 (Mic \u2212) to Cold (\u2212)" },
    ],
    deadEnds: [
      { connector: "from", pin: 4, desc: "XLR5 pin 4 \u2014 unused (add 2nd XLR3 for earpiece)" },
      { connector: "from", pin: 5, desc: "XLR5 pin 5 \u2014 unused (add 2nd XLR3 for earpiece)" },
    ],
    notes: "Use 1 cable for send-only. Add a 2nd XLR3 to break out the earpiece return \u2014 all 5 pins used, nothing wasted.",
  },
  {
    from: "xlr5", to: "mini_trs", status: "standard", title: "XLR5 to 3.5mm TRS \u2014 Intercom Earpiece Feed",
    use: "Taking the earpiece output from a Clear-Com beltpack to drive a 3.5mm consumer headphone.",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "XLR5 pin 4 (Earpiece +) to Tip" },
      { fromPin: 5, toPin: 2, desc: "XLR5 pin 5 (Earpiece \u2212) to Ring" },
      { fromPin: 1, toPin: 3, desc: "XLR5 pin 1 (Ground) to Sleeve" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "Pin 2 (Mic +) \u2014 unused, no mic circuit on TRS" },
      { connector: "from", pin: 3, desc: "Pin 3 (Mic \u2212) \u2014 unused" },
    ],
    notes: "Listen-only. No talkback. For 2-way use a TRRS headset.",
  },
  {
    from: "xlr5", to: "mini_trrs", status: "standard", title: "XLR5 to 3.5mm TRRS \u2014 Intercom to Consumer Headset",
    use: "Drive a consumer TRRS headset (Apple/Android CTIA standard) from a Clear-Com beltpack.",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "XLR5 pin 4 (Earpiece +) to Tip (earpiece +)" },
      { fromPin: 5, toPin: 2, desc: "XLR5 pin 5 (Earpiece \u2212) to Ring 1 (earpiece \u2212)" },
      { fromPin: 2, toPin: 3, desc: "XLR5 pin 2 (Mic +) to Ring 2 (mic)" },
      { fromPin: 1, toPin: 4, desc: "XLR5 pin 1 (Ground) to Sleeve" },
    ],
    deadEnds: [{ connector: "from", pin: 3, desc: "Pin 3 (Mic \u2212) \u2014 jumper to pin 1 for unbalanced mic" }],
    notes: "Jumper XLR5 pin 3 to pin 1 at the XLR end for unbalanced mic input. CTIA standard headset.",
  },

  // DT12 combos
  {
    from: "dt12", to: "dt12", status: "standard", title: "DT12 Straight-Through Extension",
    use: "Extending a DT12 multi-channel audio snake \u2014 all 37 pins straight through",
    wiring: Array.from({ length: 37 }, (_, i) => ({
      fromPin: i + 1, toPin: i + 1, desc: `Pin ${i + 1} to Pin ${i + 1}`
    })),
  },
  {
    from: "dt12", to: "db25", status: "standard", title: "DT12 to DB25 \u2014 Audio Snake (6 Ch, Tascam)",
    use: "First 6 channels of DT12 to DB25 Tascam standard. Common in broadcast trucks.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "DT12 pin 1 (Ch1 Hi) \u2192 DB25 pin 2 (Ch1 Hot)" },
      { fromPin: 5, toPin: 15, desc: "DT12 pin 5 (Ch1 Lo) \u2192 DB25 pin 15 (Ch1 Cold)" },
      { fromPin: 2, toPin: 1, desc: "DT12 pin 2 (Ch1 Gnd) \u2192 DB25 pin 1 (Ch1 Gnd)" },
      { fromPin: 3, toPin: 5, desc: "DT12 pin 3 (Ch2 Hi) \u2192 DB25 pin 5 (Ch2 Hot)" },
      { fromPin: 6, toPin: 18, desc: "DT12 pin 6 (Ch2 Lo) \u2192 DB25 pin 18 (Ch2 Cold)" },
      { fromPin: 4, toPin: 14, desc: "DT12 pin 4 (Ch2 Gnd) \u2192 DB25 pin 14 (Ch2 Gnd)" },
      { fromPin: 8, toPin: 8, desc: "DT12 pin 8 (Ch3 Hi) \u2192 DB25 pin 8 (Ch3 Hot)" },
      { fromPin: 9, toPin: 21, desc: "DT12 pin 9 (Ch3 Lo) \u2192 DB25 pin 21 (Ch3 Cold)" },
      { fromPin: 7, toPin: 7, desc: "DT12 pin 7 (Ch3 Gnd) \u2192 DB25 pin 7 (Ch3 Gnd)" },
      { fromPin: 10, toPin: 11, desc: "DT12 pin 10 (Ch4 Hi) \u2192 DB25 pin 11 (Ch4 Hot)" },
      { fromPin: 12, toPin: 24, desc: "DT12 pin 12 (Ch4 Lo) \u2192 DB25 pin 24 (Ch4 Cold)" },
      { fromPin: 11, toPin: 20, desc: "DT12 pin 11 (Ch4 Gnd) \u2192 DB25 pin 20 (Ch4 Gnd)" },
      { fromPin: 14, toPin: 14, desc: "DT12 pin 14 (Ch5 Hi) \u2192 DB25 pin 14 (Ch5 Hot)" },
      { fromPin: 15, toPin: 1, desc: "DT12 pin 15 (Ch5 Lo) \u2192 DB25 pin 1 (Ch5 Cold)" },
      { fromPin: 13, toPin: 7, desc: "DT12 pin 13 (Ch5 Gnd) \u2192 DB25 pin 7 (Ch5 Gnd)" },
      { fromPin: 16, toPin: 17, desc: "DT12 pin 16 (Ch6 Hi) \u2192 DB25 pin 17 (Ch6 Hot)" },
      { fromPin: 18, toPin: 4, desc: "DT12 pin 18 (Ch6 Lo) \u2192 DB25 pin 4 (Ch6 Cold)" },
      { fromPin: 17, toPin: 16, desc: "DT12 pin 17 (Ch6 Gnd) \u2192 DB25 pin 16 (Ch6 Gnd)" },
    ],
    notes: "Tascam DB25 standard. Only 6 of 12 DT12 channels fit on a DB25. Yamaha uses different pin mapping \u2014 always verify your gear!",
  },
  {
    from: "dt12", to: "rj45", status: "field_hack", title: "DT12 to RJ45 \u2014 4 Channels over Cat5",
    use: "Field hack: sends 4 balanced audio channels over Cat5. Uses all 4 pairs.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ch1 Hi (DT12 pin 1) \u2192 RJ45 pin 1 (Wht/Org)" },
      { fromPin: 5, toPin: 2, desc: "Ch1 Lo (DT12 pin 5) \u2192 RJ45 pin 2 (Orange)" },
      { fromPin: 3, toPin: 3, desc: "Ch2 Hi (DT12 pin 3) \u2192 RJ45 pin 3 (Wht/Grn)" },
      { fromPin: 6, toPin: 6, desc: "Ch2 Lo (DT12 pin 6) \u2192 RJ45 pin 6 (Green)" },
      { fromPin: 8, toPin: 4, desc: "Ch3 Hi (DT12 pin 8) \u2192 RJ45 pin 4 (Blue)" },
      { fromPin: 9, toPin: 5, desc: "Ch3 Lo (DT12 pin 9) \u2192 RJ45 pin 5 (Wht/Blue)" },
      { fromPin: 10, toPin: 7, desc: "Ch4 Hi (DT12 pin 10) \u2192 RJ45 pin 7 (Wht/Brn)" },
      { fromPin: 12, toPin: 8, desc: "Ch4 Lo (DT12 pin 12) \u2192 RJ45 pin 8 (Brown)" },
    ],
    deadEnds: [
      { connector: "from", pin: 13, desc: "DT12 channels 5\u201312 unused (only 4 pairs in Cat5)" },
    ],
    notes: "Cat5 only has 4 pairs \u2014 you get 4 channels but lose grounds (shield via cable jacket). Keep runs under 300 ft for audio.",
  },

  // TRS combos
  {
    from: "trs", to: "trs", status: "standard", title: "TRS Straight-Through Patch Cable",
    use: "Balanced audio patch cable",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip (Signal +)" },
      { fromPin: 2, toPin: 2, desc: "Ring to Ring (Signal \u2212)" },
      { fromPin: 3, toPin: 3, desc: "Sleeve to Sleeve (Ground)" },
    ],
  },
  {
    from: "trs", to: "rj45", status: "standard", title: "TRS to RJ45 \u2014 Balanced Audio over Cat5",
    use: "One or two balanced audio channels over a single Cat5 run. Cat5 has 4 pairs \u2014 2 channels use 3 pairs, leaving 1 spare.",
    multiChannel: {
      max: 2,
      multiSide: "from",
      channelLabels: ["Ch1 \u2014 Org pair (Pins 1/2)", "Ch2 \u2014 Grn pair (Pins 3/6)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 1, desc: "Tip (Signal +) to RJ45 pin 1 (Wht/Org)" },
            { fromPin: 2, toPin: 2, desc: "Ring (Signal \u2212) to RJ45 pin 2 (Orange)" },
            { fromPin: 3, toPin: 4, desc: "Sleeve (Ground) to RJ45 pin 4 (Blue)" },
          ],
        },
        {
          wiring: [
            { fromPin: 1, toPin: 3, desc: "Tip (Signal +) to RJ45 pin 3 (Wht/Grn)" },
            { fromPin: 2, toPin: 6, desc: "Ring (Signal \u2212) to RJ45 pin 6 (Green)" },
            { fromPin: 3, toPin: 5, desc: "Sleeve (Ground) to RJ45 pin 5 (Wht/Blue)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip (Signal +) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 2, toPin: 2, desc: "Ring (Signal \u2212) to RJ45 pin 2 (Orange)" },
      { fromPin: 3, toPin: 4, desc: "Sleeve (Ground) to RJ45 pin 4 (Blue)" },
    ],
    deadEnds: [
      { connector: "to", pin: 3, desc: "RJ45 pins 3,5,6 \u2014 unused (add 2nd TRS for Ch2)" },
    ],
    notes: "Cat5 has 4 pairs. 2 balanced TRS channels use 3 pairs (pins 1,2,4 and 3,6,5). Pins 7\u20138 remain spare.",
  },

  {
    from: "trs", to: "xlr3", status: "standard", title: "TRS to XLR3 \u2014 Balanced Audio",
    use: "Balanced TRS output to XLR input. Mixer insert return, interface output to snake.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Tip to Hot (+)" },
      { fromPin: 2, toPin: 3, desc: "Ring to Cold (\u2212)" },
      { fromPin: 3, toPin: 1, desc: "Sleeve to Ground" },
    ],
  },
  {
    from: "trs", to: "xlr4", status: "partial", title: "TRS to XLR4 \u2014 Stereo to 4-Pin Headset",
    use: "Connecting a 1/4\u201d stereo output to a broadcast XLR4 headset jack.",
    wiring: [
      { fromPin: 3, toPin: 1, desc: "Sleeve to Ground (pin 1)" },
      { fromPin: 1, toPin: 2, desc: "Tip to Left + (pin 2)" },
      { fromPin: 2, toPin: 4, desc: "Ring to Right + (pin 4)" },
    ],
    deadEnds: [{ connector: "to", pin: 3, desc: "XLR4 pin 3 (Left \u2212) \u2014 unused in unbalanced TRS" }],
    notes: "Unbalanced stereo from TRS. Left \u2212 (pin 3) is unused.",
  },

  // RJ45 combos
  {
    from: "rj45", to: "rj45", status: "standard", title: "RJ45 Straight-Through (T568B)",
    use: "Standard Ethernet patch cable",
    wiring: Array.from({ length: 8 }, (_, i) => ({
      fromPin: i + 1, toPin: i + 1, desc: `Pin ${i + 1} to Pin ${i + 1}`
    })),
  },
  {
    from: "rj45", to: "db9", status: "standard", title: "RJ45 to DB9 \u2014 Serial Console Cable",
    use: "Cisco / Daktronics / timing console serial adapter. Common in broadcast scoring.",
    wiring: [
      { fromPin: 1, toPin: 8, desc: "RJ45 pin 1 to DB9 pin 8 (CTS)" },
      { fromPin: 2, toPin: 6, desc: "RJ45 pin 2 to DB9 pin 6 (DSR)" },
      { fromPin: 3, toPin: 2, desc: "RJ45 pin 3 to DB9 pin 2 (RxD \u2014 Receive)" },
      { fromPin: 4, toPin: 5, desc: "RJ45 pin 4 to DB9 pin 5 (Ground)" },
      { fromPin: 5, toPin: 5, desc: "RJ45 pin 5 to DB9 pin 5 (Ground)" },
      { fromPin: 6, toPin: 3, desc: "RJ45 pin 6 to DB9 pin 3 (TxD \u2014 Transmit)" },
      { fromPin: 7, toPin: 4, desc: "RJ45 pin 7 to DB9 pin 4 (DTR)" },
      { fromPin: 8, toPin: 7, desc: "RJ45 pin 8 to DB9 pin 7 (RTS)" },
    ],
    notes: "This is the Cisco/Yost console cable standard. Daktronics scoring consoles often use this exact pinout.",
  },
  {
    from: "rj45", to: "db25", status: "field_hack", title: "RJ45 to DB25 \u2014 Serial Timing Adapter",
    use: "Field hack: Cat5 to DB25 serial for older timing/scoring equipment (Tissot, Swiss Timing).",
    wiring: [
      { fromPin: 3, toPin: 3, desc: "RJ45 pin 3 to DB25 pin 3 (TxD)" },
      { fromPin: 4, toPin: 7, desc: "RJ45 pin 4 to DB25 pin 7 (Ground)" },
      { fromPin: 5, toPin: 7, desc: "RJ45 pin 5 to DB25 pin 7 (Ground)" },
      { fromPin: 6, toPin: 2, desc: "RJ45 pin 6 to DB25 pin 2 (RxD)" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "RJ45 pins 1,2,7,8 \u2014 unused" },
    ],
    notes: "Minimal 3-wire serial (Tx, Rx, Gnd). Add handshaking pins if your device needs them.",
  },

  {
    from: "rj45", to: "xlr3", status: "standard", title: "RJ45 to XLR3 \u2014 Audio over Cat5",
    use: "Receiving end of an audio-over-Cat5 run. Up to 2 balanced channels.",
    multiChannel: {
      max: 2,
      perChannel: [
        { wiring: [{ fromPin: 1, toPin: 2, desc: "RJ45 pin 1 (Wht/Org) to Hot +" }, { fromPin: 2, toPin: 3, desc: "RJ45 pin 2 (Orange) to Cold \u2212" }, { fromPin: 4, toPin: 1, desc: "RJ45 pin 4 (Blue) to Ground" }] },
        { wiring: [{ fromPin: 3, toPin: 2, desc: "RJ45 pin 3 (Wht/Grn) to Hot +" }, { fromPin: 6, toPin: 3, desc: "RJ45 pin 6 (Green) to Cold \u2212" }, { fromPin: 5, toPin: 1, desc: "RJ45 pin 5 (Wht/Blue) to Ground" }] },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 2, desc: "RJ45 pin 1 (Wht/Org) to Hot +" },
      { fromPin: 2, toPin: 3, desc: "RJ45 pin 2 (Orange) to Cold \u2212" },
      { fromPin: 4, toPin: 1, desc: "RJ45 pin 4 (Blue) to Ground" },
    ],
    deadEnds: [{ connector: "from", pin: 3, desc: "RJ45 pins 3,5,6,7,8 \u2014 unused (single channel)" }],
    notes: "Pair with XLR3\u2192RJ45 at the source. Two balanced channels fit in one Cat5.",
  },
  {
    from: "rj45", to: "xlr5", status: "standard", title: "RJ45 to XLR5 \u2014 Intercom over Cat5",
    use: "Receiving end of a Clear-Com intercom run over Cat5.",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "RJ45 pin 4 (Blue) to Ground (pin 1)" },
      { fromPin: 1, toPin: 2, desc: "RJ45 pin 1 (Wht/Org) to Pin 2" },
      { fromPin: 2, toPin: 3, desc: "RJ45 pin 2 (Orange) to Pin 3" },
      { fromPin: 3, toPin: 4, desc: "RJ45 pin 3 (Wht/Grn) to Pin 4" },
      { fromPin: 6, toPin: 5, desc: "RJ45 pin 6 (Green) to Pin 5" },
    ],
    deadEnds: [{ connector: "from", pin: 5, desc: "RJ45 pins 5,7,8 \u2014 unused" }],
    notes: "Pair with XLR5\u2192RJ45 at the source. Single Clear-Com channel.",
  },
  {
    from: "rj45", to: "trs", status: "standard", title: "RJ45 to TRS \u2014 Balanced Audio over Cat5",
    use: "Receiving end of a balanced audio-over-Cat5 run. One or two TRS outputs from a single Cat5.",
    multiChannel: {
      max: 2,
      multiSide: "to",
      channelLabels: ["Ch1 \u2014 Org pair (Pins 1/2)", "Ch2 \u2014 Grn pair (Pins 3/6)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 1, desc: "RJ45 pin 1 (Wht/Org) to Tip (Signal +)" },
            { fromPin: 2, toPin: 2, desc: "RJ45 pin 2 (Orange) to Ring (Signal \u2212)" },
            { fromPin: 4, toPin: 3, desc: "RJ45 pin 4 (Blue) to Sleeve (Ground)" },
          ],
        },
        {
          wiring: [
            { fromPin: 3, toPin: 1, desc: "RJ45 pin 3 (Wht/Grn) to Tip (Signal +)" },
            { fromPin: 6, toPin: 2, desc: "RJ45 pin 6 (Green) to Ring (Signal \u2212)" },
            { fromPin: 5, toPin: 3, desc: "RJ45 pin 5 (Wht/Blue) to Sleeve (Ground)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 1, desc: "RJ45 pin 1 (Wht/Org) to Tip (Signal +)" },
      { fromPin: 2, toPin: 2, desc: "RJ45 pin 2 (Orange) to Ring (Signal \u2212)" },
      { fromPin: 4, toPin: 3, desc: "RJ45 pin 4 (Blue) to Sleeve (Ground)" },
    ],
    deadEnds: [{ connector: "from", pin: 3, desc: "RJ45 pins 3,5,6 \u2014 unused (add 2nd TRS for Ch2)" }],
    notes: "Pair with TRS\u2192RJ45 at the source. Pins 7\u20138 remain spare on both ends.",
  },
  {
    from: "rj45", to: "xlr4", status: "partial", title: "RJ45 to XLR4 \u2014 Headset over Cat5",
    use: "Receiving end of a headset-over-Cat5 run. Right channel is single-ended.",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "RJ45 pin 4 (Blue) to Ground (pin 1)" },
      { fromPin: 1, toPin: 2, desc: "RJ45 pin 1 (Wht/Org) to Left + (pin 2)" },
      { fromPin: 2, toPin: 3, desc: "RJ45 pin 2 (Orange) to Left \u2212 (pin 3)" },
      { fromPin: 3, toPin: 4, desc: "RJ45 pin 3 (Wht/Grn) to Right + (pin 4)" },
    ],
    deadEnds: [{ connector: "from", pin: 5, desc: "RJ45 pins 5,6,7,8 \u2014 unused" }],
    notes: "Pair with XLR4\u2192RJ45 at the source. Right channel is unbalanced.",
  },
  {
    from: "rj45", to: "bnc", status: "field_hack", title: "RJ45 to BNC \u2014 Cat5 to Coax",
    use: "Field hack: receiving end of an SDI-over-Cat5 run at the BNC side.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "RJ45 pin 1 (Wht/Org) to BNC center \u2014 Signal" },
      { fromPin: 2, toPin: 1, desc: "RJ45 pin 2 (Orange) to BNC center \u2014 same pair" },
      { fromPin: 4, toPin: 2, desc: "RJ45 pin 4 (Blue) to BNC shell \u2014 Ground" },
      { fromPin: 5, toPin: 2, desc: "RJ45 pin 5 (Wht/Blue) to BNC shell \u2014 same pair" },
    ],
    notes: "Mate with BNC\u2192RJ45 at the other end. Emergency field hack only \u2014 not proper SDI.",
  },

  // BNC combos
  {
    from: "bnc", to: "bnc", status: "standard", title: "BNC Straight-Through \u2014 SDI / Genlock",
    use: "SDI video, genlock/blackburst, timecode. Always use 75\u03A9 cable!",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center conductor to Center conductor (Signal)" },
      { fromPin: 2, toPin: 2, desc: "Shell to Shell (Shield / Ground)" },
    ],
    notes: "SDI requires true 75\u03A9 cable (Belden 1694A or similar). Do NOT use 50\u03A9 BNC cable \u2014 it will cause signal reflections.",
  },
  {
    from: "bnc", to: "triax", status: "partial", title: "BNC to Triax \u2014 SDI on Triax Cable",
    use: "Running SDI video over triax cable. Inner shield is unused. Wastes triax capability but works in a pinch.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "BNC center to Triax center (Signal)" },
      { fromPin: 2, toPin: 3, desc: "BNC shell to Triax outer shield (Ground)" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "Triax inner shield \u2014 unused" }],
    notes: "This wastes the triax inner conductor but works for SDI passthrough. Not for camera control.",
  },
  {
    from: "bnc", to: "rj45", status: "field_hack", title: "BNC to RJ45 \u2014 SDI over Cat5 (HDBaseT style)",
    use: "Field hack: running a single SDI signal over a Cat5 run using a pair for signal and a pair for ground.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center (Signal) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 1, toPin: 2, desc: "Center (Signal) to RJ45 pin 2 (Orange) \u2014 same pair" },
      { fromPin: 2, toPin: 4, desc: "Shell (Ground) to RJ45 pin 4 (Blue)" },
      { fromPin: 2, toPin: 5, desc: "Shell (Ground) to RJ45 pin 5 (Wht/Blue) \u2014 same pair" },
    ],
    notes: "This is NOT proper SDI-over-IP. It's an emergency field hack for short runs. Signal degradation likely over 100ft. Use proper SDI-to-fiber for real runs.",
  },

  {
    from: "triax", to: "bnc", status: "partial", title: "Triax to BNC \u2014 Camera Cable as Coax",
    use: "Using triax cable as a single coax run. Only center and outer shield used.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to BNC center (Signal)" },
      { fromPin: 3, toPin: 2, desc: "Outer shield to BNC shell (Ground)" },
    ],
    deadEnds: [{ connector: "from", pin: 2, desc: "Triax inner shield \u2014 unused" }],
    notes: "Wastes triax capability. Emergency SDI passthrough only. Not for camera control.",
  },

  // Triax
  {
    from: "triax", to: "triax", status: "standard", title: "Triax Extension Cable",
    use: "Camera control / return video extension. All three conductors straight through.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to Center (Video / Data)" },
      { fromPin: 2, toPin: 2, desc: "Inner shield to Inner shield (Return / Power)" },
      { fromPin: 3, toPin: 3, desc: "Outer shield to Outer shield (Ground)" },
    ],
  },

  // DB9 combos
  {
    from: "db9", to: "db9", status: "standard", title: "DB9 Straight-Through (DCE to DTE)",
    use: "Standard serial extension cable",
    wiring: Array.from({ length: 9 }, (_, i) => ({
      fromPin: i + 1, toPin: i + 1, desc: `Pin ${i + 1} to Pin ${i + 1}`
    })),
  },
  {
    from: "db9", to: "db9", status: "standard", title: "DB9 Null Modem (Crossover)",
    use: "Timing/scoring: connects two DTE devices directly (two computers, computer to scoreboard controller)",
    wiring: [
      { fromPin: 2, toPin: 3, desc: "Pin 2 (RxD) to Pin 3 (TxD) \u2014 cross Tx/Rx" },
      { fromPin: 3, toPin: 2, desc: "Pin 3 (TxD) to Pin 2 (RxD) \u2014 cross Tx/Rx" },
      { fromPin: 5, toPin: 5, desc: "Pin 5 (Ground) to Pin 5 (Ground)" },
      { fromPin: 7, toPin: 8, desc: "Pin 7 (RTS) to Pin 8 (CTS) \u2014 cross handshake" },
      { fromPin: 8, toPin: 7, desc: "Pin 8 (CTS) to Pin 7 (RTS) \u2014 cross handshake" },
      { fromPin: 4, toPin: 6, desc: "Pin 4 (DTR) to Pin 6 (DSR)" },
      { fromPin: 6, toPin: 4, desc: "Pin 6 (DSR) to Pin 4 (DTR)" },
    ],
    notes: "Essential for Daktronics and DV Sport setups where two controllers talk directly.",
  },
  {
    from: "db9", to: "db25", status: "standard", title: "DB9 to DB25 \u2014 Serial Adapter",
    use: "Adapting between DB9 and DB25 serial ports. Common on older timing equipment.",
    wiring: [
      { fromPin: 1, toPin: 8, desc: "DB9 pin 1 to DB25 pin 8 (DCD)" },
      { fromPin: 2, toPin: 3, desc: "DB9 pin 2 (RxD) to DB25 pin 3 (RxD)" },
      { fromPin: 3, toPin: 2, desc: "DB9 pin 3 (TxD) to DB25 pin 2 (TxD)" },
      { fromPin: 4, toPin: 20, desc: "DB9 pin 4 (DTR) to DB25 pin 20 (DTR)" },
      { fromPin: 5, toPin: 7, desc: "DB9 pin 5 (Ground) to DB25 pin 7 (Ground)" },
      { fromPin: 6, toPin: 6, desc: "DB9 pin 6 (DSR) to DB25 pin 6 (DSR)" },
      { fromPin: 7, toPin: 4, desc: "DB9 pin 7 (RTS) to DB25 pin 4 (RTS)" },
      { fromPin: 8, toPin: 5, desc: "DB9 pin 8 (CTS) to DB25 pin 5 (CTS)" },
      { fromPin: 9, toPin: 22, desc: "DB9 pin 9 to DB25 pin 22 (RI)" },
    ],
  },

  // DB25 combos
  {
    from: "db25", to: "db25", status: "standard", title: "DB25 Straight-Through",
    use: "Audio snake extension or parallel port cable",
    wiring: Array.from({ length: 25 }, (_, i) => ({
      fromPin: i + 1, toPin: i + 1, desc: `Pin ${i + 1} to Pin ${i + 1}`
    })),
  },
  {
    from: "db25", to: "xlr3", status: "field_hack", title: "DB25 to XLR3 \u2014 Audio Snake Channel",
    use: "Field hack: receiving one channel of a DB25 audio snake as a balanced XLR output.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "DB25 pin 1 (Ch 1 Ground) to XLR Ground" },
      { fromPin: 2, toPin: 2, desc: "DB25 pin 2 (Ch 1 Hot) to XLR Hot +" },
      { fromPin: 3, toPin: 3, desc: "DB25 pin 3 (Ch 1 Cold) to XLR Cold \u2212" },
    ],
    notes: "This is Channel 1 on a Tascam-standard DB25 pinout. For other channels, shift by 3 pins per channel. Always verify your snake\u2019s pinout.",
  },

  // XLR4 combos
  {
    from: "xlr4", to: "xlr4", status: "standard", title: "XLR4 Headset Extension",
    use: "Extending a 4-pin headset cable (stereo headphones or dual-element)",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Left + to Left +" },
      { fromPin: 3, toPin: 3, desc: "Left \u2212 to Left \u2212" },
      { fromPin: 4, toPin: 4, desc: "Right + to Right +" },
    ],
  },
  {
    from: "xlr4", to: "trs", status: "standard", title: "XLR4 to TRS \u2014 Headset to Stereo Jack",
    use: "Adapting an XLR4 headset to a 1/4\" TRS headphone jack",
    wiring: [
      { fromPin: 1, toPin: 3, desc: "Ground (pin 1) to Sleeve" },
      { fromPin: 2, toPin: 1, desc: "Left + (pin 2) to Tip" },
      { fromPin: 4, toPin: 2, desc: "Right + (pin 4) to Ring" },
    ],
    deadEnds: [{ connector: "from", pin: 3, desc: "XLR4 pin 3 (Left \u2212) \u2014 unused in unbalanced TRS" }],
    notes: "This gives you unbalanced stereo. The Left \u2212 signal on pin 3 is lost.",
  },
  {
    from: "xlr4", to: "rj45", status: "partial", title: "XLR4 to RJ45 \u2014 Headset Extension over Cat5",
    use: "Broadcast headset cable extension over Cat5. Left channel is balanced; right channel is single-ended (XLR4 has no R\u2212).",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Ground (pin 1) to RJ45 pin 4 (Blue)" },
      { fromPin: 2, toPin: 1, desc: "Left + (pin 2) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 3, toPin: 2, desc: "Left \u2212 (pin 3) to RJ45 pin 2 (Orange)" },
      { fromPin: 4, toPin: 3, desc: "Right + (pin 4) to RJ45 pin 3 (Wht/Grn)" },
    ],
    deadEnds: [{ connector: "to", pin: 5, desc: "RJ45 pins 5,6,7,8 \u2014 unused" }],
    notes: "Right channel (pin 4) has no balanced return \u2014 XLR4 has no R\u2212. Left channel rides balanced on the orange pair.",
  },
  {
    from: "xlr4", to: "xlr5", status: "partial", title: "XLR4 to XLR5 \u2014 Headset to Intercom Panel",
    use: "Connecting a 4-pin headset to a 5-pin Clear-Com panel or wallplate.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Left + to Left audio +" },
      { fromPin: 3, toPin: 3, desc: "Left \u2212 to Left audio \u2212" },
      { fromPin: 4, toPin: 4, desc: "Right + to Right / return" },
    ],
    deadEnds: [{ connector: "to", pin: 5, desc: "XLR5 pin 5 \u2014 unused (mic bias / return \u2212)" }],
    notes: "XLR4 has no pin 5 equivalent \u2014 mic bias/return is lost. Audio output still works.",
  },
  {
    from: "xlr4", to: "xlr3", status: "partial", title: "XLR4 to XLR3 \u2014 Headset Left Channel to Mono",
    use: "Taking the left (balanced) channel of an XLR4 headset output as a mono balanced feed.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Left + (pin 2) to Hot +" },
      { fromPin: 3, toPin: 3, desc: "Left \u2212 (pin 3) to Cold \u2212" },
    ],
    deadEnds: [{ connector: "from", pin: 4, desc: "XLR4 pin 4 (Right +) \u2014 unused, mono output only" }],
    notes: "Only left channel passes through balanced. Right channel is dropped.",
  },

  // ─── SPEAKON BUILDS ────────────────────────────────────────────────────────
  {
    from: "speakon", to: "speakon", status: "standard", title: "Speakon NL4 Straight-Through",
    use: "Standard speaker cable extension",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "1+ to 1+ \u2014 Speaker +" },
      { fromPin: 2, toPin: 2, desc: "1\u2212 to 1\u2212 \u2014 Speaker \u2212" },
      { fromPin: 3, toPin: 3, desc: "2+ to 2+ \u2014 Ch2 +" },
      { fromPin: 4, toPin: 4, desc: "2\u2212 to 2\u2212 \u2014 Ch2 \u2212" },
    ],
  },
  {
    from: "speakon", to: "xlr3", status: "field_hack", title: "Speakon NL4 to XLR3 \u2014 Speaker Adapter",
    use: "Field hack: driving a powered monitor from a Speakon output. NL4 Ch1 only, or break out both Ch1 and Ch2 to separate XLR3 connectors.",
    multiChannel: {
      max: 2,
      multiSide: "to",
      channelLabels: ["Ch1 (NL4 Pins 1+/1\u2212)", "Ch2 (NL4 Pins 2+/2\u2212)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 2, desc: "NL4 1+ to XLR3 pin 2 (Hot +)" },
            { fromPin: 2, toPin: 3, desc: "NL4 1\u2212 to XLR3 pin 3 (Cold \u2212)" },
          ],
        },
        {
          wiring: [
            { fromPin: 3, toPin: 2, desc: "NL4 2+ to XLR3 pin 2 (Hot +)" },
            { fromPin: 4, toPin: 3, desc: "NL4 2\u2212 to XLR3 pin 3 (Cold \u2212)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 2, desc: "1+ to Hot (+) \u2014 Signal" },
      { fromPin: 2, toPin: 3, desc: "1\u2212 to Cold (\u2212) \u2014 Return" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "NL4 2+ \u2014 unused (add 2nd XLR3 for Ch2)" },
      { connector: "from", pin: 4, desc: "NL4 2\u2212 \u2014 unused (add 2nd XLR3 for Ch2)" },
      { connector: "to", pin: 1, desc: "XLR pin 1 (Ground) \u2014 unused, leave open" },
    ],
    notes: "Only for powered monitors! Do NOT send amplified speaker signal into an XLR mic input \u2014 you will destroy it.",
  },
  {
    from: "speakon", to: "trs", status: "field_hack", title: "Speakon NL4 to TRS \u2014 Powered Monitor",
    use: "Connecting a Speakon output to a powered monitor with 1/4\" TRS input. One or two monitors from a single NL4 run.",
    multiChannel: {
      max: 2,
      multiSide: "to",
      channelLabels: ["Ch1 (NL4 Pins 1+/1\u2212)", "Ch2 (NL4 Pins 2+/2\u2212)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 1, desc: "NL4 1+ to Tip \u2014 Signal +" },
            { fromPin: 2, toPin: 3, desc: "NL4 1\u2212 to Sleeve \u2014 Return" },
          ],
        },
        {
          wiring: [
            { fromPin: 3, toPin: 1, desc: "NL4 2+ to Tip \u2014 Signal +" },
            { fromPin: 4, toPin: 3, desc: "NL4 2\u2212 to Sleeve \u2014 Return" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 1, desc: "1+ to Tip \u2014 Signal +" },
      { fromPin: 2, toPin: 3, desc: "1\u2212 to Sleeve \u2014 Return" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "NL4 2+ \u2014 unused (add 2nd TRS for Ch2 monitor)" },
      { connector: "from", pin: 4, desc: "NL4 2\u2212 \u2014 unused (add 2nd TRS for Ch2 monitor)" },
      { connector: "to", pin: 2, desc: "TRS Ring \u2014 unused, leave open" },
    ],
    notes: "Line-level only. Do not send amplified speaker signal to a TRS input.",
  },

  // ─── TS BUILDS ──────────────────────────────────────────────────────────────
  {
    from: "ts", to: "ts", status: "standard", title: "TS Straight-Through Patch Cable",
    use: "Unbalanced audio patch cable or guitar cable",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 2, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
  },
  {
    from: "ts", to: "xlr3", status: "standard", title: "TS to XLR3 \u2014 Unbalanced Audio",
    use: "Guitar/keyboard to mixer XLR input. Pin 3 jumpered to pin 1 for unbalanced.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Tip to Hot (+) \u2014 Signal" },
      { fromPin: 2, toPin: 1, desc: "Sleeve to Ground" },
    ],
    deadEnds: [{ connector: "to", pin: 3, desc: "XLR pin 3 (Cold) \u2014 jumper to pin 1 or leave floating" }],
    notes: "For proper unbalanced operation, jumper XLR pin 3 to pin 1 at the XLR end.",
  },
  {
    from: "ts", to: "rj45", status: "field_hack", title: "TS to RJ45 \u2014 Unbalanced Audio over Cat5",
    use: "Single unbalanced audio channel over Cat5",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip (Signal) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 2, toPin: 4, desc: "Sleeve (Ground) to RJ45 pin 4 (Blue)" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "RJ45 pins 2,3,5,6,7,8 \u2014 unused" }],
    notes: "Unbalanced signal on Cat5 \u2014 keep runs short. Susceptible to interference.",
  },
  {
    from: "ts", to: "mini_trs", status: "standard", title: "TS to 3.5mm \u2014 1/4\" Mono to Headphone",
    use: "Adapting a 1/4\" mono output to a 3.5mm input (laptop, phone, portable recorder).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 3, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "3.5mm Ring \u2014 mono signal, Ring floats or ties to Tip" }],
    notes: "Mono-to-stereo: Ring is undriven. Some devices sum Tip and Ring \u2014 tie Ring to Tip if you need both ears.",
  },

  // ─── 3.5mm TRS BUILDS ──────────────────────────────────────────────────────
  {
    from: "mini_trs", to: "mini_trs", status: "standard", title: "3.5mm TRS Straight-Through",
    use: "Headphone extension or aux cable",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Left / Hot" },
      { fromPin: 2, toPin: 2, desc: "Ring to Ring \u2014 Right / Cold" },
      { fromPin: 3, toPin: 3, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
  },
  {
    from: "mini_trs", to: "xlr3", status: "standard", title: "3.5mm TRS to XLR3 \u2014 IFB / Phone Feed",
    use: "Phone or laptop output to mixer. Balanced mono send from 3.5mm to XLR.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Tip to Hot (+) \u2014 Signal" },
      { fromPin: 2, toPin: 3, desc: "Ring to Cold (\u2212) \u2014 Return" },
      { fromPin: 3, toPin: 1, desc: "Sleeve to Ground" },
    ],
    notes: "Stereo source will be summed to mono. For stereo, use two XLR cables with a Y-split.",
  },
  {
    from: "mini_trs", to: "xlr5", status: "standard", title: "3.5mm TRS to XLR5 \u2014 Intercom Listen-Only",
    use: "Connect a consumer headphone to a Clear-Com beltpack for listen-only monitoring.",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Tip (audio +) to XLR5 pin 4 (Earpiece +)" },
      { fromPin: 2, toPin: 5, desc: "Ring (audio \u2212) to XLR5 pin 5 (Earpiece \u2212)" },
      { fromPin: 3, toPin: 1, desc: "Sleeve (ground) to XLR5 pin 1 (Ground)" },
    ],
    deadEnds: [
      { connector: "to", pin: 2, desc: "Pin 2 (Mic +) \u2014 unused, no mic on TRS" },
      { connector: "to", pin: 3, desc: "Pin 3 (Mic \u2212) \u2014 unused, no mic on TRS" },
    ],
    notes: "Listen-only \u2014 no talkback. For 2-way, use a TRRS headset or separate mic feed. Beltpack has female XLR5, so cable needs male XLR5.",
  },

  {
    from: "mini_trs", to: "xlr4", status: "partial", title: "3.5mm TRS to XLR4 \u2014 Consumer Headphones to Broadcast",
    use: "Plug consumer 3.5mm stereo headphones into a broadcast XLR4 headset jack.",
    wiring: [
      { fromPin: 3, toPin: 1, desc: "Sleeve to Ground (pin 1)" },
      { fromPin: 1, toPin: 2, desc: "Tip (Left +) to Left + (pin 2)" },
      { fromPin: 2, toPin: 4, desc: "Ring (Right +) to Right + (pin 4)" },
    ],
    deadEnds: [{ connector: "to", pin: 3, desc: "XLR4 pin 3 (Left \u2212) \u2014 unused, unbalanced connection" }],
    notes: "Standard TRS stereo to XLR4. Left \u2212 (pin 3) is unused. Signal works fine but unbalanced.",
  },
  {
    from: "mini_trs", to: "rj45", status: "field_hack", title: "3.5mm TRS to RJ45 \u2014 Stereo Audio over Cat5",
    use: "Field hack: run one or two 3.5mm stereo feeds (IFB, aux, talkback return) over a single Cat5 run.",
    multiChannel: {
      max: 2,
      multiSide: "from",
      channelLabels: ["Feed A \u2014 Tip/Ring to Pins 1/3", "Feed B \u2014 Tip/Ring to Pins 2/6"],
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 1, desc: "Tip (Left) to RJ45 pin 1 (Wht/Org)" },
            { fromPin: 2, toPin: 3, desc: "Ring (Right) to RJ45 pin 3 (Wht/Grn)" },
            { fromPin: 3, toPin: 4, desc: "Sleeve (Ground) to RJ45 pin 4 (Blue)" },
          ],
        },
        {
          wiring: [
            { fromPin: 1, toPin: 2, desc: "Tip (Left) to RJ45 pin 2 (Orange)" },
            { fromPin: 2, toPin: 6, desc: "Ring (Right) to RJ45 pin 6 (Green)" },
            { fromPin: 3, toPin: 5, desc: "Sleeve (Ground) to RJ45 pin 5 (Wht/Blue)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip (Left) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 2, toPin: 3, desc: "Ring (Right) to RJ45 pin 3 (Wht/Grn)" },
      { fromPin: 3, toPin: 4, desc: "Sleeve (Ground) to RJ45 pin 4 (Blue)" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "RJ45 pins 2,5,6 \u2014 unused (add 2nd 3.5mm for Feed B)" }],
    notes: "Unbalanced on Cat5 \u2014 keep runs under 50ft. Two feeds share one ground path each; pins 7\u20138 remain spare.",
  },
  {
    from: "mini_trs", to: "ts", status: "standard", title: "3.5mm to TS \u2014 Headphone to 1/4\" Mono",
    use: "Adapting a 3.5mm stereo output to a 1/4\" mono input (amp, mixer, unbalanced insert).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Signal (Left)" },
      { fromPin: 3, toPin: 2, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
    deadEnds: [{ connector: "from", pin: 2, desc: "3.5mm Ring (Right) \u2014 unused, mono output only" }],
    notes: "Only left channel passes to mono output. Right channel is dropped.",
  },

  // ─── 3.5mm TRRS BUILDS ─────────────────────────────────────────────────────
  {
    from: "mini_trrs", to: "mini_trrs", status: "standard", title: "3.5mm TRRS Straight-Through",
    use: "Headset extension cable with mic",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Left / Earpiece +" },
      { fromPin: 2, toPin: 2, desc: "Ring 1 to Ring 1 \u2014 Right / Earpiece \u2212" },
      { fromPin: 3, toPin: 3, desc: "Ring 2 to Ring 2 \u2014 Microphone" },
      { fromPin: 4, toPin: 4, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
  },
  {
    from: "mini_trrs", to: "xlr5", status: "standard", title: "3.5mm TRRS to XLR5 \u2014 Intercom 2-Way",
    use: "Connect a consumer TRRS headset to a Clear-Com beltpack for full 2-way intercom (listen + talk).",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Tip (earpiece +) to XLR5 pin 4 (Earpiece +)" },
      { fromPin: 2, toPin: 5, desc: "Ring 1 (earpiece \u2212) to XLR5 pin 5 (Earpiece \u2212)" },
      { fromPin: 3, toPin: 2, desc: "Ring 2 (mic) to XLR5 pin 2 (Mic +)" },
      { fromPin: 4, toPin: 1, desc: "Sleeve (ground) to XLR5 pin 1 (Ground)" },
    ],
    deadEnds: [
      { connector: "to", pin: 3, desc: "Pin 3 (Mic \u2212) \u2014 jumper to pin 1 (Ground) for unbalanced mic" },
    ],
    notes: "CTIA standard headset (Apple/Android). Mic is unbalanced \u2014 jumper XLR5 pin 3 to pin 1 at the XLR end. Beltpack has female XLR5, so cable needs male XLR5.",
  },

  {
    from: "mini_trrs", to: "xlr4", status: "partial", title: "3.5mm TRRS to XLR4 \u2014 Phone Headset to Broadcast",
    use: "Use a consumer TRRS phone headset on a broadcast XLR4 jack. Audio works; mic is lost (XLR4 has no mic circuit).",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "Sleeve to Ground (pin 1)" },
      { fromPin: 1, toPin: 2, desc: "Tip (Left +) to Left + (pin 2)" },
      { fromPin: 2, toPin: 4, desc: "Ring 1 (Right +) to Right + (pin 4)" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "Ring 2 (Mic) \u2014 XLR4 has no mic circuit, mic signal lost" },
      { connector: "to", pin: 3, desc: "XLR4 pin 3 (Left \u2212) \u2014 unused, unbalanced" },
    ],
    notes: "Consumer TRRS mic won\u2019t work \u2014 XLR4 is audio output only. For 2-way intercom use XLR5.",
  },
  {
    from: "mini_trrs", to: "rj45", status: "field_hack", title: "3.5mm TRRS to RJ45 \u2014 Headset over Cat5",
    use: "Field hack: run a TRRS headset (audio + mic) over Cat5. Useful for comms or IFB with talkback.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip (Left +) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 2, toPin: 3, desc: "Ring 1 (Right +) to RJ45 pin 3 (Wht/Grn)" },
      { fromPin: 3, toPin: 7, desc: "Ring 2 (Mic) to RJ45 pin 7 (Wht/Brn)" },
      { fromPin: 4, toPin: 4, desc: "Sleeve (Ground) to RJ45 pin 4 (Blue)" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "RJ45 pins 2,5,6,8 \u2014 unused" }],
    notes: "Unbalanced on Cat5. Keep runs under 50ft. Pair with the same wiring at the far end.",
  },

  // ─── RCA BUILDS ─────────────────────────────────────────────────────────────
  {
    from: "rca", to: "rca", status: "standard", title: "RCA Straight-Through",
    use: "Consumer audio or composite video cable",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to Center \u2014 Signal" },
      { fromPin: 2, toPin: 2, desc: "Shell to Shell \u2014 Ground" },
    ],
  },
  {
    from: "rca", to: "xlr3", status: "standard", title: "RCA to XLR3 \u2014 Consumer to Pro",
    use: "Connecting consumer gear (DVD, laptop DAC) to a pro mixer or snake",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Center to Hot (+) \u2014 Signal" },
      { fromPin: 2, toPin: 1, desc: "Shell to Ground" },
    ],
    deadEnds: [{ connector: "to", pin: 3, desc: "XLR pin 3 (Cold) \u2014 jumper to pin 1 for unbalanced" }],
    notes: "Unbalanced connection. Jumper XLR pin 3 to pin 1. Expect ~10dB level difference \u2014 adjust gain.",
  },
  {
    from: "rca", to: "ts", status: "standard", title: "RCA to TS \u2014 Consumer to 1/4\"",
    use: "Connecting consumer RCA output to a 1/4\" unbalanced input",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 2, desc: "Shell to Sleeve \u2014 Ground" },
    ],
  },
  {
    from: "rca", to: "trs", status: "standard", title: "RCA to TRS \u2014 Consumer to Balanced",
    use: "Consumer RCA source to a balanced TRS input (mixer, interface, active speaker).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 3, desc: "Shell to Sleeve \u2014 Ground" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "TRS Ring (Cold \u2212) \u2014 tie to Sleeve for unbalanced input" }],
    notes: "Tie TRS Ring to Sleeve at the TRS end for proper unbalanced operation. ~10dB level difference expected.",
  },
  {
    from: "trs", to: "rca", status: "standard", title: "TRS to RCA \u2014 Balanced to Consumer",
    use: "Balanced TRS output to a consumer RCA input (amp, receiver, recording device).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Center \u2014 Signal" },
      { fromPin: 3, toPin: 2, desc: "Sleeve to Shell \u2014 Ground" },
    ],
    deadEnds: [{ connector: "from", pin: 2, desc: "TRS Ring (Cold \u2212) \u2014 leave floating or tie to Sleeve" }],
    notes: "~10dB level difference expected \u2014 adjust gain at the receiving end.",
  },

  // ─── POWERCON BUILDS ────────────────────────────────────────────────────────
  {
    from: "powercon", to: "powercon", status: "standard", title: "PowerCON Straight-Through",
    use: "PowerCON extension cable for lighting, speakers, or power distro",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Line to Line \u2014 Hot (Brown)" },
      { fromPin: 2, toPin: 2, desc: "Neutral to Neutral \u2014 Blue" },
      { fromPin: 3, toPin: 3, desc: "Ground to Ground \u2014 Green/Yellow" },
    ],
    notes: "Always verify correct polarity. Blue in to Blue out, never cross Line and Neutral.",
  },

  // ─── CABLE WHOLESALE SHELL ADAPTER BUILDS ────────────────────────────────────
  // Cable Wholesale DB9-to-RJ45/RJ12 adapter shells (Adam intercom, serial, timing).
  // tag: "shell" tells WiringDiagram to use Cable Wholesale grey shell wire colors.
  {
    from: "db9", to: "rj45", status: "standard", title: "Adam KP Black \u2014 Keypanel to Breakout",
    use: "Adam intercom keypanel data + matrix audio. Black shell adapter.",
    tag: "shell",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "DB9 pin 1 \u2192 RJ45 pin 1 (Wht/Org) \u2014 DATA +" },
      { fromPin: 2, toPin: 2, desc: "DB9 pin 2 \u2192 RJ45 pin 2 (Orange) \u2014 DATA \u2212" },
      { fromPin: 8, toPin: 3, desc: "DB9 pin 8 \u2192 RJ45 pin 3 (Wht/Grn) \u2014 FROM MTX +" },
      { fromPin: 5, toPin: 4, desc: "DB9 pin 5 \u2192 RJ45 pin 4 (Blue) \u2014 TO MTX \u2212" },
      { fromPin: 4, toPin: 5, desc: "DB9 pin 4 \u2192 RJ45 pin 5 (Wht/Blue) \u2014 TO MTX +" },
      { fromPin: 7, toPin: 6, desc: "DB9 pin 7 \u2192 RJ45 pin 6 (Green) \u2014 FROM MTX \u2212" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "DB9 pin 3 \u2014 N/C" },
      { connector: "from", pin: 6, desc: "DB9 pin 6 \u2014 N/C" },
      { connector: "from", pin: 9, desc: "DB9 pin 9 \u2014 N/C" },
      { connector: "to", pin: 7, desc: "RJ45 pin 7 \u2014 unused" },
      { connector: "to", pin: 8, desc: "RJ45 pin 8 \u2014 unused" },
    ],
    notes: "Cable Wholesale black shell. Male DB9. Wires cross in the middle \u2014 Yellow/Black swap, Green/Red swap.",
  },
  {
    from: "db9", to: "rj45", status: "standard", title: "Adam KP Yellow \u2014 CAM / IFB",
    use: "Adam intercom camera IFB adapter. Yellow shell. Matrix audio only, no data.",
    tag: "shell",
    wiring: [
      { fromPin: 8, toPin: 3, desc: "DB9 pin 8 \u2192 RJ45 pin 3 (Wht/Grn) \u2014 FROM MTX +" },
      { fromPin: 5, toPin: 4, desc: "DB9 pin 5 \u2192 RJ45 pin 4 (Blue) \u2014 TO MTX \u2212" },
      { fromPin: 4, toPin: 5, desc: "DB9 pin 4 \u2192 RJ45 pin 5 (Wht/Blue) \u2014 TO MTX +" },
      { fromPin: 7, toPin: 6, desc: "DB9 pin 7 \u2192 RJ45 pin 6 (Green) \u2014 FROM MTX \u2212" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "DB9 pins 1, 2, 3, 6, 9 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 7, 8 \u2014 unused" },
    ],
    notes: "Cable Wholesale yellow shell. Male DB9. Same MTX wiring as Black but without DATA+/DATA\u2212 pair.",
  },
  {
    from: "db9", to: "rj45", status: "standard", title: "Serial Data Grey \u2014 RS-232/422",
    use: "Serial data adapter for RS-232 or RS-422 connections. Grey shell.",
    tag: "shell",
    wiring: [
      { fromPin: 8, toPin: 6, desc: "DB9 pin 8 \u2192 RJ45 pin 6 (Green)" },
      { fromPin: 7, toPin: 5, desc: "DB9 pin 7 \u2192 RJ45 pin 5 (Wht/Blue)" },
      { fromPin: 2, toPin: 4, desc: "DB9 pin 2 \u2192 RJ45 pin 4 (Blue)" },
      { fromPin: 3, toPin: 3, desc: "DB9 pin 3 \u2192 RJ45 pin 3 (Wht/Grn)" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "DB9 pins 1, 4, 5, 6, 9 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 7, 8 \u2014 unused" },
    ],
    notes: "Cable Wholesale grey shell. Uses only 4 wires for serial data.",
  },
  {
    from: "db9", to: "rj45", status: "standard", title: "RS-422 Null Crossover \u2014 TSI to Kalypso",
    use: "RS-422 null/crossover adapter. TSI-1000 to Kalypso at the Kalypso end.",
    tag: "shell",
    wiring: [
      { fromPin: 8, toPin: 6, desc: "DB9 pin 8 \u2192 RJ45 pin 6 (Green)" },
      { fromPin: 7, toPin: 5, desc: "DB9 pin 7 \u2192 RJ45 pin 5 (Wht/Blue)" },
      { fromPin: 2, toPin: 3, desc: "DB9 pin 2 \u2192 RJ45 pin 3 (Wht/Grn) \u2014 crossed" },
      { fromPin: 3, toPin: 4, desc: "DB9 pin 3 \u2192 RJ45 pin 4 (Blue) \u2014 crossed" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "DB9 pins 1, 4, 5, 6, 9 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 7, 8 \u2014 unused" },
    ],
    notes: "Tx/Rx pair is swapped compared to the straight grey adapter. Pins 2\u21943 on the RJ45 side.",
  },
  {
    from: "db9", to: "rj45", status: "standard", title: "RS-232 Adapter \u2014 TSI to Kalypso",
    use: "RS-232 straight adapter. TSI-1000 to Kalypso at the Kalypso end.",
    tag: "shell",
    wiring: [
      { fromPin: 1, toPin: 8, desc: "DB9 pin 1 \u2192 RJ45 pin 8 (Brown) \u2014 DCD" },
      { fromPin: 2, toPin: 4, desc: "DB9 pin 2 \u2192 RJ45 pin 4 (Blue) \u2014 RxD" },
      { fromPin: 3, toPin: 5, desc: "DB9 pin 3 \u2192 RJ45 pin 5 (Wht/Blue) \u2014 TxD" },
    ],
    deadEnds: [
      { connector: "from", pin: 4, desc: "DB9 pins 4\u20139 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 3, 6, 7 \u2014 unused" },
    ],
    notes: "Only 3 wires \u2014 minimal RS-232 connection. Ground through connector shell or cable shield.",
  },
  {
    from: "db9", to: "rj45", status: "standard", title: "RS-232 Null Crossover \u2014 TSI to Kalypso",
    use: "RS-232 null/crossover adapter. TSI-1000 to Kalypso at the Kalypso end.",
    tag: "shell",
    wiring: [
      { fromPin: 1, toPin: 8, desc: "DB9 pin 1 \u2192 RJ45 pin 8 (Brown) \u2014 DCD" },
      { fromPin: 2, toPin: 5, desc: "DB9 pin 2 \u2192 RJ45 pin 5 (Wht/Blue) \u2014 crossed" },
      { fromPin: 3, toPin: 4, desc: "DB9 pin 3 \u2192 RJ45 pin 4 (Blue) \u2014 crossed" },
    ],
    deadEnds: [
      { connector: "from", pin: 4, desc: "DB9 pins 4\u20139 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 3, 6, 7 \u2014 unused" },
    ],
    notes: "Tx/Rx crossed compared to straight RS-232 adapter. Pins 4\u21945 swapped on RJ45 side.",
  },
  {
    from: "rj12", to: "rj45", status: "standard", title: "Cronus RJ12 to RJ45",
    use: "Cronus timing/tally adapter. RJ12 to standard RJ45 for RJ/9-pin breakout.",
    tag: "shell",
    wiring: [
      { fromPin: 1, toPin: 3, desc: "RJ12 pin 1 \u2192 RJ45 pin 3 (Wht/Grn)" },
      { fromPin: 2, toPin: 5, desc: "RJ12 pin 2 \u2192 RJ45 pin 5 (Wht/Blue)" },
      { fromPin: 3, toPin: 1, desc: "RJ12 pin 3 \u2192 RJ45 pin 1 (Wht/Org)" },
      { fromPin: 4, toPin: 2, desc: "RJ12 pin 4 \u2192 RJ45 pin 2 (Orange)" },
      { fromPin: 5, toPin: 4, desc: "RJ12 pin 5 \u2192 RJ45 pin 4 (Blue)" },
      { fromPin: 6, toPin: 6, desc: "RJ12 pin 6 \u2192 RJ45 pin 6 (Green)" },
    ],
    deadEnds: [
      { connector: "to", pin: 7, desc: "RJ45 pin 7 \u2014 unused" },
      { connector: "to", pin: 8, desc: "RJ45 pin 8 \u2014 unused" },
    ],
    notes: "All 6 RJ12 pins used. Brown pair on RJ45 is unused.",
  },
];

export default STANDARD_BUILDS;
