"use client"
import React, { useState } from "react";

const experiences = [
  {
    role: "DevOps Trainee",
    company: "Upflairs",
    period: "Jul 2024 — Sep 2024",
    type: "Training",
    desc: "Completed practical DevOps training focused on Linux workflows, CI/CD fundamentals, containerization, and deployment best practices.",
    tags: ["DevOps", "Linux", "CI/CD", "Docker"],
  },
  {
    role: "Backend Developer",
    company: "Project Work",
    period: "Feb 2025 — Aug 2025",
    type: "Internship",
    desc: "Built backend modules and APIs, handled database integration, and improved server-side performance across real-world project workflows.",
    tags: ["Node.js", "Express", "REST API", "MySQL"],
  },
  {
    role: "Full Stack Developer",
    company: "CollegeWollege",
    period: "Sep 2025 — Present",
    type: "Full-time",
    desc: "Working on a CRM lead management system, building backend services, handling DevOps tasks, and supporting AWS-based development and deployments.",
    tags: ["CRM", "Lead Management", "DevOps", "AWS"],
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" style={{
      background: "#1a1a1a",
      padding: "100px 40px",
      fontFamily: "'Syne', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .exp-row {
          border-top: 0.5px solid rgba(255,255,255,0.08);
          padding: 28px 0;
          cursor: pointer;
          transition: padding 0.3s;
        }
        .exp-row:last-child { border-bottom: 0.5px solid rgba(255,255,255,0.08); }
        .exp-row:hover .exp-role { color: #c8ff57; }
        .exp-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 16px;
          flex-wrap: wrap;
        }
        .exp-role {
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #f4f1ea;
          transition: color 0.2s;
        }
        .exp-company {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(244,241,234,0.35);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .exp-period {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(244,241,234,0.3);
          letter-spacing: 0.08em;
        }
        .exp-type {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          padding: 3px 10px;
          border-radius: 20px;
          border: 0.5px solid rgba(200,255,87,0.3);
          color: #c8ff57;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .exp-body {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s;
        }
        .exp-desc {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(244,241,234,0.5);
          line-height: 2;
          padding-top: 16px;
          max-width: 600px;
        }
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 14px;
        }
        .exp-tag {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          padding: 4px 12px;
          border-radius: 20px;
          border: 0.5px solid rgba(255,255,255,0.12);
          color: rgba(244,241,234,0.45);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .exp-arrow {
          font-size: 20px;
          color: rgba(244,241,234,0.2);
          transition: transform 0.3s, color 0.2s;
          flex-shrink: 0;
        }
        .exp-arrow.open {
          transform: rotate(45deg);
          color: #c8ff57;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Masthead */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: "rgba(244,241,234,0.25)", textTransform: "uppercase" }}>
            Portfolio / Experience
          </span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(244,241,234,0.2)" }}>04</span>
        </div>
        <div style={{ height: 2, background: "rgba(244,241,234,0.12)", marginBottom: 48 }} />

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontSize: "clamp(40px,6vw,68px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.9, color: "#f4f1ea", textTransform: "uppercase" }}>
            WHERE<br />
            I'VE <span style={{ background: "#c8ff57", color: "#1a1a1a", padding: "0 8px", display: "inline-block" }}>WORKED</span>
          </h2>
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "rgba(244,241,234,0.35)", lineHeight: 1.9, maxWidth: 240 }}>
            Roles and projects that<br />shaped how I build things.
          </p>
        </div>

        {/* Experience list */}
        <div>
          {experiences.map((exp, i) => (
            <div key={i} className="exp-row" onClick={() => setExpanded(expanded === i ? -1 : i)}>
              <div className="exp-top">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company" style={{ marginTop: 4 }}>{exp.company}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-type">{exp.type}</span>
                  <span className={`exp-arrow${expanded === i ? " open" : ""}`}>+</span>
                </div>
              </div>
              <div className="exp-body" style={{ maxHeight: expanded === i ? 200 : 0, opacity: expanded === i ? 1 : 0 }}>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-tags">
                  {exp.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}