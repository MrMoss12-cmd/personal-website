export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'From Bugs to Builds: My Journey as a Full-Stack Developer',
    excerpt: "Hello and welcome to my very first blog post!\n I'm excited to start sharing my journey, thoughts, and insights as a full-stack developer. But before diving into code, trends, or architectural debates, I want to begin with something more personal — my path into the world of software development.\n\nA Mathematical Beginning\n\nMy story didn't start in computer science — it started with mathematics. I initially studied Pure Mathematics, fascinated by the logic, precision, and abstract problem-solving it required. Over time, that same fascination led me to programming. I realized that software development wasn't just about writing code — it was about building solutions and modeling real-world problems through logic, just like in math.\n\nEventually, this passion pushed me to make a career change. I pursued a degree in Analysis and Development of Information Systems, where I began formalizing my knowledge and building real applications.",
    date: '2024-01-15',
    readTime: '5 min read',
    imageUrl: '/assets/Post/Generated Image April 03, 2025 - 8_29PM.jpg',
    tags: ['React', 'TypeScript', 'Web Development']
  },
  
];