"use client";

import { BriefcaseBusiness, Code2, Database, GraduationCap, Network, ServerCog } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { certifications, education } from "../data/portfolio";
import { SectionHeading } from "./section-heading";

const certificationIcons = { database: Database, code: Code2, network: Network, server: ServerCog, business: BriefcaseBusiness };

export function EducationCertifications() {
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
    }, { threshold: 0.15 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <section id="education" ref={sectionRef} className={`section scroll-mt-20 ${isVisible ? "qualifications-visible" : ""}`} aria-label="Education and certifications"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="qualification-reveal"><SectionHeading eyebrow="Qualifications" title="Education & Certifications" description="A foundation in information technology, complemented by technical learning across databases, programming, networking, systems administration, and business software." /></div><article className="education-card qualification-reveal mt-10"><div className="icon-tile"><GraduationCap size={21} aria-hidden="true" /></div><div className="min-w-0"><h3 className="text-xl font-semibold tracking-[-0.025em] text-[var(--ink)] sm:text-2xl">{education.degree}</h3><p className="mt-2 font-medium text-[var(--sage)]">{education.institution}</p><p className="education-period mt-4">{education.period}</p></div></article><div className="mt-12"><p className="section-eyebrow qualification-reveal">Credentials & Training</p><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{certifications.map((certification) => { const Icon = certificationIcons[certification.icon]; return <article key={certification.title} className="certification-card qualification-reveal"><div className="icon-tile"><Icon size={20} aria-hidden="true" /></div><h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">{certification.title}</h3><p className="mt-3 text-sm font-medium text-[var(--sage)]">{certification.category}</p></article>; })}</div></div></div></section>;
}
