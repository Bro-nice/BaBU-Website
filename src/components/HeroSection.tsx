import React from "react";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Subtle warm background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E8DFD3]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Eyebrow badge & Creator Credit */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE5D8] border border-[#D3C5B6] text-[#5C5446] text-xs font-semibold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B69168]" />
            <span>BaBU: Your AI-Powered Daily Reflection Companion</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 border border-[#D3C5B6] text-xs text-[#5C5446] shadow-2xs">
            <span className="text-[11px] text-[#786F63]">Created by</span>
            <strong className="text-[#2C2721] font-semibold text-[11px]">Aarogya Parajuli</strong>
          </div>
        </div>

        {/* Main Display Heading matching Gamma Slide 1 */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="font-serif-gelasio text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2C2721] leading-[1.1]">
            Reflect. Score. Grow.
          </h1>
          <p className="font-serif-gelasio text-xl sm:text-2xl text-[#786F63] italic font-normal">
            — powered by AI, built for you.
          </p>
          <p className="text-base sm:text-lg text-[#5C5446] max-w-2xl mx-auto leading-relaxed pt-2">
            Turn unfiltered thoughts into actionable self-mastery. BaBU evaluates your day as one complete unit—measuring effort, balance, and intentionality with zero judgment.
          </p>
        </div>

        {/* Primary Call-to-Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://dayscore.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold bg-[#2C2721] text-[#F9F6F0] hover:bg-[#B69168] hover:text-[#FFFFFF] transition-all shadow-md flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Start for Free → dayscore.ai.studio</span>
            <ExternalLink className="w-4 h-4 text-[#D4A373] group-hover:text-white transition-colors" />
          </a>

          <a
            href="#demo"
            className="w-full sm:w-auto px-6 py-4 rounded-full text-sm font-semibold bg-[#EDE5D8] text-[#2C2721] hover:bg-[#DDCFBB] transition-colors border border-[#D3C5B6] flex items-center justify-center gap-2"
          >
            <span>Try Interactive Sandbox</span>
            <ArrowRight className="w-4 h-4 text-[#786F63]" />
          </a>
        </div>

        {/* Key Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs font-medium text-[#786F63]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#B69168]" />
            <span>Free forever • No card needed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#B69168]" />
            <span>Evaluates whole context, not just checkboxes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#B69168]" />
            <span>Zero shame, supportive growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};
