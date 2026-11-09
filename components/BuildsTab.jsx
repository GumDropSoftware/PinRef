"use client";

import { useState, useMemo } from "react";
import { CONNECTORS, BUILDS } from "@/data";
import { T, STATUS_META, styles } from "@/lib/theme";
import WiringDiagram from "./WiringDiagram";
import ConnectorPicker from "./ConnectorPicker";

export default function BuildsTab({ initialBuild, initialConnector, onClearInitial }) {
  const [first, setFirst] = useState(initialConnector || null);
  const [selectedBuild, setSelectedBuild] = useState(initialBuild || null);
  const [search, setSearch] = useState("");
  const connKeys = Object.keys(CONNECTORS);

  const matchingBuilds = useMemo(() => {
    if (!first) return [];
    return BUILDS.filter((b) => b.from === first || b.to === first);
  }, [first]);

  const secondOptions = useMemo(() => {
    if (!first) return [];
    const opts = new Map();
    matchingBuilds.forEach((b) => {
      const other = b.from === first ? b.to : b.from;
      if (!opts.has(other)) opts.set(other, []);
      opts.get(other).push(b);
    });
    // Dedupe true mirror pairs only: a reverse build (to === first) is hidden when
    // a forward build (from === first) has the same short title AND exactly the
    // same pin-to-pin wiring read the other way round. Reverse builds with a
    // different circuit or a different job (an unbalanced→balanced jumper that
    // the balanced→unbalanced build floats; a headset-mic-to-mixer cable vs an
    // XLR3-mic-into-beltpack cable) are real builds and stay visible.
    const shortTitle = (b) => { const p = b.title.split(" \u2014 "); return p.length > 1 ? p[1] : b.title; };
    const wireKey = (b, reversed) =>
      shortTitle(b) + "::" + [...(b.wiring || [])]
        .map((w) => (reversed ? `${w.toPin}>${w.fromPin}` : `${w.fromPin}>${w.toPin}`))
        .sort()
        .join("|");
    for (const [other, builds] of opts) {
      const forward = builds.filter((b) => b.from === first);
      if (forward.length === 0) continue;
      const forwardKeys = new Set(forward.map((b) => wireKey(b, false)));
      const kept = builds.filter((b) => b.from === first || !forwardKeys.has(wireKey(b, true)));
      if (kept.length < builds.length) opts.set(other, kept);
    }
    return Array.from(opts.entries());
  }, [first, matchingBuilds]);

  if (selectedBuild) {
    return (
      <div>
        <button onClick={() => setSelectedBuild(null)} style={styles.backBtn}>&larr; Back</button>
        <WiringDiagram build={selectedBuild} />
      </div>
    );
  }

  if (first && secondOptions.length > 0) {
    const shortLabel = (build) => {
      const parts = build.title.split(" \u2014 ");
      return parts.length > 1 ? parts[1] : build.title;
    };

    return (
      <div>
        <button onClick={() => setFirst(null)} style={styles.backBtn}>&larr; Pick Different Connector</button>
        <div style={{ fontSize: 14, color: T.text, fontWeight: 700, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>
          {CONNECTORS[first].name} <span style={{ color: T.textDim, fontWeight: 400 }}>&rarr; other end:</span>
        </div>
        {secondOptions.map(([otherKey, builds]) => (
          <div key={otherKey}>
            {builds.map((build, bi) => {
              const sm = STATUS_META[build.status];
              const otherConn = CONNECTORS[build.from === first ? build.to : build.from];
              return (
                <button key={bi} onClick={() => setSelectedBuild(build)} style={{
                  ...styles.buildCard,
                  borderLeftColor: sm.color,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}>
                  <span style={{ color: sm.color, fontSize: 16, flexShrink: 0 }}>{sm.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: T.text, fontSize: 14, fontWeight: 700 }}>{otherConn.name}</span>
                    </div>
                    <div style={{ fontSize: 11, color: T.textDim, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{build.status !== "not_possible" && !build.audit?.verified && <span title="Unverified: check with a meter before connecting powered gear" style={{ color: T.yellow, marginRight: 4 }}>{"\u26A0"}</span>}{shortLabel(build)}</div>
                  </div>
                  <span style={{ fontSize: 11, color: sm.color, fontFamily: "monospace", flexShrink: 0 }}>{sm.label}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    );
  }

  // Search filtering
  const q = search.toLowerCase().trim();
  const filteredAllBuilds = q ? BUILDS.filter(b => {
    const fromC = CONNECTORS[b.from];
    const toC = CONNECTORS[b.to];
    const haystack = `${b.title} ${b.use || ""} ${b.notes || ""} ${b.tag || ""} ${fromC?.name} ${fromC?.short} ${toC?.name} ${toC?.short}`.toLowerCase();
    return haystack.includes(q);
  }) : [];

  const filteredConnKeys = q ? connKeys.filter(k => {
    const c = CONNECTORS[k];
    const hasMatchingBuild = BUILDS.some(b => {
      if (b.from !== k && b.to !== k) return false;
      const fromC = CONNECTORS[b.from];
      const toC = CONNECTORS[b.to];
      return `${b.title} ${b.use || ""} ${fromC?.name} ${fromC?.short} ${toC?.name} ${toC?.short}`.toLowerCase().includes(q);
    });
    return `${c.name} ${c.short}`.toLowerCase().includes(q) || hasMatchingBuild;
  }) : connKeys;

  return (
    <div>
      {/* Search */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search builds, connectors..."
          style={{
            width: "100%", padding: "10px 12px", borderRadius: 8,
            border: `1px solid ${T.border}`, background: T.surface2, color: T.text,
            fontSize: 13, fontFamily: "monospace", outline: "none",
          }}
        />
      </div>

      {/* Matching builds from search */}
      {filteredAllBuilds.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, color: T.accent2, fontWeight: 700, fontFamily: "monospace", letterSpacing: 1, marginBottom: 8 }}>
            MATCHING BUILDS
          </div>
          {filteredAllBuilds.map((build, i) => {
            const sm = STATUS_META[build.status];
            const fromC = CONNECTORS[build.from];
            const toC = CONNECTORS[build.to];
            const parts = build.title.split(" \u2014 ");
            const shortLabel = parts.length > 1 ? parts[1] : build.title;
            return (
              <button key={`match-${i}`} onClick={() => setSelectedBuild(build)} style={{
                ...styles.buildCard,
                borderLeftColor: T.accent2,
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 4,
              }}>
                <span style={{ color: sm.color, fontSize: 14, flexShrink: 0 }}>{sm.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: T.text, fontSize: 13, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{fromC.short} &rarr; {toC.short}</div>
                  <div style={{ fontSize: 10, color: T.textDim, marginTop: 1 }}>{build.status !== "not_possible" && !build.audit?.verified && <span style={{ color: T.yellow, marginRight: 4 }}>{"\u26A0"}</span>}{shortLabel}</div>
                </div>
                <span style={{ fontSize: 11, color: sm.color, fontFamily: "monospace", flexShrink: 0 }}>{sm.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Connector picker */}
      <div style={{ fontSize: 12, color: T.textDim, fontWeight: 700, fontFamily: "monospace", letterSpacing: 1, marginBottom: 8 }}>
        BUILD CUSTOM
      </div>
      <p style={{ color: T.textDim, fontSize: 12, margin: "0 0 8px" }}>Pick the first connector:</p>
      <ConnectorPicker
        connKeys={filteredConnKeys}
        onSelect={(k) => { const hasBuilds = BUILDS.some((b) => b.from === k || b.to === k); if (hasBuilds) setFirst(k); }}
        disabledKeys={new Set(filteredConnKeys.filter(k => !BUILDS.some(b => b.from === k || b.to === k)))}
      />
    </div>
  );
}
