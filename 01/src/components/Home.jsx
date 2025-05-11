// src/pages/Home.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    document.title = "Your Name | Portfolio";
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 md:py-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Hi, I'm <span className="neon-text">Nikhil</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                <span className="typewriter">Frontend Developer</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-lg">
                I create beautiful, responsive websites and applications with modern technologies. 
                Passionate about UI/UX design and creating seamless user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                View My Work
              </Link>
              <Link 
                to="/connect" 
                className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            {/* Social Links */}
    <div className="flex space-x-4 pt-4">
   {[
    { 
      name: 'github',
      url: 'https://github.com/nikhil-rathour'
    },
    { 
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nikhil-rathour-8a56302a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    { 
      name: 'discord',
      url: 'https://discord.com/channels/@.nikhil_rathore'
    },
    { 
      name: 'instagram',
      url: 'https://www.instagram.com/nikhil_.rathour?igsh=djRoMWF5eGZpZDly'
    }
  ].map((social) => (
    <a 
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 group"
      aria-label={social.name}
    >
      <span className={`text-gray-400 group-hover:text-cyan-400 text-xl fab fa-${social.name}`}></span>
    </a>
   ))}
    </div>
          </motion.div>

          {/* Right Column - Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Placeholder for your image or illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-700">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                <span className="text-6xl md:text-8xl">👨‍💻</span>
                {/* Replace with your actual image */}
                {/* <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              My Skills
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' },
              { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
              { name: 'Tailwind', icon: 'fas fa-wind', color: 'text-blue-400' },
              { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
              { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
              { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500' },

            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 flex flex-col items-center justify-center gap-3"
              >
                <span className={`${skill.color} text-4xl`}>
                  <span className={skill.icon}></span>
                </span>
                <h3 className="font-medium text-gray-300">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>










      



    </div></>
  );
};

export default Home;