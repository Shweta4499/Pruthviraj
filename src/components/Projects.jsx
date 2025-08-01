import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


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
  className="bg-tertiary p-5 rounded-2xl w-full max-w-[360px] min-h-[400px] flex flex-col justify-between shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
  onClick={onClick}
>
  <div className="relative w-full h-[250px] sm:h-[250px] rounded-xl overflow-hidden bg-black">
    <img
      src={project.image}
      alt={project.name}
      loading="lazy"
      className="w-full h-full object-content"
    />
  </div>

  <div className="mt-3 flex-1 flex flex-col justify-center text-center">
    <div>
      <h3 className="text-white font-bold text-[20px] sm:text-[22px] leading-snug">
        {project.name}
      </h3>
      <p className="mt-2 text-secondary text-[14px] sm:text-[15px] leading-[1.5] line-clamp-3">
        {project.description}
      </p>
      
    </div>

    <div className="mt-1 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <p
          key={`${project.name}-${tag.name}`}
          className={`text-[13px] sm:text-[14px] ${tag.color}`}
        >
          #{tag.name}
        </p>
      ))}
    </div>
  </div>
</div>

  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const images = project.images || [project.image];

  useEffect(() => {
    setIsLoaded(false); 

    if (images.length <= 1) return;

    const nextIndex = (currentImageIndex + 1) % images.length;

    
    const img = new Image();
    img.src = images[nextIndex];

    const interval = setTimeout(() => {
      setCurrentImageIndex(nextIndex);
    }, 3500);

    return () => clearTimeout(interval);
  }, [currentImageIndex, images]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-primary text-white pt-[100px] px-4 pb-6 mt-12 rounded-xl max-w-2xl w-full shadow-lg overflow-y-auto max-h-[90vh]"
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
        {project.fullDescription
  .trim()
  .split('\n\n')
  .map((para, idx) => (
    <p key={idx} className="mb-4 leading-relaxed text-[15px] sm:text-[16px] text-secondary">
      {para.split(/(\*\*.*?\*\*)/g).map((chunk, i) =>
        chunk.startsWith('**') ? (
          <strong key={i} className="text-purple font-semibold">
            {chunk.replace(/\*\*/g, '')}
          </strong>
        ) : (
          chunk
        )
      )}
    </p>
))}

        </p>
        {project.link && (
  <div className="mt-6">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold text-[#915EFF] hover:underline transition-all duration-200"
    >
      🔗 Project Link
    </a>
  </div>
)}

       
        <div className="mt-5 relative w-full h-[250px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-lg bg-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${project.name}-${currentImageIndex}`}
              src={images[currentImageIndex]}
              alt={project.name}
              onLoad={() => setIsLoaded(true)}
              className="absolute w-full h-full object-contain rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollYBeforeModal, setScrollYBeforeModal] = useState(0);


  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';    
      document.body.style.width = '100%';       
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [selectedProject]);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handlePopState = (e) => {
      if (selectedProject) {
        closeModal();
      }
    };

    if (selectedProject) {
      window.history.pushState({ modalOpen: true }, "");
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedProject]);

  const openModal = (project, index) => {
    setScrollYBeforeModal(window.scrollY); 
    setSelectedProject(project);
    setActiveIndex(index);
    window.history.pushState({ modalOpen: true }, "");
  };
  
  const closeModal = () => {
    setSelectedProject(null);
    setActiveIndex(null);
  
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  
    setTimeout(() => {
      window.scrollTo({ top: scrollYBeforeModal, behavior: "instant" });
    }, 0);
  };
  

  if (!mounted) return null;

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="relative z-10 pt-10 sm:pt-18 px-4 max-w-7xl mx-auto">
      <motion.div
  variants={textVariant()}
  initial="hidden"
  animate="show"
  className="text-center" // ✅ Add this line
>
  <p className={`${styles.sectionSubText} mx-auto`}>My work</p>
  <h2 className={`${styles.sectionHeadText} mx-auto`}>Projects</h2>
</motion.div>


<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  initial="hidden"
  animate="show"
  className="mt-5 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
>
  Following projects showcase my skills and experience through real-world
  examples. Click on any card to learn more about each project’s scope and
  functionality.
</motion.p>


      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <AnimatePresence>
    {visibleProjects.map((project, index) => (
      <ProjectCard
        key={`project-${index}`}
        index={index}
        project={project}
        isActive={index === activeIndex}
        onClick={() => openModal(project, index)}
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
          onClose={closeModal}
        />
      )}
    </section>
  );
};



export default Projects;
