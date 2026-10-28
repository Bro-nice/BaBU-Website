import React, { useState } from "react";
import { Sparkles, Brain, Search, Heart, CheckCircle2, Sliders } from "lucide-react";

export const MetricSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tiers" | "dimensions">("dimensions");

  const dimensions = [
    { title: "Productivity", desc: "Meaningful progress toward important responsibilities and goals." },
    { title: "Consistency", desc: "Following through on commitments and keeping active promises." },
    { title: "Genuine Effort", desc: "Hard work demonstrated relative to unique daily obstacles." },
    { title: "Discipline", desc: "Managing impulses, scrolling urges, and distractions." },
    { title: "Time Usage", desc: "Intentionality of hours spent across tasks, study, and leisure." },
    { title: "Growth", desc: "Active learning, skills refinement, reflection, and adaptation." },
    { title: "Healthy Balance", desc: "Rest, physical activity, nutrition, and mental rejuvenation." },
    { title: "Growth Mindset", desc: "Owning setbacks and turning friction into stepping stones." },
  ];

  const tiers = [
    { range: "90–100", label: "Exceptional Day", color: "bg-[#2C2721] text-[#F9F6F0]", desc: "Superb consistency, high discipline, deep intentionality, and recovery." },
    { range: "75–89", label: "Strong Day", color: "bg-[#B69168] text-[#FFFFFF]", desc: "Substantial progress and healthy momentum, with slight room for polish." },
    { range: "60–74", label: "Decent Day", color: "bg-[#EDE5D8] text-[#2C2721]", desc: "Accomplished key tasks, but faced noticeable distraction or postponement." },
    { range: "40–59", label: "Weak Day", color: "bg-[#F4EEE5] text-[#5C5446]", desc: "Limited intentional progress or significant avoidance; clear recovery paths." },
    { range: "0–39", label: "Very Difficult Day", color: "bg-[#F9F6F0] text-[#786F63]", desc: "Severe inconsistency or overwhelming distraction. Zero judgment—fresh start tomorrow." },
  ];

  return (
    <section id="metric" className="py-20 sm:py-28 bg-[#F4EEE5] border-y border-[#E6DDCF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6DDCF] text-[#5C5446] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B69168]" />
            <span>Holistic Intelligence</span>
          </div>
          <h2 className="font-serif-gelasio text-3xl sm:text-5xl font-bold text-[#2C2721] tracking-tight">
            Your Personal Growth Metric
          </h2>
          <p className="text-sm sm:text-base text-[#786F63] leading-relaxed">
            Unlike cold task checklists, DayScore analyzes the deep narrative of your day to measure what actually counts.
          </p>
        </div>

        {/* 3 Value Pillars from Gamma Slide 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
              DayScore AI reads between the lines
            </h3>
            <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
              Deeper than keywords — it understands context, emotional friction, and mental endurance. Studying through grief is scored differently than casual procrastinating.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
              Spots patterns you'd miss
            </h3>
            <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
              Surface hidden habits, trends, and blind spots over time. Discover whether late afternoon slump or phone placement is what triggers energy drains.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6DDCF] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] flex items-center justify-center text-[#B69168]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
              Rewards effort, not perfection
            </h3>
            <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed">
              Growth is the goal. BaBU celebrates the journey. Rest is honored, genuine effort is recognized, and there is never any shame or punitive scoring.
            </p>
          </div>
        </div>

        {/* Interactive Evaluation Breakdown Box */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6DDCF] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F4EEE5] pb-6">
            <div>
              <h3 className="font-serif-gelasio font-bold text-2xl text-[#2C2721]">
                Behind The Score Engine
              </h3>
              <p className="text-xs sm:text-sm text-[#786F63]">
                Evaluated as one unified day, synthesized into 0–100.
              </p>
            </div>

            <div className="inline-flex p-1 bg-[#F4EEE5] rounded-full border border-[#E6DDCF] self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab("dimensions")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "dimensions"
                    ? "bg-[#2C2721] text-[#F9F6F0] shadow-xs"
                    : "text-[#786F63] hover:text-[#2C2721]"
                }`}
              >
                8 Dimensions
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("tiers")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "tiers"
                    ? "bg-[#2C2721] text-[#F9F6F0] shadow-xs"
                    : "text-[#786F63] hover:text-[#2C2721]"
                }`}
              >
                Scoring Tiers
              </button>
            </div>
          </div>

          {activeTab === "dimensions" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dimensions.map((dim, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B69168]" />
                    <h4 className="font-bold text-xs text-[#2C2721]">{dim.title}</h4>
                  </div>
                  <p className="text-[11px] text-[#786F63] leading-relaxed">
                    {dim.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {tiers.map((tier, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${tier.color}`}>
                      {tier.range}
                    </span>
                    <span className="font-serif-gelasio font-bold text-[#2C2721] text-sm">
                      {tier.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#786F63] sm:text-right max-w-md">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
