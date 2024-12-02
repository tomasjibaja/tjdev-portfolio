import React, { useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {

  const [copied, setCopied] = useState(false)

  const copyMail = () => {
    setCopied(true)
    navigator.clipboard.writeText('tomasjibaja@gmail.com')
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  // const wappClick = () => {

  // }

  const copyWapp = () => {
    navigator.clipboard.writeText('1136777250')
  }

  return (
    <div className='contact visible'>
      <span className={`clipboard-msg ${copied && 'show'}`}>e-mail copiado al portapapeles</span>
      <span>tomasjibaja@gmail.com<Link target='blank' to={'mailto:tomasjibaja@gmail.com'}><MdOutlineMailOutline /></Link><FaRegCopy onClick={copyMail} /></span>
      {/* <span><Link target='blank'><FaWhatsapp /></Link>1136777250<FaRegCopy onClick={copyWapp} /></span> */}
    </div>
  )
}

export default Contact
