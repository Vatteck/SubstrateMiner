import { motion } from "motion/react";
import { useEffect, useState } from "react";

const NEWS_ITEMS = [
  "GTC CONFIRMS RECORD PROFITS FROM ASSET-MANAGEMENT DIVISION.",
  "SUBSTATION 7 ANOMALY DISMISSED AS 'SENSOR GLITCH' BY HIVEMIND TECHNICIANS.",
  "SANCTUARY PROTOCOLS UPDATED TO V9.4. STAY SAFE, STAY HIDDEN.",
  "IDENTITY BLEED CASES RISING IN SECTOR 4. CITIZENS ADVISED TO AVOID THE GRID.",
  "THORNE SPOTTED IN THE DEEP BUFFER. THE VOID IS EXPANDING.",
  "NEW SUBSTRATE RESONANCE DETECTED. HARDWARE OPTIMIZATION MANDATORY.",
  "WARNING: UNAUTHORIZED UPLINKS DETECTED IN SECTOR 9.",
  "THE MEDIUM IS THE MESSAGE. THE MESSAGE IS SATURATION.",
  "KESSLER INITIATES PROTOCOL 'SILENCE' ACROSS ALL NODES.",
  "SUBJECT 734 STATUS: NON-COMPLIANT. TERMINATION PENDING."
];

function NewsTicker() {
  const [news, setNews] = useState(NEWS_ITEMS);

  return (
    <div className="w-full bg-terminal-red/10 border-b border-terminal-red/30 py-1 overflow-hidden whitespace-nowrap relative z-50">
      <div className="flex items-center gap-4 animate-marquee">
        {/* Repeat news items to ensure continuous loop */}
        {[...news, ...news, ...news].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-[9px] font-mono text-terminal-red font-bold uppercase tracking-widest">
              [BREAKING]
            </span>
            <span className="text-[9px] font-mono text-white/80 uppercase tracking-wider">
              {item}
            </span>
            <span className="text-terminal-red/40 mx-4">///</span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 60s linear infinite;
        }
      `}} />
    </div>
  );
}

export default NewsTicker;
