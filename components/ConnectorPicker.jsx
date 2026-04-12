import { CONNECTORS } from "@/data";
import { T, styles } from "@/lib/theme";

const GROUP_ORDER = [
  { key: "audio", label: "AUDIO" },
  { key: "data", label: "DATA / NETWORK" },
  { key: "video", label: "VIDEO" },
  { key: "multi", label: "MULTI-CHANNEL" },
  { key: "other", label: "OTHER" },
];

export default function ConnectorPicker({ connKeys, onSelect, disabledKeys }) {
  // Group connectors
  const groups = {};
  connKeys.forEach(k => {
    const g = CONNECTORS[k]?.group || "other";
    if (!groups[g]) groups[g] = [];
    groups[g].push(k);
  });

  return (
    <div>
      {GROUP_ORDER.map(({ key, label }) => {
        const keys = groups[key];
        if (!keys || keys.length === 0) return null;
        return (
          <div key={key} style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 10, color: T.textDim, fontWeight: 700, fontFamily: "monospace", letterSpacing: 1, marginBottom: 6 }}>
              {label}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {keys.map(k => {
                const disabled = disabledKeys?.has(k);
                return (
                  <button key={k} onClick={() => !disabled && onSelect(k)} style={{
                    ...styles.connCard,
                    opacity: disabled ? 0.4 : 1,
                    cursor: disabled ? "default" : "pointer",
                  }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: T.text }}>{CONNECTORS[k].short}</span>
                    <span style={{ fontSize: 11, color: T.textDim }}>{CONNECTORS[k].name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
