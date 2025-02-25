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
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    date: '2024-01-15',
    readTime: '5 min read',
    imageUrl: '/blog/react-typescript.jpg',
    tags: ['React', 'TypeScript', 'Web Development']
  },
  // Add more posts as needed
];