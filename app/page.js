"use client";

import { useState } from "react";
import { T, styles } from "@/lib/theme";
import PinoutsTab from "@/components/PinoutsTab";
import BuildsTab from "@/components/BuildsTab";
import CompatibilityMatrix from "@/components/CompatibilityMatrix";
import CommunityTab from "@/components/CommunityTab";

export default function Home() {
  const [tab, setTab] = useState("pinouts");
  const [matrixBuild, setMatrixBuild] = useState(null);
  const [initialConnector, setInitialConnector] = useState(null);

  return (
    <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif", color: T.text }}>
      {/* Header */}
      <div className="no-print" style={{ padding: "16px 16px 0", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
          <h1 style={{ margin: 0, fontSize: 22, fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, color: T.accent, letterSpacing: 2 }}>
            PINREF
          </h1>
          <span style={{ fontSize: 11, color: T.textDim, fontFamily: "monospace" }}>broadcast cable builder</span>
        </div>
        <div style={{ display: "flex" }}>
          {[
            { id: "pinouts", label: "PINOUTS" },
            { id: "builds", label: "BUILDS" },
            { id: "matrix", label: "MATRIX" },
            { id: "community", label: "COMMUNITY" },
          ].map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              ...styles.tab,
              color: tab === t.id ? T.accent : T.textDim,
              background: tab === t.id ? T.surface : "transparent",
              borderBottom: tab === t.id ? `2px solid ${T.accent}` : "2px solid transparent",
            }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 16 }}>
        {tab === "pinouts" && <PinoutsTab onNavigateToBuild={(connKey) => {
          setInitialConnector(connKey);
          setMatrixBuild(null);
          setTab("builds");
        }} />}
        {tab === "builds" && <BuildsTab initialBuild={matrixBuild} initialConnector={initialConnector} onClearInitial={() => { setMatrixBuild(null); setInitialConnector(null); }} />}
        {tab === "matrix" && (
          <CompatibilityMatrix onSelectBuild={(build) => {
            setMatrixBuild(build);
            setTab("builds");
          }} />
        )}
        {tab === "community" && <CommunityTab />}
      </div>

      {/* Footer */}
      <div className="no-print" style={{ padding: "16px", borderTop: `1px solid ${T.border}`, textAlign: "center" }}>
        <span style={{ fontSize: 10, color: T.textDim, fontFamily: "monospace" }}>
          © 2026 GumDrop LLC — GPL v3 License — <a href="https://github.com/GumDropSoftware/PinRef" style={{ color: T.textDim, textDecoration: "none" }}>open source</a>
        </span>
      </div>
    </div>
  );
}
