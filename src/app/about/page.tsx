import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SkillsSection from "@/components/sections/SkillsSection"; // Added import for SkillsSection
// Metadata for this page (can be uncommented and refined)
// export const metadata = {
//   title: "About Yuvraj Kumar - Software Developer Portfolio",
//   description: "Learn more about Yuvraj Kumar, his background, education, certifications, and how to get in touch.",
// };

export default function AboutPage() {
  const { personalInfo, education, certifications } = portfolioData;
  const { summary, socialLinks, name } = personalInfo;

  const hasEducation = education && education.length > 0;
  const hasCertifications = certifications && certifications.length > 0;

  return (
    <div className="py-20 sm:py-24 bg-transparent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* About Me Core Section */}
        <section id="about-me-detail" className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center">
            <div className="md:col-span-1 flex justify-center mt-8 md:mt-0">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl relative bg-gray-700 border-4 border-sky-500">
                <Image 
                  src="/assets/dp.jpg" 
                  alt={`${name} - Profile Picture`} 
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                About Me
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
                {summary} {/* Main summary from personalInfo */}
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                I am passionate about creating intuitive and performant user experiences, leveraging my skills in modern web technologies to build impactful applications. I thrive in collaborative environments and am always eager to learn and tackle new challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Education and Certifications Section - Combined or separate cards */}
        {(hasEducation || hasCertifications) && (
          <section id="education-certifications-detail" className="mb-16 sm:mb-20">
             <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16">
                My Journey
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {hasEducation && (
                <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl border border-gray-700 flex flex-col">
                  <h3 className="text-2xl font-semibold text-sky-400 mb-6 text-center">
                    Education
                  </h3>
                  <div className="space-y-6 flex-grow">
                    {education.map((edu, index) => (
                      <div key={`edu-${index}`} className="hover:bg-gray-700/50 p-4 rounded-md transition-colors duration-200">
                        <h4 className="text-xl font-medium text-sky-300">
                          {edu.degree}
                        </h4>
                        <p className="text-md text-gray-300">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-gray-400">
                          {edu.duration}
                          {edu.cgpa && <span className="ml-2 text-gray-500">| CGPA: {edu.cgpa}</span>}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {hasCertifications && (
                <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl border border-gray-700 flex flex-col">
                  <h3 className="text-2xl font-semibold text-sky-400 mb-6 text-center">
                    Certifications
                  </h3>
                  <div className="space-y-6 flex-grow">
                    {certifications.map((cert, index) => (
                      <div key={`cert-${index}`} className="hover:bg-gray-700/50 p-3 rounded-md transition-colors duration-200">
                        <h4 className="text-lg font-medium text-sky-300">
                          {cert.name}
                        </h4>
                        {cert.issuer && (
                          <p className="text-sm text-gray-300">{cert.issuer}</p>
                        )}
                        {cert.year && (
                          <p className="text-xs text-gray-400">{cert.year}</p>
                        )}
                        {cert.link && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs text-sky-500 hover:text-sky-400 transition-colors mt-1 inline-block"
                          >
                            View Certificate
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Tech Stack / Skills Section */}
        <SkillsSection />

        {/* Contact Section Details */}
        <section id="contact-detail" className="pt-16 sm:pt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 sm:mb-12">
            Get In Touch
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-800 p-8 sm:p-10 rounded-lg shadow-xl border border-gray-700">
            <p className="text-lg text-center text-gray-300 mb-8">
              I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to connect, feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {socialLinks.email && (
                <a 
                  href={`mailto:${socialLinks.email}`} 
                  aria-label={`Email ${name}`}
                  className="flex items-center justify-center text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 py-3 px-6 rounded-lg shadow-md text-base sm:text-lg w-full sm:w-auto"
                >
                  <FaEnvelope className="mr-2 sm:mr-3" size={20} /> Email Me
                </a>
              )}
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="flex items-center justify-center text-white bg-sky-600 hover:bg-sky-700 transition-colors duration-300 py-3 px-6 rounded-lg shadow-md text-base sm:text-lg w-full sm:w-auto"
                >
                  <FaLinkedin className="mr-2 sm:mr-3" size={20} /> LinkedIn
                </a>
              )}
              {socialLinks.github && (
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="flex items-center justify-center text-white bg-gray-600 hover:bg-gray-500 transition-colors duration-300 py-3 px-6 rounded-lg shadow-md text-base sm:text-lg w-full sm:w-auto"
                >
                  <FaGithub className="mr-2 sm:mr-3" size={20} /> GitHub
                </a>
              )}
              {socialLinks.leetcode && (
                <a 
                  href={socialLinks.leetcode} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LeetCode Profile"
                  className="flex items-center justify-center text-black bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 py-3 px-6 rounded-lg shadow-md text-base sm:text-lg w-full sm:w-auto"
                >
                  <SiLeetcode className="mr-2 sm:mr-3" size={20} /> LeetCode
                </a>
              )}
              {socialLinks.phone && (
                <a 
                  href={`tel:${socialLinks.phone}`} 
                  aria-label={`Call ${name}`}
                  className="flex items-center justify-center text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 py-3 px-6 rounded-lg shadow-md text-base sm:text-lg w-full sm:w-auto"
                >
                  <FaPhone className="mr-2 sm:mr-3" size={20} /> Phone
                </a>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
} 