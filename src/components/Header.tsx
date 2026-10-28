import React from "react";
import { Sparkles, History, HelpCircle, BookOpen } from "lucide-react";

interface HeaderProps {
  historyCount: number;
  onOpenHistory: () => void;
  onOpenPhilosophy: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  historyCount,
  onOpenHistory,
  onOpenPhilosophy,
}) => {
  return (
    <header className="border-b border-white/5 bg-[#0d0d0d]/90 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
        {/* Brand identity matching Elegant Dark theme */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-black text-base shadow-sm">
            <span>D</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                DayScore<span className="text-amber-500">.ai</span>
              </h1>
              <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 hidden sm:inline-block">
                Reflection Coach
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Holistic daily evaluation & sustainable self-improvement
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            id="btn-open-philosophy"
            onClick={onOpenPhilosophy}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>How It Scores</span>
          </button>

          <button
            type="button"
            id="btn-open-history"
            onClick={onOpenHistory}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all cursor-pointer relative"
          >
            <History className="w-3.5 h-3.5 text-slate-400" />
            <span>Log</span>
            {historyCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-amber-500 text-black text-[10px] font-bold">
                {historyCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
