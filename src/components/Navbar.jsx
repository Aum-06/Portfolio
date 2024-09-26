import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'glass-effect' : ''}`}>
      <div className='flex justify-between items-center w-[80%] mx-auto py-4'>
        <h1 className='text-2xl font-bold '>Aum Singhal</h1>
        <div className='flex gap-8 items-center'>
          <ul className='flex gap-8 text-xl font-normal'>
            <li>
              <Link to="/" onClick={() => scrollToSection('home')} className="nav-link">
                Home
                <span></span>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('about')} className="nav-link">
                About
                <span></span>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('projects')} className="nav-link">
                Projects
                <span></span>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
                <span></span>
              </Link>
            </li>
          </ul>
          <button onClick={toggleTheme} className='text-2xl'>
            {theme === 'light' ? <MdLightMode className='toggle-theme' /> : <MdDarkMode className='toggle-theme' />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;