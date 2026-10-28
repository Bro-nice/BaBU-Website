import React from "react";
import { PenLine, Award, Target, ArrowRight } from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F9F6F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#B69168] uppercase tracking-widest font-mono">
            Daily Routine
          </span>
          <h2 className="font-serif-gelasio text-3xl sm:text-5xl font-bold text-[#2C2721] tracking-tight">
            Your AI Coach Understands You
          </h2>
          <p className="text-sm sm:text-base text-[#786F63] leading-relaxed">
            Reflecting on your day takes under 3 minutes, giving you complete clarity before you rest.
          </p>
        </div>

        {/* 3 Step Process from Gamma Slide 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-[#FFFFFF] rounded-3xl p-8 border border-[#E6DDCF] shadow-sm relative flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#EDE5D8] flex items-center justify-center text-[#2C2721]">
                  <PenLine className="w-6 h-6" />
                </div>
                <span className="font-serif-gelasio text-3xl font-bold text-[#D3C5B6]">
                  01
                </span>
              </div>
              <h3 className="font-serif-gelasio font-bold text-2xl text-[#2C2721]">
                Write Your Day
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                BaBU reads it like a mentor — no judgment, just insight. Use raw bullet points, slang, emojis, or quick thoughts. Everything from workouts to procrastination is analyzed in context.
              </p>
            </div>
            <div className="p-3 bg-[#F9F6F0] rounded-xl border border-[#E6DDCF] text-[11px] text-[#5C5446] italic">
              "Studied 3 hours, walked dog, ended up binge-watching for 90 minutes..."
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#FFFFFF] rounded-3xl p-8 border border-[#E6DDCF] shadow-sm relative flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#EDE5D8] flex items-center justify-center text-[#2C2721]">
                  <Award className="w-6 h-6" />
                </div>
                <span className="font-serif-gelasio text-3xl font-bold text-[#D3C5B6]">
                  02
                </span>
              </div>
              <h3 className="font-serif-gelasio font-bold text-2xl text-[#2C2721]">
                Get Your DayScore
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                0–100 + personalized growth tips, every single day. Evaluates the day as one complete unit. Identifies genuine strengths and spotlights where energy was leaked.
              </p>
            </div>
            <div className="p-3 bg-[#F9F6F0] rounded-xl border border-[#E6DDCF] text-[11px] text-[#5C5446] flex items-center justify-between font-semibold">
              <span>Score: 78 / 100</span>
              <span className="text-[#B69168]">Strong Day ✨</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#FFFFFF] rounded-3xl p-8 border border-[#E6DDCF] shadow-sm relative flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#EDE5D8] flex items-center justify-center text-[#2C2721]">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-serif-gelasio text-3xl font-bold text-[#D3C5B6]">
                  03
                </span>
              </div>
              <h3 className="font-serif-gelasio font-bold text-2xl text-[#2C2721]">
                Tomorrow's Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                AI-powered micro-goals crafted just for you. Realistic, achievable, high-impact challenges designed to build progressive discipline and momentum tomorrow.
              </p>
            </div>
            <div className="p-3 bg-[#2C2721] rounded-xl text-[#F9F6F0] text-[11px] flex items-center justify-between">
              <span>"Start revision 15m earlier"</span>
              <span className="text-[#D4A373] font-bold">+20 Gems</span>
            </div>
          </div>
        </div>

        {/* Action button pointing to dayscore.ai.studio */}
        <div className="text-center pt-4">
          <a
            href="https://dayscore.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2C2721] hover:text-[#B69168] underline underline-offset-4 transition-colors"
          >
            <span>Start your first reflection now at dayscore.ai.studio</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
