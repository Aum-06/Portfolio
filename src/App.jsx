import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
function App() {
  return (
    <Router>
      <div className="bg-bgcolor w-full min-h-screen">
        <Navbar />
        <div>
          <Home id="home" />
          <About id="about" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Contact id="contact" />
        </div>
      </div>
    </Router>
  );
}

export default App;