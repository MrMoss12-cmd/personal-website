export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with shopping cart, user authentication, and payment integration.',
    imageUrl: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    projectUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Real-time task management application with team collaboration features.',
    imageUrl: '/projects/taskapp.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    projectUrl: 'https://task-app-demo.com',
    githubUrl: 'https://github.com/yourusername/task-app'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with real-time updates and forecast visualization.',
    imageUrl: '/projects/weather.jpg',
    technologies: ['React', 'TypeScript', 'Chart.js'],
    projectUrl: 'https://weather-dashboard-demo.com',
    githubUrl: 'https://github.com/yourusername/weather-dashboard'
  }
  // Add more projects as needed
];