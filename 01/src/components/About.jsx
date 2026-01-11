// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import IronManCanvas from './Ironman';

const About = () => {
  return (
   <div className=" text-white">
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-4000"></div>
      </div>
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
              A B O U T 
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Passionate Web Developer & BCA Student
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-900/">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="   flex justify-center w-full lg:w-auto" // Full width on mobile, auto on desktop
          >
            {/* Container for IronManCanvas */}
            <div className="w-[280px] h-[50vh] md:w-[320px] md:h-[60vh]">
              <IronManCanvas />
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
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Who I Am
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  I'm a Python Full-Stack Developer currently pursuing a Bachelor of Computer Applications, 
                  with hands-on experience in building scalable web applications. I specialize in Python, 
                  FastAPI, React, MongoDB, and RESTful APIs, with a strong focus on backend development 
                  and a keen interest in Artificial Intelligence and Large Language Models (LLMs).
                  </p>
                
                 <p className="text-lg">
                  In 2024, I secured the 1st Runner-Up position at the Hack the Mountain national-level 
                  hackathon in Rajkot for my project "PetZone." This experience has motivated me to continue
                  striving toward my goal of becoming a skilled full-stack developer.
                 </p>
                  </div>

                 {/* Core Skills */}
               {/* Core Skills */}
                    <div className="pt-4">
                    <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent  bg-gradient-to-r from-cyan-400 to-blue-500">
                      Core Skills
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {/* React */}
                      <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
                        <div className="w-6 h-6 mr-3 text-blue-400 group-hover:text-blue-500 transition-colors">
                          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm9.318.135c-.44.02-.89.034-1.345.034-.46 0-.915-.01-1.36-.034.44.572.895 1.095 1.345 1.565.455-.47.91-.993 1.36-1.565z" />
                          </svg>
                        </div>
                        <span className="font-medium">React JS</span>
                      </div>
                      
                      {/* JavaScript */}
                      <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
                        <div className="w-6 h-6 mr-3 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                          </svg>
                        </div>
                        <span className="font-medium">JavaScript</span>
                      </div>

                      {/* Python */}
                      <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
                        <div className="w-6 h-6 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                          </svg>
                        </div>
                        <span className="font-medium">Python</span>
                      </div>
    
            {/* Node.js */}
           <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-6 h-6 mr-3 text-green-500 group-hover:text-green-400 transition-colors">
               <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
               </svg>
             </div>
             <span className="font-medium">Node.js</span>
           </div>

           {/* Express */}
           <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-6 h-6 mr-3 text-gray-300 group-hover:text-white transition-colors">
               <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9-.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.978-2.667C.480 14.794.002 13.117.002 11.576zm8.65-5.573a3.837 3.837 0 00-6.61.308A3.838 3.838 0 001.115 8.65h8.018a3.973 3.973 0 00-.481-2.647z" />
               </svg>
             </div>
             <span className="font-medium">Express</span>
           </div>

           {/* FastAPI */}
           <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-6 h-6 mr-3 text-green-400 group-hover:text-green-300 transition-colors">
               <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.073 7.445h.001c.1 0 .183.082.183.183v1.504c0 .1-.082.183-.183.183h-.001c-.1 0-.183-.082-.183-.183V7.628c0-.1.082-.183.183-.183zm2.146 0h.001c.1 0 .183.082.183.183v1.504c0 .1-.082.183-.183.183h-.001c-.1 0-.183-.082-.183-.183V7.628c0-.1.082-.183.183-.183zm-4.292 2.147h.001c.1 0 .183.082.183.183v1.504c0 .1-.082.183-.183.183h-.001c-.1 0-.183-.082-.183-.183V9.775c0-.1.082-.183.183-.183zm2.146 0h.001c.1 0 .183.082.183.183v1.504c0 .1-.082.183-.183.183h-.001c-.1 0-.183-.082-.183-.183V9.775c0-.1.082-.183.183-.183zm2.146 0h.001c.1 0 .183.082.183.183v1.504c0 .1-.082.183-.183.183h-.001c-.1 0-.183-.082-.183-.183V9.775c0-.1.082-.183.183-.183zm2.146 0h.001c.1 0 .183.082.183.183v1.504c0 .1-.082.183-.183.183h-.001c-.1 0-.183-.082-.183-.183V9.775c0-.1.082-.183.183-.183z" />
               </svg>
             </div>
             <span className="font-medium">FastAPI</span>
           </div>

           {/* MongoDB */}
           <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-6 h-6 mr-3 text-green-600 group-hover:text-green-500 transition-colors">
               <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
               </svg>
             </div>
             <span className="font-medium">MongoDB</span>
           </div>

           {/* Postman */}
           <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-6 h-6 mr-3 text-orange-400 group-hover:text-orange-300 transition-colors">
               <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 0 .211.073l.19-.190-.487-.487v-.517zm1.839-1.677c-.287.287-.19.618.153.618.404 0 .618-.437.618-.618a.619.619 0 0 0-.771-.618z" />
               </svg>
             </div>
             <span className="font-medium">Postman</span>
           </div>
           
           {/* HTML/CSS */}
           <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-6 h-6 mr-3 text-orange-500 group-hover:text-orange-400 transition-colors">
               <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
               </svg>
             </div>
             <span className="font-medium">HTML/CSS</span>
           </div>
           
           {/* GitHub */}
           <div className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-6 h-6 mr-3 text-gray-300 group-hover:text-white transition-colors">
               <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
               </svg>
             </div>
             <span className="font-medium">GitHub</span>
           </div>
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
                className="px-5 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
                  
                >
                  Let's Connect <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Hackathons */}


      



{/* Education & Hackathons */}
<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Education - Updated to match Hackathons style */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-purple-400">🎓</span>
          Education
        </h3>
        
        <div className="space-y-8">
          {/* BCA */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="rounded-xl p-5">

                
              



             <div className="space-y-8 mb-24">
                {[
                  {
                    degree: "Bachelor of Computer Applications",
                    institution: "Swarrnim Startup & Innovation University",

                    period: "2023 - 2026",
                    
                  }, 
                
                  {
                    degree: "Senior Secondary Education",
                    institution: "I.P. Mission English School (GSEB BOARD)",
                    period: "2023",
                   
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-700 group mb-11">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-400 group-hover:animate-pulse"></div>
                    <h4 className="text-xl font-semibold">{item.degree}</h4>
                    <p className="text-purple-400 mb-1">{item.institution} • {item.period}</p>
                    <p className="text-gray-400">{item.description}</p>
                    
                    
                  </div>
                ))}
              </div>

              </div>
            </div>
          </div>
          
        </div>
      </motion.div>

      {/* Hackathons - Fixed links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-cyan-400">🚀</span>
          Hackathons
        </h3>
        
        <div className="space-y-8">
          {/* Hack the Mountains */}
          
          <div className="group relative overflow-hidden rounded-xl mb-4">
  {/* Gradient overlay - moved to pseudo-element */}
  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
  </div>
  
  {/* Content - with higher z-index */}
  <div className="relative z-10 rounded-xl p-5">
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

      <div className="flex gap-3 mt-3 relative z-20">
        <a
          href="https://github.com/nikhil-rathour/petzone" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <span>GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>

        <a 
          href="https://petzone-mu.vercel.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
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
          {/* Spark the Summer */}
          <div className="group relative overflow-hidden rounded-xl mb-4">
  {/* Gradient overlay - moved to pseudo-element */}
  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
  </div>
  
  {/* Content - with higher z-index */}
  <div className="relative z-10 rounded-xl p-5">
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

      <div className="flex gap-3 mt-3 relative z-20">
        <a 
          href="https://github.com/snehguptafr/eventsync" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-orange-400 hover:text-orange-300 transition-colors duration-300"
        >
          <span>GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href="https://eventsync-tafw.onrender.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
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
      </motion.div>
    </div>
  </div>
</section>

      {/* Future Goals */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-clip-text text-transparent   bg-gradient-to-r from-cyan-400 to-blue-500">
                Future Goals
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              To become a proficient web developer, contributing innovative solutions
              to web development projects and continuously expanding my technical expertise.
            </p>
            
            <Link 
              to="/projects" 
                className="px-5 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
              
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