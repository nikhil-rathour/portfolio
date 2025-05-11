import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Connect = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data safely
    const formData = new FormData(form.current);
    const user_email = formData.get('user_email');
    
    // Validate email exists
    if (!user_email) {
      setFormStatus({ type: 'error', message: 'Please enter your email address' });
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. Send main message to yourself
      await emailjs.sendForm(
        'service_2me6wos',
        'template_s47v3nx',  // Your main template
        form.current,
        'D9SBICjjIUzf1kd0r'
      );

      // 2. Send auto-reply to user
      await emailjs.send(
        'service_2me6wos',
        'template_7ji3dbg',  // Your auto-reply template
        {
          user_name: formData.get('user_name'),
          user_email: user_email,  // Verified to exist
          subject: formData.get('subject'),
          message: formData.get('message').substring(0, 100)
        },
        'D9SBICjjIUzf1kd0r'
      );

      setFormStatus({ 
        type: 'success', 
        message: 'Message sent successfully! Check your email for confirmation.' 
      });
      form.current.reset();

    } catch (error) {
      console.error('Email error:', error);
      setFormStatus({ 
        type: 'error', 
        message: `Error: ${error.text || 'Failed to send message'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const socialIcons = [
    {
      name: 'github',
      url: 'https://github.com/nikhil-rathour',
      icon: 'fa-github',
      color: 'group-hover:text-gray-100'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nikhil-rathour-8a56302a6',
      icon: 'fa-linkedin-in',
      color: 'group-hover:text-blue-400'
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/nikhil_.rathour',
      icon: 'fa-instagram',
      color: 'group-hover:text-pink-500'
    },
    {
      name: 'discord',
      url: 'https://discord.com/channels/@.nikhil_rathore',
      icon: 'fa-discord',
      color: 'group-hover:text-indigo-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-full h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Let's Connect
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 0.8 }}
            ></motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Have a question or want to work together? Drop me a message below.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            {/* Contact Info */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-1/3 space-y-8"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold relative inline-block"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Contact Information
                </span>
                <span className="block h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2"></span>
              </motion.h2>
              
              <motion.div 
                variants={containerVariants}
                className="space-y-6"
              >
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-5 group"
                >
                  <div className="p-4 bg-gray-800/70 rounded-xl text-cyan-400 shadow-lg shadow-cyan-500/10 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300">
                    <span className="fas fa-envelope text-xl"></span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a 
                      href="mailto:rathournikhil042@gmail.com" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors group-hover:text-cyan-300"
                    >
                      rathournikhil042@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-5 group"
                >
                  <div className="p-4 bg-gray-800/70 rounded-xl text-purple-400 shadow-lg shadow-purple-500/10 border border-gray-700/50 group-hover:border-purple-500/30 transition-all duration-300">
                    <span className="fas fa-phone-alt text-xl"></span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <a 
                      href="tel:+917505445202" 
                      className="text-gray-400 hover:text-purple-400 transition-colors group-hover:text-purple-300"
                    >
                      +91 75054-45202
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-5 group"
                >
                  <div className="p-4 bg-gray-800/70 rounded-xl text-pink-400 shadow-lg shadow-pink-500/10 border border-gray-700/50 group-hover:border-pink-500/30 transition-all duration-300">
                    <span className="fas fa-map-marker-alt text-xl"></span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-400 group-hover:text-pink-300 transition-colors">Ahmedabad, Gujarat, India</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="pt-6"
              >
                <h3 className="text-lg font-semibold mb-5 flex items-center">
                  <span>Follow Me</span>
                  <span className="ml-3 h-[1px] w-16 bg-gradient-to-r from-gray-500 to-transparent"></span>
                </h3>
                <div className="flex space-x-4">
                  {socialIcons.map((social) => (
                    <motion.a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800/70 hover:bg-gray-700 border border-gray-700/50 hover:border-gray-500 transition-all duration-300 group shadow-lg hover:shadow-cyan-900/20"
                      aria-label={social.name}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      variants={itemVariants}
                    >
                      <span className={`text-gray-400 ${social.color} text-xl fab ${social.icon}`}></span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              {/* Additional info card */}
              <motion.div 
                variants={itemVariants}
                className="mt-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-xl border border-gray-700/50 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-3 text-cyan-300">Available For</h3>
                <ul className="space-y-2">
                  {['Freelance Projects', 'Full-time Opportunities', 'Collaborations'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="mr-2 text-green-400 text-sm fas fa-check-circle"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-2/3"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-gray-700/50 shadow-xl">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    Send Me a Message
                  </span>
                  <span className="ml-4 h-[1px] flex-1 bg-gradient-to-r from-purple-500/30 to-transparent"></span>
                </h2>
                
                {formStatus.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 mb-6 rounded-lg ${
                      formStatus.type === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-200' 
                        : 'bg-red-500/20 border border-red-500/30 text-red-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`mr-2 text-lg ${
                        formStatus.type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'
                      }`}></span>
                      {formStatus.message}
                    </div>
                  </motion.div>
                )}
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-gray-500 fas fa-user"></span>
                        <input 
                          type="text" 
                          id="name" 
                          name="user_name"
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Your Email</label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-gray-500 fas fa-envelope"></span>
                        <input 
                          type="email" 
                          id="email" 
                          name="user_email"
                          placeholder="email@example.com"
                          className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">Subject</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500 fas fa-tag"></span>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        placeholder="What is this regarding?"
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Your Message</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500 fas fa-comment-alt"></span>
                      <textarea 
                        id="message" 
                        name="message"
                        rows="6"
                        placeholder="Tell me about your project, question, or just say hello!"
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <motion.button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <span className="fas fa-spinner"></span>
                        </span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <span className="fas fa-paper-plane"></span>
                      </>
                    )}
                  </motion.button>
                  
                  <p className="text-center text-sm text-gray-400 mt-4">
                    <span className="fas fa-lock mr-1 text-gray-500"></span>
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer Note */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center py-10 text-sm text-gray-500 relative z-10"
      >
        
      </motion.div>
    </div>
  );
};

export default Connect;