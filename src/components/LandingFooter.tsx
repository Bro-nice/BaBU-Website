import React from "react";
import { ExternalLink, Heart, ShieldCheck, Sparkles } from "lucide-react";

interface LandingFooterProps {
  onOpenPhilosophy: () => void;
}

export const LandingFooter: React.FC<LandingFooterProps> = ({ onOpenPhilosophy }) => {
  return (
    <footer className="bg-[#1F1B17] text-[#C8BFB5] border-t border-[#2C2721] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#2C2721]">
          {/* Brand */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F9F6F0] text-[#2C2721] flex items-center justify-center font-serif-gelasio font-bold text-sm">
                B
              </div>
              <span className="font-serif-gelasio font-bold text-lg text-[#F9F6F0]">
                BaBU <span className="text-[#B69168] font-sans font-normal text-sm">• DayScore</span>
              </span>
            </div>
            <p className="text-xs text-[#8E8478] leading-relaxed">
              An intelligent daily reflection and self-improvement companion built to help you understand your days honestly and grow without shame.
            </p>
          </div>

          {/* Nav & Quick Links */}
          <div className="flex flex-wrap gap-8 text-xs">
            <div className="space-y-2">
              <span className="font-bold text-[#F9F6F0] uppercase tracking-wider text-[11px] block">
                Product
              </span>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="https://dayscore.ai.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F9F6F0] flex items-center gap-1"
                  >
                    <span>Launch App (dayscore.ai.studio)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#F9F6F0]">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#metric" className="hover:text-[#F9F6F0]">
                    Scoring Metric
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-[#F9F6F0]">
                    Live Sandbox
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-[#F9F6F0] uppercase tracking-wider text-[11px] block">
                Ethics & Principles
              </span>
              <ul className="space-y-1.5">
                <li>
                  <button
                    type="button"
                    onClick={onOpenPhilosophy}
                    className="hover:text-[#F9F6F0] text-left cursor-pointer"
                  >
                    Evaluation Philosophy
                  </button>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-[#F9F6F0]">
                    Data Privacy & Ownership
                  </a>
                </li>
                <li>
                  <span className="text-[#6D655A]">Zero-Shame Guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Creator Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8478]">
          <div className="space-y-0.5">
            <p>© {new Date().getFullYear()} DayScore AI. Built for self-improvement and genuine reflection.</p>
            <p className="text-[11px] text-[#A89E92]">
              Designed, Conceived & Developed by <strong className="text-[#F9F6F0] font-semibold">Aarogya Parajuli</strong>.
            </p>
          </div>
          <p className="flex items-center gap-1">
            <span>Official Web App:</span>
            <a
              href="https://dayscore.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A373] hover:underline font-bold ml-1"
            >
              dayscore.ai.studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
