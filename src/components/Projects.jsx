import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { projects } from '../data/data'

const Projects = () => {

  return (
    <>
      <h2>PROYECTOS</h2>
      <div className='projects-wrapper'>
        <BrowserRouter>
          {projects.map(
            (elem, index) => {
              return (
                <div className='project-card' key={index} >
                  <h3>{elem.title}</h3>
                  <img src={`./${elem.thumbnail}`} alt="" />
                  <p>{elem.description}</p>
                  <div className='project-skills'>{elem.skills.map((elem, index) => {return <span key={index}>{elem}</span>})}</div>
                  <Link target='blank' to={elem.url}>Ir al sitio</Link>
                </div>
              )
            }
          )}
        </BrowserRouter>
      </div>
    </>
    
  )
}

export default Projects
