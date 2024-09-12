import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Info from '../components/Info'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Router = () => {
  return (
    <Routes >
      <Route path='/' element={<Info />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Router
