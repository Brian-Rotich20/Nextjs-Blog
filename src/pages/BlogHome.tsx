import React, { useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogCard from '../components/blog/BlogCard';
import SearchBar from '../components/blog/SearchBar';
import CategoryTags from '../components/blog/CategoryTags';
import NewsletterSignup from '../components/blog/NewsletterSignup';
const BlogHome: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  return <div className="max-w-7xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-gold">Tech</span> Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Exploring the latest in web development and technology
        </p>
      </header>
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="lg:w-2/3">
          {featuredPost && <FeaturedPost post={featuredPost} />}
        </div>
        <div className="lg:w-1/3 space-y-8">
          <SearchBar onSearch={setSearchQuery} />
          <CategoryTags categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          <NewsletterSignup />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => <BlogCard key={post.id} post={post} />)}
      </div>
    </div>;
};
export default BlogHome;