import React from 'react';
import htmlImg from '../assets/images/html.svg';
import jsImg from '../assets/images/js.svg';
import cssImg from '../assets/images/css.svg';
import reactImg from '../assets/images/react.svg';
import reduxImg from '../assets/images/redux.svg';
import nodeImg from '../assets/images/node.svg';
import expressImg from '../assets/images/express.svg';
import mongodbImg from '../assets/images/mongodb.svg';
import tailwindImg from '../assets/images/tailwind.svg';
import bootstrapImg from '../assets/images/bootstrap.svg';

const skills = [
  { name: 'HTML', img: htmlImg },
  { name: 'JavaScript', img: jsImg },
  { name: 'CSS', img: cssImg },
  { name: 'React', img: reactImg },
  { name: 'Redux', img: reduxImg },
  { name: 'Node.js', img: nodeImg },
  { name: 'Express', img: expressImg },
  { name: 'MongoDB', img: mongodbImg },
  { name: 'Tailwind CSS', img: tailwindImg },
  { name: 'Bootstrap', img: bootstrapImg }
];

const Skills = ({ id }) => {
  return (
    <div
      id={id}
      className="flex-grow flex justify-center w-full h-screen max-w-7xl mx-auto px-4 py-12"
    >
      <div className="w-full">
        <h1 className="text-6xl font-bold mb-20 text-gray-800">
          My <span className="text-blue-600">Skills</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center mt-36">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-2" />
              <p className="text-lg font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
