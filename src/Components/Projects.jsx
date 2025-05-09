import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs, FaDatabase, FaCode, FaLaptopCode } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiDotnet, SiMysql } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Project data
  const projectsData = [
    {
      id: 1,
      title: "Satasat",
      description: "A full-stack Barter solution with user authentication, Realtime features, and payment integration.",
      icon: <FaLaptopCode className="text-5xl text-blue-500" />,
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MySql", icon: <SiMysql className="text-green-600" /> },
        { name: "Express", icon: <SiExpress className="text-gray-500" /> },
      ],
      githubLink: "https://github.com/shuvhanjalAdhikari/Satasat",
      featured: true,
    },
    {
      id: 2,
      title: "Spotify Clone",
      description: "Spotify Clone",
      icon: <FaCode className="text-5xl text-purple-500" />,
      technologies: [
        { name: "React.js", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      ],
      githubLink: "https://github.com/shuvhanjalAdhikari/Spotify-Clone",
      featured: true,
    },
    {
      id: 3,
      title: "Digital Clock",
      description: "Digital Clock",
      icon: <FaLaptopCode className="text-5xl text-green-500" />,
      technologies: [
        { name: "React.js", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      ],
      githubLink: "https://github.com/shuvhanjalAdhikari/DigitalClock",
    },
    {
      id: 4,
      title: "To-Do-List",
      description: "To-Do-List",
      icon: <FaCode className="text-5xl text-indigo-500" />,
      technologies: [
        { name: "React.js", icon: <SiDotnet className="text-purple-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      ],
      githubLink: "https://github.com/shuvhanjalAdhikari/To-Do-List",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Projects
            </motion.h1>
            <motion.div
              className="w-20 h-1 bg-white rounded mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore my latest work and projects that showcase my skills and passion for development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A selection of my best work that demonstrates my skills and capabilities.
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {projectsData
              .filter(project => project.featured)
              .slice(0, 2)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64 overflow-hidden ">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 ">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-6">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-4">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <FaGithub />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

            {/* All Projects Section with Swiper */}
            <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Project Portfolio</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Browse through all my projects to see what I've been working on.
            </p>
          </motion.div>

          {/* Projects Swiper */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative swiper-container-custom"
          >
            {/* Custom navigation buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
              <button className="swiper-button-prev-custom bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-blue-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="px-8">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
                }}
                pagination={{ clickable: true }}
                className="pb-12"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {projectsData.map((project) => (
                  <SwiperSlide key={project.id}>
                    <motion.div
                      className="h-full bg-white rounded-xl overflow-hidden shadow-md"
                      variants={itemVariants}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      <div className="h-48 relative overflow-hidden ">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {project.icon}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                            >
                              {tech.icon}
                              {tech.name}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        {/* Links */}
                        <div className="flex gap-3">
                          {project.githubLink && (
                            <a 
                              href={project.githubLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                              <FaGithub size={12} />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Custom navigation buttons */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 z-10 hidden md:block">
              <button className="swiper-button-next-custom bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-blue-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Interested in working together?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/contact">
                  <motion.button
                    className="px-8 py-4 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me
                  </motion.button>
                </a>
                <a href="/about">
                  <motion.button
                    className="px-8 py-4 rounded-lg border-2 border-white text-white font-medium hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More About Me
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;