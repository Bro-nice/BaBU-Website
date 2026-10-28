import { DayRecord, EvaluationResponse } from "../types";

export interface ScoreTierInfo {
  tierName: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  ringColor: string;
  gradientBg: string;
  description: string;
}

export function getScoreTier(score: number): ScoreTierInfo {
  if (score >= 90) {
    return {
      tierName: "Exceptional Day",
      badgeBg: "bg-emerald-500/10 text-emerald-400",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-500/30",
      ringColor: "#10b981",
      gradientBg: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      description: "Demonstrated excellent consistency, meaningful progress, discipline, and intentional time usage.",
    };
  }
  if (score >= 75) {
    return {
      tierName: "Strong Day",
      badgeBg: "bg-teal-500/10 text-teal-400",
      badgeText: "text-teal-400",
      badgeBorder: "border-teal-500/30",
      ringColor: "#14b8a6",
      gradientBg: "from-teal-500/10 via-teal-500/5 to-transparent",
      description: "Substantial progress and generally good habits, with clear foundations for tomorrow.",
    };
  }
  if (score >= 60) {
    return {
      tierName: "Decent Day",
      badgeBg: "bg-amber-500/10 text-amber-400",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
      ringColor: "#f59e0b",
      gradientBg: "from-amber-500/10 via-amber-500/5 to-transparent",
      description: "Accomplished meaningful things with noticeable inconsistency or distraction to adjust.",
    };
  }
  if (score >= 40) {
    return {
      tierName: "Weak Day",
      badgeBg: "bg-orange-500/10 text-orange-400",
      badgeText: "text-orange-400",
      badgeBorder: "border-orange-500/30",
      ringColor: "#f97316",
      gradientBg: "from-orange-500/10 via-orange-500/5 to-transparent",
      description: "Limited progress or significant distraction, but realistic opportunities for a turnaround tomorrow.",
    };
  }
  return {
    tierName: "Difficult Day",
    badgeBg: "bg-rose-500/10 text-rose-400",
    badgeText: "text-rose-400",
    badgeBorder: "border-rose-500/30",
    ringColor: "#f43f5e",
    gradientBg: "from-rose-500/10 via-rose-500/5 to-transparent",
    description: "Challenging conditions or heavy avoidance. A single day's snapshot that you can build up from.",
  };
}

const STORAGE_KEY = "dayscore_history_v1";

export function getSavedHistory(): DayRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveEvaluationRecord(
  evaluation: EvaluationResponse,
  journal: string,
  date: string
): DayRecord {
  const record: DayRecord = {
    ...evaluation,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    date,
    journal,
    createdAt: Date.now(),
  };

  try {
    const existing = getSavedHistory();
    const updated = [record, ...existing].slice(0, 50); // keep last 50
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Failed to save to local storage", err);
  }

  return record;
}

export function deleteEvaluationRecord(id: string): DayRecord[] {
  try {
    const existing = getSavedHistory();
    const filtered = existing.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  } catch {
    return [];
  }
}

export function clearAllHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore error
  }
}

export function formatReportText(record: EvaluationResponse, date: string): string {
  return `📊 DayScore AI Reflection Report
Date: ${date}
Score: ${record.score}/100 ${record.emoji} (${getScoreTier(record.score).tierName})
Title: ${record.title}

Summary:
${record.summary}

🌟 Genuine Strength:
${record.strength}

🎯 Actionable Improvements:
${record.improvements.map((imp, idx) => `${idx + 1}. ${imp}`).join("\n")}

⚡ Tomorrow's Challenge:
${record.tomorrow_challenge}

💡 Encouragement:
${record.encouragement}

"This is where you are today. You can improve from here."`;
}
