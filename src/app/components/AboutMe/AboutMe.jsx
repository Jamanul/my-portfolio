"use client"
import React from "react";
import { FiDownload, FiGithub, FiInstagram } from "react-icons/fi";
import { RiFacebookLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import CountUp from 'react-countup';
const AboutMe = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl mt-32 mb-6 font-semibold text-text font-sora">
          I am Md Jamanul Karim
        </h2>
        <h2 className="text-6xl font-bold text-primary bg-gradient-to-r from-primary to-slate-400 text-transparent inline-block bg-clip-text">
          Mern Stack Developer
        </h2>
        <h6 className="text-2xl mt-6">
          Motivated web developer with the knowledge of various modern
          technology who have strong foundation in creating responsive,
          user-friendly web applications with the help of modern frameworks like
          React and Next JS. My goal is to make myself better everyday
          with the technologies I am familiar with to ensure the best
          performance.
        </h6>
        <div className="mt-10 flex gap-6 items-center">
           <a href="./Orginal resume.pdf" download={'resume'}><button className="px-9 py-4 border-2 hover:bg-primary hover:text-text hover:transition hover:duration-1000 border-primary text-primary rounded-l-full rounded-r-full flex items-center gap-2">Download Resume <FiDownload/></button></a> 
           <div className="space-x-2 flex items-center gap-2">
                <h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiFacebookLine className="text-4xl p-2"/></h2>
                <h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><TiSocialLinkedin className="text-4xl p-2"/></h2>
                <h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><FiGithub className="text-4xl p-2"/></h2>
                <h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><FiInstagram className="text-4xl p-2"/></h2>
           </div>
        </div>
      </div>
      <div>
        <img src="https://i.postimg.cc/sX3dqyPM/ccc406dbafc09f3ac2f066a494af21e7.jpg" className="border-primary border-2 ml-16 translate-x-5 translate-y-10 transform rotate-12 hover:rotate-0 hover:transition hover:duration-1000 hover:border-violet-300 mt-32 rounded-3xl h-[400px] w-[400px]" alt="" />
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
