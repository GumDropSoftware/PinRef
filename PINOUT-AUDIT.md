# PinRef Pinout Audit

Working doc for the 1-by-1 source verification pass. Update status + `Last verified` as we go.

**Latest: Pass 2 circuit audit, 2026-11-09 — see Part B.** 7 builds had wrong wiring (4 seriously), 19 had wrong notes, 4 builds added net (83 total). Open questions for Jadon at the end of the Pass 2 section.

**Legend:** ✅ verified · ⚠ needs review · ❌ issue found · 🚩 flagged for change

Sources also merged from `data/signal-info.js` in the UI (both connector-level and signal-info sources are shown on the connector detail page).

---

## Part A — Connectors (17)

### Audio

- **XLR3** — `xlr3` · ✅ **verified 2026-04-14**
  - AES14-1992 (pin 2 hot) — https://www.aes.org/publications/standards/search.cfm?docID=36
  - Sescom XLR pin 2 hot reference — https://www.sescom.com/Portals/0/Documents/3-Pin%20XLR%20Pinouts%20and%20Pin%202%20Hot%20Wiring%20Information.pdf
  - Confirmed: Pin 1 Gnd/Shield, Pin 2 Hot (+), Pin 3 Cold (−). Female face view — Pin 1 top-right, Pin 2 top-left, Pin 3 bottom (mirror of male). Physical inspection confirmed by Jadon.
  - Last verified: 2026-04-14

- **XLR5** — `xlr5` · ✅ **verified 2026-04-14**
  - Clear-Com V-Series — https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm
  - RTS BP-325 Manual — https://products.rtsintercoms.com/binary/F01U382482.pdf
  - Telex/RTS (plsystem) — https://www.plsystem.com/pinout1.htm
  - Confirmed: Stereo intercom headset pinout — Pin 1 Mic Screen, Pin 2 Mic Hot, Pin 3 HP Return, Pin 4 L HP, Pin 5 R HP. Female face view matches Clear-Com XLR-5F diagram (Pin 5 top-left, Pin 1 top-right). Physical inspection by Jadon confirmed Pin 5 top-right on male.
  - Last verified: 2026-04-14

- **XLR4** — `xlr4` · ✅ **verified 2026-04-14**
  - Clear-Com V-Series — https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm
  - RTS BP-325 Manual — https://products.rtsintercoms.com/binary/F01U382482.pdf
  - Telex BTR-800 — https://www.plsystem.com/pinout9.htm
  - PinoutGuide XLR4 — https://pinoutguide.com/Audio-Video-Hardware/xlr4_pinout.shtml
  - Confirmed: Pin 1 Mic Gnd, Pin 2 Mic Hot, Pin 3 HP Return, Pin 4 HP Signal (mono). Male face with notch at top — pins go 1→2→3→4 counter-clockwise from upper-left. Original positions were wrong; fixed to match Clear-Com XLR-4M rotated to notch-top. Jadon confirmed physical jack matches Clear-Com.
  - Last verified: 2026-04-14

- **1/4" TRS** — `trs` · ✅ **verified 2026-04-14**
  - Rane Note 110 Figure 1a — https://www.ranecommercial.com/legacy/note110.html
  - Confirmed: T=Hot (red), R=Cold (black), S=Gnd (shield/green) — matches Rane Fig 1a TRS diagram exactly. Signal-info also covers stereo unbalanced (T=L, R=R, S=Gnd). Dropped Sweetwater as a cited source. Also fixed: sleeve rect was rendering invalid fill when wire color was a striped-object; TRSConnector now extracts `.color` from object pinColors.
  - Last verified: 2026-04-14

- **1/4" TS (Mono)** — `ts` · ✅ **verified 2026-04-14**
  - Wikipedia "Phone connector (audio)" — https://en.wikipedia.org/wiki/Phone_connector_(audio)
  - Rane Note 110 — https://www.ranecommercial.com/legacy/note110.html
  - Confirmed: T=Signal, S=Ground. 2-contact unbalanced mono per Wikipedia.
  - Last verified: 2026-04-14

- **3.5mm TRS** — `mini_trs` · ✅ **verified 2026-04-14**
  - Wikipedia "Phone connector (audio)" — https://en.wikipedia.org/wiki/Phone_connector_(audio)
  - Rane Note 110 — https://www.ranecommercial.com/legacy/note110.html
  - Confirmed: T=Signal+ (Left/Hot), R=Signal− (Right/Cold), S=Ground. 3-contact per Wikipedia. Same convention as 1/4" TRS.
  - Last verified: 2026-04-14

- **3.5mm TRRS** — `mini_trrs` · ✅ **verified 2026-04-14**
  - Android AOSP Headset Spec — https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec
  - Audio-Technica CTIA/OMTP note — https://www.audio-technica.com/en-gb/support/why-audio-technica-headsets-wont-work-correctly-with-some-older-devices
  - Wikipedia — Phone connector (audio) — https://en.wikipedia.org/wiki/Phone_connector_(audio)
  - Confirmed CTIA: T=Left, R1=Right, R2=Ground, S=Mic. Fixed wire colors so Ground pin (R2) shows green; Mic pin (S) shows blue.
  - Last verified: 2026-04-14

- **Speakon NL4** — `speakon` · ✅ **verified 2026-04-14**
  - Neutrik Speakon Wiring Suggestion (PDF) — https://www.neutrik.com/media/8027/download/speakon-wiring-suggestion.pdf
  - Confirmed: 1+/1− = Ch1, 2+/2− = Ch2 per Neutrik ("+ " = in-phase, lower numbers for lower frequencies). Fixed face layout from a 2x2 square to a **diamond**: 1+ top, 1− left, 2+ bottom, 2− right — matches physical NL4 per Jadon's reference image.
  - Last verified: 2026-04-14

### Data / Network

- **RJ45** — `rj45` · ✅ **verified 2026-04-14**
  - TIA/EIA-568-B (TrueCable explainer) — https://www.truecable.com/blogs/cable-academy/t568a-vs-t568b
  - Confirmed T568B: 1=Wht/Org, 2=Orange, 3=Wht/Grn, 4=Blue, 5=Wht/Blue, 6=Green, 7=Wht/Brn, 8=Brown. Diagram rendered as face view with clip down.
  - Last verified: 2026-04-14

