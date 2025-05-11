// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
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
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get to know the person behind the code
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
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
                  {/* Replace with your actual image */}
                  <div className="aspect-square bg-gray-700 flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
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
                <p>
                  I'm a passionate frontend developer with 5 years of experience creating beautiful, 
                  functional websites and applications. My journey in tech started when I built my 
                  first website at 15, and I've been hooked ever since.
                </p>
                
                <p>
                  I specialize in React, JavaScript, and modern CSS frameworks like Tailwind. 
                  I love solving complex problems with elegant solutions and creating intuitive 
                  user experiences.
                </p>
                
                <p>
                  When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, 
                  or experimenting with new cooking recipes.
                </p>
              </div>

              <div className="pt-4">
                <Link 
                  to="/connect" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  Let's Connect <span className="ml-2 fas fa-arrow-right"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              My Journey
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="fas fa-briefcase text-cyan-400"></span>
                Experience
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    role: "Senior Frontend Developer",
                    company: "TechCorp Inc.",
                    period: "2020 - Present",
                    description: "Lead the frontend development team, building responsive web applications with React and TypeScript."
                  },
                  {
                    role: "Frontend Developer",
                    company: "WebSolutions Ltd.",
                    period: "2018 - 2020",
                    description: "Developed and maintained client websites, implemented new features and improved UI/UX."
                  },
                  {
                    role: "Junior Developer",
                    company: "StartUp Ventures",
                    period: "2017 - 2018",
                    description: "Assisted in building and testing web applications, learned modern development practices."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-700 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 group-hover:animate-pulse"></div>
                    <h4 className="text-xl font-semibold">{item.role}</h4>
                    <p className="text-cyan-400 mb-1">{item.company} • {item.period}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="fas fa-graduation-cap text-purple-400"></span>
                Education
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    degree: "MSc Computer Science",
                    institution: "State University",
                    period: "2015 - 2017",
                    description: "Specialized in Human-Computer Interaction and Web Technologies."
                  },
                  {
                    degree: "BSc Software Engineering",
                    institution: "Tech Institute",
                    period: "2011 - 2015",
                    description: "Graduated with honors. Thesis on modern web development frameworks."
                  },
                  {
                    degree: "Web Development Bootcamp",
                    institution: "Code Academy",
                    period: "Summer 2014",
                    description: "Intensive 3-month program focusing on full-stack JavaScript development."
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;