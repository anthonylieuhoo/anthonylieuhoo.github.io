'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Moon, Sun, ChevronDown } from 'lucide-react'
import MeImage from '../me.svg'

const ShapeSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.3C32.4,86,16.2,88,-0.4,88.7C-17,89.4,-34,88.8,-48.2,82.1C-62.4,75.4,-73.7,62.7,-79.8,48.1C-85.9,33.5,-86.8,16.8,-86.5,0.2C-86.2,-16.4,-84.7,-32.8,-77.8,-46.9C-70.9,-61,-58.5,-72.8,-44.3,-79.9C-30.1,-87,-15.1,-89.4,0.3,-90C15.6,-90.5,31.2,-89.2,44.7,-76.4Z" transform="translate(100 100)" />
  </svg>
)

export default function EnhancedPortfolio() {
  const [activeSection, setActiveSection] = useState('home')
  
  const sections = ['home', 'skills', 'projects', 'contact']

  return (
    <div className={`min-h-screen`}>
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-200 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 min-h-screen p-8 transition-colors duration-500 overflow-hidden relative">
        <ShapeSVG className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 text-indigo-300 dark:text-indigo-700 opacity-50 animate-blob" />
        <ShapeSVG className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/3 translate-y-1/3 text-pink-300 dark:text-pink-700 opacity-50 animate-blob animation-delay-2000" />
        <ShapeSVG className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 text-yellow-300 dark:text-yellow-700 opacity-50 animate-blob animation-delay-4000" />

        <nav className="flex justify-between items-center mb-12 relative z-10">
          <motion.h1 
            className="text-3xl font-bold text-indigo-800 dark:text-indigo-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Anthony Lieu
          </motion.h1>
        </nav>

        <main className="max-w-4xl mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {activeSection === 'home' && (
              <motion.section 
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-5xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">Hey there! 👋</h2>
                <p className="text-xl text-indigo-800 dark:text-indigo-200 mb-6">
                  I'm Anthony, a second-year Software Engineering student at RIT. My main passion is 
                  trying to find new ways to combine software engineering and other things I'm interested
                  like the environment and health. I'm currently seeking a internship for Summer 2025.
                </p>
                <motion.img 
                  src={MeImage} 
                  alt="Anthony Lieu" 
                  className="w-64 h-64 rounded-full mx-auto shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
              </motion.section>
            )}

            {activeSection === 'skills' && (
              <motion.section 
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h3 className="text-3xl font-semibold mb-6 text-indigo-800 dark:text-indigo-200">Technical Skills 🚀</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Python', 'Java', 'C', 'TypeSript', 'JavaSript', 'HTML', 'CSS', 'React', 'Angular', 'Spring Boot', 'Flask', 'Reactstrap', 'MySQL', 'PostgreSQL'].map((skill, index) => (
                    <motion.div 
                      key={skill}
                      className="bg-white dark:bg-indigo-800 p-6 rounded-lg shadow-lg"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <h4 className="text-xl font-medium text-indigo-900 dark:text-indigo-100">{skill}</h4>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {activeSection === 'projects' && (
              <motion.section 
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h3 className="text-3xl font-semibold mb-6 text-indigo-800 dark:text-indigo-200">Cool Stuff I've Built 🛠️</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Radiance', desc: 'Created a Python app for solar panel degradation analysis and an interactive map in React to visualize optimal installation sites across the U.S.' },
                    { title: 'U-Fund', desc: 'Led Agile processes in a team to manage documentation and code reviews, while collaborating on backend REST APIs and enhancing frontend user experience for a charity platform.' },
                    { title: 'Library', desc: 'Designed a multi-library system in PostgreSQL with secure user authentication and REST APIs in Flask for efficient book management and user interactions.' },
                  ].map((project, index) => (
                    <motion.div 
                      key={project.title}
                      className="bg-white dark:bg-indigo-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      />
                      <h4 className="text-xl font-medium mb-2 text-indigo-900 dark:text-indigo-100">{project.title}</h4>
                      <p className="text-indigo-700 dark:text-indigo-300">{project.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {activeSection === 'contact' && (
              <motion.section
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-semibold mb-6 text-indigo-800 dark:text-indigo-200">Let's Connect! 🤝</h3>
                <div className="flex space-x-6 justify-center">
                  {[
                    { icon: Github, link: "https://github.com/lieuanthony" },
                    { icon: Linkedin, link: "https://www.linkedin.com/in/lieuanthony/" },
                    { icon: Mail, link: "mailto:anthonyjunlieu.com" },
                  ].map((item, index) => (
                    <motion.a 
                      key={item.link}
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-indigo-800 p-4 rounded-full shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <item.icon className="w-8 h-8 text-indigo-800 dark:text-indigo-200" />
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          <motion.div 
            className="flex justify-center mt-12 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {sections.map((section) => (
              <motion.button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full ${
                  activeSection === section 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-indigo-200 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </main>

        <motion.footer 
          className="mt-16 text-center text-indigo-800 dark:text-indigo-200 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>© 2024 Anthony Lieu. All rights reserved.</p>
        </motion.footer>

        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1 }}
        >
          <ChevronDown className="w-6 h-6 text-indigo-800 dark:text-indigo-200" />
        </motion.div>
      </div>
    </div>
  )
}