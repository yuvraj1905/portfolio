import { portfolioData } from "@/data/portfolioData";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Metadata for this page (can be uncommented and refined)
// export const metadata = {
//   title: "Projects Showcase - Yuvraj Kumar Portfolio",
//   description: "A comprehensive list of personal and professional projects developed by Yuvraj Kumar.",
// };

export default function ProjectsPage() {
  const { personalProjects } = portfolioData; // For now, only personal projects. Can extend later.

  if (!personalProjects || personalProjects.length === 0) {
    return (
      <div className="py-20 sm:py-24 bg-transparent text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">My Projects</h1>
          <p className="text-xl text-gray-400">No projects to display at the moment. Please check back later!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 sm:py-24 bg-transparent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-20">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {personalProjects.map((project, index) => (
            <div 
              key={`project-${index}`} 
              className="bg-gray-800 rounded-lg shadow-2xl p-6 flex flex-col border border-gray-700 hover:border-sky-500/70 transition-all duration-300 hover:shadow-sky-400/40 transform hover:-translate-y-1"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-sky-400">
                    {project.name}
                  </h3>
                  <span className="text-sm text-gray-400 whitespace-nowrap">{project.date}</span>
                </div>                
                <p className="text-gray-300 text-sm mb-4 min-h-[6rem] h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-200 mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-sky-700 text-sky-100 px-2.5 py-1 rounded-full shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-auto flex justify-end space-x-4 pt-4 border-t border-gray-700/50">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`View live demo of ${project.name}`}
                    className="text-sky-400 hover:text-sky-300 transition-colors flex items-center text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="mr-1.5" /> Live Demo
                  </a>
                )}
                {project.sourceLink && (
                  <a 
                    href={project.sourceLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`View source code of ${project.name}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center text-sm font-medium"
                  >
                    <FaGithub className="mr-1.5" /> Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 