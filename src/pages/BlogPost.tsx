import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeftIcon, ClockIcon, CalendarIcon } from 'lucide-react';
const BlogPost: React.FC = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const post = blogPosts.find(post => post.slug === slug);
  if (!post) {
    return <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/" className="text-gold hover:underline">
          Return to blog
        </Link>
      </div>;
  }
  return <article className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-gold hover:underline mb-8">
        <ArrowLeftIcon size={20} className="mr-2" />
        Back to blog
      </Link>
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon size={18} />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon size={18} />
            <span>{post.readTime}</span>
          </div>
        </div>
        <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-lg" />
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        {post.content}
      </div>
      <footer className="border-t border-gray-200 dark:border-gray-800 pt-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => <span key={tag} className="px-3 py-1 bg-light-300 dark:bg-dark-100 rounded-full text-sm">
              {tag}
            </span>)}
        </div>
      </footer>
    </article>;
};
export default BlogPost;