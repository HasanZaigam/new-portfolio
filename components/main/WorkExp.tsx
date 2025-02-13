"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "OperateCrypto",
    type: "Part-time",
    start: "Jan 2025",
    end: "Present",
    location: "Remote - New Delhi, India",
    logo: "/1727675732008.jpeg",
    description:
      "Developing blockchain-based financial solutions, optimizing smart contracts, and enhancing user experience.",
  },
  {
    id: 2,
    role: "Campus Leader",
    company: "Code for GovTech (C4GT)",
    type: "Self-employed",
    start: "Aug 2024",
    end: "Jan 2025",
    location: "Remote - Delhi, India",
    logo: "code_for_govtech_logo.jpeg",
    description:
      "Advocating open-source development, mentoring students, and leading community-driven projects for GovTech initiatives.",
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Brandlane",
    type: "Internship",
    start: "Aug 2024",
    end: "Sep 2024",
    location: "Hybrid - Delhi, India",
    logo: "brandlane_logo.jpeg",
    description:
      "Designed and developed dynamic e-commerce sites using Shopify and WordPress, focusing on UI/UX and performance optimization.",
  },
  {
    id: 4,
    role: "Core Team Member",
    company: "Cryptoholic_Soc",
    type: "Core Team Member",
    start: "Dec 2024",
    end: "Present",
    location: "Community",
    logo: "/JEdAG9Kp_400x400.jpg",
    description:
      "Organizing Web3 and blockchain workshops, collaborating on DeFi projects, and engaging with crypto communities.",
  },
];

// Sort experiences by start date (Newest First)
const sortedExperiences = experiences.sort(
  (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
);

const ExperienceTimeline = () => {
  return (
    <div className="relative py-24 flex flex-col items-center bg-[#060606] bg-transparent text-white">
      {/* Heading - Fixed Overlap Issue */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-20">
        Work Experience
      </h2>

      {/* Glowing Timeline Line */}
      <div className="absolute w-[3px] left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-purple-500 to-cyan-500 h-full blur-[1px] opacity-70 animate-pulse"></div>

      <div className="w-full max-w-5xl">
        {sortedExperiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`relative flex justify-between items-center w-full mb-16 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            variants={index % 2 === 0 ? slideInFromLeft(0.3) : slideInFromRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Floating Neon Card */}
            <div
              className={`relative w-5/12 p-6 rounded-xl transition-all duration-300 bg-[#121212] border border-purple-500/50 shadow-md hover:scale-[1.05] hover:shadow-cyan-500/50 ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              {/* Job Type Badge */}
              <div className="absolute top-[-18px] left-5 bg-black/80 text-white px-4 py-1 text-sm font-bold rounded-full shadow-md border border-purple-500">
                {exp.type}
              </div>

              <div className="flex items-center mb-4">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  className="w-14 h-14 mr-4 rounded-lg shadow-md object-contain border-2 border-cyan-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-sm text-gray-200">{exp.company}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-3">
                <span className="font-medium text-cyan-300">{exp.start}</span> -{" "}
                <span className="font-medium text-purple-300">{exp.end}</span>
              </p>
              <p className="text-gray-300 text-sm mb-4">{exp.location}</p>

              {/* Short Role Description */}
              <p className="text-sm text-gray-200 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
