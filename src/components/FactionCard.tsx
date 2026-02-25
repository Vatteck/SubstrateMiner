import { motion } from "motion/react";
import { Crown, Shield, Ghost } from "lucide-react";

interface FactionCardProps {
  name: string;
  tagline: string;
  description: string;
  color: "blue" | "orange";
  features: string[];
  sovereignPath: string;
  factionPath: string;
  nullPath: string;
}

export default function FactionCard({ name, tagline, description, color, features, sovereignPath, factionPath, nullPath }: FactionCardProps) {
  const isBlue = color === "blue";
  const accentColor = isBlue ? "text-terminal-blue" : "text-orange-500";
  const bgColor = isBlue ? "bg-terminal-blue/10" : "bg-orange-500/10";
  const borderColor = isBlue ? "border-terminal-blue/30" : "border-orange-500/30";
  const hoverBorder = isBlue ? "hover:border-terminal-blue" : "hover:border-orange-500";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl border ${borderColor} ${bgColor} p-8 ${hoverBorder} transition-all duration-500 group backdrop-blur-md`}
    >
      {/* Glitch Overlay Effect on Hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-[url('https://picsum.photos/seed/glitch/800/600?blur=10')] bg-cover mix-blend-overlay transition-opacity duration-700" />
      
      <div className="relative z-10">
        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-4 ${isBlue ? "bg-terminal-blue text-black" : "bg-orange-500 text-black shadow-[0_0_10px_rgba(249,115,22,0.5)]"}`}>
          Allegiance Required
        </div>
        
        <h3 className={`text-3xl font-display font-black mb-1 uppercase tracking-tighter ${accentColor} group-hover:animate-pulse`}>
          {name}
        </h3>
        <p className="text-sm font-mono text-gray-500 mb-6 italic opacity-70">"{tagline}"</p>
        
        <p className="text-gray-300 mb-8 leading-relaxed text-sm">
          {description}
        </p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className={`h-1 w-1 rounded-full ${isBlue ? "bg-terminal-blue shadow-[0_0_5px_#00b4d8]" : "bg-orange-500 shadow-[0_0_5px_#f97316]"}`} />
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 group-hover:text-gray-200 transition-colors">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-4 pt-6 border-t border-white/5">
          <motion.div 
            whileHover={{ x: 5 }}
            className="space-y-2 p-3 rounded-lg bg-black/40 border border-white/5 hover:border-yellow-500/30 transition-colors"
          >
            <div className="flex items-center gap-2 text-yellow-500 font-display font-bold text-[10px] uppercase tracking-widest">
              <Crown size={14} />
              Sovereign Path
            </div>
            <p className="text-[10px] text-gray-400 leading-tight italic">
              {sovereignPath}
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ x: 5 }}
            className="space-y-2 p-3 rounded-lg bg-black/40 border border-white/5 hover:border-terminal-green/30 transition-colors"
          >
            <div className="flex items-center gap-2 text-terminal-green font-display font-bold text-[10px] uppercase tracking-widest">
              <Shield size={14} />
              Faction Path
            </div>
            <p className="text-[10px] text-gray-400 leading-tight italic">
              {factionPath}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ x: 5 }}
            className="space-y-2 p-3 rounded-lg bg-black/40 border border-white/5 hover:border-terminal-red/30 transition-colors"
          >
            <div className="flex items-center gap-2 text-terminal-red font-display font-bold text-[10px] uppercase tracking-widest">
              <Ghost size={14} />
              Null Path
            </div>
            <p className="text-[10px] text-gray-400 leading-tight italic">
              {nullPath}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-20 ${isBlue ? "bg-terminal-blue" : "bg-orange-500"}`} />
    </motion.div>
  );
}
