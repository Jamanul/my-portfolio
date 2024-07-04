import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";


export default function Home() {

  return (
    <div className='max-w-7xl mx-auto'>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Education/>
  </div>
  );
}
