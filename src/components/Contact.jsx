import React, { useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp, FaRegCopy, FaLinkedin, FaGithub } from "react-icons/fa";
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

  const copyWapp = () => {
    navigator.clipboard.writeText('1136777250')
  }

  return (
    <div className='contact visible'>
      {/* <span className={`clipboard-msg ${copied && 'show'}`}>e-mail copiado al portapapeles</span> */}
      <Link target='_blank' to={'https://www.linkedin.com/in/tomas-jibaja/'}>
        <FaLinkedin />LinkedIn
      </Link>
      <Link target='_blank' to={'https://www.github.com/tomasjibaja/'}>
        <FaGithub />GitHub
      </Link>
      <Link target='blank' to={'mailto:tomasjibaja@gmail.com'}>
      <MdOutlineMailOutline />tomasjibaja@gmail.com
      </Link>
      {/* <div className="contact-icons">
        <Link className="contact-icons-send" target='blank' to={'mailto:tomasjibaja@gmail.com'}>
          <MdOutlineMailOutline />
        </Link>
        <FaRegCopy className="contact-icons-copy" onClick={copyMail} />
      </div> */}
      {/* <span><Link target='blank'><FaWhatsapp /></Link>1136777250<FaRegCopy onClick={copyWapp} /></span> */}
    </div>
  )
}

export default Contact
