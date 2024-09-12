import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { projects } from '../data/data'
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {

  return (
    <>
      <div className="fade-effect fade-start"></div>
      <div className="fade-effect fade-end"></div>
      <div className='projects-wrapper'>
          {projects.map(
            (elem, index) => {
              return (
                  <Link target='blank' to={elem.url}>
                  <div className='project-card' key={index} >
                    <MdArrowOutward />
                    <img src={`./${elem.thumbnail}`} alt="" />
                    <div className="project-info">
                      <h3>{elem.title}</h3>
                      <p>{elem.description}</p>
                      <div className='project-skills'>{elem.skills.map((elem, index) => {return <span key={index}>{elem}</span>})}</div>
                    </div>
                  </div>
                </Link>
              )
            }
          )}
      </div>
    </>
    
  )
}

export default Projects
