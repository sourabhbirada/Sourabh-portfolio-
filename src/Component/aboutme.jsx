"use client"
import Link from "next/link";
import React from "react";

export default function AboutMe() {
  return (
    <section 
      id="aboutme" 
      className="relative w-full min-h-screen flex items-center justify-center px-4 bg-black"
    >
      {/* Seamless transition overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-60"></div>
      
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 py-20">
        {/* Left: Text */}
        <div className="flex-1 animate-fade-in-up">
          <h2 className="uppercase text-sm tracking-widest text-gray-400 mb-4 opacity-80">More About Me</h2>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
            I'm <span className="font-serif bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Sourabh</span>, a creative <span className="text-purple-400 italic font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl leading-relaxed">
            I'm Sourabh Birada, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
            <br/><br/>
            When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
            <br/><br/>
            <span className="text-white font-medium">I believe in waking up each day eager to make a difference!</span>
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center animate-fade-in-right">
          <div className="relative">
            <img 
              src="/video/image.png" 
              alt="Sourabh Birada" 
              className="w-64 h-80 object-cover rounded-3xl shadow-2xl hover:shadow-purple-500/20  transition-all duration-500 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.2s both;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out 0.4s both;
        }
      `}</style>
    </section>
  );
}
