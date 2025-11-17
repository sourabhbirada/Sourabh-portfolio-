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
					 <li className="relative group">
						 <a href="#aboutme" className={`transition-all duration-300 ${scrolled ? 'text-gray-600 group-hover:text-orange-500' : 'text-white/80 group-hover:text-orange-400'} text-sm font-medium`}>
							 About
						 </a>
						 <span className="absolute bottom-[-4px] right-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:right-auto group-hover:left-0 transition-all duration-500 ease-out"></span>
					 </li>
					 <li className="relative group">
						 <a href="#experience" className={`transition-all duration-300 ${scrolled ? 'text-gray-600 group-hover:text-orange-500' : 'text-white/80 group-hover:text-orange-400'} text-sm font-medium`}>
							 Experience
						 </a>
						 <span className="absolute bottom-[-4px] right-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:right-auto group-hover:left-0 transition-all duration-500 ease-out"></span>
					 </li>
					 <li className="relative group">
						 <a href="https://drive.google.com/file/d/YOUR_FILE_ID/view" target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 ${scrolled ? 'text-gray-600 group-hover:text-orange-500' : 'text-white/80 group-hover:text-orange-400'} text-sm font-medium`}>
							 Resume
						 </a>
						 <span className="absolute bottom-[-4px] right-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:right-auto group-hover:left-0 transition-all duration-500 ease-out"></span>
					 </li>
				 </ul>
				 <button
					 className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm border-none cursor-default ${
						 scrolled 
							 ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md ml-8' 
							 : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white backdrop-blur-sm shadow-lg'
					 }`}
				 >
					 Hire Me
				 </button>
			 </nav>
		 </header>
	);
};

export default Header;