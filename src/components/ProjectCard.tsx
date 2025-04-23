import { FC } from 'react'

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;  // Made optional to match Project interface
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({

  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
  githubUrl,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] flex flex-col h-full">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-full text-center"
            >
              View Project
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 text-gray-300 rounded hover:border-gray-400 hover:text-white transition-colors w-full text-center"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard