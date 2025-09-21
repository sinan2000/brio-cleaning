"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  lazyMount?: boolean; // mounts children only when visible
  threshold?: number | number[];
  root?: Element | null; // for scrollable containers
  rootMargin?: string;
  reserveHeight?: number; // px reserved when lazyMount=true
}

export function Reveal({
  children,
  className,
  once = true,
  lazyMount = false, // default to false so element occupies space
  threshold = 0.15,
  root = null,
  rootMargin = "0px",
  reserveHeight = 0, // only used when lazyMount=true
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [once, threshold, root, rootMargin]);

  // When lazyMount is true: render a spacer until it becomes visible.
  if (lazyMount && !visible) {
    return (
      <div
        ref={ref}
        style={reserveHeight ? { minHeight: reserveHeight } : undefined}
        className={cn(className)}
      />
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-500 will-change-transform",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
