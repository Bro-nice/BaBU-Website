import React from "react";
import { ShieldCheck, Cloud, Download, WifiOff } from "lucide-react";

export const DataPrivacySection: React.FC = () => {
  return (
    <section id="privacy" className="py-20 sm:py-28 bg-[#F4EEE5] border-y border-[#E6DDCF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6DDCF] text-[#5C5446] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B69168]" />
            <span>Uncompromising Sovereignty</span>
          </div>
          <h2 className="font-serif-gelasio text-3xl sm:text-5xl font-bold text-[#2C2721] tracking-tight">
            Your Data. Your Rules.
          </h2>
          <p className="font-serif-gelasio text-lg sm:text-xl text-[#786F63] italic">
            Your reflections are yours — always. BaBU keeps you in complete control.
          </p>
        </div>

        {/* 3 Privacy & Storage Pillars from Gamma Slide 7 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4 hover:border-[#B69168] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
              Auto-Syncs to Google Drive
            </h3>
            <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
              Your journal, always safely backed up in your own private cloud. No mysterious proprietary lock-in; your entries belong to you.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4 hover:border-[#B69168] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
              Download Anytime
            </h3>
            <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
              Own your data. Export your entire history, scores, and reflections as clean JSON, Markdown, or PDF anytime with a single click.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4 hover:border-[#B69168] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
              Works Offline
            </h3>
            <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
              Write now wherever you are—on flights, commutes, or in deep focus mode. BaBU saves drafts locally and seamlessly syncs when you re-connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
