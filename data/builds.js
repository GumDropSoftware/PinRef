// ─── CABLE BUILD DATA ────────────────────────────────────────────────────────

const STANDARD_BUILDS = [
  // XLR3 combos
  {
    from: "xlr3", to: "xlr3", status: "standard", title: "XLR3 Mic Cable (Straight-Through)",
    use: "Standard microphone or balanced audio cable. Also carries SMPTE LTC timecode, AES3 digital audio (AES3 wants true 110\u03a9 cable) and the intercom party line (RTS two-channel: pin 1 common, pin 2 +30 VDC + channel 1 audio, pin 3 channel 2 audio; Clear-Com single-channel: pin 1 ground, pin 2 DC only, pin 3 audio) over the same wiring.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Ground / Shield to Ground / Shield" },
      { fromPin: 2, toPin: 2, desc: "Hot (+) to Hot (+)" },
      { fromPin: 3, toPin: 3, desc: "Cold (\u2212) to Cold (\u2212)" },
    ],
    notes: "Same wiring covers analog balanced audio, AES3 digital audio, and SMPTE LTC timecode. LTC is ~0.5\u20132 V p-p audio-band, so any good balanced audio run works for hundreds of feet. AES3 needs 110\u03a9 digital audio cable; analog mic cable works at short distances but causes jitter on longer runs. Party-line caution: a cable that has been on an intercom line carries nothing by itself, but the LINE jack it came from has 15\u201330 V DC on pin 2 \u2014 a mic, line input or recorder plugged into that jack through this cable gets that DC on its hot pin. Keep intercom and audio patching separate and meter pin 2 if in doubt.",
    sources: [
      { label: "AES14-1992 XLR Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=36" },
      { label: "ETC SMPTE LTC Pinout &amp; Wiring", url: "https://support.etcconnect.com/ETC/Networking/Show_Control_and_IO_Control/SMPTE_Pinout_and_Wiring" },
      { label: "Telex/RTS pinouts (plsystem.com) \u2014 BP-325 line = 30 VDC on pin 2; KP-32 \u201ctie mic \u2212 to ground to unbalance a dynamic mic\u201d", url: "https://www.plsystem.com/pinout1.htm" },
      { label: "Clear-Com Solution Finder \u2014 3-pin XLR party-line pinout (1 Ground, 2 Voltage, 3 Audio)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158784598" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
    ],
  },
  {
    from: "xlr3", to: "xlr5", status: "standard", title: "XLR3 to XLR5 \u2014 Pass-Through (XLR3 Signal over an XLR5 Run)",
    use: "Carry an ordinary XLR3 balanced signal down a spare 5-pin cable (intercom headset extension or DMX cable). Build TWO of these \u2014 one at each end \u2014 and the 5-pin run becomes a plain XLR3 extension.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "XLR3 pin 1 (Ground / Shield) to XLR5 pin 1" },
      { fromPin: 2, toPin: 2, desc: "XLR3 pin 2 (Hot +) to XLR5 pin 2" },
      { fromPin: 3, toPin: 3, desc: "XLR3 pin 3 (Cold \u2212) to XLR5 pin 3" },
    ],
    deadEnds: [
      { connector: "to", pin: 4, desc: "XLR5 pin 4 \u2014 unused (just a spare conductor on this run)" },
      { connector: "to", pin: 5, desc: "XLR5 pin 5 \u2014 unused" },
    ],
    notes: "Pass-through ONLY. Pins 1/2/3 of the XLR5 are used purely as three wires \u2014 the headset meanings of those pins (mic ground, mic, earphone return) do not apply. This is NOT a headset or beltpack adapter: plugging one end of a 1-1/2-2/3-3 adapter into a 5-pin headset puts your XLR3 cold on the earphone return and feeds nothing to the earphones. For a headset or a beltpack use the two builds below. Works for mic, line, AES3 and the Clear-Com/RTS party line (which carries 30 VDC on pin 2 \u2014 a straight wire passes it fine). Genders: build the two adapters as opposite genders (one female XLR3 \u2192 male XLR5, one female XLR5 \u2192 male XLR3) or they will not mate with the 5-pin run. If the run is carrying a party line, the energised 5-pin end looks exactly like a headset jack or a DMX port: a 5-pin headset or DMX device plugged into it gets 30 V DC on its mic / data pins. Label both adapters and never leave a powered run with an open 5-pin end.",
    sources: [
      { label: "AES14-1992 XLR Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=36" },
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Telex/RTS pinouts (plsystem.com) \u2014 BP-325 line = 30 VDC on pin 2; KP-32 \u201ctie mic \u2212 to ground to unbalance a dynamic mic\u201d", url: "https://www.plsystem.com/pinout1.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
      { label: "DMX512 \u2014 Wikipedia (XLR-5: pin 4 Data 2\u2212, pin 5 Data 2+)", url: "https://en.wikipedia.org/wiki/DMX512" },
    ],
  },
  {
    from: "xlr3", to: "xlr5", status: "partial", title: "XLR3 to XLR5 \u2014 Mic into Intercom Beltpack (Mic Input)",
    use: "Plug an ordinary XLR3 dynamic microphone into the headset jack of a 5-pin Clear-Com / RTS beltpack or panel. Mic only \u2014 the earphone pins are left empty, so you hear nothing (use a separate listen feed or the pack's speaker).",
    wiring: [
      { fromPin: 2, toPin: 2, desc: "XLR3 pin 2 (Hot +) to XLR5 pin 2 (Mic Input)" },
      { fromPin: 1, toPin: 1, desc: "XLR3 pin 1 (Ground / Shield) to XLR5 pin 1 (Mic Ground)" },
      { fromPin: 3, toPin: 1, desc: "XLR3 pin 3 (Cold \u2212) ALSO to XLR5 pin 1 \u2014 ties the mic's cold leg to mic ground, which unbalances a dynamic mic into the pack's unbalanced input" },
    ],
    deadEnds: [
      { connector: "to", pin: 3, desc: "XLR5 pin 3 (Earphone Return) \u2014 unused; do NOT use it as the mic ground" },
      { connector: "to", pin: 4, desc: "XLR5 pin 4 (Left Earphone) \u2014 unused" },
      { connector: "to", pin: 5, desc: "XLR5 pin 5 (Right Earphone) \u2014 unused" },
    ],
    notes: "The beltpack mic input is UNBALANCED: Clear-Com states that pin 1 \u201cmic signal low\u201d is actually signal ground, and RTS/Telex tie the dynamic-mic \u2212 leg to ground to unbalance it \u2014 that is what the pin 3 \u2192 pin 1 jumper does. The mic ground is pin 1, never pin 3 (pin 3 is the earphone return \u2014 grounding the mic there injects the earphone return current into the mic circuit). Dynamic mics only: intercom headset mics are often electrets powered by a DC bias the pack puts on pin 2 \u2014 set the pack's mic switch to DYNAMIC for an XLR3 dynamic mic, and never expect a phantom-powered condenser to work here. The pack's headset jack is a female XLR5, so this cable needs a MALE XLR5 and a FEMALE XLR3. Never plug this into the pack's 3-pin intercom LINE jack \u2014 that one carries 30 VDC on pin 2. Mirror check: the app draws the XLR5 as the FEMALE face; the male insert you solder is the mirror image (pins 1/5 and 2/4 swap sides) \u2014 read the moulded pin numbers, not the picture.",
    sources: [
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications (headset, line and program connector pinouts)", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
      { label: "Telex/RTS pinouts (plsystem.com) \u2014 BP-325 line = 30 VDC on pin 2; KP-32 \u201ctie mic \u2212 to ground to unbalance a dynamic mic\u201d", url: "https://www.plsystem.com/pinout1.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
    ],
  },
  {
    from: "xlr3", to: "xlr5", status: "partial", title: "XLR3 to XLR5 \u2014 Balanced Feed to Both Ears of a Headset",
    use: "Drive BOTH earpieces of a 5-pin intercom headset from one balanced XLR3 source (mixer headphone/aux out, IFB feed). Listen-only \u2014 the headset mic is not connected.",
    wiring: [
      { fromPin: 2, toPin: 4, desc: "XLR3 pin 2 (Hot +) to XLR5 pin 4 (Left Earphone)" },
      { fromPin: 2, toPin: 5, desc: "XLR3 pin 2 (Hot +) ALSO to XLR5 pin 5 (Right Earphone) \u2014 same mono signal to both ears" },
      { fromPin: 1, toPin: 3, desc: "XLR3 pin 1 (Ground) to XLR5 pin 3 (Earphone Return) \u2014 the return for BOTH earpieces" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "XLR3 pin 3 (Cold \u2212) \u2014 leave floating (Rane Note 151: never short an active balanced output's cold leg to ground)" },
      { connector: "to", pin: 1, desc: "XLR5 pin 1 (Mic Ground) \u2014 unused, mic not connected" },
      { connector: "to", pin: 2, desc: "XLR5 pin 2 (Mic Input) \u2014 unused, mic not connected" },
    ],
    notes: "The earphones are passive transducers, so one source can drive both in parallel \u2014 the load halves (two 150 \u03a9 earpieces look like 75 \u03a9), which a headphone amp drives happily but a line output may not. Ground goes to pin 3 (earphone return), NOT pin 1 (mic ground) \u2014 pins 1 and 3 are separate returns in the headset. Cold floats; level is ~6 dB below a true balanced drive. The XLR5 end must be FEMALE (it accepts the headset's male plug). DO NOT plug this cable into a beltpack: on a beltpack pins 4 and 5 are amplifier OUTPUTS, and bridging them shorts two outputs together \u2014 Clear-Com warns this distorts the whole PL channel. Same wiring idea as the XLR3 \u2192 XLR4 build, with the second earpiece added.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input fed unbalanced)", url: "https://www.ranecommercial.com/legacy/note151.html" },
      { label: "Rane Note 109 \u2014 Why Not Wye? (never tie two outputs together)", url: "https://www.ranecommercial.com/legacy/note109.html" },
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
    notes: "Phantom caution: if the XLR3 end goes into a mic input with 48 V on, that DC (via 6.8 k\u03a9) is pushed into the device on the other end \u2014 keep phantom OFF on that channel. An XLR3 end that fits a Clear-Com / RTS party-line jack will meet +30 V DC on pin 2 \u2014 never plug this into an intercom LINE / loop-through connector. A TRS end plugged into a mono TS jack grounds the Ring, i.e. XLR pin 3 \u2014 the cold leg of an active output.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection (pinout Figure 1a)", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Yamaha \u2014 Phantom Power (never apply phantom to anything other than condenser microphones)", url: "https://hub.yamaha.com/proaudio/livesound/tools-of-the-trade-mixer-and-phantom-power/" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input)", url: "https://www.ranecommercial.com/legacy/note151.html" },
    ],
  },
  {
    from: "xlr3", to: "rj45", status: "standard", title: "XLR3 to RJ45 \u2014 Audio over Cat5",
    use: "Clear-Com or audio balun. Up to 2 balanced channels over Cat5.",
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) (pin 2) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 3, toPin: 2, desc: "Cold (\u2212) (pin 3) to RJ45 pin 2 (Orange)" },
      { fromPin: 1, toPin: 4, desc: "Ground (pin 1) to RJ45 pin 4 (Blue)" },
    ],
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
    deadEnds: [
      { connector: "to", pin: 3, desc: "RJ45 pin 3 \u2014 unused" },
      { connector: "to", pin: 5, desc: "RJ45 pin 5 \u2014 unused" },
      { connector: "to", pin: 6, desc: "RJ45 pin 6 \u2014 unused" },
      { connector: "to", pin: 7, desc: "RJ45 pin 7 \u2014 unused" },
      { connector: "to", pin: 8, desc: "RJ45 pin 8 \u2014 unused" },
    ],
    notes: "StudioHub+ balanced layout: Hot on pin 1 (Wht/Org), Cold on pin 2 (Orange); second channel Hot 3 (Wht/Grn), Cold 6 (Green). In the official StudioHub+ adapter XLR pin 1 goes to the CABLE SHIELD (shielded Cat5 and shielded RJ45), not to a numbered pin; RJ45 pin 4 is the DC GND rail and pin 5 is n/c. PinRef lands pin 1 on pins 4 (ch1) and 5 (ch2) so the ground has a path on ordinary unshielded Cat5 \u2014 both ends must use the same convention (pair this with RJ45 \u2192 XLR3). Pins 7/8 carry \u00b115 V DC on powered StudioHub+ panels \u2014 never short them to audio ground, and never plug this into an Ethernet switch or PoE port.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },
  {
    from: "xlr3", to: "db25", status: "standard", title: "XLR3 to DB25 \u2014 Tascam/AES59 Audio Snake",
    use: "One channel of a Tascam/AES59 analog audio snake breakout. 8 channels fit in a DB25. Channels run right-to-left across the connector \u2014 Ch1 is at the far end (pins 24/12/25), Ch8 is at the near end (pins 1/14/2).",
    wiring: [
      { fromPin: 2, toPin: 24, desc: "Hot (XLR 2) to DB25 pin 24 (Ch1 Hot)" },
      { fromPin: 3, toPin: 12, desc: "Cold (XLR 3) to DB25 pin 12 (Ch1 Cold)" },
      { fromPin: 1, toPin: 25, desc: "Ground (XLR 1) to DB25 pin 25 (Ch1 Gnd)" },
    ],
    multiChannel: {
      max: 8,
      multiSide: "to",
      channelLabels: ["Ch1 \u2014 pins 24/12/25 (Hot/Cold/Gnd)", "Ch2 \u2014 pins 10/23/11", "Ch3 \u2014 pins 21/9/22", "Ch4 \u2014 pins 7/20/8", "Ch5 \u2014 pins 18/6/19", "Ch6 \u2014 pins 4/17/5", "Ch7 \u2014 pins 15/3/16", "Ch8 \u2014 pins 1/14/2"],
      perChannel: [
        {
          wiring: [
            { fromPin: 2, toPin: 24, desc: "Hot (XLR 2) to DB25 pin 24 (Ch1 Hot)" },
            { fromPin: 3, toPin: 12, desc: "Cold (XLR 3) to DB25 pin 12 (Ch1 Cold)" },
            { fromPin: 1, toPin: 25, desc: "Ground (XLR 1) to DB25 pin 25 (Ch1 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 10, desc: "Hot to DB25 pin 10 (Ch2 Hot)" },
            { fromPin: 3, toPin: 23, desc: "Cold to DB25 pin 23 (Ch2 Cold)" },
            { fromPin: 1, toPin: 11, desc: "Ground to DB25 pin 11 (Ch2 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 21, desc: "Hot to DB25 pin 21 (Ch3 Hot)" },
            { fromPin: 3, toPin: 9, desc: "Cold to DB25 pin 9 (Ch3 Cold)" },
            { fromPin: 1, toPin: 22, desc: "Ground to DB25 pin 22 (Ch3 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 7, desc: "Hot to DB25 pin 7 (Ch4 Hot)" },
            { fromPin: 3, toPin: 20, desc: "Cold to DB25 pin 20 (Ch4 Cold)" },
            { fromPin: 1, toPin: 8, desc: "Ground to DB25 pin 8 (Ch4 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 18, desc: "Hot to DB25 pin 18 (Ch5 Hot)" },
            { fromPin: 3, toPin: 6, desc: "Cold to DB25 pin 6 (Ch5 Cold)" },
            { fromPin: 1, toPin: 19, desc: "Ground to DB25 pin 19 (Ch5 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 4, desc: "Hot to DB25 pin 4 (Ch6 Hot)" },
            { fromPin: 3, toPin: 17, desc: "Cold to DB25 pin 17 (Ch6 Cold)" },
            { fromPin: 1, toPin: 5, desc: "Ground to DB25 pin 5 (Ch6 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 15, desc: "Hot to DB25 pin 15 (Ch7 Hot)" },
            { fromPin: 3, toPin: 3, desc: "Cold to DB25 pin 3 (Ch7 Cold)" },
            { fromPin: 1, toPin: 16, desc: "Ground to DB25 pin 16 (Ch7 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 1, desc: "Hot to DB25 pin 1 (Ch8 Hot)" },
            { fromPin: 3, toPin: 14, desc: "Cold to DB25 pin 14 (Ch8 Cold)" },
            { fromPin: 1, toPin: 2, desc: "Ground to DB25 pin 2 (Ch8 Gnd)" },
          ],
        },
      ],
    },
    deadEnds: [
      { connector: "to", pin: 13, desc: "DB25 pin 13 \u2014 No Connect (only unused pin)" },
    ],
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
      { fromPin: 1, toPin: 3, desc: "Ground (XLR3 pin 1) to Earphone Return (XLR4 pin 3)" },
      { fromPin: 2, toPin: 4, desc: "Hot (+) to Earphone Signal (XLR4 pin 4)" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "XLR3 pin 3 (Cold) \u2014 leave floating; safer for transformerless active outputs per Rane Note 151" },
      { connector: "to", pin: 1, desc: "XLR4 pin 1 (Mic Ground) \u2014 unused, no mic circuit on this listen-only feed" },
      { connector: "to", pin: 2, desc: "XLR4 pin 2 (Mic Signal) \u2014 unused, listen-only feed" },
    ],
    notes: "Single-ended drive: XLR3 Hot drives the earphone signal, Ground ties to the earphone-return node at the XLR4 end. Output level is ~6 dB lower than a true balanced drive because Cold is floated. Per Rane Note 151, do NOT tie Cold to the earphone return: the source is an active balanced output, and grounding its cold leg (which is what happens once the headset's return meets any grounded gear) can short an inverting output stage. Floating cold costs ~6 dB and is always safe. Listen-only \u2014 mic side is unused. This feeds a HEADSET (the XLR4 end is male, mating the Clear-Com headset\u2019s female XLR4). Never plug it into a beltpack: pin 4 on a beltpack is the earphone amplifier OUTPUT and your XLR3 source would be driving an output. Telex Audiocom 4-pin headsets are wired with the earphone pair reversed (3 = high, 4 = low) \u2014 they still work on this cable, just in inverted polarity. A male XLR4 also fits an RTS beltpack's female headset jack; never do that, the pack's pin 4 is an amplifier OUTPUT.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (don't short cold to ground)", url: "https://www.ranecommercial.com/legacy/note151.html" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
    ],
  },
  {
    from: "xlr3", to: "xlr4", status: "partial", title: "XLR3 to XLR4 \u2014 Mic into Intercom Beltpack (Mic Input)",
    use: "Plug an ordinary XLR3 dynamic microphone into the headset jack of a 4-pin Clear-Com / RTS beltpack or panel. Mic only \u2014 no earphone, so you hear nothing (use the pack speaker or a separate listen feed).",
    wiring: [
      { fromPin: 2, toPin: 2, desc: "XLR3 pin 2 (Hot +) to XLR4 pin 2 (Mic Input)" },
      { fromPin: 1, toPin: 1, desc: "XLR3 pin 1 (Ground / Shield) to XLR4 pin 1 (Mic Ground)" },
      { fromPin: 3, toPin: 1, desc: "XLR3 pin 3 (Cold \u2212) ALSO to XLR4 pin 1 \u2014 unbalances the dynamic mic into the pack's unbalanced input" },
    ],
    deadEnds: [
      { connector: "to", pin: 3, desc: "XLR4 pin 3 (Earphone Return) \u2014 unused; not the mic ground" },
      { connector: "to", pin: 4, desc: "XLR4 pin 4 (Earphone Signal) \u2014 unused" },
    ],
    notes: "Same circuit as the XLR3 \u2192 XLR5 mic-input build. The pack's mic input is unbalanced with pin 1 as signal ground (Clear-Com); tying the mic's cold leg to pin 1 is the RTS/Telex way to unbalance a dynamic mic. Dynamic mics only \u2014 set the pack's mic switch to DYNAMIC; electret headset mics rely on the pack's DC bias on pin 2 and a phantom-powered condenser will not work. Gender depends on the pack: Clear-Com packs have a MALE XLR4 jack (cable needs a FEMALE XLR4); RTS BP-325 packs have a FEMALE XLR-4-31 receptacle (cable needs a MALE XLR4). The XLR3 end is female either way. Never plug this into the 3-pin intercom LINE jack (30 VDC on pin 2).",
    sources: [
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Telex/RTS pinouts (plsystem.com) \u2014 BP-325 line = 30 VDC on pin 2; KP-32 \u201ctie mic \u2212 to ground to unbalance a dynamic mic\u201d", url: "https://www.plsystem.com/pinout1.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
    ],
  },
  {
    from: "xlr3", to: "bnc", status: "not_possible", title: "XLR3 to BNC \u2014 Not Compatible",
    use: "XLR carries balanced audio; BNC carries 75\u03a9 video / digital. Different impedance (110\u03a9 vs 75\u03a9), different signal type. Cannot be adapted with a passive cable.",
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
    wiring: [
      { fromPin: 2, toPin: 5, desc: "Hot (+) (XLR pin 2) to DT12 pin 5 (Ch 1 Hot)" },
      { fromPin: 3, toPin: 6, desc: "Cold (\u2212) (XLR pin 3) to DT12 pin 6 (Ch 1 Cold)" },
      { fromPin: 1, toPin: 1, desc: "Ground (XLR pin 1) to DT12 pin 1 (Ch 1 Ground)" },
    ],
    multiChannel: {
      max: 12,
      perChannel: [
        {
          wiring: [
            { fromPin: 2, toPin: 5, desc: "Hot \u2192 DT12 pin 5 (Ch1 Hot)" },
            { fromPin: 3, toPin: 6, desc: "Cold \u2192 DT12 pin 6 (Ch1 Cold)" },
            { fromPin: 1, toPin: 1, desc: "Gnd \u2192 DT12 pin 1 (Ch1 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 3, desc: "Hot \u2192 DT12 pin 3 (Ch2 Hot)" },
            { fromPin: 3, toPin: 7, desc: "Cold \u2192 DT12 pin 7 (Ch2 Cold)" },
            { fromPin: 1, toPin: 2, desc: "Gnd \u2192 DT12 pin 2 (Ch2 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 8, desc: "Hot \u2192 DT12 pin 8 (Ch3 Hot)" },
            { fromPin: 3, toPin: 9, desc: "Cold \u2192 DT12 pin 9 (Ch3 Cold)" },
            { fromPin: 1, toPin: 4, desc: "Gnd \u2192 DT12 pin 4 (Ch3 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 16, desc: "Hot \u2192 DT12 pin 16 (Ch4 Hot)" },
            { fromPin: 3, toPin: 17, desc: "Cold \u2192 DT12 pin 17 (Ch4 Cold)" },
            { fromPin: 1, toPin: 10, desc: "Gnd \u2192 DT12 pin 10 (Ch4 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 12, desc: "Hot \u2192 DT12 pin 12 (Ch5 Hot)" },
            { fromPin: 3, toPin: 18, desc: "Cold \u2192 DT12 pin 18 (Ch5 Cold)" },
            { fromPin: 1, toPin: 11, desc: "Gnd \u2192 DT12 pin 11 (Ch5 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 19, desc: "Hot \u2192 DT12 pin 19 (Ch6 Hot)" },
            { fromPin: 3, toPin: 20, desc: "Cold \u2192 DT12 pin 20 (Ch6 Cold)" },
            { fromPin: 1, toPin: 13, desc: "Gnd \u2192 DT12 pin 13 (Ch6 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 15, desc: "Hot \u2192 DT12 pin 15 (Ch7 Hot)" },
            { fromPin: 3, toPin: 21, desc: "Cold \u2192 DT12 pin 21 (Ch7 Cold)" },
            { fromPin: 1, toPin: 14, desc: "Gnd \u2192 DT12 pin 14 (Ch7 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 24, desc: "Hot \u2192 DT12 pin 24 (Ch8 Hot)" },
            { fromPin: 3, toPin: 29, desc: "Cold \u2192 DT12 pin 29 (Ch8 Cold)" },
            { fromPin: 1, toPin: 23, desc: "Gnd \u2192 DT12 pin 23 (Ch8 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 30, desc: "Hot \u2192 DT12 pin 30 (Ch9 Hot)" },
            { fromPin: 3, toPin: 31, desc: "Cold \u2192 DT12 pin 31 (Ch9 Cold)" },
            { fromPin: 1, toPin: 25, desc: "Gnd \u2192 DT12 pin 25 (Ch9 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 27, desc: "Hot \u2192 DT12 pin 27 (Ch10 Hot)" },
            { fromPin: 3, toPin: 32, desc: "Cold \u2192 DT12 pin 32 (Ch10 Cold)" },
            { fromPin: 1, toPin: 26, desc: "Gnd \u2192 DT12 pin 26 (Ch10 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 28, desc: "Hot \u2192 DT12 pin 28 (Ch11 Hot)" },
            { fromPin: 3, toPin: 33, desc: "Cold \u2192 DT12 pin 33 (Ch11 Cold)" },
            { fromPin: 1, toPin: 22, desc: "Gnd \u2192 DT12 pin 22 (Ch11 Gnd)" },
          ],
        },
        {
          wiring: [
            { fromPin: 2, toPin: 35, desc: "Hot \u2192 DT12 pin 35 (Ch12 Hot)" },
            { fromPin: 3, toPin: 36, desc: "Cold \u2192 DT12 pin 36 (Ch12 Cold)" },
            { fromPin: 1, toPin: 34, desc: "Gnd \u2192 DT12 pin 34 (Ch12 Gnd)" },
          ],
        },
      ],
    },
    deadEnds: [
      { connector: "to", pin: 2, desc: "DT12 pins 2\u201336 unused (other channels); pin 37 is spare" },
    ],
    notes: "Use the + button to add more XLR channels. Each XLR cable gets its own channel on the DT12. Pin layout follows the standard Whirlwind/Clark DT12 industry convention.",
    sources: [
      { label: "Clark Wire DT12 Audio Multipin Pinout", url: "https://www.clarkwire.com/dt12-audio-multipin-pinout" },
      { label: "Whirlwind DT12 Series", url: "https://www.whirlwindusa.com/products/ac-power-dt-12-dt12-series-broadcast-multipin-connectors" },
    ],
  },
  {
    from: "xlr3", to: "mini_trs", status: "partial", title: "XLR3 to 3.5mm TRS \u2014 Mono Feed to a Stereo Input (Both Channels)",
    use: "Balanced XLR3 output into a 3.5mm STEREO (unbalanced) input \u2014 consumer recorder LINE IN, IFB/IEM transmitter aux in, camera (LINE setting). NOT a phone or laptop headset jack \u2014 those are outputs. The one mono signal lands on both Left and Right.",
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) to Tip (Left)" },
      { fromPin: 2, toPin: 2, desc: "Hot (+) ALSO to Ring (Right) \u2014 same signal to both channels" },
      { fromPin: 1, toPin: 3, desc: "Ground to Sleeve" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "XLR pin 3 (Cold \u2212) \u2014 leave floating (Rane Note 151: never short an active balanced output\u2019s cold leg to ground)" },
    ],
    notes: "A 3.5mm jack on consumer gear is a stereo UNBALANCED input: Tip = Left, Ring = Right, Sleeve = ground. The old PinRef wiring put Hot on Tip and Cold on Ring, which feeds the Right channel an inverted copy of the Left \u2014 the two channels are out of phase, there is no centre image, and a mono sum of the recording cancels to nothing. Feeding one source to two high-impedance INPUTS in parallel is fine (it is two OUTPUTS you must never tie together). Only if the device really has a balanced 3.5mm input (rare; check the manual) wire it T=Hot, R=Cold, S=Ground instead. Level: expect 6\u201312 dB too hot into consumer gear depending on the output topology (a differential output used single-ended loses 6 dB; an impedance-balanced output loses nothing) \u2014 turn the source down or pad. A camera's 3.5 mm MIC input is mic level with plug-in power DC on Tip/Ring: use the camera's LINE setting or a \u221240 dB pad. Never plug the 3.5 mm end into a headphone/headset jack: Tip and Ring are jumpered here and would short the device's L and R output amplifiers together. The female XLR3 also fits a party-line cable \u2014 30 V DC on pin 2 would land on both Tip and Ring.",
    sources: [
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input fed unbalanced)", url: "https://www.ranecommercial.com/legacy/note151.html" },
      { label: "Rane Note 109 \u2014 Why Not Wye? (never tie two outputs together; sum L+R with resistors)", url: "https://www.ranecommercial.com/legacy/note109.html" },
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Android AOSP 3.5mm Headset Jack Spec (CTIA LRGM; Tip/Ring are headphone OUTPUTS, mic on Sleeve)", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
    ],
  },
  {
    from: "xlr3", to: "ts", status: "standard", title: "XLR3 to TS \u2014 Balanced to Unbalanced",
    use: "Balanced XLR output to a 1/4\u201d unbalanced input (guitar amp, DI box, unbalanced insert).",
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) to Tip \u2014 Signal" },
      { fromPin: 1, toPin: 2, desc: "Ground to Sleeve" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "XLR pin 3 (Cold \u2212) \u2014 leave floating (safest for active outputs)" },
    ],
    notes: "Balanced to unbalanced conversion. Pin 3 handling depends on the source output topology: FLOAT pin 3 for transformerless active/servo-balanced outputs (grounding can short an inverting op-amp). TIE pin 3 to pin 1 only for transformer-balanced outputs (provides DC reference). When in doubt, leave floating \u2014 it's the safer default. Rane groups transformer AND cross-coupled (servo-balanced) output stages together: both want pin 3 tied to pin 1 when feeding an unbalanced input, or you lose signal (transformer) or 6 dB (cross-coupled). Only plain op-amp differential outputs need pin 3 floated. When the output type is unknown, float first, then try the tie if the level is low.",
    sources: [
      { label: "Rane Note 151 \u2014 Grounding &amp; Shielding", url: "https://www.ranecommercial.com/legacy/note151.html" },
      { label: "Benchmark XLR-to-RCA Adapter Cable Application Note", url: "https://benchmarkmedia.com/products/benchmark-xlrfm-to-rca-adapter-cable-pin-3-floating" },
    ],
  },
  // XLR5 combos
  {
    from: "xlr3", to: "rca", status: "partial", title: "XLR3 to RCA \u2014 Pro to Consumer",
    use: "Pro XLR output to consumer RCA input (amp, receiver, recording interface). Requires level matching \u2014 a bare adapter will overdrive consumer gear.",
    wiring: [
      { fromPin: 2, toPin: 1, desc: "Hot (+) to Center \u2014 Signal" },
      { fromPin: 1, toPin: 2, desc: "Ground to Shell" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "XLR pin 3 (Cold \u2212) \u2014 leave floating (safer for active outputs)" },
    ],
    notes: "\u26a0\ufe0f Level mismatch ~12 dB (pro +4 dBu = 1.23 V vs consumer \u221210 dBV = 0.316 V). Pro peaks can exceed consumer input clip by 15+ dB. Consumer RCA inputs usually have NO gain control \u2014 use an inline pad (\u221212 dB / \u221220 dB), a passive DI (Radial ProAV), or a dedicated level converter. Pin 3 should float for transformerless active outputs \u2014 grounding it can short an inverting op-amp stage. Rane groups transformer AND cross-coupled (servo-balanced) output stages together: both want pin 3 tied to pin 1 when feeding an unbalanced input, or you lose signal (transformer) or 6 dB (cross-coupled). Only plain op-amp differential outputs need pin 3 floated. When the output type is unknown, float first, then try the tie if the level is low. An XLR3 end that fits a Clear-Com / RTS party-line jack will meet +30 V DC on pin 2 \u2014 never plug this into an intercom LINE / loop-through connector.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Benchmark \u2014 Balanced vs. Unbalanced", url: "https://benchmarkmedia.com/blogs/application_notes/balanced-vs-unbalanced-analog-interfaces" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input)", url: "https://www.ranecommercial.com/legacy/note151.html" },
    ],
  },
  {
    from: "xlr5", to: "xlr5", status: "standard", title: "XLR5 Straight-Through",
    use: "Clear-Com / RTS 5-pin headset extension, stereo audio, or DMX512 extension \u2014 all five conductors straight through.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Mic Ground to Mic Ground" },
      { fromPin: 2, toPin: 2, desc: "Mic Signal to Mic Signal" },
      { fromPin: 3, toPin: 3, desc: "Earphone Return to Earphone Return" },
      { fromPin: 4, toPin: 4, desc: "Left Earphone to Left Earphone" },
      { fromPin: 5, toPin: 5, desc: "Right Earphone to Right Earphone" },
    ],
    notes: "All 5 pins straight through, so it is agnostic to what the pins mean: headset (mic ground / mic / ear return / L / R), DMX (common / data 1\u2212 / data 1+ / data 2\u2212 / data 2+) or audio. A headset extension passes the pack\u2019s mic DC bias on pin 2 as a matter of course. Keep both grounds (pins 1 and 3) as separate conductors \u2014 do not bond them in the extension. For DMX512 build it on 120 \u03a9 DMX cable, not mic cable.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "USITT DMX512-A Standard Guide (ESTA)", url: "https://tsp.esta.org/tsp/documents/docs/DMX512-A_Guide_(8x10)_ESTA.PDF" },
      { label: "DMX512 \u2014 Wikipedia (XLR-5: pin 4 Data 2\u2212, pin 5 Data 2+)", url: "https://en.wikipedia.org/wiki/DMX512" },
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
    deadEnds: [
      { connector: "from", pin: 5, desc: "XLR5 pin 5 (Right Earphone) \u2014 leave FLOATING. Never bridge it to pin 4 to get sound in a mono headset" },
    ],
    notes: "Leave pin 5 floating \u2014 Clear-Com warns that shorting pins 4 and 5 together (to get the second ear) shorts two amplifier outputs and distorts the whole PL channel. To hear both intercom channels in a mono headset, set the pack to mono instead (RTS BP-325: jumper W5 = MONO). Genders: a 5-pin RTS pack has a female XLR5 jack and a Clear-Com headset has a female XLR4 plug, so this cable is MALE XLR5 to MALE XLR4. Pin 2 carries the pack\u2019s mic DC bias \u2014 harmless, straight through. Mirror check: both ends are male, but the app draws both connectors as female faces \u2014 the male insert is the mirror image. Telex/RTS PH-88R and Riedel headsets carry a MALE XLR4; for those the XLR4 end must be female.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
      { label: "RTS BP-325 User Manual \u2014 Specifications (headset, line and program connector pinouts)", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
    ],
  },
  {
    from: "xlr5", to: "rj45", status: "standard", title: "XLR5 to RJ45 \u2014 Intercom over Cat5",
    use: "Clear-Com / RTS intercom headset extension over Cat5. Single channel uses 5 of 8 wires; pairing follows StudioHub+ XLR3 convention extended to cover XLR5's two additional ear signals.",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Mic Ground (pin 1) to RJ45 pin 4 (Blue)" },
      { fromPin: 2, toPin: 1, desc: "Mic Signal (pin 2) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 3, toPin: 2, desc: "Earphone Return (pin 3) to RJ45 pin 2 (Orange)" },
      { fromPin: 4, toPin: 3, desc: "Left Earphone (pin 4) to RJ45 pin 3 (Wht/Grn)" },
      { fromPin: 5, toPin: 6, desc: "Right Earphone (pin 5) to RJ45 pin 6 (Green)" },
    ],
    multiChannel: {
      max: 1,
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 4, desc: "Mic Ground (pin 1) to RJ45 pin 4 (Blue)" },
            { fromPin: 2, toPin: 1, desc: "Mic Signal (pin 2) to RJ45 pin 1 (Wht/Org)" },
            { fromPin: 3, toPin: 2, desc: "Earphone Return (pin 3) to RJ45 pin 2 (Orange)" },
            { fromPin: 4, toPin: 3, desc: "Left Earphone (pin 4) to RJ45 pin 3 (Wht/Grn)" },
            { fromPin: 5, toPin: 6, desc: "Right Earphone (pin 5) to RJ45 pin 6 (Green)" },
          ],
        },
      ],
    },
    deadEnds: [
      { connector: "to", pin: 5, desc: "RJ45 pin 5 \u2014 unused" },
      { connector: "to", pin: 7, desc: "RJ45 pin 7 \u2014 unused" },
      { connector: "to", pin: 8, desc: "RJ45 pin 8 \u2014 unused" },
    ],
    notes: "XLR5 is not natively part of StudioHub+. This wiring extends the StudioHub+ XLR3 convention (verified for build #4): mic-ground on Blue, mic-signal+ear-return on the Wht/Org pair, then maps XLR5's two additional ear signals onto pair 2 (Wht/Grn + Green). The receive-side breakout uses the inverse mapping. Pair 1 is shared between mic-signal and ear-return rather than mic-signal and mic-ground, so common-mode rejection on the mic line isn't ideal \u2014 use shielded Cat5 for any run beyond a few feet. PinRef convention only \u2014 no manufacturer publishes a headset-over-RJ45 pinout; both ends must be built from these two builds. The mic DC bias on pin 2 rides along on pair 1. Never plug this into an Ethernet switch, a PoE port (48 V on pins 4/5 and 7/8) or a powered StudioHub+ panel (\u00b115 V on 7/8).",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide (XLR3 convention extended to XLR5)", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
      { label: "Clear-Com V-Series Headset Connectors (XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
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
      { label: "Internal Build for custom use", url: null },
    ],
  },
  {
    from: "xlr5", to: "xlr3", status: "partial", title: "XLR5 to XLR3 \u2014 Beltpack Breakout (Mic In + Ear Out)",
    use: "Plug into a 5-pin beltpack\u2019s headset jack and break it out to XLR3s: one FEMALE XLR3 to take an ordinary dynamic mic INTO the pack, and one MALE XLR3 carrying the pack\u2019s earphone audio OUT to a mixer or recorder\u2019s balanced input. One cable = mic in only; two = mic in + ear out.",
    wiring: [
      { fromPin: 2, toPin: 2, desc: "XLR5 pin 2 (Mic Input) to XLR3 pin 2 (Hot +) \u2014 mic signal into the pack" },
      { fromPin: 1, toPin: 1, desc: "XLR5 pin 1 (Mic Ground) to XLR3 pin 1 (Ground)" },
      { fromPin: 1, toPin: 3, desc: "XLR5 pin 1 (Mic Ground) ALSO to XLR3 pin 3 (Cold) \u2014 unbalances the dynamic mic into the pack\u2019s unbalanced mic input" },
    ],
    multiChannel: {
      max: 2,
      multiSide: "to",
      channelLabels: ["Mic IN \u2014 XLR3 mic into pack (XLR5 pins 1/2)", "Ear OUT \u2014 pack earphone to balanced input (XLR5 pins 3/4)"],
      perChannel: [
        {
          wiring: [
            { fromPin: 2, toPin: 2, desc: "XLR5 pin 2 (Mic Input) to XLR3 pin 2 (Hot +) \u2014 mic signal into the pack" },
            { fromPin: 1, toPin: 1, desc: "XLR5 pin 1 (Mic Ground) to XLR3 pin 1 (Ground)" },
            { fromPin: 1, toPin: 3, desc: "XLR5 pin 1 (Mic Ground) ALSO to XLR3 pin 3 (Cold) \u2014 unbalances the dynamic mic into the pack\u2019s unbalanced mic input" },
          ],
        },
        {
          wiring: [
            { fromPin: 4, toPin: 2, desc: "XLR5 pin 4 (Left Earphone out) to XLR3 pin 2 (Hot +)" },
            { fromPin: 3, toPin: 1, desc: "XLR5 pin 3 (Earphone Return) to XLR3 pin 1 (Ground)" },
            { fromPin: 3, toPin: 3, desc: "XLR5 pin 3 (Earphone Return) ALSO to XLR3 pin 3 (Cold) \u2014 unbalanced source into a balanced input: tie cold to ground at the XLR3 (Rane Note 151 Fig. 5e)" },
          ],
        },
      ],
    },
    deadEnds: [
      { connector: "from", pin: 3, desc: "XLR5 pin 3 (Earphone Return) \u2014 unused on the mic-only cable (add the 2nd XLR3 for ear out)" },
      { connector: "from", pin: 4, desc: "XLR5 pin 4 (Left Earphone) \u2014 unused (add the 2nd XLR3 for ear out)" },
      { connector: "from", pin: 5, desc: "XLR5 pin 5 (Right Earphone) \u2014 unused; never bridge to pin 4" },
    ],
    notes: "Two separate circuits with two separate grounds \u2014 keep them apart. MIC IN uses pins 1/2 (pin 1 is the mic signal ground \u2014 Clear-Com), with the XLR3 cold tied to pin 1 so a dynamic mic works into the pack\u2019s unbalanced input (dynamic mics only; set the pack\u2019s mic switch to DYNAMIC). EAR OUT uses pins 3/4 (pin 3 is the earphone return \u2014 NOT pin 1), left ear only; the pack\u2019s earphone output is unbalanced, so the XLR3 cold is tied to ground at the XLR3 per Rane Note 151 Fig. 5e. The earphone output is headphone level \u2014 pad or trim at the mixer. Pin 5 (right ear) is left alone: never short it to pin 4 (Clear-Com). Earlier PinRef versions of this build put the ear return on pin 1 and the mic cold on pin 3; both were wrong. The pack jack is a female XLR5, so the cable\u2019s XLR5 is male. Hazards: the Ear OUT XLR3 is MALE and fits a mic input \u2014 turn 48 V phantom OFF on that channel (pin 3 is grounded here; phantom would push DC into the pack's headphone amplifier) and use a LINE input (the pack output is up to 8 V p-p). The Mic IN XLR3 is FEMALE and fits a party-line cable's male end \u2014 never patch the intercom LINE into it (30 V DC on pin 2). On Clear-Com RS-700 packs pin 4 also carries ~15 V DC (DC+ relative to pin 1): meter pins 4\u21921 before using the Ear OUT leg. Once both XLR3s are in one mixer, pack pins 1 and 3 are bonded through the mixer chassis \u2014 fine on an RTS BP-325 (both are \u2018common\u2019), check on other packs.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
      { label: "RTS BP-325 User Manual \u2014 Specifications (headset, line and program connector pinouts)", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
      { label: "Telex/RTS pinouts (plsystem.com) \u2014 BP-325 line = 30 VDC on pin 2; KP-32 \u201ctie mic \u2212 to ground to unbalance a dynamic mic\u201d", url: "https://www.plsystem.com/pinout1.htm" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input fed unbalanced)", url: "https://www.ranecommercial.com/legacy/note151.html" },
      { label: "Clear-Com RS-701 Quick Reference \u2014 headset connector: 1 Mic\u2212/DC\u2212, 2 Mic+, 3 Spkr\u2212, 4 Spkr+/DC+ (15 V nom, 20 mA); DIP 1 Dynamic/Electret", url: "https://www.manualsdir.com/manuals/332633/clear-com-rs-701.html" },
      { label: "Yamaha \u2014 Phantom Power (never apply phantom to anything other than condenser microphones)", url: "https://hub.yamaha.com/proaudio/livesound/tools-of-the-trade-mixer-and-phantom-power/" },
    ],
  },
  {
    from: "xlr5", to: "xlr3", status: "partial", title: "XLR5 to XLR3 \u2014 Headset Mic to Balanced Input",
    use: "Use the mic of a 5-pin intercom headset (RTS / Telex) as a mic into a mixer or recorder\u2019s balanced XLR3 input. Mic only \u2014 the earphones are not connected.",
    wiring: [
      { fromPin: 2, toPin: 2, desc: "XLR5 pin 2 (Mic) to XLR3 pin 2 (Hot +)" },
      { fromPin: 1, toPin: 1, desc: "XLR5 pin 1 (Mic Ground) to XLR3 pin 1 (Ground)" },
      { fromPin: 1, toPin: 3, desc: "XLR5 pin 1 (Mic Ground) ALSO to XLR3 pin 3 (Cold) \u2014 unbalanced mic into a balanced input: tie cold to ground at the XLR3 (Rane Note 151 Fig. 5e)" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "XLR5 pin 3 (Earphone Return) \u2014 unused" },
      { connector: "from", pin: 4, desc: "XLR5 pin 4 (Left Earphone) \u2014 unused" },
      { connector: "from", pin: 5, desc: "XLR5 pin 5 (Right Earphone) \u2014 unused" },
    ],
    notes: "Same circuit as the XLR4 \u2192 XLR3 headset-mic build. Works with DYNAMIC headset mics (e.g. Telex PH-88 dynamic). Many intercom headset mics are electrets that need the DC bias a beltpack supplies on pin 2 \u2014 a mixer does not supply that, so an electret headset will be silent; and never turn on 48 V phantom into this cable (pin 3 is grounded here, and the electret capsule is not built for it). The XLR5 end is FEMALE to accept the headset\u2019s male plug. RTS/Telex 5-pin headsets only (mic low on pin 1, mic high on pin 2). Other 5-pin headset conventions exist (e.g. Beyerdynamic balanced-mic wiring) \u2014 check the headset's pinout before building.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications (headset, line and program connector pinouts)", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input fed unbalanced)", url: "https://www.ranecommercial.com/legacy/note151.html" },
    ],
  },
  {
    from: "xlr5", to: "mini_trs", status: "standard", title: "XLR5 to 3.5mm TRS \u2014 Intercom Earpiece Feed",
    use: "Taking the earpiece output from a Clear-Com beltpack to drive a 3.5mm consumer headphone.",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "XLR5 pin 4 (Left Earphone +) to Tip" },
      { fromPin: 5, toPin: 2, desc: "XLR5 pin 5 (Right Earphone +) to Ring" },
      { fromPin: 3, toPin: 3, desc: "XLR5 pin 3 (Earphone Return) to Sleeve" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "XLR5 pin 1 (Mic Ground) \u2014 unused, no mic circuit on TRS" },
      { connector: "from", pin: 2, desc: "XLR5 pin 2 (Mic Signal) \u2014 unused, no mic circuit on TRS" },
    ],
    notes: "Listen-only. No talkback. For 2-way use a TRRS headset. Sleeve uses XLR5 pin 3 (Earphone Return), per Clear-Com V-Series spec \u2014 that's the dedicated return for the ear amplifiers. Pin 1 (Mic Ground) is left floating since there's no mic circuit on a 3.5mm TRS. On a stereo pack each ear gets its own channel; if one ear is silent, set the pack to MONO (RTS BP-325 jumper W5) \u2014 do NOT bridge pins 4 and 5 in the cable, that shorts two amplifier outputs (Clear-Com). The pack jack is a female XLR5, so this cable needs a male XLR5. Load caution: consumer earbuds/headphones are 16\u201332 \u03a9; the RTS BP-325 headphone amplifier is specified for 50\u2013600 \u03a9 at 150 mW and up to 8 V p-p. Start with the pack volume at minimum \u2014 an in-ear driver at that level is a hearing risk \u2014 and expect the amp to run hot or clip into a 16 \u03a9 load. The 3.5 mm end is a FEMALE jack (headphones carry the plug). Some single-channel packs leave XLR5 pin 5 unconnected, so the right ear is silent regardless of the mono jumper.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
    ],
  },
  // DT12 combos
  {
    from: "xlr5", to: "mini_trrs", status: "standard", title: "XLR5 to 3.5mm TRRS \u2014 Intercom to Consumer Headset",
    use: "Drive a CTIA TRRS headset (iPhone, modern Android) from a 5-pin beltpack that supplies electret mic bias (see notes \u2014 the RTS BP-325 does not, so it is listen-only there).",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "XLR5 pin 4 (Left Earphone +) to Tip (Left Audio)" },
      { fromPin: 5, toPin: 2, desc: "XLR5 pin 5 (Right Earphone +) to Ring 1 (Right Audio)" },
      { fromPin: 2, toPin: 4, desc: "XLR5 pin 2 (Mic Signal) to Sleeve (Mic CTIA)" },
      { fromPin: 1, toPin: 3, desc: "XLR5 pin 1 (Mic Ground) to Ring 2 (Ground CTIA)" },
      { fromPin: 3, toPin: 3, desc: "XLR5 pin 3 (Earphone Return) to Ring 2 (Ground CTIA)" },
    ],
    notes: "CTIA (Apple/Android) wiring: mic on Sleeve, ground on Ring 2 \u2014 matches Clear-Com\u2019s own iPhone TRRS note (T=L, R1=R, R2=common, S=mic+). TRRS only has one ground pin so both XLR5 returns (pin 1 Mic Ground and pin 3 Earphone Return) must converge on Ring 2 \u2014 bond them at the TRRS end. Phone-headset mics are electrets: set the pack\u2019s mic switch to ELECTRET so pin 2 supplies bias, or the mic is dead. If the mic is dead and the audio is faint/distorted even so, the headset is OMTP \u2014 swap Ring 2 and Sleeve. Pack jack is female XLR5, so the cable\u2019s XLR5 is male. Mic bias: a CTIA headset mic is an electret that needs ~2 V bias. The RTS BP-325 headset jacks are DYNAMIC-MIC ONLY (no electret mode, no bias) \u2014 on a BP-325 this cable is listen-only. Packs that do supply bias: Clear-Com RS-700 series (DIP 1 OFF = Electret), V-Series (software), FreeSpeak II / Tempest (auto-detect). DC hazard: Clear-Com RS-700-series (Encore) packs carry ~15 V DC between headset pin 4 (Spkr+/DC+) and pin 1 (Mic\u2212/DC\u2212). This cable bonds pin 1 to pin 3 (both to Ring 2), so on those packs the earbud sits across that DC supply and the pack's speaker return is shorted to its DC return. Do NOT use this adapter on an RS-701/702/703 or any pack that shows DC between pins 4 and 1 or between pins 1 and 3 \u2014 meter both with the pack powered and no headset. Verified pinout for RTS BP-325-type packs where pins 1 and 3 are both \u2018common\u2019. Load caution: consumer earbuds/headphones are 16\u201332 \u03a9; the RTS BP-325 headphone amplifier is specified for 50\u2013600 \u03a9 at 150 mW and up to 8 V p-p. Start with the pack volume at minimum \u2014 an in-ear driver at that level is a hearing risk \u2014 and expect the amp to run hot or clip into a 16 \u03a9 load. The 3.5 mm end is a FEMALE TRRS jack; the XLR5 end is MALE and also fits a DMX512 female \u2014 never plug it into a lighting line (it shorts DMX Data 1+ to common).",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec (LRGM)", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "Clear-Com Solution Finder \u2014 iPhone TRRS connector (T=L, R1=R, R2=common, S=mic+)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/513770329/iPhone+TRRS+Connector" },
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
      { label: "Clear-Com RS-701 Quick Reference \u2014 headset connector: 1 Mic\u2212/DC\u2212, 2 Mic+, 3 Spkr\u2212, 4 Spkr+/DC+ (15 V nom, 20 mA); DIP 1 Dynamic/Electret", url: "https://www.manualsdir.com/manuals/332633/clear-com-rs-701.html" },
      { label: "DMX512 \u2014 Wikipedia (XLR-5: pin 4 Data 2\u2212, pin 5 Data 2+)", url: "https://en.wikipedia.org/wiki/DMX512" },
    ],
  },
  {
    from: "dt12", to: "dt12", status: "standard", title: "DT12 Straight-Through Extension",
    use: "Extending a DT12 / FK37 multi-channel audio snake \u2014 all 37 pins straight through",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Pin 1 to Pin 1" },
      { fromPin: 2, toPin: 2, desc: "Pin 2 to Pin 2" },
      { fromPin: 3, toPin: 3, desc: "Pin 3 to Pin 3" },
      { fromPin: 4, toPin: 4, desc: "Pin 4 to Pin 4" },
      { fromPin: 5, toPin: 5, desc: "Pin 5 to Pin 5" },
      { fromPin: 6, toPin: 6, desc: "Pin 6 to Pin 6" },
      { fromPin: 7, toPin: 7, desc: "Pin 7 to Pin 7" },
      { fromPin: 8, toPin: 8, desc: "Pin 8 to Pin 8" },
      { fromPin: 9, toPin: 9, desc: "Pin 9 to Pin 9" },
      { fromPin: 10, toPin: 10, desc: "Pin 10 to Pin 10" },
      { fromPin: 11, toPin: 11, desc: "Pin 11 to Pin 11" },
      { fromPin: 12, toPin: 12, desc: "Pin 12 to Pin 12" },
      { fromPin: 13, toPin: 13, desc: "Pin 13 to Pin 13" },
      { fromPin: 14, toPin: 14, desc: "Pin 14 to Pin 14" },
      { fromPin: 15, toPin: 15, desc: "Pin 15 to Pin 15" },
      { fromPin: 16, toPin: 16, desc: "Pin 16 to Pin 16" },
      { fromPin: 17, toPin: 17, desc: "Pin 17 to Pin 17" },
      { fromPin: 18, toPin: 18, desc: "Pin 18 to Pin 18" },
      { fromPin: 19, toPin: 19, desc: "Pin 19 to Pin 19" },
      { fromPin: 20, toPin: 20, desc: "Pin 20 to Pin 20" },
      { fromPin: 21, toPin: 21, desc: "Pin 21 to Pin 21" },
      { fromPin: 22, toPin: 22, desc: "Pin 22 to Pin 22" },
      { fromPin: 23, toPin: 23, desc: "Pin 23 to Pin 23" },
      { fromPin: 24, toPin: 24, desc: "Pin 24 to Pin 24" },
      { fromPin: 25, toPin: 25, desc: "Pin 25 to Pin 25" },
      { fromPin: 26, toPin: 26, desc: "Pin 26 to Pin 26" },
      { fromPin: 27, toPin: 27, desc: "Pin 27 to Pin 27" },
      { fromPin: 28, toPin: 28, desc: "Pin 28 to Pin 28" },
      { fromPin: 29, toPin: 29, desc: "Pin 29 to Pin 29" },
      { fromPin: 30, toPin: 30, desc: "Pin 30 to Pin 30" },
      { fromPin: 31, toPin: 31, desc: "Pin 31 to Pin 31" },
      { fromPin: 32, toPin: 32, desc: "Pin 32 to Pin 32" },
      { fromPin: 33, toPin: 33, desc: "Pin 33 to Pin 33" },
      { fromPin: 34, toPin: 34, desc: "Pin 34 to Pin 34" },
      { fromPin: 35, toPin: 35, desc: "Pin 35 to Pin 35" },
      { fromPin: 36, toPin: 36, desc: "Pin 36 to Pin 36" },
      { fromPin: 37, toPin: 37, desc: "Pin 37 to Pin 37" },
    ],
    sources: [
      { label: "Clark Wire DT12 Audio Multipin Pinout", url: "https://www.clarkwire.com/dt12-audio-multipin-pinout" },
      { label: "Whirlwind DT12 Series", url: "https://www.whirlwindusa.com/products/ac-power-dt-12-dt12-series-broadcast-multipin-connectors" },
    ],
  },
  // TRS combos
  {
    from: "dt12", to: "db25", status: "standard", title: "DT12 to DB25 \u2014 Audio Snake (8 Ch, AES59/Tascam)",
    use: "First 8 channels of DT12 to DB25 AES59/Tascam standard. Common in broadcast trucks. A DB25 only carries 8 channels \u2014 DT12 channels 9\u201312 do not fit and must break out separately.",
    wiring: [
      { fromPin: 5, toPin: 24, desc: "DT12 pin 5 (Ch1 Hot) \u2192 DB25 pin 24 (Ch1 Hot)" },
      { fromPin: 6, toPin: 12, desc: "DT12 pin 6 (Ch1 Cold) \u2192 DB25 pin 12 (Ch1 Cold)" },
      { fromPin: 1, toPin: 25, desc: "DT12 pin 1 (Ch1 Gnd) \u2192 DB25 pin 25 (Ch1 Gnd)" },
      { fromPin: 3, toPin: 10, desc: "DT12 pin 3 (Ch2 Hot) \u2192 DB25 pin 10 (Ch2 Hot)" },
      { fromPin: 7, toPin: 23, desc: "DT12 pin 7 (Ch2 Cold) \u2192 DB25 pin 23 (Ch2 Cold)" },
      { fromPin: 2, toPin: 11, desc: "DT12 pin 2 (Ch2 Gnd) \u2192 DB25 pin 11 (Ch2 Gnd)" },
      { fromPin: 8, toPin: 21, desc: "DT12 pin 8 (Ch3 Hot) \u2192 DB25 pin 21 (Ch3 Hot)" },
      { fromPin: 9, toPin: 9, desc: "DT12 pin 9 (Ch3 Cold) \u2192 DB25 pin 9 (Ch3 Cold)" },
      { fromPin: 4, toPin: 22, desc: "DT12 pin 4 (Ch3 Gnd) \u2192 DB25 pin 22 (Ch3 Gnd)" },
      { fromPin: 16, toPin: 7, desc: "DT12 pin 16 (Ch4 Hot) \u2192 DB25 pin 7 (Ch4 Hot)" },
      { fromPin: 17, toPin: 20, desc: "DT12 pin 17 (Ch4 Cold) \u2192 DB25 pin 20 (Ch4 Cold)" },
      { fromPin: 10, toPin: 8, desc: "DT12 pin 10 (Ch4 Gnd) \u2192 DB25 pin 8 (Ch4 Gnd)" },
      { fromPin: 12, toPin: 18, desc: "DT12 pin 12 (Ch5 Hot) \u2192 DB25 pin 18 (Ch5 Hot)" },
      { fromPin: 18, toPin: 6, desc: "DT12 pin 18 (Ch5 Cold) \u2192 DB25 pin 6 (Ch5 Cold)" },
      { fromPin: 11, toPin: 19, desc: "DT12 pin 11 (Ch5 Gnd) \u2192 DB25 pin 19 (Ch5 Gnd)" },
      { fromPin: 19, toPin: 4, desc: "DT12 pin 19 (Ch6 Hot) \u2192 DB25 pin 4 (Ch6 Hot)" },
      { fromPin: 20, toPin: 17, desc: "DT12 pin 20 (Ch6 Cold) \u2192 DB25 pin 17 (Ch6 Cold)" },
      { fromPin: 13, toPin: 5, desc: "DT12 pin 13 (Ch6 Gnd) \u2192 DB25 pin 5 (Ch6 Gnd)" },
      { fromPin: 15, toPin: 15, desc: "DT12 pin 15 (Ch7 Hot) \u2192 DB25 pin 15 (Ch7 Hot)" },
      { fromPin: 21, toPin: 3, desc: "DT12 pin 21 (Ch7 Cold) \u2192 DB25 pin 3 (Ch7 Cold)" },
      { fromPin: 14, toPin: 16, desc: "DT12 pin 14 (Ch7 Gnd) \u2192 DB25 pin 16 (Ch7 Gnd)" },
      { fromPin: 24, toPin: 1, desc: "DT12 pin 24 (Ch8 Hot) \u2192 DB25 pin 1 (Ch8 Hot)" },
      { fromPin: 29, toPin: 14, desc: "DT12 pin 29 (Ch8 Cold) \u2192 DB25 pin 14 (Ch8 Cold)" },
      { fromPin: 23, toPin: 2, desc: "DT12 pin 23 (Ch8 Gnd) \u2192 DB25 pin 2 (Ch8 Gnd)" },
    ],
    deadEnds: [
      { connector: "to", pin: 13, desc: "DB25 pin 13 \u2014 No Connect (only unused pin on DB25)" },
      { connector: "from", pin: 22, desc: "DT12 pins 22, 25\u201328, 30\u201336 (Channels 9\u201312) \u2014 do not fit on a single DB25; break out separately. Pin 37 is spare." },
    ],
    notes: "AES59-2012 / Tascam DA-88 standard. DB25 carries 8 channels; DT12 carries 12 \u2014 channels 9\u201312 need a separate breakout. Yamaha DB25 is different (AES3 digital); never cross without a crossover cable.",
    sources: [
      { label: "TASCAM DB-25 Pinout Standard (official)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
      { label: "Clark Wire DT12 Audio Multipin Pinout", url: "https://www.clarkwire.com/dt12-audio-multipin-pinout" },
      { label: "AES59-2012 Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=92" },
    ],
  },
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
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip (Signal +) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 2, toPin: 2, desc: "Ring (Signal \u2212) to RJ45 pin 2 (Orange)" },
      { fromPin: 3, toPin: 4, desc: "Sleeve (Ground) to RJ45 pin 4 (Blue)" },
    ],
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
    deadEnds: [
      { connector: "to", pin: 3, desc: "RJ45 pins 3,5,6 \u2014 unused (add 2nd TRS for Ch2)" },
    ],
    notes: "StudioHub+ layout for the signal pairs (Tip 1 / Ring 2, second channel Tip 3 / Ring 6). The official StudioHub+ TRS adapter puts the Sleeve on the cable SHIELD, not pin 4 (pin 4 is DC GND, pin 5 n/c); PinRef lands the sleeves on pins 4/5 so unshielded Cat5 works \u2014 wire both ends the same way (pair with RJ45 \u2192 TRS). Pins 7\u20138 carry \u00b115 V DC on powered StudioHub+ panels; never plug into an Ethernet/PoE port.",
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
    notes: "Phantom caution: if the XLR3 end goes into a mic input with 48 V on, that DC (via 6.8 k\u03a9) is pushed into the device on the other end \u2014 keep phantom OFF on that channel. An XLR3 end that fits a Clear-Com / RTS party-line jack will meet +30 V DC on pin 2 \u2014 never plug this into an intercom LINE / loop-through connector. The male XLR3 also fits the RTS BP-325 LINE INPUT / LINE LOOP (XLR-3-31/-32) jacks, which carry +30 V DC on pin 2 unless the loop is re-jumpered as a program input.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Yamaha \u2014 Phantom Power (never apply phantom to anything other than condenser microphones)", url: "https://hub.yamaha.com/proaudio/livesound/tools-of-the-trade-mixer-and-phantom-power/" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
    ],
  },
  // RJ45 combos
  {
    from: "trs", to: "xlr4", status: "partial", title: "TRS to XLR4 \u2014 Monitor Feed to Headset Earphone",
    use: "Send a 1/4\u201d TRS mono or stereo program feed to an XLR4 intercom headset earphone. Listen-only \u2014 mic circuit unused.",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Tip to Earphone Signal (pin 4)" },
      { fromPin: 3, toPin: 3, desc: "Sleeve to Earphone Return (pin 3)" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "TRS Ring \u2014 XLR4 earphone is mono, right channel dropped" },
      { connector: "to", pin: 1, desc: "XLR4 pin 1 (Mic Ground) \u2014 unused, no mic circuit on this listen-only feed" },
      { connector: "to", pin: 2, desc: "XLR4 pin 2 (Mic Signal) \u2014 unused, listen-only" },
    ],
    notes: "Mono listen feed only. Sleeve uses XLR4 pin 3 (Earphone Return) per Clear-Com V-Series spec \u2014 that's the dedicated return for the headphone amplifier. Pin 1 (Mic Ground) is left floating since there's no mic circuit on this feed. Level: a comms earphone is a 200\u2013400 \u03a9 passive transducer. Feed it ONLY from a headphone amplifier or an output with a level control the listener can reach \u2014 never a raw +4 dBu line/program send (105\u2013110 dB SPL at the ear, no volume control in the path). Start at minimum. Gender: a Clear-Com headset has a female XLR4, so this cable's XLR4 is MALE; the app draws the female face, so the insert you solder is mirrored. A FEMALE XLR4 built by mistake fits a Clear-Com beltpack and would drive the mixer output into the pack's headphone amplifier output.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
    ],
  },
  {
    from: "rj45", to: "rj45", status: "standard", title: "RJ45 Straight-Through (T568B)",
    use: "Standard Ethernet patch cable. Both ends wired to T568B (pins 1/2 = Orange pair, 3/6 = Green pair, 4/5 = Blue pair, 7/8 = Brown pair).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Pin 1 to Pin 1" },
      { fromPin: 2, toPin: 2, desc: "Pin 2 to Pin 2" },
      { fromPin: 3, toPin: 3, desc: "Pin 3 to Pin 3" },
      { fromPin: 4, toPin: 4, desc: "Pin 4 to Pin 4" },
      { fromPin: 5, toPin: 5, desc: "Pin 5 to Pin 5" },
      { fromPin: 6, toPin: 6, desc: "Pin 6 to Pin 6" },
      { fromPin: 7, toPin: 7, desc: "Pin 7 to Pin 7" },
      { fromPin: 8, toPin: 8, desc: "Pin 8 to Pin 8" },
    ],
    sources: [
      { label: "TIA/EIA-568-B Wiring Standard", url: "https://www.truecable.com/blogs/cable-academy/t568a-vs-t568b" },
    ],
  },
  {
    from: "rj45", to: "de9", status: "standard", title: "RJ45 to DE-9 \u2014 Cisco / Yost Console Cable",
    use: "Cisco router/switch console access. This is the Yost RJ45 serial standard (1987), adopted by Cisco for their light-blue console cables.",
    wiring: [
      { fromPin: 1, toPin: 8, desc: "RJ45 pin 1 (RTS) to DE-9 pin 8 (CTS)" },
      { fromPin: 2, toPin: 6, desc: "RJ45 pin 2 (DTR) to DE-9 pin 6 (DSR)" },
      { fromPin: 3, toPin: 2, desc: "RJ45 pin 3 (TxD) to DE-9 pin 2 (RxD)" },
      { fromPin: 4, toPin: 5, desc: "RJ45 pin 4 (GND) to DE-9 pin 5 (GND)" },
      { fromPin: 5, toPin: 5, desc: "RJ45 pin 5 (GND) to DE-9 pin 5 (GND)" },
      { fromPin: 6, toPin: 3, desc: "RJ45 pin 6 (RxD) to DE-9 pin 3 (TxD)" },
      { fromPin: 7, toPin: 4, desc: "RJ45 pin 7 (DSR) to DE-9 pin 4 (DTR)" },
      { fromPin: 8, toPin: 7, desc: "RJ45 pin 8 (CTS) to DE-9 pin 7 (RTS)" },
    ],
    notes: "Yost standard \u2014 the RJ45 rollover puts RTS/CTS, TxD/RxD, DTR/DSR on opposite-numbered pins (1\u21948, 3\u21946, 2\u21947), so the DE-9 end ends up with the crossover automatically built in. For sports scoring (Daktronics All Sport, OmniSport, etc.), this is NOT the cable \u2014 those controllers expose plain PC-style DE-9 RS-232 on pins 2/3/5; wire a direct DE-9 straight-through or 3-wire null modem instead.",
    sources: [
      { label: "Cisco RJ-45 to DE-9 Console Cable Pinout", url: "https://pinoutguide.com/SerialPortsCables/Cisco_RJ-45_to_DB-9_conso_pinout.shtml" },
      { label: "Yost Serial Device Wiring Standard", url: "https://yost.com/computers/RJ45-serial/" },
    ],
  },
  {
    from: "rj45", to: "db25", status: "standard", title: "RJ45 to DB25 \u2014 Minimal Serial Adapter",
    use: "Field-built Cat5 to DB25 serial adapter for legacy RS-232 DB25 equipment. 3-wire minimal (Tx/Rx/GND).",
    wiring: [
      { fromPin: 3, toPin: 3, desc: "RJ45 pin 3 (TxD, Yost) to DB25 pin 3 (RxD on a DTE) \u2014 crossover built in" },
      { fromPin: 4, toPin: 7, desc: "RJ45 pin 4 (GND) to DB25 pin 7 (GND)" },
      { fromPin: 5, toPin: 7, desc: "RJ45 pin 5 (GND) to DB25 pin 7 (GND)" },
      { fromPin: 6, toPin: 2, desc: "RJ45 pin 6 (RxD, Yost) to DB25 pin 2 (TxD on a DTE) \u2014 crossover built in" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "RJ45 pins 1, 2, 7, 8 \u2014 unused" },
    ],
    notes: "RJ45 side uses the Yost/Cisco standard (pins 3=TxD, 4/5=GND, 6=RxD). DB25 pins are named from the DTE (PC/terminal) side per EIA-232: pin 2 = TxD, pin 3 = RxD, pin 7 = GND. As drawn the cable connects a Yost RJ45 device to a DTE DB25 with the Tx/Rx cross already built in; if the DB25 end is a DCE (modem), swap the DB25 2/3 connections. Not a manufacturer-specific cable \u2014 Swiss Timing / Omega / Tissot venue gear uses RS-485 on proprietary connectors, NOT DB25 RS-232. Add handshaking pins if the target device requires them.",
    sources: [
      { label: "Yost Serial Device Wiring Standard", url: "https://yost.com/computers/RJ45-serial/" },
      { label: "RS-232 DB25 Pinout Reference", url: "https://www.ti.com/lit/an/snla039/snla039.pdf" },
    ],
  },
  {
    from: "rj45", to: "xlr3", status: "standard", title: "RJ45 to XLR3 \u2014 Audio over Cat5",
    use: "Receiving end of an audio-over-Cat5 run. Up to 2 balanced channels.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "RJ45 pin 1 (Wht/Org) to Hot +" },
      { fromPin: 2, toPin: 3, desc: "RJ45 pin 2 (Orange) to Cold \u2212" },
      { fromPin: 4, toPin: 1, desc: "RJ45 pin 4 (Blue) to Ground" },
    ],
    multiChannel: {
      max: 2,
      perChannel: [
        {
          wiring: [
            { fromPin: 1, toPin: 2, desc: "RJ45 pin 1 (Wht/Org) to Hot +" },
            { fromPin: 2, toPin: 3, desc: "RJ45 pin 2 (Orange) to Cold \u2212" },
            { fromPin: 4, toPin: 1, desc: "RJ45 pin 4 (Blue) to Ground" },
          ],
        },
        {
          wiring: [
            { fromPin: 3, toPin: 2, desc: "RJ45 pin 3 (Wht/Grn) to Hot +" },
            { fromPin: 6, toPin: 3, desc: "RJ45 pin 6 (Green) to Cold \u2212" },
            { fromPin: 5, toPin: 1, desc: "RJ45 pin 5 (Wht/Blue) to Ground" },
          ],
        },
      ],
    },
    deadEnds: [
      { connector: "from", pin: 3, desc: "RJ45 pins 3,5,6,7,8 \u2014 unused (single channel)" },
    ],
    notes: "StudioHub+ receive side. Pair with XLR3\u2192RJ45 at the source. Two balanced channels fit in one Cat5. Note: official StudioHub+ adapters carry XLR pin 1 on the cable SHIELD; pin 4 is the DC GND rail and pin 5 is n/c. PinRef uses pins 4/5 as the ground conductors so plain unshielded Cat5 works \u2014 only valid when the far end is wired the same way. Pins 7/8 carry \u00b115 V DC on powered StudioHub+ panels; never plug into an Ethernet/PoE port.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },
  {
    from: "rj45", to: "xlr5", status: "standard", title: "RJ45 to XLR5 \u2014 Intercom over Cat5",
    use: "Receiving end of a Clear-Com / RTS intercom headset run over Cat5. Mirror of XLR5\u2192RJ45 (#15) \u2014 pair with that build at the source end.",
    wiring: [
      { fromPin: 4, toPin: 1, desc: "RJ45 pin 4 (Blue) to Mic Ground (XLR5 pin 1)" },
      { fromPin: 1, toPin: 2, desc: "RJ45 pin 1 (Wht/Org) to Mic Signal (XLR5 pin 2)" },
      { fromPin: 2, toPin: 3, desc: "RJ45 pin 2 (Orange) to Earphone Return (XLR5 pin 3)" },
      { fromPin: 3, toPin: 4, desc: "RJ45 pin 3 (Wht/Grn) to Left Earphone (XLR5 pin 4)" },
      { fromPin: 6, toPin: 5, desc: "RJ45 pin 6 (Green) to Right Earphone (XLR5 pin 5)" },
    ],
    deadEnds: [
      { connector: "from", pin: 5, desc: "RJ45 pins 5, 7, 8 \u2014 unused" },
    ],
    notes: "Receive end of an XLR5-over-Cat5 intercom run. Pair with #15 (XLR5\u2192RJ45) at the source end \u2014 both ends use the same mapping. Same caveat as #15: this isn't a native StudioHub+ build; the convention extends StudioHub+'s XLR3 mapping by adding the two ear signals onto pair 2. Use shielded Cat5 for any longer run. PinRef convention only \u2014 no manufacturer publishes a headset-over-RJ45 pinout; both ends must be built from these two builds. The mic DC bias on pin 2 rides along on pair 1. Never plug this into an Ethernet switch, a PoE port (48 V on pins 4/5 and 7/8) or a powered StudioHub+ panel (\u00b115 V on 7/8).",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide (XLR3 convention extended to XLR5)", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
      { label: "Clear-Com V-Series Headset Connectors (XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  {
    from: "rj45", to: "trs", status: "standard", title: "RJ45 to TRS \u2014 Balanced Audio over Cat5",
    use: "Receiving end of a balanced audio-over-Cat5 run. One or two TRS outputs from a single Cat5.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "RJ45 pin 1 (Wht/Org) to Tip (Signal +)" },
      { fromPin: 2, toPin: 2, desc: "RJ45 pin 2 (Orange) to Ring (Signal \u2212)" },
      { fromPin: 4, toPin: 3, desc: "RJ45 pin 4 (Blue) to Sleeve (Ground)" },
    ],
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
    deadEnds: [
      { connector: "from", pin: 3, desc: "RJ45 pins 3,5,6 \u2014 unused (add 2nd TRS for Ch2)" },
    ],
    notes: "StudioHub+ receive side. Pair with TRS\u2192RJ45 at the source. Official StudioHub+ carries the Sleeve on the cable shield (pin 4 = DC GND, pin 5 = n/c); PinRef uses pins 4/5 as ground so unshielded Cat5 works, which only holds if the far end matches. Pins 7\u20138 carry \u00b115 V DC on powered StudioHub+ panels; never plug into an Ethernet/PoE port.",
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
    deadEnds: [
      { connector: "from", pin: 5, desc: "RJ45 pins 5, 6, 7, 8 \u2014 unused" },
    ],
    notes: "Receive end of an XLR4-over-Cat5 intercom run. Pair with #47 (XLR4\u2192RJ45) at the source end \u2014 both ends use the same mapping. Same caveat as #15/#47: this isn't a native StudioHub+ build; the convention extends StudioHub+'s XLR3 mapping. Pair 1 ends up sharing mic-signal with ear-return rather than mic-signal with mic-ground, so common-mode rejection isn't ideal \u2014 keep runs under 100 ft and use shielded Cat5. PinRef convention only \u2014 no manufacturer publishes a headset-over-RJ45 pinout; both ends must be built from these two builds. The mic DC bias on pin 2 rides along on pair 1. Never plug this into an Ethernet switch, a PoE port (48 V on pins 4/5 and 7/8) or a powered StudioHub+ panel (\u00b115 V on 7/8).",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide (XLR3 convention extended to XLR4)", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
    ],
  },
  // BNC combos
  {
    from: "rj45", to: "bnc", status: "not_possible", title: "RJ45 to BNC \u2014 NOT a Real SDI-over-Cat5 Path",
    use: "\u26a0\ufe0f This is NOT a working SDI-over-Cat5 cable. A raw pin-to-pin bodge between BNC and RJ45 almost never works even at short distances.",
    wiring: [],
    notes: "SDI is 75\u03a9 single-ended and runs at 1.5\u201312 GHz. Cat5/5e/6 is 100\u03a9 balanced. Tying RJ45 pins together to mate a single-ended signal to a balanced cable violates impedance AND defeats the twisted pair's common-mode rejection. The signal will almost never lock even at 1 m. For real SDI over Cat5, use an ACTIVE extender with a 75\u03a9/100\u03a9 balun and equalizer (MuxLab, AAS, Foresight). For long runs, use SDI-to-fiber. For IP transport, use SMPTE ST 2022-6 or ST 2110.",
    sources: [
      { label: "Belden \u2014 Key to Video Cable Performance", url: "https://www.belden.com/blog/key-to-video-cable-performance" },
      { label: "SMPTE ST 2110", url: "https://www.smpte.org/standards/st2110" },
    ],
  },
  {
    from: "bnc", to: "bnc", status: "standard", title: "BNC Straight-Through \u2014 SDI / Genlock / LTC",
    use: "SDI video, genlock/blackburst, tri-level sync, LTC timecode. Always 75\u03a9 cable with 75\u03a9 connectors.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center conductor to Center conductor (Signal)" },
      { fromPin: 2, toPin: 2, desc: "Shell to Shell (Shield / Ground)" },
    ],
    notes: "75\u03a9 cable is mandatory. Belden 1694A (RG-6) covers SD/HD/3G-SDI \u2014 NOT 12G-rated. For 12G-SDI use Belden 4694R, 4794R, or Canare L-5.5CUHD. 50\u03a9 BNC connectors look identical to 75\u03a9 but cause reflections. Analog sync (blackburst, tri-level) runs much longer than SDI on the same cable since it's baseband, not gigahertz.",
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
    deadEnds: [
      { connector: "to", pin: 2, desc: "Triax inner shield \u2014 unused (normally carries DC return in a camera system)" },
    ],
    notes: "Only works with 75\u03a9 broadcast triax (Belden 9232/1857A, Canare LV-77S, Clark Wire TV series). 50\u03a9 and 90\u03a9 instrumentation triax also exists \u2014 verify cable type before trusting SDI through it. For camera control, use proper triax-rated camera control units, not this passthrough.",
    sources: [
      { label: "Canford LEMO/Triax/HDTV Fibre Guide", url: "https://www.canford.co.uk/ProductResources/resources/Reference/Lemo%20and%20Fischer%20Triax%20and%20HDTV%20Fibre%20connectors%20guide%20IBC%20lr%20Connector%20Guide.pdf" },
      { label: "Triaxial cable \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/Triaxial_cable" },
    ],
  },
  {
    from: "bnc", to: "rj45", status: "not_possible", title: "BNC to RJ45 \u2014 NOT a Real SDI-over-Cat5 Path",
    use: "\u26a0\ufe0f Do not build this. A raw pin-to-pin BNC\u2013Cat5 bodge is not a functional SDI path at any useful distance.",
    wiring: [],
    notes: "75\u03a9 single-ended SDI cannot be passed cleanly down 100\u03a9 twisted pair without impedance matching and equalization. Tying pairs together at both ends defeats the cable's EMI geometry. For SDI over Cat cable use a proper active extender with balun/EQ (MuxLab, AAS, Foresight); for long distance use SDI\u2013fiber; for IP transport use SMPTE ST 2022-6 or ST 2110.",
    sources: [
      { label: "Belden \u2014 Key to Video Cable Performance", url: "https://www.belden.com/blog/key-to-video-cable-performance" },
      { label: "SMPTE ST 2110", url: "https://www.smpte.org/standards/st2110" },
    ],
  },
  // Triax
  {
    from: "triax", to: "bnc", status: "partial", title: "Triax to BNC \u2014 Receive Side of Triax-as-Coax",
    use: "Receive end when using broadcast triax cable as a coax path for SDI. Center + outer shield only.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Center to BNC center (Signal)" },
      { fromPin: 3, toPin: 2, desc: "Outer shield to BNC shell (Ground)" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "Triax inner shield \u2014 unused" },
    ],
    notes: "Only works with 75\u03a9 broadcast triax (Belden 9232/1857A, Canare LV-77S, Clark Wire TV series). 50\u03a9/90\u03a9 instrumentation triax exists and will not pass SDI cleanly. Not for camera control systems.",
    sources: [
      { label: "Canford LEMO/Triax/HDTV Fibre Guide", url: "https://www.canford.co.uk/ProductResources/resources/Reference/Lemo%20and%20Fischer%20Triax%20and%20HDTV%20Fibre%20connectors%20guide%20IBC%20lr%20Connector%20Guide.pdf" },
    ],
  },
  // DE-9 combos
  {
    from: "triax", to: "triax", status: "standard", title: "Triax Extension Cable",
    use: "Camera control / return video extension. All three conductors straight through. Use 75\u03a9 broadcast triax (Belden 9232/1857A, Canare LV-77S).",
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
  {
    from: "de9", to: "de9", status: "standard", title: "DE-9 Straight-Through (DCE to DTE)",
    use: "Standard serial extension cable \u2014 all 9 pins pass through unchanged.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Pin 1 to Pin 1" },
      { fromPin: 2, toPin: 2, desc: "Pin 2 to Pin 2" },
      { fromPin: 3, toPin: 3, desc: "Pin 3 to Pin 3" },
      { fromPin: 4, toPin: 4, desc: "Pin 4 to Pin 4" },
      { fromPin: 5, toPin: 5, desc: "Pin 5 to Pin 5" },
      { fromPin: 6, toPin: 6, desc: "Pin 6 to Pin 6" },
      { fromPin: 7, toPin: 7, desc: "Pin 7 to Pin 7" },
      { fromPin: 8, toPin: 8, desc: "Pin 8 to Pin 8" },
      { fromPin: 9, toPin: 9, desc: "Pin 9 to Pin 9" },
    ],
    sources: [
      { label: "RS-232 \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/RS-232" },
      { label: "TI SNLA039 \u2014 Popular Connector Pin Assignments", url: "https://www.ti.com/lit/an/snla039/snla039.pdf" },
    ],
  },
  {
    from: "de9", to: "de9", status: "standard", title: "DE-9 Null Modem (Full Handshake)",
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
    from: "de9", to: "de9", status: "standard", title: "DE-9 Null Modem (3-Wire, Scoreboard/Timing)",
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
    notes: "If the PC refuses to open the port, loop DTR\u2194DSR (pins 4\u21946) and RTS\u2194CTS (pins 7\u21948) LOCALLY inside each shell to fake handshake (Wikipedia calls this 'loopback handshaking'), or use the full-handshake variant instead.",
    sources: [
      { label: "Wikipedia Null Modem \u2014 3-wire / Loopback Handshaking variant", url: "https://en.wikipedia.org/wiki/Null_modem" },
      { label: "RS-232 Null Modem Wiring \u2014 Lammert Bies", url: "https://www.lammertbies.nl/comm/info/rs-232-null-modem" },
      { label: "Daktronics Loopback Test (application context)", url: "https://www.daktronics.com/en-us/support/kb/DD2127080" },
      { label: "Connect serial data from Daktronics \u2014 NewBlue (application context)", url: "https://newbluefx.zendesk.com/hc/en-us/articles/15498307081243-Connect-serial-data-from-Daktronics-All-Sport-5000" },
    ],
  },
  // DB25 combos
  {
    from: "de9", to: "db25", status: "standard", title: "DE-9 to DB25 \u2014 Serial Adapter (EIA-574 to EIA-232)",
    use: "Adapting between DE-9 (EIA-574) and DB25 (EIA-232) serial ports. Common on older timing equipment and legacy modems.",
    wiring: [
      { fromPin: 1, toPin: 8, desc: "DE-9 pin 1 to DB25 pin 8 (DCD)" },
      { fromPin: 2, toPin: 3, desc: "DE-9 pin 2 (RxD) to DB25 pin 3 (RxD)" },
      { fromPin: 3, toPin: 2, desc: "DE-9 pin 3 (TxD) to DB25 pin 2 (TxD)" },
      { fromPin: 4, toPin: 20, desc: "DE-9 pin 4 (DTR) to DB25 pin 20 (DTR)" },
      { fromPin: 5, toPin: 7, desc: "DE-9 pin 5 (Ground) to DB25 pin 7 (Ground)" },
      { fromPin: 6, toPin: 6, desc: "DE-9 pin 6 (DSR) to DB25 pin 6 (DSR)" },
      { fromPin: 7, toPin: 4, desc: "DE-9 pin 7 (RTS) to DB25 pin 4 (RTS)" },
      { fromPin: 8, toPin: 5, desc: "DE-9 pin 8 (CTS) to DB25 pin 5 (CTS)" },
      { fromPin: 9, toPin: 22, desc: "DE-9 pin 9 to DB25 pin 22 (RI)" },
    ],
    sources: [
      { label: "TI SNLA039 \u2014 Popular Connector Pin Assignments", url: "https://www.ti.com/lit/an/snla039/snla039.pdf" },
      { label: "RS-232 \u2014 Wikipedia", url: "https://en.wikipedia.org/wiki/RS-232" },
    ],
  },
  {
    from: "db25", to: "db25", status: "standard", title: "DB25 Straight-Through",
    use: "Audio snake extension (Tascam/AES59 analog or Yamaha AES digital) or serial cable. All 25 pins pass through unchanged.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Pin 1 to Pin 1" },
      { fromPin: 2, toPin: 2, desc: "Pin 2 to Pin 2" },
      { fromPin: 3, toPin: 3, desc: "Pin 3 to Pin 3" },
      { fromPin: 4, toPin: 4, desc: "Pin 4 to Pin 4" },
      { fromPin: 5, toPin: 5, desc: "Pin 5 to Pin 5" },
      { fromPin: 6, toPin: 6, desc: "Pin 6 to Pin 6" },
      { fromPin: 7, toPin: 7, desc: "Pin 7 to Pin 7" },
      { fromPin: 8, toPin: 8, desc: "Pin 8 to Pin 8" },
      { fromPin: 9, toPin: 9, desc: "Pin 9 to Pin 9" },
      { fromPin: 10, toPin: 10, desc: "Pin 10 to Pin 10" },
      { fromPin: 11, toPin: 11, desc: "Pin 11 to Pin 11" },
      { fromPin: 12, toPin: 12, desc: "Pin 12 to Pin 12" },
      { fromPin: 13, toPin: 13, desc: "Pin 13 to Pin 13" },
      { fromPin: 14, toPin: 14, desc: "Pin 14 to Pin 14" },
      { fromPin: 15, toPin: 15, desc: "Pin 15 to Pin 15" },
      { fromPin: 16, toPin: 16, desc: "Pin 16 to Pin 16" },
      { fromPin: 17, toPin: 17, desc: "Pin 17 to Pin 17" },
      { fromPin: 18, toPin: 18, desc: "Pin 18 to Pin 18" },
      { fromPin: 19, toPin: 19, desc: "Pin 19 to Pin 19" },
      { fromPin: 20, toPin: 20, desc: "Pin 20 to Pin 20" },
      { fromPin: 21, toPin: 21, desc: "Pin 21 to Pin 21" },
      { fromPin: 22, toPin: 22, desc: "Pin 22 to Pin 22" },
      { fromPin: 23, toPin: 23, desc: "Pin 23 to Pin 23" },
      { fromPin: 24, toPin: 24, desc: "Pin 24 to Pin 24" },
      { fromPin: 25, toPin: 25, desc: "Pin 25 to Pin 25" },
    ],
    sources: [
      { label: "TASCAM DB-25 Pinout (AES59)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
    ],
  },
  // XLR4 combos
  {
    from: "db25", to: "xlr3", status: "standard", title: "DB25 to XLR3 \u2014 Tascam/AES59 Audio Breakout",
    use: "Receiving end of a Tascam/AES59 8-channel DB25 snake as balanced XLR3 outputs. Channels run right-to-left on the DB25 \u2014 Ch1 is at the far end (pins 24/12/25).",
    wiring: [
      { fromPin: 24, toPin: 2, desc: "DB25 pin 24 (Ch1 Hot) to XLR Hot +" },
      { fromPin: 12, toPin: 3, desc: "DB25 pin 12 (Ch1 Cold) to XLR Cold \u2212" },
      { fromPin: 25, toPin: 1, desc: "DB25 pin 25 (Ch1 Gnd) to XLR Ground" },
    ],
    multiChannel: {
      max: 8,
      multiSide: "from",
      channelLabels: ["Ch1 \u2014 pins 24/12/25", "Ch2 \u2014 pins 10/23/11", "Ch3 \u2014 pins 21/9/22", "Ch4 \u2014 pins 7/20/8", "Ch5 \u2014 pins 18/6/19", "Ch6 \u2014 pins 4/17/5", "Ch7 \u2014 pins 15/3/16", "Ch8 \u2014 pins 1/14/2"],
      perChannel: [
        {
          wiring: [
            { fromPin: 24, toPin: 2, desc: "DB25 pin 24 (Ch1 Hot) to XLR Hot +" },
            { fromPin: 12, toPin: 3, desc: "DB25 pin 12 (Ch1 Cold) to XLR Cold \u2212" },
            { fromPin: 25, toPin: 1, desc: "DB25 pin 25 (Ch1 Gnd) to XLR Ground" },
          ],
        },
        {
          wiring: [
            { fromPin: 10, toPin: 2, desc: "DB25 pin 10 (Ch2 Hot) to XLR Hot +" },
            { fromPin: 23, toPin: 3, desc: "DB25 pin 23 (Ch2 Cold) to XLR Cold \u2212" },
            { fromPin: 11, toPin: 1, desc: "DB25 pin 11 (Ch2 Gnd) to XLR Ground" },
          ],
        },
        {
          wiring: [
            { fromPin: 21, toPin: 2, desc: "DB25 pin 21 (Ch3 Hot) to XLR Hot +" },
            { fromPin: 9, toPin: 3, desc: "DB25 pin 9 (Ch3 Cold) to XLR Cold \u2212" },
            { fromPin: 22, toPin: 1, desc: "DB25 pin 22 (Ch3 Gnd) to XLR Ground" },
          ],
        },
        {
          wiring: [
            { fromPin: 7, toPin: 2, desc: "DB25 pin 7 (Ch4 Hot) to XLR Hot +" },
            { fromPin: 20, toPin: 3, desc: "DB25 pin 20 (Ch4 Cold) to XLR Cold \u2212" },
            { fromPin: 8, toPin: 1, desc: "DB25 pin 8 (Ch4 Gnd) to XLR Ground" },
          ],
        },
        {
          wiring: [
            { fromPin: 18, toPin: 2, desc: "DB25 pin 18 (Ch5 Hot) to XLR Hot +" },
            { fromPin: 6, toPin: 3, desc: "DB25 pin 6 (Ch5 Cold) to XLR Cold \u2212" },
            { fromPin: 19, toPin: 1, desc: "DB25 pin 19 (Ch5 Gnd) to XLR Ground" },
          ],
        },
        {
          wiring: [
            { fromPin: 4, toPin: 2, desc: "DB25 pin 4 (Ch6 Hot) to XLR Hot +" },
            { fromPin: 17, toPin: 3, desc: "DB25 pin 17 (Ch6 Cold) to XLR Cold \u2212" },
            { fromPin: 5, toPin: 1, desc: "DB25 pin 5 (Ch6 Gnd) to XLR Ground" },
          ],
        },
        {
          wiring: [
            { fromPin: 15, toPin: 2, desc: "DB25 pin 15 (Ch7 Hot) to XLR Hot +" },
            { fromPin: 3, toPin: 3, desc: "DB25 pin 3 (Ch7 Cold) to XLR Cold \u2212" },
            { fromPin: 16, toPin: 1, desc: "DB25 pin 16 (Ch7 Gnd) to XLR Ground" },
          ],
        },
        {
          wiring: [
            { fromPin: 1, toPin: 2, desc: "DB25 pin 1 (Ch8 Hot) to XLR Hot +" },
            { fromPin: 14, toPin: 3, desc: "DB25 pin 14 (Ch8 Cold) to XLR Cold \u2212" },
            { fromPin: 2, toPin: 1, desc: "DB25 pin 2 (Ch8 Gnd) to XLR Ground" },
          ],
        },
      ],
    },
    deadEnds: [
      { connector: "from", pin: 13, desc: "DB25 pin 13 \u2014 No Connect (only unused pin)" },
    ],
    notes: "AES59-2012 / Tascam DA-88 standard. Yamaha DB25 (AES3 digital) is NOT compatible \u2014 verify which standard the snake follows. Pair with XLR3\u2192DB25 at the source.",
    sources: [
      { label: "TASCAM DB-25 Pinout Standard (official)", url: "https://www.tascam.eu/en/docs/DB-25_Pinout.pdf" },
      { label: "Aviom DB25 Pinout Information", url: "https://www.aviom.com/library/Technical-Resources/75_DB25-Pinout-Information.pdf" },
      { label: "AES59-2012 Standard", url: "https://www.aes.org/publications/standards/search.cfm?docID=92" },
    ],
  },
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
      { fromPin: 3, toPin: 3, desc: "Earphone Return (pin 3) to Sleeve" },
      { fromPin: 4, toPin: 1, desc: "Earphone Signal (pin 4) to Tip" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "XLR4 pin 1 (Mic Ground) \u2014 unused, no mic circuit on TRS output" },
      { connector: "from", pin: 2, desc: "XLR4 pin 2 (Mic Signal) \u2014 unused, output-only" },
      { connector: "to", pin: 2, desc: "TRS Ring \u2014 unused, output is mono" },
    ],
    notes: "Sleeve uses XLR4 pin 3 (Earphone Return) per Clear-Com V-Series spec \u2014 that's the dedicated return for the headphone amplifier. Pin 1 (Mic Ground) is left floating since there's no mic circuit on the TRS output. Mono output only. DC hazard: Clear-Com RS-700-series packs put ~15 V DC on headset pin 4 (Spkr+/DC+) relative to pin 1 \u2014 and pin 3 may sit at the same potential as pin 1 inside the pack. Meter pin 4\u2192pin 3 with the pack powered before connecting this to any DC-coupled line input, wedge or recorder, and use a DC-blocking capacitor or an isolation transformer (passive DI) in the path. Level: the pack output is a headphone amp (~8 V p-p) \u2014 pad into a line input. Ring is left floating; into a balanced TRS input tie Ring to Sleeve at the destination (Rane 151 Fig. 5e). The female XLR4 also fits any male XLR4 12 V power INPUT panel on cameras/monitors \u2014 only plug this into a headset jack.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Clear-Com RS-701 Quick Reference \u2014 headset connector: 1 Mic\u2212/DC\u2212, 2 Mic+, 3 Spkr\u2212, 4 Spkr+/DC+ (15 V nom, 20 mA); DIP 1 Dynamic/Electret", url: "https://www.manualsdir.com/manuals/332633/clear-com-rs-701.html" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input)", url: "https://www.ranecommercial.com/legacy/note151.html" },
      { label: "XLR connector \u2014 Wikipedia (four-pin DC power: pin 1 ground, pin 4 +12 V)", url: "https://en.wikipedia.org/wiki/XLR_connector" },
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
    deadEnds: [
      { connector: "to", pin: 5, desc: "RJ45 pins 5,6,7,8 \u2014 unused" },
    ],
    notes: "Mic and earphone signals are unbalanced over Cat5. Keep runs under 100 ft for reliable mic level. XLR4 is not natively part of StudioHub+ \u2014 this wiring extends the StudioHub+ XLR3 convention: mic-ground on Blue (pair 3), mic-signal+ear-return on the Wht/Org pair, ear-signal on pair 2's Wht/Grn. Same caveat as #15: pair 1 ends up sharing mic-signal with ear-return rather than mic-signal with mic-ground, so common-mode rejection isn't ideal \u2014 use shielded Cat5 for any longer run. PinRef convention only \u2014 no manufacturer publishes a headset-over-RJ45 pinout; both ends must be built from these two builds. The mic DC bias on pin 2 rides along on pair 1. Never plug this into an Ethernet switch, a PoE port (48 V on pins 4/5 and 7/8) or a powered StudioHub+ panel (\u00b115 V on 7/8).",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide (XLR3 convention extended to XLR4)", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
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
    deadEnds: [
      { connector: "to", pin: 5, desc: "XLR5 pin 5 (Right Earphone) \u2014 XLR4 is mono, right channel not present" },
    ],
    notes: "XLR4 headsets are mono \u2014 right earphone not present. Both mic and earphone pass through correctly. Leave XLR5 pin 5 floating: Clear-Com warns that bridging pins 4 and 5 shorts two amplifier outputs and distorts the whole PL channel \u2014 set the panel/pack to mono instead if you need both channels in one ear. This is the same cable as XLR5 \u2192 XLR4 seen from the headset end (female XLR4 on the headset, female XLR5 on the panel, so the cable is male to male). Mirror check: both ends are male, but both connectors are drawn as female faces \u2014 the insert you solder is the mirror image.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
      { label: "RTS BP-325 User Manual \u2014 Specifications (headset, line and program connector pinouts)", url: "https://products.rtsintercoms.com/binary/F01U382482.pdf" },
    ],
  },
  // ─── SPEAKON BUILDS ────────────────────────────────────────────────────────
  {
    from: "xlr4", to: "xlr3", status: "partial", title: "XLR4 to XLR3 \u2014 Headset Mic to Balanced Input",
    use: "Route the mic signal from an XLR4 intercom headset to a balanced XLR3 mixer or recorder input.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Mic Ground (pin 1) to Ground" },
      { fromPin: 2, toPin: 2, desc: "Mic Signal (pin 2) to Hot +" },
      { fromPin: 1, toPin: 3, desc: "Mic Ground also tied to XLR3 pin 3 (Cold) \u2014 unbalanced termination at destination per Rane Note 151 Fig 5e" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "XLR4 pin 3 (Earphone Return) \u2014 unused" },
      { connector: "from", pin: 4, desc: "XLR4 pin 4 (Earphone Signal) \u2014 unused, mic-only output" },
    ],
    notes: "XLR4 mic is unbalanced. Per Rane Note 151 Figure 5 (column 2, row e \u2014 Unbalanced Output \u2192 Balanced Input, off-the-shelf-cable wiring), tie the destination XLR3 pin 3 (Cold) to pin 1 (Ground) at the XLR3 connector. This gives the balanced input's diff-amp a proper ground reference. Earphone signal is not tapped here \u2014 mic-only. Works with DYNAMIC headset mics; electret headset mics need the DC bias a beltpack puts on pin 2 and will be silent into a mixer. Never turn on 48 V phantom into this cable \u2014 pin 3 is grounded here and the capsule is not built for it. Genders: a Clear-Com headset has a female XLR4 and a mixer mic input is a female XLR3, so this adapter is MALE XLR4 to MALE XLR3; for a Telex PH-88R (male XLR4) the XLR4 end must be female.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Figure 5e: Unbalanced\u2192Balanced)", url: "https://www.ranecommercial.com/legacy/note151.html" },
    ],
  },
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
    wiring: [
      { fromPin: 1, toPin: 2, desc: "NL4 1+ to XLR3 pin 2 (+ Hot)" },
      { fromPin: 2, toPin: 1, desc: "NL4 1\u2212 to XLR3 pin 1 (Speaker Return)" },
    ],
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
    deadEnds: [
      { connector: "from", pin: 3, desc: "NL4 2+ \u2014 unused (add 2nd XLR3 for Ch2)" },
      { connector: "from", pin: 4, desc: "NL4 2\u2212 \u2014 unused (add 2nd XLR3 for Ch2)" },
      { connector: "to", pin: 3, desc: "XLR3 pin 3 \u2014 No Connect (speaker signal is 2-wire, no cold/return)" },
    ],
    notes: "\u26a0\ufe0f PASSIVE SPEAKER USE ONLY. Speaker-level signal is tens of volts at high current \u2014 NEVER plug this into a mic input, line input, or powered speaker's input jack. Will destroy the input stage. This follows Neutrik's factory NA4FC-M / NA4FX-F adapter wiring: only NL4 pins 1+ and 1\u2212 are active (Neutrik FAQ confirmed); XLR pin 3 is NC. The specific NL4\u2192XLR pin mapping (1+\u2192XLR2 hot, 1\u2212\u2192XLR1 ground) is not explicitly published in any Neutrik datasheet I could find \u2014 it follows the universal XLR convention of pin 1 = ground/return. If you have an NA4FC-M in hand, a continuity check confirms the exact mapping.",
    sources: [
      { label: "Neutrik Speakon Wiring Suggestion (official) \u2014 confirms 4-pin layout", url: "https://www.neutrik.com/media/8027/download/speakon-wiring-suggestion.pdf" },
      { label: "Neutrik NA4FC-M (factory adapter) \u2014 FAQ: only NL4 1+/1\u2212 active", url: "https://www.markertek.com/product/na4fc-m/neutrik-na4fc-m-speakon-to-3-pin-xlr-male-adapter" },
    ],
  },
  // ─── TS BUILDS ──────────────────────────────────────────────────────────────
  {
    from: "speakon", to: "trs", status: "field_hack", title: "Speakon NL4 to 1/4\" TS \u2014 Passive Speaker Only",
    use: "Passive speaker cable adapter \u2014 amp Speakon output to a passive speaker with 1/4\" jack input (older PA cabinets and guitar-style speakers). NOT for powered monitors.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "NL4 1+ to Tip \u2014 Speaker +" },
      { fromPin: 2, toPin: 3, desc: "NL4 1\u2212 to Sleeve \u2014 Speaker Return" },
    ],
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
  {
    from: "ts", to: "ts", status: "standard", title: "TS Straight-Through Patch Cable",
    use: "Unbalanced audio patch cable or instrument (guitar) cable",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 2, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
    notes: "1/4\" TS is also the SPEAKER connector on guitar/bass heads and cabinets. Never use an instrument/patch cable between a head and a cab \u2014 speaker current overheats it and its shield is not a speaker conductor; use a speaker cable.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "ts", to: "xlr3", status: "standard", title: "TS to XLR3 \u2014 Unbalanced Audio",
    use: "Guitar/keyboard to mixer XLR input. Use a proper DI box for long runs or HIGH-impedance passive instrument pickups.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Tip to Hot (+) \u2014 Signal" },
      { fromPin: 2, toPin: 1, desc: "Sleeve to Ground" },
      { fromPin: 2, toPin: 3, desc: "Sleeve also tied to XLR3 pin 3 (Cold) \u2014 unbalanced termination at destination per Rane Note 151 Fig 5e" },
    ],
    notes: "Per Rane Note 151 Figure 5 (column 2, row e \u2014 Unbalanced Output \u2192 Balanced Input, off-the-shelf-cable wiring), tie destination XLR3 pin 3 (Cold) to pin 1 (Ground) at the XLR3 connector by jumpering both to the TS Sleeve. This gives the balanced input's diff-amp a proper ground reference. For long runs or high-impedance passive pickups, a DI box is still preferred over a bare adapter to avoid ground loops. Turn 48 V phantom OFF on that input: with pin 3 grounded, phantom pushes DC through pin 2 into the instrument or keyboard output. The male XLR3 end that fits a Clear-Com / RTS party-line jack will meet +30 V DC on pin 2 \u2014 never plug this into an intercom LINE / loop-through connector.",
    sources: [
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Figure 5e: Unbalanced\u2192Balanced)", url: "https://www.ranecommercial.com/legacy/note151.html" },
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
    deadEnds: [
      { connector: "to", pin: 3, desc: "RJ45 pins 3\u20138 \u2014 unused (pins 7/8 reserved for DC on powered StudioHub+ panels)" },
    ],
    notes: "StudioHub+ layout: signal on pin 1, ground on pin 2 (same twisted pair) preserves common-mode rejection even though the signal itself is unbalanced. Putting ground on pin 4 (different pair) breaks the twist and picks up more noise.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide (official)", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },
  // ─── 3.5mm TRS BUILDS ──────────────────────────────────────────────────────
  {
    from: "ts", to: "mini_trs", status: "standard", title: "TS to 3.5mm \u2014 1/4\" Mono Out to a 3.5mm Stereo Input (Left Only)",
    use: "Adapting a 1/4\" mono OUTPUT to a 3.5mm stereo LINE/AUX INPUT (recorder, camera, IEM transmitter). Not for a phone or laptop headset jack \u2014 those are outputs.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Signal" },
      { fromPin: 2, toPin: 3, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
    deadEnds: [
      { connector: "to", pin: 2, desc: "3.5mm Ring \u2014 leave floating (do not tie to Tip)" },
    ],
    notes: "\u26a0\ufe0f Leave Ring floating. Only the Left channel will play into a stereo source \u2014 this is safe. Do NOT hard-tie Ring to Tip \u2014 if this adapter is ever plugged into a stereo source, it shorts the right-channel amplifier output to the left output, which can damage op-amp stages. For dual-ear playback from a true mono source, use a proper Y-split with series summing resistors (Rolls SUM, Hosa stereo breakout). Commodity 1/4\"-to-3.5 mm adapters strap Tip and Ring so a mono source feeds both channels; that is fine into two INPUTS (two high-impedance loads on one output). PinRef leaves Ring open so this same adapter can never short two headphone-amp OUTPUTS together if it is reversed and plugged into a stereo source. Pick one behaviour and label the adapter.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Rane Note 109 \u2014 Why Not Wye? (never tie two outputs together)", url: "https://www.ranecommercial.com/legacy/note109.html" },
      { label: "Android AOSP 3.5mm Headset Jack Spec (CTIA LRGM; Tip/Ring are headphone OUTPUTS, mic on Sleeve)", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
    ],
  },
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
    from: "mini_trs", to: "xlr3", status: "partial", title: "3.5mm TRS to XLR3 \u2014 Phone / IFB Receiver to Balanced Input (Left Channel)",
    use: "Phone, laptop or IFB receiver headphone output into a mixer or recorder\u2019s balanced XLR3 input. Takes the LEFT channel; Right is dropped.",
    wiring: [
      { fromPin: 1, toPin: 2, desc: "Tip (Left) to Hot (+)" },
      { fromPin: 3, toPin: 1, desc: "Sleeve (Ground) to Ground (pin 1)" },
      { fromPin: 3, toPin: 3, desc: "Sleeve (Ground) ALSO to Cold (pin 3) \u2014 unbalanced source into a balanced input: tie cold to ground at the XLR3 (Rane Note 151 Fig. 5e)" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "Ring (Right) \u2014 leave floating. Do NOT tie it to Tip (that shorts the two headphone-amp outputs together)" },
    ],
    notes: "A balanced input amplifies the DIFFERENCE between pins 2 and 3. The old PinRef wiring put Left on pin 2 and Right on pin 3, so anything panned centre (voices, the whole IFB programme) cancelled out and only the stereo difference got through. Tying Ring to Tip is not the fix either \u2014 that shorts the device\u2019s two output amplifiers together (Rane Note 109). To get a true L+R mono, use a resistive summing cable or box (Rane Note 109 Fig. 2), or take two XLR3s via a Y-split. Only if the 3.5mm source is a BALANCED mono output (rare; check the manual) wire it T\u2192pin 2, R\u2192pin 3, S\u2192pin 1 instead. Consumer level is ~12 dB below pro line \u2014 add gain at the input. Turn 48 V phantom OFF on that channel before plugging in \u2014 pin 3 is grounded here and phantom DC would flow into the phone/receiver headphone output (same caution as the TS\u2192XLR3 and RCA\u2192XLR3 builds). Never into an intercom LINE jack (15\u201330 V DC on pin 2). On an RTS IFB-828 earset jack Tip is the interrupt feed and Ring the non-interrupt program, so \u2018Left\u2019 here means the IFB interrupt feed.",
    sources: [
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input fed unbalanced)", url: "https://www.ranecommercial.com/legacy/note151.html" },
      { label: "Rane Note 109 \u2014 Why Not Wye? (never tie two outputs together; sum L+R with resistors)", url: "https://www.ranecommercial.com/legacy/note109.html" },
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Yamaha \u2014 Phantom Power (never apply phantom to anything other than condenser microphones)", url: "https://hub.yamaha.com/proaudio/livesound/tools-of-the-trade-mixer-and-phantom-power/" },
    ],
  },
  {
    from: "mini_trs", to: "xlr5", status: "standard", title: "3.5mm TRS to XLR5 \u2014 Intercom Listen-Only",
    use: "Connect a consumer headphone to a Clear-Com beltpack for listen-only monitoring.",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Tip (Left +) to XLR5 pin 4 (Left Earphone +)" },
      { fromPin: 2, toPin: 5, desc: "Ring (Right +) to XLR5 pin 5 (Right Earphone +)" },
      { fromPin: 3, toPin: 3, desc: "Sleeve (ground) to XLR5 pin 3 (Earphone Return)" },
    ],
    deadEnds: [
      { connector: "to", pin: 1, desc: "Pin 1 (Mic Ground) \u2014 unused, no mic circuit on TRS" },
      { connector: "to", pin: 2, desc: "Pin 2 (Mic Signal) \u2014 unused, no mic on TRS" },
    ],
    notes: "Listen-only \u2014 no talkback. Sleeve uses XLR5 pin 3 (Earphone Return) per Clear-Com V-Series spec \u2014 that's the dedicated return for the ear amplifiers. Pin 1 (Mic Ground) is left floating since there's no mic circuit. For 2-way, use a TRRS headset or separate mic feed. Beltpack has female XLR5, so cable needs male XLR5. If one ear is silent on a mono pack, set the pack to MONO (RTS BP-325 jumper W5) \u2014 never bridge pins 4 and 5 in the cable, that shorts two amplifier outputs (Clear-Com). Load caution: consumer earbuds/headphones are 16\u201332 \u03a9; the RTS BP-325 headphone amplifier is specified for 50\u2013600 \u03a9 at 150 mW and up to 8 V p-p. Start with the pack volume at minimum \u2014 an in-ear driver at that level is a hearing risk \u2014 and expect the amp to run hot or clip into a 16 \u03a9 load. The 3.5 mm end is a FEMALE jack (headphones carry the plug). Some single-channel packs leave XLR5 pin 5 unconnected, so the right ear is silent regardless of the mono jumper.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
    ],
  },
  {
    from: "mini_trs", to: "xlr4", status: "partial", title: "3.5mm TRS to XLR4 \u2014 Consumer Headphones to Intercom",
    use: "Plug 3.5mm TRS headphones into an XLR4 intercom beltpack for listen-only monitoring. No mic \u2014 TRS has no mic circuit.",
    wiring: [
      { fromPin: 3, toPin: 3, desc: "Sleeve to Earphone Return (pin 3)" },
      { fromPin: 1, toPin: 4, desc: "Tip (Left +) to Earphone Signal (pin 4)" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "TRS Ring (Right +) \u2014 XLR4 earphone is mono, right channel dropped" },
      { connector: "to", pin: 1, desc: "XLR4 pin 1 (Mic Ground) \u2014 unused, no mic circuit on this listen-only feed" },
      { connector: "to", pin: 2, desc: "XLR4 pin 2 (Mic Signal) \u2014 unused, no mic on TRS" },
    ],
    notes: "Listen-only. Sleeve uses XLR4 pin 3 (Earphone Return) per Clear-Com V-Series spec \u2014 that's the dedicated return for the headphone amplifier. Pin 1 (Mic Ground) is left floating since there's no mic circuit. No talkback \u2014 for 2-way use a TRRS headset. Why pin 1 stays floating: Clear-Com RS-700-series packs put ~15 V DC between pin 4 and pin 1; leaving pin 1 open keeps that DC off the headphones. Load caution: consumer earbuds/headphones are 16\u201332 \u03a9; the RTS BP-325 headphone amplifier is specified for 50\u2013600 \u03a9 at 150 mW and up to 8 V p-p. Start with the pack volume at minimum \u2014 an in-ear driver at that level is a hearing risk \u2014 and expect the amp to run hot or clip into a 16 \u03a9 load. Both ears: field adapters often strap Tip and Ring so both ears hear the mono channel \u2014 that parallels two passive drivers (allowed) but halves the load to ~16 \u03a9, so keep the volume low if you do it. Gender: Clear-Com packs have a MALE XLR4 jack (cable needs FEMALE XLR4); RTS BP-325 packs have a FEMALE receptacle (cable needs MALE). A MALE XLR4 also fits 12 V camera-power outlets (pin 1 = 0 V, pin 4 = +12 V) \u2014 never plug a headphone adapter into XLR4 power.",
    sources: [
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "Clear-Com RS-701 Quick Reference \u2014 headset connector: 1 Mic\u2212/DC\u2212, 2 Mic+, 3 Spkr\u2212, 4 Spkr+/DC+ (15 V nom, 20 mA); DIP 1 Dynamic/Electret", url: "https://www.manualsdir.com/manuals/332633/clear-com-rs-701.html" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
      { label: "XLR connector \u2014 Wikipedia (four-pin DC power: pin 1 ground, pin 4 +12 V)", url: "https://en.wikipedia.org/wiki/XLR_connector" },
    ],
  },
  {
    from: "mini_trs", to: "rj45", status: "standard", title: "3.5mm TRS to RJ45 \u2014 Stereo Audio over Cat5 (StudioHub+)",
    use: "Stereo 3.5mm feed (IFB, aux, talkback return) over Cat5, using the StudioHub+ ADAPT-MINIUNBAL layout. One stereo feed per Cat5.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip (Left Audio) to RJ45 pin 1 (Wht/Org)" },
      { fromPin: 2, toPin: 3, desc: "Ring (Right Audio) to RJ45 pin 3 (Wht/Grn)" },
      { fromPin: 3, toPin: 4, desc: "Sleeve (Ground) to RJ45 pin 4 (Blue) \u2014 DC GND rail on StudioHub+ panels" },
    ],
    deadEnds: [
      { connector: "to", pin: 2, desc: "RJ45 pin 2 \u2014 n/c per StudioHub+ ADAPT-MINIUNBAL" },
      { connector: "to", pin: 5, desc: "RJ45 pin 5 \u2014 unused" },
      { connector: "to", pin: 6, desc: "RJ45 pin 6 \u2014 n/c per StudioHub+ ADAPT-MINIUNBAL" },
      { connector: "to", pin: 7, desc: "RJ45 pin 7 \u2014 reserved for \u221215V DC on active StudioHub+ panels" },
      { connector: "to", pin: 8, desc: "RJ45 pin 8 \u2014 reserved for +15V DC on active StudioHub+ panels" },
    ],
    notes: "StudioHub+ ADAPT-MINIUNBAL convention: Left/Tip on pin 1 (Wht/Org), Right/Ring on pin 3 (Wht/Grn), ground on pin 4 (Blue = DC GND rail). Pins 2 and 6 are n/c per the official StudioHub+ Adapter Pinout Guide; that guide shows the sleeve going to \u201cShield/G\u201d, which PinRef reads as the pin 4 DC GND rail (the only ground conductor on unshielded Cat5). Pins 7/8 carry \u00b115V DC on powered StudioHub+ panels \u2014 do not short to audio ground.",
    sources: [
      { label: "StudioHub+ Adapter Pinout Guide (official)", url: "https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf" },
    ],
  },
  // ─── 3.5mm TRRS BUILDS ─────────────────────────────────────────────────────
  {
    from: "mini_trs", to: "ts", status: "standard", title: "3.5mm to TS \u2014 Headphone to 1/4\" Mono",
    use: "Adapting a 3.5mm stereo output to a 1/4\" mono input (amp, mixer, unbalanced insert).",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Signal (Left)" },
      { fromPin: 3, toPin: 2, desc: "Sleeve to Sleeve \u2014 Ground" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "3.5mm Ring (Right) \u2014 unused, mono output only" },
    ],
    notes: "Only left channel passes to mono output. Right channel is dropped (Ring floating). Never hard-tie Ring to Tip \u2014 it can short the right-channel driver on stereo sources. For true L+R mono-summing, use a passive Y-split with series resistors.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
    ],
  },
  {
    from: "mini_trrs", to: "mini_trrs", status: "standard", title: "3.5mm TRRS Straight-Through",
    use: "Headset extension cable with mic (CTIA: Apple/Android)",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Tip \u2014 Left Audio" },
      { fromPin: 2, toPin: 2, desc: "Ring 1 to Ring 1 \u2014 Right Audio" },
      { fromPin: 3, toPin: 3, desc: "Ring 2 to Ring 2 \u2014 Ground (CTIA)" },
      { fromPin: 4, toPin: 4, desc: "Sleeve to Sleeve \u2014 Microphone (CTIA)" },
    ],
    notes: "Standard CTIA headset extension. Works with both CTIA and OMTP wiring since all 4 conductors pass straight through \u2014 the host device determines which pinout is active. An extension needs one male plug and one female jack. Keep Ring 2 and Sleeve straight at both ends \u2014 swapping them at one end silently turns a CTIA headset into OMTP (mic and ground exchanged).",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
    ],
  },
  {
    from: "mini_trrs", to: "xlr5", status: "standard", title: "3.5mm TRRS to XLR5 \u2014 Intercom 2-Way",
    use: "Connect a CTIA TRRS headset (iPhone, modern Android) to a 5-pin beltpack for 2-way intercom. Talk works only on packs that supply electret bias (not the RTS BP-325 \u2014 listen-only there).",
    wiring: [
      { fromPin: 1, toPin: 4, desc: "Tip (Left Audio) to XLR5 pin 4 (Left Earphone +)" },
      { fromPin: 2, toPin: 5, desc: "Ring 1 (Right Audio) to XLR5 pin 5 (Right Earphone +)" },
      { fromPin: 4, toPin: 2, desc: "Sleeve (Mic CTIA) to XLR5 pin 2 (Mic Signal)" },
      { fromPin: 3, toPin: 1, desc: "Ring 2 (Ground CTIA) to XLR5 pin 1 (Ground)" },
      { fromPin: 3, toPin: 3, desc: "Ring 2 (Ground CTIA) to XLR5 pin 3 (Earphone Return)" },
    ],
    notes: "CTIA (Apple/Android) wiring: mic is on Sleeve, audio ground is on Ring 2 \u2014 matches Clear-Com\u2019s own iPhone TRRS note. Tie Ring 2 to BOTH XLR5 pin 1 (ground) and pin 3 (earphone return). Beltpack has female XLR5, so cable needs male XLR5. Phone-headset mics are electrets: set the pack\u2019s mic switch to ELECTRET so pin 2 supplies bias. If the mic is dead and audio is faint/distorted even so, the headset is OMTP \u2014 swap Ring 2 and Sleeve. Mic bias: a CTIA headset mic is an electret that needs ~2 V bias. The RTS BP-325 headset jacks are DYNAMIC-MIC ONLY (no electret mode, no bias) \u2014 on a BP-325 this cable is listen-only. Packs that do supply bias: Clear-Com RS-700 series (DIP 1 OFF = Electret), V-Series (software), FreeSpeak II / Tempest (auto-detect). DC hazard: Clear-Com RS-700-series (Encore) packs carry ~15 V DC between headset pin 4 (Spkr+/DC+) and pin 1 (Mic\u2212/DC\u2212). This cable bonds pin 1 to pin 3 (both to Ring 2), so on those packs the earbud sits across that DC supply and the pack's speaker return is shorted to its DC return. Do NOT use this adapter on an RS-701/702/703 or any pack that shows DC between pins 4 and 1 or between pins 1 and 3 \u2014 meter both with the pack powered and no headset. Verified pinout for RTS BP-325-type packs where pins 1 and 3 are both \u2018common\u2019. Load caution: consumer earbuds/headphones are 16\u201332 \u03a9; the RTS BP-325 headphone amplifier is specified for 50\u2013600 \u03a9 at 150 mW and up to 8 V p-p. Start with the pack volume at minimum \u2014 an in-ear driver at that level is a hearing risk \u2014 and expect the amp to run hot or clip into a 16 \u03a9 load. The 3.5 mm end is a FEMALE TRRS jack; the XLR5 end is MALE and also fits a DMX512 female \u2014 never plug it into a lighting line (it shorts DMX Data 1+ to common).",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec (LRGM)", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "Clear-Com Solution Finder \u2014 iPhone TRRS connector (T=L, R1=R, R2=common, S=mic+)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/513770329/iPhone+TRRS+Connector" },
      { label: "Clear-Com V-Series Headset Connectors (XLR-4M / XLR-5F pin functions)", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
      { label: "Clear-Com RS-701 Quick Reference \u2014 headset connector: 1 Mic\u2212/DC\u2212, 2 Mic+, 3 Spkr\u2212, 4 Spkr+/DC+ (15 V nom, 20 mA); DIP 1 Dynamic/Electret", url: "https://www.manualsdir.com/manuals/332633/clear-com-rs-701.html" },
      { label: "DMX512 \u2014 Wikipedia (XLR-5: pin 4 Data 2\u2212, pin 5 Data 2+)", url: "https://en.wikipedia.org/wiki/DMX512" },
    ],
  },
  {
    from: "mini_trrs", to: "xlr4", status: "standard", title: "3.5mm TRRS to XLR4 \u2014 CTIA Headset to Intercom",
    use: "Connect a CTIA TRRS headset (iPhone, modern Android) to a 4-pin intercom beltpack. 2-way on packs that supply electret bias and have no DC on the headset jack (see notes).",
    wiring: [
      { fromPin: 4, toPin: 2, desc: "Sleeve (Mic CTIA) to Mic Signal (pin 2)" },
      { fromPin: 3, toPin: 1, desc: "Ring 2 (Ground CTIA) to Mic Ground (pin 1)" },
      { fromPin: 3, toPin: 3, desc: "Ring 2 (Ground CTIA) to Earphone Return (pin 3)" },
      { fromPin: 1, toPin: 4, desc: "Tip (Left Audio) to Earphone Signal (pin 4)" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "Ring 1 (Right Audio) \u2014 XLR4 earphone is mono, right channel dropped" },
    ],
    notes: "CTIA (Apple/Android) wiring: mic is on Sleeve, audio ground is on Ring 2 \u2014 matches Clear-Com\u2019s own iPhone TRRS note. Tie Ring 2 to BOTH XLR4 pin 1 (mic ground) and pin 3 (earphone return). Phone-headset mics are electrets: set the pack\u2019s mic switch to ELECTRET so pin 2 supplies bias. If the mic is dead and audio is faint/distorted even so, the headset is OMTP \u2014 swap Ring 2 and Sleeve. Right audio (Ring 1) is dropped. Bridging Ring 1 to Tip for both ears parallels two passive drivers (allowed, unlike bridging two pack outputs) but halves the load to ~16 \u03a9 \u2014 keep volume low if you do it. Mic bias: a CTIA headset mic is an electret that needs ~2 V bias. The RTS BP-325 headset jacks are DYNAMIC-MIC ONLY (no electret mode, no bias) \u2014 on a BP-325 this cable is listen-only. Packs that do supply bias: Clear-Com RS-700 series (DIP 1 OFF = Electret), V-Series (software), FreeSpeak II / Tempest (auto-detect). DC hazard: Clear-Com RS-700-series (Encore) packs carry ~15 V DC between headset pin 4 (Spkr+/DC+) and pin 1 (Mic\u2212/DC\u2212). This cable bonds pin 1 to pin 3 (both to Ring 2), so on those packs the earbud sits across that DC supply and the pack's speaker return is shorted to its DC return. Do NOT use this adapter on an RS-701/702/703 or any pack that shows DC between pins 4 and 1 or between pins 1 and 3 \u2014 meter both with the pack powered and no headset. Verified pinout for RTS BP-325-type packs where pins 1 and 3 are both \u2018common\u2019. Gender: Clear-Com packs have a MALE XLR4 jack (cable needs FEMALE XLR4); RTS BP-325 has a FEMALE receptacle (cable needs MALE). A MALE XLR4 also fits 12 V camera-power outlets (pin 1 = 0 V, pin 4 = +12 V): that puts the battery across the left earbud \u2014 never plug this into XLR4 power. If the pack howls with the electret gain up, the shared mic/earphone return is the cause; use a transformer-isolated adapter. The 3.5 mm end is a FEMALE TRRS jack.",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec (LRGM)", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "Clear-Com V-Series Headset Connectors", url: "https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
      { label: "Clear-Com RS-701 Quick Reference \u2014 headset connector: 1 Mic\u2212/DC\u2212, 2 Mic+, 3 Spkr\u2212, 4 Spkr+/DC+ (15 V nom, 20 mA); DIP 1 Dynamic/Electret", url: "https://www.manualsdir.com/manuals/332633/clear-com-rs-701.html" },
      { label: "XLR connector \u2014 Wikipedia (four-pin DC power: pin 1 ground, pin 4 +12 V)", url: "https://en.wikipedia.org/wiki/XLR_connector" },
      { label: "Clear-Com Solution Finder \u2014 4-pin to 5-pin headset adaptor (mic input is unbalanced, pin 1 = signal ground; never short pins 4 and 5)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset" },
    ],
  },
  // ─── RCA BUILDS ─────────────────────────────────────────────────────────────
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
    deadEnds: [
      { connector: "to", pin: 4, desc: "RJ45 pins 4, 5 \u2014 unused" },
    ],
    notes: "Non-standard \u2014 document your pinout on the cable itself. This layout pairs each signal with its ground on a twisted pair (per OHIS best practice): L+Gnd on pair 1/2, R+Gnd on pair 3/6, Mic+Gnd on pair 7/8. Keep runs under 50 ft. Pair with identical wiring at the far end.",
    sources: [
      { label: "Android AOSP 3.5mm Headset Jack Spec", url: "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec" },
      { label: "OHIS \u2014 Open Headset Interconnect Standard", url: "https://www.ohis.org/" },
    ],
  },
  {
    from: "rca", to: "rca", status: "standard", title: "RCA Straight-Through",
    use: "Consumer audio, composite video, or S/PDIF digital. For composite video or S/PDIF, use true 75\u03a9 coax (Belden 1505A / 1694A) with 75\u03a9 RCA connectors \u2014 most consumer RCA cables are not spec-compliant 75\u03a9.",
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
      { fromPin: 2, toPin: 3, desc: "Shell ALSO to XLR3 pin 3 (Cold) \u2014 unbalanced source into a balanced input: tie cold to ground at the XLR3 (Rane Note 151 Fig. 5e)" },
    ],
    notes: "Consumer \u221210 dBV to pro +4 dBu is ~12 dB low \u2014 push input trim up. Keep 48 V phantom OFF on that input (pin 3 is grounded here and the consumer output is not built for DC). Passive adapter is usually fine (pro mic preamps have plenty of gain headroom). If you hit a ground loop crossing AC mains, use a transformer DI (Jensen Iso-Max, Radial ProAV) instead of a passive adapter. The male XLR3 end that fits a Clear-Com / RTS party-line jack will meet +30 V DC on pin 2 \u2014 never plug this into an intercom LINE / loop-through connector. (the RTS BP-325 LINE LOOP jack is a program input only after its internal plug is moved).",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Benchmark \u2014 Balanced vs. Unbalanced", url: "https://benchmarkmedia.com/blogs/application_notes/balanced-vs-unbalanced-analog-interfaces" },
      { label: "RTS BP-325 User Manual \u2014 Specifications p.13 (XLR-3-31 line, XLR-4-31 / XLR-5-31 headset pinouts, headphone amp 50\u2013600 \u03a9, 8 V p-p; p.7: dynamic-mic headsets only)", url: "https://www.manualslib.com/manual/3540984/Rts-Bp325.html?page=13" },
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
      { fromPin: 2, toPin: 2, desc: "Shell ALSO to Ring (Cold \u2212) \u2014 unbalanced source into a balanced input: tie cold to ground at the TRS (Rane Note 151 Fig. 5e)" },
    ],
    notes: "Ring is tied to Sleeve at the TRS end for proper unbalanced operation. ~12 dB level difference expected (consumer \u221210 dBV to pro +4 dBu); the balanced input's gain makes it up. Direction matters: this is physically identical to the TRS\u2192RCA build but with Ring tied to Sleeve. Used backwards (balanced TRS OUTPUT into an RCA input) the jumper grounds the output's cold leg \u2014 use the TRS\u2192RCA build for that direction and label this one RCA\u2192TRS.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input)", url: "https://www.ranecommercial.com/legacy/note151.html" },
    ],
  },
  // ─── POWERCON BUILDS ────────────────────────────────────────────────────────
  {
    from: "trs", to: "rca", status: "partial", title: "TRS to RCA \u2014 Balanced to Consumer",
    use: "Balanced TRS output to a consumer RCA input (amp, receiver, recording device). Requires level matching \u2014 a bare adapter will overdrive consumer inputs.",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "Tip to Center \u2014 Signal" },
      { fromPin: 3, toPin: 2, desc: "Sleeve to Shell \u2014 Ground" },
    ],
    deadEnds: [
      { connector: "from", pin: 2, desc: "TRS Ring (Cold \u2212) \u2014 leave floating (safer than grounding for transformerless outputs)" },
    ],
    notes: "\u26a0\ufe0f Pro +4 dBu to consumer \u221210 dBV is ~12 dB level mismatch. Consumer RCA inputs usually have no gain control \u2014 use an inline pad, passive DI, or transformer isolator to avoid clipping. Leave Ring floating rather than tying to Sleeve to avoid shorting an active inverting op-amp output. As with the XLR3\u2192RCA build, transformer and cross-coupled outputs want Ring tied to Sleeve (floating loses signal or 6 dB); float only for plain differential op-amp outputs.",
    sources: [
      { label: "Rane Note 110 \u2014 Sound System Interconnection", url: "https://www.ranecommercial.com/legacy/note110.html" },
      { label: "Benchmark \u2014 Balanced vs. Unbalanced", url: "https://benchmarkmedia.com/blogs/application_notes/balanced-vs-unbalanced-analog-interfaces" },
      { label: "Rane Note 151 \u2014 Grounding & Shielding (Fig. 5: float cold on active balanced outputs; tie cold to ground at a balanced input)", url: "https://www.ranecommercial.com/legacy/note151.html" },
    ],
  },
  // ─── CABLE WHOLESALE SHELL ADAPTER BUILDS ────────────────────────────────────
  // Cable Wholesale DE-9-to-RJ45/RJ12 adapter shells (Adam intercom, serial, timing).
  // tag: "shell" tells WiringDiagram to use Cable Wholesale grey shell wire colors.
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
  {
    from: "de9", to: "rj45", status: "standard", title: "Adam KP Black \u2014 Keypanel to Breakout",
    use: "Adam intercom keypanel data + matrix audio. Black shell adapter.",
    tag: "shell",
    wiring: [
      { fromPin: 1, toPin: 1, desc: "DE-9 pin 1 \u2192 RJ45 pin 1 (Wht/Org) \u2014 DATA +" },
      { fromPin: 2, toPin: 2, desc: "DE-9 pin 2 \u2192 RJ45 pin 2 (Orange) \u2014 DATA \u2212" },
      { fromPin: 8, toPin: 3, desc: "DE-9 pin 8 \u2192 RJ45 pin 3 (Wht/Grn) \u2014 FROM MTX +" },
      { fromPin: 5, toPin: 4, desc: "DE-9 pin 5 \u2192 RJ45 pin 4 (Blue) \u2014 TO MTX \u2212" },
      { fromPin: 4, toPin: 5, desc: "DE-9 pin 4 \u2192 RJ45 pin 5 (Wht/Blue) \u2014 TO MTX +" },
      { fromPin: 7, toPin: 6, desc: "DE-9 pin 7 \u2192 RJ45 pin 6 (Green) \u2014 FROM MTX \u2212" },
    ],
    deadEnds: [
      { connector: "from", pin: 3, desc: "DE-9 pin 3 \u2014 N/C" },
      { connector: "from", pin: 6, desc: "DE-9 pin 6 \u2014 N/C" },
      { connector: "from", pin: 9, desc: "DE-9 pin 9 \u2014 N/C" },
      { connector: "to", pin: 7, desc: "RJ45 pin 7 \u2014 unused" },
      { connector: "to", pin: 8, desc: "RJ45 pin 8 \u2014 unused" },
    ],
    notes: "Cable Wholesale black shell. Male DE-9. Wires cross in the middle \u2014 Yellow/Black swap, Green/Red swap. DE-9 side matches the published Telex KP98-7/KP32 matrix line connector (1 Data+, 2 Data\u2212, 4/5 station output = talk / TO MTX, 8/7 station input = listen / FROM MTX). The RJ45 pair assignment is this rig\u2019s own: the Clear-Com/ASG \u2018Adam DB9 to RJ45\u2019 drawing puts listen on the blue pair (4/5) and talk on the green pair (3/6) \u2014 the opposite of this shell \u2014 so label the shells and never mix the two conventions on one run.",
    sources: [
      { label: "Internal Build for custom use", url: null },
      { label: "Telex/RTS pinouts (plsystem.com) \u2014 KP98-7 / KP32 / KP12 matrix line connector DB-9F", url: "https://www.plsystem.com/pinout1.htm" },
      { label: "Clear-Com Solution Finder \u2014 RTS Adam DB9 to RJ45 (ASG drawing; note its RJ45 pairs differ from this shell)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/513900634/RTS+Adam+DB9+to+RJ45+Pin-Out" },
    ],
  },
  {
    from: "de9", to: "rj45", status: "standard", title: "Adam KP Yellow \u2014 CAM / IFB",
    use: "Adam intercom camera IFB adapter. Yellow shell. Matrix audio only, no data.",
    tag: "shell",
    wiring: [
      { fromPin: 8, toPin: 3, desc: "DE-9 pin 8 \u2192 RJ45 pin 3 (Wht/Grn) \u2014 FROM MTX +" },
      { fromPin: 5, toPin: 4, desc: "DE-9 pin 5 \u2192 RJ45 pin 4 (Blue) \u2014 TO MTX \u2212" },
      { fromPin: 4, toPin: 5, desc: "DE-9 pin 4 \u2192 RJ45 pin 5 (Wht/Blue) \u2014 TO MTX +" },
      { fromPin: 7, toPin: 6, desc: "DE-9 pin 7 \u2192 RJ45 pin 6 (Green) \u2014 FROM MTX \u2212" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "DE-9 pins 1, 2, 3, 6, 9 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 7, 8 \u2014 unused" },
    ],
    notes: "Cable Wholesale yellow shell. Male DE-9. Same MTX wiring as Black but without DATA+/DATA\u2212 pair. DE-9 side matches the published Telex matrix line connector (4/5 talk, 8/7 listen); RJ45 pair assignment is this rig\u2019s own and differs from the Clear-Com/ASG drawing \u2014 label the shells.",
    sources: [
      { label: "Internal Build for custom use", url: null },
      { label: "Telex/RTS pinouts (plsystem.com) \u2014 KP98-7 / KP32 / KP12 matrix line connector DB-9F", url: "https://www.plsystem.com/pinout1.htm" },
      { label: "Clear-Com Solution Finder \u2014 RTS Adam DB9 to RJ45 (ASG drawing; note its RJ45 pairs differ from this shell)", url: "https://clear-com.atlassian.net/wiki/spaces/SF/pages/513900634/RTS+Adam+DB9+to+RJ45+Pin-Out" },
    ],
  },
  {
    from: "de9", to: "rj45", status: "standard", title: "Serial Data Grey \u2014 RS-232/422",
    use: "Serial data adapter for RS-232 or RS-422 connections. Grey shell.",
    tag: "shell",
    wiring: [
      { fromPin: 8, toPin: 6, desc: "DE-9 pin 8 \u2192 RJ45 pin 6 (Green)" },
      { fromPin: 7, toPin: 5, desc: "DE-9 pin 7 \u2192 RJ45 pin 5 (Wht/Blue)" },
      { fromPin: 2, toPin: 4, desc: "DE-9 pin 2 \u2192 RJ45 pin 4 (Blue)" },
      { fromPin: 3, toPin: 3, desc: "DE-9 pin 3 \u2192 RJ45 pin 3 (Wht/Grn)" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "DE-9 pins 1, 4, 5, 6, 9 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 7, 8 \u2014 unused" },
    ],
    notes: "Cable Wholesale grey shell. Uses only 4 wires for serial data.",
    sources: [
      { label: "Internal Build for custom use", url: null },
    ],
  },
  {
    from: "de9", to: "rj45", status: "standard", title: "RS-422 Null Crossover \u2014 TSI to Kalypso",
    use: "RS-422 null/crossover adapter. TSI-1000 to Kalypso at the Kalypso end.",
    tag: "shell",
    wiring: [
      { fromPin: 8, toPin: 6, desc: "DE-9 pin 8 \u2192 RJ45 pin 6 (Green)" },
      { fromPin: 7, toPin: 5, desc: "DE-9 pin 7 \u2192 RJ45 pin 5 (Wht/Blue)" },
      { fromPin: 2, toPin: 3, desc: "DE-9 pin 2 \u2192 RJ45 pin 3 (Wht/Grn) \u2014 crossed" },
      { fromPin: 3, toPin: 4, desc: "DE-9 pin 3 \u2192 RJ45 pin 4 (Blue) \u2014 crossed" },
    ],
    deadEnds: [
      { connector: "from", pin: 1, desc: "DE-9 pins 1, 4, 5, 6, 9 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 7, 8 \u2014 unused" },
    ],
    notes: "Tx/Rx pair is swapped compared to the straight grey adapter. Pins 2\u21943 on the RJ45 side.",
    sources: [
      { label: "Internal Build for custom use", url: null },
    ],
  },
  {
    from: "de9", to: "rj45", status: "standard", title: "RS-232 Adapter \u2014 TSI to Kalypso",
    use: "RS-232 straight adapter. TSI-1000 to Kalypso at the Kalypso end.",
    tag: "shell",
    wiring: [
      { fromPin: 1, toPin: 8, desc: "DE-9 pin 1 \u2192 RJ45 pin 8 (Brown) \u2014 DCD" },
      { fromPin: 2, toPin: 4, desc: "DE-9 pin 2 \u2192 RJ45 pin 4 (Blue) \u2014 RxD" },
      { fromPin: 3, toPin: 5, desc: "DE-9 pin 3 \u2192 RJ45 pin 5 (Wht/Blue) \u2014 TxD" },
    ],
    deadEnds: [
      { connector: "from", pin: 4, desc: "DE-9 pins 4\u20139 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 3, 6, 7 \u2014 unused" },
    ],
    notes: "Only 3 wires \u2014 minimal RS-232 connection. Ground through connector shell or cable shield.",
    sources: [
      { label: "Internal Build for custom use", url: null },
    ],
  },
  {
    from: "de9", to: "rj45", status: "standard", title: "RS-232 Null Crossover \u2014 TSI to Kalypso",
    use: "RS-232 null/crossover adapter. TSI-1000 to Kalypso at the Kalypso end.",
    tag: "shell",
    wiring: [
      { fromPin: 1, toPin: 8, desc: "DE-9 pin 1 \u2192 RJ45 pin 8 (Brown) \u2014 DCD" },
      { fromPin: 2, toPin: 5, desc: "DE-9 pin 2 \u2192 RJ45 pin 5 (Wht/Blue) \u2014 crossed" },
      { fromPin: 3, toPin: 4, desc: "DE-9 pin 3 \u2192 RJ45 pin 4 (Blue) \u2014 crossed" },
    ],
    deadEnds: [
      { connector: "from", pin: 4, desc: "DE-9 pins 4\u20139 \u2014 N/C" },
      { connector: "to", pin: 1, desc: "RJ45 pins 1, 2, 3, 6, 7 \u2014 unused" },
    ],
    notes: "Tx/Rx crossed compared to straight RS-232 adapter. Pins 4\u21945 swapped on RJ45 side.",
    sources: [
      { label: "Internal Build for custom use", url: null },
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
      { label: "Internal Build for custom use", url: null },
    ],
  },
];

export default STANDARD_BUILDS;
