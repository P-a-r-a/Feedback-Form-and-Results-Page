import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Question, LanguageStrings } from "@/types";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import { cn } from "@/lib/utils";

interface Props {
  question: Question;
  strings: LanguageStrings;
  value: string;
  onChange: (value: string) => void;
  lang: string;
}

export function QuestionCard({ question, strings, value, onChange, lang }: Props) {
  return (
    <Card className="w-full px-8 py-10 sm:px-12 sm:py-14" lang={lang}>
      <h2 className="mb-8 text-center font-display text-2xl font-medium leading-snug text-matcha-900 sm:text-3xl">
        {question.text}
      </h2>

      {question.type === "yesno" && (
        <div className="mx-auto grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 justify-items-stretch">
          {[
            { v: "yes", label: strings.yes },
            { v: "no", label: strings.no },
          ].map((opt) => (
            <OptionPill key={opt.v} active={value === opt.v} onClick={() => onChange(opt.v)}>
              {opt.label}
            </OptionPill>
          ))}
        </div>
      )}

      {question.type === "choice" && (
        <div 
          className={cn(
            "mx-auto grid max-w-xl gap-3 justify-items-stretch",
            question.options?.length === 3 
              ? "grid-cols-1 sm:grid-cols-3 max-w-2xl" // Spreads 3 columns evenly
              : "grid-cols-1 sm:grid-cols-2" // Standard clean 2 column grid
          )}
        >
          {question.options?.map((opt) => (
            <OptionPill key={opt.value} active={value === opt.value} onClick={() => onChange(opt.value)}>
              {opt.label}
            </OptionPill>
          ))}
        </div>
      )}

      {question.type === "text" && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={strings.placeholderText}
          rows={4}
          className="w-full rounded-2xl border border-matcha-200 bg-white/80 p-4 font-body text-matcha-900 outline-none placeholder:text-matcha-400 focus:border-matcha-400"
        />
      )}

      {question.type === "stars" && (
        <div className="flex justify-center">
          <StarRating value={value ? Number(value) : 0} onChange={(n) => onChange(String(n))} />
        </div>
      )}
    </Card>
  );
}

function OptionPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "w-full flex items-center justify-center rounded-2xl border px-5 py-4 text-center font-body text-sm font-medium transition-colors sm:text-base min-h-[56px]",
        active
          ? "border-matcha-500 bg-matcha-500 text-cream shadow-sm"
          : "border-matcha-200 bg-white/60 text-matcha-800 hover:border-matcha-300 hover:bg-matcha-50"
      )}
    >
      <span className="text-center block w-full">{children}</span>
    </motion.button>
  );
}