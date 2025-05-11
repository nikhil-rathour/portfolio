// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import  './Index.css'; // Assuming you have a CSS file for styles

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 bg-gray-900/90 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo with neon effect */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 relative"
            onClick={() => setActiveLink('home')}
          >
            <span className="neon-text">Portfolio</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`relative px-3 py-2 transition-all ${activeLink === 'home' ? 'text-cyan-300' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveLink('home')}
            >
              Home
              {activeLink === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full animate-pulse"></span>
              )}
            </Link>
            
            <Link 
              to="/projects" 
              className={`relative px-3 py-2 transition-all ${activeLink === 'projects' ? 'text-purple-300' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveLink('projects')}
            >
              Projects
              {activeLink === 'projects' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 rounded-full animate-pulse"></span>
              )}
            </Link>
            
            <Link 
              to="/about" 
              className={`relative px-3 py-2 transition-all ${activeLink === 'about' ? 'text-pink-300' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveLink('about')}
            >
              About
              {activeLink === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 rounded-full animate-pulse"></span>
              )}
            </Link>
            
            <Link 
              to="/connect" 
              className={`relative px-3 py-2 transition-all ${activeLink === 'connect' ? 'text-cyan-300' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveLink('connect')}
            >
              Connect
              {activeLink === 'connect' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full animate-pulse"></span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;