"use client";

import * as React from "react";

export function UseLayoutEffectDemo() {
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null);
  const [rect, setRect] = React.useState({ width: 0, height: 0 });

  React.useLayoutEffect(() => {
    if (ref) {
      const { width, height } = ref.getBoundingClientRect();
      setRect({ width: Math.round(width), height: Math.round(height) });
    }
  }, [ref]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">useLayoutEffect Demo</h2>
      <div
        ref={(node) => setRef(node)}
        className="h-24 w-full rounded-2xl bg-primary/10 border-2 border-dashed border-primary/30 flex items-center justify-center"
      >
        <p className="text-sm text-muted-foreground">Resize-aware container</p>
      </div>
      <p className="text-xs text-muted-foreground font-mono">
        Dimensions: {rect.width} x {rect.height}px
      </p>
    </div>
  );
}
