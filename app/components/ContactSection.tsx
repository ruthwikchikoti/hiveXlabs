"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", { opacity: 0, y: 16, duration: 0.7, ease: "power2.out" });
      gsap.from(".contact-card", { opacity: 0, y: 22, duration: 0.7, ease: "power2.out", delay: 0.1 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="bg-black py-16 sm:py-24 text-zinc-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="contact-title text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Let&apos;s build something great</h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 px-2">Tell us about your product vision. We&apos;ll get back within 24 hours.</p>

        <div className="contact-card mt-8 sm:mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 text-left backdrop-blur-sm">
          <form action="mailto:hello@hivexlabs.com" method="post" encType="text/plain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30 min-h-[48px]" placeholder="Name" name="name" />
              <input className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30 min-h-[48px]" placeholder="Email" type="email" name="email" />
            </div>
            <input className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30 min-h-[48px]" placeholder="Company" name="company" />
            <textarea className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30 resize-none" placeholder="Project brief" rows={4} name="brief" />

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-xs text-zinc-500 text-center sm:text-left">Prefer email? hello@hivexlabs.com</p>
              <button type="submit" className="w-full sm:w-auto rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 min-h-[48px] flex items-center justify-center">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

