import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { DiAndroid, DiApple, DiCode, DiCodeBadge, DiDatabase, DiFirefox } from "react-icons/di";
import { FaLaptopCode, FaWifi } from 'react-icons/fa';
import { LiaHandPointerSolid } from "react-icons/lia";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import './LaptopAnimation.css'
import { useEffect } from 'react';

const fonts = [
  'Jura',
  'Walter Turncoat',
  'Twinkle Star',
  'DynaPuff',
  'Roboto',
  'Nunito',
  'Gruppo'
]

const Info = ({engOn}) => {

  const [powerOn, setPowerOn] = useState(false)
  const [randomFont, setRandomFont] = useState({ fontFamily: 'Jura' })

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

const changeRandomFont = () => {
  let newFont = fonts[Math.floor(Math.random() * fonts.length)];
  setRandomFont({ fontFamily: `${newFont}`})

  let ms = Math.max(5000, Math.round(Math.random() * 30000));

  setTimeout(() => {
    changeRandomFont()
  }, ms )
}

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     changeRandomFont()
  //   }, 1000)
  // }, [])

  return (
    <div className='info visible'>
      <div className={`info-icon-field ${powerOn && 'power-on'}`} >
        {icons.map((elem, index) => {
          return <div key={index}>{elem}</div>
        })}
        <FaLaptopCode className={`info-laptop-icon ${powerOn && 'power-on'}`} />
        <MdOutlinePowerSettingsNew className='info-switch' onClick={handleClick} />
      </div>
      {/* <h3><strong>Desarrollador web</strong></h3> */}
      <p>{engOn ? 'Front End specialized web developer' : 'Desarrollador web especializado en Frontend.'}</p>
      <p>{engOn ? 'I design and create webapps and websites with style' : 'Diseño y creo apps y sitios web con estilo.'}</p>
      <p>{engOn? 'I am determined to detail, user experience and high functionality.' : 'Me dedico con determinación a los detalles, la experiencia de usuario y la alta funcionalidad'}</p>
    </div>
  )
}

export default Info
