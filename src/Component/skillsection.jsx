"use client"
import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript",     icon: "JS",  color: "#F7DF1E", bg: "#2a2600", category: "lang" },
  { name: "React",          icon: "⚛",   color: "#61DAFB", bg: "#001e26", category: "frontend" },
  { name: "Next.js",        icon: "▲",   color: "#ffffff", bg: "#111111", category: "frontend" },
  { name: "TypeScript",     icon: "TS",  color: "#3178C6", bg: "#0a1a30", category: "lang" },
  { name: "Node.js",        icon: "⬡",   color: "#5FA04E", bg: "#0d200d", category: "backend" },
  { name: "Express",        icon: "E",   color: "#cccccc", bg: "#1a1a1a", category: "backend" },
  { name: "MongoDB",        icon: "🍃",  color: "#47A248", bg: "#0c1f0c", category: "db" },
  { name: "MySQL",          icon: "🐬",  color: "#4479A1", bg: "#0a1520", category: "db" },
  { name: "PostgreSQL",     icon: "🐘",  color: "#4169E1", bg: "#0c1230", category: "db" },
  { name: "Redis",          icon: "◆",   color: "#FF4438", bg: "#2a0a08", category: "db" },
  { name: "Supabase",       icon: "⚡",  color: "#3ECF8E", bg: "#071a12", category: "db" },
  { name: "Firebase",       icon: "🔥",  color: "#FFCA28", bg: "#261d00", category: "db" },
  { name: "Docker",         icon: "🐳",  color: "#2496ED", bg: "#071828", category: "devops" },
  { name: "Kubernetes",     icon: "☸",   color: "#326CE5", bg: "#091230", category: "devops" },
  { name: "AWS",            icon: "☁",   color: "#FF9900", bg: "#261800", category: "cloud" },
  { name: "Google Cloud",   icon: "☁",   color: "#4285F4", bg: "#091428", category: "cloud" },
  { name: "Git",            icon: "◎",   color: "#F05032", bg: "#260c08", category: "tools" },
  { name: "GitHub",         icon: "★",   color: "#ffffff", bg: "#111111", category: "tools" },
  { name: "Vercel",         icon: "▲",   color: "#ffffff", bg: "#111111", category: "tools" },
  { name: "Render",         icon: "◆",   color: "#a855f7", bg: "#150d26", category: "cloud" },
  { name: "Linux",          icon: "🐧",  color: "#FCC624", bg: "#261e00", category: "tools" },
  { name: "CSS",            icon: "#",   color: "#1572B6", bg: "#091828", category: "frontend" },
  { name: "WordPress",      icon: "W",   color: "#21759B", bg: "#07161e", category: "tools" },
  { name: "Notion",         icon: "◫",   color: "#ffffff", bg: "#111111", category: "tools" },
  { name: "Problem Solving",icon: "🧩",  color: "#fb923c", bg: "#261200", category: "soft" },
];

const categories = [
  { id: "all",      label: "All" },
  { id: "lang",     label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend",  label: "Backend" },
  { id: "db",       label: "Database" },
  { id: "devops",   label: "DevOps" },
  { id: "cloud",    label: "Cloud" },
  { id: "tools",    label: "Tools" },
];

export default function SkillSection() {
  const [active, setActive] = useState("all");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animate bars on section enter
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = active === "all" ? skills : skills.filter(s => s.category === active);

  return (
    <div
      id="skills"
      ref={sectionRef}
      style={{ fontFamily: "'Syne', sans-serif", background: "#f4f1ea" }}
      className="w-full px-6 py-14 md:px-16 overflow-hidden"
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .skill-card {
          transition: transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s;
          animation: fadeUp 0.5s both;
        }
        .skill-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
          z-index: 2;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cat-btn {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          border: 1px solid #c8c4bb;
          background: transparent;
          color: #888;
          cursor: pointer;
          transition: all 0.18s;
          white-space: nowrap;
        }
        .cat-btn:hover { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
        .cat-btn.active { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1a1a1a;
          color: #f4f1ea;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.02em;
          padding: 14px 32px;
          border-radius: 60px;
          text-decoration: none;
          border: 2px solid #1a1a1a;
          transition: all 0.2s;
        }
        .resume-btn:hover {
          background: transparent;
          color: #1a1a1a;
        }
        .resume-btn:hover .resume-icon { color: #1a1a1a; }
        .grain-overlay {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto">
        <div className="grain-overlay" />

        {/* ── MASTHEAD ── */}
        <div className="flex justify-between items-start mb-2">
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: "#aaa", textTransform: "uppercase" }}>
            Portfolio / Skills
          </span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "#bbb", textAlign: "right", lineHeight: 1.7 }}>
            SOURABH BIRADA<br />VOL. 01 · 2025
          </span>
        </div>

        {/* ── THICK RULE ── */}
        <div style={{ height: 2, background: "#1a1a1a", marginBottom: 20 }} />

        {/* ── HERO ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.16em", color: "#999", textTransform: "uppercase", marginBottom: 8 }}>
              Full-stack developer
            </p>
            <h1 style={{ fontSize: "clamp(44px,7vw,72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.9, color: "#1a1a1a", textTransform: "uppercase" }}>
              WHAT<br />
              I{" "}
              <span style={{ background: "#1a1a1a", color: "#f4f1ea", padding: "0 8px", display: "inline-block" }}>
                KNOW
              </span>
            </h1>
          </div>
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#888", lineHeight: 1.8, maxWidth: 280 }}>
            25+ technologies across frontend,<br />
            backend, cloud & design — all battle-tested<br />
            in real production environments.
          </p>
        </div>

        {/* ── CATEGORY FILTERS ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(c => (
            <button
              key={c.id}
              className={`cat-btn ${active === c.id ? "active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* ── SKILL GRID ── */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(148px, 1fr))" }}
        >
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{
                background: skill.bg,
                border: `1px solid ${skill.color}22`,
                borderRadius: 12,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                animationDelay: `${i * 40}ms`,
                cursor: "default",
              }}
            >
              {/* Icon box */}
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: `${skill.color}18`,
                border: `1px solid ${skill.color}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: skill.icon.length <= 2 ? 13 : 18,
                fontWeight: 700,
                color: skill.color,
                flexShrink: 0,
                fontFamily: "'DM Mono', monospace",
              }}>
                {skill.icon}
              </div>
              <span style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#e8e4dd",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* ── THIN RULE ── */}
        <div style={{ height: "0.5px", background: "#c8c4bb", margin: "32px 0 28px" }} />

        {/* ── FOOTER: STATS + RESUME ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Stats */}
          <div className="flex gap-10">
            {[
              { num: "1+",  label: "Years exp." },
              { num: "3+", label: "Projects shipped" },
              { num: "25",  label: "Technologies" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div style={{ fontSize: 28, fontWeight: 800, color: "#1a1a1a", letterSpacing: "-0.04em" }}>
                  {s.num}
                </div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "#aaa", marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Resume button */}
          <a
            href="/resume/sourabh-birada-resume.pdf"
            download
            className="resume-btn"
          >
            <svg className="resume-icon" style={{ width: 18, height: 18 }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}