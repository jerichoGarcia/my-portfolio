"use client";

import { ArrowRight, AtSign, BriefcaseBusiness, Laptop, Mail, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { portfolio } from "../data/portfolio";

const emailProviders = [
  { id: "gmail", label: "Gmail", description: "Compose using Gmail", icon: Mail, external: true, createHref: (email: string, subject: string) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}` },
  { id: "yahoo", label: "Yahoo Mail", description: "Compose using Yahoo Mail", icon: AtSign, external: true, createHref: (email: string, subject: string) => `https://compose.mail.yahoo.com/?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}` },
  { id: "outlook", label: "Outlook", description: "Compose using Outlook", icon: BriefcaseBusiness, external: true, createHref: (email: string, subject: string) => `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}` },
  { id: "default", label: "Default Email App", description: "Use your device's email application", icon: Laptop, external: false, createHref: (email: string, subject: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}` },
] as const;

export function EmailProviderModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);

  const openModal = () => {
    isClosingRef.current = false;
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeModal = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsClosing(true);
    window.setTimeout(() => {
      isClosingRef.current = false;
      setIsOpen(false);
      setIsClosing(false);
    }, 220);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [isOpen, closeModal]);

  return <><button ref={triggerRef} type="button" className="button mt-8" onClick={openModal}>Send an Email <Mail size={17} aria-hidden="true" /></button>{isOpen && <div className={`email-modal-overlay ${isClosing ? "email-modal-closing" : ""}`} onClick={(event) => { if (event.target === event.currentTarget) closeModal(); }}><div ref={dialogRef} className="email-modal" role="dialog" aria-modal="true" aria-labelledby="email-provider-title" aria-describedby="email-provider-description"><div className="flex items-start justify-between gap-5"><div><h2 id="email-provider-title" className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">Choose Your Email</h2><p id="email-provider-description" className="mt-2 text-sm leading-6 text-[var(--muted)]">Select your preferred email service to get in touch with me.</p></div><button ref={closeButtonRef} type="button" className="email-modal-close" aria-label="Close email provider selection" onClick={closeModal}><X size={20} aria-hidden="true" /></button></div><div className="mt-7 grid gap-3">{emailProviders.map((provider) => { const Icon = provider.icon; const href = provider.createHref(portfolio.email, portfolio.emailSubject); return <a key={provider.id} href={href} className="email-provider-option" target={provider.external ? "_blank" : undefined} rel={provider.external ? "noopener noreferrer" : undefined} onClick={closeModal}><span className="email-provider-icon"><Icon size={20} aria-hidden="true" /></span><span><span className="block font-semibold text-[var(--ink)]">{provider.label}</span><span className="mt-1 block text-sm text-[var(--muted)]">{provider.description}</span></span><ArrowRight className="email-provider-arrow ml-auto" size={18} aria-hidden="true" /></a>; })}</div></div></div>}</>;
}
