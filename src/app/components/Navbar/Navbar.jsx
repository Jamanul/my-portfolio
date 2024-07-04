"use client";
import React, { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div className="md:px-20 lg:px-40 pt-10 pb-5 text-poppins">
      <nav className="flex justify-between text-text font-sora">
        <div>
          <p>my logo</p>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex gap-8 ">
            <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                Skills
              </Link>
            </li>
            <li className="text- hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                Projects
              </Link>
            </li>
            <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                Education
              </Link>
            </li>
            <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                Contact
              </Link>
            </li>
            
          </ul>
          <div><div className="ml-10 hover:transition bg-primary px-9 py-4 rounded-l-full rounded-r-full bg-gradient-to-r from-primary to-black hover:bg-gradient-to-r hover:from-black hover:to-primary hover:duration-1000 hover:ease-in-out">Hire me</div></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
