import React, { useState, useEffect } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { projects } from "../data/data";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {

  return (
    <>
      <div className="fade-effect fade-start"></div>
      <div className="fade-effect fade-end"></div>
      <div className="projects-wrapper visible">
        {projects.map((elem, index) => {
          return (
            <Link key={index} target="blank" to={elem.url}>
              <div className={`project-card`}>
                <MdArrowOutward />
                <img src={`./${elem.thumbnail}`} alt="" />
                <div className="project-info">
                  <h3>{elem.title}</h3>
                  <p>{elem.description}</p>
                  <div className="project-skills">
                    {elem.skills.map((elem, i) => {
                      return <span key={i}>{elem}</span>;
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <div></div>
      </div>
    </>
  );
};

export default Projects;
