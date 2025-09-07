"use client"
import React, { useEffect, useState } from "react";
// Tailwind CSS is used for styling

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	 return (
		 <header
			 className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}
		 >
			 <nav className={`flex items-center justify-between mx-auto px-6 py-3 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/50 rounded-full max-w-fit' : 'bg-transparent max-w-[1200px]'}`}>
				 <div className="flex items-center">
					 <span className={`text-2xl font-bold transition-all duration-300 ${scrolled ? 'text-gray-900 mr-8' : 'text-white'}`}>
						 SB
					 </span>
				 </div>
				 <ul className="hidden md:flex gap-8 list-none m-0 p-0">
					 <li><a href="#about" className={`transition-all duration-300 ${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} text-sm font-medium`}>About</a></li>
					 <li><a href="#process" className={`transition-all duration-300 ${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} text-sm font-medium`}>Experience</a></li>
					 <li><a href="#results" className={`transition-all duration-300 ${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} text-sm font-medium`}>Resume</a></li>
				 </ul>
				 <a
					 href="#book"
					 className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm border-none no-underline ${
						 scrolled 
							 ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md ml-8' 
							 : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/20'
					 }`}
				 >
					 Hire Me
				 </a>
			 </nav>
		 </header>
	);
};

export default Header;
