"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, portfolio } from "../data/portfolio";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/90 backdrop-blur-md"><nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary navigation"><a href="#home" className="text-sm font-semibold tracking-[-0.02em] text-[var(--ink)]">{portfolio.name}</a><div className="hidden items-center gap-7 md:flex">{navigation.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}<a href="#contact" className="button button-small">Let&apos;s Connect</a></div><button type="button" className="inline-flex rounded-lg p-2 text-[var(--ink)] outline-offset-4 md:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>{isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}</button></nav>{isOpen && <div className="border-t border-[var(--border)] bg-[var(--background)] px-5 pb-5 pt-3 md:hidden"><div className="mx-auto grid max-w-6xl gap-1">{navigation.map((item) => <a key={item.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--ink)]" href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>)}<a href="#contact" className="button mt-2 justify-center" onClick={() => setIsOpen(false)}>Let&apos;s Connect</a></div></div>}</header>;
}
