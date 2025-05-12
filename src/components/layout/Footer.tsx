import { portfolioData } from "@/data/portfolioData";
import Link from "next/link";
import {
  FaLinkedin, FaGithub, FaEnvelope, FaRegCopyright,
} from "react-icons/fa";
import { SiLeetcode, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { name, socialLinks } = portfolioData.personalInfo;

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm text-gray-400 py-10 sm:py-6 w-full border-t border-gray-700/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center space-x-5 sm:space-x-6 mb-4">
          {socialLinks.linkedin && (
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-sky-400 transition-all duration-300 transform hover:scale-110">
              <FaLinkedin size={26} />
            </Link>
          )}
          {socialLinks.github && (
            <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-white transition-all duration-300 transform hover:scale-110">
              <FaGithub size={26} />
            </Link>
          )}
          {socialLinks.leetcode && (
            <Link href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile" className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110">
              <SiLeetcode size={26} />
            </Link>
          )}
          {socialLinks.email && (
            <Link href={`mailto:${socialLinks.email}`} aria-label={`Email ${name}`} className="hover:text-red-400 transition-all duration-300 transform hover:scale-110">
              <FaEnvelope size={26} />
            </Link>
          )}
        </div>
        <p className="text-sm text-gray-500 mb-4">
          &copy; {currentYear} {name}.
        </p>
        <div className="flex justify-center items-center space-x-2 text-xs text-gray-600">
          <span>Built with</span>
          <SiNextdotjs size={16} className="text-gray-500" title="Next.js" />
          <span>&</span>
          <SiTailwindcss size={16} className="text-sky-500" title="Tailwind CSS" />
          <span>in 2 hours.</span>

        </div>
      </div>
    </footer>
  );
};

export default Footer; 