export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;  // Made optional with ?
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [

  {
    id: '3',
    title: 'Engineering Company Landing Page',
    description: 'Professional website for a civil engineering company, showcasing their services, featured projects, and industry expertise. Designed with a modern and responsive approach for optimal user experience.',
    imageUrl: 'https://i.ibb.co/8nZv22C7/ing.jpg',
    technologies: ['React', 'TSX', 'TailwindCSS', 'React Hooks', 'Mobile-First'],
    projectUrl: 'https://hyhingenieria.netlify.app/',
    githubUrl: 'https://github.com/MrMoss12-cmd/ingenieria-ui'
  },
  {
    id: '2',
    title: 'Church Landing Web Page',
    description: 'A modern and engaging church website showcasing mission, vision, and values, featuring live streaming capabilities for services and events. Built with a mobile-first approach for seamless access across all devices.',
    imageUrl: 'https://i.ibb.co/jZqWcvbc/church.jpg',
    technologies: ['React', 'Next.js', 'TSX', 'TailwindCSS', 'React Hooks', 'Mobile-First'],
    projectUrl: 'https://github.com/MrMoss12-cmd/church-ui',
    githubUrl: 'https://github.com/MrMoss12-cmd/church-ui'
  },

  {
    id: '1',
    title: 'Restaurant Web Site',
    description: 'An elegant and responsive website for a French-American fusion restaurant, featuring an interactive menu, reservation system, and seamless mobile experience.',
    imageUrl: 'https://i.ibb.co/ZpYR7tym/cabana.jpg',
    technologies: ['React', 'TSX', 'TailwindCSS', 'React Hooks', 'Mobile-First'],
    projectUrl: 'https://github.com/MrMoss12-cmd/restaurant-ui',
    githubUrl: '',
    featured: true
  },

  {
    id: "4",
    title: "Zelda API Explorer",
    description: "A comprehensive API about The Legend of Zelda universe, offering detailed information about characters, locations, bosses, dungeons, monsters, and game items. Includes an interactive GraphQL explorer.",
    imageUrl: "https://i.ibb.co/RTRvYvcn/zelda.jpg",
    technologies: ["NestJS", "TypeScript", "GraphQL", "MongoDB", "Prisma", "Apollo Server"],
    projectUrl: "https://github.com/MrMoss12-cmd/zelda-api",
    featured: true
  },
  {
    id: "5",
    title: "Weather gRPC Microservices",
    description: "A sophisticated microservices architecture built with Python for weather data processing and analysis. The system leverages gRPC for efficient inter-service communication, providing real-time weather information with optimized performance and reliability.",
    imageUrl: "https://i.ibb.co/9HG9P78K/cli.jpg",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Requests", "MySQL", "gRPC", "Protocol Buffers", "Microservices", "REST API", "argparse", "Rich", "Questionary"],
    projectUrl: "https://github.com/MrMoss12-cmd/weather-microservices",
    featured: true
  },
  {
    id: "6",
    title: "TaskSphere API",
    description: "A comprehensive Django REST API for efficient task and project management. TaskSphere helps teams organize their work by providing a robust backend system for creating, managing, and tracking tasks within projects. Features include JWT authentication, project organization, task status tracking, and detailed API documentation with Swagger/OpenAPI.",
    imageUrl: "https://i.ibb.co/Gf07vBbf/api.jpg",
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JWT", "Swagger/OpenAPI"],
    projectUrl: "https://github.com/MrMoss12-cmd/tasksphere-api",
    featured: true
  },
  {
    id: "6",
    title: "Covid Dashboard",
    description: "Interactive data visualization dashboard tracking COVID-19 statistics globally, featuring real-time data updates, regional comparisons, and trend analysis. Provides comprehensive metrics including cases, deaths, and vaccination rates with intuitive charts and maps.",
    imageUrl: "https://i.ibb.co/WpVpHqpF/data-projects.jpg",
    technologies: ["Python", "Pandas", "Matplotlib", "Plotly", "Requests", "API Integration", "Data Visualization"],
    projectUrl: "https://github.com/MrMoss12-cmd/covid_dashboard",
    featured: true
  }
  // Add more projects as needed
];