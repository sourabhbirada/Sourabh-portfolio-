"use client"
import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#f4f1ea",
      padding: "60px 40px 36px",
      fontFamily: "'Syne', sans-serif",
      borderTop: "2px solid #1a1a1a",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
        .footer-link {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #999;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #1a1a1a; }
        .social-btn {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 20px;
          border: 1px solid #c8c4bb;
          background: transparent;
          color: #555;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }
        .social-btn:hover {
          background: #1a1a1a;
          color: #f4f1ea;
          border-color: #1a1a1a;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Big name */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{
            fontSize: "clamp(48px, 10vw, 100px)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 0.88,
            color: "#1a1a1a",
            textTransform: "uppercase",
          }}>
            LET'S<br />
            <span style={{ background: "#1a1a1a", color: "#f4f1ea", padding: "0 12px" }}>WORK</span><br />
            TOGETHER
          </h2>
        </div>

        {/* Email CTA */}
        <a
          href="mailto:sourabhbirada@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "#1a1a1a",
            color: "#f4f1ea",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            padding: "14px 32px",
            borderRadius: 60,
            textDecoration: "none",
            marginBottom: 48,
            transition: "background 0.2s",
            border: "2px solid #1a1a1a",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#c8ff57"; e.currentTarget.style.color = "#1a1a1a"; e.currentTarget.style.borderColor = "#c8ff57"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#f4f1ea"; e.currentTarget.style.borderColor = "#1a1a1a"; }}
        >
          <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          sourabhbirada@gmail.com
        </a>

        {/* Thin rule */}
        <div style={{ height: "0.5px", background: "#c8c4bb", marginBottom: 28 }} />

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#aaa", letterSpacing: "0.1em" }}>
            © 2025 Sourabh Birada — All rights reserved
          </span>

          {/* Social links */}
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { label: "GitHub",   href: "https://github.com/sourabhbirada" },
              { label: "LinkedIn", href: "https://linkedin.com/in/sourabhbirada" },
              { label: "Twitter",  href: "https://twitter.com/sourabhbirada" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn">
                {s.label}
              </a>
            ))}
          </div>

          <a href="#" style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "#bbb", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}