"use client"; // Keep for TypeAnimation - CAN BE REMOVED IF TYPEANIMATION IS GONE

import { portfolioData } from '@/data/portfolioData';
import Link from 'next/link';
import {
  FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs, FaDocker, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaAws, FaDatabase, FaCodeBranch, FaTools, FaServer, FaMobileAlt, FaCloud, FaPython, FaJava, FaMicrosoft
} from 'react-icons/fa';
import {
  SiLeetcode, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiPostgresql, SiGraphql, SiFirebase, SiSocketdotio, SiJest, SiCypress, SiStorybook, SiWebpack, SiBabel, SiEslint, SiPrettier, SiHeroku, SiNetlify, SiVercel, SiKubernetes, SiTerraform, SiJenkins, SiGitlab, SiBitbucket, SiPostman, SiSwagger, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiSvelte, SiAmazondynamodb, SiAmazons3, SiGooglecloud, SiRedis, SiNginx, SiApachekafka, SiRabbitmq
} from 'react-icons/si';
import SkillsSectionSmall from './SkillsSectionSmall';
// Updated icon getter for Hero Section - smaller icons
const getHeroSkillIcon = (skillName: string) => {
  const s = skillName.toLowerCase();
  const iconSize = 28; // Increased icon size for curated list
  const baseClassName = "text-gray-300 group-hover:text-white transition-colors duration-200";

  if (s.includes('react native')) return <FaReact size={iconSize} className={`${baseClassName} group-hover:text-sky-500`} />; // Specific for React Native
  if (s.includes('react')) return <FaReact size={iconSize} className={`${baseClassName} group-hover:text-sky-400`} />;
  if (s.includes('next.js') || s.includes('nextjs')) return <SiNextdotjs size={iconSize} className={`${baseClassName} group-hover:text-white`} />;
  if (s.includes('node') || s.includes('nodejs')) return <FaNodeJs size={iconSize} className={`${baseClassName} group-hover:text-green-400`} />;
  if (s.includes('express')) return <SiExpress size={iconSize} className={`${baseClassName} group-hover:text-gray-500`} />;
  if (s.includes('javascript') || s.includes('js')) return <FaJsSquare size={iconSize} className={`${baseClassName} group-hover:text-yellow-400`} />;
  if (s.includes('typescript') || s.includes('ts')) return <SiTypescript size={iconSize} className={`${baseClassName} group-hover:text-blue-400`} />;
  if (s.includes('html')) return <FaHtml5 size={iconSize} className={`${baseClassName} group-hover:text-orange-500`} />;
  if (s.includes('css')) return <FaCss3Alt size={iconSize} className={`${baseClassName} group-hover:text-blue-600`} />;
  if (s.includes('tailwind')) return <SiTailwindcss size={iconSize} className={`${baseClassName} group-hover:text-teal-300`} />;
  if (s.includes('redux')) return <SiRedux size={iconSize} className={`${baseClassName} group-hover:text-purple-500`} />;
  if (s.includes('mongodb')) return <SiMongodb size={iconSize} className={`${baseClassName} group-hover:text-green-600`} />;
  if (s.includes('postgresql')) return <SiPostgresql size={iconSize} className={`${baseClassName} group-hover:text-blue-500`} />;
  if (s.includes('sql')) return <FaDatabase size={iconSize} className={`${baseClassName} group-hover:text-indigo-400`} />;
  if (s.includes('git')) return <FaGitAlt size={iconSize} className={`${baseClassName} group-hover:text-orange-600`} />;
  if (s.includes('github')) return <FaGithub size={iconSize} className={`${baseClassName} group-hover:text-white`} />;
  if (s.includes('docker')) return <FaDocker size={iconSize} className={`${baseClassName} group-hover:text-blue-500`} />;
  if (s.includes('aws')) return <FaAws size={iconSize} className={`${baseClassName} group-hover:text-orange-400`} />;
  if (s.includes('azure')) return <FaCloud size={iconSize} className={`${baseClassName} group-hover:text-blue-400`} />; 
  if (s.includes('google cloud') || s.includes('gcp')) return <SiGooglecloud size={iconSize} className={`${baseClassName} group-hover:text-red-500`} />;
  if (s.includes('microsoft')) return <FaMicrosoft size={iconSize} className={`${baseClassName} group-hover:text-blue-500`} />;
  if (s.includes('firebase')) return <SiFirebase size={iconSize} className={`${baseClassName} group-hover:text-yellow-500`} />;
  if (s.includes('java')) return <FaJava size={iconSize} className={`${baseClassName} group-hover:text-red-400`} />;
  if (s.includes('python')) return <FaPython size={iconSize} className={`${baseClassName} group-hover:text-yellow-300`} />;
  if (s.includes('c++') || s.includes('cplusplus')) return <FaCodeBranch size={iconSize} className={`${baseClassName} group-hover:text-blue-300`} />;
  return <FaCodeBranch size={iconSize > 4 ? iconSize-4 : iconSize} className={`${baseClassName} group-hover:text-gray-400`} />; // Default icon slightly smaller
};

const HeroSection = () => {
  const { name, /* title, */ summary, socialLinks, tagline , summaryLinkedin} = portfolioData.personalInfo;
  const currentExperience = portfolioData.experiences.find(exp => exp.isCurrent);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center text-center py-12 pt-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-sky-400">{name}</span>
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