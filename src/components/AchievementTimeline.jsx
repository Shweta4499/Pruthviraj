import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation helper
const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.4) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? 40 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// Achievements list
const achievements = [
  {
    title: "E-Yantra Robotics Competition 2K23",
    description:
      "Placed 3rd in this national robotics competition hosted by IIT Bombay.",
    image: "/achievements/eyantra.jpg",
  },
  {
    title: "Filed a Design Patent",
    description:
      "Filed a patent for an automated Weed Removal Machine using a robotic arm.",
    image: "/achievements/petant.png",
  },
  {
    title: "IIC Regional Innovation Contest Winner",
    description:
      "Secured 1st prize showcasing the Third Eye project as a startup.",
    image: "/achievements/iic.jpg",
  },
  {
    title: "Project Expo - DKTE 2K23",
    description:
      "I represented my Third Eye project during a department-wide project expo for new first-year students.",
    image: "/achievements/expo.jpg",
  },
  {
    title: "Institute level innovation and Prototype competition",
    description:
      "My college Idea Lab hosted a competition to promote innovation and entrepreneurship. I presented a prototype at this event.",
    image: "/achievements/ideavision.jpg",
  },
  {
    title: "Am I Engineer?",
    description:
      "As AISA president, I inaugurated this event and delivered a keynote on what it means to be a true engineer.",
    image: "/achievements/amiengineer.jpg",
  },
  {
    title: "Arduino Workshop",
    description:
      "I conducted a one-day Arduino workshop covering hands-on hardware and programming experiments for second-year students.",
    image: "/achievements/arduino.jpg",
  },
  {
    title: "Visit to Radhanagari Wildlife sanctuary",
    description:
      "As part of EVS curriculum, I helped organize a class trip to the Radhanagari sanctuary where we learned about biodiversity.",
    image: "/achievements/EVS.jpg",
  },
  {
    title: "Freshers party 2k23",
    description:
      "I managed and hosted the Freshers Party 2K23 for AI & AIDS students under AISA's leadership.",
    image: "/achievements/EVS.jpg",
  },
  {
    title: "Techsymposium Event 2k23",
    description:
      "Led the organization of this flagship intercollege technical event as AISA President, handling sponsors to prize distribution.",
    image: "/achievements/techsymposium.jpg",
  },
  {
    title: "Unacademy's robotics competition",
    description:
      "Participated in Unacademy's robotics competition by developing a smart security bot.",
    image: "/achievements/unacademy.jpg",
  },
  {
    title: "Annual gathering 2k23",
    description:
      "I hosted 'Taal', our college’s annual dance and award show. It was a great experience in public speaking.",
    image: "/achievements/taal.png",
  },
  {
    title: "Techfest 2k23",
    description:
      "Participated in AI seminar and events at IIT Bombay's annual Techfest 2k23.",
    image: "/achievements/techfest.jpeg",
  },
  {
    title: "Vision 2024",
    description:
      "Showcased my final year project at Walchand College's national-level technical symposium 'Expotech'.",
    image: "/achievements/exam.jpg",
  },
];

// Add your multiple profile images here
const profileImages = [
  "../profile1.jpg",
  "/profile2.jpg",
  "/profile3.jpg",
];

const AchievementTimeline = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfileIndex((prev) =>
        prev === profileImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-6 mt-2 scroll-smooth">
      <h2 className="text-4xl font-bold text-center mb-14">🎖 Activities</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Timeline Cards - 2/3 width */}
        <div className="relative border-l-4 border-purple-600 pl-6 col-span-2">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.05, 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="mb-10 relative"
            >
              <div className="absolute w-5 h-5 bg-purple-600 rounded-full left-[-13px] top-2.5"></div>

              <div className="bg-[#1d1836] text-white rounded-xl shadow-md p-5 flex flex-col md:flex-row gap-6 items-center max-w-3xl">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg border-2 border-white"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profile Image Slideshow - right side, desktop only */}
        <motion.div
          className="hidden lg:flex items-start justify-center pt-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-[300px] h-[500px] overflow-hidden rounded-xl border-4 border-purple-600 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={profileImages[currentProfileIndex]}
                src={profileImages[currentProfileIndex]}
                alt="Profile"
                className="absolute w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementTimeline;
