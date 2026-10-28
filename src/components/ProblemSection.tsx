import React from "react";
import { BookX, Bot, UserX, AlertCircle } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-18 sm:py-24 bg-[#F4EEE5] border-y border-[#E6DDCF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6DDCF] text-[#5C5446] text-xs font-semibold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5 text-[#B69168]" />
            <span>The Reality Check</span>
          </div>
          <h2 className="font-serif-gelasio text-3xl sm:text-4xl font-bold text-[#2C2721] tracking-tight">
            The Problem: Lost Potential
          </h2>
          <p className="text-sm sm:text-base text-[#786F63] leading-relaxed">
            Most students and ambitious individuals want to improve, but existing tools leave them stuck in repetitive, guilt-ridden cycles.
          </p>
        </div>

        {/* 3 Core Friction Points from Gamma Slide 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Problem 1 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#B69168] transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
                <BookX className="w-6 h-6" />
              </div>
              <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721] leading-snug">
                You journal but never see real growth
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                Dumping thoughts into a blank notebook creates a graveyard of unreviewed pages. Without an analytical feedback loop, you miss hidden triggers and repeat identical mistakes week after week.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F4EEE5] text-[11px] font-semibold text-[#8E6B43] uppercase tracking-wider">
              No Feedback Loop
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#B69168] transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721] leading-snug">
                Productivity apps feel robotic, not personal
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                Standard habit trackers treat you like a machine. If an emergency strikes or you battle acute illness, they zero out your score with cold red strikes, causing shame rather than sustainable resilience.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F4EEE5] text-[11px] font-semibold text-[#8E6B43] uppercase tracking-wider">
              Zero Context Awareness
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#B69168] transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
                <UserX className="w-6 h-6" />
              </div>
              <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721] leading-snug">
                No one's helping you become your best self
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                True personal mastery requires an empathetic, non-judgmental mentor who can look at your entire day, celebrate genuine effort, spotlight subtle distractions, and offer a concrete next-day plan.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F4EEE5] text-[11px] font-semibold text-[#8E6B43] uppercase tracking-wider">
              Missing Guidance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
