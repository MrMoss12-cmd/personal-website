import { FC } from 'react'

interface SkillCardProps {
  title: string
  icon?: string
  level?: number
  description?: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

const SkillCard: FC<SkillCardProps> = ({
  title,
  icon,
  level = 0,
  description,
  category
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-500';
      case 'backend':
        return 'bg-green-500';
      case 'tools':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-3">
        {icon && (
          <img 
            src={icon} 
            alt={`${title} icon`} 
            className="w-8 h-8"
          />
        )}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(category)} text-white w-fit`}>
            {category}
          </span>
        </div>
      </div>
      
      {level > 0 && (
        <div className="mb-3">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className={`h-full ${getCategoryColor(category)} rounded-full`}
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      )}

      {description && (
        <p className="text-gray-600 text-sm">{description}</p>
      )}
    </div>
  )
}

export default SkillCard