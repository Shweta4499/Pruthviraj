import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { achievements } from "../constants";


// Animation variant
const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type, delay, duration },
  },
});

// ... Your achievements array here ...


const AchievementTimeline = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#000000]">
      {/* Starry background layer */}
      

      {/* Foreground content */}
      <div className="relative z-10  max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("up", "spring", 0, 0.6)}
          className="text-center mb-12"
        >
          <div className="flex justify-center">
  <div className="flex items-center gap-3 mb-2">
    <img src="/trophy.svg" alt="Trophy" className="w-15 h-14" />
    <h2 className="text-5xl font-bold text-white">Activities</h2>
  </div>
</div>


          
        </motion.div>

        <div className="flex flex-col gap-20 relative z-10 py-6">
          {achievements.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className={`relative flex flex-col ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-6 md:gap-10`}
              >
<div
  className="flex flex-col sm:flex-row items-center rounded-xl shadow-lg overflow-hidden w-full max-w-4xl"
  style={{ background: "#1d1836", color: "white" }}
>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-52 h-52 object-content rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none border-4 border-blue-600 mb-4 sm:mb-0"
                  />
<div className="p-5 text-center sm:text-center flex flex-col justify-center items-center">
<h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementTimeline;