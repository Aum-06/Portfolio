import React from "react";
import heroImg from "../assets/images/hero-img-Cqh1d5RO.png";
import linkedin from "../assets/images/linkedin.svg";
import x from "../assets/images/x.svg";
import github from "../assets/images/github.svg";

const Home = ({ id }) => {
  return (
    <div
      id={id}
      className="flex-grow flex justify-between items-center w-full max-w-7xl mx-auto mt-14 px-4 py-12"
    >
      <div className="w-1/2">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">
          Hello, I'm <span className="text-blue-600">Aum Singhal</span>
        </h1>
        <p className="text-2xl font-normal mb-6 text-gray-600">
          I'm a full stack developer
        </p>
        <p className="text-lg font-light mb-8 text-gray-700 max-w-xl">
          I am dedicated to crafting high-quality web applications, prioritizing user experience and efficient design.
        </p>
        <div className="flex gap-6 mb-8">
          <a href="#" className="transform hover:scale-110 transition-transform duration-200">
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform duration-200">
            <img src={x} alt="X" className="w-8 h-8" />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform duration-200">
            <img src={github} alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
       <div className="flex gap-6 mb-8">
       <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-110 transition-transform duration-200 hover:bg-blue-700 ">
          Get in touch
        </button>
        <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-110 transition-transform duration-200">
          Resume
        </button>
       </div>
      </div>
      <div className="w-5/12">
        <img src={heroImg} alt="hero-img" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;