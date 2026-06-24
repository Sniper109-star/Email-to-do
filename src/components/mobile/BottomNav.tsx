"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 backdrop-blur-lg safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.path);
          const Icon = require("lucide-react")[item.icon] as LucideIcon;
          return (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className="flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-200"
            >
              <div className={`p-2 rounded-xl transition-colors duration-200 ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
