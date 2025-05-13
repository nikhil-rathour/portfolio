import {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import EarthCanvas from './EarthCanvas';



const Home = () => {
  useEffect(() => {
    document.title = "Nikhil Rathour | Portfolio";
  }, []);



  // hendel scroller 
   const handleScrollToBottom = () => {
    
    
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  return ( 
      <div className=" text-white">
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32"> {/* Adjusted padding */}
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
               className="px-5 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"

              >
                View My Work
              </Link>
              <Link 
                to="/connect" 
                className="px-5 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </Link>

              <a
                href="Nikhil_rathour_resume.pdf" // Replace with your actual resume path
                download="Nikhil_Rathour_Resume.pdf"
               className="px-3 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"

               >
               Download Resume
                </a>


            </div>
           
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { 
                  name: 'github',
                  url: 'https://github.com/nikhil-rathour',
                  icon: 'fab fa-github',
                  color: 'group-hover:text-gray-100'
                },
                { 
                  name: 'linkedin',
                  url: 'https://www.linkedin.com/in/nikhil-rathour-8a56302a6',
                  icon: 'fab fa-linkedin-in',
                  color: 'group-hover:text-blue-400'
                },
                { 
                  name: 'discord',
                  url: 'https://discord.com/channels/@.nikhil_rathore',
                  icon: 'fab fa-discord',
                  color: 'group-hover:text-indigo-400'
                },
                { 
                  name: 'instagram',
                  url: 'https://www.instagram.com/nikhil_.rathour',
                  icon: 'fab fa-instagram',
                  color: 'group-hover:text-pink-500'

                }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="w-12 h-12 flex items-center justify-center rounded-lg  hover:bg-gray-700  hover:border-gray-500 transition-all duration-300 group shadow-lg hover:shadow-cyan-900/20"
                  aria-label={social.name}
                >
               <span className={`text-gray-400 ${social.color} text-xl fab ${social.icon}`}></span>

                </a>
              ))}
            </div>

          </motion.div>

          {/* Right Column - Image/Illustration */}
          <div className="flex justify-center items-center w-full h-[40vh] md:h-[60vh] mt-4">
              <EarthCanvas />
             </div>
        </div>
      </section>

{/* Skills Section */}
<section className="py-16 md:py-20 relative">
  <div className="container mx-auto px-4 sm:px-6">
     <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-10 md:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500">
          S K I L L S
        </span>
      </h2>

      {/* Scroll button */}
      <div className="flex justify-center mt-2">
        <button
          onClick={handleScrollToBottom}
          className="text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
          aria-label="Scroll to bottom"
        >
          <i className="fas fa-chevron-down text-3xl"></i>
        </button>
      </div>
    </motion.div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
      {[ 
        { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400', borderColor: 'border-cyan-400/20', hoverBorder: 'hover:border-cyan-400', shadow: 'hover:shadow-cyan-400/20' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400', borderColor: 'border-yellow-400/20', hoverBorder: 'hover:border-yellow-400', shadow: 'hover:shadow-yellow-400/20' },
        { name: 'Tailwind', icon: 'fas fa-wind', color: 'text-blue-400', borderColor: 'border-blue-400/20', hoverBorder: 'hover:border-blue-400', shadow: 'hover:shadow-blue-400/20' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500', borderColor: 'border-green-500/20', hoverBorder: 'hover:border-green-500', shadow: 'hover:shadow-green-500/20' },
        { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500', borderColor: 'border-orange-500/20', hoverBorder: 'hover:border-orange-500', shadow: 'hover:shadow-orange-500/20' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500', borderColor: 'border-blue-500/20', hoverBorder: 'hover:border-blue-500', shadow: 'hover:shadow-blue-500/20' },
        { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-300', borderColor: 'border-gray-300/20', hoverBorder: 'hover:border-gray-300', shadow: 'hover:shadow-gray-300/20' },
        { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-400', borderColor: 'border-red-400/20', hoverBorder: 'hover:border-red-400', shadow: 'hover:shadow-red-400/20' },
        { name: 'Vercel', icon: 'fas fa-caret-up', color: 'text-white', borderColor: 'border-white/20', hoverBorder: 'hover:border-white', shadow: 'hover:shadow-white/20' },
        { name: 'React Fiber', icon: 'fas fa-cubes', color: 'text-purple-400', borderColor: 'border-purple-400/20', hoverBorder: 'hover:border-purple-400', shadow: 'hover:shadow-purple-400/20' },
        { name: '3D Animation', icon: 'fas fa-cube', color: 'text-pink-400', borderColor: 'border-pink-400/20', hoverBorder: 'hover:border-pink-400', shadow: 'hover:shadow-pink-400/20' },
        { name: 'Vite', icon: 'fas fa-bolt', color: 'text-yellow-300', borderColor: 'border-yellow-300/20', hoverBorder: 'hover:border-yellow-300', shadow: 'hover:shadow-yellow-300/20' }
      ].map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`backdrop-blur-sm p-5 md:p-8 rounded-xl border ${skill.borderColor} ${skill.hoverBorder}/40 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:shadow-lg ${skill.shadow} transform hover:-translate-y-2 group`}
        >
          <span className={`${skill.color} text-4xl md:text-5xl group-hover:animate-bounce-gentle transition-transform duration-300`}>
            <i className={skill.icon}></i>
          </span>
          <h3 className="font-medium text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</h3>
        </motion.div>
      ))}
    </div>

    {/* Scroll down button */}
    
  </div>
</section>


     
    </div>
  );
};

export default Home;
