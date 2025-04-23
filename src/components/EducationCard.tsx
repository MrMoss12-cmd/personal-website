import { FC } from 'react'

interface EducationCardProps {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
  logo?: string;
  websiteUrl?: string;
  assessments?: Assessment[];
  documentUrl?: string; // Añadido para el enlace de Google Drive
}

interface Assessment {
  name: string;
  score: string;
  maxScore?: string;
  date?: string;
  issuer?: string;
  documentUrl?: string; // Añadido para documentos específicos de la evaluación
}

const EducationCard: FC<EducationCardProps> = ({
  institution,
  degree,
  field,
  startDate,
  endDate,
  description,
  logo,
  websiteUrl,
  documentUrl, // Añadido para el enlace de Google Drive
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
        {logo && (
          <img 
            src={logo} 
            alt={`${institution} logo`} 
            className="w-12 h-12 object-contain"
          />
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-800">{institution}</h3>
          <p className="text-blue-600 font-medium">{degree}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4 flex-grow">
        <p className="text-gray-700">{field}</p>
        <p className="text-sm text-gray-600">
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
        </p>
        {description && (
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        )}
      </div>
      
      {documentUrl && (
        <div className="mt-auto pt-4">
          <a 
            href={documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
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
    </a>
  );
};

export default EducationCard;