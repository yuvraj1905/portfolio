"use client";

import { portfolioData } from '@/data/portfolioData';
import SkillsSectionSmall from './SkillsSectionSmall';

const HeroSection = () => {
  const { name, tagline , summaryLinkedin} = portfolioData.personalInfo; // Removed unused summary, socialLinks
  const currentExperience = portfolioData.experiences.find(exp => exp.isCurrent);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center text-center py-12 pt-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Hi, I&apos;m <span className="text-sky-400">{name}</span>
        </h1>
        <div className="text-xl sm:text-2xl text-gray-200 mb-6 h-14 sm:h-auto flex items-center justify-center">
          <p>{tagline}</p>
        </div>
        <p className="text-md sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {summaryLinkedin}
        </p>

        {currentExperience && (
          <div className="mb-8">
            <div className="inline-block bg-gray-800/70 border border-sky-600/50 shadow-lg rounded-lg px-6 py-3 text-center backdrop-blur-sm">
              <p className="text-sm sm:text-md font-semibold text-sky-300">
                Currently: {currentExperience.role} at <span className="font-bold text-sky-200">{currentExperience.company}</span>
              </p>
              <p className="text-xs text-gray-400">
                ({currentExperience.duration})
              </p>
            </div>
          </div>
        )}

        <SkillsSectionSmall />

        {/* <div className="flex justify-center items-center space-x-5 my-8">
          {socialLinks.linkedin && (
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-200 hover:text-sky-400 transition-colors transform hover:scale-110 duration-200">
              <FaLinkedin size={28} />
            </Link>
          )}
          {socialLinks.github && (
            <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-200 hover:text-white transition-colors transform hover:scale-110 duration-200">
              <FaGithub size={28} />
            </Link>
          )}
          {socialLinks.leetcode && (
            <Link href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile" className="text-gray-200 hover:text-yellow-400 transition-colors transform hover:scale-110 duration-200">
              <SiLeetcode size={28} /> 
            </Link>
          )}
          {socialLinks.email && (
            <Link href={`mailto:${socialLinks.email}`} aria-label={`Email ${name}`} className="text-gray-200 hover:text-red-500 transition-colors transform hover:scale-110 duration-200">
              <FaEnvelope size={28} />
            </Link>
          )}
        </div> */}

      </div>
    </section>
  );
};

export default HeroSection; 