import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Slices/themeSlice";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "glass-effect" : ""
      } dark:bg-zinc-900`}
    >
      <div className="flex justify-between items-center w-[80%] mx-auto py-4">
        <h1 className="text-2xl font-bold dark:text-white ">Aum Singhal</h1>
        <div className="flex gap-8 items-center">
          <ul className="flex gap-8 text-xl font-normal">
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("home")}
                className="nav-link"
              >
                Home
                <span></span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("about")}
                className="nav-link"
              >
                About
                <span></span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("projects")}
                className="nav-link"
              >
                Projects
                <span></span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("contact")}
                className="nav-link"
              >
                Contact
                <span></span>
              </Link>
            </li>
          </ul>
          <button onClick={() => dispatch(toggleTheme())} className="text-2xl">
            {darkMode ? (
              <MdLightMode className="toggle-theme dark:text-white" />
            ) : (
              <MdDarkMode className="toggle-theme" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
