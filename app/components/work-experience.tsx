"use client";

import { ShieldCheck, Target, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { experience } from "../data/portfolio";
import { SectionHeading } from "./section-heading";

const responsibilityIcons = { shield: ShieldCheck, target: Target, users: Users };

export function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <section id="experience" ref={sectionRef} className={`section scroll-mt-20 ${isVisible ? "experience-visible" : ""}`} aria-label="Professional Experience"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="experience-reveal grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-24"><div><SectionHeading eyebrow="My Journey" title="Professional Experience" description="Every experience has shaped my approach to problem-solving, attention to detail, and working effectively with others." /><div className="mt-10 border-l-2 border-[var(--sage)] pl-5"><p className="text-sm font-semibold text-[var(--sage)]">{experience.company}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">{experience.position}</h3><p className="mt-3 text-sm font-medium text-[var(--muted)]">{experience.period}</p></div></div><div><p className="experience-reveal text-lg leading-8 text-[var(--muted)]">{experience.description}</p><div className="mt-9 grid gap-4">{experience.responsibilities.map((responsibility) => { const Icon = responsibilityIcons[responsibility.icon]; return <article key={responsibility.title} className="experience-reveal experience-card"><div className="icon-tile"><Icon size={20} aria-hidden="true" /></div><div><h3 className="font-semibold text-[var(--ink)]">{responsibility.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{responsibility.description}</p></div></article>; })}</div></div></div></div></section>;
}
