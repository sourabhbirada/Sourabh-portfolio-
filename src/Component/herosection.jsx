"use client"
import React, { useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "Creative Engineer", "Architect"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((p) => (p + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] bg-[#1a1a1a] flex flex-col px-6 md:px-10 pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">

      {/* Keyframe animations — only kept here because Tailwind can't define @keyframes */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: heroFadeUp 0.9s 0.10s both; }
        .fade-up-2 { animation: heroFadeUp 0.9s 0.25s both; }
        .fade-up-3 { animation: heroFadeUp 0.9s 0.40s both; }
        .fade-up-4 { animation: heroFadeUp 0.9s 0.55s both; }
        .hero-scroll-line::before {
          content: '';
          display: inline-block;
          width: 40px;
          height: 0.5px;
          background: rgba(244,241,234,0.2);
          margin-right: 12px;
          vertical-align: middle;
        }
      `}</style>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Masthead top bar */}
      {/* <div className="absolute top-20 left-10 right-10 flex justify-between items-center">
        <span
          className="text-[9px] tracking-[0.18em] uppercase text-[#f4f1ea]/25"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Portfolio · 2025
        </span>
        <span
          className="text-[9px] tracking-[0.18em] uppercase text-[#f4f1ea]/25"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Sourabh Birada
        </span>
      </div> */}

      <div className="w-full max-w-[1520px] mx-auto flex flex-col min-h-[calc(100svh-10rem)]">
        {/* Horizontal rule */}
        <div className="fade-up-1 h-px bg-white/10 mb-10 md:mb-14" />

        <div className="flex-1 flex flex-col justify-center">
          {/* Role badge */}
          <div className="fade-up-2 mb-6 md:mb-7">
            <span
              className="inline-block text-[11px] tracking-[0.14em] uppercase bg-[#c8ff57] text-[#1a1a1a] px-4 py-1.5 rounded-full font-medium transition-all duration-300"
              style={{
                fontFamily: "'DM Mono', monospace",
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(-6px)",
              }}
            >
              {roles[roleIndex]}
            </span>
          </div>

          {/* Name */}
          <h1
            className="fade-up-3 font-extrabold uppercase text-[#f4f1ea] leading-[0.88] mb-9"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(52px, 9vw, 110px)",
              letterSpacing: "-0.04em",
            }}
          >
            Sourabh<br />
            <span className="text-[#c8ff57]">Birada</span>
          </h1>

          {/* Bottom row */}
          <div className="fade-up-4 flex flex-wrap justify-between items-end gap-6">

            {/* Description */}
            <p
              className="text-[12px] tracking-[0.06em] text-[#f4f1ea]/45 leading-[1.9] max-w-[340px]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Building elegant, scalable web experiences<br />
              with React, Next.js & Node.js.<br />
              Clean code. Thoughtful design.
            </p>

            {/* CTA + scroll label */}
            <div className="flex items-center gap-4">
              <a
                href="#aboutme"
                className="text-[10px] tracking-[0.14em] uppercase text-[#f4f1ea] px-7 py-3 rounded-full border border-[#f4f1ea]/25 no-underline transition-all duration-200 hover:bg-[#c8ff57] hover:text-[#1a1a1a] hover:border-[#c8ff57]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Explore Work
              </a>
              <span
                className="hero-scroll-line text-[9px] tracking-[0.18em] uppercase text-[#f4f1ea]/30"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Scroll down
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}