export interface EvaluationResponse {
  score: number;
  emoji: string;
  title: string;
  summary: string;
  strength: string;
  improvements: string[];
  tomorrow_challenge: string;
  encouragement: string;
}

export interface DayRecord extends EvaluationResponse {
  id: string;
  date: string;
  journal: string;
  createdAt: number;
}
