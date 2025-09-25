"use client";

import * as React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  asChild?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  asChild = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ioRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const id = window.setTimeout(() => setIsVisible(true), delay);
          return () => window.clearTimeout(id);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (ioRef.current) obs.observe(ioRef.current);
    return () => {
      if (ioRef.current) obs.unobserve(ioRef.current);
    };
  }, [delay]);

  const base =
    `transition-all duration-1000 ease-out ` +
    (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8") +
    ` ${className} ` +
    `motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0`;

  // Helper to merge our ref into the child's ref
  function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
    return (value: T) => {
      for (const r of refs) {
        if (!r) continue;
        if (typeof r === "function") r(value);
        else
          try {
            (r as React.MutableRefObject<T | null>).current = value;
          } catch {}
      }
    };
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    const childRef = (child as any).ref as React.Ref<any> | undefined;
    const mergedRef = mergeRefs<any>(ioRef as any, childRef);

    return React.cloneElement(child, {
      ref: mergedRef, // will work if child forwards ref
      className: [child.props.className, base].filter(Boolean).join(" "),
    });
  }

  return (
    <div ref={ioRef} className={base}>
      {children}
    </div>
  );
}
