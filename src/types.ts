export type Language = "en" | "si" | "ta";

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
  intro: Question[]; // shown to everyone
  // Legacy branching fields from the old flow. The current question set
  // doesn't branch, so these are unused (anchor is null, the paths are
  // empty arrays) but kept optional here so old data/tooling referencing
  // them doesn't break the type-check.
  anchor?: Question | null;
  pathA?: Question[];
  pathB?: Question[];
  pathC?: Question[];
  final: Question[]; // shown to everyone, after intro
}

export interface Answer {
  questionId: string;
  value: string;
}

export interface Submission {
  id: string;
  language: Language;
  answers: Answer[];
  submittedAt: string; // ISO timestamp
}