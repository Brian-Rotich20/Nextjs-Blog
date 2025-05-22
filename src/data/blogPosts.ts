export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}
export const blogPosts: BlogPost[] = [{
  id: 1,
  title: "The Future of Web Development: What's Next in 2024",
  slug: "future-of-web-development-2024",
  excerpt: "Explore the upcoming trends and technologies that will shape the web development landscape in 2024 and beyond.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  author: {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  date: "2024-01-15",
  readTime: "5 min read",
  category: "Technology",
  tags: ["Web Development", "Future Tech", "Programming"],
  image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3",
  featured: true
}, {
  id: 2,
  title: "Mastering React Hooks: A Complete Guide",
  slug: "mastering-react-hooks",
  excerpt: "Learn how to effectively use React Hooks to build more maintainable and efficient React applications.",
  content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  author: {
    name: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
  },
  date: "2024-01-10",
  readTime: "8 min read",
  category: "Programming",
  tags: ["React", "JavaScript", "Web Development"],
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3"
}, {
  id: 3,
  title: "Building Scalable APIs with Node.js",
  slug: "building-scalable-apis",
  excerpt: "Discover best practices and patterns for building robust and scalable APIs using Node.js.",
  content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  author: {
    name: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3"
  },
  date: "2024-01-05",
  readTime: "10 min read",
  category: "Backend",
  tags: ["Node.js", "API", "Backend"],
  image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3"
}];