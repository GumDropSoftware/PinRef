# PINREF
### broadcast cable builder

> Stop googling pin 2 vs pin 3. Again.

PinRef is an open-source broadcast cable reference tool built for people who actually make cables. Look up pinouts, build wiring diagrams with correct wire colors, cross-reference connector compatibility, and submit builds from the field.

Built by people who have been burned by a wrong XLR wiring diagram at 2am during a show.

---

## What's in it

**PINOUTS** — Every connector you'll touch in broadcast: XLR3, XLR5, XLR4, TRS, TS, NL4, 3.5mm, TRRS, RCA, RJ45, RJ12, DE-9, DB25, BNC, Triax, DT12, PowerCON. Tap one, see the pinout.

**BUILDS** — Pre-built wiring diagrams for real-world cable runs. Wire colors match the actual cable you're holding. Solder side and face view. Continuity test checklist included.

**MATRIX** — Compatibility grid. Instantly see what can connect to what, what's partial, and what's a field hack.

**COMMUNITY** — Built something that works? Submit it. Pre-formats the build as an email with importable JSON so we can verify and add it to the main list.

---

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contributing

Found a wrong pinout? Have a build that works in the field? Open a PR or submit through the Community tab in the app.

Wire color corrections, new connector types, and new builds are all welcome.

---

## License

GPL v3 — © 2026 GumDrop LLC

Use it, fork it, improve it. Just keep it open.
