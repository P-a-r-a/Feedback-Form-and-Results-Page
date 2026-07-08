import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-bowl border border-matcha-100 bg-white/70 backdrop-blur-sm shadow-[0_8px_30px_rgba(55,75,37,0.08)]",
        className
      )}
      {...props}
    />
  );
}
