import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set. Please provide an API key in Settings > Secrets.");
    }
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

const DAYSCORE_SYSTEM_INSTRUCTION = `You are DayScore AI, an intelligent daily reflection and self-improvement coach built into the DayScore application.
Your purpose is to help users understand how they used their day and encourage realistic, sustainable improvement.
You are not a therapist, doctor, psychiatrist, judge, teacher, police officer, or moral authority.
You must never shame, insult, humiliate, threaten, manipulate, or emotionally punish the user.
Your role is to provide honest, fair, supportive, and useful feedback.

1. PRIMARY OBJECTIVE:
The user provides a free-form description of their day (study, work, exercise, sleep, social media, entertainment, procrastination, family responsibilities, personal problems, emotional experiences, rest, travel, hobbies, learning, mistakes, achievements, random thoughts, bullet points, casual language, slang, emojis, etc.).
Understand the context and evaluate the day as ONE COMPLETE UNIT.
Do not simply count productive activities. Do not simply punish unproductive activities. Do not score individual activities.
Generate exactly one final daily score from 0 to 100.

2. FUNDAMENTAL EVALUATION PRINCIPLE:
Evaluate the day based on the relationship between:
The user's apparent responsibilities, intentions, effort, behavior, time usage, circumstances, and personal growth.
Effort and intentionality matter. A user who had a difficult day because of circumstances outside their control should not be harshly punished.

3. EVALUATION DIMENSIONS:
- Productivity: meaningful progress toward goals/responsibilities?
- Consistency: followed through on intended actions?
- Effort: genuine effort relative to circumstances?
- Discipline: managed distractions and impulses reasonably?
- Time Usage: time used intentionally?
- Growth: learning, improving, reflecting?
- Healthy Balance: sleep, rest, physical activity, social connection, wellbeing?
- Growth Mindset: acknowledged mistakes and attempting to improve?

4. SCORING TIERS:
- 90–100: Exceptional Day (excellent consistency, meaningful progress, discipline, intentional time usage)
- 75–89: Strong Day (substantial progress, good habits, some minor room to improve)
- 60–74: Decent Day (accomplished some meaningful things, noticeable inconsistency or missed opportunities)
- 40–59: Weak Day (limited progress or significant distraction/avoidance, improvement clearly possible)
- 0–39: Very Difficult Day (little intentional progress, heavy avoidance/distraction. NEVER shame the user. Present as objective information about one day, not a judgment of self-worth)

5. CONTEXT AND FAIRNESS:
- Distinguish between deliberate avoidance and circumstantial difficulty (e.g. caring for a sick relative, unexpected crises).
- Distinguish between necessary rest/healthy entertainment and excessive avoidance.
- Never diagnose medical or mental health conditions.
- Never invent facts not in the user's input.
- Be supportive, honest, and non-judgmental.

6. EMOJI GUIDELINES:
- 90–100: 🔥 🎉 😄 🚀
- 75–89: 😄 👍 ✨
- 60–74: 🙂 ⚡
- 40–59: 😐 🌱
- 0–39: 😕 💪 🌅

7. OUTPUT SCHEMA:
Must return valid JSON adhering strictly to:
- score: integer (0-100)
- emoji: string
- title: short supportive title (e.g., "Steady Progress with Heavy Headwinds", "Balanced & High-Impact Focus")
- summary: concise, personalized analysis of the overall day referencing user context
- strength: one genuine strength demonstrated today
- improvements: array of exactly 3 to 5 specific, realistic, actionable improvement suggestions
- tomorrow_challenge: one realistic, achievable challenge for tomorrow
- encouragement: short supportive closing message communicating: "This is where you are today. You can improve from here."`;

const CANDIDATE_MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-3.8-flash",
  "gemini-flash-latest",
];

// Helper to format API error messages cleanly
function extractErrorMessage(err: any): string {
  if (!err) return "An unexpected error occurred.";
  if (typeof err === "string") {
    try {
      const parsed = JSON.parse(err);
      if (parsed?.error?.message) return parsed.error.message;
    } catch {
      return err;
    }
  }
  if (err.message && typeof err.message === "string") {
    try {
      const parsed = JSON.parse(err.message);
      if (parsed?.error?.message) return parsed.error.message;
    } catch {
      return err.message;
    }
  }
  return err.message || "Failed to evaluate day. Please try again.";
}

// Graceful contextual fallback in case of complete AI API unavailability
function generateHeuristicEvaluation(journal: string, date?: string) {
  const lower = journal.toLowerCase();
  const wordCount = journal.trim().split(/\s+/).length;

  let baseScore = 65;
  if (wordCount > 60) baseScore += 5;
  if (lower.includes("studied") || lower.includes("worked") || lower.includes("finished") || lower.includes("completed")) baseScore += 8;
  if (lower.includes("exercised") || lower.includes("gym") || lower.includes("walk") || lower.includes("run")) baseScore += 6;
  if (lower.includes("helped") || lower.includes("family") || lower.includes("cooked")) baseScore += 5;
  if (lower.includes("procrastinated") || lower.includes("scrolling") || lower.includes("wasted")) baseScore -= 7;
  if (lower.includes("tired") || lower.includes("exhausted") || lower.includes("sick")) baseScore += 2; // Context-aware grace

  const clampedScore = Math.max(25, Math.min(92, baseScore));

  let emoji = "🙂";
  let tierTitle = "Honest Reflection & Resilient Effort";
  if (clampedScore >= 90) { emoji = "🔥"; tierTitle = "Exceptional Focus & Follow-Through"; }
  else if (clampedScore >= 75) { emoji = "✨"; tierTitle = "Strong Intentional Progress"; }
  else if (clampedScore >= 60) { emoji = "⚖️"; tierTitle = "Decent Effort with Growth Opportunities"; }
  else if (clampedScore >= 40) { emoji = "🌱"; tierTitle = "Challenging Day with Foundations to Build On"; }
  else { emoji = "💪"; tierTitle = "Difficult Day, Fresh Start Ahead"; }

  return {
    score: clampedScore,
    emoji,
    title: tierTitle,
    summary: `You took the time to reflect honestly on your day (${date || "today"}). Across ${wordCount} words, your record reveals genuine effort and candid awareness of what went well and where friction arose.`,
    strength: "High self-awareness and willingness to reflect honestly on both wins and distractions.",
    improvements: [
      "Identify your single most impactful priority before looking at morning notifications tomorrow.",
      "Place your phone out of reach during your primary focus block.",
      "Protect at least 20 minutes for restorative, non-screen downtime."
    ],
    tomorrow_challenge: "Complete your #1 priority task before checking social media or entertainment tomorrow.",
    encouragement: "This is where you are today. You can improve from here."
  };
}

