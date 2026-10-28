import React from "react";
import { TrendingUp, Sparkles, HeartPulse, Route, Check, Zap, Gift, ShieldAlert } from "lucide-react";

export const EvolvesAndCommunitySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F9F6F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Mentor Evolves (Gamma Slide 8) */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#B69168] uppercase tracking-widest font-mono">
              Adaptive Mentorship
            </span>
            <h2 className="font-serif-gelasio text-3xl sm:text-5xl font-bold text-[#2C2721] tracking-tight">
              Your AI Mentor Evolves With You
            </h2>
            <p className="text-sm sm:text-base text-[#786F63] leading-relaxed">
              Unlike static journaling prompts that ask the same stale questions, BaBU evolves its lens as your life and seasons shift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
                Real-Time Coaching
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                Adapts to your unique rhythm and patterns as you grow. Whether you are ramping up for finals or recovering from fatigue, feedback reflects where you stand today.
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
                Academic + Mental Health
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                Holistic support in one single place. High achievement is impossible without healthy rest, nutrition, emotional clarity, and psychological safety.
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
                <Route className="w-6 h-6" />
              </div>
              <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
                Growth Paths That Adapt
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                Your goals change over semesters. BaBU adjusts tomorrow's challenges and reflections to match your shifting ambitions and commitments.
              </p>
            </div>
          </div>
        </div>

        {/* Thousands of Students Are Already Growing (Gamma Slide 9) */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6DDCF] p-8 sm:p-12 shadow-sm space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-serif-gelasio text-3xl sm:text-4xl font-bold text-[#2C2721]">
              Thousands of Students Are Already Growing
            </h3>
            <p className="text-sm text-[#786F63]">
              Join the movement. Thousands of students are already scoring, growing, and winning every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F9F6F0] border border-[#E6DDCF] text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#EDE5D8] flex items-center justify-center mx-auto text-[#2C2721]">
                <Gift className="w-5 h-5 text-[#B69168]" />
              </div>
              <h4 className="font-serif-gelasio font-bold text-lg text-[#2C2721]">
                Free Forever
              </h4>
              <p className="text-xs text-[#786F63]">
                No credit card. No hidden walls. Just pure personal growth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F9F6F0] border border-[#E6DDCF] text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#EDE5D8] flex items-center justify-center mx-auto text-[#2C2721]">
                <Zap className="w-5 h-5 text-[#B69168]" />
              </div>
              <h4 className="font-serif-gelasio font-bold text-lg text-[#2C2721]">
                Zero Friction
              </h4>
              <p className="text-xs text-[#786F63]">
                Sign up in seconds at dayscore.ai.studio. Start your daily score today.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F9F6F0] border border-[#E6DDCF] text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#EDE5D8] flex items-center justify-center mx-auto text-[#2C2721]">
                <Sparkles className="w-5 h-5 text-[#B69168]" />
              </div>
              <h4 className="font-serif-gelasio font-bold text-lg text-[#2C2721]">
                AI-Powered
              </h4>
              <p className="text-xs text-[#786F63]">
                Real contextual intelligence. Real actionable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
