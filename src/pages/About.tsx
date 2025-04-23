import { FC } from 'react'
import SkillCard from '../components/SkillCard'
import EducationCard from '../components/EducationCard'
import ExperienceCard from '../components/ExperienceCard'
import { getSkillsByCategory } from '../data/skills'
import { educationData } from '../data/education'
import { experienceData } from '../data/experience'

const About: FC = () => {
  // Get frontend skills first, as they're usually most relevant
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const toolsSkills = getSkillsByCategory('tools');

  const allSkills = [...frontendSkills, ...backendSkills, ...toolsSkills];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* About Me Section */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
          About <span className="text-blue-500">Me</span>
        </h1>
        
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-2 bg-blue-500 rounded-lg opacity-10 blur-lg"></div>
            <img 
              src="https://i.ibb.co/pBqCc93P/Generated-Image-March-18-2025-10-27-AM-png.jpg" 
              alt="Elias Higuera" 
              className="relative rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-600 leading-relaxed">
          Hello! I'm Elias Higuera, a passionate Full Stack Developer from Colombia. With a strong background in web development, I specialize in building modern, scalable, and efficient applications using React, Node.js, and cloud technologies.          </p>
          <p className="text-gray-600 leading-relaxed">
          </p>
          <p>
          I hold a Technologist degree in Analysis and Development of Information Systems from SENA, where I built a strong foundation in software engineering, database management, and system design. Additionally, I have experience in computer support and software development, working in an engineering company where I managed system maintenance, troubleshooting, and application development to optimize business processes.
          </p>
          <p>
          Currently, I’m expanding my expertise in Data Analysis through the Oracle ONE program with Alura, deepening my knowledge of data-driven decision-making and business intelligence. This new journey allows me to integrate data analytics with my development skills to create even more powerful and insightful applications.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Quick Facts</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">📍</span> Based in Colombia
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">💻</span> Full Stack Developer
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">🎓</span> Computer Science
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">🌐</span> Bilingual (ES/EN)
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education & <span className="text-blue-500">Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((education) => (
            <EducationCard
              key={education.id}
              institution={education.institution}
              degree={education.degree}
              field={education.field}
              startDate={education.startDate}
              endDate={education.endDate}
              description={education.description}
              logo={education.logo}
              websiteUrl={education.websiteUrl}
              assessments={education.assessments}
              documentUrl={education.documentUrl}
            />
          ))}
        </div>
      </section>

      {/* Assessments Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Tests & <span className="text-blue-500">Evaluations</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData
            .filter(edu => edu.assessments && edu.assessments.length > 0)
            .flatMap(edu => 
              (edu.assessments || []).map((assessment, index) => (
                <div key={`${edu.id}-assessment-${index}`} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    {edu.logo && (
                      <img src={edu.logo} alt={edu.institution} className="w-10 h-10 mr-3 object-contain" />
                    )}
                    <div>
                      <h3 className="font-bold text-lg">{assessment.name}</h3>
                      <p className="text-sm text-gray-600">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Score:</span>
                      <span className="font-semibold text-blue-600">{assessment.score}</span>
                    </div>
                    {assessment.maxScore && (
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ 
                            width: `${(parseFloat(assessment.score) / parseFloat(assessment.maxScore)) * 100}%` 
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                  
                  {assessment.date && (
                    <p className="text-sm text-gray-500">Date: {assessment.date}</p>
                  )}
                  
                  {assessment.issuer && (
                    <p className="text-sm text-gray-500">Issued by: {assessment.issuer}</p>
                  )}
                  
                  {/* Botón para descargar documento desde Google Drive */}
                  {assessment.documentUrl ? (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a 
                        href={assessment.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-full"
                      >
                        <svg 
                          className="w-4 h-4 mr-2" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                            clipRule="evenodd"
                          />
                        </svg>
                        Download Assessment
                      </a>
                    </div>
                  ) : edu.documentUrl && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a 
                        href={edu.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-full"
                      >
                        <svg 
                          className="w-4 h-4 mr-2" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                            clipRule="evenodd"
                          />
                        </svg>
                        Download Certificate
                      </a>
                    </div>
                  )}
                </div>
              ))
            )}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Professional <span className="text-blue-500">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              company={experience.company}
              position={experience.position}
              location={experience.location}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              companyLogo={experience.companyLogo}
              websiteUrl={experience.websiteUrl}
              technologies={experience.technologies}
            />
          ))}
        </div>
      </section>
      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">My <span className="text-blue-400">Skills</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSkills.map((skill) => (
            <a 
              href={skill.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={skill.id}
              className="group hover:transform hover:scale-105 transition-all duration-300"
            >
              <SkillCard
                category={skill.category}
                title={skill.title}
                icon={skill.icon}
                level={skill.level}
                description={skill.description}
                startDate={skill.startDate}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About