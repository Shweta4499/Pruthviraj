import React from "react";
import { motion } from "framer-motion";

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
const achievements = [
  {
    title: "E-Yantra Robotics Competition 2K23",
    description:
"My team and I competed in the E-Yantra robotics competition in 2K23, and we placed third overall. IIT Bombay holds this competition every year.",
    image: "/achievements/eyantra.jpg",
  },
  {
    title: "Filed a Design Patent",
    description:"I designed a Weed Removal Machine that utilizes a robotic arm to efficiently remove weeds, helping farmers reduce manual labor and improve agricultural productivity. This system automates the weeding process, minimizing the need for chemical herbicides and promoting sustainable farming practices.",
    image: "/achievements/petant.png",
  },
  {
    title: "Filed a copyright patent",
    description:"A patented intelligent home security camera system designed for real-time human detection and monitoring. It instantly alerts and notifies authenticated users upon unauthorized access, enhancing safety through immediate threat response. This innovation ensures secure and smart home surveillance with advanced automation and reliability.",
    image: "/achievements/copy.jpg",
  },

  {
    title: "Finalist – APJ Abdul Kalam Innovation Competition",
    description:
"During my first year of M.Tech, I proudly participated in the prestigious APJ Abdul Kalam Innovation Competition and was selected as a finalist for the second round. I was the only first-year student among a panel of Ph.D. participants, where I showcased my innovative project on Automated Waste Management System — a smart solution aimed at improving waste segregation and disposal through automation.",
    image: "/achievements/kalam.jpeg",
  },

  {
    title: "IIC Regional Innovation Contest Winner",
    description:
"I secured First Prize in the IIC Regional Meet Innovation Stall Contest, where I showcased my Third Eye project as a startup model. The event provided a great opportunity to present my innovation to industry experts and government bodies, receiving valuable feedback and recognition.",    
image: "/achievements/iic.jpg",
  },

  {
    title: "Placement Katta: Guiding Future Engineers Towards Industry Readiness",
    description:
"Organized a Placement Katta session under the AISA Club for third-year and final-year students, focused on providing real-world project ideas and understanding current industry requirements. The session also covered essential career-building topics like networking strategies and the key technical and soft skills needed to succeed in todays competitive job market."  ,
image: "/achievements/placement.JPG",

},
  
  {
    title: "Project Expo - DKTE 2K23",
    description:
"For incoming first-year students, there was a programme called मी राजवाडा बोलतोय on June 10th, 2k23. For To highlight the talent of the department through their projects, my CSE department organised a project expo. I spoke on behalf of my Third Eyeproject at that time.",    image: "/achievements/expo.jpg",
  },
  {
    title: "Institute level innovation and Prototype competition",
    description:
"In order to encourage students to launch new enterprises, my college is affiliated with Idea Lab, which organises institute-level invention and prototype competitions on 28 February 23. I participated in this contest.",    image: "/achievements/ideavision.jpg",
  },
  {
    title: "Am I Engineer?",
    description:
"The Am I an Engineer? programme was the first event the Artificial Intelligence Student Association (AISA) organised. Given that I am the president of an AISA, I open this event, congratulate all the faculty and students there, and give a speech on the subject of who is an actual engineer is and how to be a good engineer.",    image: "/achievements/amiengineer.jpg",
  },
  {
    title: "Arduino Workshop",
    description:
"I conducted a one-day workshop on Arduino because it is included in the second-year engineering curriculum and I am familiar with it; I conducted this workshop through AISA.I taught second-year students about Arduino programming and design. Nearly 10-12 Arduino experiments, including hardware and coding, were conducted by me.",    image: "/achievements/arduino.jpg",
  },
  {
    title: "Visit to Radhanagari Wildlife sanctuary",
    description:
"The second-year environmental education curriculum includes an environmental visit. My class chose to visit a wildlife refuge as a destination, and I was given the task of making the necessary arrangements. We had a great time learning about many kinds of animals and plants.",    image: "/achievements/EVS.jpg",
  },
  {
    title: "Freshers party 2k23",
    description:"AISA organises a variety of events, one of which being the Freshers Party 2K23 for CSE-AI and AIDS students. As AISA president, I was given full responsibility for this event.",
    image: "/achievements/freshers.jfif",
  },
  {
    title: "Techsymposium Event 2k23",
    description:
"The Techsymposium is an annual intercollegiate technical and non-technical event hosted by my college. As the current president of AISA, it was my duty to ensure that the event ran well from the collecting of sponsors through the final price distribution.",    image: "/achievements/techsymposium.jpg",
  },
  {
    title: "Unacademy's robotics competition",
    description:"I took part in Unacademy's robotics competition. Here, we must construct any type of bot. photograph everything behind the scenes.I developed smart security bot.",
    image: "/achievements/unacademy.jpg",
  },
  {
    title: "Annual gathering 2k23",
    description:"IIT Bombay hosts a techfest and technical seminars every year. This year, I attended a technical presentation on Artificial intelligence and took part in Techfest.",
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
    "I participated in the National-Level Technical Symposium organized by Walchand College of Engineering in the Expotech event, where I showcased my final year project. It was a great opportunity to present my work, exchange ideas, and engage with like-minded innovators. 🚀🔬",
    image: "/achievements/exam.jpg",
  },
];

const AchievementTimeline = () => {
  return (
    <section className="px-6 py-16 bg-[#090909] dark:bg-[#000000] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("up", "spring", 0, 0.6)}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-200 font-semibold">Achievements</p>
          <h2 className="text-4xl font-bold text-white">My Journey</h2>
        </motion.div>

        {/* Mobile-only vertical timeline line */}
        <div className="absolute top-40 bottom-10 left-5 w-1 bg-blue-200 rounded-full md:hidden z-0" />

        {/* Achievement Cards */}
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
                {/* Dot for mobile timeline */}
                <div className="absolute left-0 md:hidden w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10" />

                {/* Card */}
                <div className="flex flex-col sm:flex-row items-center bg-white dark:bg-[#1d1d2e] text-gray-800 dark:text-gray-100 rounded-xl shadow-lg overflow-hidden w-full max-w-4xl">
                <img
  src={item.image}
  alt={item.title}
  className="w-52 h-52 object-content rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none border-4 border-blue-600 mb-4 sm:mb-0"
/>

                  <div className="p-5 text-start sm:text-left">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
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
