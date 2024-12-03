import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { DiAndroid, DiApple, DiCode, DiCodeBadge, DiDatabase, DiFirefox } from "react-icons/di";
import { FaLaptopCode, FaWifi } from 'react-icons/fa';
import { LiaHandPointerSolid } from "react-icons/lia";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import './LaptopAnimation.css'


const Info = () => {

  const [powerOn, setPowerOn] = useState(false)

  const [icons, setIcons] = useState([
  <DiCode />,
  <DiDatabase />,
  <DiApple />,
  <DiAndroid />,
  <DiFirefox />,
  <DiCodeBadge />,
  <FaWifi />,
  <LiaHandPointerSolid />
])

const shuffleIcons = () => {
    let arr = [...icons];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    setIcons(arr);
}

  const handleClick = () => {
    shuffleIcons()
    setPowerOn(!powerOn)
  }

  return (
    <div className='info visible'>
      <div className={`info-icon-field ${powerOn && 'power-on'}`} >
        {icons.map((elem, index) => {
          return <div key={index}>{elem}</div>
        })}
        <FaLaptopCode className={`info-laptop-icon ${powerOn && 'power-on'}`} />
        <MdOutlinePowerSettingsNew className='info-switch' onClick={handleClick} />
      </div>
      <h3><strong>Desarrollo web</strong></h3>
      <p>
        Diseño y creación de aplicaciones y sitios web con estilo<br/>
      </p>
    </div>
  )
}

export default Info
