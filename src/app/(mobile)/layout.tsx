"use client";

import * as React from "react";
import { BottomNav } from "@/components/mobile/BottomNav";

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main className="pb-20 max-w-lg mx-auto px-4">{children}</main>
      <BottomNav />
    </div>
  );
}
