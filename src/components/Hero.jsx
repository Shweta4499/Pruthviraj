import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import RobotCanvas from "./canvas/Robot";

import { styles } from "../styles";

const Hero = () => {
  const [showText, setShowText] = useState(false);


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 3000);

    

    return () => clearTimeout(textTimer);
  }, [isMobile]);

  return (
<section className="relative w-screen max-w-full min-h-[50vh] sm:min-h-screen overflow-x-hidden bg-black">
      
      <RobotCanvas isMobile={isMobile} />

      <div
        className={`absolute inset-0 max-w-7xl mx-auto px-4 sm:px-10 
          flex flex-col sm:flex-row items-center sm:items-center 
          justify-start sm:justify-between z-10 mt-20`}
      >
        <div className="w-full sm:w-1/2 text-center sm:text-left mt-20 sm:mt-0 px-2 sm:px-0">
          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-6xl font-bold text-white leading-tight">
                Hi, I'm KulboyRaj
              </h1>

              <p className="text-sm sm:text-lg mt-2 text-white max-w-md mx-auto sm:mx-0 leading-relaxed">
                <span className="text-[#915EFF]">Roboticist</span> with a CSE edge | Innovating
                <span className="text-[#00FFD1]"> IoT</span>,
                <span className="text-[#FF6EC7]"> automation</span> &
                <span className="text-[#FFD700]"> intelligent systems</span>
              </p>

             
            </motion.div>
          )}
        </div>

        <div className="w-1/2 hidden sm:block" />
      </div>
    </section>
  );
};

export default Hero;
