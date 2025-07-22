import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Project Card
const ProjectCard = ({ index, project, onClick, isActive }) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.15, 0.5)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className={`transition-transform duration-300 ${
      isActive ? "scale-105 z-10" : "scale-100"
    }`}
  >
    <div
      className="bg-tertiary p-5 rounded-2xl w-full max-w-[360px] cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p
            key={`${project.name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

// Modal
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black  px-4"
      onClick={onClose}
    >
      <div
className="relative bg-primary text-white pt-[80px] px-4 pb-6 mt-12 rounded-xl max-w-2xl w-full shadow-lg overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white bg-red-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition-all duration-300 text-xl font-bold shadow-md"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
        <p className="text-secondary text-[16px] leading-6 whitespace-pre-line">
          {project.fullDescription}
        </p>

        <img
          src={project.image}
          alt={project.name}
          className="w-full mt-5 rounded-lg object-cover max-h-[400px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

// Main Works Component
const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false); // Mount fix for hydration

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="relative z-10 pt-10 sm:pt-18 px-4 max-w-7xl mx-auto">
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex z-10 relative">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-5 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples.
          Click on any card to learn more about each project’s scope and functionality.
        </motion.p>
      </div>

      <div className="mt-6 flex flex-wrap gap-5 justify-center">
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              project={project}
              isActive={index === activeIndex}
              onClick={() => {
                setSelectedProject(project);
                setActiveIndex(index);
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {projects.length > 6 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#915EFF] text-white font-semibold px-6 py-2 rounded-xl hover:shadow-[0_0_20px_#915EFF] transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            setSelectedProject(null);
            setActiveIndex(null);
          }}
        />
      )}
    </section>
  );
};

export default SectionWrapper(Works, "project");
