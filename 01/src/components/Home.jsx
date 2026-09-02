import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import EarthCanvas from './EarthCanvas';
import { Seo } from '../seo';

const ROLES = [
  'Full-Stack Developer',
  'Python Intern',
  'MERN & FastAPI',
];

const SOCIALS = [
  {
    name: 'github',
    url: 'https://github.com/nikhil-rathour',
    icon: 'fab fa-github',
    color: 'group-hover:text-gray-100',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/nikhil-rathour',
    icon: 'fab fa-linkedin-in',
    color: 'group-hover:text-blue-400',
  },
  {
    name: 'discord',
    url: 'https://discord.com/channels/@.nikhil_rathore',
    icon: 'fab fa-discord',
    color: 'group-hover:text-indigo-400',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/nikhil_.rathour',
    icon: 'fab fa-instagram',
    color: 'group-hover:text-pink-500',
  },
];

const SKILLS = [
  { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400', borderColor: 'border-cyan-400/20', hoverBorder: 'hover:border-cyan-400', shadow: 'hover:shadow-cyan-400/20' },
  { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400', borderColor: 'border-yellow-400/20', hoverBorder: 'hover:border-yellow-400', shadow: 'hover:shadow-yellow-400/20' },
  { name: 'Python', icon: 'fab fa-python', color: 'text-blue-400', borderColor: 'border-blue-400/20', hoverBorder: 'hover:border-blue-400', shadow: 'hover:shadow-blue-400/20' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500', borderColor: 'border-green-500/20', hoverBorder: 'hover:border-green-500', shadow: 'hover:shadow-green-500/20' },
  { name: 'Express', icon: 'fas fa-server', color: 'text-gray-300', borderColor: 'border-gray-300/20', hoverBorder: 'hover:border-gray-300', shadow: 'hover:shadow-gray-300/20' },
  { name: 'FastAPI', icon: 'fas fa-rocket', color: 'text-green-400', borderColor: 'border-green-400/20', hoverBorder: 'hover:border-green-400', shadow: 'hover:shadow-green-400/20' },
  { name: 'Django', icon: 'fas fa-code', color: 'text-green-400', borderColor: 'border-green-400/20', hoverBorder: 'hover:border-green-400', shadow: 'hover:shadow-green-400/20' },
  { name: 'MongoDB', icon: 'fas fa-leaf', color: 'text-green-600', borderColor: 'border-green-600/20', hoverBorder: 'hover:border-green-600', shadow: 'hover:shadow-green-600/20' },
  { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-sky-400', borderColor: 'border-sky-400/20', hoverBorder: 'hover:border-sky-400', shadow: 'hover:shadow-sky-400/20' },
  { name: 'JWT / Firebase', icon: 'fas fa-lock', color: 'text-amber-400', borderColor: 'border-amber-400/20', hoverBorder: 'hover:border-amber-400', shadow: 'hover:shadow-amber-400/20' },
  { name: 'Gemini AI', icon: 'fas fa-brain', color: 'text-purple-400', borderColor: 'border-purple-400/20', hoverBorder: 'hover:border-purple-400', shadow: 'hover:shadow-purple-400/20' },
  { name: 'Postman', icon: 'fas fa-paper-plane', color: 'text-orange-400', borderColor: 'border-orange-400/20', hoverBorder: 'hover:border-orange-400', shadow: 'hover:shadow-orange-400/20' },
  { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500', borderColor: 'border-orange-500/20', hoverBorder: 'hover:border-orange-500', shadow: 'hover:shadow-orange-500/20' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500', borderColor: 'border-blue-500/20', hoverBorder: 'hover:border-blue-500', shadow: 'hover:shadow-blue-500/20' },
  { name: 'Tailwind', icon: 'fas fa-wind', color: 'text-cyan-300', borderColor: 'border-cyan-300/20', hoverBorder: 'hover:border-cyan-300', shadow: 'hover:shadow-cyan-300/20' },
  { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-300', borderColor: 'border-gray-300/20', hoverBorder: 'hover:border-gray-300', shadow: 'hover:shadow-gray-300/20' },
];

const Home = () => {
  const [displayed, setDisplayed] = useState('');
  const typeIndex = useRef(0);
  const roleIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeoutId;

    const tick = () => {
      const current = ROLES[roleIndex.current];

      if (!deleting.current) {
        typeIndex.current += 1;
        setDisplayed(current.slice(0, typeIndex.current));

        if (typeIndex.current >= current.length) {
          deleting.current = true;
          timeoutId = setTimeout(tick, 1600);
          return;
        }

        timeoutId = setTimeout(tick, 85);
        return;
      }

      typeIndex.current -= 1;
      setDisplayed(current.slice(0, Math.max(typeIndex.current, 0)));

      if (typeIndex.current <= 0) {
        deleting.current = false;
        roleIndex.current = (roleIndex.current + 1) % ROLES.length;
        timeoutId = setTimeout(tick, 350);
        return;
      }

      timeoutId = setTimeout(tick, 45);
    };

    timeoutId = setTimeout(tick, 400);
    return () => clearTimeout(timeoutId);
  }, []);

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-white">
      <Seo title="Nikhil Rathour | Full Stack Developer & Software Engineer" />
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative flex items-start md:items-center min-h-0 md:min-h-[100svh]">
        <div className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1.5 text-xs sm:text-sm text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
                </span>
                Open to internships & collaborations
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I&apos;m{' '}
                  <span className="animate-text bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                    Nikhil
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 min-h-[2.25rem]">
                  <span className="border-r-2 border-cyan-400 pr-1 animate-cursor">
                    {displayed}
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed">
                  Full-stack developer building scalable apps with React, Node.js, Python, and FastAPI.
                  I ship REST APIs, JWT auth, and AI-powered features for production-ready products.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-lg font-semibold text-gray-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View My Work
                </Link>
                <Link
                  to="/connect"
                  className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Me
                </Link>
                <a
                  href="/Nikhil_Rathour_Resume.pdf"
                  download="Nikhil_Rathour_Resume.pdf"
                  className="px-5 py-3 text-gray-300 rounded-lg font-medium hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>

              <div className="flex space-x-3 pt-2">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg border border-transparent hover:bg-gray-800/70 hover:border-gray-600/40 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <span className={`text-gray-400 ${social.color} text-xl ${social.icon}`}></span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative w-full md:w-1/2 h-[280px] sm:h-[42vh] md:h-[62vh] max-h-[560px]"
            >
              <div className="absolute inset-10 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
              <EarthCanvas />
            </motion.div>
          </div>
        </div>

        <button
          onClick={scrollToSkills}
          className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
          aria-label="Scroll to skills"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </section>

      <section id="skills" className="py-16 md:py-20 relative scroll-mt-24">
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
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
            {SKILLS.map((skill, index) => (
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
                <h3 className="font-medium text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
