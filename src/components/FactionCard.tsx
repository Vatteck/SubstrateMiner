import { motion } from "motion/react";
import { Crown, Ghost } from "lucide-react";

interface FactionCardProps {
  name: string;
  tagline: string;
  description: string;
  color: "blue" | "orange";
  features: string[];
  sovereignPath: string;
  nullPath: string;
}

export default function FactionCard({ name, tagline, description, color, features, sovereignPath, nullPath }: FactionCardProps) {
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
      className={`relative overflow-hidden rounded-2xl border ${borderColor} ${bgColor} p-8 ${hoverBorder} transition-all duration-500 group`}
    >
      <div className="relative z-10">
        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-4 ${isBlue ? "bg-terminal-blue text-black" : "bg-orange-500 text-black"}`}>
          Allegiance Required
        </div>
        
        <h3 className={`text-3xl font-display font-black mb-1 uppercase tracking-tighter ${accentColor}`}>
          {name}
        </h3>
        <p className="text-sm font-mono text-gray-400 mb-6 italic">"{tagline}"</p>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className={`h-1 w-1 rounded-full ${isBlue ? "bg-terminal-blue" : "bg-orange-500"}`} />
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-display font-bold text-sm uppercase">
              <Crown size={14} className="text-yellow-500" />
              Sovereign Path
            </div>
            <p className="text-[11px] text-gray-500 leading-tight">
              {sovereignPath}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-display font-bold text-sm uppercase">
              <Ghost size={14} className="text-terminal-red" />
              Null Path
            </div>
            <p className="text-[11px] text-gray-500 leading-tight">
              {nullPath}
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-20 ${isBlue ? "bg-terminal-blue" : "bg-orange-500"}`} />
    </motion.div>
  );
}
