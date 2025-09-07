"use client"
import React from "react";

const skills = [
  { name: "ReactJS", icon: "react" },
  { name: "NextJS", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Motion", icon: "motion" },
  { name: "Sanity", icon: "sanity" },
  { name: "Contentful", icon: "contentful" },
  { name: "NodeJS", icon: "nodejs" },
  { name: "ExpressJS", icon: "expressjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Prisma", icon: "prisma" },
  { name: "Zustand", icon: "zustand" },
  { name: "Zod", icon: "zod" },
  { name: "pnpm", icon: "pnpm" },
  { name: "Bun", icon: "bun" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Vercel", icon: "vercel" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Expo", icon: "expo" },
  { name: "Clerk", icon: "clerk" },
  { name: "Linux", icon: "linux" },
];

// Dummy icon mapping (replace with actual SVGs or icon components)
const iconMap = {
  react: <span className="text-cyan-400">&#9883;</span>,
  nextjs: <span className="text-white">&#9673;</span>,
  typescript: <span className="text-blue-500 font-bold">TS</span>,
  tailwindcss: <span className="text-cyan-300">~</span>,
  motion: <span className="text-blue-400">M</span>,
  sanity: <span className="text-red-500">S</span>,
  contentful: <span className="text-blue-400">C</span>,
  nodejs: <span className="text-green-500">JS</span>,
  expressjs: <span className="text-gray-300">ex</span>,
  postgresql: <span className="text-blue-800">&#128220;</span>,
  mongodb: <span className="text-green-600">&#127793;</span>,
  prisma: <span className="text-indigo-400">P</span>,
  zustand: <span className="text-orange-400">Z</span>,
  zod: <span className="text-blue-400">Z</span>,
  pnpm: <span className="text-orange-400">&#9632;</span>,
  bun: <span className="text-gray-200">B</span>,
  git: <span className="text-orange-500">&#128273;</span>,
  github: <span className="text-white">&#128187;</span>,
  vercel: <span className="text-white">&#9650;</span>,
  aws: <span className="text-yellow-400">&#9733;</span>,
  docker: <span className="text-blue-400">&#128758;</span>,
  expo: <span className="text-gray-300">&#9651;</span>,
  clerk: <span className="text-purple-400">C</span>,
  linux: <span className="text-yellow-400">&#9788;</span>,
};

export default function SkillSection() {
  return (
    <section id="skills" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 -mt-20 pt-20">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-6xl md:text-7xl font-serif font-light text-white mb-6 text-center drop-shadow-lg">
          Skill I <span className="text-purple-400 italic font-semibold">Have</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {skills.map(skill => (
            <div key={skill.name} className="flex items-center gap-2 bg-[#18181b] px-5 py-2 rounded-xl shadow text-white text-lg font-medium hover:scale-105 transition-transform border border-neutral-800">
              <span className="text-2xl">{iconMap[skill.icon]}</span>
              {skill.name}
            </div>
          ))}
        </div>
        
        {/* Download Resume and Social Links */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            {/* Download Resume Button */}
            <a
              href="/resume/sourabh-birada-resume.pdf"
              download
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="mailto:sourabh.birada@example.com"
              className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-red-500 text-white rounded-full transition-all duration-300 hover:scale-110 group"
              title="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            
            <a
              href="https://linkedin.com/in/sourabh-birada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="https://github.com/sourabh-birada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-gray-700 text-white rounded-full transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
