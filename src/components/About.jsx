import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import useIsMobile from "../hooks/useIsMobile";

// Animation container for cards
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

// Individual card animation based on direction
const cardVariants = (direction) => ({
  hidden: { opacity: 0, x: direction },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
});

// Service Card Component
const ServiceCard = ({ index, title }) => {
  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      variants={cardVariants(direction)}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(145, 94, 255, 0.5)",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className="group w-full sm:w-full sm:max-w-[45%] md:max-w-[300px] lg:max-w-[260px] 
        bg-tertiary rounded-[16px] p-[1px] shadow-md relative 
        overflow-hidden border border-[#915EFF]/20 
        hover:border-[#915EFF]/60 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-[16px] opacity-20 group-hover:opacity-40 bg-[#626263] blur-2xl animate-pulse z-0" />
      <div className="relative z-10 rounded-[16px] py-10 px-4 sm:px-6 min-h-[200px] sm:min-h-[240px] flex flex-col justify-center items-center">
        <h3 className="text-white text-[16px] sm:text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

// Main About Section
const About = () => {
  const isMobile = useIsMobile();
  const bgImage = isMobile ? "/bg-mobile.jpeg" : "/bg-desktop.jpeg";

  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="background"
        className={`absolute top-[-24%] md:top-0 left-0 w-full h-full ${
          isMobile ? "object-contain" : "object-cover"
        } scale-[1.3] sm:scale-[1.2] md:scale-[1.1] lg:scale-[1.05] xl:scale-[1] z-0 transition-transform duration-500`}
      />

      {/* Overlays for text readability */}
      <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10 pointer-events-none" />

      {/* Section Content */}
      <div className="relative z-20 w-full h-full py-20 px-4 sm:px-6">
        
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center w-full"
        >
          <p className={`${styles.sectionSubText}`}>Who am I?</p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 text-secondary text-[15px] sm:text-[17px] leading-relaxed sm:leading-loose max-w-3xl px-4 sm:px-0 mx-auto space-y-6"
        >
          <p>
            Hello, I'm <strong className="text-white">Pruthviraj</strong>, a postgraduate student
            specializing in <strong className="text-white">Automation and Robotics</strong> at DIAT Pune.
            After completing my BTech in Artificial Intelligence, I developed a strong passion for solving
            real-life problems using AI and robotics.
          </p>

          <p>
            I enjoy exploring diverse domains, identifying unique challenges, and creating innovative,
            AI-driven solutions with a focus on real-world impact. I am constantly seeking opportunities to
            learn, grow, and collaborate with like-minded individuals to tackle complex problems. Let's
            connect and work together to shape a smarter and more efficient future.
          </p>

          <p className="text-white italic text-xl font-semibold">
            A true engineer is someone who identifies problems and crafts innovative solutions to solve them...
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} title={service.title} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
