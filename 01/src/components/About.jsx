// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Passionate Web Developer & BCA Student
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                  {/* Profile Image - Replace with your actual image */}
                  <div className="aspect-square bg-gray-700 flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
                
                {/* Languages */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-8 bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-cyan-400">🌐</span> Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["English", "Hindi", "Gujarati"].map((lang, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-700/60 rounded-full text-sm font-medium border border-gray-600"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </motion.div>
                
                {/* Contact Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6 bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-purple-400">📱</span> Contact
                  </h3>
                  <div className="space-y-3">
                    <p className="flex items-center gap-3">
                      <span className="text-purple-400">📧</span>
                      <a href="mailto:rathournikhil045@gmail.com" className="text-gray-300 hover:text-white">rathournikhil045@gmail.com</a>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-purple-400">📍</span>
                      <span className="text-gray-300">Ahmedabad, Gujarat</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-2/3 space-y-8"
            >
              <h2 className="text-3xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Who I Am
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  I'm Nikhil Rathour, a second-year Bachelor of Computer Applications (BCA) student 
                  with a passion for programming and web development. I'm actively enhancing my 
                  skills in React, JavaScript, C++, and Java while building a solid foundation in
                  Data Structures and Algorithms (DSA).
                </p>
                
                <p className="text-lg">
                  Recently, I created "PetZone" for a hackathon and proudly secured 1st runner-up at the
                  "Hack the Mountain" event in Rajkot. This experience has motivated me to continue
                  striving toward my goal of becoming a skilled web developer.
                </p>
              </div>

              {/* Core Skills */}
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Core Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    { name: "React JS", icon: "⚛️" },
                    { name: "JavaScript", icon: "🟨" },
                    { name: "Node.js", icon: "🟢" },
                    { name: "DSA", icon: "🧩" },
                    { name: "C++ / C", icon: "🔍" },
                    { name: "HTML/CSS", icon: "🎨" },
                    { name: "GitHub", icon: "🐙" },
                    { name: "Vercel", icon: "▲" }
                  ].map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="mr-2 text-xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Leadership", "Active Listening", "Problem Solving", 
                    "Critical Thinking", "Communication", "Team Management"
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-gray-800/90 to-gray-700/70 rounded-full border border-gray-600 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  to="/connect" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  Let's Connect <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Hackathons */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-purple-400">🎓</span>
                Education
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    degree: "Bachelor of Computer Applications",
                    institution: "Swarrnim Startup & Innovation University",
                    period: "2023 - 2026",
                    description: "Currently pursuing with AVG CGPA 9"
                  },
                  {
                    degree: "Senior Secondary Education",
                    institution: "I.P. Mission English School (GSEB BOARD)",
                    period: "2023",
                    description: "Completed with 80 Percentile"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-700 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-400 group-hover:animate-pulse"></div>
                    <h4 className="text-xl font-semibold">{item.degree}</h4>
                    <p className="text-purple-400 mb-1">{item.institution} • {item.period}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hackathons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-cyan-400">🚀</span>
                Hackathons
              </h3>
              
              <div className="space-y-8">
                {/* Hack the Mountains */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-5">
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center">
                        <span className="text-cyan-400 mr-2">🏔️</span>
                        Hack The Mountains 5.0
                      </h4>
                      <p className="text-gray-300 mb-3">
                        A globally recognized hackathon focused on pushing the boundaries of creativity, innovation, and collaboration in the tech industry.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded-md text-xs font-medium border border-purple-700/50">1st Runner-up</span>
                        <span className="px-2 py-1 bg-cyan-900/50 text-cyan-300 rounded-md text-xs font-medium border border-cyan-700/50">Rajkot</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded-md text-xs font-medium border border-blue-700/50">2024</span>
                      </div>
                      <div className="mt-3">
                        <h5 className="font-semibold text-purple-300 mb-2">Project: PetZone</h5>
                        <p className="text-gray-400 text-sm mb-2">
                          A comprehensive platform that connects pet owners with pet services including veterinarians, pet shops, and adoption centers.
                        </p>
                        <div className="flex gap-3 mt-3">
                          <a 
                            href="#" 
                            className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span>GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a 
                            href="#" 
                            className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span>Demo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Spark the Summer */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-5">
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center">
                        <span className="text-orange-400 mr-2">☀️</span>
                        Spark the Summer
                      </h4>
                      <p className="text-gray-300 mb-3">
                        A student-run hackathon providing a platform for developers, designers, and entrepreneurs from colleges and high schools to collaborate and innovate.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-pink-900/50 text-pink-300 rounded-md text-xs font-medium border border-pink-700/50">Participant</span>
                        <span className="px-2 py-1 bg-orange-900/50 text-orange-300 rounded-md text-xs font-medium border border-orange-700/50">2024</span>
                      </div>
                      <div className="mt-3">
                        <h5 className="font-semibold text-orange-300 mb-2">Project: EventSync</h5>
                        <p className="text-gray-400 text-sm mb-2">
                          A collaborative event management platform designed to streamline planning, scheduling, and coordination for campus events.
                        </p>
                        <div className="flex gap-3 mt-3">
                          <a 
                            href="#" 
                            className="inline-flex items-center text-sm text-orange-400 hover:text-orange-300 transition-colors duration-300"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span>GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                Future Goals
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              To become a proficient web developer, contributing innovative solutions
              to web development projects and continuously expanding my technical expertise.
            </p>
            
            <Link 
              to="/projects" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              View My Projects <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;