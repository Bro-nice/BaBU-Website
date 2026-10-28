import React, { useState } from "react";
import { Sparkles, Calendar, RotateCcw, ArrowRight, Lightbulb } from "lucide-react";
import { SAMPLE_PRESETS, SamplePreset } from "../data/presets";

interface JournalInputProps {
  journal: string;
  setJournal: (val: string) => void;
  date: string;
  setDate: (val: string) => void;
  onEvaluate: () => void;
  isLoading: boolean;
  hasResult: boolean;
}

export const JournalInput: React.FC<JournalInputProps> = ({
  journal,
  setJournal,
  date,
  setDate,
  onEvaluate,
  isLoading,
  hasResult,
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
    <section className="bg-[#121212] rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 backdrop-blur-sm transition-all">
      {/* Top Controls: Date & Quick Presets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-white/5">
        <div>
          <h2 className="text-base font-semibold text-white flex items-center gap-2">
            <span>Daily Journal & Reflection</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Describe your day as a whole. No format required—bullet points, casual thoughts, and unfiltered context welcome.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="date"
              id="input-reflection-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent border-0 text-slate-200 font-medium focus:outline-none text-xs cursor-pointer scheme-dark"
            />
          </div>
        </div>
      </div>

      {/* Preset Suggestions */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-2 text-xs font-medium text-slate-400">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
          <span>Need inspiration? Load a realistic scenario:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {SAMPLE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              id={`preset-btn-${preset.id}`}
              onClick={() => handleSelectPreset(preset)}
              className={`px-3 py-1.5 text-xs rounded-full border transition-all cursor-pointer ${
                selectedPresetId === preset.id && journal === preset.content
                  ? "bg-amber-500 text-black border-amber-500 font-semibold shadow-xs"
                  : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              <span className="font-medium mr-1">{preset.label}</span>
              <span className="opacity-70 text-[10px]">({preset.tag})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Journal Textarea */}
      <div className="relative">
        <textarea
          id="textarea-day-journal"
          rows={7}
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
• Did you get enough sleep, exercise, or genuine downtime?
Write naturally—DayScore evaluates your intentionality and whole context, not just a task tally."
          className="w-full px-5 py-4 text-sm text-slate-100 placeholder:text-slate-500 bg-[#0a0a0a] rounded-2xl border border-white/10 focus:bg-[#0d0d0d] focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all resize-y leading-relaxed font-sans"
        />

        {/* Word count */}
        <div className="flex items-center justify-between mt-2.5 px-1 text-xs text-slate-500 font-mono">
          <div>
            <span>{wordCount} words</span>
            <span className="mx-2 text-white/10">•</span>
            <span>{charCount} characters</span>
          </div>

          {journal.length > 0 && (
            <button
              type="button"
              id="btn-clear-journal"
              onClick={handleClear}
              disabled={isLoading}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer font-sans"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/5">
        <div className="text-xs text-slate-400 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Zero-shame, context-aware analysis with DayScore AI</span>
        </div>

        <button
          type="button"
          id="btn-evaluate-day"
          onClick={onEvaluate}
          disabled={isLoading || journal.trim().length < 5}
          className={`w-full sm:w-auto px-7 py-3 rounded-full font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg ${
            isLoading || journal.trim().length < 5
              ? "bg-white/10 text-slate-500 cursor-not-allowed border border-white/5"
              : "bg-white text-black hover:bg-amber-500 hover:text-black active:scale-[0.98]"
          }`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <span>Analyzing DayScore...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{hasResult ? "Re-evaluate Day" : "Evaluate My Day"}</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};
