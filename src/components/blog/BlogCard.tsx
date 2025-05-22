import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../data/blogPosts';
interface BlogCardProps {
  post: BlogPost;
}
const BlogCard: React.FC<BlogCardProps> = ({
  post
}) => {
  return <Link to={`/post/${post.slug}`} className="group block bg-light-300 dark:bg-dark-100 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-light-200 dark:bg-dark-200 rounded-full text-sm mb-4">
          {post.category}
        </span>
        <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4">
          <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
          <div className="text-sm">
            <div className="font-medium">{post.author.name}</div>
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString()} · {post.readTime}
            </div>
          </div>
        </div>
      </div>
    </Link>;
};
export default BlogCard;