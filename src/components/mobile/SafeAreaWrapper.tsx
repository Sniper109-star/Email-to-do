import { type ReactNode } from "react";

interface SafeAreaWrapperProps {
  children: ReactNode;
  className?: string;
  edges?: ("top" | "bottom" | "left" | "right")[];
}

export function SafeAreaWrapper({ children, className = "", edges = ["top", "bottom"] }: SafeAreaWrapperProps) {
  const edgeClasses: Record<string, string> = {
    top: "pt-safe-top",
    bottom: "pb-safe-bottom",
    left: "pl-safe-left",
    right: "pr-safe-right",
  };

  return (
    <div className={`${edges.map(edge => edgeClasses[edge]).join(" ")} ${className}`}>
      {children}
    </div>
  );
}
