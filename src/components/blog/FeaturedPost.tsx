import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../data/blogPosts';
interface FeaturedPostProps {
  post: BlogPost;
}
const FeaturedPost: React.FC<FeaturedPostProps> = ({
  post
}) => {
  return <Link to={`/post/${post.slug}`} className="group block relative h-[500px] rounded-lg overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="inline-block px-3 py-1 bg-gold text-dark-100 rounded-full text-sm font-medium mb-4">
          Featured
        </span>
        <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
        <p className="text-gray-200 mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-4">
          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
          <div>
            <div className="text-white font-medium">{post.author.name}</div>
            <div className="text-gray-300 text-sm">
              {new Date(post.date).toLocaleDateString()} · {post.readTime}
            </div>
          </div>
        </div>
      </div>
    </Link>;
};
export default FeaturedPost;