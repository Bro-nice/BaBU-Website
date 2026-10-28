import React from "react";
import { Flame, Trophy, Users, Share2, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";

export const GamificationSquadSection: React.FC = () => {
  return (
    <section id="squads" className="py-20 sm:py-28 bg-[#F9F6F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part 1: Gamification (Gamma Slide 5) */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE5D8] text-[#5C5446] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B69168]" />
              <span>Habit Psychology</span>
            </div>
            <h2 className="font-serif-gelasio text-3xl sm:text-5xl font-bold text-[#2C2721] tracking-tight">
              Stay Hooked: Streaks & Leaderboards
            </h2>
            <p className="text-sm sm:text-base text-[#786F63] leading-relaxed">
              Gamified mechanics built around self-compassion, positive reinforcement, and rewarding healthy habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Streaks */}
            <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4 hover:border-[#B69168] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-amber-600">
                <Flame className="w-6 h-6 fill-amber-500 text-amber-600" />
              </div>
              <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
                Unbreakable Streaks
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                Build momentum. Don't break the chain. Show up each evening for 2 minutes to lock in your day and keep your flame alive.
              </p>
            </div>

            {/* Leaderboards */}
            <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4 hover:border-[#B69168] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FEFCE8] border border-[#FEF08A] flex items-center justify-center text-yellow-700">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
                Friendly Leaderboards
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
                Compete with friends and peers — motivating, never toxic. Scores celebrate consistency, self-care, and daily follow-through, not robotic hustle.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Squads (Gamma Slide 6) */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6DDCF] p-8 sm:p-12 shadow-sm space-y-10">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold text-[#B69168] uppercase tracking-widest font-mono">
              Social Accountability
            </span>
            <h3 className="font-serif-gelasio text-3xl sm:text-4xl font-bold text-[#2C2721]">
              Grow With Your Squad
            </h3>
            <p className="text-sm text-[#786F63] leading-relaxed">
              Solitary habits often fade. BaBU lets you invite classmates, friends, or study partners into shared growth circles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2 p-5 rounded-2xl bg-[#F9F6F0] border border-[#E6DDCF]">
              <div className="w-9 h-9 rounded-lg bg-[#2C2721] text-[#F9F6F0] flex items-center justify-center mb-3">
                <Share2 className="w-4 h-4 text-[#D4A373]" />
              </div>
              <h4 className="font-serif-gelasio font-bold text-base text-[#2C2721]">
                Share Wins Together
              </h4>
              <p className="text-xs text-[#786F63] leading-relaxed">
                Post your breakthrough moments, study achievements, and wellness milestones to inspire your whole community.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-[#F9F6F0] border border-[#E6DDCF]">
              <div className="w-9 h-9 rounded-lg bg-[#2C2721] text-[#F9F6F0] flex items-center justify-center mb-3">
                <HeartHandshake className="w-4 h-4 text-[#D4A373]" />
              </div>
              <h4 className="font-serif-gelasio font-bold text-base text-[#2C2721]">
                Accountability That Feels Good
              </h4>
              <p className="text-xs text-[#786F63] leading-relaxed">
                Real support from real peers — no pressure, just progress. Nudge each other when someone is having an uphill week.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-[#F9F6F0] border border-[#E6DDCF]">
              <div className="w-9 h-9 rounded-lg bg-[#2C2721] text-[#F9F6F0] flex items-center justify-center mb-3">
                <Users className="w-4 h-4 text-[#D4A373]" />
              </div>
              <h4 className="font-serif-gelasio font-bold text-base text-[#2C2721]">
                Celebrate Breakthroughs
              </h4>
              <p className="text-xs text-[#786F63] leading-relaxed">
                Every milestone matters. BaBU makes sure no one grows alone, turning consistency into a shared victory.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#F4EEE5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#786F63]">
              Squad invites and real-time community boards are hosted at <strong>dayscore.ai.studio</strong>.
            </span>
            <a
              href="https://dayscore.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#2C2721] text-[#F9F6F0] hover:bg-[#B69168] transition-colors flex items-center gap-2"
            >
              <span>Join a Squad at dayscore.ai.studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
