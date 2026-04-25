import { CONNECTORS } from "@/data";
import CircularConnector from "./CircularConnector";
import DT12Connector from "./DT12Connector";
import DSubConnector from "./DSubConnector";
import TRSConnector from "./TRSConnector";
import TSConnector from "./TSConnector";
import MiniTRSConnector from "./MiniTRSConnector";
import MiniTRRSConnector from "./MiniTRRSConnector";
import RJ45Connector from "./RJ45Connector";
import RJ12Connector from "./RJ12Connector";
import CoaxConnector from "./CoaxConnector";
import SpeakonConnector from "./SpeakonConnector";
import PowerCONConnector from "./PowerCONConnector";

export default function ConnectorDiagram({ connKey, side = "face", highlightPins = [], pinColors = {}, size, label, viewLabel, shellHighlighted = false, shellColor = null }) {
  const conn = CONNECTORS[connKey];
  if (!conn) return null;
  const props = { conn, side, highlightPins, pinColors, size, label, viewLabel, shellHighlighted, shellColor };
  switch (conn.type) {
    case "circular": return <CircularConnector {...props} />;
    case "dt12": return <DT12Connector {...props} />;
    case "dsub": return <DSubConnector {...props} />;
    case "trs": return <TRSConnector {...props} />;
    case "ts": return <TSConnector {...props} />;
    case "mini_trs": return <MiniTRSConnector {...props} />;
    case "mini_trrs": return <MiniTRRSConnector {...props} />;
    case "rj45": return <RJ45Connector {...props} />;
    case "rj12": return <RJ12Connector {...props} />;
    case "coax": return <CoaxConnector {...props} />;
    case "speakon": return <SpeakonConnector {...props} />;
    case "powercon": return <PowerCONConnector {...props} />;
    default: return null;
  }
}
