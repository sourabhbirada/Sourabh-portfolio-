"use client"
import React from "react";

const skills = [
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "expressjs" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Redis", icon: "redis" },
  { name: "Supabase", icon: "supabase" },
  { name: "Firebase", icon: "firebase" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "k8s" },
  { name: "AWS", icon: "aws" },
  { name: "Google Cloud", icon: "gcp" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Vercel", icon: "vercel" },
  { name: "Render", icon: "render" },
  { name: "Linux", icon: "linux" },
  { name: "CSS", icon: "css" },
  { name: "WordPress", icon: "wordpress" },
  { name: "Notion", icon: "notion" },
  { name: "Problem Solving", icon: "problemsolving" },
];

// Dummy icon mapping (replace with actual SVGs or icon components)
const iconMap = {
  javascript: <span className="text-yellow-400 font-bold">JS</span>,
  react: <span className="text-cyan-400">⚛</span>,
  nextjs: <span className="text-white">▲</span>,
  typescript: <span className="text-blue-500 font-bold">TS</span>,
  nodejs: <span className="text-green-500">◉</span>,
  expressjs: <span className="text-gray-300">E</span>,
  mongodb: <span className="text-green-600">🍃</span>,
  mysql: <span className="text-blue-500">🐬</span>,
  postgresql: <span className="text-blue-700">🐘</span>,
  redis: <span className="text-red-500">◆</span>,
  supabase: <span className="text-green-400">⚡</span>,
  firebase: <span className="text-orange-500">🔥</span>,
  docker: <span className="text-blue-400">🐳</span>,
  k8s: <span className="text-blue-600">☸</span>,
  aws: <span className="text-orange-400">☁</span>,
  gcp: <span className="text-blue-500">☁</span>,
  git: <span className="text-orange-500">◎</span>,
  github: <span className="text-white">★</span>,
  vercel: <span className="text-white">▲</span>,
  render: <span className="text-purple-400">◆</span>,
  linux: <span className="text-yellow-400">🐧</span>,
  css: <span className="text-blue-400 font-bold">#</span>,
  wordpress: <span className="text-blue-500">W</span>,
  notion: <span className="text-white">◫</span>,
  problemsolving: <span className="text-orange-400">🧩</span>,
};

export default function SkillSection() {
  return (
    <section id="skills" className="relative w-full flex flex-col items-center justify-center bg-black px-4 py-6">
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
        
        {/* Download Resume Button */}
        <div className="mt-12">
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
      </div>
    </section>
  );
}
