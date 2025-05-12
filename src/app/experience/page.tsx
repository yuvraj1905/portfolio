import Footer from "@/components/layout/Footer";
import { portfolioData, ProfessionalProject } from "@/data/portfolioData";

// Metadata for this page (can be uncommented and refined)
// export const metadata = {
//   title: "Experience - Yuvraj Kumar Portfolio",
//   description: "Detailed professional experience of Yuvraj Kumar, showcasing roles, responsibilities, and key projects.",
// };

export default function ExperiencePage() {
  const { experiences } = portfolioData;

  if (!experiences || experiences.length === 0) {
    return (
      <div className="py-20 sm:py-24 bg-transparent text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">My Experience</h1>
          <p className="text-xl text-gray-400">No professional experience to display at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 sm:py-24 bg-transparent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-20">
          My Professional Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-2xl border border-gray-700 hover:border-sky-500/70 transition-all duration-300 flex flex-col hover:shadow-sky-400/40 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-sky-400 mb-2">
                {exp.role}
              </h3>
              <p className="text-lg font-medium text-gray-300 mb-1">
                {exp.company} - <span className="text-gray-400">{exp.location}</span>
              </p>
              <p className="text-md text-gray-400 mb-6">
                {exp.duration}
              </p>
              <h4 className="text-md font-semibold text-sky-300 mb-2 mt-2">Key Projects & Responsibilities:</h4>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-sm sm:text-base flex-grow">
                {exp.points.map((point, pointIndex) => {
                  if (typeof point === 'string') {
                    return <li key={pointIndex}>{point}</li>;
                  }
                  const projectPoint = point as ProfessionalProject;
                  return (
                    <li key={pointIndex}>
                      <strong className="text-sky-500">{projectPoint.name}:</strong> 
                      <span className="block pl-2 text-gray-400 text-xs sm:text-sm">{projectPoint.description}</span>
                    </li>
                  );
                })}
              </ul>
              {exp.isCurrent && (
                <div className="mt-auto pt-4 border-t border-gray-700/50 text-right">
                  <span className="text-xs font-semibold inline-block py-1 px-3 leading-none text-center whitespace-nowrap align-baseline bg-green-600/80 text-white rounded-full">
                    Currently Working Here
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 