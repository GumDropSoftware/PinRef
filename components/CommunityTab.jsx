"use client";

import { useState } from "react";
import { CONNECTORS } from "@/data";
import { T, STATUS_META, styles } from "@/lib/theme";

const SUBMIT_EMAIL = "llcgumdrop@gmail.com";

const EMPTY_FORM = {
  title: "", from: "", to: "", status: "standard",
  use: "", notes: "", authorName: "",
  wiring: [{ fromPin: "", toPin: "", desc: "" }],
};

// ─── Submit form ──────────────────────────────────────────────────────────────

function SubmitForm({ onCancel }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const connKeys = Object.keys(CONNECTORS);

  const fromPins = form.from ? CONNECTORS[form.from]?.pins || [] : [];
  const toPins   = form.to   ? CONNECTORS[form.to]?.pins   || [] : [];

  function setField(key, val) {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: null }));
  }

  function setWireRow(idx, key, val) {
    setForm(f => ({ ...f, wiring: f.wiring.map((w, i) => i === idx ? { ...w, [key]: val } : w) }));
  }

  function addWireRow() {
    setForm(f => ({ ...f, wiring: [...f.wiring, { fromPin: "", toPin: "", desc: "" }] }));
  }

  function removeWireRow(idx) {
    setForm(f => ({ ...f, wiring: f.wiring.filter((_, i) => i !== idx) }));
  }

  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = "Required";
    if (!form.from) e.from = "Required";
    if (!form.to)   e.to   = "Required";
    if (!form.use.trim()) e.use = "Required";
    const validWires = form.wiring.filter(w => w.fromPin !== "" && w.toPin !== "");
    if (validWires.length === 0) e.wiring = "At least one complete wire connection required";
    return e;
  }

  function handleSend() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    const fromConn = CONNECTORS[form.from];
    const toConn   = CONNECTORS[form.to];
    const wiring = form.wiring
      .filter(w => w.fromPin !== "" && w.toPin !== "")
      .map(w => ({
        fromPin: parseInt(w.fromPin, 10) || w.fromPin,
        toPin:   parseInt(w.toPin,   10) || w.toPin,
        desc: w.desc.trim(),
      }));

    const buildObj = {
      from: form.from,
      to: form.to,
      status: form.status,
      title: form.title.trim(),
      use: form.use.trim(),
      wiring,
      ...(form.notes.trim() ? { notes: form.notes.trim() } : {}),
    };

    const wiringLines = wiring.map(w => {
      const fLabel = fromConn.pins.find(p => p.id === w.fromPin)?.label ?? w.fromPin;
      const tLabel = toConn.pins.find(p => p.id === w.toPin)?.label ?? w.toPin;
      return `  ${fromConn.short} pin ${fLabel} → ${toConn.short} pin ${tLabel}${w.desc ? ` — ${w.desc}` : ""}`;
    }).join("\n");

    const subject = `PinRef Build Submission: ${buildObj.title}`;

    const body = [
      "PinRef Build Submission",
      "=======================",
      `Title:   ${buildObj.title}`,
      `From:    ${fromConn.name} (${form.from})`,
      `To:      ${toConn.name} (${form.to})`,
      `Status:  ${STATUS_META[form.status].label}`,
      `Use:     ${buildObj.use}`,
      "",
      "Wiring:",
      wiringLines,
      ...(buildObj.notes ? ["", `Notes: ${buildObj.notes}`] : []),
      ...(form.authorName.trim() ? [`Submitted by: ${form.authorName.trim()}`] : []),
      "",
      "--- IMPORT JSON ---",
      JSON.stringify(buildObj, null, 2),
    ].join("\n");

    window.location.href = `mailto:${SUBMIT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputStyle = {
    width: "100%", padding: "7px 10px", borderRadius: 6,
    border: `1px solid ${T.border}`, background: T.surface, color: T.text,
    fontSize: 12, fontFamily: "monospace", outline: "none", boxSizing: "border-box",
  };
  const labelStyle = { fontSize: 11, color: T.textDim, fontFamily: "monospace", marginBottom: 3, display: "block" };
  const errStyle   = { fontSize: 10, color: T.red, fontFamily: "monospace", marginTop: 2 };

  return (
    <div style={{ maxWidth: 560 }}>
      <h3 style={{ color: T.accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 14, margin: "0 0 14px", letterSpacing: 1 }}>
        SUBMIT A BUILD
      </h3>

      {/* Title */}
      <div style={{ marginBottom: 10 }}>
        <label style={labelStyle}>Build Name *</label>
        <input style={{ ...inputStyle, borderColor: errors.title ? T.red : T.border }}
          value={form.title} onChange={e => setField("title", e.target.value)}
          placeholder="e.g. XLR3 to RJ45 — Clear-Com Trunking" />
        {errors.title && <div style={errStyle}>{errors.title}</div>}
      </div>

      {/* From / To */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
        <div>
          <label style={labelStyle}>From Connector *</label>
          <select style={{ ...inputStyle, borderColor: errors.from ? T.red : T.border }}
            value={form.from} onChange={e => { setField("from", e.target.value); setForm(f => ({ ...f, wiring: [{ fromPin: "", toPin: "", desc: "" }] })); }}>
            <option value="">— pick one —</option>
            {connKeys.map(k => <option key={k} value={k}>{CONNECTORS[k].name}</option>)}
          </select>
          {errors.from && <div style={errStyle}>{errors.from}</div>}
        </div>
        <div>
          <label style={labelStyle}>To Connector *</label>
          <select style={{ ...inputStyle, borderColor: errors.to ? T.red : T.border }}
            value={form.to} onChange={e => { setField("to", e.target.value); setForm(f => ({ ...f, wiring: [{ fromPin: "", toPin: "", desc: "" }] })); }}>
            <option value="">— pick one —</option>
            {connKeys.map(k => <option key={k} value={k}>{CONNECTORS[k].name}</option>)}
          </select>
          {errors.to && <div style={errStyle}>{errors.to}</div>}
        </div>
      </div>

      {/* Status */}
      <div style={{ marginBottom: 10 }}>
        <label style={labelStyle}>Build Quality</label>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["standard", "partial", "field_hack"].map(s => {
            const sm = STATUS_META[s];
            return (
              <button key={s} onClick={() => setField("status", s)} style={{
                padding: "4px 10px", borderRadius: 6, fontSize: 11, fontFamily: "monospace", fontWeight: 700,
                cursor: "pointer",
                border: `1px solid ${form.status === s ? sm.color : T.border}`,
                background: form.status === s ? sm.color + "22" : T.surface,
                color: form.status === s ? sm.color : T.textDim,
              }}>
                {sm.icon} {sm.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Use case */}
      <div style={{ marginBottom: 10 }}>
        <label style={labelStyle}>Use Case / Description *</label>
        <input style={{ ...inputStyle, borderColor: errors.use ? T.red : T.border }}
          value={form.use} onChange={e => setField("use", e.target.value)}
          placeholder="What is this cable used for?" />
        {errors.use && <div style={errStyle}>{errors.use}</div>}
      </div>

      {/* Wiring table */}
      <div style={{ marginBottom: 10 }}>
        <label style={labelStyle}>Pin Wiring *</label>
        {errors.wiring && <div style={{ ...errStyle, marginBottom: 4 }}>{errors.wiring}</div>}
        <div style={{ background: T.surface, borderRadius: 6, border: `1px solid ${T.border}`, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr 28px" }}>
            {["From Pin", "To Pin", "Description", ""].map((h, i) => (
              <div key={i} style={{ padding: "5px 8px", fontSize: 9, color: T.textDim, fontFamily: "monospace", fontWeight: 700, borderBottom: `1px solid ${T.border}` }}>
                {h}
              </div>
            ))}
          </div>
          {form.wiring.map((w, idx) => (
            <div key={idx} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr 28px", borderBottom: `1px solid ${T.border}` }}>
              <select value={w.fromPin} onChange={e => setWireRow(idx, "fromPin", e.target.value)}
                style={{ padding: "5px 6px", background: T.surface, color: T.text, border: "none", borderRight: `1px solid ${T.border}`, fontSize: 11, fontFamily: "monospace", outline: "none" }}>
                <option value="">—</option>
                {fromPins.map(p => <option key={p.id} value={p.id}>{p.label} — {p.name.split(" \u2014 ")[0]}</option>)}
              </select>
              <select value={w.toPin} onChange={e => setWireRow(idx, "toPin", e.target.value)}
                style={{ padding: "5px 6px", background: T.surface, color: T.text, border: "none", borderRight: `1px solid ${T.border}`, fontSize: 11, fontFamily: "monospace", outline: "none" }}>
                <option value="">—</option>
                {toPins.map(p => <option key={p.id} value={p.id}>{p.label} — {p.name.split(" \u2014 ")[0]}</option>)}
              </select>
              <input value={w.desc} onChange={e => setWireRow(idx, "desc", e.target.value)}
                placeholder="e.g. Ground to Ground"
                style={{ padding: "5px 6px", background: T.surface, color: T.text, border: "none", borderRight: `1px solid ${T.border}`, fontSize: 11, fontFamily: "monospace", outline: "none" }} />
              <button onClick={() => removeWireRow(idx)} disabled={form.wiring.length <= 1}
                style={{ padding: 0, background: "none", border: "none", color: form.wiring.length <= 1 ? T.border : T.red, cursor: form.wiring.length <= 1 ? "default" : "pointer", fontSize: 14, fontWeight: 700 }}>
                ×
              </button>
            </div>
          ))}
          <button onClick={addWireRow} style={{
            display: "block", width: "100%", padding: "5px 8px", background: "none",
            border: "none", color: T.accent2, fontSize: 11, fontFamily: "monospace",
            cursor: "pointer", textAlign: "left",
          }}>
            + Add Wire
          </button>
        </div>
      </div>

      {/* Notes */}
      <div style={{ marginBottom: 10 }}>
        <label style={labelStyle}>Notes (optional)</label>
        <input style={inputStyle} value={form.notes} onChange={e => setField("notes", e.target.value)}
          placeholder="Caveats, impedance notes, gear it works with..." />
      </div>

      {/* Author */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Your Name / Handle (optional)</label>
        <input style={inputStyle} value={form.authorName} onChange={e => setField("authorName", e.target.value)}
          placeholder="Anonymous" />
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={handleSend} style={{
          padding: "8px 18px", borderRadius: 6, background: T.accent, color: "#fff",
          border: "none", fontSize: 13, fontFamily: "monospace", fontWeight: 700, cursor: "pointer",
        }}>
          Open in Email
        </button>
        <button onClick={onCancel} style={{
          padding: "8px 14px", borderRadius: 6, background: "none",
          border: `1px solid ${T.border}`, color: T.textDim,
          fontSize: 13, fontFamily: "monospace", cursor: "pointer",
        }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Main tab ─────────────────────────────────────────────────────────────────

export default function CommunityTab() {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <div>
        <button onClick={() => setShowForm(false)} style={styles.backBtn}>&larr; Back</button>
        <SubmitForm onCancel={() => setShowForm(false)} />
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: T.text, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1, marginBottom: 6 }}>
          SUBMIT A BUILD
        </div>
        <div style={{ fontSize: 12, color: T.textDim, lineHeight: 1.6, maxWidth: 480 }}>
          Built something that works? Fill out the pinout below and hit{" "}
          <span style={{ color: T.accent, fontWeight: 700 }}>Open in Email</span> — it'll
          compose a pre-formatted submission and open your email client ready to send.
          Verified builds get added to the main list.
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        {[
          { icon: "①", label: "Fill out the build form" },
          { icon: "②", label: "Hit Open in Email" },
          { icon: "③", label: "Send — we'll review and add it" },
        ].map(({ icon, label }) => (
          <div key={icon} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 12px", borderRadius: 6,
            background: T.surface2, border: `1px solid ${T.border}`,
          }}>
            <span style={{ color: T.accent, fontFamily: "monospace", fontWeight: 800, fontSize: 13 }}>{icon}</span>
            <span style={{ fontSize: 11, color: T.textDim, fontFamily: "monospace" }}>{label}</span>
          </div>
        ))}
      </div>

      <button onClick={() => setShowForm(true)} style={{
        padding: "10px 22px", borderRadius: 6, background: T.accent, color: "#fff",
        border: "none", fontSize: 13, fontFamily: "monospace", fontWeight: 700, cursor: "pointer",
      }}>
        + Submit a Build
      </button>
    </div>
  );
}
