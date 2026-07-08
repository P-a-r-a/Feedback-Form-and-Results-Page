import { motion } from "framer-motion";
import { Language } from "@/types";
import { languageLabels, questionSets } from "@/data/questions";
import { Card } from "@/components/ui/card";

interface Props {
  onSelect: (lang: Language) => void;
}

const order: Language[] = ["en", "si", "ta"];

export function LanguageSelect({ onSelect }: Props) {
  return (
    <motion.div
      key="language-select"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center px-6 text-center"
    >
      <span className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-bamboo">
        Feedback Form
      </span>
      <h1 className="mb-2 font-display text-4xl font-medium text-matcha-900">
        {questionSets.en.strings.languagePrompt}
      </h1>
      <p className="mb-10 max-w-sm text-matcha-700">{questionSets.en.strings.languageSubtitle}</p>

      <div className="grid w-full gap-4">
        {order.map((lang, i) => (
          <motion.button
            key={lang}
            onClick={() => onSelect(lang)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.3 }}
          >
            <Card
              className="flex items-center justify-center gap-4 px-6 py-5 text-center transition-transform hover:-translate-y-0.5 hover:border-matcha-300"
              lang={lang}
            >
              <span className="font-display text-xl text-matcha-900 ">{languageLabels[lang]}</span>
            </Card>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
