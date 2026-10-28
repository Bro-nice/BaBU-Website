import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { MetricSection } from "./components/MetricSection";
import { GamificationSquadSection } from "./components/GamificationSquadSection";
import { DataPrivacySection } from "./components/DataPrivacySection";
import { EvolvesAndCommunitySection } from "./components/EvolvesAndCommunitySection";
import { InteractiveSandboxSection } from "./components/InteractiveSandboxSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { LandingFooter } from "./components/LandingFooter";
import { HistoryDrawer } from "./components/HistoryDrawer";
import { PhilosophyModal } from "./components/PhilosophyModal";
import { InteractiveBackground } from "./components/InteractiveBackground";
import { DayRecord, EvaluationResponse } from "./types";
import {
  getSavedHistory,
  saveEvaluationRecord,
  deleteEvaluationRecord,
  clearAllHistory,
} from "./utils/scoreHelpers";

export default function App() {
  const [journal, setJournal] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentEvaluation, setCurrentEvaluation] = useState<EvaluationResponse | null>(null);
  const [history, setHistory] = useState<DayRecord[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  useEffect(() => {
    setHistory(getSavedHistory());
  }, []);

  const handleEvaluate = async () => {
    if (!journal.trim() || journal.trim().length < 5) {
      setError("Please describe your day with a bit more detail (at least a few words).");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          journal: journal.trim(),
          date,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to evaluate your day. Please try again.");
      }

      setCurrentEvaluation(data);

      // Save to local history
      const savedRecord = saveEvaluationRecord(data, journal.trim(), date);
      setHistory((prev) => [savedRecord, ...prev.filter((p) => p.id !== savedRecord.id)]);
    } catch (err: any) {
      console.error("Evaluation error:", err);
      let errorMsg = err.message || "An unexpected error occurred while communicating with DayScore AI.";
      try {
        const parsed = JSON.parse(errorMsg);
        if (parsed?.error?.message) {
          errorMsg = parsed.error.message;
        }
      } catch {
        // Not a JSON string
      }
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectHistoryRecord = (record: DayRecord) => {
    setCurrentEvaluation({
      score: record.score,
      emoji: record.emoji,
      title: record.title,
      summary: record.summary,
      strength: record.strength,
      improvements: record.improvements,
      tomorrow_challenge: record.tomorrow_challenge,
      encouragement: record.encouragement,
    });
    setJournal(record.journal);
    setDate(record.date);
    setError(null);
    setIsHistoryOpen(false);

    // Scroll smoothly to the sandbox area
    setTimeout(() => {
      const demoElem = document.getElementById("demo");
      if (demoElem) {
        demoElem.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleDeleteHistoryRecord = (id: string) => {
    const updated = deleteEvaluationRecord(id);
    setHistory(updated);
  };

  const handleClearAllHistory = () => {
    if (confirm("Are you sure you want to clear your local evaluation history?")) {
      clearAllHistory();
      setHistory([]);
    }
  };

  const handleResetEvaluation = () => {
    setCurrentEvaluation(null);
    setJournal("");
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#484237] font-sans selection:bg-[#B69168] selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Interactive live ambient canvas background */}
      <InteractiveBackground />

      {/* Top Navbar with live alert banner */}
      <Navbar
        onOpenPhilosophy={() => setIsPhilosophyOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
        historyCount={history.length}
      />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Slide 1: Hero */}
        <HeroSection />

        {/* Slide 2: The Problem: Lost Potential */}
        <ProblemSection />

        {/* Slide 3: Your AI Coach Understands You */}
        <HowItWorksSection />

        {/* Slide 4: Your Personal Growth Metric: DayScore */}
        <MetricSection />

        {/* Slide 5 & 6: Streaks, Gems, Leaderboards & Squads */}
        <GamificationSquadSection />

        {/* Slide 7: Your Data. Your Rules. */}
        <DataPrivacySection />

        {/* Slide 8 & 9: Adaptive Mentorship & Student Community */}
        <EvolvesAndCommunitySection />

        {/* Interactive Live Sandbox for on-site preview */}
        <InteractiveSandboxSection
          journal={journal}
          setJournal={setJournal}
          date={date}
          setDate={setDate}
          onEvaluate={handleEvaluate}
          isLoading={isLoading}
          evaluation={currentEvaluation}
          onReset={handleResetEvaluation}
        />

        {/* Slide 10: Final CTA */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <LandingFooter onOpenPhilosophy={() => setIsPhilosophyOpen(true)} />

      {/* Philosophy Modal */}
      <PhilosophyModal
        isOpen={isPhilosophyOpen}
        onClose={() => setIsPhilosophyOpen(false)}
      />

      {/* History Drawer */}
      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectRecord={handleSelectHistoryRecord}
        onDeleteRecord={handleDeleteHistoryRecord}
        onClearAll={handleClearAllHistory}
      />
    </div>
  );
}
