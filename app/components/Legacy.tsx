"use client"

import React from "react"
import LogoLoop, { LogoItem } from "./logoLoop"

const createLogoItem = (company: { name: string; logo: string }): LogoItem => {
  const getLogoStyle = (name: string) => {
    switch (name) {
      case "scaler":
        return "text-2xl font-bold text-zinc-200 uppercase tracking-wide"
      case "interviewbit":
        return "text-xl font-semibold text-zinc-200 capitalize"
      case "EpicureRobotics":
        return "text-xl font-bold text-zinc-200"
      case "Swifey":
        return "text-2xl font-bold text-zinc-200 italic"
      case "Pocket":
        return "text-xl font-semibold text-zinc-200 uppercase tracking-wider"
      case "OpenVision":
        return "text-xl font-bold text-zinc-200"
      case "Pazcare":
        return "text-xl font-semibold text-zinc-200 capitalize"
      case "DarkHorse":
        return "text-xl font-bold text-zinc-200"
      case "Psychera":
        return "text-xl font-semibold text-zinc-200 capitalize"
      default:
        return "text-xl font-semibold text-zinc-200"
    }
  }

  const getDisplayName = (name: string, logo: string) => {
    switch (name) {
      case "scaler":
        return "SCALER"
      case "interviewbit":
        return "InterviewBit"
      case "EpicureRobotics":
        return "Epicure Robotics"
      case "Swifey":
        return "Swifey"
      case "Pocket":
        return "POCKET"
      case "OpenVision":
        return "OpenVision"
      case "Pazcare":
        return "PazCare"
      case "DarkHorse":
        return "Dark Horse"
      case "Psychera":
        return "Psychera"
      default:
        return logo
    }
  }

  return {
    node: (
      <div className={getLogoStyle(company.name)}>
        {getDisplayName(company.name, company.logo)}
      </div>
    ),
    title: company.name,
  }
}

const companies = [
  { name: "scaler", logo: "scaler" },
  { name: "interviewbit", logo: "interviewbit" },
  { name: "EpicureRobotics", logo: "EpicureRobotics" },
  { name: "Swifey", logo: "Swifey" },
  { name: "Pocket", logo: "Pocket" },
  { name: "OpenVision", logo: "OpenVision" },
  { name: "Pazcare", logo: "Pazcare" },
  { name: "Dark Horse", logo: "DarkHorse" },
  { name: "Psychera", logo: "Psychera" },
]

const logoItems: LogoItem[] = companies.map(createLogoItem)

export default function LogoMarquee() {
  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-zinc-200 mb-12">
          Trusted by innovative companies
        </h2>

        <div className="mt-8">
          <LogoLoop 
            logos={logoItems}
            speed={120}
            direction="left"
            logoHeight={64}
            gap={64}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#000000"
            ariaLabel="Partner company logos"
            className="py-4"
          />
        </div>
      </div>
    </div>
  )
}
