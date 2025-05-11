// src/pages/Projects.jsx
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PetZone",
      description: "A hackathon-winning project for pet adoption and services using React, JavaScript, and Appwrite.",
      tags: ["React", "JavaScript", "Appwrite"],
      image: "/project1.jpg",
      link: "https://petzone-mu.vercel.app/"
    },
    {
      id: 2,
      title: "EVENTsync",
      description: "Website for college clubs and activities management with event scheduling and registration.",
      tags: ["React", "Node.js", "Express"],
      image: "/project2.jpg",
      link: "https://eventsync-tafw.onrender.com/"
    },
    {
      id: 3,
      title: "GitHub API",
      description: "A simplified interface for fetching and displaying GitHub user repositories and information.",
      tags: ["React", "JavaScript", "GitHub API"],
      image: "/project3.jpg",
      link: "https://github-api-rho-two.vercel.app/"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Custom portfolio website with animations and responsive design (this website).",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "/project4.jpg",
      link: "#"
    },
    // {
    //   id: 5,
    //   title: "Weather Dashboard",
    //   description: "Real-time weather application with forecast data visualization.",
    //   tags: ["JavaScript", "API Integration", "Chart.js"],
    //   image: "/project5.jpg",
    //   link: "#"
    // },
    // {
    //   id: 6,
    //   title: "Social Media Analytics",
    //   description: "Dashboard for tracking social media metrics and engagement.",
    //   tags: ["React", "D3.js", "Express"],
    //   image: "/project6.jpg",
    //   link: "#"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A collection of my recent work and case studies
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>
                  <div className="h-full w-full bg-gray-700 flex items-center justify-center">
                    <span className="text-4xl text-gray-500">Project {project.id}</span>
                  </div>
                  {/* Replace with actual project image */}
                  {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <span className="ml-2 fas fa-arrow-right"></span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Have a project in mind?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm available for freelance work and collaborations. Let's turn your ideas into reality!
            </p>
            <a 
              href="connect" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Get In Touch <span className="ml-2 fas fa-paper-plane"></span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;