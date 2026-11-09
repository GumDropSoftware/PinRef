# PinRef Pinout Audit

Working doc for the 1-by-1 source verification pass. Update status + `Last verified` as we go.

**Latest: 2026-11-09 — 86 builds: 80 verified, 6 unverified.** Unverified on purpose: the three TSI-to-Kalypso shells #80–#82 (LMG as-built from LMG's documents; as recorded they cannot do their job, and the TSI-1000 side is undocumented) and the three LMG as-built records #84–#86 (LMG's house pin maps for the Adam KP Black/Yellow shells and the Cronus adapter — no public source; new cables use the RTS-layout #77, #78, #83). See Pass 4 and "Jadon's decisions" in Part B.

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

> **Read this first.** The Pass 1 table below (April–May 2026) checked that pin *labels* matched the cited sources. It did **not** check that each cable does the job its title promises. Pass 2 did that circuit check, and Pass 3 (directly below) put every build through five independent reviews. Where they disagree, the later pass wins.

### Pass 4 — Sonnet review round (round 5) · 2026-11-09 (Opus edits, Sonnet reviewers, one Fable audit; for Jadon via Sawyer)

Jadon's brief was to run a Sonnet review round on the unverified builds, with one Fable audit. This pass covers the 56 unverified builds; the three Kalypso shells #80–#82 were left as they are, since that question is still open with Jadon.

