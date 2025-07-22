// src/pages/HomePage.jsx
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "../components";
import Certificates from "../components/Certificates";

const HomePage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Certificates />
      <Experience />
      <section id="project" className="relative z-10 pt-[100px] px-4 sm:px-10 lg:px-8">
        <Works />
      </section>
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default HomePage;
