import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Language, Question, Submission } from "@/types";
import { questionSets } from "@/data/questions";
import { LanguageSelect } from "@/components/LanguageSelect";
import { QuestionCard } from "@/components/QuestionCard";
import { MatchaBowlProgress } from "@/components/MatchaBowlProgress";
import { Button } from "@/components/ui/button";
import { saveSubmission, makeId } from "@/lib/storage";

type Stage = "language" | "questions" | "submitting" | "thanks" | "error";

export function FeedbackForm() {
  const [stage, setStage] = useState<Stage>("language");
  const [language, setLanguage] = useState<Language>("en");
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(1);

  const set = questionSets[language];

  // Combine the linear lists into one flat, sequential workflow
  const steps: Question[] = useMemo(() => {
    return [...set.intro, ...set.final];
  }, [set]);

  const totalSteps = steps.length;
  const currentQuestion = steps[stepIndex];
  const currentValue = answers[currentQuestion?.id] ?? "";
  const isLast = stepIndex === totalSteps - 1;
  const canAdvance = currentQuestion?.optional || currentValue.trim().length > 0;

  function handleSelectLanguage(lang: Language) {
    setLanguage(lang);
    setStage("questions");
  }

  function handleAnswer(value: string) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  }

  function goNext() {
    if (isLast) {
      submit();
      return;
    }
    setDirection(1);
    setStepIndex((i) => i + 1);
  }

  function goBack() {
    if (stepIndex === 0) {
      setStage("language");
      return;
    }
    setDirection(-1);
    setStepIndex((i) => i - 1);
  }

  async function submit() {
    setStage("submitting");
    const submission: Submission = {
      id: makeId(),
      language,
      answers: Object.entries(answers).map(([questionId, value]) => ({ questionId, value })),
      submittedAt: new Date().toISOString(),
    };
    try {
      await saveSubmission(submission);
      setStage("thanks");
    } catch {
      setStage("error");
    }
  }

  function reset() {
    setStage("language");
    setLanguage("en");
    setStepIndex(0);
    setAnswers({});
  }

  if (stage === "language") {
    return (
      <AnimatePresence mode="wait">
        <LanguageSelect onSelect={handleSelectLanguage} />
      </AnimatePresence>
    );
  }

  if (stage === "submitting") {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center px-6 text-center">
        <MatchaBowlProgress percent={100} label="Sending..." />
      </div>
    );
  }

  if (stage === "error") {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-2 font-display text-2xl font-medium text-matcha-900">
          Something went wrong sending your response
        </h1>
        <p className="mb-8 text-matcha-700">Check your connection and try submitting again.</p>
        <Button onClick={submit}>Try again</Button>
      </div>
    );
  }

  if (stage === "thanks") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center px-6 text-center"
        lang={language}
      >
        <MatchaBowlProgress percent={100} label="" />
        <h1 className="mt-6 mb-2 font-display text-3xl font-medium text-matcha-900">
          {set.strings.thankYouTitle}
        </h1>
        <p className="mb-8 text-matcha-700">{set.strings.thankYouBody}</p>
        <Button variant="outline" onClick={reset}>
          {set.strings.startOver}
        </Button>
      </motion.div>
    );
  }

  const percent = Math.round((stepIndex / (totalSteps - 1)) * 100);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-6 py-12">
      <div className="mb-8">
        <MatchaBowlProgress
          percent={percent}
          label={set.strings.progressLabel(stepIndex + 1, totalSteps)}
        />
      </div>

      <div className="relative w-full">
        <AnimatePresence mode="wait" custom={direction}>
          {currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              <QuestionCard
                question={currentQuestion}
                strings={set.strings}
                value={currentValue}
                onChange={handleAnswer}
                lang={language}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex w-full max-w-xl items-center justify-between">
        <Button variant="ghost" onClick={goBack}>
          {set.strings.back}
        </Button>
        <Button onClick={goNext} disabled={!canAdvance}>
          {isLast ? set.strings.submit : set.strings.next}
        </Button>
      </div>
    </div>
  );
}