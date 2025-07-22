import { BrowserRouter } from "react-router-dom";

import { About, Contact,Experience, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";
import Certificates from "./components/Certificates";
import AchievementPage from "./pages/AchievementPage";

const App = () => {
  return (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
         <Certificates />
        <Experience/>
        <Tech />
<section id="project" className="relative z-10 pt-[100px] px-4 sm:px-10 lg:px-8">
  <Works />
</section>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  );
}

export default App;
