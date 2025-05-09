import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiDocumentText, HiCode, HiOutlineLightBulb } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Profile from "../assets/Profile.jpg";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  // Typing animation effect
  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Web Designer",
    "FullStack Developer",
    ".Net Developer",
  ];
  const [displayedRole, setDisplayedRole] = React.useState(roles[0]);
  const [roleIndex, setRoleIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (roleIndex + 1) % roles.length;
      setRoleIndex(nextIndex);
      setDisplayedRole(roles[nextIndex]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [roleIndex]);

  // Skills data
  const skillsData = [
    {
      icon: <HiCode className="text-4xl text-blue-500" />,
      title: "Frontend Development",
      skills: ["React.js", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      icon: <HiOutlineLightBulb className="text-4xl text-blue-500" />,
      title: "UI/UX Design",
      skills: [
        "Responsive Design",
        "Prototyping",
        "User-Centered Design",
        "Animation",
      ],
    },
    {
      icon: <HiDocumentText className="text-4xl text-blue-500" />,
      title: "Backend/Database",
      skills: ["Node.js", ".Net", "MySQL", "PostgreSQL"],
    },
    {
      icon: <HiDocumentText className="text-4xl text-blue-500" />,
      title: "Other Skills",
      skills: [
        "GitHub",
        "Restful APIs",
        "Problem Solving",
        "Team Collaboration",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Text Content */}
            <motion.div
              className="md:w-1/2 mb-12 md:mb-0 md:pr-8"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Welcome to my portfolio
              </motion.span>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                variants={itemVariants}
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Shuvhanjal Adhikari
                </span>
              </motion.h1>

              <motion.div
                className="text-xl sm:text-2xl text-slate-600 font-medium h-10 mb-6"
                variants={itemVariants}
              >
                <motion.span
                  key={displayedRole}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {displayedRole}
                </motion.span>
              </motion.div>

              <motion.p
                className="text-slate-600 text-lg mb-8 max-w-lg"
                variants={itemVariants}
              >
                I craft responsive websites where technologies meet creativity.
                Transforming your vision into engaging digital experiences is
                what I do best.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <Link to="/projects">
                  <motion.button
                    className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiCode className="text-lg" />
                    View Projects
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    className="px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope className="text-lg" />
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="md:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {/* Replace with your actual image */}
                <img
                  src={Profile}
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-2 -right-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-2 w-20 h-20 bg-blue-500 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <ScrollLink
              to="skills"
              smooth={true}
              duration={800}
              className="cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaArrowDown className="text-blue-500 text-2xl" />
              </motion.div>
            </ScrollLink>
          </motion.div>
        </div>
      </section>

{/* Skills Section with Swiper */}
<section id="skills" className="py-20 bg-blue-50">
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">My Skills</h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        I have experience with a variety of technologies and frameworks to
        build stunning and functional web applications.
      </p>
    </motion.div>

    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          dynamicBullets: false,
          dynamicMainBullets: 2,
          renderBullet: function (index, className) {
            if (index < 2) {
              return `<span class="${className}"></span>`;
            } else {
              return "";
            }
          },
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        loop={false}
        className="skills-swiper"
      >
        {skillsData.map((category, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 px-4 py-2 rounded-lg text-slate-700 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - Outside the container */}
      <div className="swiper-button-prev absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
        <IoIosArrowBack className="text-xl text-teal-400" />
      </div>
      <div className="swiper-button-next absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
        <IoIosArrowForward className="text-xl text-teal-400" />
      </div>
    </div>
  </div>
</section>


      {/* Quick Links & CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
                <p className="text-blue-100 max-w-lg">
                  Looking for a professional web developer for your next
                  project? I'm available for freelance work and collaborations.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <motion.button
                    className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me
                  </motion.button>
                </Link>
                <Link to="/projects">
                  <motion.button
                    className="px-6 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.8 }}
            className="mt-16 flex justify-center gap-6"
          >
            {[
              { icon: FaGithub, link: "https://github.com/ShuvhanjalAdhikari", label: "GitHub" },
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/shuvhanjal-adhikari-a74503283",
                label: "LinkedIn",
              },
              {
                icon: FaEnvelope,
                link: "mailto:shuvhanjal123@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
