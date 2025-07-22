import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion"; // if using animations

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
    title: "IIC Regional Innovation Contest Winner",
    description:
"I secured First Prize in the IIC Regional Meet Innovation Stall Contest, where I showcased my Third Eye project as a startup model. The event provided a great opportunity to present my innovation to industry experts and government bodies, receiving valuable feedback and recognition.",
    image: "/achievements/iic.jpg",
  },
  {
    title: "Project Expo - DKTE 2K23",
    description:
"For incoming first-year students, there was a programme called मी राजवाडा बोलतोय on June 10th, 2k23. For To highlight the talent of the department through their projects, my CSE department organised a project expo. I spoke on behalf of my Third Eyeproject at that time.",   
 image: "/achievements/expo.jpg",
  },



  {
    title: "Institute level innovation and Prototype competition",
    description:
"In order to encourage students to launch new enterprises, my college is affiliated with Idea Lab, which organises institute-level invention and prototype competitions on 28 February 23. I participated in this",
image: "/achievements/ideavision.jpg",
},
  

{
  title:"Am I Engineer?",
  description:
"The Am I an Engineer? programme was the first event the Artificial Intelligence Student Association (AISA) organised. Given that I am the president of an AISA, I open this event, congratulate all the faculty and students there, and give a speech on the subject of who is an actual engineer is and how to be a good engineer.",
image: "/achievements/amiengineer.jpg",
},


{
    title: "Arduino Workshop",
    description:
"I conducted a one-day workshop on Arduino because it is included in the second-year engineering curriculum and I am familiar with it; I conducted this workshop through AISA.I taught second-year students about Arduino programming and design. Nearly 10-12 Arduino experiments, including hardware and coding, were conducted by me.",
    image: "/achievements/arduino.jpg",
  },
  {
    title: "Visit to Radhanagari Wildlife sanctuary.",
    description:
"The second-year environmental education curriculum includes an environmental visit. My class chose to visit a wildlife refuge as a destination, and I was given the task of making the necessary arrangements. We had a great time learning about many kinds of animals and plants.",
    image: "/achievements/EVS.jpg",
  },



  {
    title: "Freshers party 2k23.",
    description:
"AISA organises a variety of events, one of which being the Freshers Party 2K23 for CSE-AI and AIDS students. As AISA president, I was given full responsibility for this event.",
    image: "/achievements/EVS.jpg",
  },

  {
    title: "Techsymposioum Event 2k23.",
    description:
"The Techsymposium is an annual intercollegiate technical and non-technical event hosted by my college. As the current president of AISA, it was my duty to ensure that the event ran well from the collecting of sponsors through the final price distribution.",
    image: "/achievements/techsymposium.jpg",
  },




  {
    title: "Unacademy's national level robotics competition.",
    description:
"I took part in Unacademy's robotics competition. Here, we must construct any type of bot. photograph everything behind the scenes.I developed smart security bot.",
    image: "/achievements/unacademy.jpg",
  },

  
  {
    title: "Annual gathering 2k23",
    description:
"Every year, the college celebrates the price distribution and dance variety show. 'Taal' was the name given to it this year. That evening, I host. For me, it was a wonderful experience.",
    image: "/achievements/taal.png",
  },
  {
    title: "Techfest 2k23.",
    description:
"IIT Bombay hosts a techfest and technical seminars every year. This year, I attended a technical presentation on Artificial intelligence and took part in Techfest.",
    image: "/achievements/techfest.jpeg",
  },
  {
    title: "Vision 2024",
    description:
"I participated in the National-Level Technical Symposium organized by Walchand College of Engineering in the Expotech event, where I showcased my final year project. It was a great opportunity to present my work, exchange ideas, and engage with like-minded innovators. 🚀🔬",
    image: "/achievements/exam.jpg",
  },
  // Add remaining items...
];

const AchievementTimeline = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 mt-2">
      <h2 className="text-4xl font-bold text-center mb-14">🎖 Achievements</h2>

      <div className="relative border-l-4 border-purple-600 pl-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 relative"
          >
            <div className="absolute w-5 h-5 bg-purple-600 rounded-full left-[-13px] top-2.5"></div>

            <div className="bg-[#1d1836] text-white rounded-xl shadow-md p-5 flex flex-col md:flex-row gap-6 items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-lg border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementTimeline;
