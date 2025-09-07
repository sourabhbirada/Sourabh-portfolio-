"use client"
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/90 py-10 px-4 flex flex-col items-center animate-fade-in">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center relative">
            
          <div className="w-full flex items-center justify-center relative" style={{height: '150px'}}>
            
            
            <div
              className="absolute size-[10px] rounded-full bg-black p-2  animate-spin-slow z-10"
              style={{top: '55%', left: '95%'}}
            >
              <div
                className="absolute top-1/2 left-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
              >
                <svg
                  className="transform-origin-center-center"
                  viewBox="0 0 100 100"
                  overflow="visible"
                  fill="black"
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    inset: 0,
                    transformOrigin: 'center center'
                  }}
                >
                  <path
                    id="curve-wnxkz4"
                    d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
                    strokeWidth="none"
                    fill="transparent"
                  ></path>
                  <text>
                    <textPath
                      href="#curve-wnxkz4"
                      startOffset="0"
                      dominantBaseline="hanging"
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        wordSpacing: 5,
                        letterSpacing: 2.1,
                        fill: "rgba(242, 242, 242, 0.9)"
                      }}
                    >
                      OPEN TO WORK · OPEN TO WORK ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rotate-45 fill-white text-white opacity-80"
              >
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
              </svg>
            </div>
            <div className="z-30">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2 tracking-tight  pointer-events-none ">
              FROM  <span className="text-gradient"> CONCEPT TO </span> CREATION
            </h2>
             <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2 tracking-tight  pointer-events-none w-full">
            LET'S MAKE IT <span className="text-gradient">HAPPEN!</span>
          </h2>
            </div>
          </div>
         
         
          <button className="mt-6 px-6 py-2 rounded-full bg-neutral-800 text-white font-semibold text-lg flex items-center gap-2 shadow hover:bg-neutral-700 transition-all z-30">
            Get In Touch <span className="text-xl">→</span>
          </button>
        </div>

        <div className="mb-4 text-center">
          <p className="text-lg font-bold text-white mb-2">
            I'm available for full-time roles & freelance projects.
          </p>
          <p className="text-gray-300">
            I thrive on crafting dynamic web applications, and delivering
            seamless user experiences.
          </p>
        </div>
        

        <div className="flex justify-center gap-8 mt-2 mb-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <span className="sr-only">Instagram</span>
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <rect x="2" y="2" width="20" height="20" rx="6" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17" cy="7" r="1" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <rect x="2" y="2" width="20" height="20" rx="6" />
              <path d="M8 11v5" />
              <path d="M12 11v5" />
              <path d="M16 11v5" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <span className="sr-only">GitHub</span>
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9 19c-5 1-5-2-7-3" />
              <path d="M15 19c5 1 5-2 7-3" />
              <path d="M9 9c-1-1-4-1-4 2" />
              <path d="M15 9c1-1 4-1 4 2" />
            </svg>
          </a>
          <a href="mailto:your@email.com" className="footer-icon">
            <span className="sr-only">Email</span>
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <rect x="2" y="4" width="20" height="16" rx="4" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
        <div className=" text-center text-gray-500 text-xs mt-3">
          © 2025 Sourabh Birada. All rights reserved &nbsp;|&nbsp; Privacy
          Policy &nbsp;|&nbsp; Terms & Conditions
        </div>
      </div>
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .footer-icon {
          border: 2px solid #fff;
          border-radius: 50%;
          padding: 0.5rem;
          transition: box-shadow 0.3s, border-color 0.3s;
        }
        .footer-icon:hover {
          border-color: #a855f7;
        }
      `}</style>
    </footer>
  );
}
