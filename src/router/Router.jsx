import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Info from '../components/Info'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Router = ({engOn}) => {
  return (
    <Routes >
      <Route path='/' element={<Info engOn={engOn} />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<Projects engOn={engOn} />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Router
