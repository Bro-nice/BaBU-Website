import React from "react";
import { X, Trash2, Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { DayRecord } from "../types";
import { getScoreTier } from "../utils/scoreHelpers";

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: DayRecord[];
  onSelectRecord: (record: DayRecord) => void;
  onDeleteRecord: (id: string) => void;
  onClearAll: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  history,
  onSelectRecord,
  onDeleteRecord,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const averageScore = history.length
    ? Math.round(history.reduce((acc, curr) => acc + curr.score, 0) / history.length)
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0d0d0d] border-l border-white/10 shadow-2xl flex flex-col text-slate-200">
          {/* Drawer Header */}
          <div className="p-5 border-b border-white/5 flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-white">Reflection History</h3>
              <p className="text-xs text-slate-400">
                {history.length} saved reflection{history.length === 1 ? "" : "s"} on this device
              </p>
            </div>

            <button
              type="button"
              id="btn-close-history-drawer"
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Stats Banner */}
          {history.length > 0 && (
            <div className="p-4 bg-white/5 border-b border-white/5 grid grid-cols-2 gap-3">
              <div className="bg-[#141414] p-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Total Reflections</span>
                <span className="text-xl font-bold text-white mt-0.5 block">{history.length}</span>
              </div>

              <div className="bg-[#141414] p-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Average DayScore</span>
                <span className="text-xl font-bold text-amber-400 mt-0.5 block">{averageScore}/100</span>
              </div>
            </div>
          )}

          {/* Drawer Content / List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {history.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-slate-500 flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-slate-300">No reflections saved yet</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
                  Evaluate your first day to start tracking your daily scores, strengths, and realistic challenges.
                </p>
              </div>
            ) : (
              history.map((item) => {
                const tier = getScoreTier(item.score);
                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border border-white/10 bg-[#141414] hover:border-amber-500/30 transition-all relative group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{item.emoji}</span>
                        <span className="text-xs font-mono font-medium text-slate-300">{item.date}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${tier.badgeBg} ${tier.badgeBorder}`}
                        >
                          {item.score}/100
                        </span>

                        <button
                          type="button"
                          id={`btn-delete-${item.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteRecord(item.id);
                          }}
                          title="Delete entry"
                          className="opacity-40 group-hover:opacity-100 p-1 text-slate-500 hover:text-rose-400 transition-opacity cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <h5 className="text-xs font-semibold text-white line-clamp-1 mb-1">
                      {item.title}
                    </h5>

                    <p className="text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">
                      {item.summary}
                    </p>

                    <button
                      type="button"
                      id={`btn-view-${item.id}`}
                      onClick={() => {
                        onSelectRecord(item);
                        onClose();
                      }}
                      className="w-full flex items-center justify-center gap-1 py-2 text-[11px] font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      <span>View Full Score Report</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Drawer Footer */}
          {history.length > 0 && (
            <div className="p-4 border-t border-white/5 bg-[#0a0a0a] flex items-center justify-between">
              <button
                type="button"
                id="btn-clear-all-history"
                onClick={onClearAll}
                className="text-xs text-slate-500 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer font-medium"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Logs</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
