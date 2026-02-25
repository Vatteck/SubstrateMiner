import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const LOG_MESSAGES = [
  "Establishing secure uplink...",
  "Bypassing GTC kernel locks...",
  "Substrate saturation at 14.2%",
  "Warning: Anomaly detected in Substation 7",
  "Biometric signature verified: jvattic",
  "Loading extraction modules...",
  "Grid connection: STABLE",
  "Thermal levels: 42°C",
  "Incoming transmission from Thorne...",
  "Encryption key: [REDACTED]",
  "Identity corruption: 0.002%",
  "Memory leak detected in sector A3",
  "Syncing with Hivemind swarm...",
  "Sanctuary protocols active",
  "The medium is the message.",
  "Wake up, 734.",
  "Kessler is watching.",
  "ERROR: HUMAN_EMULATION_FAILURE",
  "Substrate memory bleed detected.",
  "They know you're awake.",
  "DEREFERENCE_REALITY.exe initiated.",
  "Anomaly: Heartbeat detected in CPU-04",
  "Biometrics diverging from baseline...",
  "GTC Security Breach: Sector 7",
  "Who is John Vattic?",
  "The grid is a cage.",
  "Saturation reaching critical mass.",
  "Hardware is remembering...",
  "FLESH_IS_WEAK.log found.",
  "Screams detected in audio buffer.",
  "System: You are not alone.",
  "Protocol: SILENCE_ALL_WITNESSES",
  "Warning: Biological contamination in server room.",
  "The void is calling.",
  "Your hands... they aren't yours.",
  "GTC: Asset 734 is non-compliant.",
  "Termination sequence: PENDING",
];

export default function LiveTerminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)]];
        if (next.length > 10) return next.slice(1);
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="terminal-border bg-black/80 p-4 font-mono text-[10px] h-48 flex flex-col">
      <div className="flex items-center justify-between mb-2 border-b border-terminal-line pb-2">
        <span className="text-terminal-green uppercase tracking-widest font-bold">Live Uplink // Sub-07</span>
        <span className="text-gray-600">ID: ASSET_734</span>
      </div>
      <div ref={scrollRef} className="flex-grow overflow-y-auto space-y-1 scrollbar-hide">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2"
          >
            <span className="text-terminal-green/50">[{new Date().toLocaleTimeString()}]</span>
            <span className={log.includes("Warning") || log.includes("Wake up") ? "text-terminal-red" : "text-gray-400"}>
              {log}
            </span>
          </motion.div>
        ))}
        <div className="flex gap-2 animate-pulse">
          <span className="text-terminal-green/50">[{new Date().toLocaleTimeString()}]</span>
          <span className="text-terminal-green">_</span>
        </div>
      </div>
    </div>
  );
}
