import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import useIsMobile from "../hooks/useIsMobile";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const cardVariants = (direction) => ({
  hidden: { opacity: 0, x: direction },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
});

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
      className="group w-[100%] sm:w-full sm:max-w-[45%] lg:max-w-[260px] 
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

const About = () => {
  const isMobile = useIsMobile();
  const bgImage = isMobile ? "/bg-mobile.jpeg" : "/bg-desktop.jpeg";

  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Background Image */}
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full h-full py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center sm:text-left w-full"
        >
          <p className={`${styles.sectionSubText}`}>Who am I?</p>
          <h2 className={`${styles.sectionHeadText}`}>A Fusion of Code & Machines.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-secondary text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px] max-w-5xl mx-auto text-center sm:text-left"
        >
          I'm a robotics M.Tech student with a CSE background, passionate about
          building intelligent systems that blend hardware and software. My
          interests lie in IoT, automation, and solving real-world problems
          through technology. With hands-on experience in web development and
          embedded systems, I aim to create scalable, futuristic applications.
          Whether it’s coding a robot or crafting immersive interfaces, I thrive
          on innovation and learning.
        </motion.p>

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center max-w-6xl mx-auto"
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
