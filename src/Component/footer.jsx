"use client"
import React, { useState } from "react";

export default function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert(`Thank you ${formData.name}! We'll get back to you at ${formData.email}`);
    setFormData({ name: "", email: "" });
    setIsFormOpen(false);
  };

  return (
    <footer className="w-full bg-black/90 py-4 px-4 flex flex-col items-center animate-fade-in relative">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center relative">
          <div
            className="w-full flex items-center justify-center relative"
            style={{ height: "150px" }}
          >
            <div
              className="absolute size-[10px] rounded-full bg-black p-2  animate-spin-slow z-10"
              style={{ top: "55%", left: "95%" }}
            >
              <div className="absolute top-1/2 left-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full">
                <svg
                  className="transform-origin-center-center"
                  viewBox="0 0 100 100"
                  overflow="visible"
                  fill="black"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    inset: 0,
                    transformOrigin: "center center",
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
                        fill: "rgba(242, 242, 242, 0.9)",
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
              <h2 className="text-7xl">Iterate. Improve. Invincible</h2>
            </div>
          </div>

          <button 
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="px-6 py-2 rounded-full bg-neutral-800 text-white font-semibold text-2xl flex items-center gap-2 shadow hover:bg-neutral-700 transition-all z-30"
          >
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

        <div className="flex justify-center gap-6 mt-2 mb-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-500/50"
            title="Instagram"
          >
            <svg
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            title="LinkedIn"
          >
            <svg
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/50"
            title="GitHub"
          >
            <svg
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="mailto:your@email.com" 
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
            title="Email"
          >
            <svg
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
        <div className="text-center text-gray-500 text-xs mt-2 mb-0">
          © 2025 Sourabh Birada. All rights reserved &nbsp;|&nbsp; Privacy
          Policy &nbsp;|&nbsp; Terms & Conditions
        </div>
      </div>

      
      <div 
        className={`fixed inset-0 z-50 flex items-end justify-end mr-4 transition-all duration-300 ${
          isFormOpen ? 'visible' : 'invisible'
        }`}
      >
        
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isFormOpen ? 'opacity-60' : 'opacity-0'
          }`}
          onClick={() => setIsFormOpen(false)}
        ></div>

     
        <div 
          className={`relative w-full max-w-lg bg-black border-2 border-orange-400/30 rounded-t-3xl p-8 shadow-2xl shadow-orange-500/20 transform transition-transform duration-500 ease-out ${
            isFormOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
         
          <button
            onClick={() => setIsFormOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Get In Touch</h3>
          <p className="text-neutral-300 mb-6">Let's start a conversation!</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-black font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Send
            </button>
          </form>
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
      `}</style>
    </footer>
  );
}
