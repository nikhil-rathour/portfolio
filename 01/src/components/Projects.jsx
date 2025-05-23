// src/pages/Projects.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  const projects = [
    {
      id: 1,
      title: "PetZone",
      description: "A hackathon-winning project for pet adoption and services using React, JavaScript, and Appwrite.",
      tags: ["React", "JavaScript", "Appwrite"],
      image: "/petzonelogo.jpg"
,
      link: "https://petzone-mu.vercel.app/",
      category: "web"
    },
    {
      id: 2,
      title: "EVENTsync",
      description: "Website for college clubs and activities management with event scheduling and registration.",
      tags: ["React", "Node.js", "Express"],
      image: "/project2.jpg",
      link: "https://eventsync-tafw.onrender.com/",
      category: "web"
    },
    {
      id: 3,
      title: "GitHub API",
      description: "A simplified interface for fetching and displaying GitHub user repositories and information.",
      tags: ["React", "JavaScript", "GitHub API"],
      image: "/project3.jpg",
      link: "https://github-api-rho-two.vercel.app/",
      category: "api"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Custom portfolio website with animations and responsive design (this website).",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "/portfolio.jpg",
      link: "#",
      category: "web"
    },
    // {
    //   id: 5,
    //   title: "Weather Dashboard",
    //   description: "Real-time weather application with forecast data visualization.",
    //   tags: ["JavaScript", "API Integration", "Chart.js"],
    //   image: "/project5.jpg",
    //   link: "#",
    //   category: "api"
    // },
    // {
    //   id: 6,
    //   title: "Social Media Analytics",
    //   description: "Dashboard for tracking social media metrics and engagement.",
    //   tags: ["React", "D3.js", "Express"],
    //   image: "/project6.jpg",
    //   link: "#",
    //   category: "data"
    // }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  // Project card hover animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -5, 
      boxShadow: "0 10px 30px -15px rgba(0, 240, 255, 0.2)",
      borderColor: "rgba(0, 240, 255, 0.5)",
      transition: { duration: 0.2 }
    }
  };

  // Stagger animation for projects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
      <section className="container mx-auto px-6 py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              P R O J E C T S
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            A showcase of my technical expertise and creative solutions
          </p>
          
          {/* Filter Buttons */}
          
        </motion.div>
      </section>

      {/* Projects Grid with Improved Layout */}
      <section className="py-10 pb-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-gray-800/5 backdrop-blur-2 border border-gray-700/70 rounded-2xl overflow-hidden flex flex-col h-full transform transition-all duration-500"
              >
                
                
                <div className="p-8 flex-grow">
                  <h3 className="project-heading text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-gray-700/70 rounded-full text-sm text-cyan-300 border border-gray-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="px-8 pb-8 mt-auto">
                  <a 
                    href={project.link} 
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500 hover:to-blue-500 border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-white font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <span className="ml-2 fas fa-arrow-right"></span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
       
         
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800/7 to-gray-900/7 backdrop-blur-1 rounded-3xl p-12 border-solide "
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                    Ready to bring your ideas to reali?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  I'm available for freelance projects, collaborations, and interesting challenges. Let's create something amazing together!
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <motion.div>
                   <Link 
                  to="/connect" 
                className="px-5 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"

                >
                  Let's Connect <span className="ml-2">→</span>
                </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer Navigation */}
      
    </div>
  );
};

export default Projects;