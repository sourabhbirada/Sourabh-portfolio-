"use client"
import React, { useRef, useEffect, useState } from "react";

export default function ExperienceSection() {
    const experiences = [
  {
    date: "JAN 2025 - AUG 2025",
    company: "Sportsdunia",
    location: "Remote work",
    remote: true,
    role: "Full Stack Developer",
    description: [
      "Designed and developed Cricopinion CMS modules including posts, media management, and comprehensive content management systems for sports analytics platform.",
      "Created multiple databases and APIs for CMS to ensure scalability and reliability, supporting high-traffic cricket content delivery across multiple platforms.",
      "Implemented live cricket scores and updates using WebSockets for real-time performance, providing instant match updates to thousands of concurrent users.",
      "Optimized database queries for better efficiency and speed, reducing response times by 40% and improving overall system performance.",
      "Worked with Docker for containerization and optimized AWS infrastructure to reduce costs while maintaining high availability and scalability.",
      "Built comprehensive user authentication and authorization systems including login, signup, and role-based access control for different user types."
    ],
    skills: ["Node.js", "React", "MongoDB", "WebSockets", "Docker", "AWS", "API Development", "Database Optimization", "Authentication", "Real-time Systems"]
  },
  {
    date: "JUL 2024 - SEP 2024",
    company: "Upflairs",
    location: "Remote work", 
    remote: true,
    role: "DevOps Internship Training",
    description: [
      "Gained hands-on experience with Docker, Kubernetes, AWS, and comprehensive monitoring tools for enterprise-level infrastructure management.",
      "Learned to build CI/CD pipelines using modern DevOps practices, implementing automated testing, deployment, and monitoring solutions.",
      "Mastered Infrastructure as Code (IaC) principles using tools like Terraform and CloudFormation for scalable and maintainable infrastructure deployment."
    ],
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "CloudFormation", "Monitoring", "Infrastructure as Code", "DevOps", "Automation"]
  },
];

  const timelineRefs = useRef([]);
  const timelineContainerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY + window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  function getSingleDotPosition(scrollY) {
    if (!timelineContainerRef.current) return 0;
    
    const containerRect = timelineContainerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top + window.scrollY;
    const containerHeight = containerRect.height;
    
    // Calculate progress through the entire timeline (0 to 1)
    const progress = Math.min(Math.max((scrollY - containerTop) / containerHeight, 0), 1);
    
    // Return position as percentage of container height minus dot size
    return progress * (containerHeight - 24); // 24px is dot height
  }
  function highlightKeywords(text) {
  // Highlight keywords in description
  const keywords = [
    "Cricopinion CMS modules",
    "posts, media management",
    "multiple databases and APIs",
    "scalability and reliability",
    "live cricket scores and updates",
    "WebSockets for real-time performance",
    "database queries",
    "40% and improving overall system performance",
    "Docker for containerization",
    "optimized AWS infrastructure",
    "user authentication and authorization systems",
    "role-based access control",
    "Docker, Kubernetes, AWS",
    "monitoring tools",
    "CI/CD pipelines",
    "Infrastructure as Code (IaC)",
    "Terraform and CloudFormation",
    "open-source projects with 15,000+ Github stars",
    "developer communities",
    "innovative solutions and best practices"
  ];
  let result = text;
  keywords.forEach(kw => {
    result = result.replace(
      kw,
      `<span class='text-gradient font-semibold'>${kw}</span>`
    );
  });
  return result;
  }

  return (
    <section id="experience" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 py-16 pb-8">
      <div className="flex flex-col items-center w-full">
        <h2 className="uppercase text-sm tracking-widest text-gray-300 mb-2 text-center">The Experience</h2>
        <h1 className="text-6xl md:text-7xl font-serif font-light text-white mb-10 text-center drop-shadow-lg">
          Experience That Brings <span className="text-gradient font-semibold italic">Ideas to Life</span>
        </h1>
        <div className="max-w-5xl w-full mx-auto relative" ref={timelineContainerRef}>
          {/* Single Continuous White Timeline Line */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-1 bg-white" style={{ marginLeft: '2rem', zIndex: 1 }}></div>
          
          {/* Single Moving Dot */}
          <div className="hidden md:block absolute left-1/3" style={{ marginLeft: '2rem', zIndex: 2 }}>
            <div
              className="w-6 h-6 rounded-full border-4 border-white shadow-lg dot-animate"
              style={{
                position: 'absolute',
                top: `${getSingleDotPosition(scrollPos)}px`,
                left: '50%',
                transform: 'translate(-50%, 0)',
                background: `linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)`,
                transition: 'top 0.3s cubic-bezier(0.4,0,0.2,1)',
              }}
            ></div>
          </div>
          
          <div className="flex flex-col gap-16">
            {experiences.map((exp, idx) => (
              <div key={exp.company} className="flex flex-col md:flex-row gap-8 items-start relative" ref={el => timelineRefs.current[idx] = el}>
                {/* Left: Date & Company */}
                <div className="md:w-1/3 flex flex-col items-start">
                  <span className="uppercase text-xs text-gray-400 mb-2">{exp.date}</span>
                  <h2 className="text-3xl font-serif text-white mb-2">{exp.company}</h2>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <span className="text-lg">&#128205;</span>
                    <span>{exp.location}</span>
                  </div>
                  {exp.remote && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-lg">&#128188;</span>
                      <span className="font-semibold">Remote work</span>
                    </div>
                  )}
                </div>
                {/* Empty space for timeline alignment */}
                <div className="hidden md:block mx-4" style={{ minWidth: '2rem' }}></div>
              {/* Right: Role & Description */}
              <div className="md:w-2/3">
                <h3 className="text-2xl font-serif text-white mb-2">{exp.role}</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-300">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="mb-2"><span dangerouslySetInnerHTML={{__html: highlightKeywords(desc)}} /></li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="bg-[#18181b] px-4 py-2 rounded-xl text-white text-sm font-medium border border-neutral-800 shadow hover:scale-105 transition-transform">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
            </div>
      </div>
  
      </div>
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #a855f7, #ec4899, #f59e42);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .dot-animate {
          box-shadow: 0 0 16px #a855f7, 0 0 32px #6366f1;
          transition: top 0.5s cubic-bezier(0.4,0,0.2,1), background 0.5s;
        }
      `}</style>
    </section>

      )

    }



  
