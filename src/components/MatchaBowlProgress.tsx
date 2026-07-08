import { motion } from "framer-motion";

interface Props {
  percent: number; // 0-100
  label: string;
}

export function MatchaBowlProgress({ percent, label }: Props) {
  // Bowl interior roughly spans y=28 (rim) to y=78 (base) inside a 100x100 viewbox.
  const rimY = 30;
  const baseY = 76;
  const fillY = baseY - ((baseY - rimY) * percent) / 100;

  return (
    <div className="flex flex-col items-center gap-3">
      <style>{`
        @keyframes rise {
          0% {
            transform: translate(-50%, 0) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -25px) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50px) scale(1.6);
            opacity: 0;
          }
        }
        .smoke-wisp {
          position: absolute;
          bottom: 74%;
          left: 50%;
          width: 12px;
          height: 28px;
          background: rgba(129, 152, 67, 0.47);
          border-radius: 50%;
          animation: rise 3s infinite ease-in-out;
          filter: blur(4px); 
        }
      `}</style>

      <div className="relative h-24 w-24">
        <div className="smoke-wisp" style={{ animationDelay: "0s", left: "44%" }} />
        <div className="smoke-wisp" style={{ animationDelay: "0.8s", left: "50%" }} />
        <div className="smoke-wisp" style={{ animationDelay: "1.6s", left: "56%" }} />

        <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
          <defs>
            <clipPath id="bowlClip">
              <path d="M22 30 Q22 82 50 82 Q78 82 78 30 Z" />
            </clipPath>
            <linearGradient id="matchaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9CC069" />
              <stop offset="100%" stopColor="#5C7A3F" />
            </linearGradient>
          </defs>

          {/* bowl exterior */}
          <path
            d="M18 28 Q18 84 50 84 Q82 84 82 28 Z"
            fill="#F6F2E7"
            stroke="#A67C52"
            strokeWidth="2.5"
          />
          {/* rim */}
          <ellipse cx="50" cy="28" rx="32" ry="7" fill="#EFE6D0" stroke="#A67C52" strokeWidth="2.5" />

          {/* liquid fill, clipped to bowl interior */}
          <g clipPath="url(#bowlClip)">
            <motion.rect
              x="15"
              width="70"
              fill="url(#matchaGradient)"
              initial={false}
              animate={{ y: fillY, height: 90 - fillY }}
              transition={{ type: "spring", stiffness: 90, damping: 16 }}
            />
            {/* subtle liquid surface ripple line */}
            <motion.ellipse
              cx="50"
              rx="26"
              ry="3"
              fill="#BFD69A"
              initial={false}
              animate={{ cy: fillY }}
              transition={{ type: "spring", stiffness: 90, damping: 16 }}
            />
          </g>

          {/* rim highlight drawn over fill for a clean edge */}
          <ellipse cx="50" cy="28" rx="32" ry="7" fill="none" stroke="#A67C52" strokeWidth="2.5" />
        </svg>
      </div>
      <span className="font-mono text-xs tracking-wide text-matcha-600">{label}</span>
    </div>
  );
}