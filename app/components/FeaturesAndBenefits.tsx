"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Benefit {
  text: string;
  highlight?: string;
}

interface FeatureData {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

const featuresData: FeatureData[] = [
  {
    title: "Full‑Stack Product Development",
    subtitle: "From idea to production-ready apps.",
    benefits: [
      {
        text: "Design and ship modern web apps with Next.js, TypeScript, and great DX.",
        highlight: "modern web apps",
      },
      {
        text: "Ship faster with component systems, CI/CD, and review apps.",
        highlight: "component systems, CI/CD",
      },
      {
        text: "Partner from MVP to scale with maintainable, testable code.",
        highlight: "MVP to scale",
      },
    ],
  },
  {
    title: "AI & Automation",
    subtitle: "Integrate AI where it creates leverage.",
    benefits: [
      {
        text: "Embed AI into workflows using RAG, prompts, and evaluations.",
        highlight: "RAG, prompts, and evaluations",
      },
      {
        text: "Automate content, support, and insights with reliable guardrails.",
        highlight: "reliable guardrails",
      },
      {
        text: "Measure impact to iterate toward meaningful outcomes.",
        highlight: "meaningful outcomes",
      },
    ],
  },
  {
    title: "Design Systems & Performance",
    subtitle: "Beautiful, fast, and consistent at scale.",
    benefits: [
      {
        text: "Build design systems that accelerate teams across products.",
        highlight: "design systems",
      },
      {
        text: "Optimize Core Web Vitals and perceived performance.",
        highlight: "Core Web Vitals",
      },
      {
        text: "Harden accessibility, security, and observability from day one.",
        highlight: "accessibility, security, and observability",
      },
    ],
  },
];

export default function FeaturesAndBenefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pairRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      pairRefs.current.forEach((pairContainer) => {
        if (!pairContainer) return;

        const featureElement = pairContainer.querySelector(".feature-content");
        const benefitsContent =
          pairContainer.querySelector(".benefits-content");
        const benefitItems = pairContainer.querySelectorAll(".benefit-item");

        if (!featureElement || !benefitsContent) return;

        // Pin the feature until the benefits content reaches the specified point
        ScrollTrigger.create({
          trigger: benefitsContent,
          start: "top top",
          end: "bottom 35%", // Now this will work! Adjust this percentage as needed
          pin: featureElement,
          pinSpacing: false,
          pinType: "fixed",
          anticipatePin: 1,
        });

        // Animate feature entrance from top
        gsap.fromTo(
          featureElement,
          {
            opacity: 0,
            y: -30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pairContainer,
              start: "top 80%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );

        // Animate benefits appearing progressively
        benefitItems.forEach((item) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 60,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "top 60%",
                scrub: 1,
              },
            }
          );
        });
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToPairRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !pairRefs.current.includes(el)) {
      pairRefs.current[index] = el;
    }
  };

  return (
    <div ref={containerRef} className="relative bg-black text-zinc-200">
      <div className="pt-0">
        {featuresData.map((feature, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => addToPairRefs(el, index)}
              className="relative z-10 mb-4"
            >
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Feature Content - Will be pinned */}
                  <div
                    className={`feature-content ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="max-w-lg pt-16">
                      <h2 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
                        <span className="text-zinc-400">
                          {feature.title.split(" ")[0]}
                        </span>
                        <br />
                        <span>
                          {feature.title.split(" ").slice(1).join(" ")}
                        </span>
                      </h2>
                      <p className="text-xl lg:text-2xl text-zinc-300 font-medium leading-relaxed">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Benefits Container - Controls the pin duration */}
                  <div
                    className={`benefits-container ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="benefits-content rounded-3xl p-12 lg:p-16 xl:p-24 space-y-12 lg:space-y-16 border border-white/10 bg-white/5 backdrop-blur-sm">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="benefit-item flex items-start space-x-6"
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mt-2 bg-white/10 border border-white/10">
                            <svg
                              className="w-7 h-7 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-2xl lg:text-3xl text-zinc-200 leading-relaxed font-medium">
                            {benefit.highlight ? (
                              <>
                                {benefit.text
                                  .replace(benefit.highlight, "")
                                  .trim()
                                  .replace(/\.$/, "")}
                                <strong className="text-white font-bold">
                                  {" " + benefit.highlight}
                                </strong>
                              </>
                            ) : (
                              benefit.text
                            )}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Extra spacing to allow proper scroll duration */}
                    <div className="h-9"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
