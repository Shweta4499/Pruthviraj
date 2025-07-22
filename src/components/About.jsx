import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

// Animation container for staggering cards
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

// Card animation based on direction
const cardVariants = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
});

const ServiceCard = ({ index, title, icon }) => {
  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      variants={cardVariants(direction)}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(145, 94, 255, 0.5)",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className='group w-full sm:max-w-[45%] lg:max-w-[280px] bg-tertiary rounded-[20px] p-[1px] shadow-md relative overflow-hidden border border-[#915EFF]/20 hover:border-[#915EFF]/60 transition-all duration-300'
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-[20px] opacity-20 group-hover:opacity-40 bg-[#915EFF] blur-2xl animate-pulse z-0" />

      {/* Card Content */}
      <div className='relative z-10 rounded-[20px] py-6 px-6 sm:px-10 min-h-[240px] sm:min-h-[280px] flex flex-col justify-center items-center'>
        <img src={icon} alt={title} className='w-14 h-14 object-contain mb-4' />
        <h3 className='text-white text-[18px] sm:text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center sm:text-left"
      >
        <p className={`${styles.sectionSubText}`}>Who am I?</p>
        <h2 className={`${styles.sectionHeadText}`}>A Fusion of Code & Machines.</h2>
      </motion.div>

      {/* About Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className='mt-4 text-secondary text-[15px] sm:text-[17px] max-w-5xl leading-[26px] sm:leading-[30px] text-center sm:text-left px-6 sm:px-4 md:px-0'
      >
        I'm a robotics M.Tech student with a CSE background, passionate about building intelligent systems that blend hardware and software.
        My interests lie in IoT, automation, and solving real-world problems through technology. 
        With hands-on experience in web development and embedded systems, I aim to create scalable, futuristic applications. 
        Whether it’s coding a robot or crafting immersive interfaces, I thrive on innovation and learning.
      </motion.p>

      {/* Service Cards */}
      <motion.div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-4 md:px-0 justify-items-center'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
