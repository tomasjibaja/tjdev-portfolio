import React from 'react'
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import { useEffect } from 'react';
import { useState } from 'react';

const ProjectCard = ({ elem, scrollPercent, incrementRange }) => {

  const [isVisible, setIsVisible] = useState(scrollPercent === 0 ? true : false)

  useEffect(() => {
    if ((scrollPercent >= (incrementRange - 10)) && (scrollPercent <= (incrementRange + 10))) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
    
  }, [scrollPercent])

  return (
    <Link target="blank" to={elem.url}>
      <div className={`project-card ${isVisible && 'active-project'}`}>
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
  )
}

export default ProjectCard