- **RJ12 (6P6C)** — `rj12` · ✅ **verified 2026-04-14**
  - Registered jack — Wikipedia — https://en.wikipedia.org/wiki/Registered_jack
  - Pshine Cable RJ12 6P6C Color Order — https://www.pshinecable.com/article/how-to-connect-the-network-cables-and-what-is-their-color-order.html
  - Telex/RTS RJ12 Pinouts (plsystem.com) — https://www.plsystem.com/pinout1.htm
  - Confirmed USOC 6P6C color order (tab-down, pins 1→6): White(T3), Black(T2), Red(R1), Green(T1), Yellow(R2), Blue(R3). Pin function is manufacturer-specific (Clear-Com, RTS, Telex each wire differently) — USOC only defines the *color order*, not the signal. Added T/R pair labels to pin names.
  - Last verified: 2026-04-14

- **DE-9** — `de9` · ✅ **verified 2026-04-14**
  - D-subminiature — Wikipedia (DE-9 naming) — https://en.wikipedia.org/wiki/D-subminiature
  - Serial port pinouts — Wikipedia (DTE-side RS-232) — https://en.wikipedia.org/wiki/Serial_port
  - Renamed: key `db9` → `de9`, display `DB9` → `DE-9` across connectors.js, signal-info.js, theme.js (incl. `db9_grey` → `de9_grey`), builds.js (all 11 DE-9-originating builds), WiringDiagram.jsx, README.md. Cisco URL left as-is (external URL).
  - Pin fill: pins 1 (DCD) and 9 (RI) were blank; populated per Wikipedia Serial Port DTE pinout. All 9 pins now labeled: 1=DCD, 2=RxD, 3=TxD, 4=DTR, 5=GND, 6=DSR, 7=RTS, 8=CTS, 9=RI.
  - Last verified: 2026-04-14

- **DB25** — `db25` · ✅ **verified 2026-04-14** (3 variants)
  - Implemented variant system: top-level `conn.variants[]` array; top-level `pins`/`sources` mirror the default variant for build-page back-compat. Selector added to PinoutsTab.
  - **Variant 1 \u2014 Tascam Analog (AES59)** \u2014 default \u2705
    - TASCAM DB-25 Pinout Standard \u2014 https://www.tascam.eu/en/docs/DB-25_Pinout.pdf
    - AES59-2012 \u2014 https://www.aes.org/publications/standards/search.cfm?docID=92
    - Hosa "DB-25 Enigma" \u2014 https://hosatech.com/press-release/db-25-enigma/
    - Aviom DB25 Pinout Reference \u2014 https://www.aviom.com/library/Technical-Resources/75_DB25-Pinout-Information.pdf
    - Confirmed: 8 balanced analog channels. Ch 1 = 24H/12C/25G, Ch 2 = 10H/23C/11G, Ch 3 = 21H/9C/22G, Ch 4 = 7H/20C/8G, Ch 5 = 18H/6C/19G, Ch 6 = 4H/17C/5G, Ch 7 = 15H/3C/16G, Ch 8 = 1H/14C/2G. Pin 13 = NC. Visually verified against Tascam PDF and Aviom PDF.
  - **Variant 2 \u2014 Tascam AES/EBU** \u2705
    - TASCAM DB-25 Pinout Standard \u2014 https://www.tascam.eu/en/docs/DB-25_Pinout.pdf
    - Aviom DB25 Pinout Reference \u2014 https://www.aviom.com/library/Technical-Resources/75_DB25-Pinout-Information.pdf
    - Confirmed: Same physical layout as Tascam analog, re-labeled. Analog Ch 1\u20134 = AES IN 1\u20134, analog Ch 5\u20138 = AES OUT 1\u20134. Each AES pair carries stereo (L+R). Pin 13 = NC. DB25\u2194DB25 AES/EBU cables require a crossover (pins 12/24/25 \u2194 6/18/19) because OUT must feed IN. Visually verified against Aviom PDF "Tascam/Digidesign Compatible" column.
  - **Variant 3 \u2014 Yamaha AES/EBU** \u2705
    - Aviom DB25 Pinout Reference \u2014 https://www.aviom.com/library/Technical-Resources/75_DB25-Pinout-Information.pdf
    - Yamaha AES/EBU YGDAI Card FAQ \u2014 https://faq.yamaha.com/usa/s/article/U0001834
    - Confirmed: 4 AES3 input pairs + 4 AES3 output pairs. All Hots on pins 1\u20138 (pins 1\u20134 = IN 1\u20134 Hot; pins 5\u20138 = OUT 1\u20134 Hot). All Colds on pins 14\u201321 (14\u201317 = IN 1\u20134 Cold; 18\u201321 = OUT 1\u20134 Cold). Grounds clustered at 10, 12, 13, 22\u201325. Pins 9 and 11 = NC. Used by Yamaha YGDAI cards (MY8-AE series), Apogee, and Mackie \u2014 incompatible with Tascam/Digidesign AES/EBU. Visually verified against Aviom PDF "Yamaha Compatible" column.
  - Last verified: 2026-04-14

### Video

- **BNC** — `bnc` · ✅ **verified 2026-04-14**
  - BNC connector — Wikipedia — https://en.wikipedia.org/wiki/BNC_connector
  - SMPTE ST 292 (HD-SDI over 75Ω BNC) — https://pub.smpte.org/doc/292-1/
  - Belden 12G-SDI Cable Portfolio — https://www.belden.com/products/cable/broadcast-cable/sdi-video-coax-cable/12g-sdi (via signal-info)
  - Confirmed: 2-conductor coax. Center = signal, Shell = ground/shield (bayonet lock). Broadcast uses 75Ω; 50Ω BNC is physically similar but causes reflections above 10 MHz — incompatible at video frequencies. Audit scoped to impedance convention + signal-info (SDI / genlock / tri-level / LTC / composite) rather than a pin diagram, since BNC has no multi-pin layout.
  - Last verified: 2026-04-14

