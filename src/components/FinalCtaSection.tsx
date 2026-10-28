import React, { useState } from "react";
import { ExternalLink, Copy, Check, Sparkles, ArrowRight } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const appUrl = "https://dayscore.ai.studio";

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(appUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#2C2721] text-[#F9F6F0] relative overflow-hidden">
      {/* Subtle warm glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B69168]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3D372E] text-[#D4A373] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
          <span>Begin Your Transformation</span>
        </div>

        {/* Display Title from Gamma Slide 10 */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-serif-gelasio text-4xl sm:text-6xl font-bold tracking-tight text-[#F9F6F0] leading-tight">
            Your First DayScore Awaits
          </h2>
          <p className="text-base sm:text-xl text-[#C8BFB5] leading-relaxed font-serif-gelasio italic">
            Go to <strong className="text-[#F9F6F0] font-sans font-bold not-italic">dayscore.ai.studio</strong> right now. Write one reflection. Get your score. See what changes.
          </p>
        </div>

        {/* Primary Launch Action */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-full text-base font-bold bg-[#F9F6F0] text-[#2C2721] hover:bg-[#B69168] hover:text-white transition-all shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Start for Free → dayscore.ai.studio</span>
            <ExternalLink className="w-4 h-4 text-[#8E6B43] group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Copyable direct URL pill */}
        <div className="pt-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1F1B17] border border-[#3D372E] text-xs text-[#C8BFB5]">
            <span className="font-mono text-[#E8DFD3]">{appUrl}</span>
            <button
              type="button"
              onClick={handleCopyUrl}
              className="p-1 rounded-md hover:bg-[#3D372E] text-[#D4A373] transition-colors cursor-pointer"
              title="Copy URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        <p className="text-xs text-[#8E8478] pt-2">
          100% Free • No credit card required • Works seamlessly in any browser
        </p>
      </div>
    </section>
  );
};
