import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import BlogHome from './pages/BlogHome';
import BlogPost from './pages/BlogPost';
export function App() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };
  return <Router>
      <div className="flex w-full min-h-screen bg-light-200 dark:bg-dark-200 text-dark-100 dark:text-light-100 transition-colors duration-300">
        <main className="flex-1 overflow-x-hidden">
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<BlogHome />} />
              <Route path="/post/:slug" element={<BlogPost />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>;
}