import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  const mailClick = () => {

  }

  const copyMail = () => {
    navigator.clipboard.writeText('tomasjibaja@gmail.com')
  }

  const wappClick = () => {

  }

  const copyWapp = () => {
    navigator.clipboard.writeText('1136777250')
  }

  return (
    <div className='contact visible'>
      <span><Link target='blank' to={'mailto:tomasjibaja@gmail.com'}><MdOutlineMailOutline /></Link>tomasjibaja@gmail.com<FaRegCopy onClick={copyMail} /></span>
      {/* <span><Link target='blank'><FaWhatsapp /></Link>1136777250<FaRegCopy onClick={copyWapp} /></span> */}
    </div>
  )
}

export default Contact
