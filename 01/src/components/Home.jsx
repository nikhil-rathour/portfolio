import {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import EarthCanvas from './EarthCanvas';



const Home = () => {
  useEffect(() => {
    document.title = "Nikhil Rathour | Portfolio";
  }, []);

  return ( 
        <div className="">

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

          </motion.div>

          {/* Right Column - Image/Illustration */}
          <div className="flex justify-center items-center w-full h-[60vh] mt-4"> {/* Reduced margin and adjusted height */}
            <EarthCanvas />
      

          </div>
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500">
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
              { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500', bgColor: 'from-blue-500/20 to-indigo-500/20' }
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
