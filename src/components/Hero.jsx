import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RobotCanvas from "./canvas/Robot";

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
    const textTimer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(textTimer);
  }, [isMobile]);

  return (
    <section className="relative w-screen max-w-full min-h-[100vh] sm:min-h-screen overflow-x-hidden bg-black">
      <RobotCanvas isMobile={isMobile} />

      <div
        className={`absolute inset-0 z-10 flex items-start justify-center 
        px-4 ${isMobile ? "py-[120px]" : "py-30"} sm:px-10`}
      >
<div className="w-full sm:w-1/2 text-center sm:text-left px-2 sm:px-0 sm:mt-[180px] sm:py-10">
{showText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              {/* Heading */}
              <h1
                className={`
                  text-white font-extrabold 
                  ${isMobile ? "text-[40px] leading-[1.3]" : "text-[80px] leading-[1.1]"}
                `}
              >
                <span className="block">Hi,</span>
                <span className="block text-[#915EFF]">I'm KulboyRaj</span>
              </h1>

              {/* Subtext */}
              <p
                className={`
                  text-gray-300 
                  ${isMobile ? "text-[18px] leading-[32px]" : "text-[22px] leading-[36px]"} 
                  max-w-[90%] mx-auto sm:mx-0
                `}
              >
                <span className="text-[#915EFF] font-semibold">Roboticist</span> with a CSE edge.
                <br />
                Innovating with
                <span className="text-[#00FFD1] font-medium"> IoT</span>,
                <span className="text-[#FF6EC7] font-medium"> automation</span>, and
                <span className="text-[#FFD700] font-medium"> intelligent systems</span>.
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
