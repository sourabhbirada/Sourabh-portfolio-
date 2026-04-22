"use client"
import React, { useEffect, useState } from "react";

const roles = ["Creative Engineer", "Full-Stack Developer", "Open Source Contributor"];

export default function AboutMe() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((p) => (p + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="aboutme" style={{
      background: "#f4f1ea",
      padding: "100px 40px",
      fontFamily: "'Syne', sans-serif",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-anim { animation: fadeInUp 0.8s both; }

        .about-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: 1px solid #c8c4bb;
          padding: 5px 14px;
          border-radius: 20px;
          color: #999;
          display: inline-block;
          margin-bottom: 28px;
        }
        .about-headline {
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.92;
          color: #1a1a1a;
          text-transform: uppercase;
          margin-bottom: 40px;
        }
        .about-headline .accent {
          background: #1a1a1a;
          color: #f4f1ea;
          padding: 0 8px;
        }
        .about-headline .role-swap {
          color: #1a1a1a;
          border-bottom: 3px solid #c8ff57;
          transition: opacity 0.3s;
          display: inline-block;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: start;
          max-width: 1100px;
        }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 36px; } }
        .about-body {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: #555550;
          line-height: 2;
        }
        .about-body strong { color: #1a1a1a; font-weight: 500; }
        .about-quote {
          font-size: clamp(18px, 2.5vw, 26px);
          font-weight: 700;
          font-style: italic;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          line-height: 1.3;
          padding: 28px 0;
          border-top: 0.5px solid #c8c4bb;
          border-bottom: 0.5px solid #c8c4bb;
          margin-bottom: 28px;
        }
        .stat-row {
          display: flex;
          gap: 32px;
        }
        .stat-item { }
        .stat-num {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #1a1a1a;
          line-height: 1;
        }
        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #aaa;
          margin-top: 4px;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Masthead */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: "#aaa", textTransform: "uppercase" }}>
            Portfolio / About
          </span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "#bbb" }}>02</span>
        </div>
        <div style={{ height: 2, background: "#1a1a1a", marginBottom: 40 }} />

        <span className="about-tag about-anim" style={{ animationDelay: "0.05s" }}>More about me</span>

        <h1 className="about-headline about-anim" style={{ animationDelay: "0.15s" }}>
          I'M <span className="accent">SOURABH</span>,<br />
          A{" "}
          <span
            className="role-swap"
            style={{ opacity: fade ? 1 : 0 }}
          >
            {roles[roleIndex]}
          </span>
        </h1>

        <div className="about-grid about-anim" style={{ animationDelay: "0.3s" }}>
          {/* Left: body text */}
          <div>
            <p className="about-body">
              A proactive full-stack developer who enjoys building
              <strong> elegant, scalable web experiences</strong>. I love transforming
              ideas into clean interfaces and powerful systems using React, Next.js, and Node.js.
              <br /><br />
              When I'm not coding, I explore new ideas, refine my craft, and stay
              curious about how technology shapes the world.
              <br /><br />
              <strong>I wake up every day excited to create something meaningful.</strong>
            </p>
          </div>

          {/* Right: quote + stats */}
          <div>
            <p className="about-quote">
              "Code is my canvas,<br />curiosity is my compass."
            </p>
            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-num">1+</div>
                <div className="stat-label">Years exp.</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">3+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">25</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}