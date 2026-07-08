import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body font-medium text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed";
    const variants: Record<string, string> = {
      primary: "bg-matcha-500 text-cream hover:bg-matcha-600 active:scale-[0.98] shadow-sm",
      outline: "border border-matcha-300 text-matcha-700 hover:bg-matcha-50 active:scale-[0.98]",
      ghost: "text-matcha-600 hover:bg-matcha-50",
    };
    return <button ref={ref} className={cn(base, variants[variant], className)} {...props} />;
  }
);
Button.displayName = "Button";
