import React from 'react'
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiNodejsSmall, DiMongodb } from 'react-icons/di'
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className='skills'>
      <div className="skills-wrapper visible">
        <div>
          <DiHtml5 />
          <span>HTML5</span>
        </div>
        <div>
          <DiCss3 />
          <span>CSS3</span>
        </div>
        <div>
          <DiJsBadge />
          <span>JAVASCRIPT</span>
        </div>
        <div>
          <DiReact />
          <span>REACT JS</span>
        </div>
        <div>
          <DiNodejsSmall />
          <span>NODE JS</span>
        </div>
        <div>
          <DiMongodb />
          <span>MONGODB</span>
        </div>
        <div>
          <RiNextjsFill />
          <span>NEXT JS</span>
        </div>
      </div>
    </div>
  )
}

export default Skills
