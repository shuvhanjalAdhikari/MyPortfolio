import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import Profile from "../assets/Profile.jpg";

const About = () => {
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

  // Timeline data - education and experience
  const timelineData = [
    {
      type: "education",
      title: "BSc(hons) Computing",
      institution: "Islington College",
      period: "2022 - 2025",
      description:
        "Focused on full-stack development, and system design.",
      icon: <FaGraduationCap className="text-blue-500" size={20} />,
    },
    {
      type: "education",
      title: "+2(Science)",
      institution: "St.Xaviers",
      period: "2020-2022",
      description:
        "Focused to achive good grades",
      icon: <FaGraduationCap className="text-blue-500" size={20} />,
    },
    {
      type: "work",
      title: "Intern",
      institution: "Kube technologies Pvt. Ltd.",
      period: "4 Months",
      description:
        "Worked on responsive web applications using React. Made System UI/UX using Figma.",
      icon: <FaBriefcase className="text-blue-500" size={20} />,
    },
  ];

  // Values and principles
  const values = [
    {
      title: "User-Centered Design",
      description:
        "I believe in creating solutions that solve real user problems and deliver exceptional experiences.",
      icon: <FaCode className="text-purple-500" size={24} />,
    },
    {
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly, and I'm committed to staying at the forefront of new developments.",
      icon: <FaGraduationCap className="text-blue-500" size={24} />,
    },
    {
      title: "Clean Code",
      description:
        "I value maintainable, readable, and efficient code that stands the test of time.",
      icon: <FaCode className="text-green-500" size={24} />,
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
              About Me
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
              Get to know more about my journey, skills, and what drives me as a
              developer.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-500 rounded-xl z-0"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={Profile}
                    alt="Shuvhanjal Adhikari"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-xl z-0 opacity-20"></div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                I'm <span className="text-blue-600">Shuvhanjal Adhikari</span>,
                a passionate web developer
              </h2>

              <p className="text-slate-600 mb-6 leading-relaxed">
                With a foundation in web development built through my academic
                projects and hands-on experience, I focus on crafting
                responsive, user-friendly websites and applications as an
                aspiring full-stack developer. My journey in programming started
                during my First years at Islington College, where I honed my
                skills in technologies like React and .NET, and I’m now eager to
                grow into a career delivering impactful digital solutions.
              </p>

              <p className="text-slate-600 mb-8 leading-relaxed">
                I thrive on solving challenging problems and bringing ideas to
                life through clean, efficient code. My approach blends technical
                proficiency with a creative mindset, aiming to develop
                applications that perform seamlessly while ensuring a delightful
                user experience.
              </p>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <HiChevronRight className="text-blue-500" size={20} />
                  <span className="font-semibold mr-2">Birthday:</span> 29 November
                  2004
                </div>
            
                <div className="flex items-center">
                  <HiChevronRight className="text-blue-500" size={20} />
                  <span className="font-semibold mr-2">Phone:</span> +977 9847694706
                </div>
                <div className="flex items-center">
                  <HiChevronRight className="text-blue-500" size={20} />
                  <span className="font-semibold mr-2">City:</span>Kapan, Akashedhara
                </div>
                <div className="flex items-center">
                  <HiChevronRight className="text-blue-500" size={20} />
                  <span className="font-semibold mr-2">Degree:</span> Bachelor's
                </div>
                <div className="flex items-center">
                  <HiChevronRight className="text-blue-500" size={20} />
                  <span className="font-semibold mr-2">Email:</span>{" "}
                  shuvhanjal123@gmail.com
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">My Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These core principles guide my work and professional
              relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Education & Experience</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              My academic and professional journey that shaped my skills and
              expertise.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

            {/* Timeline items */}
            <div className="relative">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0
                      ? "justify-start md:justify-end"
                      : "justify-start"
                  } relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            item.type === "education"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {item.type === "education"
                            ? "Education"
                            : "Experience"}
                        </span>
                        <span className="text-sm text-slate-500">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <h4 className="text-lg text-blue-600 mb-4">
                        {item.institution}
                      </h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start a Project?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
