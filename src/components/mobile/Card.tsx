"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AnyMotionDiv = any;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  interactive?: boolean;
  onPress?: () => void;
}

export function Card({
  className,
  variant = "default",
  padding = "md",
  interactive = false,
  onPress,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-card border border-border",
    elevated: "bg-card shadow-lg shadow-black/5 border border-border",
    outlined: "bg-transparent border-2 border-border",
    glass: "bg-card/70 backdrop-blur-xl border border-white/10 shadow-lg",
  };

  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const MotionDiv = interactive ? require("framer-motion").motion.div : "div";

  return (
    <MotionDiv
      className={cn(
        "rounded-3xl transition-all duration-200",
        variants[variant],
        paddings[padding],
        interactive && "active:scale-[0.98] cursor-pointer",
        className
      )}
      onClick={onPress}
      {...(interactive ? { whileTap: { scale: 0.98 } } : {})}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}
