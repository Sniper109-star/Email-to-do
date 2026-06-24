"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function BottomSheet({ isOpen, onClose, title, children, className }: BottomSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={onClose}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className={cn("absolute bottom-0 left-0 right-0 bg-background rounded-t-[32px] safe-bottom max-h-[85vh] overflow-hidden", className)}>
                <div className="sticky top-0 bg-background/80 backdrop-blur-lg z-10 px-4 py-3 border-b border-border/50 flex items-center justify-between">
                  {title && <h3 className="text-lg font-bold text-foreground">{title}</h3>}
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-muted/50 active:bg-muted transition-colors ml-auto"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="overflow-y-auto overscroll-contain">{children}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
