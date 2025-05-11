// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Nikhil Rathour
              </h3>
              <p className="text-gray-400 mt-2 leading-relaxed">
                Full-stack developer passionate about building modern, responsive web applications.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { 
                  name: 'github',
                  url: 'https://github.com/nikhil-rathour',
                  icon: 'fab fa-github',
                  color: 'hover:bg-gray-700 hover:text-white'
                },
                { 
                  name: 'linkedin',
                  url: 'https://www.linkedin.com/in/nikhil-rathour-8a56302a6',
                  icon: 'fab fa-linkedin-in',
                  color: 'hover:bg-blue-600 hover:text-white'
                },
                { 
                  name: 'discord',
                  url: 'https://discord.com/channels/@.nikhil_rathore',
                  icon: 'fab fa-discord',
                  color: 'hover:bg-indigo-600 hover:text-white'
                },
                { 
                  name: 'instagram',
                  url: 'https://www.instagram.com/nikhil_.rathour',
                  icon: 'fab fa-instagram',
                  color: 'hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white'
                }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <span className={`${social.icon} text-lg`}></span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Express', 'Figma'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-700/80 transition-all border border-gray-700/50"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-white">Contact Me</h3>
            <div className="space-y-4">
              <a 
                href="mailto:rathournikhil042@gmail.com" 
                className="flex items-start gap-3 group"
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <span className="fas fa-envelope text-cyan-400"></span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white group-hover:text-cyan-400 transition-colors">rathournikhil042@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+917505445202" 
                className="flex items-start gap-3 group"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <span className="fas fa-phone-alt text-blue-400"></span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white group-hover:text-blue-400 transition-colors">+91 75054 45202</p>
                </div>
              </a>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <span className="fas fa-map-marker-alt text-purple-400"></span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Ahmedabad, Gujrat, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 mt-14 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Nikhil Rathour. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Crafted with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;