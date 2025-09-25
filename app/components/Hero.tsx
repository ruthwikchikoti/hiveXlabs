"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Threads from "./Threads";
import GlassSurface from "./GlassSurface";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.05,
        immediateRender: false,
      });
      gsap.from(".hero-sub", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out", delay: 0.15, immediateRender: false });
      gsap.from(".hero-cta > *", { opacity: 0, y: 20, duration: 0.7, ease: "power2.out", delay: 0.25, stagger: 0.06, immediateRender: false });
      gsap.from(".hero-metrics > *", { opacity: 0, y: 14, duration: 0.7, ease: "power2.out", delay: 0.35, stagger: 0.05, immediateRender: false });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const renderTitle = (text: string) => (
    <h1 className="hero-title relative z-10 text-balance text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
      {text.split(" ").map((word, idx) => (
        <span key={idx} className="inline-block mr-2 text-white">
          {word}
        </span>
      ))}
    </h1>
  );

  return (
    <section ref={containerRef} className="relative isolate min-h-[92vh] w-full overflow-hidden bg-black text-gray-200">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)] blur-3xl" />

      <div className="absolute inset-0">
        <Threads color={[0.7, 0.7, 0.7]} amplitude={1.8} distance={0.25} enableMouseInteraction={true} />
      </div>

      {/* Logo at top left corner */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <div className="text-white text-2xl sm:text-3xl tracking-wide">
          <span className="font-normal">hive</span><span className="font-bold">X</span><span className="font-normal">labs</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 text-center md:pt-32">
        {renderTitle("Design. Build. Ship. Repeat.")}
        <p className="hero-sub mt-4 sm:mt-6 max-w-3xl text-pretty text-base sm:text-lg md:text-xl text-gray-300 px-2">
          We craft modern web apps, AI-powered products, and design systems for companies that move fast and care about quality.
        </p>

        <div className="hero-cta mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto rounded-full bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-base md:text-lg font-semibold text-black transition hover:bg-gray-200 text-center min-h-[48px] flex items-center justify-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-6 sm:px-7 py-3 sm:py-3.5 text-base md:text-lg font-semibold text-white/90 transition hover:bg-white/10 text-center min-h-[48px] flex items-center justify-center"
          >
            Contact Us
          </a>
        </div>

        <div className="hero-metrics mt-12 sm:mt-16 grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 px-2">
          <GlassSurface borderRadius={20} backgroundOpacity={0.1} className="p-4 sm:p-5 md:p-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">50+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-1.5">Products shipped</div>
            </div>
          </GlassSurface>
          <GlassSurface borderRadius={20} backgroundOpacity={0.1} className="p-4 sm:p-5 md:p-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">98%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-1.5">Client satisfaction</div>
            </div>
          </GlassSurface>
          <GlassSurface borderRadius={20} backgroundOpacity={0.1} className="p-4 sm:p-5 md:p-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">3x</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-1.5">Faster delivery</div>
            </div>
          </GlassSurface>
          <GlassSurface borderRadius={20} backgroundOpacity={0.1} className="p-4 sm:p-5 md:p-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-1.5">Support & care</div>
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
}