- **Triax** — `triax` · ✅ **verified 2026-04-14**
  - Triaxial cable — Wikipedia — https://en.wikipedia.org/wiki/Triaxial_cable
  - Canford LEMO/Triax/HDTV Fibre Connector Guide (PDF) — https://www.canford.co.uk/ProductResources/resources/Reference/Lemo%20and%20Fischer%20Triax%20and%20HDTV%20Fibre%20connectors%20guide%20IBC%20lr%20Connector%20Guide.pdf
  - Confirmed: 3-conductor layered coax. Center = modulated signal (video/data/audio multiplexed), Inner Shield = DC return, Outer Shield = DC supply + ground (120\u2013170 VDC broadcast camera feed). 75Ω broadcast \u2014 50Ω/90Ω lab variants are not SDI-compatible. Audit scoped like BNC to cable/signal convention rather than a pin diagram; added explicit DC return/supply labels.
  - Last verified: 2026-04-14

### Multi-channel

- **DT12 (FK37)** — `dt12` · ✅ **verified 2026-04-14**
  - Clark Wire DT12 Pinout — https://www.clarkwire.com/dt12-audio-multipin-pinout
  - Whirlwind DT12 Series — https://www.whirlwindusa.com/products/ac-power-dt-12-dt12-series-broadcast-multipin-connectors
  - Notes: Pin 37 = spare. Pin 22 = Ch11 Gnd. Grid + data confirmed against Clark Wire page and diagram.
  - Last verified: 2026-04-14

### Other

