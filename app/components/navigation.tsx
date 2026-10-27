"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, portfolio } from "../data/portfolio";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigation = (href: string) => {
    setActiveSection(href);
    setIsOpen(false);
  };

  const renderNavigationLinks = (mobile = false) => navigation.map((item) => {
    const isActive = activeSection === item.href;
    return <a key={item.href} className={`group relative inline-flex text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[#557768] focus-visible:text-[#557768] ${isActive ? "text-[#557768]" : ""} ${mobile ? "rounded-lg px-3 py-2.5 hover:bg-[var(--surface)]" : "py-2"}`} href={item.href} aria-current={isActive ? "page" : undefined} onClick={() => handleNavigation(item.href)}>{item.label}<span aria-hidden="true" className={`pointer-events-none absolute left-0 h-0.5 w-full origin-left bg-[#557768] transition-transform duration-300 ease-out ${mobile ? "bottom-1.5 left-3 w-[calc(100%_-_1.5rem)]" : "-bottom-1"} ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"}`} /></a>;
  });

  return <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/90 backdrop-blur-md"><nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary navigation"><a href="#home" className="text-xl font-semibold tracking-[-0.025em] text-[var(--ink)] transition-colors duration-300 hover:text-[#557768] md:text-2xl" onClick={() => handleNavigation("#home")}>{portfolio.name}</a><div className="hidden items-center gap-7 md:flex">{renderNavigationLinks()}<a href="#contact" className="button button-small">Let&apos;s Connect</a></div><button type="button" className="inline-flex rounded-lg p-2 text-[var(--ink)] outline-offset-4 md:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>{isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}</button></nav>{isOpen && <div className="border-t border-[var(--border)] bg-[var(--background)] px-5 pb-5 pt-3 md:hidden"><div className="mx-auto grid max-w-6xl gap-1">{renderNavigationLinks(true)}<a href="#contact" className="button mt-2 justify-center" onClick={() => handleNavigation("#contact")}>Let&apos;s Connect</a></div></div>}</header>;
}
