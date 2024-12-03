import React, { useState, useEffect, useRef } from "react";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const [scrollPercent, setScrollPercent] = useState();

  const handleScroll = (e) => {
    setScrollPercent((e.target.scrollLeft * 100) / e.target.scrollWidth)
    console.log(scrollPercent)
  }

  return (
    <>
      <div className="fade-effect fade-start"></div>
      <div className="fade-effect fade-end"></div>
      <div onScroll={(e) => handleScroll(e)} className="projects-wrapper visible">
        {projects.map((elem, index) => {
          return (
            <ProjectCard elem={elem} key={index} scrollPercent={scrollPercent} incrementRange={(108 / (projects.length) * index)} />
          );
        })}
        <div style={{ width: '20%' }}>
      </div></div>
    </>
  );
};

export default Projects;
