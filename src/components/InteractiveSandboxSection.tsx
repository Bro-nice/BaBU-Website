import React, { useState } from "react";
import { Sparkles, Calendar, RotateCcw, ArrowRight, Lightbulb, ExternalLink } from "lucide-react";
import { SAMPLE_PRESETS, SamplePreset } from "../data/presets";
import { ScoreResult } from "./ScoreResult";
import { EvaluationResponse } from "../types";

interface InteractiveSandboxSectionProps {
  journal: string;
  setJournal: (val: string) => void;
  date: string;
  setDate: (val: string) => void;
  onEvaluate: () => void;
  isLoading: boolean;
  evaluation: EvaluationResponse | null;
  onReset: () => void;
}

export const InteractiveSandboxSection: React.FC<InteractiveSandboxSectionProps> = ({
  journal,
  setJournal,
  date,
  setDate,
  onEvaluate,
  isLoading,
  evaluation,
  onReset,
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string | null>(null);

  const wordCount = journal.trim() ? journal.trim().split(/\s+/).length : 0;
  const charCount = journal.length;

  const handleSelectPreset = (preset: SamplePreset) => {
    setSelectedPresetId(preset.id);
    setJournal(preset.content);
  };

  const handleClear = () => {
    setJournal("");
    setSelectedPresetId(null);
  };

  return (
    <section id="demo" className="py-20 sm:py-28 bg-[#F4EEE5] border-t border-[#E6DDCF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif-gelasio text-3xl sm:text-4xl font-bold text-[#2C2721] tracking-tight">
            Test the DayScore AI Engine
          </h2>
          <p className="text-sm sm:text-base text-[#786F63] leading-relaxed">
            Curious how BaBU reads between the lines? Test a reflection below. To save your long-term streak and squads, visit{" "}
            <a
              href="https://dayscore.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2C2721] font-bold underline hover:text-[#B69168]"
            >
              dayscore.ai.studio
            </a>
            .
          </p>
        </div>

        {/* Input / Evaluation Form */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6DDCF] shadow-md p-6 sm:p-8 space-y-6">
          {/* Top Controls: Date & Quick Presets */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F4EEE5]">
            <div>
              <h3 className="font-serif-gelasio text-lg font-bold text-[#2C2721]">
                Daily Reflection Sandbox
              </h3>
              <p className="text-xs text-[#786F63]">
                Write naturally—slang, emojis, bullet points, or stream-of-consciousness.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F9F6F0] border border-[#E6DDCF] text-xs text-[#5C5446]">
                <Calendar className="w-3.5 h-3.5 text-[#786F63]" />
                <input
                  type="date"
                  id="sandbox-reflection-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-transparent border-0 text-[#2C2721] font-medium focus:outline-none text-xs cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Preset Buttons */}
          <div>
            <div className="flex items-center gap-1.5 mb-2.5 text-xs font-medium text-[#786F63]">
              <Lightbulb className="w-3.5 h-3.5 text-[#B69168]" />
              <span>Try a realistic example scenario:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  id={`sandbox-preset-${preset.id}`}
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-all cursor-pointer ${
                    selectedPresetId === preset.id && journal === preset.content
                      ? "bg-[#2C2721] text-[#F9F6F0] border-[#2C2721] font-semibold"
                      : "bg-[#F9F6F0] text-[#5C5446] border-[#E6DDCF] hover:bg-[#EDE5D8] hover:text-[#2C2721]"
                  }`}
                >
                  <span className="font-medium mr-1">{preset.label}</span>
                  <span className="opacity-70 text-[10px]">({preset.tag})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div className="relative">
            <textarea
              id="sandbox-day-journal"
              rows={6}
              value={journal}
              onChange={(e) => {
                setJournal(e.target.value);
                if (selectedPresetId) setSelectedPresetId(null);
              }}
              disabled={isLoading}
              placeholder="How did you use your day? 
• What did you study, work on, or accomplish?
• Where did time slip away (scrolling, games, procrastination)?
• Any obstacles, family commitments, or mental strain?
• Did you get enough sleep, exercise, or genuine downtime?"
              className="w-full px-5 py-4 text-sm text-[#2C2721] placeholder:text-[#A89E92] bg-[#F9F6F0] rounded-2xl border border-[#E6DDCF] focus:bg-[#FFFFFF] focus:border-[#B69168] focus:ring-2 focus:ring-[#B69168]/20 focus:outline-none transition-all resize-y leading-relaxed"
            />

            <div className="flex items-center justify-between mt-2 px-1 text-xs text-[#786F63]">
              <div>
                <span>{wordCount} words</span>
                <span className="mx-2">•</span>
                <span>{charCount} characters</span>
              </div>

              {journal.length > 0 && (
                <button
                  type="button"
                  id="sandbox-clear-journal"
                  onClick={handleClear}
                  disabled={isLoading}
                  className="flex items-center gap-1 text-xs text-[#786F63] hover:text-[#2C2721] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F4EEE5]">
            <span className="text-xs text-[#786F63]">
              Evaluates context, effort, and recovery with zero judgment.
            </span>

            <button
              type="button"
              id="btn-sandbox-evaluate"
              onClick={onEvaluate}
              disabled={isLoading || journal.trim().length < 5}
              className={`w-full sm:w-auto px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm ${
                isLoading || journal.trim().length < 5
                  ? "bg-[#E6DDCF] text-[#A89E92] cursor-not-allowed"
                  : "bg-[#2C2721] text-[#F9F6F0] hover:bg-[#B69168] active:scale-[0.98]"
              }`}
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>Analyzing DayScore...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#D4A373]" />
                  <span>{evaluation ? "Re-evaluate Sandbox" : "Calculate DayScore"}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Score Result if evaluated */}
        {evaluation && (
          <div className="pt-4 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-serif-gelasio font-bold text-xl text-[#2C2721]">
                Sandbox Analysis Results
              </h3>
              <a
                href="https://dayscore.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#B69168] hover:underline flex items-center gap-1"
              >
                <span>Save your score at dayscore.ai.studio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <ScoreResult evaluation={evaluation} date={date} onReset={onReset} />
          </div>
        )}
      </div>
    </section>
  );
};
