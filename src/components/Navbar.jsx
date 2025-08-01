import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { file, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleId = entry.target.getAttribute("id");
            const navItem = navLinks.find((nav) => nav.id === visibleId);
            if (navItem) {
              setActive(navItem.title);
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [isHomePage]);

  const handleNavClick = (id, title) => {
    setActive(title);
    if (isHomePage) {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`
        ${styles.paddingX} fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? "bg-[#0f0f1c]/80 backdrop-blur-md shadow-[0_0_20px_#915EFF66] border-b border-[#915EFF40]"
          : "bg-transparent"}
      `}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center py-3 md:py-4'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={file}
            alt='logo'
            className='w-10 h-10 object-contain animate-glow-logo'
          />
          <p className='text-white text-xl font-extrabold tracking-wide'>
            KulboyRaj
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden lg:flex gap-6 lg:gap-8 xl:gap-10 items-center text-[15px] lg:text-[16px] font-medium'>
          <ul className='flex gap-8'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                onClick={() => handleNavClick(nav.id, nav.title)}
                className={`relative group cursor-pointer ${
                  active === nav.title ? "text-white" : "text-gray-400"
                } hover:text-[#915EFF] transition-colors duration-300`}
              >
                {isHomePage ? (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                ) : (
                  <Link to={`/#${nav.id}`}>{nav.title}</Link>
                )}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#915EFF] group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          <Link
            to='/activities'
            className='text-gray-400 hover:text-[#915EFF] transition-colors duration-300 border border-[#915EFF50] px-3 py-1 rounded-lg'
          >
            Activities
          </Link>

          <a
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-4 border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-black transition-all px-4 py-1.5 rounded-lg font-semibold'
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='lg:hidden flex items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-7 h-7 cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div className='lg:hidden absolute top-20 right-4 bg-[#0d0d1c]/90 backdrop-blur-md border border-[#915EFF44] rounded-lg px-6 py-4 z-50 min-w-[180px] max-w-[90vw] shadow-md'>
            <ul className='flex flex-col gap-4 text-white font-medium'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  onClick={() => {
                    setToggle(false);
                    if (isHomePage) handleNavClick(nav.id, nav.title);
                  }}
                  className='hover:text-[#915EFF] transition-colors duration-300'
                >
                  {isHomePage ? (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  ) : (
                    <Link to={`/#${nav.id}`}>{nav.title}</Link>
                  )}
                </li>
              ))}

              <li>
                <Link
                  to='/activities'
                  onClick={() => setToggle(false)}
                  className='hover:text-[#915EFF] transition-colors duration-300'
                >
                  Activities
                </Link>
              </li>

              <li>
                <a
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block text-center border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-black px-3 py-1 rounded-lg mt-2 transition-all font-semibold'
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
