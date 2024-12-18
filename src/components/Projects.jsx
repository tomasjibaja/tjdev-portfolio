import React, { useState, useEffect, useRef } from "react";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

const Projects = ({engOn}) => {

  const [scrollPercent, setScrollPercent] = useState();

  const handleScroll = (e) => {
    setScrollPercent((e.target.scrollLeft * 100) / e.target.scrollWidth)
  }

  return (
    <>
      {/* <div className="fade-effect fade-start"></div>
      <div className="fade-effect fade-end"></div> */}
      <div onScroll={(e) => handleScroll(e)} className="projects-wrapper visible">
        {projects.map((elem, index) => {
          return (
            <ProjectCard elem={elem} key={index} engOn={engOn} scrollPercent={scrollPercent} incrementRange={(108 / (projects.length) * index)} />
          );
        })}
        <div style={{ width: '20%' }}>
      </div></div>
    </>
  );
};

export default Projects;
