export interface Skill {
  id: string;
  title: string;
  icon: string;
  level: number;
  description: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  startDate: string; // Format: 'YYYY-MM'
  websiteUrl?: string;
  
}

export const skills: Skill[] = [
  {
    id: '1',
    title: 'React',
    icon: 'https://i.ibb.co/9H89DM5P/2945110.webp',
    level: 90,
    description: 'Building modern web applications with React and its ecosystem',
    category: 'frontend',
    startDate: '2021-07',
    websiteUrl: 'https://reactjs.org'

  },
  {
    id: '2',
    title: 'TypeScript',
    icon: 'https://i.ibb.co/ycTH2tYm/Typescript-logo-2020-svg.png',
    level: 85,
    description: 'Developing type-safe applications with strong typing',
    category: 'frontend',
    startDate: '2021-07',
    websiteUrl: 'https://www.typescriptlang.org/'
  },
  {
    id: '3',
    title: 'Node.js',
    icon: 'https://i.ibb.co/tTmtWJf0/node.webp',
    level: 80,
    description: 'Server-side JavaScript runtime environment',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://nodejs.org'
  },
  {
    id: '17',
    title: 'Tailwind CSS',
    icon: 'https://i.ibb.co/zhfVcZnw/Tailwind-CSS-logo-svg.png',
    level: 88,
    description: 'Utility-first CSS framework for rapid UI development',
    category: 'frontend',
    startDate: '2021-07',
    websiteUrl: 'https://tailwindcss.com/'
  },
  {
    id: '5',
    title: 'Git',
    icon: 'https://i.ibb.co/k60HRDsw/git.png',
    level: 85,
    description: 'Version control and collaboration',
    category: 'tools',
    startDate: '2021-07',
    websiteUrl: 'https://git-scm.com/'
  },
  {
    id: '6',
    title: 'MongoDB',
    icon: 'https://i.ibb.co/NnsGDGr1/mongoDB.png',
    level: 75,
    description: 'NoSQL database for modern applications',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://www.mongodb.com/'
  },
  {
    id: '7',
    title: 'Python',
    icon: 'https://i.ibb.co/cc8XdGqS/python.jpg',
    level: 75,
    description: 'Versatile programming language for web development, data analysis, and automation',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://www.python.org/'
  },
  {
    id: '8',
    title: 'JWT',
    icon: 'https://i.ibb.co/v6TfVWbk/jwt.png',
    level: 75,
    description: 'JSON Web Tokens for secure authentication and authorization',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://jwt.io/'
  },
  {
    id: '9',
    title: 'Django',
    icon: 'https://i.ibb.co/spM3qC1G/django.png',
    level: 75,
    description: 'High-level Python web framework for rapid development',
    category: 'tools',
    startDate: '2021-07',
    websiteUrl: 'https://www.djangoproject.com/'
  },
  {
    id: '10',
    title: 'gRPC',
    icon: 'https://i.ibb.co/0jj6z3Cm/grpc.png',
    level: 75,
    description: 'High-performance RPC framework for microservices communication',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://grpc.io/'
  },
  {
    id: '11',
    title: 'MySQL',
    icon: 'https://i.ibb.co/Kp1yVk4S/My-SQL-logo-768x480.png',
    level: 75,
    description: 'Relational database management system using SQL',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://www.mysql.com/'
  },
  {
    id: '12',
    title: 'PostgreSQL',
    icon: 'https://i.ibb.co/BVQbxGMn/Postgre-SQL-Logo-500x313.png',
    level: 75,
    description: 'Advanced open-source relational database system',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://www.postgresql.org/'
  },
  {
    id: '13',
    title: 'FastAPI',
    icon:'https://i.ibb.co/yFkRM4p0/fasstapi.png',
    level: 75,
    description: 'Modern, fast web framework for building APIs with Python',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://fastapi.tiangolo.com/'
  },
  {
    id: '14',
    title: 'SQLAlchemy',
    icon:'https://i.ibb.co/GQfs5Pgw/sqla.png',
    level: 75,
    description: 'Python SQL toolkit and ORM for database operations',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://www.sqlalchemy.org/'
  },
  {
    id: '15',
    title: 'Apollo Server',
    icon:'https://i.ibb.co/FRZbD8f/apollo.png',
    level: 90,
    description: 'GraphQL server implementation for building production-ready APIs',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://www.apollographql.com/'
  },
  {
    id: '16',
    title: 'Prisma',
    icon:'https://i.ibb.co/rKfHDz8z/prisma.png',
    level: 85,
    description: 'Modern database toolkit with type-safe query builder',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://www.prisma.io/'
  },
  {
    id: '4',
    title: 'Nest.js',
    icon:'https://i.ibb.co/46jyGbk/nest.png',
    level: 90,
    description: 'Progressive Node.js framework for building efficient server-side applications',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://nestjs.com/'
  },
  {
    id: '18',
    title: 'GraphQL',
    icon:'https://i.ibb.co/KzbcwrK8/graphql.png',
    level: 85,
    description: 'Query language for APIs and runtime for executing queries',
    category: 'backend',
    startDate: '2021-07',
    websiteUrl: 'https://graphql.org/'
  },
  {
    id: '19',
    title: 'Next.JS',
    icon:'https://i.ibb.co/3m3xC6Z1/next.png',
    level: 80,
    description: 'React framework for server-rendered applications and static sites',
    category: 'frontend',
    startDate: '2021-07',
    websiteUrl: 'https://nextjs.org/'
  },
  

  // Add more skills as needed
];

// Helper function to get skills by category
export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};