- **RCA** — `rca` · ✅ **verified 2026-04-14**
  - RCA connector — Wikipedia — https://en.wikipedia.org/wiki/RCA_connector
  - Rane Note 110 — https://www.ranecommercial.com/legacy/note110.html
  - Confirmed: 2-conductor coax. Center pin = signal, outer shell = ground/shield. Used for consumer unbalanced audio (−10 dBV), composite video (75Ω), and S/PDIF digital (75Ω). Consumer RCA plugs are rarely true 75Ω — keep video/S/PDIF runs short unless using proper 75Ω connectors. Center pin is longer than shell, so signal makes contact before ground (hum/buzz if units aren't common-grounded when hot-patched). Audit scoped like BNC/Triax to signal/level convention rather than a pin diagram.
  - Last verified: 2026-04-14

- **PowerCON** — `powercon` · ✅ **verified 2026-04-14**
  - Neutrik powerCON Assembly Instruction (BDA 452 PDF) — https://www.neutrik.com/media/10217/download/BDA%20452%20V4%20-%20powerCON%20-%20NAC3FCA%20+%20NAC3FCB.pdf
  - Neutrik NAC3FCA (Power IN, Blue) — https://www.neutrik.com/en/product/nac3fca
  - Neutrik NAC3FCB (Power OUT, Grey) — https://www.neutrik.com/en/product/nac3fcb
  - Confirmed: 2+PE (Line / Neutral / Protective Earth), 20A/250VAC rated, NOT hot-plug rated (standard PowerCON must be de-energized before mating/unmating — TRUE1 is the hot-plug successor). Blue NAC3FCA = Power IN; Grey NAC3FCB = Power OUT; keyed to prevent intermating. Fixed pin 3 label from "G" to "PE" (matches connector body). Added US NEC wire colors (Black/White/Green) alongside IEC (Brown/Blue/Green-Yellow).
  - Note: Neutrik lists NAC3FCA/NAC3FCB as discontinued; replacements are NAC3FXXA-W-S/L. Functional pinout is unchanged.
  - Last verified: 2026-04-14

---

## Part B — Builds

> **Read this first.** The Pass 1 table below (April–May 2026) checked that pin *labels* matched the cited sources. It did **not** check that each cable does the job its title promises. Pass 2 (below) did that circuit check. Where the two disagree, Pass 2 wins.

### Pass 2 — Circuit audit · 2026-11-09 (Fable, for Jadon via Sawyer)

Checked every build for: what the cable is for (pass-through vs real adapter), signal direction, hot/cold polarity, where ground / shield / each return lands, power on the line (phantom, party-line DC, mic bias, PoE, ±15 V StudioHub+), mono-to-both-ears, balanced↔unbalanced handling, and whether one cable carries what the title says. Connector pinouts XLR3/XLR4/XLR5/TRRS re-checked against Clear-Com, RTS and plsystem.com — no changes needed.

**Result: 79 builds in → 83 builds out. 7 builds had wrong wiring or wiring labels (4 of them would not do the job at all: #2, #17, #10, #58), 2 builds were missing and were added, 19 more had wrong or missing notes/attribution, 55 were fine.** Nothing pushed; Jadon reviews first.

Sources opened in Chrome for this pass:
- Clear-Com V-Series headset connectors (XLR-4M / XLR-5F / XLR-7M) — https://www.clearcom.com/DownloadCenter/manuals/V-Series_Iris_Online_Manual/Content/Common%20Topics/Headset%20connectors.htm
- Clear-Com Solution Finder — 4-pin to 5-pin headset adaptor (mic input unbalanced, pin 1 = signal ground; never short pins 4+5) — https://clear-com.atlassian.net/wiki/spaces/SF/pages/158841161/How+can+I+make+an+adaptor+from+a+4+pin+to+a+5+pin+headset
- Clear-Com Solution Finder — Matrix headset pin-outs (XLR-4, XLR-5, DIN-5) — https://clear-com.atlassian.net/wiki/spaces/SF/pages/158808488/
- Clear-Com Solution Finder — iPhone TRRS (T=L, R1=R, R2=common, S=mic+) — https://clear-com.atlassian.net/wiki/spaces/SF/pages/513770329/iPhone+TRRS+Connector
- Clear-Com Solution Finder — RTS Adam DB9 to RJ45 (ASG drawing) — https://clear-com.atlassian.net/wiki/spaces/SF/pages/513900634/RTS+Adam+DB9+to+RJ45+Pin-Out
- RTS BP-325 User Manual, Specifications page (mono/stereo headset, line, program connectors; W5 stereo/mono jumper) — https://products.rtsintercoms.com/binary/F01U382482.pdf
- Telex/RTS pinouts (plsystem.com): BP-325 line = 30 VDC on pin 2; KP98-7 5-pin ties 4+5 at the jack; KP-32 "tie mic − to ground to unbalance"; KP98-7/KP32/KP12 matrix DB-9F — https://www.plsystem.com/pinout1.htm
- Rane Note 151 (Fig. 5 interconnect chart; cross-coupled vs active outputs) — https://www.ranecommercial.com/legacy/note151.html
- Rane Note 110 — https://www.ranecommercial.com/legacy/note110.html
- Rane Note 109 Why Not Wye? (never tie outputs together; resistive L+R sum) — https://www.ranecommercial.com/legacy/note109.html
- StudioHub+ Adapter Pinout Guide (balanced: pin 1 +, pin 2 −, pin 1 of XLR → SHIELD; pin 4 = DC GND, pin 5 = n/c; ADAPT-RCA 1/2; ADAPT-MINIUNBAL 1/3) — https://studiohub.com/wp-content/uploads/2019/10/AAPinoutandAdapterGuide.pdf

#### Circuits that were wrong (fixed)

| # | Build | What was wrong | What changed | Source |
|---|---|---|---|---|
| 2 | xlr3 → xlr5 (was "Intercom / Audio") | One build tried to be three cables. 1-1/2-2/3-3 was sold as a mic send: it puts XLR3 cold on XLR5 pin 3 (earphone return) and feeds the earphones nothing. The 2nd "return" channel grounded the earphones on pin 1 (mic ground) and used XLR3 pins 2/3 as an unbalanced L/R pair — no source for that. | Split into **three** builds: (a) *Pass-Through* 1-1/2-2/3-3, labelled as a 3-wire run with the same adapter at both ends, not a headset adapter; (b) *Mic into Intercom Beltpack* 2→2, 1→1, **3→1** (cold tied to mic ground); (c) *Balanced Feed to Both Ears* **1→3, 2→4, 2→5**, cold floated. The unbalanced-stereo-on-XLR3 channel was dropped (question for Jadon). | Clear-Com 4-to-5 pin ("mic signal low is actually signal ground"), Clear-Com XLR-5F, RTS BP-325 specs, plsystem KP-32 unbalance note, Rane 151 |
| 17 | xlr5 → xlr3 (Intercom Breakout) | Mic channel put XLR5 pin 3 (earphone return) on XLR3 cold — mixes the earphone return into the mic circuit. Ear channel grounded on pin 1 (mic ground) instead of pin 3, and used XLR3 2/3 as L/R. | Rewritten as *Beltpack Breakout (Mic In + Ear Out)*: ch1 2→2, 1→1, 1→3 (dynamic mic unbalanced into pack); ch2 4→2, **3→1, 3→3** (ear return to ground, XLR3 cold tied at destination per Rane 151 Fig 5e); pin 5 left alone. Added *Headset Mic to Balanced Input* (2→2, 1→1, 1→3) for using a 5-pin headset mic on a mixer. | Clear-Com XLR-5F + 4-to-5 pin, RTS BP-325, Rane 151 |
| 10 | xlr3 → mini_trs (was "Balanced to Headphone") | Hot→Tip, Cold→Ring into a stereo (L/R) 3.5mm input puts L and R out of phase; a mono sum of the recording cancels. | Now *Mono Feed to a Stereo Input*: **2→Tip, 2→Ring**, 1→Sleeve, cold floats. Note covers the rare true-balanced 3.5mm input. | Rane 151, 109 |
| 58 | mini_trs → xlr3 (was "IFB / Phone Feed", "summed to mono") | Tip→2, Ring→3 into a balanced input gives L−R: everything panned centre (voice, the IFB programme) cancels. Not a sum. | Now *Phone / IFB Receiver to Balanced Input (Left)*: Tip→2, **Sleeve→1 and →3**, Ring floats; note points to a resistive summing box for true L+R and warns never to tie Ring to Tip. | Rane 151 Fig 5e, Rane 109 |
| 68 | rca → xlr3 | Cold-to-ground jumper was only a dead-end note while ts→xlr3 draws it as a wire; inconsistent and easy to miss. | Jumper is now a drawn wire (Shell→1 and Shell→3). Phantom-off warning added. | Rane 151 Fig 5e |
| 70 | rca → trs | Same as #68. | Ring→Sleeve jumper drawn as a wire. | Rane 151 Fig 5e |
| 28 | rj45 → db25 (Minimal Serial) | DB25 pin 3 labelled TxD and pin 2 RxD — backwards for EIA-232 DTE naming. Wiring itself (3→3, 6→2) is a correct built-in crossover for a DTE DB25. | Labels corrected (pin 2 = TxD, pin 3 = RxD); note explains the cross and the DCE case. | EIA-232 DTE naming (Wikipedia RS-232 / TI SNLA039 already cited) |
| new | xlr3 → xlr4 *Mic into Intercom Beltpack* | Missing counterpart: PinRef had XLR3→XLR4 for feeding an earphone and XLR4→XLR3 for a headset mic, but nothing for an ordinary XLR3 mic into a 4-pin pack. | Added: 2→2, 1→1, 3→1. | Clear-Com 4-to-5 pin, plsystem KP-32 |
| new | xlr5 → xlr3 *Headset Mic to Balanced Input* | Missing counterpart of #49 for 5-pin (RTS) headsets. | Added (see #17 row). | Clear-Com XLR-5F, RTS BP-325, Rane 151 |

#### Circuits right, notes or attribution wrong (fixed)

| # | Build | Issue | Change |
|---|---|---|---|
| 1 | xlr3 → xlr3 | Didn't mention the cable also carries the Clear-Com/RTS 2-wire party line with 30 VDC on pin 2. | Added to use + plsystem source. |
| 4, 29, 23, 31 | xlr3/trs ↔ rj45 (StudioHub+) | Notes claimed StudioHub+ puts XLR pin 1 on RJ45 pin 4. The official sheet puts pin 1 / sleeve on the **cable shield**; pin 4 is DC GND, pin 5 n/c. | Wiring kept (pins 4/5 as ground so unshielded Cat5 works) but now described as a PinRef convention that both ends must share; PoE/powered-panel warning. |
| 61 | mini_trs → rj45 | Sheet shows sleeve → "Shield/G"; PinRef reads that as pin 4. | Ambiguity stated in note. |
| 15, 30, 47, 32 | xlr5/xlr4 ↔ rj45 | Already marked non-standard; lacked power cautions. | Marked PinRef-only convention; mic DC bias rides pair 1; never plug into Ethernet/PoE or powered StudioHub+ panel. Pairing question for Jadon. |
| 13 | xlr5 → xlr5 | No note. | Pin-meaning-agnostic note; keep pins 1 and 3 separate; passes mic bias. |
| 14, 48 | xlr5 ↔ xlr4 | Wiring right; nothing warned against bridging 4+5 for a mono headset. | Clear-Com warning (shorting 4+5 distorts the PL channel); use pack MONO (BP-325 W5) instead; genders. |
| 18, 59 | xlr5 ↔ mini_trs | Same 4+5 caution missing; mono-pack behaviour. | Added. |
| 19, 64, 65 | TRRS ↔ xlr5/xlr4 | Said "if mic and earphone are swapped" for OMTP — OMTP swaps mic and ground, so the symptom is a dead mic / faint audio. No mic-bias note. | Symptom corrected; set pack to ELECTRET; Clear-Com iPhone TRRS source added. |
| 49 | xlr4 → xlr3 | No warning that electret headset mics need pack bias, and that phantom must stay off. | Added. |
| 54 | ts → xlr3 | Phantom not mentioned (pin 3 grounded → DC into the instrument). | Phantom-off warning. |
| 6 | xlr3 → xlr4 | Didn't say it feeds a headset, not a beltpack (pin 4 on a pack is an amp output). | Added. |
| 73, 74 | de9 → rj45 Adam KP Black / Yellow | "Internal" only. DE-9 side matches the published Telex KP98-7/KP32 matrix connector; RJ45 pair assignment differs from the Clear-Com/ASG Adam drawing. | Both sources added; "label the shells, never mix conventions" note. |

#### Checked and unchanged (55)

3, 5, 7, 8, 9, 11, 12, 16, 20, 21, 22, 24, 25, 26, 27, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 55, 56, 57, 60, 62, 63, 66, 67, 69, 71, 72, 75, 76, 77, 78, 79 — circuit, polarity, grounds and direction are consistent with the cited source for the stated job. Notes: #43 db25 straight-through is an *extension* only (Tascam AES/EBU device-to-device needs the crossover described on the connector). #27 Cisco console wiring re-derived from Yost + Cisco rollover: correct. #75–78 serial shells and #79 Cronus remain operator-verified internal builds with no public source.

#### UI change made alongside

`components/BuildsTab.jsx` hid every reverse-direction build whenever a forward build existed for the pair, assuming reverses are mirrors. They often are not (ts→xlr3 jumpers cold, xlr3→ts floats it; headset-mic→XLR3 vs XLR3-mic→beltpack). Now only a true mirror (same short title, same wiring read backwards) is hidden.

#### Open questions for Jadon

1. The old xlr3→xlr5 "return" channel used an XLR3 as an unbalanced stereo pair (L on 2, R on 3, ground on 1). No source supports it, so it was dropped. Do you actually build that cable? If so it can come back as an explicitly non-standard build.
2. XLR4/XLR5-over-Cat5 (#15/30/47/32): the current pairing puts mic signal with ear return on pair 1. Re-pairing so mic signal shares a pair with mic ground would be quieter, but would break any cables already built to the old map. Keep or change?
3. StudioHub+ builds (#4/23/29/31): PinRef lands XLR pin 1 on RJ45 pins 4/5; StudioHub+ itself uses the cable shield and leaves pin 5 n/c. Keep the PinRef convention (works on unshielded Cat5) or follow StudioHub+ exactly (needs shielded cable and shielded plugs)?
4. Adam KP shells (#73/74): the RJ45 pairs are the opposite of the Clear-Com/ASG "Adam DB9 to RJ45" drawing. Were they built to RTS's own RJ45 convention and tested on the matrix? If yes, nothing to change.
5. The two new "mic into beltpack" builds assume a dynamic XLR3 mic. If you plug electret/condenser mics into packs, say so and a variant can be added.

---

### Pass 1 — Label verification (April–May 2026)

One row per `from → to` entry in `builds.js` as it stood then (79). Each build was marked ✅ when both end-connectors in Part A were ✅ AND the pin labels matched the cited convention. **This pass did not check circuits — see Pass 2 above.**

### XLR3-originating (12)

| # | Build | Convention source | Status |
|---|---|---|---|
| 1 | xlr3 → xlr3 (Mic Cable Straight-Through) | AES14-1992; ETC SMPTE LTC | ✅ 2026-04-14 — notes corrected in Pass 2 |
| 2 | xlr3 → xlr5 (Intercom / Audio) | Clear-Com V-Series; Clear-Com Solution Finder | ❌ Pass 1 ✅ 2026-04-14 — **circuit wrong, fixed in Pass 2** |
| 3 | xlr3 → trs (1/4" Balanced) | Rane Note 110 Figure 1a | ✅ 2026-04-21 |
| 4 | xlr3 → rj45 (Audio over Cat5) | StudioHub+ Adapter Pinout Guide | ✅ 2026-04-21 — notes corrected in Pass 2 |
| 5 | xlr3 → db25 (Tascam/AES59 Snake) | TASCAM DB-25 Pinout Standard (official) — channels run right-to-left, Ch1=24/12/25 H/C/G | ✅ 2026-04-27 |
| 6 | xlr3 → xlr4 (Headset Earphone, partial) | Clear-Com V-Series XLR-4M; Rane Note 151 (source-side cold float) | ✅ 2026-04-27 (fixed: was tying Cold to Earphone Return; now floats per Rane 151. Ground routes to XLR4 pin 3 Earphone Return, not pin 1 Mic Ground) — notes corrected in Pass 2 |
| 7 | xlr3 → bnc (NOT compatible) | SMPTE ST 259/292 (impedance + signal-type mismatch — 110Ω balanced audio vs 75Ω video) | ✅ 2026-04-27 |
| 8 | xlr3 → triax (NOT compatible) | Wikipedia Triaxial (multiplexed camera control + video + DC, no passive adaptation possible) | ✅ 2026-04-27 |
| 9 | xlr3 → dt12 (Channel Breakout) | Clark Wire DT12 Multipin Audio Pinout (all 12 channels H/C/G match) | ✅ 2026-04-27 |
| 10 | xlr3 → mini_trs (Balanced to Headphone) | Rane Note 110 Figure 1a (convention extended to 3.5mm) | ❌ Pass 1 ✅ 2026-04-21 — **circuit wrong, fixed in Pass 2** |
| 11 | xlr3 → ts (Balanced to Unbalanced) | Rane Note 151 Figure 5 col 3 (source-side cold float for transformerless balanced outputs) | ✅ 2026-04-27 |
| 12 | xlr3 → rca (Pro to Consumer, partial) | Rane Note 151 Figure 5 col 3 (source-side cold float for transformerless balanced outputs) | ✅ 2026-05-01 |

### XLR5-originating (7)

| # | Build | Convention source | Status |
|---|---|---|---|
| 13 | xlr5 → xlr5 (Straight-Through) | Clear-Com V-Series XLR-5F headset connector | ✅ 2026-04-26 — notes corrected in Pass 2 |
| 14 | xlr5 → xlr4 (Beltpack to Headset) | Clear-Com V-Series XLR-5F + XLR-4M tables | ✅ 2026-04-26 — notes corrected in Pass 2 |
| 15 | xlr5 → rj45 (Intercom over Cat5) | StudioHub+ XLR3 convention extended to XLR5; Clear-Com V-Series for pin functions | ✅ 2026-04-26 (no native XLR5-over-Cat5 standard exists; documented as extension in build notes) — notes corrected in Pass 2 |
| 16 | xlr5 → db25 (Intercom Snake, field_hack) | Internal Build for custom use | ✅ 2026-04-27 |
| 17 | xlr5 → xlr3 (Intercom Breakout, partial) | Clear-Com V-Series for pin functions; convention is a custom field-rig (no published standard) | ❌ Pass 1 ✅ 2026-04-26 — **circuit wrong, fixed in Pass 2** |
| 18 | xlr5 → mini_trs (Intercom Earpiece) | Clear-Com V-Series XLR-5F (strict: Sleeve uses pin 3 Earphone Return) | ✅ 2026-04-26 (fixed: was using pin 1 as ground; now uses pin 3 per spec) — notes corrected in Pass 2 |
| 19 | xlr5 → mini_trrs (Intercom to Consumer) | AOSP CTIA (LRGM); Clear-Com V-Series XLR-5F | ✅ 2026-04-26 — notes corrected in Pass 2 |

### DT12-originating (2)

| # | Build | Convention source | Status |
|---|---|---|---|
| 20 | dt12 → dt12 (Straight-Through Extension) | Clark Wire DT12 Multipin Audio Pinout (37-pin straight-through, all pins 1:1) | ✅ 2026-04-27 |
| 21 | dt12 → db25 (8 Ch AES59/Tascam) | Clark Wire DT12 + Tascam DB-25 standards (cross-mapped per channel, all 24 wires verified) | ✅ 2026-04-27 |

### TRS-originating (4)

| # | Build | Convention source | Status |
|---|---|---|---|
| 22 | trs → trs (Patch Cable) | Rane Note 110 Figure 1a (both ends wired identically; T/R/S straight-through) | ✅ 2026-05-01 |
| 23 | trs → rj45 (Balanced over Cat5) | StudioHub+ Adapter Pinout Guide (Balanced TRS-1/4": Tip→Pin-1, Ring→Pin-2, Sleeve→Pin-4) | ✅ 2026-05-01 — notes corrected in Pass 2 |
| 24 | trs → xlr3 (Balanced Audio) | Rane Note 110 Figure 1a (mirror of #3; Tip=pin 2, Ring=pin 3, Sleeve=pin 1) | ✅ 2026-05-01 |
| 25 | trs → xlr4 (Monitor Feed, partial) | Clear-Com V-Series XLR-4M (strict: Sleeve uses pin 3 only) | ✅ 2026-04-27 (fixed: was bonding Sleeve to pins 1+3; now pin 3 only per spec) |
| 71 | trs → rca (Balanced to Consumer, partial) | Rane Note 151 Figure 5 col 3 (source-side Ring float for transformerless balanced outputs) | ✅ 2026-05-01 |

### RJ45-originating (7)

| # | Build | Convention source | Status |
|---|---|---|---|
| 26 | rj45 → rj45 (T568B Straight-Through) | TIA/EIA-568-B (8-pin straight-through, both ends T568B) | ✅ 2026-04-27 |
| 27 | rj45 → de9 (Cisco/Yost Console) | Yost RJ45 Serial Wiring Standard + Cisco rolled-and-adapted single-cable variant | ✅ 2026-04-27 |
| 28 | rj45 → db25 (Minimal Serial Adapter) | Yost RJ45 standard + TI SNLA039 (RS-232 DB25); 3-wire minimal RS-232 is documented practice, not a hack | ❌ Pass 1 ✅ 2026-04-27 (status changed from field_hack → standard; warning about handshake retained in notes) — **circuit wrong, fixed in Pass 2** |
| 29 | rj45 → xlr3 (Audio over Cat5) | StudioHub+ Adapter Pinout Guide (mirror of #4; Balanced XLR row) | ✅ 2026-05-01 — notes corrected in Pass 2 |
| 30 | rj45 → xlr5 (Intercom over Cat5) | StudioHub+ XLR3 convention extended to XLR5; Clear-Com V-Series for pin functions | ✅ 2026-04-27 (mirror of #15; same resolution) — notes corrected in Pass 2 |
| 31 | rj45 → trs (Balanced over Cat5) | StudioHub+ Adapter Pinout Guide (mirror of #23; Balanced TRS row) | ✅ 2026-05-01 — notes corrected in Pass 2 |
| 32 | rj45 → xlr4 (Headset over Cat5, partial) | StudioHub+ XLR3 convention extended to XLR4; Clear-Com V-Series for pin functions | ✅ 2026-04-27 (mirror of #47) — notes corrected in Pass 2 |
| 33 | rj45 → bnc (NOT SDI-over-Cat5) | Belden + SMPTE ST 2110 (Cat5 ≠ 75Ω coax; SDI requires baluns/transceivers, not passive adapters) | ✅ 2026-04-27 |

### BNC / Triax-originating (5)

| # | Build | Convention source | Status |
|---|---|---|---|
| 34 | bnc → bnc (SDI/Genlock/LTC) | Belden 12G-SDI + Canare 12G-SDI (75Ω center+shell straight-through, universal) | ✅ 2026-04-27 |
| 35 | bnc → triax (SDI on Triax, partial) | Canford LEMO/Triax guide + Wikipedia Triaxial (center+outer-shield as 75Ω coax, inner shield unused) | ✅ 2026-04-27 |
| 36 | bnc → rj45 (NOT SDI-over-Cat5) | Belden + SMPTE ST 2110 (75Ω vs 100Ω + GHz vs MHz bandwidth — passively impossible; needs active baluns or IP video) | ✅ 2026-04-27 |
| 37 | triax → bnc (Triax-as-Coax receive, partial) | Canford LEMO/Triax guide (mirror of #35) | ✅ 2026-04-27 |
| 38 | triax → triax (Extension) | Canford LEMO/Triax guide + Wikipedia Triaxial (3-conductor straight-through) | ✅ 2026-04-27 |

### DE-9-originating (11)

| # | Build | Convention source | Status |
|---|---|---|---|
| 39 | de9 → de9 (Straight-Through DCE/DTE) | Wikipedia RS-232 + TI SNLA039 (9-pin straight-through) | ✅ 2026-04-27 |
| 40 | de9 → de9 (Null Modem, Full Handshake) | Wikipedia Null Modem + Lammert Bies (TxD↔RxD, RTS↔CTS, DTR↔DSR all crossed, GND straight) | ✅ 2026-04-28 |
| 41 | de9 → de9 (Null Modem, 3-Wire Scoreboard) | Wikipedia Null Modem (3-wire / loopback handshaking variant) + Lammert Bies; Daktronics/NewBlue cited as application context | ✅ 2026-05-01 |
| 42 | de9 → db25 (EIA-574 to EIA-232) | Wikipedia RS-232 (DB25 pinout) + Part A DE-9 (TIA-574); 9 signals map name-to-name | ✅ 2026-05-01 |
| 73 | de9 → rj45 (Adam KP Black) | Internal Build for custom use | ✅ 2026-04-27 — notes corrected in Pass 2 |
| 74 | de9 → rj45 (Adam KP Yellow CAM/IFB) | Internal Build for custom use | ✅ 2026-04-27 — notes corrected in Pass 2 |
| 75 | de9 → rj45 (Serial Data Grey RS-232/422) | Internal Build for custom use | ✅ 2026-04-27 |
| 76 | de9 → rj45 (RS-422 Null Crossover TSI↔Kalypso) | Internal Build for custom use | ✅ 2026-04-27 |
| 77 | de9 → rj45 (RS-232 Adapter TSI↔Kalypso) | Internal Build for custom use | ✅ 2026-04-27 |
| 78 | de9 → rj45 (RS-232 Null Crossover TSI↔Kalypso) | Internal Build for custom use | ✅ 2026-04-27 |

### DB25-originating (2)

| # | Build | Convention source | Status |
|---|---|---|---|
| 43 | db25 → db25 (Straight-Through) | Tascam DB-25 Pinout PDF (25-pin straight-through) | ✅ 2026-05-01 |
| 44 | db25 → xlr3 (Tascam/AES59 Breakout) | Tascam DB-25 Pinout (mirror of #5; same 8-channel mapping reversed) | ✅ 2026-05-01 |

### XLR4-originating (5)

| # | Build | Convention source | Status |
|---|---|---|---|
| 45 | xlr4 → xlr4 (Headset Extension) | Clear-Com V-Series XLR-4M | ✅ 2026-04-27 |
| 46 | xlr4 → trs (Earphone Feed, partial) | Clear-Com V-Series XLR-4M (strict: Sleeve uses pin 3 only) | ✅ 2026-04-27 (fixed: was bonding pins 1+3 to Sleeve; now pin 3 only per spec) |
| 47 | xlr4 → rj45 (Headset over Cat5, partial) | StudioHub+ XLR3 convention extended to XLR4; Clear-Com V-Series for pin functions | ✅ 2026-04-27 (same resolution as #15) — notes corrected in Pass 2 |
| 48 | xlr4 → xlr5 (Headset to Intercom Panel) | Clear-Com V-Series XLR-4M + XLR-5F (mirror of #14) | ✅ 2026-04-27 — notes corrected in Pass 2 |
| 49 | xlr4 → xlr3 (Headset Mic to Balanced, partial) | Clear-Com V-Series XLR-4M; Rane Note 151 Figure 5e (pin-3 tied at destination) | ✅ 2026-04-27 (fixed: added explicit pin1↔pin3 jumper at destination XLR3 per Rane Fig 5e) — notes corrected in Pass 2 |

### Speakon-originating (3)

| # | Build | Convention source | Status |
|---|---|---|---|
| 50 | speakon → speakon (Straight-Through) | Neutrik Speakon Wiring Suggestion (Bi-Amp row + 4-conductor cable) | ✅ 2026-04-27 |
| 51 | speakon → xlr3 (Passive Speaker Adapter) | Neutrik FAQ (only NL4 1+/1− active); standard XLR pin-1=ground convention | ✅ 2026-04-27 (Neutrik confirms NL4 active pins; specific NL4→XLR mapping follows standard XLR convention but isn't explicitly published) |
| 52 | speakon → trs (1/4", field_hack) | Neutrik FAQ (only NL4 1+/1− active); universal 1/4" speaker convention (Tip=+, Sleeve=−); Hosa NA4LJX commercial equivalent | ✅ 2026-04-27 |

### TS-originating (4)

| # | Build | Convention source | Status |
|---|---|---|---|
| 53 | ts → ts (Patch Cable) | Wikipedia Phone connector (Tip=signal, Sleeve=ground for unbalanced mono) | ✅ 2026-05-01 |
| 54 | ts → xlr3 (Unbalanced Audio) | Rane Note 151 Figure 5e; Rane Note 110 | ✅ 2026-04-27 (fixed: pin 3 was floating, now tied to ground at XLR3 destination per Rane 151 Fig 5e — matches #49/#68/#70 convention) — notes corrected in Pass 2 |
| 55 | ts → rj45 (Unbalanced over Cat5 StudioHub+) | StudioHub+ Adapter Pinout Guide (ADAPT-RCA: signal→Pin-1, Shield/G→Pin-2) | ✅ 2026-05-01 |
| 56 | ts → mini_trs (1/4" to 3.5mm) | Wikipedia Phone connector (Tip=signal, Sleeve=ground, Ring=right ch — float Ring on mono→stereo socket to avoid amp short) | ✅ 2026-05-01 |

### Mini-TRS-originating (6)

| # | Build | Convention source | Status |
|---|---|---|---|
| 57 | mini_trs → mini_trs (Straight-Through) | Wikipedia Phone connector (3-pin straight-through; T/R/S map 1:1) | ✅ 2026-05-01 |
| 58 | mini_trs → xlr3 (IFB/Phone Feed) | Rane Note 110 Figure 1a (mirror of #10; T/R/S → pin 2/3/1 convention) | ❌ Pass 1 ✅ 2026-05-01 — **circuit wrong, fixed in Pass 2** |
| 59 | mini_trs → xlr5 (Intercom Listen-Only) | Clear-Com V-Series XLR-5F (strict: Sleeve→pin 3 Earphone Return) | ✅ 2026-05-01 (fixed: was using pin 1 as ground; now uses pin 3 per spec — same fix as #18, preview confirmed) — notes corrected in Pass 2 |
| 60 | mini_trs → xlr4 (Consumer Phones to Intercom, partial) | Clear-Com V-Series XLR-4M (strict: Sleeve→pin 3 Earphone Return) | ✅ 2026-05-01 (fixed: was bonding Sleeve to both pins 1+3; now pin 3 only per spec — same fix as #25/#46, preview confirmed) |
| 61 | mini_trs → rj45 (Stereo over Cat5 StudioHub+) | StudioHub+ Adapter Pinout Guide (ADAPT-MINIUNBAL) | ✅ 2026-04-21 (fixed: was grounding on 2/6; official is 4 only, 2/6 n/c) — notes corrected in Pass 2 |
| 62 | mini_trs → ts (Headphone to 1/4") | Wikipedia Phone connector (mirror of #56; Ring floats — right ch dropped on mono destination) | ✅ 2026-05-01 |

### Mini-TRRS-originating (4)

| # | Build | Convention source | Status |
|---|---|---|---|
| 63 | mini_trrs → mini_trrs (Straight-Through) | AOSP CTIA LRGM (4-pin straight-through; host determines CTIA vs OMTP) | ✅ 2026-05-01 (preview confirmed) |
| 64 | mini_trrs → xlr5 (Intercom 2-Way) | AOSP CTIA + Clear-Com V-Series XLR-5F (mirror of #19; Ring 2 bonds to both XLR5 pin 1 + pin 3 since TRRS has single ground) | ✅ 2026-05-01 (preview confirmed) — notes corrected in Pass 2 |
| 65 | mini_trrs → xlr4 (CTIA Headset to Intercom) | AOSP CTIA + Clear-Com V-Series XLR-4M (Ring 2 bonds to XLR4 pin 1 + pin 3; Ring 1 dead-end since XLR4 mono) | ✅ 2026-05-01 (preview confirmed) — notes corrected in Pass 2 |
| 66 | mini_trrs → rj45 (Headset over Cat5, field_hack) | AOSP CTIA + OHIS best-practice (each signal paired with ground on its twisted pair; no formal manufacturer spec exists) | ✅ 2026-05-01 (preview confirmed) |

### RCA-originating (4)

| # | Build | Convention source | Status |
|---|---|---|---|
| 67 | rca → rca (Straight-Through) | Belden 1694A (Center→Center, Shield→Shield; 75Ω coax required for video/S/PDIF use) | ✅ 2026-05-01 (preview confirmed) |
| 68 | rca → xlr3 (Consumer to Pro) | Rane Note 151 Figure 5 col 2 row e (destination-side pin 3 tied to ground for active diff-amp input reference) | ❌ Pass 1 ✅ 2026-05-01 — **circuit wrong, fixed in Pass 2** |
| 69 | rca → ts (Consumer to 1/4") | Wikipedia Phone connector + Wikipedia RCA (trivial Center→Tip / Shell→Sleeve, both ends unbalanced mono) | ✅ 2026-05-01 |
| 70 | rca → trs (Consumer to Balanced) | Rane Note 151 Figure 5 col 2 row e (destination-side Ring tied to Sleeve for diff-amp reference) | ❌ Pass 1 ✅ 2026-05-01 — **circuit wrong, fixed in Pass 2** |

### PowerCON-originating (1)

| # | Build | Convention source | Status |
|---|---|---|---|
| 72 | powercon → powercon (Daisy-Chain) | Neutrik BDA 452 (NAC3FCA blue=IN, NAC3FCB grey=OUT, L/N/PE wiring, IEC 61984 no-hot-plug) | ✅ 2026-04-27 |

### RJ12-originating (1)

| # | Build | Convention source | Status |
|---|---|---|---|
| 79 | rj12 → rj45 (Cronus) | Internal Build for custom use | ✅ 2026-04-27 |

---

## Known-issue backlog

- ✅ **All 17 connectors verified in Part A.** Connector-level `sources` populated on every connector; each pinout cites its authority on the detail page.
- ✅ **Internal-Build (custom use) rows (8) all marked ✅ 2026-04-27** — #16 xlr5→db25 intercom snake, #73-78 de9→rj45 (Adam KP Black/Yellow, Serial Data Grey, TSI↔Kalypso ×3), #79 rj12→rj45 Cronus. These are proprietary in-house builds; each `sources` field is now generically labeled `"Internal Build for custom use"`. No external standards verification required — field-verified by the operator who owns the rig.
- ✅ **Pin-3 convention resolved 2026-04-27** against Rane Note 151 Figure 5 (visibly verified in chat). The chart shows 16 interconnect scenarios; the relevant cells:
  - **Source-side unused pin 3** (balanced output → unbalanced input — column 3, rows i-l): float pin 3 at source. Matches #11, #12, #71. ✓
  - **Destination-side unused pin 3** (unbalanced output → balanced input — column 2, row e, "off-the-shelf cable" version): tie pin 3 to chassis ground at destination. Matches #68, #70, and the new fix to #49. ✓
  - **#54 fixed 2026-04-27** — was floating pin 3, now ties pin 3 to ground at the XLR3 destination per Rane 151 Fig 5e. Convention is now consistent across #49, #54, #68, #70.

---

## How to use this doc

For each connector/build, the pass looks like:
1. You open the row in PinRef.
2. I open the source link(s) in Chrome.
3. We diff. I log the result here.
4. On agreement: mark ✅ with today's date.
5. On mismatch: mark ❌, note the delta, fix the data, re-verify.

Order suggestion: audit connectors first (Part A) in small batches, then revisit builds (Part B) — since build correctness depends on both end connectors already being ✅.
