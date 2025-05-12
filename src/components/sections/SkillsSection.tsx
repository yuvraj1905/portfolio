import { portfolioData } from '@/data/portfolioData';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDocker, FaAws, FaDatabase, FaCodeBranch, FaTools, FaServer, FaMobileAlt, FaCloud, FaJs, FaPython, FaJava, FaGithub, FaMicrosoft
} from 'react-icons/fa'; 
import {
  SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiPostgresql, SiGraphql, SiFirebase, SiSocketdotio, SiJest, SiCypress, SiStorybook, SiWebpack, SiBabel, SiEslint, SiPrettier, SiHeroku, SiNetlify, SiVercel, SiKubernetes, SiTerraform, SiJenkins, SiGitlab, SiBitbucket, SiPostman, SiSwagger, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiSvelte, SiAmazondynamodb, SiAmazons3, SiGooglecloud, SiRedis, SiNginx, SiApachekafka, SiRabbitmq
} from 'react-icons/si';
// ... import more icons as needed

// Helper function to get an icon for a skill
const getSkillIcon = (skillName: string) => {
  const s = skillName.toLowerCase();
  // Prioritize specific icons
  if (s.includes('react')) return <FaReact className="text-sky-400" />;
  if (s.includes('next.js') || s.includes('nextjs')) return <SiNextdotjs className="text-white" />;
  if (s.includes('node') || s.includes('nodejs')) return <FaNodeJs className="text-green-500" />;
  if (s.includes('express')) return <SiExpress className="text-gray-400" />;
  if (s.includes('javascript') || s.includes('js')) return <FaJsSquare className="text-yellow-400" />;
  if (s.includes('typescript') || s.includes('ts')) return <SiTypescript className="text-blue-500" />;
  if (s.includes('html')) return <FaHtml5 className="text-orange-500" />;
  if (s.includes('css')) return <FaCss3Alt className="text-blue-600" />;
  if (s.includes('tailwind')) return <SiTailwindcss className="text-teal-400" />;
  if (s.includes('redux')) return <SiRedux className="text-purple-500" />;
  if (s.includes('mongodb')) return <SiMongodb className="text-green-600" />;
  if (s.includes('postgresql')) return <SiPostgresql className="text-blue-400" />;
  if (s.includes('sql')) return <FaDatabase className="text-indigo-400" />;
  if (s.includes('git')) return <FaGitAlt className="text-orange-600" />;
  if (s.includes('github')) return <FaGithub className="text-white" />;
  if (s.includes('docker')) return <FaDocker className="text-blue-500" />;
  if (s.includes('aws')) return <FaAws className="text-orange-400" />;
  if (s.includes('azure')) return <FaCloud className="text-blue-400" />; // Using FaCloud for Azure
  if (s.includes('google cloud') || s.includes('gcp')) return <SiGooglecloud className="text-red-500" />;
  if (s.includes('microsoft')) return <FaMicrosoft className="text-blue-500" />; // Use FaMicrosoft for general Microsoft tech
  if (s.includes('firebase')) return <SiFirebase className="text-yellow-500" />;
  if (s.includes('rest api') || s.includes('restful api')) return <FaServer className="text-gray-400" />;
  if (s.includes('graphql')) return <SiGraphql className="text-pink-500" />;
  if (s.includes('three.js') || s.includes('threejs')) return <FaCodeBranch className="text-purple-400" />;
  if (s.includes('socket.io') || s.includes('socket io')) return <SiSocketdotio className="text-white" />;
  if (s.includes('java')) return <FaJava className="text-red-500" />;
  if (s.includes('python')) return <FaPython className="text-blue-400" />;
  if (s.includes('mobile app')) return <FaMobileAlt className="text-gray-400" />;
  if (s.includes('cloud computing')) return <FaCloud className="text-sky-300" />;
  if (s.includes('software testing') || s.includes('jest') || s.includes('cypress')) return <FaTools className="text-yellow-600" />;
  // Fallback for less specific terms if more specific ones didn't match above
  return <FaCodeBranch className="text-gray-500" />;
};

const SkillsSection = () => {
  const { skills } = portfolioData;

  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="py-16 sm:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16">
          My Tech Stack
        </h2>
        <div className="space-y-10">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="">
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-6 text-center sm:text-left">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-x-4 gap-y-6 justify-items-center">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center text-center p-2 bg-gray-700/40 rounded-lg hover:bg-sky-700/30 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-sm hover:shadow-sky-500/20 w-full max-w-[110px] min-h-[90px] justify-center aspect-square"
                  >
                    <div className="text-3xl mb-1 flex-shrink-0">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="text-xs font-medium text-gray-300 break-words line-clamp-2">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 