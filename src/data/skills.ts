export interface Skill {
  id: string;
  title: string;
  icon: string;
  level: number;
  description: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export const skills: Skill[] = [
  {
    id: '1',
    title: 'React',
    icon: '/icons/react.svg',
    level: 90,
    description: 'Building modern web applications with React and its ecosystem',
    category: 'frontend'
  },
  {
    id: '2',
    title: 'TypeScript',
    icon: '/icons/typescript.svg',
    level: 85,
    description: 'Developing type-safe applications with strong typing',
    category: 'frontend'
  },
  {
    id: '3',
    title: 'Node.js',
    icon: '/icons/nodejs.svg',
    level: 80,
    description: 'Server-side JavaScript runtime environment',
    category: 'backend'
  },
  {
    id: '4',
    title: 'Tailwind CSS',
    icon: '/icons/tailwind.svg',
    level: 88,
    description: 'Utility-first CSS framework for rapid UI development',
    category: 'frontend'
  },
  {
    id: '5',
    title: 'Git',
    icon: '/icons/git.svg',
    level: 85,
    description: 'Version control and collaboration',
    category: 'tools'
  },
  {
    id: '6',
    title: 'MongoDB',
    icon: '/icons/mongodb.svg',
    level: 75,
    description: 'NoSQL database for modern applications',
    category: 'backend'
  }
  // Add more skills as needed
];

// Helper function to get skills by category
export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};