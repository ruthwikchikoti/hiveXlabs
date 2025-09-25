"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Wallet, 
  TrendingUp, 
  Truck, 
  Bot, 
  Brain, 
  Briefcase,
  Plus
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

const projects: Project[] = [
  {
    title: "Dating App",
    description:
      "Modern matchmaking platform with real-time messaging, advanced filtering, and AI-powered compatibility matching.",
    tags: ["React Native", "Socket.io", "AI Matching"],
  },
  {
    title: "Pocket App",
    description:
      "Personal finance tracker with expense categorization, budget planning, and smart spending insights.",
    tags: ["Flutter", "Machine Learning", "Analytics"],
  },
  {
    title: "Finance App",
    description:
      "Comprehensive financial management system with investment tracking, portfolio analysis, and market insights.",
    tags: ["Next.js", "Chart.js", "Real-time Data"],
  },
  {
    title: "Food Delivery App",
    description:
      "End-to-end delivery platform with restaurant management, real-time tracking, and seamless payment integration.",
    tags: ["React Native", "GPS Tracking", "Payment Gateway"],
  },
  {
    title: "Vending Machine Software",
    description:
      "IoT-enabled vending machine management system with inventory tracking, remote monitoring, and analytics dashboard.",
    tags: ["IoT", "Node.js", "Dashboard"],
  },
  {
    title: "Mental Health App",
    description:
      "Wellness companion featuring mood tracking, meditation guides, therapy session booking, and progress analytics.",
    tags: ["React Native", "Healthcare", "AI Insights"],
  },
  {
    title: "Events & Jobs Portal",
    description:
      "All-in-one platform for job listings, event management, project collaboration with advanced search and matching.",
    tags: ["Full-stack", "Search Engine", "Collaboration"],
  },
];

export default function ProjectShowcase() {

  const gradients = [
    "from-pink-500 to-rose-500",
    "from-blue-500 to-cyan-500", 
    "from-green-500 to-emerald-500",
    "from-purple-500 to-violet-500",
    "from-yellow-500 to-orange-500",
    "from-indigo-500 to-blue-500",
    "from-red-500 to-pink-500",
  ];
  
  const IconComponents = [Heart, Wallet, TrendingUp, Truck, Bot, Brain, Briefcase];

  return (
    <section id="projects" className="relative bg-black min-h-screen text-zinc-200">
      {/* Header Section */}
      <div className="relative z-10 pt-16 sm:pt-24 pb-8 sm:pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">Our Project Portfolio</h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-zinc-400 px-2">Building innovative solutions across industries</p>
        </div>
      </div>

      {/* Horizontal Scrolling Projects */}
      <div className="relative py-12">
        {/* Scroll Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 pb-4" style={{ width: 'max-content' }}>
            {projects.map((project, i) => {
              const currentGradient = gradients[i] || gradients[0];
              const CurrentIcon = IconComponents[i] || IconComponents[0];
              
              return (
                <motion.div
                  key={`project-${i}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-black/50 border border-white/15 backdrop-blur-xl hover:bg-black/70 transition-all duration-500 ease-out shadow-2xl rounded-3xl p-4 sm:p-6 group cursor-pointer flex-shrink-0 w-72 sm:w-80 md:w-96"
                >

                  {/* Icon Section */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CurrentIcon className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-white/50 to-transparent rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={`${i}-${tagIndex}-${tag}`}
                        className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs text-zinc-200 hover:bg-white/20 transition-colors backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-zinc-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
                </motion.div>
              );
            })}
            
            {/* View All Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: projects.length * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl hover:from-white/15 hover:to-white/10 transition-all duration-500 ease-out shadow-2xl rounded-3xl p-4 sm:p-6 cursor-pointer flex-shrink-0 w-72 sm:w-80 md:w-96 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Plus className="h-8 w-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                And many more!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mb-3 sm:mb-4 px-2">
                Explore our complete portfolio of innovative projects and solutions.
              </p>
              <div className="px-3 sm:px-4 py-2 rounded-full border border-white/30 bg-white/10 text-xs sm:text-sm text-white hover:bg-white/20 transition-colors relative group/button">
                View All Projects
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  Coming Soon
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4 sm:mt-6 px-4">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/40"></div>
            <span className="text-xs text-zinc-400">Scroll horizontally to explore</span>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>

    </section>
  );
}

