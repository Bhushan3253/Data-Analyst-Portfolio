import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  darkBg?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  darkBg = false,
}: SectionWrapperProps) {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 ${
        darkBg ? "bg-navy-900/50" : ""
      } ${className}`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