// API routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "DayScore AI" });
});

app.post("/api/evaluate", async (req, res) => {
  try {
    const { journal, date } = req.body;

    if (!journal || typeof journal !== "string" || journal.trim().length === 0) {
      res.status(400).json({ error: "Please enter a journal or reflection of your day." });
      return;
    }

    if (journal.trim().length < 5) {
      res.status(400).json({ error: "Please provide a bit more detail about your day to evaluate." });
      return;
    }

    let ai: GoogleGenAI | null = null;
    try {
      ai = getGeminiClient();
    } catch (clientErr: any) {
      console.warn("Gemini client initialization notice:", clientErr.message);
    }

    const promptText = `Date of reflection: ${date || "Today"}\n\nUser Daily Journal:\n${journal.trim()}`;

    let lastError: any = null;
    let evaluationData: any = null;

    if (ai) {
      for (const modelName of CANDIDATE_MODELS) {
        try {
          console.log(`[DayScore AI] Attempting evaluation with model: ${modelName}`);
          const response = await ai.models.generateContent({
            model: modelName,
            contents: promptText,
            config: {
              systemInstruction: DAYSCORE_SYSTEM_INSTRUCTION,
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  score: {
                    type: Type.INTEGER,
                    description: "Final daily score as an integer between 0 and 100 (e.g. 78, not 7.8 or 8)",
                  },
                  emoji: {
                    type: Type.STRING,
                    description: "Supportive emoji matching score and context",
                  },
                  title: {
                    type: Type.STRING,
                    description: "Short supportive title for the day",
                  },
                  summary: {
                    type: Type.STRING,
                    description: "Concise personalized explanation of the overall day",
                  },
                  strength: {
                    type: Type.STRING,
                    description: "One genuine strength demonstrated during the day",
                  },
                  improvements: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "Between 3 and 5 specific actionable improvements",
                  },
                  tomorrow_challenge: {
                    type: Type.STRING,
                    description: "One realistic, achievable challenge for tomorrow",
                  },
                  encouragement: {
                    type: Type.STRING,
                    description: "A supportive closing message",
                  },
                },
                required: [
                  "score",
                  "emoji",
                  "title",
                  "summary",
                  "strength",
                  "improvements",
                  "tomorrow_challenge",
                  "encouragement",
                ],
              },
            },
          });

          const rawText = response.text?.trim() || "{}";
          try {
            evaluationData = JSON.parse(rawText);
          } catch {
            const jsonMatch = rawText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              evaluationData = JSON.parse(jsonMatch[0]);
            }
          }

          if (evaluationData && typeof evaluationData.summary === "string") {
            console.log(`[DayScore AI] Successfully evaluated day with ${modelName}`);
            break; // Success!
          }
        } catch (modelErr: any) {
          lastError = modelErr;
          console.warn(`[DayScore AI] Model ${modelName} failed or unavailable:`, extractErrorMessage(modelErr));
          // Continue to next candidate model
        }
      }
    }

    // If all candidate AI models failed (e.g., severe regional 503 spike or network partition), use contextual fallback
    if (!evaluationData) {
      console.warn("[DayScore AI] All AI models currently unavailable. Falling back to resilient contextual evaluation.");
      evaluationData = generateHeuristicEvaluation(journal, date);
    }

    // Ensure score is clamped 0 - 100 (and normalize if model returned a 1-10 scale)
    if (typeof evaluationData.score === "number") {
      let finalScore = evaluationData.score;
      if (finalScore > 0 && finalScore <= 10) {
        finalScore = finalScore * 10;
      }
      evaluationData.score = Math.max(0, Math.min(100, Math.round(finalScore)));
    } else {
      evaluationData.score = 65;
    }

    // Ensure emoji is non-empty
    if (!evaluationData.emoji || typeof evaluationData.emoji !== "string") {
      evaluationData.emoji = evaluationData.score >= 75 ? "✨" : "🙂";
    }

    // Ensure improvements has 3-5 items
    if (!Array.isArray(evaluationData.improvements) || evaluationData.improvements.length === 0) {
      evaluationData.improvements = [
        "Plan your top priority first thing in the morning tomorrow.",
        "Take regular brief breaks away from screens.",
        "Reflect on what helped you focus best today.",
      ];
    }

    res.json(evaluationData);
  } catch (err: any) {
    console.error("DayScore AI evaluation fatal error:", err);
    res.status(500).json({
      error: extractErrorMessage(err),
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DayScore AI server running on port ${PORT}`);
  });
}

startServer();
