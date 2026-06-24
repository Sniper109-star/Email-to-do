"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
  className?: string;
}

export function PullToRefresh({ onRefresh, children, className }: PullToRefreshProps) {
  const y = useMotionValue(0);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [canRefresh, setCanRefresh] = React.useState(false);
  const threshold = 80;

  const rotate = useTransform(y, [0, threshold], [0, 180]);
  const opacity = useTransform(y, [0, threshold], [0, 1]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).scrollTop === 0) {
      setCanRefresh(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent, element: HTMLElement) => {
    if (!canRefresh || isRefreshing) return;
    const touch = e.touches[0];
    const dist = touch.clientY - e.currentTarget.getBoundingClientRect().top;
    if (dist > 0 && element.scrollTop === 0) {
      y.set(Math.min(dist * 0.4, 100));
    }
  };

  const handleTouchEnd = async () => {
    if (y.get() > threshold && canRefresh && !isRefreshing) {
      setIsRefreshing(true);
      y.set(60);
      await onRefresh();
      setIsRefreshing(false);
    }
    y.set(0);
    setCanRefresh(false);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y, rotate, opacity }}>
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-20">
          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12a9 9 0 11-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
        </div>
      </motion.div>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => handleTouchMove(e, e.currentTarget)}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div style={{ y: isRefreshing ? 60 : 0 }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
