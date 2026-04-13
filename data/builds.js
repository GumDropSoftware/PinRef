// ─── CABLE BUILD DATA ────────────────────────────────────────────────────────

const STANDARD_BUILDS = [
  // XLR3 combos
  {
    from: "xlr3", to: "xlr3", status: "standard", title: "XLR3 Mic Cable (Straight-Through)",
    use: "Standard microphone or balanced audio cable. Also carries SMPTE LTC timecode and AES3 digital audio over the same wiring (AES3 requires true 110\u03A9 cable for spec compliance).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground / Shield to Ground / Shield" },
      { fromPin: 2, toPin: 2, desc: "Hot (+) to Hot (+)" },
      { fromPin: 3, toPin: 3, desc: "Cold (\u2212) to Cold (\u2212)" },
    ],
    notes: "Same wiring covers analog balanced audio, AES3 digital audio, and SMPTE LTC timecode. LTC is ~0.5\u20132 V p-p audio-band, so any good balanced audio run works for hundreds of feet. AES3 needs 110\u03A9 digital audio cable; analog mic cable works at short distances but causes jitter on longer runs.",
    sources: [
      { label: "AES14-1992 XLR Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=36" },
      { label: "ETC SMPTE LTC Pinout &amp; Wiring", url: "https://support.etcconnect.com/ETC/Networking/Show_Control_and_IO_Control/SMPTE_Pinout_and_Wiring" },
    ],
  },
  {
    from: "xlr3", to: "xlr5", status: "standard", title: "XLR3 to XLR5 \u2014 Intercom / Audio",
    use: "Send one or both balanced channels into an XLR5 intercom connector. One cable = mic send only; two cables = full send + earpiece return.",
    multiChannel: {
      max: 2,
      multiSide: "from",
      channelLabels: ["Send \u2014 Mic (XLR5 Pin 2)", "Return \u2014 Earphone (XLR5 Pins 4/5)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 2, toPin: 2, desc: "XLR3 pin 2 (Hot +) to XLR5 pin 2 (Mic Signal)" },
            { fromPin: 3, toPin: 3, desc: "XLR3 pin 3 (Cold) to XLR5 pin 3 (Earphone Return/Ground)" },
            { fromPin: 1, toPin: 1, desc: "XLR3 pin 1 (Ground) to XLR5 pin 1 (Ground)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 4, desc: "XLR3 pin 2 (Hot +) to XLR5 pin 4 (Left Earphone +)" },
            { fromPin: 3, toPin: 5, desc: "XLR3 pin 3 (Cold/Ring conductor) to XLR5 pin 5 (Right Earphone +)" },
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
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "xlr3", to: "trs", status: "standard", title: "XLR3 to 1/4\" TRS \u2014 Balanced Audio",
    use: "Balanced line-level audio between XLR and TRS gear",
    wiring: [
      { fromPin: 1, toPin: 3, desc: "Ground (pin 1) to Sleeve" },
      { fromPin: 2, toPin: 1, desc: "Hot (+) (pin 2) to Tip" },
      { fromPin: 3, toPin: 2, desc: "Cold (\u2212) (pin 3) to Ring" },
    ],
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Sweetwater \u2014 Tip Ring Sleeve (TRS)", url: "https://www.sweetwater.com/insync/tip-ring-sleeve-trs/" },
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
    notes: "StudioHub+ single-channel balanced: Hot on pin 1 (Wht/Org), Cold on pin 2 (Orange), Ground on pin 4 (Blue). Second channel uses the green pair 3/6 and white-blue 5. Pins 7/8 are reserved for \u00b115V DC in active StudioHub+ panels \u2014 do not short to audio ground.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },
  {
    from: "xlr3", to: "db25", status: "standard", title: "XLR3 to DB25 \u2014 Tascam/AES59 Audio Snake",
    use: "One channel of a Tascam/AES59 analog audio snake breakout. 8 channels fit in a DB25. Channels run right-to-left across the connector \u2014 Ch1 is at the far end (pins 24/12/25), Ch8 is at the near end (pins 1/14/2).",
    multiChannel: {
      max: 8,
      multiSide: "to",
      channelLabels: [
        "Ch1 \u2014 pins 24/12/25 (Hot/Cold/Gnd)",
        "Ch2 \u2014 pins 10/23/11",
        "Ch3 \u2014 pins 21/9/22",
        "Ch4 \u2014 pins 7/20/8",
        "Ch5 \u2014 pins 18/6/19",
        "Ch6 \u2014 pins 4/17/5",
        "Ch7 \u2014 pins 15/3/16",
        "Ch8 \u2014 pins 1/14/2",
      ],
      perChannel: [
        { wiring: [{ fromPin: 2, toPin: 24, desc: "Hot (XLR 2) to DB25 pin 24 (Ch1 Hot)" }, { fromPin: 3, toPin: 12, desc: "Cold (XLR 3) to DB25 pin 12 (Ch1 Cold)" }, { fromPin: 1, toPin: 25, desc: "Ground (XLR 1) to DB25 pin 25 (Ch1 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 10, desc: "Hot to DB25 pin 10 (Ch2 Hot)" }, { fromPin: 3, toPin: 23, desc: "Cold to DB25 pin 23 (Ch2 Cold)" }, { fromPin: 1, toPin: 11, desc: "Ground to DB25 pin 11 (Ch2 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 21, desc: "Hot to DB25 pin 21 (Ch3 Hot)" }, { fromPin: 3, toPin: 9, desc: "Cold to DB25 pin 9 (Ch3 Cold)" }, { fromPin: 1, toPin: 22, desc: "Ground to DB25 pin 22 (Ch3 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 7, desc: "Hot to DB25 pin 7 (Ch4 Hot)" }, { fromPin: 3, toPin: 20, desc: "Cold to DB25 pin 20 (Ch4 Cold)" }, { fromPin: 1, toPin: 8, desc: "Ground to DB25 pin 8 (Ch4 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 18, desc: "Hot to DB25 pin 18 (Ch5 Hot)" }, { fromPin: 3, toPin: 6, desc: "Cold to DB25 pin 6 (Ch5 Cold)" }, { fromPin: 1, toPin: 19, desc: "Ground to DB25 pin 19 (Ch5 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 4, desc: "Hot to DB25 pin 4 (Ch6 Hot)" }, { fromPin: 3, toPin: 17, desc: "Cold to DB25 pin 17 (Ch6 Cold)" }, { fromPin: 1, toPin: 5, desc: "Ground to DB25 pin 5 (Ch6 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 15, desc: "Hot to DB25 pin 15 (Ch7 Hot)" }, { fromPin: 3, toPin: 3, desc: "Cold to DB25 pin 3 (Ch7 Cold)" }, { fromPin: 1, toPin: 16, desc: "Ground to DB25 pin 16 (Ch7 Gnd)" }] },
        { wiring: [{ fromPin: 2, toPin: 1, desc: "Hot to DB25 pin 1 (Ch8 Hot)" }, { fromPin: 3, toPin: 14, desc: "Cold to DB25 pin 14 (Ch8 Cold)" }, { fromPin: 1, toPin: 2, desc: "Ground to DB25 pin 2 (Ch8 Gnd)" }] },
      ],
    },
    wiring: [
      { fromPin: 2, toPin: 24, desc: "Hot (XLR 2) to DB25 pin 24 (Ch1 Hot)" },
      { fromPin: 3, toPin: 12, desc: "Cold (XLR 3) to DB25 pin 12 (Ch1 Cold)" },
      { fromPin: 1, toPin: 25, desc: "Ground (XLR 1) to DB25 pin 25 (Ch1 Gnd)" },
    ],
    deadEnds: [{ connector: "to", pin: 13, desc: "DB25 pin 13 \u2014 No Connect (only unused pin)" }],
    notes: "AES59-2012 / Tascam DA-88 standard. Yamaha uses a different (AES3 digital) DB25 pinout that is NOT compatible \u2014 always confirm which standard the gear at the other end follows. Counterintuitively, channels run right-to-left across the connector.",
    sources: [
      { label: "TASCAM DB-25 Pinout Standard (official)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
      { label: "Aviom DB25 Pinout Information", url: "https://www.aviom.com/library/Technical-Resources/75_DB25-Pinout-Information.pdf" },
      { label: "AES59-2012 Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=92" },
      { label: "Sweetwater AES/EBU DB25 Pinout Guide", url: "https://www.sweetwater.com/sweetcare/articles/aesebu-db25-pinout-guide/" },
    ],
  },
  {
    from: "xlr3", to: "xlr4", status: "partial", title: "XLR3 to XLR4 \u2014 Balanced Feed to Headset Earphone",
    use: "Drive an XLR4 intercom headset earphone from a balanced XLR3 source. Listen-only \u2014 mic (XLR4 pin 2) is unused.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Mic Ground (pin 1)" },
      { fromPin: 2, toPin: 4, desc: "Hot (+) to Earphone Signal (pin 4)" },
      { fromPin: 3, toPin: 3, desc: "Cold (\u2212) to Earphone Return (pin 3)" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "XLR4 pin 2 (Mic Signal) \u2014 unused, listen-only feed" }],
    notes: "Balanced audio drives the earphone unbalanced. Cold (XLR3 pin 3) ties to earphone return/ground at the XLR4 end.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "xlr3", to: "bnc", status: "not_possible", title: "XLR3 to BNC \u2014 Not Compatible",
    use: "XLR carries balanced audio; BNC carries 75\u03A9 video / digital. Different impedance (110\u03A9 vs 75\u03A9), different signal type. Cannot be adapted with a passive cable.",
    wiring: [],
    sources: [
      { label: "SMPTE ST 259 / ST 292 (SDI)", url: "https://en.wikipedia.org/wiki/Serial_digital_interface" },
    ],
  },
  {
    from: "xlr3", to: "triax", status: "not_possible", title: "XLR3 to Triax \u2014 Not Compatible",
    use: "Triax carries multiplexed camera control, video, and DC power. Completely different system from balanced audio \u2014 not adaptable with a passive cable.",
    wiring: [],
    sources: [
      { label: "Triaxial cable \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Triaxial_cable" },
    ],
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
    notes: "Use the + button to add more XLR channels. Each XLR cable gets its own channel on the DT12. Pin layout follows the standard Whirlwind/Clark DT12 industry convention.",
    sources: [
      { label: "Clark Wire DT12 Audio Multipin Pinout", url: "https://www.clarkwire.com/dt12-audio-multipin-pinout" },
      { label: "Whirlwind DT12 Series", url: "https://www.whirlwindusa.com/products/ac-power-dt-12-dt12-series-broadcast-multipin-connectors" },
    ],
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
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "xlr3", to: "ts", status: "standard", title: "XLR3 to TS \u2014 Balanced to Unbalanced",
    use: "Balanced XLR output to a 1/4\u201d unbalanced input (guitar amp, DI box, unbalanced insert).",
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) to Tip \u2014 Signal" },
      { fromPin: 1, toPin: 2, desc: "Ground to Sleeve" },
    ],
    deadEnds: [{ connector: "from", pin: 3, desc: "XLR pin 3 (Cold \u2212) \u2014 leave floating (safest for active outputs)" }],
    notes: "Balanced to unbalanced conversion. Pin 3 handling depends on the source output topology: FLOAT pin 3 for transformerless active/servo-balanced outputs (grounding can short an inverting op-amp). TIE pin 3 to pin 1 only for transformer-balanced outputs (provides DC reference). When in doubt, leave floating \u2014 it's the safer default.",
    sources: [
      { label: "Rane Note 151 \u2014 Grounding &amp; Shielding", url: "https://www.ranecommercial.com/legacy/note151.html" },
      { label: "Benchmark XLR-to-RCA Adapter Cable Application Note", url: "https://benchmarkmedia.com/products/benchmark-xlrfm-to-rca-adapter-cable-pin-3-floating" },
    ],
  },
  {
    from: "xlr3", to: "rca", status: "partial", title: "XLR3 to RCA \u2014 Pro to Consumer",
    use: "Pro XLR output to consumer RCA input (amp, receiver, recording interface). Requires level matching \u2014 a bare adapter will overdrive consumer gear.",
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) to Center \u2014 Signal" },
      { fromPin: 1, toPin: 2, desc: "Ground to Shell" },
    ],
    deadEnds: [{ connector: "from", pin: 3, desc: "XLR pin 3 (Cold \u2212) \u2014 leave floating (safer for active outputs)" }],
    notes: "\u26a0\ufe0f Level mismatch ~12 dB (pro +4 dBu = 1.23 V vs consumer \u221210 dBV = 0.316 V). Pro peaks can exceed consumer input clip by 15+ dB. Consumer RCA inputs usually have NO gain control \u2014 use an inline pad (\u221212 dB / \u221220 dB), a passive DI (Radial ProAV), or a dedicated level converter. Pin 3 should float for transformerless active outputs \u2014 grounding it can short an inverting op-amp stage.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Benchmark \u2014 Balanced vs. Unbalanced", url: "https://benchmarkmedia.com/blogs/application_notes/balanced-vs-unbalanced-analog-interfaces" },
    ],
  },

  // XLR5 combos
  {
    from: "xlr5", to: "xlr5", status: "standard", title: "XLR5 Straight-Through",
    use: "Clear-Com / RTS intercom extension, stereo audio, or DMX512 extension",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Pin 2 to Pin 2" },
      { fromPin: 3, toPin: 3, desc: "Pin 3 to Pin 3" },
      { fromPin: 4, toPin: 4, desc: "Pin 4 to Pin 4" },
      { fromPin: 5, toPin: 5, desc: "Pin 5 to Pin 5" },
    ],
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "USITT DMX512-A Standard Guide (ESTA)", url: "https://tsp.esta.org/tsp/documents/docs/DMX512-A_Guide_(8x10)_ESTA.PDF" },
    ],
  },
  {
    from: "xlr5", to: "xlr4", status: "standard", title: "XLR5 to XLR4 \u2014 Intercom Beltpack to Headset",
    use: "Clear-Com or RTS beltpack to XLR4 intercom headset. Full 2-way \u2014 mic and earphone both work. XLR4 is mono so right earphone (XLR5 pin 5) is unused.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Mic Ground to Mic Ground" },
      { fromPin: 2, toPin: 2, desc: "Mic Signal (+) to Mic Signal (pin 2)" },
      { fromPin: 3, toPin: 3, desc: "Earphone Return to Earphone Return (pin 3)" },
      { fromPin: 4, toPin: 4, desc: "Left Earphone (+) to Earphone Signal (pin 4)" },
    ],
    deadEnds: [{ connector: "from", pin: 5, desc: "XLR5 pin 5 (Right Earphone) \u2014 XLR4 is mono, right channel not present" }],
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
    ],
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
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "xlr5", to: "db25", status: "field_hack", title: "XLR5 to DB25 \u2014 Intercom Snake Breakout",
    use: "Field hack for multi-channel intercom breakouts on DB25. Non-standard \u2014 no published reference.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground (XLR5 1) to DB25 pin 1" },
      { fromPin: 2, toPin: 2, desc: "XLR5 pin 2 to DB25 pin 2" },
      { fromPin: 3, toPin: 3, desc: "XLR5 pin 3 to DB25 pin 3" },
      { fromPin: 4, toPin: 4, desc: "XLR5 pin 4 to DB25 pin 4" },
      { fromPin: 5, toPin: 5, desc: "XLR5 pin 5 to DB25 pin 5" },
    ],
    notes: "\u26a0\ufe0f Non-standard \u2014 label clearly on both ends. Maps one intercom channel to pins 1-5 of a DB25. Do NOT confuse with Tascam/AES59 analog audio DB25, which uses channels on pins 24/12/25 descending \u2014 accidentally plugging this into a Tascam snake would miswire audio.",
    sources: [
      { label: "LMG internal \u2014 custom intercom snake (no published standard)", url: null },
    ],
  },

  {
    from: "xlr5", to: "xlr3", status: "partial", title: "XLR5 to XLR3 \u2014 Intercom Breakout",
    use: "Tap one or both balanced channels from an XLR5 intercom line. One cable = send only; two cables = full send + return.",
    multiChannel: {
      max: 2,
      multiSide: "to",
      channelLabels: ["Send \u2014 Mic (Pin 2)", "Return \u2014 Earphone (Pins 4/5)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 2, toPin: 2, desc: "XLR5 pin 2 (Mic Signal) to XLR3 pin 2 (Hot +)" },
            { fromPin: 3, toPin: 3, desc: "XLR5 pin 3 (Earphone Return/Ground) to XLR3 pin 3 (Cold)" },
            { fromPin: 1, toPin: 1, desc: "XLR5 pin 1 (Ground) to XLR3 pin 1 (Ground)" },
          ],
        },
        {
          wiring: [
            { fromPin: 4, toPin: 2, desc: "XLR5 pin 4 (Left Earphone +) to XLR3 pin 2 (Hot +)" },
            { fromPin: 5, toPin: 3, desc: "XLR5 pin 5 (Right Earphone +) to XLR3 pin 3 (Cold/Ring conductor)" },
            { fromPin: 1, toPin: 1, desc: "XLR5 pin 1 (Ground) to XLR3 pin 1 (Ground)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground to Ground" },
      { fromPin: 2, toPin: 2, desc: "Mic Signal (pin 2) to Hot (+)" },
      { fromPin: 3, toPin: 3, desc: "Earphone Return/Ground (pin 3) to Cold" },
    ],
    deadEnds: [
      { connector: "from", pin: 4, desc: "XLR5 pin 4 (Left Earphone) \u2014 unused (add 2nd XLR3 for earphone)" },
      { connector: "from", pin: 5, desc: "XLR5 pin 5 (Right Earphone) \u2014 unused (add 2nd XLR3 for earphone)" },
    ],
    notes: "Use 1 cable for mic send only. Add a 2nd XLR3 on pins 4/5 for earphone return \u2014 all 5 pins used, nothing wasted.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "xlr5", to: "mini_trs", status: "standard", title: "XLR5 to 3.5mm TRS \u2014 Intercom Earpiece Feed",
    use: "Taking the earpiece output from a Clear-Com beltpack to drive a 3.5mm consumer headphone.",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "XLR5 pin 4 (Left Earphone +) to Tip" },
      { fromPin: 5, toPin: 2, desc: "XLR5 pin 5 (Right Earphone +) to Ring" },
      { fromPin: 1, toPin: 3, desc: "XLR5 pin 1 (Ground) to Sleeve" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "Pin 2 (Mic Signal) \u2014 unused, no mic circuit on TRS" },
      { connector: "from", pin: 3, desc: "Pin 3 (Earphone Return) \u2014 unused, ground already carried on pin 1" },
    ],
    notes: "Listen-only. No talkback. For 2-way use a TRRS headset.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "xlr5", to: "mini_trrs", status: "standard", title: "XLR5 to 3.5mm TRRS \u2014 Intercom to Consumer Headset",
    use: "Drive a CTIA TRRS headset (iPhone, modern Android) from a Clear-Com or RTS beltpack.",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "XLR5 pin 4 (Left Earphone +) to Tip (Left Audio)" },
      { fromPin: 5, toPin: 2, desc: "XLR5 pin 5 (Right Earphone +) to Ring 1 (Right Audio)" },
      { fromPin: 2, toPin: 4, desc: "XLR5 pin 2 (Mic Signal) to Sleeve (Mic CTIA)" },
      { fromPin: 1, toPin: 3, desc: "XLR5 pin 1 (Ground) to Ring 2 (Ground CTIA)" },
      { fromPin: 3, toPin: 3, desc: "XLR5 pin 3 (Earphone Return) to Ring 2 (Ground CTIA)" },
    ],
    notes: "CTIA (Apple/Android) wiring: mic is on Sleeve, ground is on Ring 2. Tie both XLR5 pin 1 and pin 3 to TRRS Ring 2 at the TRRS end. If mic and earphone are swapped when tested, the headset uses OMTP \u2014 reverse Ring 2 and Sleeve.",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec (LRGM)", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },

  // DT12 combos
  {
    from: "dt12", to: "dt12", status: "standard", title: "DT12 Straight-Through Extension",
    use: "Extending a DT12 / FK37 multi-channel audio snake \u2014 all 37 pins straight through",
    wiring: Array.from({ length: 37 }, (_, i) => ({
      fromPin: i + 1, toPin: i + 1, desc: `Pin ${i + 1} to Pin ${i + 1}`
    })),
    sources: [
      { label: "Clark Wire DT12 Audio Multipin Pinout", url: "https://www.clarkwire.com/dt12-audio-multipin-pinout" },
      { label: "Whirlwind DT12 Series", url: "https://www.whirlwindusa.com/products/ac-power-dt-12-dt12-series-broadcast-multipin-connectors" },
    ],
  },
  {
    from: "dt12", to: "db25", status: "standard", title: "DT12 to DB25 \u2014 Audio Snake (8 Ch, AES59/Tascam)",
    use: "First 8 channels of DT12 to DB25 AES59/Tascam standard. Common in broadcast trucks. A DB25 only carries 8 channels \u2014 DT12 channels 9\u201312 do not fit and must break out separately.",
    wiring: [
      { fromPin: 1, toPin: 24, desc: "DT12 pin 1 (Ch1 Hi) \u2192 DB25 pin 24 (Ch1 Hot)" },
      { fromPin: 5, toPin: 12, desc: "DT12 pin 5 (Ch1 Lo) \u2192 DB25 pin 12 (Ch1 Cold)" },
      { fromPin: 2, toPin: 25, desc: "DT12 pin 2 (Ch1 Gnd) \u2192 DB25 pin 25 (Ch1 Gnd)" },
      { fromPin: 3, toPin: 10, desc: "DT12 pin 3 (Ch2 Hi) \u2192 DB25 pin 10 (Ch2 Hot)" },
      { fromPin: 6, toPin: 23, desc: "DT12 pin 6 (Ch2 Lo) \u2192 DB25 pin 23 (Ch2 Cold)" },
      { fromPin: 4, toPin: 11, desc: "DT12 pin 4 (Ch2 Gnd) \u2192 DB25 pin 11 (Ch2 Gnd)" },
      { fromPin: 8, toPin: 21, desc: "DT12 pin 8 (Ch3 Hi) \u2192 DB25 pin 21 (Ch3 Hot)" },
      { fromPin: 9, toPin: 9, desc: "DT12 pin 9 (Ch3 Lo) \u2192 DB25 pin 9 (Ch3 Cold)" },
      { fromPin: 7, toPin: 22, desc: "DT12 pin 7 (Ch3 Gnd) \u2192 DB25 pin 22 (Ch3 Gnd)" },
      { fromPin: 10, toPin: 7, desc: "DT12 pin 10 (Ch4 Hi) \u2192 DB25 pin 7 (Ch4 Hot)" },
      { fromPin: 12, toPin: 20, desc: "DT12 pin 12 (Ch4 Lo) \u2192 DB25 pin 20 (Ch4 Cold)" },
      { fromPin: 11, toPin: 8, desc: "DT12 pin 11 (Ch4 Gnd) \u2192 DB25 pin 8 (Ch4 Gnd)" },
      { fromPin: 14, toPin: 18, desc: "DT12 pin 14 (Ch5 Hi) \u2192 DB25 pin 18 (Ch5 Hot)" },
      { fromPin: 15, toPin: 6, desc: "DT12 pin 15 (Ch5 Lo) \u2192 DB25 pin 6 (Ch5 Cold)" },
      { fromPin: 13, toPin: 19, desc: "DT12 pin 13 (Ch5 Gnd) \u2192 DB25 pin 19 (Ch5 Gnd)" },
      { fromPin: 16, toPin: 4, desc: "DT12 pin 16 (Ch6 Hi) \u2192 DB25 pin 4 (Ch6 Hot)" },
      { fromPin: 18, toPin: 17, desc: "DT12 pin 18 (Ch6 Lo) \u2192 DB25 pin 17 (Ch6 Cold)" },
      { fromPin: 17, toPin: 5, desc: "DT12 pin 17 (Ch6 Gnd) \u2192 DB25 pin 5 (Ch6 Gnd)" },
      { fromPin: 19, toPin: 15, desc: "DT12 pin 19 (Ch7 Hi) \u2192 DB25 pin 15 (Ch7 Hot)" },
      { fromPin: 21, toPin: 3, desc: "DT12 pin 21 (Ch7 Lo) \u2192 DB25 pin 3 (Ch7 Cold)" },
      { fromPin: 20, toPin: 16, desc: "DT12 pin 20 (Ch7 Gnd) \u2192 DB25 pin 16 (Ch7 Gnd)" },
      { fromPin: 23, toPin: 1, desc: "DT12 pin 23 (Ch8 Hi) \u2192 DB25 pin 1 (Ch8 Hot)" },
      { fromPin: 25, toPin: 14, desc: "DT12 pin 25 (Ch8 Lo) \u2192 DB25 pin 14 (Ch8 Cold)" },
      { fromPin: 24, toPin: 2, desc: "DT12 pin 24 (Ch8 Gnd) \u2192 DB25 pin 2 (Ch8 Gnd)" },
    ],
    deadEnds: [
      { connector: "to", pin: 13, desc: "DB25 pin 13 \u2014 No Connect (only unused pin on DB25)" },
      { connector: "from", pin: 26, desc: "DT12 pins 26\u201337 (Channels 9\u201312) \u2014 do not fit on a single DB25; break out to a second DB25 or other connectors" },
    ],
    notes: "AES59-2012 / Tascam DA-88 standard. DB25 carries 8 channels; DT12 carries 12 \u2014 channels 9\u201312 need a separate breakout. Yamaha DB25 is different (AES3 digital); never cross without a crossover cable.",
    sources: [
      { label: "TASCAM DB-25 Pinout Standard (official)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
      { label: "Clark Wire DT12 Audio Multipin Pinout", url: "https://www.clarkwire.com/dt12-audio-multipin-pinout" },
      { label: "AES59-2012 Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=92" },
    ],
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
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
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
    notes: "StudioHub+ layout. Cat5 has 4 pairs; 2 balanced TRS channels use 3 pairs (pins 1/2/4 and 3/6/5). Pins 7\u20138 are reserved for DC power on active StudioHub+ panels.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },

  {
    from: "trs", to: "xlr3", status: "standard", title: "TRS to XLR3 \u2014 Balanced Audio",
    use: "Balanced TRS output to XLR input. Mixer insert return, interface output to snake.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Tip to Hot (+)" },
      { fromPin: 2, toPin: 3, desc: "Ring to Cold (\u2212)" },
      { fromPin: 3, toPin: 1, desc: "Sleeve to Ground" },
    ],
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "trs", to: "xlr4", status: "partial", title: "TRS to XLR4 \u2014 Monitor Feed to Headset Earphone",
    use: "Send a 1/4\u201d TRS mono or stereo program feed to an XLR4 intercom headset earphone. Listen-only \u2014 mic circuit unused.",
    wiring: [
      { fromPin: 3, toPin: 1, desc: "Sleeve to Mic Ground (pin 1)" },
      { fromPin: 3, toPin: 3, desc: "Sleeve to Earphone Return (pin 3)" },
      { fromPin: 1, toPin: 4, desc: "Tip to Earphone Signal (pin 4)" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "TRS Ring \u2014 XLR4 earphone is mono, right channel dropped" },
      { connector: "to", pin: 2, desc: "XLR4 pin 2 (Mic Signal) \u2014 unused, listen-only" },
    ],
    notes: "Mono listen feed only. Tie TRS Sleeve to both XLR4 pin 1 and pin 3 at the XLR4 end.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },

  // RJ45 combos
  {
    from: "rj45", to: "rj45", status: "standard", title: "RJ45 Straight-Through (T568B)",
    use: "Standard Ethernet patch cable. Both ends wired to T568B (pins 1/2 = Orange pair, 3/6 = Green pair, 4/5 = Blue pair, 7/8 = Brown pair).",
    wiring: Array.from({ length: 8 }, (_, i) => ({
      fromPin: i + 1, toPin: i + 1, desc: `Pin ${i + 1} to Pin ${i + 1}`
    })),
    sources: [
      { label: "TIA/EIA-568-B Wiring Standard", url: "https://www.truecable.com/blogs/cable-academy/t568a-vs-t568b" },
    ],
  },
  {
    from: "rj45", to: "db9", status: "standard", title: "RJ45 to DB9 \u2014 Cisco / Yost Console Cable",
    use: "Cisco router/switch console access. This is the Yost RJ45 serial standard (1987), adopted by Cisco for their light-blue console cables.",
    wiring: [
      { fromPin: 1, toPin: 8, desc: "RJ45 pin 1 (RTS) to DB9 pin 8 (CTS)" },
      { fromPin: 2, toPin: 6, desc: "RJ45 pin 2 (DTR) to DB9 pin 6 (DSR)" },
      { fromPin: 3, toPin: 2, desc: "RJ45 pin 3 (TxD) to DB9 pin 2 (RxD)" },
      { fromPin: 4, toPin: 5, desc: "RJ45 pin 4 (GND) to DB9 pin 5 (GND)" },
      { fromPin: 5, toPin: 5, desc: "RJ45 pin 5 (GND) to DB9 pin 5 (GND)" },
      { fromPin: 6, toPin: 3, desc: "RJ45 pin 6 (RxD) to DB9 pin 3 (TxD)" },
      { fromPin: 7, toPin: 4, desc: "RJ45 pin 7 (DSR) to DB9 pin 4 (DTR)" },
      { fromPin: 8, toPin: 7, desc: "RJ45 pin 8 (CTS) to DB9 pin 7 (RTS)" },
    ],
    notes: "Yost standard \u2014 the RJ45 rollover puts RTS/CTS, TxD/RxD, DTR/DSR on opposite-numbered pins (1\u21948, 3\u21946, 2\u21947), so the DB9 end ends up with the crossover automatically built in. For sports scoring (Daktronics All Sport, OmniSport, etc.), this is NOT the cable \u2014 those controllers expose plain PC-style DB9 RS-232 on pins 2/3/5; wire a direct DB9 straight-through or 3-wire null modem instead.",
    sources: [
      { label: "Cisco RJ-45 to DB-9 Console Cable Pinout", url: "https://pinoutguide.com/SerialPortsCables/Cisco_RJ-45_to_DB-9_conso_pinout.shtml" },
      { label: "Yost Serial Device Wiring Standard", url: "https://yost.com/computers/RJ45-serial/" },
    ],
  },
  {
    from: "rj45", to: "db25", status: "field_hack", title: "RJ45 to DB25 \u2014 Minimal Serial Adapter",
    use: "Field-built Cat5 to DB25 serial adapter for legacy RS-232 DB25 equipment. 3-wire minimal (Tx/Rx/GND).",
    wiring: [
      { fromPin: 3, toPin: 3, desc: "RJ45 pin 3 (TxD) to DB25 pin 3 (TxD)" },
      { fromPin: 4, toPin: 7, desc: "RJ45 pin 4 (GND) to DB25 pin 7 (GND)" },
      { fromPin: 5, toPin: 7, desc: "RJ45 pin 5 (GND) to DB25 pin 7 (GND)" },
      { fromPin: 6, toPin: 2, desc: "RJ45 pin 6 (RxD) to DB25 pin 2 (RxD)" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "RJ45 pins 1, 2, 7, 8 \u2014 unused" },
    ],
    notes: "RJ45 side uses the Yost/Cisco standard (pins 3=TxD, 4/5=GND, 6=RxD). Not a manufacturer-specific cable \u2014 Swiss Timing / Omega / Tissot venue gear uses RS-485 on proprietary connectors, NOT DB25 RS-232. Add handshaking pins if the target device requires them.",
    sources: [
      { label: "Yost Serial Device Wiring Standard", url: "https://yost.com/computers/RJ45-serial/" },
      { label: "RS-232 DB25 Pinout Reference", url: "https://www.ti.com/lit/an/snla039/snla039.pdf" },
    ],
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
    notes: "StudioHub+ receive side. Pair with XLR3\u2192RJ45 at the source. Two balanced channels fit in one Cat5. Pins 7/8 reserved for DC on active StudioHub+ panels.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
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
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
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
    notes: "StudioHub+ receive side. Pair with TRS\u2192RJ45 at the source. Pins 7\u20138 reserved for DC power on active StudioHub+ panels.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },
  {
    from: "rj45", to: "xlr4", status: "partial", title: "RJ45 to XLR4 \u2014 Intercom Headset over Cat5",
    use: "Receiving end of an XLR4 intercom headset run over Cat5. Mic and earphone both carried. Pair with XLR4\u2192RJ45 at the source.",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "RJ45 pin 4 (Blue) to Mic Ground (pin 1)" },
      { fromPin: 1, toPin: 2, desc: "RJ45 pin 1 (Wht/Org) to Mic Signal (pin 2)" },
      { fromPin: 2, toPin: 3, desc: "RJ45 pin 2 (Orange) to Earphone Return (pin 3)" },
      { fromPin: 3, toPin: 4, desc: "RJ45 pin 3 (Wht/Grn) to Earphone Signal (pin 4)" },
    ],
    deadEnds: [{ connector: "from", pin: 5, desc: "RJ45 pins 5,6,7,8 \u2014 unused" }],
    notes: "Mic and earphone signals are unbalanced over Cat5. Keep runs under 100 ft for reliable mic level.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "rj45", to: "bnc", status: "not_possible", title: "RJ45 to BNC \u2014 NOT a Real SDI-over-Cat5 Path",
    use: "\u26a0\ufe0f This is NOT a working SDI-over-Cat5 cable. A raw pin-to-pin bodge between BNC and RJ45 almost never works even at short distances.",
    wiring: [],
    notes: "SDI is 75\u03A9 single-ended and runs at 1.5\u201312 GHz. Cat5/5e/6 is 100\u03A9 balanced. Tying RJ45 pins together to mate a single-ended signal to a balanced cable violates impedance AND defeats the twisted pair's common-mode rejection. The signal will almost never lock even at 1 m. For real SDI over Cat5, use an ACTIVE extender with a 75\u03A9/100\u03A9 balun and equalizer (MuxLab, AAS, Foresight). For long runs, use SDI-to-fiber. For IP transport, use SMPTE ST 2022-6 or ST 2110.",
    sources: [
      { label: "Belden \u2014 Key to Video Cable Performance", url: "https://www.belden.com/blog/key-to-video-cable-performance" },
      { label: "SMPTE ST 2110", url: "https://www.smpte.org/standards/st2110" },
    ],
  },

  // BNC combos
  {
    from: "bnc", to: "bnc", status: "standard", title: "BNC Straight-Through \u2014 SDI / Genlock / LTC",
    use: "SDI video, genlock/blackburst, tri-level sync, LTC timecode. Always 75\u03A9 cable with 75\u03A9 connectors.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center conductor to Center conductor (Signal)" },
      { fromPin: 2, toPin: 2, desc: "Shell to Shell (Shield / Ground)" },
    ],
    notes: "75\u03A9 cable is mandatory. Belden 1694A (RG-6) covers SD/HD/3G-SDI \u2014 NOT 12G-rated. For 12G-SDI use Belden 4694R, 4794R, or Canare L-5.5CUHD. 50\u03A9 BNC connectors look identical to 75\u03A9 but cause reflections. Analog sync (blackburst, tri-level) runs much longer than SDI on the same cable since it's baseband, not gigahertz.",
    sources: [
      { label: "Belden 12G-SDI Cable Portfolio", url: "https://www.belden.com/products/cable/broadcast-cable/sdi-video-coax-cable/12g-sdi" },
      { label: "Canare 12G-SDI Solutions", url: "https://www.canare.com/12gsdi4ksolutions" },
    ],
  },
  {
    from: "bnc", to: "triax", status: "partial", title: "BNC to Triax \u2014 SDI on Triax Cable",
    use: "Run SDI through broadcast triax cable when you have triax in the ground and need to pull SDI. Uses center + outer shield only; inner shield is unused.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "BNC center to Triax center (Signal)" },
      { fromPin: 2, toPin: 3, desc: "BNC shell to Triax outer shield (Ground)" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "Triax inner shield \u2014 unused (normally carries DC return in a camera system)" }],
    notes: "Only works with 75\u03A9 broadcast triax (Belden 9232/1857A, Canare LV-77S, Clark Wire TV series). 50\u03A9 and 90\u03A9 instrumentation triax also exists \u2014 verify cable type before trusting SDI through it. For camera control, use proper triax-rated camera control units, not this passthrough.",
    sources: [
      { label: "Canford LEMO/Triax/HDTV Fibre Guide", url: "https://www.canford.co.uk/ProductResources/resources/Reference/Lemo%20and%20Fischer%20Triax%20and%20HDTV%20Fibre%20connectors%20guide%20IBC%20lr%20Connector%20Guide.pdf" },
      { label: "Triaxial cable \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Triaxial_cable" },
    ],
  },
  {
    from: "bnc", to: "rj45", status: "not_possible", title: "BNC to RJ45 \u2014 NOT a Real SDI-over-Cat5 Path",
    use: "\u26a0\ufe0f Do not build this. A raw pin-to-pin BNC\u2013Cat5 bodge is not a functional SDI path at any useful distance.",
    wiring: [],
    notes: "75\u03A9 single-ended SDI cannot be passed cleanly down 100\u03A9 twisted pair without impedance matching and equalization. Tying pairs together at both ends defeats the cable's EMI geometry. For SDI over Cat cable use a proper active extender with balun/EQ (MuxLab, AAS, Foresight); for long distance use SDI\u2013fiber; for IP transport use SMPTE ST 2022-6 or ST 2110.",
    sources: [
      { label: "Belden \u2014 Key to Video Cable Performance", url: "https://www.belden.com/blog/key-to-video-cable-performance" },
      { label: "SMPTE ST 2110", url: "https://www.smpte.org/standards/st2110" },
    ],
  },

  {
    from: "triax", to: "bnc", status: "partial", title: "Triax to BNC \u2014 Receive Side of Triax-as-Coax",
    use: "Receive end when using broadcast triax cable as a coax path for SDI. Center + outer shield only.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to BNC center (Signal)" },
      { fromPin: 3, toPin: 2, desc: "Outer shield to BNC shell (Ground)" },
    ],
    deadEnds: [{ connector: "from", pin: 2, desc: "Triax inner shield \u2014 unused" }],
    notes: "Only works with 75\u03A9 broadcast triax (Belden 9232/1857A, Canare LV-77S, Clark Wire TV series). 50\u03A9/90\u03A9 instrumentation triax exists and will not pass SDI cleanly. Not for camera control systems.",
    sources: [
      { label: "Canford LEMO/Triax/HDTV Fibre Guide", url: "https://www.canford.co.uk/ProductResources/resources/Reference/Lemo%20and%20Fischer%20Triax%20and%20HDTV%20Fibre%20connectors%20guide%20IBC%20lr%20Connector%20Guide.pdf" },
    ],
  },

  // Triax
  {
    from: "triax", to: "triax", status: "standard", title: "Triax Extension Cable",
    use: "Camera control / return video extension. All three conductors straight through. Use 75\u03A9 broadcast triax (Belden 9232/1857A, Canare LV-77S).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to Center (Multiplexed video/data)" },
      { fromPin: 2, toPin: 2, desc: "Inner shield to Inner shield (DC power return)" },
      { fromPin: 3, toPin: 3, desc: "Outer shield to Outer shield (DC power / Ground)" },
    ],
    sources: [
      { label: "Canford LEMO/Triax/HDTV Fibre Guide", url: "https://www.canford.co.uk/ProductResources/resources/Reference/Lemo%20and%20Fischer%20Triax%20and%20HDTV%20Fibre%20connectors%20guide%20IBC%20lr%20Connector%20Guide.pdf" },
      { label: "Triaxial cable \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Triaxial_cable" },
    ],
  },

  // DB9 combos
  {
    from: "db9", to: "db9", status: "standard", title: "DB9 Straight-Through (DCE to DTE)",
    use: "Standard serial extension cable \u2014 all 9 pins pass through unchanged.",
    wiring: Array.from({ length: 9 }, (_, i) => ({
      fromPin: i + 1, toPin: i + 1, desc: `Pin ${i + 1} to Pin ${i + 1}`
    })),
    sources: [
      { label: "RS-232 \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/RS-232" },
      { label: "TI SNLA039 \u2014 Popular Connector Pin Assignments", url: "https://www.ti.com/lit/an/snla039/snla039.pdf" },
    ],
  },
  {
    from: "db9", to: "db9", status: "standard", title: "DB9 Null Modem (Full Handshake)",
    use: "Full-handshake crossover between two DTE devices (two PCs, PC to serial device). Needed when the PC requires hardware flow control or DTR/DSR lines high to open the port.",
    wiring: [
      { fromPin: 2, toPin: 3, desc: "Pin 2 (RxD) to Pin 3 (TxD) \u2014 cross Tx/Rx" },
      { fromPin: 3, toPin: 2, desc: "Pin 3 (TxD) to Pin 2 (RxD) \u2014 cross Tx/Rx" },
      { fromPin: 5, toPin: 5, desc: "Pin 5 (Ground) to Pin 5 (Ground)" },
      { fromPin: 7, toPin: 8, desc: "Pin 7 (RTS) to Pin 8 (CTS) \u2014 cross handshake" },
      { fromPin: 8, toPin: 7, desc: "Pin 8 (CTS) to Pin 7 (RTS) \u2014 cross handshake" },
      { fromPin: 4, toPin: 6, desc: "Pin 4 (DTR) to Pin 6 (DSR)" },
      { fromPin: 6, toPin: 4, desc: "Pin 6 (DSR) to Pin 4 (DTR)" },
    ],
    notes: "Use this when handshake lines matter (some PCs/terminal emulators won't open the port without DTR/DSR). For most sports-timing use (Daktronics, OES, Fairplay, Swiss Timing RS-232, DVSport replay ingest), the simpler 3-wire null modem is preferred \u2014 scoreboard controllers broadcast one-way, no flow control needed.",
    sources: [
      { label: "Null Modem \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Null_modem" },
      { label: "RS-232 Null Modem Wiring \u2014 Lammert Bies", url: "https://www.lammertbies.nl/comm/info/rs-232-null-modem" },
    ],
  },
  {
    from: "db9", to: "db9", status: "standard", title: "DB9 Null Modem (3-Wire, Scoreboard/Timing)",
    use: "Minimal null modem for one-way scoreboard/timing data feeds. Daktronics (All Sport, OmniSport), OES, Fairplay, Colorado Time Systems, Swiss Timing RS-232 outputs \u2014 all broadcast one-way with no flow control. DVSport / graphics / streaming PCs ingest with this.",
    wiring: [
      { fromPin: 2, toPin: 3, desc: "Pin 2 (RxD) to Pin 3 (TxD) \u2014 cross Tx/Rx" },
      { fromPin: 3, toPin: 2, desc: "Pin 3 (TxD) to Pin 2 (RxD) \u2014 cross Tx/Rx" },
      { fromPin: 5, toPin: 5, desc: "Pin 5 (Ground) to Pin 5 (Ground)" },
    ],
    deadEnds: [
      { connector: "from", pin: 4, desc: "DTR/DSR/RTS/CTS \u2014 not used (one-way data)" },
      { connector: "to", pin: 4, desc: "DTR/DSR/RTS/CTS \u2014 not used (one-way data)" },
    ],
    notes: "If the PC refuses to open the port, loop DTR\u2194DSR (pins 4\u21946) and RTS\u2194CTS (pins 7\u21948) LOCALLY inside each shell to fake handshake, or use the full-handshake variant instead.",
    sources: [
      { label: "Daktronics Loopback Test (pins 2\u00263)", url: "https://www.daktronics.com/en-us/support/kb/DD2127080" },
      { label: "Connect serial data from Daktronics \u2014 NewBlue", url: "https://newbluefx.zendesk.com/hc/en-us/articles/15498307081243-Connect-serial-data-from-Daktronics-All-Sport-5000" },
    ],
  },
  {
    from: "db9", to: "db25", status: "standard", title: "DB9 to DB25 \u2014 Serial Adapter (EIA-574 to EIA-232)",
    use: "Adapting between DB9 (EIA-574) and DB25 (EIA-232) serial ports. Common on older timing equipment and legacy modems.",
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
    sources: [
      { label: "TI SNLA039 \u2014 Popular Connector Pin Assignments", url: "https://www.ti.com/lit/an/snla039/snla039.pdf" },
      { label: "RS-232 \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/RS-232" },
    ],
  },

  // DB25 combos
  {
    from: "db25", to: "db25", status: "standard", title: "DB25 Straight-Through",
    use: "Audio snake extension (Tascam/AES59 analog or Yamaha AES digital) or serial cable. All 25 pins pass through unchanged.",
    wiring: Array.from({ length: 25 }, (_, i) => ({
      fromPin: i + 1, toPin: i + 1, desc: `Pin ${i + 1} to Pin ${i + 1}`
    })),
    sources: [
      { label: "TASCAM DB-25 Pinout (AES59)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
    ],
  },
  {
    from: "db25", to: "xlr3", status: "standard", title: "DB25 to XLR3 \u2014 Tascam/AES59 Audio Breakout",
    use: "Receiving end of a Tascam/AES59 8-channel DB25 snake as balanced XLR3 outputs. Channels run right-to-left on the DB25 \u2014 Ch1 is at the far end (pins 24/12/25).",
    multiChannel: {
      max: 8,
      multiSide: "from",
      channelLabels: [
        "Ch1 \u2014 pins 24/12/25",
        "Ch2 \u2014 pins 10/23/11",
        "Ch3 \u2014 pins 21/9/22",
        "Ch4 \u2014 pins 7/20/8",
        "Ch5 \u2014 pins 18/6/19",
        "Ch6 \u2014 pins 4/17/5",
        "Ch7 \u2014 pins 15/3/16",
        "Ch8 \u2014 pins 1/14/2",
      ],
      perChannel: [
        { wiring: [{ fromPin: 24, toPin: 2, desc: "DB25 pin 24 (Ch1 Hot) to XLR Hot +" }, { fromPin: 12, toPin: 3, desc: "DB25 pin 12 (Ch1 Cold) to XLR Cold \u2212" }, { fromPin: 25, toPin: 1, desc: "DB25 pin 25 (Ch1 Gnd) to XLR Ground" }] },
        { wiring: [{ fromPin: 10, toPin: 2, desc: "DB25 pin 10 (Ch2 Hot) to XLR Hot +" }, { fromPin: 23, toPin: 3, desc: "DB25 pin 23 (Ch2 Cold) to XLR Cold \u2212" }, { fromPin: 11, toPin: 1, desc: "DB25 pin 11 (Ch2 Gnd) to XLR Ground" }] },
        { wiring: [{ fromPin: 21, toPin: 2, desc: "DB25 pin 21 (Ch3 Hot) to XLR Hot +" }, { fromPin: 9, toPin: 3, desc: "DB25 pin 9 (Ch3 Cold) to XLR Cold \u2212" }, { fromPin: 22, toPin: 1, desc: "DB25 pin 22 (Ch3 Gnd) to XLR Ground" }] },
        { wiring: [{ fromPin: 7, toPin: 2, desc: "DB25 pin 7 (Ch4 Hot) to XLR Hot +" }, { fromPin: 20, toPin: 3, desc: "DB25 pin 20 (Ch4 Cold) to XLR Cold \u2212" }, { fromPin: 8, toPin: 1, desc: "DB25 pin 8 (Ch4 Gnd) to XLR Ground" }] },
        { wiring: [{ fromPin: 18, toPin: 2, desc: "DB25 pin 18 (Ch5 Hot) to XLR Hot +" }, { fromPin: 6, toPin: 3, desc: "DB25 pin 6 (Ch5 Cold) to XLR Cold \u2212" }, { fromPin: 19, toPin: 1, desc: "DB25 pin 19 (Ch5 Gnd) to XLR Ground" }] },
        { wiring: [{ fromPin: 4, toPin: 2, desc: "DB25 pin 4 (Ch6 Hot) to XLR Hot +" }, { fromPin: 17, toPin: 3, desc: "DB25 pin 17 (Ch6 Cold) to XLR Cold \u2212" }, { fromPin: 5, toPin: 1, desc: "DB25 pin 5 (Ch6 Gnd) to XLR Ground" }] },
        { wiring: [{ fromPin: 15, toPin: 2, desc: "DB25 pin 15 (Ch7 Hot) to XLR Hot +" }, { fromPin: 3, toPin: 3, desc: "DB25 pin 3 (Ch7 Cold) to XLR Cold \u2212" }, { fromPin: 16, toPin: 1, desc: "DB25 pin 16 (Ch7 Gnd) to XLR Ground" }] },
        { wiring: [{ fromPin: 1, toPin: 2, desc: "DB25 pin 1 (Ch8 Hot) to XLR Hot +" }, { fromPin: 14, toPin: 3, desc: "DB25 pin 14 (Ch8 Cold) to XLR Cold \u2212" }, { fromPin: 2, toPin: 1, desc: "DB25 pin 2 (Ch8 Gnd) to XLR Ground" }] },
      ],
    },
    wiring: [
      { fromPin: 24, toPin: 2, desc: "DB25 pin 24 (Ch1 Hot) to XLR Hot +" },
      { fromPin: 12, toPin: 3, desc: "DB25 pin 12 (Ch1 Cold) to XLR Cold \u2212" },
      { fromPin: 25, toPin: 1, desc: "DB25 pin 25 (Ch1 Gnd) to XLR Ground" },
    ],
    deadEnds: [{ connector: "from", pin: 13, desc: "DB25 pin 13 \u2014 No Connect (only unused pin)" }],
    notes: "AES59-2012 / Tascam DA-88 standard. Yamaha DB25 (AES3 digital) is NOT compatible \u2014 verify which standard the snake follows. Pair with XLR3\u2192DB25 at the source.",
    sources: [
      { label: "TASCAM DB-25 Pinout Standard (official)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
      { label: "Aviom DB25 Pinout Information", url: "https://www.aviom.com/library/Technical-Resources/75_DB25-Pinout-Information.pdf" },
      { label: "AES59-2012 Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=92" },
    ],
  },

  // XLR4 combos
  {
    from: "xlr4", to: "xlr4", status: "standard", title: "XLR4 Headset Extension",
    use: "Extending a 4-pin intercom headset cable (Clear-Com, RTS, Telex)",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Mic Ground to Mic Ground" },
      { fromPin: 2, toPin: 2, desc: "Mic Signal to Mic Signal" },
      { fromPin: 3, toPin: 3, desc: "Earphone Return to Earphone Return" },
      { fromPin: 4, toPin: 4, desc: "Earphone Signal to Earphone Signal" },
    ],
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
    ],
  },
  {
    from: "xlr4", to: "trs", status: "partial", title: "XLR4 to TRS \u2014 Earphone Feed Out",
    use: "Take the earphone monitor feed from an XLR4 beltpack jack and output as a 1/4\u201d TRS mono feed \u2014 for an in-ear rig, wedge, or recording.",
    wiring: [
      { fromPin: 1, toPin: 3, desc: "Mic Ground (pin 1) to Sleeve" },
      { fromPin: 3, toPin: 3, desc: "Earphone Return (pin 3) to Sleeve" },
      { fromPin: 4, toPin: 1, desc: "Earphone Signal (pin 4) to Tip" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "XLR4 pin 2 (Mic Signal) \u2014 unused, output-only" },
      { connector: "to", pin: 2, desc: "TRS Ring \u2014 unused, output is mono" },
    ],
    notes: "Tie XLR4 pins 1 and 3 together at the TRS Sleeve. Mono output only.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "xlr4", to: "rj45", status: "partial", title: "XLR4 to RJ45 \u2014 Intercom Headset over Cat5",
    use: "Source end of an XLR4 intercom headset run over Cat5. Carries mic signal and earphone on separate pairs. Pair with RJ45\u2192XLR4 at the far end.",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Mic Ground (pin 1) to RJ45 pin 4 (Blue)" },
      { fromPin: 2, toPin: 1, desc: "Mic Signal (pin 2) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 3, toPin: 2, desc: "Earphone Return (pin 3) to RJ45 pin 2 (Orange)" },
      { fromPin: 4, toPin: 3, desc: "Earphone Signal (pin 4) to RJ45 pin 3 (Wht/Grn)" },
    ],
    deadEnds: [{ connector: "to", pin: 5, desc: "RJ45 pins 5,6,7,8 \u2014 unused" }],
    notes: "Mic and earphone signals are unbalanced over Cat5. Keep runs under 100 ft for reliable mic level.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "xlr4", to: "xlr5", status: "standard", title: "XLR4 to XLR5 \u2014 Headset to Intercom Panel",
    use: "XLR4 intercom headset to a 5-pin Clear-Com or RTS panel or wallplate. Full 2-way intercom. XLR4 is mono \u2014 right earphone (XLR5 pin 5) is not present.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Mic Ground to Mic Ground" },
      { fromPin: 2, toPin: 2, desc: "Mic Signal (+) to Mic Signal (pin 2)" },
      { fromPin: 3, toPin: 3, desc: "Earphone Return to Earphone Return (pin 3)" },
      { fromPin: 4, toPin: 4, desc: "Earphone Signal (+) to Left Earphone (pin 4)" },
    ],
    deadEnds: [{ connector: "to", pin: 5, desc: "XLR5 pin 5 (Right Earphone) \u2014 XLR4 is mono, right channel not present" }],
    notes: "XLR4 headsets are mono \u2014 right earphone not present. Both mic and earphone pass through correctly.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
    ],
  },
  {
    from: "xlr4", to: "xlr3", status: "partial", title: "XLR4 to XLR3 \u2014 Headset Mic to Balanced Output",
    use: "Route the mic signal from an XLR4 intercom headset to a balanced XLR3 mixer or recorder input.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Mic Ground (pin 1) to Ground" },
      { fromPin: 2, toPin: 2, desc: "Mic Signal (pin 2) to Hot +" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "XLR4 pin 3 (Earphone Return) \u2014 unused" },
      { connector: "from", pin: 4, desc: "XLR4 pin 4 (Earphone Signal) \u2014 unused, mic-only output" },
      { connector: "to", pin: 3, desc: "XLR3 pin 3 (Cold \u2212) \u2014 leave open or bridge to pin 1 for unbalanced mic" },
    ],
    notes: "XLR4 mic is unbalanced \u2014 leave XLR3 pin 3 open or bridge to pin 1. Earphone signal is not tapped here.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },

  // ─── SPEAKON BUILDS ────────────────────────────────────────────────────────
  {
    from: "speakon", to: "speakon", status: "standard", title: "Speakon NL4 Straight-Through",
    use: "Standard speaker cable extension. For bi-amp use, 1+/1\u2212 typically carries LF/woofer and 2+/2\u2212 carries HF/tweeter (verify cabinet silkscreen).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "1+ to 1+ \u2014 Speaker + (LF)" },
      { fromPin: 2, toPin: 2, desc: "1\u2212 to 1\u2212 \u2014 Speaker \u2212 (LF)" },
      { fromPin: 3, toPin: 3, desc: "2+ to 2+ \u2014 Ch2 + (HF)" },
      { fromPin: 4, toPin: 4, desc: "2\u2212 to 2\u2212 \u2014 Ch2 \u2212 (HF)" },
    ],
    sources: [
      { label: "Neutrik Speakon Wiring Suggestion", url: "https://www.neutrik.com/media/8027/download/speakon-wiring-suggestion.pdf" },
      { label: "Neutrik NL4FX Product Page", url: "https://www.neutrik.com/en/product/nl4fx" },
    ],
  },
  {
    from: "speakon", to: "xlr3", status: "standard", title: "Speakon NL4 to XLR3 \u2014 Passive Speaker Adapter",
    use: "Passive speaker cable adapter \u2014 amp Speakon output to a passive speaker with XLR3 input (older PA cabinets). NOT for driving a powered monitor's line input.",
    multiChannel: {
      max: 2,
      multiSide: "to",
      channelLabels: ["Ch1 (NL4 Pins 1+/1\u2212)", "Ch2 (NL4 Pins 2+/2\u2212)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 2, desc: "NL4 1+ to XLR3 pin 2 (+ Hot)" },
            { fromPin: 2, toPin: 1, desc: "NL4 1\u2212 to XLR3 pin 1 (Speaker Return)" },
          ],
        },
        {
          wiring: [
            { fromPin: 3, toPin: 2, desc: "NL4 2+ to XLR3 pin 2 (+ Hot)" },
            { fromPin: 4, toPin: 1, desc: "NL4 2\u2212 to XLR3 pin 1 (Speaker Return)" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 2, desc: "NL4 1+ to XLR3 pin 2 (+ Hot)" },
      { fromPin: 2, toPin: 1, desc: "NL4 1\u2212 to XLR3 pin 1 (Speaker Return)" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "NL4 2+ \u2014 unused (add 2nd XLR3 for Ch2)" },
      { connector: "from", pin: 4, desc: "NL4 2\u2212 \u2014 unused (add 2nd XLR3 for Ch2)" },
      { connector: "to", pin: 3, desc: "XLR3 pin 3 \u2014 No Connect (speaker signal is 2-wire, no cold/return)" },
    ],
    notes: "\u26a0\ufe0f PASSIVE SPEAKER USE ONLY. Speaker-level signal is tens of volts at high current \u2014 NEVER plug this into a mic input, line input, or powered speaker's input jack. Will destroy the input stage. This follows Neutrik's factory NA4FC-M / NA4FX-F adapter wiring: XLR pin 1 carries speaker return (1\u2212), pin 3 is NC.",
    sources: [
      { label: "Neutrik Speakon Wiring Suggestion (official)", url: "https://www.neutrik.com/media/8027/download/speakon-wiring-suggestion.pdf" },
      { label: "Neutrik NA4FC-M (factory adapter)", url: "https://www.markertek.com/product/na4fc-m/neutrik-na4fc-m-speakon-to-3-pin-xlr-male-adapter" },
    ],
  },
  {
    from: "speakon", to: "trs", status: "field_hack", title: "Speakon NL4 to 1/4\" TS \u2014 Passive Speaker Only",
    use: "Passive speaker cable adapter \u2014 amp Speakon output to a passive speaker with 1/4\" jack input (older PA cabinets and guitar-style speakers). NOT for powered monitors.",
    multiChannel: {
      max: 2,
      multiSide: "to",
      channelLabels: ["Ch1 (NL4 Pins 1+/1\u2212)", "Ch2 (NL4 Pins 2+/2\u2212)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 1, desc: "NL4 1+ to Tip \u2014 Speaker +" },
            { fromPin: 2, toPin: 3, desc: "NL4 1\u2212 to Sleeve \u2014 Speaker Return" },
          ],
        },
        {
          wiring: [
            { fromPin: 3, toPin: 1, desc: "NL4 2+ to Tip \u2014 Speaker +" },
            { fromPin: 4, toPin: 3, desc: "NL4 2\u2212 to Sleeve \u2014 Speaker Return" },
          ],
        },
      ],
    },
    wiring: [
      { fromPin: 1, toPin: 1, desc: "NL4 1+ to Tip \u2014 Speaker +" },
      { fromPin: 2, toPin: 3, desc: "NL4 1\u2212 to Sleeve \u2014 Speaker Return" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "NL4 2+ \u2014 unused (add 2nd cable for Ch2)" },
      { connector: "from", pin: 4, desc: "NL4 2\u2212 \u2014 unused" },
      { connector: "to", pin: 2, desc: "TRS Ring \u2014 use a TS (mono) jack; if TRS is all you have, leave Ring floating" },
    ],
    notes: "\u26a0\ufe0f DANGER \u2014 PASSIVE SPEAKER USE ONLY. Never plug this into a powered speaker's TRS line input \u2014 the speaker-level signal (tens of volts, amperes) will destroy the monitor's differential receiver, can damage Class-D amp output stages if pins short during mating, and presents a shock hazard on exposed barrels during partial insertion. Commercial equivalents (Hosa NA4LJX etc.) are all sold for passive-speaker use only. For powered speakers, use a line-level XLR or TRS cable from the mixer output instead.",
    sources: [
      { label: "Neutrik Speakon Wiring Suggestion", url: "https://www.neutrik.com/media/8027/download/speakon-wiring-suggestion.pdf" },
      { label: "Hosa NA4LJX Speakon-to-1/4\" Adapter", url: "https://hosatech.com/product/na4ljx/" },
    ],
  },

  // ─── TS BUILDS ──────────────────────────────────────────────────────────────
  {
    from: "ts", to: "ts", status: "standard", title: "TS Straight-Through Patch Cable",
    use: "Unbalanced audio patch cable or instrument (guitar) cable",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 2, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "ts", to: "xlr3", status: "standard", title: "TS to XLR3 \u2014 Unbalanced Audio",
    use: "Guitar/keyboard to mixer XLR input. Use a proper DI box for long runs or low-impedance instrument pickup.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Tip to Hot (+) \u2014 Signal" },
      { fromPin: 2, toPin: 1, desc: "Sleeve to Ground" },
    ],
    deadEnds: [{ connector: "to", pin: 3, desc: "XLR pin 3 (Cold) \u2014 leave floating (safest for active destination inputs)" }],
    notes: "For unbalanced-to-balanced conversion without ground loops, a passive DI box is preferred over a bare adapter. If wiring bare, leave pin 3 floating (safer for transformerless active inputs than grounding).",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "ts", to: "rj45", status: "standard", title: "TS to RJ45 \u2014 Unbalanced Audio over Cat5 (StudioHub+)",
    use: "Single unbalanced audio channel over Cat5, using the StudioHub+ ADAPT-RCA/TS pair convention. Signal and ground share a twisted pair to preserve EMI rejection.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip (Signal) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 2, toPin: 2, desc: "Sleeve (Ground) to RJ45 pin 2 (Orange)" },
    ],
    deadEnds: [{ connector: "to", pin: 3, desc: "RJ45 pins 3\u20138 \u2014 unused (pins 7/8 reserved for DC on powered StudioHub+ panels)" }],
    notes: "StudioHub+ layout: signal on pin 1, ground on pin 2 (same twisted pair) preserves common-mode rejection even though the signal itself is unbalanced. Putting ground on pin 4 (different pair) breaks the twist and picks up more noise.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide (official)", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },
  {
    from: "ts", to: "mini_trs", status: "standard", title: "TS to 3.5mm \u2014 1/4\" Mono to Headphone",
    use: "Adapting a 1/4\" mono output to a 3.5mm input (laptop, phone, portable recorder).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 3, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "3.5mm Ring \u2014 leave floating (do not tie to Tip)" }],
    notes: "\u26a0\ufe0f Leave Ring floating. Only the Left channel will play into a stereo source \u2014 this is safe. Do NOT hard-tie Ring to Tip \u2014 if this adapter is ever plugged into a stereo source, it shorts the right-channel amplifier output to the left output, which can damage op-amp stages. For dual-ear playback from a true mono source, use a proper Y-split with series summing resistors (Rolls SUM, Hosa stereo breakout).",
    sources: [
      { label: "Rane Note 110 — Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },

  // ─── 3.5mm TRS BUILDS ──────────────────────────────────────────────────────
  {
    from: "mini_trs", to: "mini_trs", status: "standard", title: "3.5mm TRS Straight-Through",
    use: "Headphone extension or aux cable. Can carry either stereo unbalanced (T=L, R=R) or balanced mono (T=Hot, R=Cold) \u2014 determined by source equipment, not the connector.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Left / Hot" },
      { fromPin: 2, toPin: 2, desc: "Ring to Ring \u2014 Right / Cold" },
      { fromPin: 3, toPin: 3, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "mini_trs", to: "xlr3", status: "standard", title: "3.5mm TRS to XLR3 \u2014 IFB / Phone Feed",
    use: "Phone or laptop output to mixer. Stereo source is summed to mono at the XLR input.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Tip to Hot (+) \u2014 Left / Signal" },
      { fromPin: 2, toPin: 3, desc: "Ring to Cold (\u2212) \u2014 Right / Return" },
      { fromPin: 3, toPin: 1, desc: "Sleeve to Ground" },
    ],
    notes: "Stereo source is summed to mono at the balanced input. For stereo, use two separate XLR cables with a 3.5mm Y-split to individually carry L and R.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "mini_trs", to: "xlr5", status: "standard", title: "3.5mm TRS to XLR5 \u2014 Intercom Listen-Only",
    use: "Connect a consumer headphone to a Clear-Com beltpack for listen-only monitoring.",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Tip (Left +) to XLR5 pin 4 (Left Earphone +)" },
      { fromPin: 2, toPin: 5, desc: "Ring (Right +) to XLR5 pin 5 (Right Earphone +)" },
      { fromPin: 3, toPin: 1, desc: "Sleeve (ground) to XLR5 pin 1 (Ground)" },
    ],
    deadEnds: [
      { connector: "to", pin: 2, desc: "Pin 2 (Mic Signal) \u2014 unused, no mic on TRS" },
      { connector: "to", pin: 3, desc: "Pin 3 (Earphone Return) \u2014 unused, ground already on pin 1" },
    ],
    notes: "Listen-only \u2014 no talkback. For 2-way, use a TRRS headset or separate mic feed. Beltpack has female XLR5, so cable needs male XLR5.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },

  {
    from: "mini_trs", to: "xlr4", status: "partial", title: "3.5mm TRS to XLR4 \u2014 Consumer Headphones to Intercom",
    use: "Plug 3.5mm TRS headphones into an XLR4 intercom beltpack for listen-only monitoring. No mic \u2014 TRS has no mic circuit.",
    wiring: [
      { fromPin: 3, toPin: 1, desc: "Sleeve to Mic Ground (pin 1)" },
      { fromPin: 3, toPin: 3, desc: "Sleeve to Earphone Return (pin 3)" },
      { fromPin: 1, toPin: 4, desc: "Tip (Left +) to Earphone Signal (pin 4)" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "TRS Ring (Right +) \u2014 XLR4 earphone is mono, right channel dropped" },
      { connector: "to", pin: 2, desc: "XLR4 pin 2 (Mic Signal) \u2014 unused, no mic on TRS" },
    ],
    notes: "Listen-only. Tie Sleeve to both XLR4 pins 1 and 3. No talkback \u2014 for 2-way use a TRRS headset.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "mini_trs", to: "rj45", status: "standard", title: "3.5mm TRS to RJ45 \u2014 Stereo Audio over Cat5 (StudioHub+)",
    use: "Stereo 3.5mm feed (IFB, aux, talkback return) over Cat5, using the StudioHub+ ADAPT-MINIUNBAL layout. One stereo feed per Cat5.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip (Left Audio) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 2, toPin: 3, desc: "Ring (Right Audio) to RJ45 pin 3 (Wht/Grn)" },
      { fromPin: 3, toPin: 2, desc: "Sleeve (Ground) to RJ45 pin 2 (Orange)" },
      { fromPin: 3, toPin: 6, desc: "Sleeve (Ground) to RJ45 pin 6 (Green)" },
    ],
    deadEnds: [{ connector: "to", pin: 4, desc: "RJ45 pins 4, 5, 7, 8 \u2014 unused (reserved for DC power in active StudioHub+ panels)" }],
    notes: "StudioHub+ ADAPT-MINIUNBAL convention: left on pair 1/2, right on pair 3/6, ground shared on pins 2 and 6 to keep signal+return on the same twisted pair. Pins 7/8 carry \u00b115V DC on powered StudioHub+ panels \u2014 do not short to audio ground.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide (official)", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },
  {
    from: "mini_trs", to: "ts", status: "standard", title: "3.5mm to TS \u2014 Headphone to 1/4\" Mono",
    use: "Adapting a 3.5mm stereo output to a 1/4\" mono input (amp, mixer, unbalanced insert).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Signal (Left)" },
      { fromPin: 3, toPin: 2, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
    deadEnds: [{ connector: "from", pin: 2, desc: "3.5mm Ring (Right) \u2014 unused, mono output only" }],
    notes: "Only left channel passes to mono output. Right channel is dropped (Ring floating). Never hard-tie Ring to Tip \u2014 it can short the right-channel driver on stereo sources. For true L+R mono-summing, use a passive Y-split with series resistors.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },

  // ─── 3.5mm TRRS BUILDS ─────────────────────────────────────────────────────
  {
    from: "mini_trrs", to: "mini_trrs", status: "standard", title: "3.5mm TRRS Straight-Through",
    use: "Headset extension cable with mic (CTIA: Apple/Android)",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Left Audio" },
      { fromPin: 2, toPin: 2, desc: "Ring 1 to Ring 1 \u2014 Right Audio" },
      { fromPin: 3, toPin: 3, desc: "Ring 2 to Ring 2 \u2014 Ground (CTIA)" },
      { fromPin: 4, toPin: 4, desc: "Sleeve to Sleeve \u2014 Microphone (CTIA)" },
    ],
    notes: "Standard CTIA headset extension. Works with both CTIA and OMTP wiring since all 4 conductors pass straight through \u2014 the host device determines which pinout is active.",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
    ],
  },
  {
    from: "mini_trrs", to: "xlr5", status: "standard", title: "3.5mm TRRS to XLR5 \u2014 Intercom 2-Way",
    use: "Connect a CTIA TRRS headset (iPhone, modern Android) to a Clear-Com or RTS beltpack for full 2-way intercom (listen + talk).",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Tip (Left Audio) to XLR5 pin 4 (Left Earphone +)" },
      { fromPin: 2, toPin: 5, desc: "Ring 1 (Right Audio) to XLR5 pin 5 (Right Earphone +)" },
      { fromPin: 4, toPin: 2, desc: "Sleeve (Mic CTIA) to XLR5 pin 2 (Mic Signal)" },
      { fromPin: 3, toPin: 1, desc: "Ring 2 (Ground CTIA) to XLR5 pin 1 (Ground)" },
      { fromPin: 3, toPin: 3, desc: "Ring 2 (Ground CTIA) to XLR5 pin 3 (Earphone Return)" },
    ],
    notes: "CTIA (Apple/Android) wiring: mic is on Sleeve, audio ground is on Ring 2. Tie Ring 2 to BOTH XLR5 pin 1 (ground) and pin 3 (earphone return). Beltpack has female XLR5, so cable needs male XLR5. If mic and earphone are swapped when tested, the headset uses OMTP \u2014 reverse Ring 2 and Sleeve.",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec (LRGM)", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },

  {
    from: "mini_trrs", to: "xlr4", status: "standard", title: "3.5mm TRRS to XLR4 \u2014 CTIA Headset to Intercom",
    use: "Connect a CTIA TRRS headset (iPhone, modern Android) to a broadcast XLR4 intercom beltpack. Full 2-way \u2014 both earphone and mic work.",
    wiring: [
      { fromPin: 4, toPin: 2, desc: "Sleeve (Mic CTIA) to Mic Signal (pin 2)" },
      { fromPin: 3, toPin: 1, desc: "Ring 2 (Ground CTIA) to Mic Ground (pin 1)" },
      { fromPin: 3, toPin: 3, desc: "Ring 2 (Ground CTIA) to Earphone Return (pin 3)" },
      { fromPin: 1, toPin: 4, desc: "Tip (Left Audio) to Earphone Signal (pin 4)" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "Ring 1 (Right Audio) \u2014 XLR4 earphone is mono, right channel dropped" },
    ],
    notes: "CTIA (Apple/Android) wiring: mic is on Sleeve, audio ground is on Ring 2. Tie Ring 2 to BOTH XLR4 pin 1 (mic ground) and pin 3 (earphone return). If mic and earphone are swapped when tested, the headset uses OMTP wiring \u2014 reverse Ring 2 and Sleeve.",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec (LRGM)", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "mini_trrs", to: "rj45", status: "field_hack", title: "3.5mm TRRS to RJ45 \u2014 Headset over Cat5 (non-standard)",
    use: "Run a CTIA TRRS headset (audio + mic) over Cat5. \u26a0\ufe0f No formal published standard \u2014 every manufacturer does this differently. OHIS (Open Headset Interconnect Standard) is the closest published best-practice reference.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip (Left Audio) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 3, toPin: 2, desc: "Ring 2 (Audio Ground CTIA) to RJ45 pin 2 (Orange) \u2014 same twisted pair as Tip" },
      { fromPin: 2, toPin: 3, desc: "Ring 1 (Right Audio) to RJ45 pin 3 (Wht/Grn)" },
      { fromPin: 3, toPin: 6, desc: "Ring 2 (Audio Ground CTIA) to RJ45 pin 6 (Green) \u2014 same twisted pair as Ring 1" },
      { fromPin: 4, toPin: 7, desc: "Sleeve (Mic CTIA) to RJ45 pin 7 (Wht/Brn)" },
      { fromPin: 3, toPin: 8, desc: "Ring 2 (Audio Ground CTIA) to RJ45 pin 8 (Brown) \u2014 mic return on same pair" },
    ],
    deadEnds: [{ connector: "to", pin: 4, desc: "RJ45 pins 4, 5 \u2014 unused" }],
    notes: "Non-standard \u2014 document your pinout on the cable itself. This layout pairs each signal with its ground on a twisted pair (per OHIS best practice): L+Gnd on pair 1/2, R+Gnd on pair 3/6, Mic+Gnd on pair 7/8. Keep runs under 50 ft. Pair with identical wiring at the far end.",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "OHIS \u2014 Open Headset Interconnect Standard", url: "https://www.ohis.org/" },
    ],
  },

  // ─── RCA BUILDS ─────────────────────────────────────────────────────────────
  {
    from: "rca", to: "rca", status: "standard", title: "RCA Straight-Through",
    use: "Consumer audio, composite video, or S/PDIF digital. For composite video or S/PDIF, use true 75\u03A9 coax (Belden 1505A / 1694A) with 75\u03A9 RCA connectors \u2014 most consumer RCA cables are not spec-compliant 75\u03A9.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to Center \u2014 Signal" },
      { fromPin: 2, toPin: 2, desc: "Shell to Shell \u2014 Ground" },
    ],
    sources: [
      { label: "Belden 1694A Product Page", url: "https://www.belden.com/products/cable/video-cable/coaxial-video-cable/1694a" },
    ],
  },
  {
    from: "rca", to: "xlr3", status: "standard", title: "RCA to XLR3 \u2014 Consumer to Pro",
    use: "Connecting consumer gear (laptop DAC, phone, DVD player) to a pro mixer, snake, or interface. Level mismatch is ~12 dB low \u2014 the pro input's gain will make it up.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Center to Hot (+) \u2014 Signal" },
      { fromPin: 2, toPin: 1, desc: "Shell to Ground" },
    ],
    deadEnds: [{ connector: "to", pin: 3, desc: "XLR pin 3 (Cold) \u2014 jumper to pin 1 for unbalanced termination" }],
    notes: "Consumer \u221210 dBV to pro +4 dBu is ~12 dB low \u2014 push input trim up. Passive adapter is usually fine (pro mic preamps have plenty of gain headroom). If you hit a ground loop crossing AC mains, use a transformer DI (Jensen Iso-Max, Radial ProAV) instead of a passive adapter.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Benchmark \u2014 Balanced vs. Unbalanced", url: "https://benchmarkmedia.com/blogs/application_notes/balanced-vs-unbalanced-analog-interfaces" },
    ],
  },
  {
    from: "rca", to: "ts", status: "standard", title: "RCA to TS \u2014 Consumer to 1/4\"",
    use: "Connecting consumer RCA output to a 1/4\" unbalanced input",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 2, desc: "Shell to Sleeve \u2014 Ground" },
    ],
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "rca", to: "trs", status: "standard", title: "RCA to TRS \u2014 Consumer to Balanced",
    use: "Consumer RCA source to a balanced TRS input (mixer, interface, active speaker).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 3, desc: "Shell to Sleeve \u2014 Ground" },
    ],
    deadEnds: [{ connector: "to", pin: 2, desc: "TRS Ring (Cold \u2212) \u2014 tie to Sleeve for unbalanced termination" }],
    notes: "Tie TRS Ring to Sleeve at the TRS end for proper unbalanced operation. ~12 dB level difference expected (consumer \u221210 dBV to pro +4 dBu); the balanced input's gain makes it up.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "trs", to: "rca", status: "partial", title: "TRS to RCA \u2014 Balanced to Consumer",
    use: "Balanced TRS output to a consumer RCA input (amp, receiver, recording device). Requires level matching \u2014 a bare adapter will overdrive consumer inputs.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Center \u2014 Signal" },
      { fromPin: 3, toPin: 2, desc: "Sleeve to Shell \u2014 Ground" },
    ],
    deadEnds: [{ connector: "from", pin: 2, desc: "TRS Ring (Cold \u2212) \u2014 leave floating (safer than grounding for transformerless outputs)" }],
    notes: "\u26a0\ufe0f Pro +4 dBu to consumer \u221210 dBV is ~12 dB level mismatch. Consumer RCA inputs usually have no gain control \u2014 use an inline pad, passive DI, or transformer isolator to avoid clipping. Leave Ring floating rather than tying to Sleeve to avoid shorting an active inverting op-amp output.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Benchmark \u2014 Balanced vs. Unbalanced", url: "https://benchmarkmedia.com/blogs/application_notes/balanced-vs-unbalanced-analog-interfaces" },
    ],
  },

  // ─── POWERCON BUILDS ────────────────────────────────────────────────────────
  {
    from: "powercon", to: "powercon", status: "standard", title: "PowerCON Daisy-Chain / Extension",
    use: "PowerCON jumper cable for daisy-chaining powered lighting, speakers, or distro. Cable has male BLUE NAC3FCA (into downstream device's IN panel jack) on one end and male GREY NAC3FCB (into upstream device's OUT panel jack) on the other. Never IN-to-IN.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Line (L) to Line \u2014 Brown (IEC) / Black (NEC)" },
      { fromPin: 2, toPin: 2, desc: "Neutral (N) to Neutral \u2014 Blue (IEC) / White (NEC)" },
      { fromPin: 3, toPin: 3, desc: "Earth (PE) to Earth \u2014 Green-Yellow (IEC) / Green (NEC)" },
    ],
    notes: "\u26a0\ufe0f Standard PowerCON (NAC3FCA/FCB) is NOT rated for hot-plug \u2014 power must be dead before mating/unmating. TRUE1 (different shell, mechanically incompatible with standard PowerCON) IS hot-plug rated. Daisy-chain current limit = lowest-rated link in the chain. Wire colors per IEC 60446 (Europe) or NEC (US).",
    sources: [
      { label: "Neutrik powerCON Assembly Instruction (BDA 452)", url: "https://www.neutrik.com/media/10217/download/BDA%20452%20V4%20-%20powerCON%20-%20NAC3FCA%20+%20NAC3FCB.pdf" },
      { label: "Neutrik NAC3FCA Product Page", url: "https://www.neutrik.com/en/product/nac3fca" },
    ],
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
    sources: [
      { label: "LMG internal \u2014 Cable Wholesale black shell (Adam KP)", url: null },
    ],
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
    sources: [
      { label: "LMG internal \u2014 Cable Wholesale yellow shell (Adam KP CAM/IFB)", url: null },
    ],
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
    sources: [
      { label: "LMG internal \u2014 Cable Wholesale grey shell (serial data)", url: null },
    ],
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
    sources: [
      { label: "LMG internal \u2014 TSI-1000 / Kalypso integration", url: null },
    ],
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
    sources: [
      { label: "LMG internal \u2014 TSI-1000 / Kalypso RS-232", url: null },
    ],
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
    sources: [
      { label: "LMG internal \u2014 TSI-1000 / Kalypso RS-232 crossover", url: null },
    ],
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
    sources: [
      { label: "LMG internal \u2014 Cronus timing/tally adapter", url: null },
    ],
  },
];

export default STANDARD_BUILDS;
