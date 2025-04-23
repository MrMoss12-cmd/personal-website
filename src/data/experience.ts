interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
  companyLogo?: string;
  websiteUrl?: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "Ingenieria y Soluciones INSOL S.A.S",
    position: "Technical Lead",
    location: "Medellin, Colombia",
    startDate: "2023-1",
    endDate: "2023-9",
    description: "Led IT infrastructure and development initiatives, implementing full-stack solutions using Python backend services and React/TypeScript frontend applications. Developed and maintained cloud-integrated systems for device management and Microsoft 365 services. Architected REST APIs and GraphQL services, utilizing MongoDB and PostgreSQL databases with Prisma ORM. Implemented robust authentication systems with JWT and established CI/CD pipelines using GitHub Actions.  Managed on-premise server infrastructure powered by Windows Server 2012, 2019. in this context, achieving 40% faster response time to IT requests and 30% reduction in system tickets through implementation of QR-code based request tracking and Power Automate workflows for automated request management. ",
    companyLogo: "https://i.ibb.co/0ySGZYcs/INSOL-logo.png",
    websiteUrl: "http://insolingenieria.co/",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB (NoSQL)", "Windows Server(2012, 2019)", "Power Automate", "Power BI", "Power Apps","Python-Django Flask", " REST" ,"GraphQL", "JWT (JSON Web Tokens)", "PostgreSQL (SQL relacional)","Prisma ORM", "REST APIs", "GraphQL schemas y resolvers", "GitHub Actions (para CI/CD pipelines)", "QR Code-based systems", "Gestión y automatización de tickets y flujos IT","Azure por Microsoft 365", " Microsoft 365"]
    
  },
  {
    id: "2",
    company: "Freelance",
    position: "Web Developer",
    location: "Remote",
    startDate: "2023-12",
    endDate: "2024-9",
    description: "Developed LoanSphere, a comprehensive personal loan management system for a small business. The application features: a responsive dashboard with real-time loan tracking, automated payment calculations with amortization schedules, client management portal with document upload capabilities, and detailed financial reporting. Implemented secure JWT authentication with role-based access control (admin, loan officer, client). Integrated with payment processors for online transactions and developed RESTful APIs for mobile app integration. The system reduced loan processing time by 60% and improved client satisfaction through automated notifications and self-service portal features.",
    companyLogo: "https://i.ibb.co/MyWZLHsq/Generated-Image-March-18-2025-12-04-PM-png.jpg",
    websiteUrl: "",
    technologies: [  "React", 
      "Next.js", 
      "TypeScript", 
      "Node.js", 
      "Express", 
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "Chart.js",
      "React Hook Form",
      "RESTful APIs",
      "Payment Gateway Integration",
      "Automated Email Notifications",
      "Role-Based Access Control",
      "Financial Calculations Engine",
      "PDF Generation",
      "Responsive Design",
      "Docker"
      ]
  },
];

export default experienceData;