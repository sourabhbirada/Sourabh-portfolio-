"use client"
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "About",      href: "#aboutme" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Resume",     href: "https://drive.google.com/file/d/YOUR_FILE_ID/view", external: true },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "px-6 py-3" : "px-10 py-5"
      }`}
    >
      
      {!scrolled && (
        <div className="absolute top-0 left-10 right-10 h-px bg-[#c8c4bb]" />
      )}

      <nav
        className={`flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-[#f4f1ea]/90 backdrop-blur-md border border-[#c8c4bb] rounded-full px-6 py-2.5 shadow-sm max-w-fit mx-auto"
            : "bg-transparent max-w-[1200px] mx-auto"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className={`font-extrabold text-2xl  no-underline transition-all duration-300 ${
            scrolled ? "mr-8 text-[#1a1a1a]" : "mr-0 text-[#1cdb12]"
          }`}
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
        >
          SB
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map(({ label, href, external }) => (
            
            <li key={label} className="relative group">
              <a
                href={href}
                className={`text-[12px] tracking-[0.14em] uppercase ${scrolled ? 'text-[#1a1a1a]' : 'text-[#1cdb12]'} no-underline transition-opacity duration-200 hover:opacity-50`}
                style={{ fontFamily: "'DM Mono', monospace" }}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {label}
              </a>
              {/* Underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#1cdb12] group-hover:w-full transition-all duration-300 ease-out" />
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <button
          className={`text-[10px] tracking-[0.14em] uppercase bg-[#1a1a1a] text-[#f4f1ea] rounded-full px-5 py-2.5 cursor-pointer border-none transition-all duration-200 hover:bg-[#c8ff57] hover:text-[#1a1a1a] hover:scale-[1.03] ${
            scrolled ? "ml-6" : "ml-8"
          }`}
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Hire Me
        </button>
      </nav>
    </header>
  );
};

export default Header;