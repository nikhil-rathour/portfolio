import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import visitorCounter from '../services/visitorCounter';

const Home = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Function to animate count from 0 to final number
  const animateCount = (finalCount) => {
    setDisplayCount(0);
    setIsLoading(true);
    
    const duration = 2000;
    const frameRate = 24;
    const totalFrames = duration / 1000 * frameRate;
    const increment = finalCount / totalFrames;
    let currentFrame = 0;
    
    const interval = setInterval(() => {
      currentFrame++;
      
      if (currentFrame >= totalFrames) {
        setDisplayCount(finalCount);
        setIsLoading(false);
        clearInterval(interval);
      } else {
        const nextCount = Math.round(increment * currentFrame);
        setDisplayCount(nextCount);
      }
    }, 1000 / frameRate);
    
    return () => clearInterval(interval);
  };
  
  useEffect(() => {
    document.title = "Nikhil Rathour | Portfolio";
    
    const updateVisitorCount = async () => {
      try {
        // First increment the count
        const response = await visitorCounter.incrementCount();
        const count = response.count;
        
        // Update the actual visitor count
        setVisitorCount(count);
        
        // Start the animation from 0 to the final count
        animateCount(count);
      } catch (error) {
        console.error('Error updating visitor count:', error);
        // Fallback to simple count if there's an error
        const fallbackCount = parseInt(localStorage.getItem('visitorCount') || 0) + 1;
        localStorage.setItem('visitorCount', fallbackCount.toString());
        animateCount(fallbackCount);
      }
    };
    
    updateVisitorCount();
  }, []);

  // ... rest of your component remains the same ...

  return ( 
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Hero Section */} 
      <section className="container mx-auto px-4 sm:px-6 py-20 md:py-32 lg:py-40"> 
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6 md:space-y-8"
          > 
            <div className="space-y-4"> 
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Hi, I'm <span className="animate-text bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">Nikhil</span> 
              </h1> 
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300"> 
                <span className="typewriter border-r-2 border-cyan-400 pr-1 animate-cursor">Frontend Developer</span> 
              </h2> 
              <p className="text-base md:text-lg text-gray-400 max-w-lg">
                I create beautiful, responsive websites and applications with modern technologies.
                Passionate about UI/UX design and creating seamless user experiences. 
              </p> 
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </Link>
              <Link 
                to="/connect" 
                className="px-5 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { 
                  name: 'github',
                  url: 'https://github.com/nikhil-rathour',
                  icon: 'fab fa-github'
                },
                { 
                  name: 'linkedin',
                  url: 'https://www.linkedin.com/in/nikhil-rathour-8a56302a6',
                  icon: 'fab fa-linkedin-in'
                },
                { 
                  name: 'discord',
                  url: 'https://discord.com/channels/@.nikhil_rathore',
                  icon: 'fab fa-discord'
                },
                { 
                  name: 'instagram',
                  url: 'https://www.instagram.com/nikhil_.rathour',
                  icon: 'fab fa-instagram'
                }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className={`text-gray-400 group-hover:text-white text-lg ${social.icon}`}></span>
                </a>
              ))}
            </div>
            
            {/* Visitor Counter with Count-Up Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mt-6 group"
            >
              {/* Animated gradient background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              
              {/* Main counter container */}
              <div className="relative flex items-center gap-4 bg-gray-800/90 backdrop-blur-lg py-4 px-5 rounded-lg border border-gray-700 shadow-lg overflow-hidden group-hover:shadow-cyan-500/20 transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-600/20 to-transparent"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-md"></div>
                
                {/* Eye icon container */}
                <div className="flex flex-shrink-0 items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full border border-cyan-400/40 shadow-md shadow-cyan-500/20 overflow-hidden group-hover:shadow-cyan-500/40 transition-all duration-300">
                  <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 ${isLoading ? 'animate-pulse' : ''}`}>
                    {/* Loading spinner that transitions to eye */}
                    <i className={`fas ${isLoading ? 'fa-spinner fa-spin' : 'fa-eye'} text-2xl text-cyan-300`}></i>
                    
                    {/* Circular progress indicator */}
                    {isLoading && (
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle 
                          cx="50%" 
                          cy="50%" 
                          r="48%" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          className="text-cyan-500/30"
                        />
                        <circle 
                          cx="50%" 
                          cy="50%" 
                          r="48%" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          strokeDasharray="300"
                          strokeDashoffset={isLoading ? "300" : "0"}
                          className="text-cyan-400 transition-all duration-2000"
                        >
                          <animate 
                            attributeName="stroke-dashoffset" 
                            from="300" 
                            to="0" 
                            dur="2s" 
                            fill="freeze" 
                          />
                        </circle>
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Counter Text */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-300 text-xs font-medium uppercase tracking-wider">Portfolio Visitors</span>
                    {isLoading && (
                      <span className="px-2 py-0.5 bg-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium animate-pulse flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        Counting...
                      </span>
                    )}
                  </div>
                  
                  {/* The counter that animates from 0 to final count */}
                  <div className="flex items-baseline mt-1">
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white tracking-tight font-mono">
                      {displayCount.toLocaleString()}
                    </div>
                    <span className="ml-2 text-xs text-cyan-400 font-medium">visits</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-2 w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-2000 rounded-full"
                      style={{ 
                        width: isLoading ? `${(displayCount / Math.max(visitorCount, 1)) * 100}%` : '100%'
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-full opacity-30 blur-md animate-spin-slow"></div>
              
              <div className="relative w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-700 shadow-xl shadow-purple-500/20">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80"></div>
                <span className="text-6xl md:text-8xl relative z-10">👨‍💻</span>
                {/* Replace with your actual image */}
                {/* <img src="/your-photo.jpg" alt="Nikhil Rathour" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple to-blue-500">
              My Skills
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400', bgColor: 'from-cyan-500/20 to-blue-500/20' },
              { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400', bgColor: 'from-yellow-500/20 to-amber-500/20' },
              { name: 'Tailwind', icon: 'fas fa-wind', color: 'text-blue-400', bgColor: 'from-blue-500/20 to-cyan-500/20' },
              { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500', bgColor: 'from-green-500/20 to-emerald-500/20' },
              { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500', bgColor: 'from-orange-500/20 to-red-500/20' },
              { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500', bgColor: 'from-blue-500/20 to-indigo-500/20' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${skill.bgColor} backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1 group`}
              >
                <span className={`${skill.color} text-3xl md:text-4xl group-hover:animate-bounce-gentle`}>
                  <i className={skill.icon}></i>
                </span>
                <h3 className="font-medium text-sm md:text-base text-gray-300 group-hover:text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;