import { FC } from 'react'

interface ExperienceCardProps {
  company: string
  position: string
  location: string
  startDate: string
  endDate?: string
  description?: string
  companyLogo?: string
  websiteUrl?: string
  technologies?: string[]
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  company,
  position,
  location,
  startDate,
  endDate,
  description,
  companyLogo,
  websiteUrl,
  technologies
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <a 
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center gap-4 mb-4">
        {companyLogo && (
          <img 
            src={companyLogo} 
            alt={`${company} logo`} 
            className="w-12 h-12 object-contain"
          />
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-800">{company}</h3>
          <p className="text-blue-600 font-medium">{position}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4 flex-grow">
        <p className="text-sm text-gray-600">
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
        </p>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-4">{description}</p>
        )}
      </div>

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};

export default ExperienceCard;