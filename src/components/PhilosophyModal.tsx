import React from "react";
import { X, CheckCircle, ShieldCheck, Heart, Sparkles, Scale, Compass } from "lucide-react";

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhilosophyModal: React.FC<PhilosophyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          onClick={onClose}
        />

        <div className="relative bg-[#0d0d0d] rounded-3xl border border-white/10 shadow-2xl max-w-2xl w-full p-6 sm:p-8 z-10 text-slate-200">
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-black flex items-center justify-center font-bold text-xs shadow-sm">
                  DS
                </div>
                <h3 className="text-lg font-semibold text-white">
                  How DayScore AI Evaluates Your Day
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                A sustainable, fair, and supportive framework for realistic self-improvement.
              </p>
            </div>

            <button
              type="button"
              id="btn-close-philosophy"
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-5 space-y-6 max-h-[70vh] overflow-y-auto pr-1 text-slate-300 text-sm">
            {/* Core Principle */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="font-semibold text-amber-400 flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>The Fundamental Evaluation Principle</span>
              </h4>
              <p className="text-xs text-amber-200/90 mt-2 leading-relaxed">
                DayScore AI evaluates your day based on the relationship between your
                <strong> responsibilities, intentions, effort, behavior, circumstances, and personal growth</strong>.
                It evaluates the day as <strong>one complete unit</strong> rather than mechanically adding up tasks or arbitrarily punishing downtime.
              </p>
            </div>

            {/* Context & Fairness */}
            <div>
              <h4 className="font-semibold text-white flex items-center gap-2 text-sm mb-3">
                <Scale className="w-4 h-4 text-amber-500" />
                <span>Fairness & Context Matters</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-semibold text-white block mb-1">Deliberate Avoidance</span>
                  <p className="text-slate-400 leading-relaxed">
                    Knowing an exam or deadline is due tomorrow but choosing to scroll social media for 6 hours instead. This reflects in your score.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-semibold text-white block mb-1">Circumstantial Difficulty</span>
                  <p className="text-slate-400 leading-relaxed">
                    Having to care for a sick family member, dealing with sudden emergencies, or acute fatigue. You are not harshly penalized for events outside your control.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-semibold text-white block mb-1">Necessary Rest</span>
                  <p className="text-slate-400 leading-relaxed">
                    Sleeping 8 hours and taking restorative breaks is healthy human maintenance, never penalized as "unproductive".
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-semibold text-white block mb-1">Healthy Entertainment</span>
                  <p className="text-slate-400 leading-relaxed">
                    Relaxing with games, movies, or hobbies in proportion is a natural part of a balanced, sustainable routine.
                  </p>
                </div>
              </div>
            </div>

            {/* 8 Dimensions */}
            <div>
              <h4 className="font-semibold text-white flex items-center gap-2 text-sm mb-3">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>The 8 Evaluation Dimensions</span>
              </h4>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Productivity:</span> <span className="text-slate-300">Did you make meaningful progress toward important goals?</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Consistency:</span> <span className="text-slate-300">Did you follow through on your intentions?</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Effort:</span> <span className="text-slate-300">How much genuine effort did you demonstrate relative to circumstances?</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Discipline:</span> <span className="text-slate-300">Did you manage distractions and impulses reasonably well?</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Time Usage:</span> <span className="text-slate-300">Was time spent with intention?</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Growth:</span> <span className="text-slate-300">Did you learn, reflect, or push your boundaries?</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Healthy Balance:</span> <span className="text-slate-300">Did the day include restorative sleep, physical activity, and wellbeing?</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Growth Mindset:</span> <span className="text-slate-300">Did you acknowledge mistakes with honesty and seek to improve?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zero-shame pledge */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="font-semibold text-white flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Zero-Shame Promise</span>
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                DayScore AI never insults, shames, or emotionally punishes you. A lower score is simply honest information about one 24-hour cycle—never a judgment of your worth or identity.
                Every score communicates: <em>"This is where you are today. You can improve from here."</em>
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
            <button
              type="button"
              id="btn-got-it-philosophy"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-white hover:bg-amber-500 hover:text-black transition-colors cursor-pointer"
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
