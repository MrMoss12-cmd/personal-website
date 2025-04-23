import { FC, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Portfolio: FC = () => {
  // Get unique technologies from all projects
  const allTechnologies = ['All', ...new Set(
    projects.flatMap(project => project.technologies)
  )]
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => 
        project.technologies.includes(activeFilter)
      )

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-3 text-center">Portfolio</h1>
      <p className="text-sm text-gray-600 mb-12 text-center">Projects by category</p>
      
      {/* Technology filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setActiveFilter(tech)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === tech
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="transform transition-all duration-300"
          >
            <ProjectCard 
              {...project} 
              projectUrl={project.projectUrl || ''} // Provide fallback empty string
            />
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="text-center text-gray-400 mt-12">
          No projects found with this technology.
        </div>
      )}
    </div>
  )
}

export default Portfolio