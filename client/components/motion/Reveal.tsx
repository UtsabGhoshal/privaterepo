import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = PropsWithChildren<{
  delay?: number; // seconds
  y?: number; // px translate on enter
  className?: string;
}>;

export function Reveal({ children, delay = 0, y = 16, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [prefersReducedMotion]);

  const style: React.CSSProperties = prefersReducedMotion
    ? undefined
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 700ms ease-out ${delay}s, transform 700ms ease-out ${delay}s`,
        willChange: "opacity, transform",
      };

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
}