**Result:** before the pass, 24 builds were verified and 59 unverified. Now 80 are verified and 3 unverified (#80–#82 only). Nothing has been pushed; Jadon decides. The per-build record is the "Round 5" section of `research/five-angle-review-2026-11-09.md`.

#### Method
- **Ten Sonnet reviewers, one per connector family.** The families were intercom XLR, intercom-to-consumer, headset over Cat5, analog pro, analog consumer, Cat5 audio, snake/video, speaker/power, serial and keypanel shells.
- **What each reviewer checked, on every build.** It checked the build against manufacturer manuals and standards, citing page and table:
  - the pin map;
  - direction and polarity;
  - where grounds, shields and returns land;
  - every voltage present, and what happens if the cable is plugged in reversed or into the other device it fits;
  - every factual claim in the notes.
- **What the reviewers saw.** Only the build data, the pinouts and the sources, not earlier rounds' reasoning. Sources came through WebFetch and the PDFs saved by earlier rounds. Clear-Com Solution Finder pages were read through the wiki's REST API. No reviewer drove Chrome.
- **Fixes and re-checks.** The Opus chat made every edit, each citing a source the reviewer opened, and sent each changed build back to the same reviewer. A second pass fixed what the re-checks still found, and those builds went back again.
- **The rule.** A build is verified only when its reviewer agreed with the final text and cited at least one opened source with a URL. Its stamp says how many it cited.
- **What the reviewers found.** First pass: 11 agreed and 45 disagreed, with nothing dangerous and no wrong pin map. Majors were on #1, #60, #76 and #23/#68/#69. After two re-check passes all 56 agreed.

#### What the app draws: one look per connector type
- **Correct:** XLR3/4/5 and D-sub gender toggles in the Pinouts tab map face and mirror correctly. RJ45/RJ12 were already fixed in Pass 3. Coax is drawn as a cross-section and DT12 as a table.
- **Fixed — jack plugs (1/4" TRS/TS, 3.5 mm TRS/TRRS):** these are drawn side-on but were captioned "SOLDER SIDE" / "FACE VIEW". They now read "SIDE VIEW (plug or jack)", and the toggle is hidden when no end has a face.
- **Fixed — speakON:** no Neutrik drawing ties the diamond to a part. The caption now says the positions are schematic and to wire by the 1+ / 1− / 2+ / 2− marks on the insert.
- **Fixed — powerCON:** Neutrik's BDA 452 wiring view reads N, earth, L from left to right, and the app's solder side matches it. The drawn latch position is not from Neutrik. The caption now says both, and to wire only by the L / N / earth marks.

#### What changed that could damage gear
No pin map changed this pass. The cautions that changed:
- **#76 powerCON jumper.**
  - The jumper carries the combined current of every device downstream of it.
  - Ratings: NAC3FCA/FCB are 20 A 250 V AC. NAC3FXXA/B are 16 A 250 V AC, and 20 A only at 127 V (UL).
  - Only TRUE1, or XX mated with XX, may be mated live.
  - Isolate the supply before mating or unmating, and wire by the L / N / earth marks.
- **#60 TS to 3.5 mm.** The notes had offered a headphone output as a source. A TS plug in a stereo headphone jack shorts its right-channel amplifier to ground, so that source is gone.
- **#1 XLR3 mic cable.** It now has the phantom caution its siblings had.
- **#23 #68 #69 phone-headset adapters.** These had called V-Series, FreeSpeak II and Tempest safe without a source. They now say this is not confirmed and to check the pack's manual, cite Clear-Com's never-join-grounds rule, and have status partial.
- **#3 #9 #20 mic-into-pack adapters.** The 48 V claim is limited to the packs checked. They now say never to feed phantom into the adapter, which can only happen through a gender changer or a male-to-male turnaround.
- **#4 #8 headset feeds.** A 30 V party-line mis-plug drives up to about 1 A into Sennheiser HMD 64 Ω earphones, not the 150 mA stated before. The Clear-Com -Y5 and Telex PH-88R gender cases are now covered.
- **#19 XLR5 to DB25.** Clear-Com V-Series panels have two rear DB25s, GPIO and Auxiliary Audio (which carries Headset 2); never plug into either.
- **#27 TRS to RJ45.** The TS-jack damage case was the wrong way round. It is now: harmless from a mono output; the risk is the cable used backwards.
- **#32 #46.** The DB25 shell is also the Tascam audio snake, so never put RS-232 into it. #46 is a straight DTE-to-DCE adapter only.
- **#79 #83.** Where RS-232, PoE and HelixNet voltages actually land is now stated per pin.
- **#55 speakON to XLR3.** Both genders exist (NA4FX-M male, NA4FC-F female). A female end fits mixer outputs. Never plug it into inputs, DMX ports or party-line sockets.

#### Final Fable audit (read-only, `4c4fe44..HEAD`)
- **Overall:** no dangerous or major finding, no wrong pin map, and no verified stamp it would pull. It confirmed that the final text of all 56 builds is the text their last reviewer pass agreed to.
- **Five minor findings, all accepted:** the #76 mating sentence could read as a live procedure; #55's gender and DMX wording; the plug caption on jack ends; the powerCON latch position; and the #3/#9/#20 phantom example was backwards.
- **Follow-up:** each build change went back to its reviewer, who agreed. Nothing was rejected.

#### Not applied, or still open
- #83's suggested source, the RTS ADAM Breakout Panel Resource Guide, was not cited: the URL inferred from the saved file returns 404. The port is described by the cited KP-32/KP-5032 RJ-12 pinout instead.
- "Check with a meter" wording proposed for #20 was not used, per Jadon's "sources, not meters".
- #6: the reviewer's proposal to weaken the HelixNet 60 V statement was not taken. With channel 2's ground on RJ45 4, 60 V appears under both Clear-Com tables, and the reviewer agreed on re-check.
- Optional wording ideas that reviewers left non-blocking stay in the review file. Examples: the Telex PH-88 data sheet as an extra source on #21/#53, a breaker-sizing line on #76, and "Tempest is discontinued".
- The DT12 face is still schematic; Clark's table is an image the audit did not read.
- The Kalypso shells #80–#82 wait on Jadon.

#### Re-pin or meter
Nothing new to re-pin this pass. The Q3 and Q4 re-pins recorded under "Jadon's decisions" (Pass 3) still apply to any cable built before them.

### Pass 3 — Five-angle review, four rounds · 2026-11-09 (Fable rounds 1–4, Opus close-out, for Jadon via Sawyer)

Jadon's brief: treat every build as if a wrong pin destroys gear. Each connector cluster got five independent reviewers: **Documentation** (pin for pin against a primary source, face vs solder side, male/female mirroring), **Power and damage** (every voltage that can appear, where it lands, what shorts), **Circuit** (direction, polarity, grounds, balanced↔unbalanced, pairing), **Field practice** (what manufacturers sell and engineers build) and **Red team** (how it kills gear or gets built wrong at 2 a.m.). Each saw only the build data, the connector pinouts and the list of opened sources, never each other's reasoning. The full per-build record (every disagreement from every angle, the fix and its source, and what was not applied and why) is `research/five-angle-review-2026-11-09.md`. The five open questions are written up in `research/open-questions-2026-11-09.md`.

**Result: 83 builds. 24 verified, 59 unverified.** After round 4, 46 met the rule. The final Fable audit then found gaps in 20 of them, which were fixed and are now unverified because the new text has not had a five-angle review. Jadon's answers to Q1–Q5 then changed two more verified builds (#27, #33). The audit work was pushed on 2026-11-09 with Jadon's permission; the decision changes follow it.

**Round 1** covered all 83 builds (55 agents). 17 were cleared by all five angles; 66 drew a disagreement (19 dangerous, 56 major and 95 minor angle-verdicts). Wiring changed on the builds in the table below; 76 had notes, labels, dead ends or sources changed.
**Round 2** gave fresh agents every build that changed or drew a disagreement (76 builds, 50 agents). 25 were cleared; 51 drew a disagreement (1 dangerous, 21 major, 96 minor). No wiring fault was found in the round-1 changes; 55 builds had notes tightened.
**Round 3** was a power-and-damage plus red-team pass over the 70 builds that carry or can meet real voltage (20 agents). 65 agreed; 5 disagreed (#3, #9, #4, #29, #49), all over missing cautions; 44 builds had cautions added and 11 "meter it" sentences were replaced by the documented voltage (Jadon: sources, not meters).
**Round 4** gave fresh agents, with all five angles, every build that drew any disagreement in rounds 2 or 3 (55 builds, 50 agents; 47 returned). 20 were cleared by all five; 31 still drew a disagreement (13 major, 45 minor, none dangerous); 4 (#54, #55, #56, #76, the speakON and powerCON cluster) are incomplete because their documentation, field-practice and red-team agents hit the Fable usage limit. The Opus close-out applied round 4's fixes, each citing a source a round 4 reviewer opened. No pin maps changed in round 4.

#### What "verified" means

A build is **verified** when all of these hold:
- its last five-angle review (round 4 if it was re-reviewed there, otherwise round 2, otherwise round 1) had all **five** angles present and agreeing;
- the round 3 power pass agreed, unless round 4 re-reviewed the build afterwards;
- it cites at least one opened source with a URL;
- nothing changed after that review except sentences an agreeing reviewer suggested.

Anything else is **UNVERIFIED**. It shows the yellow "UNVERIFIED — no opened source confirms this build yet. Do not trust it with powered gear." banner and a ⚠ in the build list, followed by a note saying why. The Fable chat's `set_audit.py` only checked the angles that were present, which would have verified #54 and #76 on two angles; the stamp that was committed requires all five.

Verified (24): #7, #11, #17, #24, #25, #26, #29, #30, #37, #38, #39, #40, #41, #42, #48, #49, #52, #57, #59, #61, #67, #70, #71, #75. #11, #37 and #40 are verified as "cannot be adapted with a passive cable". Seven of them (#7, #24, #25, #37, #48, #49, #59) carry sentences an agreeing reviewer suggested after their review.

Unverified (59), by reason:
- **Round 4 disagreed; fixed, not yet re-reviewed by all five angles (27):** #2, #4, #6, #8, #10, #12, #13, #14, #15, #16, #18, #19, #23, #28, #34, #35, #36, #44, #45, #47, #51, #60, #65, #68, #74, #78, #79.
- **Round 4 incomplete (usage limit) (4):** #54, #55, #56, #76. Power and circuit agreed on #54 and #76; #55 and #56 drew power cautions, which were added.
- **Corrected after review (2):** #31, #32. Their face/solder sentence sent a FEMALE D-sub to the app's SOLDER SIDE view. The app draws D-subs as the MALE face and its SOLDER SIDE view mirrors that, so it shows a male shell's cups; a female shell's cups match the FACE VIEW (`components/connectors/DSubConnector.jsx`; the toggle's own caption says the same). Found while applying round 4; round 4's reviewers had proposed copying the wrong sentence onto #44 and #45.
- **As recorded the cable does not do its job (3):** #80 (an RS-422 "null" that ties TX− to TX− through a grey far end), and #81 and #82 (RS-232 with no signal ground). These are rig shells, so the wiring was left as found. They are retitled "as found", and their use text says not to build from the diagram.
- **Changed for Jadon's answers (Q2–Q5):** #6, #18, #27, #33, #34, #35, #36, #51 (Q2/Q3), #77, #78, #83 (Q4), #3, #9, #20, #21, #53 (Q5). #27 and #33 were verified before; the others were already unverified for the reasons above.
- **Changed by the final audit (20):** #1, #3, #5, #9, #20, #21, #22, #43, #46, #50, #53, #58, #62, #63, #64, #66, #69, #72, #73, #77. Each had all five angles agree, and each now carries an audit-driven change listed under "Final Fable audit" below. #77's talk-pair polarity is also open question Q4.

#### Wiring changed in Pass 3 (against the end of Pass 2)

| # | Build | Was → now | Why | Source |
|---|---|---|---|---|
| 10 | XLR3 → BNC | "Not compatible" → LTC / unbalanced audio adapter, pin 2 → centre, pin 1 → shell, pin 3 floated | LTC timecode is an audio-band unbalanced signal, so this is an ordinary balanced-to-unbalanced adapter | Sound Devices 970 p.60 |
| 18, 34, 36, 51 | XLR5/XLR4 ↔ RJ45 headset over Cat5 | Mic signal shared a pair with the earphone return → mic pair 1/2, left ear + return 3/6, right ear 5 with a second return conductor on 4; brown unused; status field_hack | Clear-Com: mic and earphone circuits on separate shielded pairs, never join the grounds | Clear-Com SF 158845384 / 158748532 (Q2) |
| 39, 41 | BNC ↔ Triax (triax as coax) | BNC shell → outer only → shell → inner AND outer | The inner shield is the coax return (centre + inner = the 75 Ω line) | Wikipedia Triaxial cable; Sony HXCU-100 p.8; Canare 75 Ω triax |
| 50 | XLR4 → TRS | Ring floated → Ring tied to Sleeve | Unbalanced earphone feed into a balanced input: tie cold at the destination | Rane 151 Fig 5e |
| 65 | 3.5 mm TRS → RJ45 (StudioHub+) | Sleeve → RJ45 4 (StudioHub+ DC GND) → sleeve → 2 and 6 | StudioHub+'s own unbalanced adapter returns on the cold legs | StudioHub+ Adapter Pinout Guide (Q3) |
| 70 | 3.5 mm TRRS → RJ45 | A one-off map with mic on 7 and ground on 2/6/8 → OHIS §3.2 | A published headset-over-8P8C standard exists; the old map put the mic on StudioHub+'s ±15 V pins | OHIS PDF §3.2 |
| 56, 80–83 | status only | #56 field_hack → standard; #80–#83 standard → field_hack | Neutrik sells this exact speaker wiring (NA4LJX); the rig shells are unverified or non-working as recorded | Neutrik NA4LJX; Kalypso p.67–68; Q4 |

#### Connector-level changes

- **Triax**: the DC supply rides on the CENTRE conductor with the inner shield as return, and the outer shield is protective earth (Wikipedia Triaxial cable; Sony HXCU-100 p.8, 180 V DC). Before Pass 3 the labels put the supply on the outer shield.
- **DE-9**: pinout variants added: RS-232 (default), Sony 9-pin RS-422 (Kalypso p.68), and RTS keypanel matrix (KP-32 data sheet; the variant now notes that the older KP98-7 table differs on pins 3/6/9). **DB25**: an RS-232 variant added (TI SNLA039). The build page still shows the default names; the Pinouts tab switches between variants.
- **XLR3**: the Wikimedia XLR pinouts face diagram is now cited for the face. The Sescom PDF (kept for pin functions) draws the mirror image.

#### What could have damaged gear in the live version (origin/main, 3d4499a, 2026-05-10)

The live site says "all 79 builds verified" and shows no warnings. Compared with it:
1. **RJ45 and RJ12 drawings (every Cat5 build).** The default "Solder Side" view drew pins 8→1 with the clip down, which is the plug's contact face. A builder feeding wires into a plug (clip down, cable toward them) in the order drawn crimps it reversed. On the StudioHub+ audio builds (#6, #27, #33, #35) that puts hot and cold on pins 7/8, StudioHub+'s ±15 V rails; on the headset builds it swaps the mic and earphone circuits. Same-type builds (#1, #43, #47 and others) also labelled two identical drawings "MALE end" and "FEMALE end". On #1, the XLR3 mic and party-line cable, that put pins 1 and 2 swapped on the male end. Found by the final audit and fixed in the UI.
2. **Headset over Cat5 (#18, #34, #36, #51).** Mic signal and earphone return shared a pair, which is a sidetone howl loop. The PoE caution named only the Mode B pins, which these builds leave open, while the Mode A pins 1/2 and 3/6, where the headset sits, went unwarned. HelixNet's ±30 V on RJ45 3–8 was not mentioned.
3. **TRRS headset to RJ45 (#70).** The live map put the phone-headset mic on RJ45 7 and its ground on 8. On a powered StudioHub+ panel those pins carry 15 V− and 15 V+, which is 30 V across an electret capsule. It is now the OHIS map with a never-plug list.
4. **Triax (#39, #41, #42 and the connector).** The live labels said the 120–170 V supply was on the outer shield and the centre carried signal only. It is the other way round: up to 180 V DC rides on the centre. The triax-as-coax builds now say never to connect them to a CCU or camera port and to disconnect both ends first.
5. **XLR3 to XLR5 "Intercom / Audio" (now #2, #3, #4).** One straight cable was sold for three jobs: into a beltpack mic input it put cold on the earphone return, and the "return" channel used an unbalanced L/R pair on an XLR3. It is now three builds with 30 V party-line cautions. Beltpack breakout #20 had the same earphone-return-into-mic fault.
6. **Rig shells (#80–#83)** were shown as standard, working adapters. #80 ties two RS-422 drivers together through a grey far end, #81 and #82 carry no RS-232 ground, and #83 meets the Black and Yellow shells output to output (Rane 109). All four are now field_hack and unverified, and #80–#82 are retitled "as found".
7. **Cautions the live data lacked everywhere:** 30 V party line on every XLR3 end that fits an intercom jack; 48 V phantom on anything that meets a mic input; the Clear-Com RS-700's 15 V on headset pin 4; 12 V XLR4 camera power (both genders); HelixNet ±30 V; PoE Mode A; 1/4" speaker-level outputs; speakON and powerCON with no breaking capacity. Round 4 added the RTS ROAMEO TR-1800 exclusion on the TRRS ↔ XLR5 builds (its pin 3 is Headphone +, so those cables short its amplifier) and the Kalypso Diagnostic RS-232 port (±12 V) on the RS-422 shells.

#### Round 4 suggestions not applied

Each item is logged per build in the review file:
- #80: not rewired to the pair-preserving null, and #81/#82 not given the pin 5 ground, because they are as-found rig shells. They were retitled instead, and the corrected maps stay in the notes. #81/#82's proposed ground on RJ45 7 would sit on StudioHub+'s 15 V− rail, so StudioHub+ is now on their never-plug list.
- #83: not rewired (open question Q4).
- #10: the proposal to rename XLR3 pin 1 to "Ground / Shield" was not applied. PinRef deliberately lands the drain on the shell and draws any pin 1↔shell bond as a jumper (comment in `data/connectors.js`), so this is Jadon's call.
- #23, #44, #45, #68: two reviewer-proposed face/solder sentences were not used. One described the male pin face as the solder side; the other would have mirrored female D-subs.
- #76: the NAC3MM-1 coupler is mentioned, not given as an instruction. The direction was ambiguous and coupler use on mains was not otherwise sourced.
- #78: the DE-9 "RTS keypanel" variant is not drawn on the build page. That is UI work, deferred.
- #5 still says the app draws a female end's "mating face". The conclusion, solder a female end from the SOLDER SIDE view, is correct. #64 and #69 were rewritten by the final audit.

#### Source disagreements logged (the manual wins)

- Clear-Com HelixNet pin polarity: the clearcom.com tip and Solution Finder 158723949 disagree on which RJ45 pins carry +30 V and which −30 V. Both agree that 1/2 is ground and 3–8 carry ±30 V. #6, #18 and #34 are now worded so the hazard holds under either table.
- RTS KP-32 data sheet vs the KP98-7 table (plsystem.com) on DE-9 pins 3/6/9 (noted in the variant).
- Sescom's XLR3 face drawing is the mirror of Wikimedia's and of Jadon's physical check in Pass 1; the data follows the latter.
- Daktronics All Sport: the computer port is J5 on the 5100/5500 and J6 on the 5010 (KB 000029017). KB DD2180294 gives the J-box wiring, not the console's J6 pinout.
- Cisco web doc 12223 vs Cisco 1750 manual Table 3: the manual wins and matches #31.
- Sony HXCU-100 p.8 does not contain a "shorted sheaths = shock hazard" sentence that a round-1 agent attributed to it. The triax notes say what p.8 says.

#### Sources opened for this pass (in addition to Pass 2's)

Rounds 1–3: RTS BP-325 manual p.7 and p.13; Clear-Com Solution Finder 158845384 / 158755357 / 158748532 (headset extensions), 158784598 (3-pin PL), 158841161 (4-to-5 pin), 158723949 (HelixNet RJ45); Clear-Com HelixNet Tip; Clear-Com RS-701 Quick Reference; Grass Valley Kalypso HD/Duo manual v15.0 p.67–68; RTS KP-5032 Technical Manual p.19; RTS XCP-48-RJ45 manual p.3; Sony HXCU-100 p.8; OHIS §3.2/§3.3; StudioHub+ Adapter Pinout Guide and SH-RACK4 manual; Telos phantom-over-RJ45; Sound Devices 970 p.60; Daktronics KB DD2557298; Lammert Bies null modem; Yamaha "Phantom Power"; Neutrik NAC3FCB, NA4FX-M and NL4FX pages; Canare triax page; Sennheiser HMS 27 cable sheet; beyerdynamic DT 290 MK II; Wikipedia (PoE, XLR connector, DMX512, Triaxial cable).
Added by round 4: Bosch/RTS ROAMEO TR-1800 manual F.01U.343.141 p.13–14; Point Source Audio headset accessories; H2X XLR-4F to 3.5 mm; Sescom SMARTCOM and JK Audio Outerloop 3.5 guides; Sound On Sound (transformer winding with no ground return); TASCAM DB-25 Pinout (live URL); Hosa "DB-25 Enigma" and NA4LJX; Neutrik drawing ST-NA4FX-M and BDA 452 V4; Hy-Tek serial cables guide; Wikipedia Null modem; StarTech SCNM9FF2MBK listing; Daktronics KB 000029017 and DD2557278; TI SN75176B and SNLA039; StudioHub+ ADAPT-RS specifications; Whirlwind DT-12 PDF; Wikimedia XLR pinouts.

#### Final Fable audit (read-only, one pass over `origin/main..HEAD`)

One Fable agent audited the full diff. It focused on every build that carries power and on anything that could damage gear. It edited nothing; the Opus chat applied the fixes. **It found no wrong pin map in any of the 83 builds.** Its findings, all checked against the code and sources and all accepted:
1. **RJ45/RJ12 drawn mirrored in the default view** (major; dangerous on the StudioHub+ builds; also live). Fixed in `RJ45Connector.jsx`, `RJ12Connector.jsx` and `WiringDiagram.jsx`. Both views now draw pin 1 on the left, captioned WIRE-ENTRY SIDE / JACK FACE, with a line under the toggle (Wikipedia, Modular connector).
2. **Same-type builds labelled two identical drawings "MALE end" / "FEMALE end"** (major; also live). The labels are now "end A" / "end B". Face/solder sentences added to #1, #43 and #47.
3. **#77 should not be verified.** Its talk polarity is Q4, and it lacked #78's mixed-convention and face/solder cautions. Both added; now unverified.
4. **#69 kept the BP-325 overstatement** that round 4 corrected on #23/#68, and lacked the pin-3 check and Clear-Com's never-join rule. All three ported.
5. **The 1/4" speaker-output caution was missing on #5, #58, #66 and #73.** Round 4 had un-verified #28, #35 and #60 for the same gap. Added.
6. **RS-700 DC statements on #50 and #64 go beyond the RS-701 quick reference**, which does not say where pin 3 sits. Qualified; the advice is now an isolation transformer only. The pin 3 potential on an RS-700 remains unconfirmed, and a schematic or a measurement would settle it.
7. **#64/#69's face/solder sentence called the drawing the pack jack**, which is male on Clear-Com. It is the female cable end's front. Replaced with the two-variant sentence, which adds the RTS male variant.
8. **Verified gendered builds with no face/solder sentence** (#22, #46, #53, #63, #77). Added.
9. **HelixNet's −30 V on pin 3 was not named** on the builds whose 3→1 tie would short it (#3, #9, #20, #21, #53, #58, #62, #72). Added (Clear-Com HelixNet Tip).
10. **The D-sub outline was drawn upside down** (minor). Fixed.

None was rejected. Where the audit offered two fixes, PinRef took the simpler one: it relabelled the ends rather than drawing each end per gender, and it marked #64's claim unconfirmed rather than deleting it. The audit did not check the Yamaha AES DB25 variant or the speakON and powerCON face geometry against a source; both stay open.

#### Jadon's decisions (2026-11-09)

The full reasoning for each is under the question in `research/open-questions-2026-11-09.md`.
- **Q1, stereo on XLR3:** leave it out. PinRef has no stereo-on-XLR3 build and will not add one.
- **Q2, headset over Cat5:** keep the separate-pair layout. Jadon has no cables built to the old one, so the "re-terminate existing cables" sentence was removed from #18, #34, #36 and #51.
- **Q3, StudioHub+ grounds:** applied after checking it against StudioHub's documents. The Adapter Pinout Guide's universal pinout lists RJ45 4 as DC GND and 5 as nc. The SH-RACK4 manual p.15 (SH-2XLRMF panel, jumper JU2) reads "Install to connect XLR(s) pin 1 to StudioHub+ RJ45 power ground (RJ-45 pin 4)". **Re-pin:** #6, #33, #27 and #35 moved channel 2's ground from RJ45 pin 5 (White/Blue) to pin 4 (Blue). Both channels' grounds now share pin 4, and pin 5 is open.
- **Q4, RTS keypanel shells:** follow RTS. Both shells and the adapter use the KP-5032 keypanel RJ-45 (Technical Manual p.19), with the DE-9 per the KP-32 data sheet. **Re-pin:**
  - #77 Black and #78 Yellow: DE-9 pin 4 moved from RJ45 5 to 4, and DE-9 pin 5 from RJ45 4 to 5. Swap the leads in DE-9 positions 4 and 5.
  - #83 Cronus: every RJ-12 pin moved (1: 3→2, 2: 5→3, 3: 1→4, 4: 2→5, 5: 4→6, 6: 6→1). It is now titled for the RTS layout, with status standard.
  - Data stays on RJ45 1/2. An RTS XCP-48-RJ45 breakout (data on 2/7) will not bring a panel up through these shells.
  - **Follow-up (Jadon):** the original pin maps came from LMG's internal documents, so they are kept as "LMG As-Built" builds #84 (Black), #85 (Yellow) and #86 (Cronus). LMG's existing shells do not need re-pinning: keep them as a matched LMG set, use the RTS layout for new cables, and never mix the two on one run. The other LMG builds (#19, #79, #80–#82) still carry LMG's documented pins; their source now says so again (it had been relabelled "Internal Build" in May).
- **Q5, headsets:** Jadon's headsets are Clear-Com and Sennheiser, very seldom RTS.
  - From the makers' pages: Clear-Com CC-110, CC-220, CC-300 and CC-400 are dynamic, and CC-15/CC-30 are electret. Sennheiser HMD 26/27 are dynamic. HME 26/27 and HMDC 27 need P48 and have no intercom cable.
  - #3, #9 and #20 say how each pack is set to Dynamic: RS-700 DIP 1 ON, HelixNet and V-Series in the menu, FreeSpeak II on Auto. They also say what Electret mode puts on the coil.
  - #21 and #53 name which headsets work into a mixer. The phantom warnings stay. Nothing to re-pin.

#### Still open

1. Rig shells #80–#82: rebuild them to the corrected maps in their notes (#80 pair-preserving null; #81/#82 with DE-9 pin 5 carried), or retire #80 in favour of the Kalypso's software RX/TX swap. Until then they stay "as found" and unverified.
2. A fresh five-angle round on the 59 unverified builds. #54, #55, #56 and #76 (speakON and powerCON) still lack three angles. Fable is the limited resource; Sonnet could run the routine angles.
3. Meter one rebuilt Black shell against the matrix after the Q4 re-pin, and ring out any two-channel StudioHub+ cable re-pinned for Q3.

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

#### Open questions for Jadon (answered 2026-11-09 — see Pass 3, "Jadon's decisions")

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
