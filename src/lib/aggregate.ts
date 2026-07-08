import { Question, Submission } from "@/types";
import { questionSets } from "@/data/questions";

// All question definitions, labelled in English, used purely for display
// in the results dashboard regardless of which language a respondent used.
export function allQuestions(): Question[] {
  const en = questionSets.en;
  const seen = new Set<string>();
  const list: Question[] = [en.anchor, ...en.pathA, ...en.pathB, ...en.pathC, en.final];
  return list.filter((q) => {
    if (seen.has(q.id)) return false;
    seen.add(q.id);
    return true;
  });
}

export interface CountRow {
  label: string;
  count: number;
}

export function choiceBreakdown(questionId: string, submissions: Submission[]): CountRow[] {
  const question = allQuestions().find((q) => q.id === questionId);
  if (!question || !question.options) return [];

  const counts = new Map(question.options.map((o) => [o.value, 0]));
  for (const sub of submissions) {
    const ans = sub.answers.find((a) => a.questionId === questionId);
    if (ans && counts.has(ans.value)) {
      counts.set(ans.value, (counts.get(ans.value) ?? 0) + 1);
    }
  }
  return question.options.map((o) => ({ label: o.label, count: counts.get(o.value) ?? 0 }));
}

export function yesNoBreakdown(questionId: string, submissions: Submission[]): CountRow[] {
  const counts = { Yes: 0, No: 0, Unsure: 0 };
  for (const sub of submissions) {
    const ans = sub.answers.find((a) => a.questionId === questionId);
    if (ans?.value === "yes") counts.Yes++;
    else if (ans?.value === "no") counts.No++;
    else if (ans?.value === "unsure") counts.Unsure++;
  }
  return Object.entries(counts)
    .filter(([, count]) => count > 0)
    .map(([label, count]) => ({ label, count }));
}

export function ratingBreakdown(submissions: Submission[]): CountRow[] {
  const counts = [0, 0, 0, 0, 0];
  for (const sub of submissions) {
    const ans = sub.answers.find((a) => a.questionId === "final");
    const n = ans ? Number(ans.value) : 0;
    if (n >= 1 && n <= 5) counts[n - 1]++;
  }
  return counts.map((count, i) => ({ label: `${i + 1} ★`, count }));
}

export function pathBreakdown(submissions: Submission[]): CountRow[] {
  const counts = { Positive: 0, Negative: 0, Neutral: 0 };
  for (const sub of submissions) {
    if (sub.path === "A") counts.Positive++;
    else if (sub.path === "B") counts.Negative++;
    else counts.Neutral++;
  }
  return Object.entries(counts).map(([label, count]) => ({ label, count }));
}

export function averageRating(submissions: Submission[]): number {
  const ratings = submissions
    .map((s) => Number(s.answers.find((a) => a.questionId === "final")?.value ?? 0))
    .filter((n) => n > 0);
  if (ratings.length === 0) return 0;
  return ratings.reduce((a, b) => a + b, 0) / ratings.length;
}

export function textAnswers(questionId: string, submissions: Submission[]): string[] {
  return submissions
    .map((s) => s.answers.find((a) => a.questionId === questionId)?.value)
    .filter((v): v is string => !!v && v.trim().length > 0);
}
