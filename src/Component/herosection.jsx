// Hero: no image, strong heading, animated CTAs, bright scroll arrow
"use client"
export default function HeroSection() {
    return (
            <section className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center pt-10 md:pt-12 overflow-hidden">
                {/* Floating gradient orbs for subtle motion */}
                <div aria-hidden className="pointer-events-none absolute -top-24 -left-28 w-80 h-80 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-600/10 blur-3xl animate-float-slow" />
                <div aria-hidden className="pointer-events-none absolute top-1/3 -right-28 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-orange-500/10 to-rose-500/10 blur-3xl animate-float-slower" />
                <div className="w-full max-w-7xl px-6 md:px-10 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm tracking-widest text-orange-300/80 reveal" style={{animationDelay:'80ms'}}>OPEN TO WORK</p>
                        <h1 className="mt-3 font-extrabold tracking-tight">
                            <span className="block text-[40px] sm:text-6xl md:text-4xl lg:text-5xl xl:text-[6rem] leading-[1.02] reveal" style={{animationDelay:'150ms'}}>Sourabh Birada</span>
                            <span className="block text-[20px] sm:text-5xl md:text-6xl  leading-[1.05] text-white/90 reveal" style={{animationDelay:'280ms'}}>Full‑Stack Developer</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-neutral-300 text-base md:text-lg reveal" style={{animationDelay:'400ms'}}>
                            I build fast, accessible web apps using Next.js, React and Node.js. Based in India — available for remote work.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 reveal" style={{animationDelay:'520ms'}}>
                            {/* Primary CTA: animated shine */}
                            <a href="#contact" className="group relative inline-flex items-center rounded-full px-6 md:px-7 py-3 md:py-3.5 text-black font-semibold bg-gradient-to-r from-orange-400 to-amber-400 shadow-[0_0_0_1px_rgba(251,146,60,.35)] hover:shadow-[0_0_0_2px_rgba(251,146,60,.6)] transition-shadow btn-shine">
                                <span>Hire Me</span>
                                <span className="ml-3 grid place-items-center w-9 h-9 rounded-full border border-black/10 bg-black/10 text-black group-hover:translate-x-0.5 transition-transform">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M7 17l8-8M9 7h8v8" />
                                    </svg>
                                </span>
                            </a>

                            {/* Secondary CTA: outline */}
                            <a href="#work" className="inline-flex items-center gap-2 rounded-full px-6 md:px-7 py-3 md:py-3.5 border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors">
                                View Work
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="opacity-80">
                                    <path d="M7 17l10-10M9 7h8v8" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator - bright and animated */}
                <div className="absolute bottom-7 left-1/2 -translate-x-1/2 reveal" style={{animationDelay:'700ms'}}>
                    <div className="glow-arrow w-11 h-11 rounded-full border border-white/30 grid place-items-center text-white/95 bg-white/10 backdrop-blur-[1px] animate-bounce">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>

                    {/* Gentle fade at the bottom to keep continuity with dark sections */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-black/0 to-black" />

                    {/* Component-scoped animations */}
                                        <style jsx>{`
                        .btn-shine { position: relative; overflow: hidden; }
                        .btn-shine::before {
                            content: '';
                            position: absolute;
                            top: 0; left: -40%;
                            width: 40%; height: 100%;
                            background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.35), rgba(255,255,255,0));
                            transform: skewX(-20deg);
                            animation: shine 2.4s linear infinite;
                        }
                        @keyframes shine { 0% { left: -40%; } 100% { left: 140%; } }

                                                .glow-arrow { filter: drop-shadow(0 0 12px rgba(255,255,255,0.45)) drop-shadow(0 0 26px rgba(251,146,60,0.35)); }

                                                /* Entry animations */
                                                .reveal { opacity: 0; transform: translateY(10px) scale(0.985); animation: fadeUp .7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
                                                @keyframes fadeUp {
                                                    from { opacity: 0; transform: translateY(14px) scale(0.985); }
                                                    to { opacity: 1; transform: translateY(0) scale(1); }
                                                }

                                                /* Floating background orbs */
                                                .animate-float-slow { animation: float 10s ease-in-out infinite; }
                                                .animate-float-slower { animation: float 14s ease-in-out infinite; }
                                                @keyframes float {
                                                    0%, 100% { transform: translateY(0) translateX(0); }
                                                    50% { transform: translateY(-12px) translateX(8px); }
                                                }
                    `}</style>
        </section>
    );
}