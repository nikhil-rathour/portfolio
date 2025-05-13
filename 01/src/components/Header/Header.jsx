import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Set active link based on current path
  const getActiveLink = () => {
    switch(location.pathname) {
      case '/':
        return 'home';
      case '/projects':
        return 'projects';
      case '/about':
        return 'about';
      case '/connect':
        return 'connect';
      default:
        return 'home';
    }
  };

  const activeLink = getActiveLink();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-10">
        {/* Horizontal header with subtle curvy outlines and reduced blur - with extra width padding */}
        <nav className="flex items-center justify-between relative px-10">
          {/* Blurred transparent background with curved edges - elongated */}
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm rounded-3xl w-full border border-gray-500/20 shadow-md"></div>
          
          {/* Logo with neon effect */}
          <div className="relative z-10">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 relative"
            >
              <span className="animate-text bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">N  I  K  H  I  L</span>
            </Link>
          </div>

          {/* Desktop Navigation Links - horizontal with more spacing */}
          <div className="hidden md:flex items-center space-x-10 relative z-10 pr-4">
            <Link 
              to="/" 
              className={`relative px-3 py-2 transition-all ${activeLink === 'home' ? 'text-cyan-300' : 'text-gray-300 hover:text-white'}`}
            >
              Home
              {activeLink === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full animate-pulse"></span>
              )}
            </Link>
            
            <Link 
              to="/projects" 
              className={`relative px-3 py-2 transition-all ${activeLink === 'projects' ? 'text-purple-300' : 'text-gray-300 hover:text-white'}`}
            >
              Projects
              {activeLink === 'projects' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 rounded-full animate-pulse"></span>
              )}
            </Link>
            
            <Link 
              to="/about" 
              className={`relative px-3 py-2 transition-all ${activeLink === 'about' ? 'text-pink-300' : 'text-gray-300 hover:text-white'}`}
            >
              About
              {activeLink === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 rounded-full animate-pulse"></span>
              )}
            </Link>
            
            <Link 
              to="/connect" 
              className={`relative px-3 py-2 transition-all ${activeLink === 'connect' ? 'text-cyan-300' : 'text-gray-300 hover:text-white'}`}
            >
              Connect
              {activeLink === 'connect' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full animate-pulse"></span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none relative z-10"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-64 opacity-100 mt-4 mb-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 px-6 rounded-xl shadow-lg relative overflow-hidden border border-gray-700/30 w-full">
            {/* Gradient background with reduced blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm"></div>
            
            {/* Subtle gradient edge glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/5 to-pink-500/10 opacity-30"></div>
            
            <Link 
              to="/" 
              className={`relative px-4 py-2 rounded-md transition-all ${
                activeLink === 'home' 
                  ? 'bg-gray-800/40 text-cyan-300 border-l-2 border-cyan-400' 
                  : 'text-gray-300 hover:bg-gray-800/20 hover:text-white'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/projects" 
              className={`relative px-4 py-2 rounded-md transition-all ${
                activeLink === 'projects' 
                  ? 'bg-gray-800/40 text-purple-300 border-l-2 border-purple-400' 
                  : 'text-gray-300 hover:bg-gray-800/20 hover:text-white'
              }`}
            >
              Projects
            </Link>
            
            <Link 
              to="/about" 
              className={`relative px-4 py-2 rounded-md transition-all ${
                activeLink === 'about' 
                  ? 'bg-gray-800/40 text-pink-300 border-l-2 border-pink-400' 
                  : 'text-gray-300 hover:bg-gray-800/20 hover:text-white'
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/connect" 
              className={`relative px-4 py-2 rounded-md transition-all ${
                activeLink === 'connect' 
                  ? 'bg-gray-800/40 text-cyan-300 border-l-2 border-cyan-400' 
                  : 'text-gray-300 hover:bg-gray-800/20 hover:text-white'
              }`}
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;