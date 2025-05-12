"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

// Nav items will be updated later for new page structure
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  // { name: 'Skills', href: '/#skills' }, // Skills might stay on homepage or get its own page. For now, can be a hash link if on homepage, or /skills if a page.
  // { name: 'Education', href: '/#education-certifications' }, // Combined into About
  // { name: 'Contact', href: '/#contact' }, // Combined into About
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const resumeLink = "https://drive.google.com/file/d/1CBkw3LydfeOvzM95iExWQpf2bYFQHSEn/view?usp=sharing";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled || isOpen ? "bg-gray-900/90 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 ">
          <div className="flex items-center justify-start -ml-6 h-full " onClick={() => router.push('/')}>
            <Image src="/assets/portfoliologo.png" alt="Logo" width={100} height={100} className="cursor-pointer" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 ">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 
                            ${pathname === item.href 
                              ? "bg-sky-600 text-white shadow-sm"
                              : "text-gray-300 hover:bg-gray-700/50 hover:text-white"}`}
              >
                {item.name}
              </Link>
            ))}
            {/* Desktop Resume Link */}
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors duration-200 border border-sky-500 hover:border-sky-400"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 shadow-xl pb-4 pt-2 backdrop-blur-md !z-50 bg-[#111728] border-b-4 border-gray-700">
          <div className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 
                            ${pathname === item.href 
                              ? "bg-sky-600 text-white shadow-sm"
                              : "text-gray-200 hover:bg-gray-700 hover:text-white"}`}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Resume Link */}
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 