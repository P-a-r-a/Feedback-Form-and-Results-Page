import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function StarRating({ value, onChange }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4, 5].map((n) => {
        const active = (hovered ?? value) >= n;
        return (
          <motion.button
            key={n}
            type="button"
            aria-label={`${n} stars`}
            onClick={() => onChange(n)}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(null)}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.15 }}
            className="p-1"
          >
            <Star
              size={40}
              className={cn(
                "transition-colors",
                active ? "fill-matcha-500 text-matcha-500" : "fill-transparent text-matcha-300"
              )}
            />
          </motion.button>
        );
      })}
    </div>
  );
}
