"use client";
import { Element } from "react-scroll";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
      <AboutMe />
      <Element name="skills" className="element">
      <Skills />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="education" className="element">
        <Education />
      </Element>
      <Element name="contact" className="element">
           <Contact />
      </Element>

      
      
   
    </div>
  );
}
