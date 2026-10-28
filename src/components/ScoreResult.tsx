import React, { useState } from "react";
import {
  Award,
  CheckCircle2,
  Copy,
  Check,
  Target,
  Share2,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { EvaluationResponse } from "../types";
import { getScoreTier, formatReportText } from "../utils/scoreHelpers";

interface ScoreResultProps {
  evaluation: EvaluationResponse;
  date: string;
  onReset: () => void;
}

export const ScoreResult: React.FC<ScoreResultProps> = ({
  evaluation,
  date,
  onReset,
}) => {
  const [copied, setCopied] = useState(false);
  const [challengeAccepted, setChallengeAccepted] = useState(false);

  const tier = getScoreTier(evaluation.score);

  const handleCopy = async () => {
    const text = formatReportText(evaluation, date);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  // SVG Gauge calculations
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (evaluation.score / 100) * circumference;

  return (
    <div className="bg-[#121212] rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all backdrop-blur-sm">
      {/* Top Banner with Score Gauge */}
      <div className={`p-6 sm:p-8 bg-gradient-to-b ${tier.gradientBg} border-b border-white/5`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Gauge & Tier Badge */}
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 140 140">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke="#262626"
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke={tier.ringColor}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {evaluation.score}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 -mt-0.5">
                  OUT OF 100
                </span>
                <span className="text-xl mt-0.5" role="img" aria-label="day emoji">
                  {evaluation.emoji}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${tier.badgeBg} ${tier.badgeBorder}`}
                >
                  {tier.tierName}
                </span>
                <span className="text-xs text-slate-500 font-mono">{date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {evaluation.title}
              </h3>

              <p className="text-xs text-slate-400 mt-1 max-w-md">
                {tier.description}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex sm:flex-col items-center sm:items-end gap-2">
            <button
              type="button"
              id="btn-copy-report"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 shadow-xs transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Report</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Body: Summary & Breakdown */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Day Summary */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
            Day Overview & Context
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5">
            {evaluation.summary}
          </p>
        </div>

        {/* Highlight: Genuine Strength */}
        <div className="p-5 rounded-2xl bg-emerald-950/25 border border-emerald-500/25">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">
                Genuine Strength Demonstrated Today
              </h4>
              <p className="text-sm font-medium text-emerald-200 leading-relaxed">
                {evaluation.strength}
              </p>
            </div>
          </div>
        </div>

        {/* 3 to 5 Specific Actionable Improvements */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
            <span>High-Impact Opportunities for Tomorrow</span>
          </h4>

          <div className="space-y-2.5">
            {evaluation.improvements.map((improvement, index) => (
              <div
                key={index}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {improvement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tomorrow's Realistic Challenge */}
        <div className="p-6 rounded-2xl bg-[#181818] border border-amber-500/30 text-white shadow-xl">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <Target className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400">
                    Tomorrow's Realistic Challenge
                  </h4>
                  <span className="text-[10px] bg-white/10 text-amber-300/90 px-2 py-0.5 rounded-full font-mono">
                    Achievable Win
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-100 mt-1.5 leading-relaxed">
                  {evaluation.tomorrow_challenge}
                </p>
              </div>
            </div>

            <button
              type="button"
              id="btn-accept-challenge"
              onClick={() => setChallengeAccepted(!challengeAccepted)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                challengeAccepted
                  ? "bg-amber-500 text-black font-bold shadow-xs"
                  : "bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10"
              }`}
            >
              {challengeAccepted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>Accepted</span>
                </>
              ) : (
                <span>Accept Goal</span>
              )}
            </button>
          </div>
        </div>

        {/* Supportive Closing / Encouragement */}
        <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-slate-300 italic">
              "{evaluation.encouragement}"
            </p>
            <p className="text-xs text-slate-500 mt-1 font-sans">
              DayScore AI Core Principle: This is where you are today. You can improve from here.
            </p>
          </div>

          <button
            type="button"
            id="btn-evaluate-another"
            onClick={onReset}
            className="flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
          >
            Reflect on Another Day
          </button>
        </div>
      </div>
    </div>
  );
};
