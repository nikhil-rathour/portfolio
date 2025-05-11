import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Connect = () => {
  const form = useRef();

 const sendEmail = async (e) => {
  e.preventDefault();
  
  // Get form data safely
  const formData = new FormData(form.current);
  const user_email = formData.get('user_email');
  
  // Validate email exists
  if (!user_email) {
    alert('Please enter your email address');
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

    alert('Message sent successfully! Check your email for confirmation.');
    form.current.reset();

  } catch (error) {
    console.error('Email error:', error);
    alert(`Error: ${error.text || 'Failed to send message'}`);
  }
};

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
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Have a question or want to work together? Get in touch!
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/3 space-y-8"
            >
              <h2 className="text-3xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Contact Information
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-cyan-400">
                    <span className="fas fa-envelope text-xl"></span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a href="mailto: rathournikhil042@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      rathournikhil042@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-purple-400">
                    <span className="fas fa-phone-alt text-xl"></span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <a href="tel:+917505445202" className="text-gray-400 hover:text-purple-400 transition-colors">
                      +91 75054-45202
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-pink-400">
                    <span className="fas fa-map-marker-alt text-xl"></span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-400">Ahemedabad, Gujrat, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {/* Social Media Icons */}
                  {[
                    {
                      name : 'github',
                      url : 'https://github.com/nikhil-rathour'

                    },
                    {
                      name :'linkedin',
                      url : 'https://www.linkedin.com/in/nikhil-rathour-8a56302a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                    },
                    {
                      name : 'instagram',
                      url : 'https://www.instagram.com/nikhil_.rathour?igsh=djRoMWF5eGZpZDly'
                      
                    },
                    { 
                      name : 'discord',
                      url : 'https://discord.com/channels/@.nikhil_rathore'
                    }].map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 group"
                      aria-label={social.name}
                    >
                      <span className={`text-gray-400 group-hover:text-cyan-400 text-xl fab fa-${social.name}`}></span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    Send Me a Message
                  </span>
                </h2>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="user_name"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="user_email"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message <span className="fas fa-paper-plane"></span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
 ) 
};

export default Connect;