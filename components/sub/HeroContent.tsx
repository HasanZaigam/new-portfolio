"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 mt-20 sm:mt-28 lg:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center lg:text-start">
        {/* Animated Tags */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 text-sm text-white"
          >
            <SparklesIcon className="text-[#b49bff] h-5 w-5" />
            <h1>Fullstack Developer Portfolio</h1>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 text-sm text-white"
          >
            <SparklesIcon className="text-[#b49bff] h-5 w-5" />
            <h1>Blockchain Learner Portfolio</h1>
          </motion.div>
        </div>

        {/* Hero Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-[600px] mx-auto lg:mx-0"
        >
          <span>
            I am a Full Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web Developer
            </span>{" "}
            and Web3 Learner
          </span>
        </motion.div>

        {/* Hero Subtitle */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-4 max-w-[600px] mx-auto lg:mx-0 px-4 sm:px-0"
        >
          I have 2+ years of experience in Full Stack Development and I&apos;m
          currently learning Web3. Passionate about building high-quality web
          applications.
        </motion.p>

        {/* Download Resume Button */}
        <motion.a
          href="/Hasan_resume.pdf"
          download="Hasan_Resume.pdf"
          variants={slideInFromLeft(1)}
          className="py-2 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0 transition-transform transform hover:scale-105 hover:brightness-110 active:scale-95"
        >
          Download Resume
        </motion.a>
      </div>

      {/* Right - Profile Image with Glow Effect */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-[500px] h-auto flex justify-center items-center relative mt-[-20px] sm:mt-10 lg:mt-0"
      >
        {/* Outer Glow Frame */}
        <div className="relative w-[220px] sm:w-[280px] md:w-[300px] lg:w-[350px] h-auto rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 to-cyan-500 p-1">
          <div className="w-full h-full rounded-full bg-[#060606] flex justify-center items-center overflow-hidden">
            {/* Profile Image */}
            <Image
              src="/DGWFjmty_400x400.jpg"
              alt="Profile Picture"
              height={300}
              width={300}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
