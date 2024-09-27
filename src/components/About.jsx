import React from "react";

const About = ({ id }) => {
  return (
    <div
      id={id}
      className="flex-grow items-center flex w-full h-screen max-w-7xl mx-auto px-4 py-12"
    >
      <div className="w-full max-w-6xl">
        <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          About <span className="text-blue-600">Me</span>
        </h1>
      
        <div className="w-full">
          <p className="text-lg font-light mb-8 text-gray-700 dark:text-white">
          Hello! I’m Aum Singhal, a passionate Full Stack Developer with a knack for turning ideas into reality. With a solid background in both front-end and back-end technologies, I specialize in creating seamless, responsive web applications that enhance user experiences.
          </p>
          <p className="text-lg font-light mb-8 text-gray-700 dark:text-white">
            I am currently pursuing a B.Tech in Computer Science from Dr. Akhilesh Das Gupta Institute of Technology & Management (ADGIPS). This academic journey has provided me with a solid theoretical background in computer science principles, which I actively apply to my practical development work.
          </p>
          <p className="text-lg font-light mb-8 text-gray-700 dark:text-white">
          I believe in the importance of clean code, efficient architecture, and collaborative teamwork. My approach to development emphasizes understanding user needs, which informs my design choices and technical implementations.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 duration-200 transform hover:scale-110 transition-transform ">
          View My Projects
        </button>
      </div>
    </div>
  );
};

export default About;
