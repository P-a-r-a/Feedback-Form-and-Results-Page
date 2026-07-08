export type Language = "en" | "si" | "ta";

export type Path = "A" | "B" | "C"; // A = positive, B = negative, C = neutral

export type QuestionType = "choice" | "yesno" | "text" | "stars";

export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: string; // stable id used as the answer key, shared across languages
  type: QuestionType;
  text: string;
  options?: QuestionOption[];
  optional?: boolean;
}

export interface LanguageStrings {
  languagePrompt: string;
  languageSubtitle: string;
  next: string;
  back: string;
  submit: string;
  yes: string;
  no: string;
  unsure: string;
  progressLabel: (step: number, total: number) => string;
  thankYouTitle: string;
  thankYouBody: string;
  viewResults: string;
  startOver: string;
  placeholderText: string;
}

export interface QuestionSet {
  strings: LanguageStrings;
  intro: Question[]; // shown to everyone, before the branching question
  anchor: Question;
  pathA: Question[];
  pathB: Question[];
  pathC: Question[];
  final: Question[]; // shown to everyone, after their path-specific questions
}

export interface Answer {
  questionId: string;
  value: string;
}

export interface Submission {
  id: string;
  language: Language;
  path: Path;
  answers: Answer[]; // includes anchor + branch questions + final rating
  submittedAt: string; // ISO timestamp
}
