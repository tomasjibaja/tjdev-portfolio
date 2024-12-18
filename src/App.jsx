import Router from './router/Router'
import Nav from './components/Nav'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import BackgroundVideo from './components/BackgroundVideo'
import { useState } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiTranslate2 } from "react-icons/ri";



function App() {

  const [lightOn, setLightOn] = useState(false);
  const [engOn, setEngOn] = useState(false)

  const darkTheme = {
    '--dark': '#040D12',
    '--mid-dark': '#183D3D',
    '--mid-light': '#497766',
    '--old-light': '#50ac8a',
    // '--light': '#68c897', OLD ONE
    '--light': '#499a61',
    '--green-light': '#499a61',
    '--shadow10': 'rgba(70, 70, 70, .1)',
    '--shadow30': 'rgba(70, 70, 70, .3)',
    '--shadow70': 'rgba(70, 70, 70, .7)',
    '--shadow90': 'rgba(70, 70, 70, .9)',
  }

  const lightTheme = {
    '--dark': 'rgba(3, 6, 9, .3)',
    '--mid-dark': '#655196',
    '--mid-light': '#494a77',
    '--old-light': '#505bac',
    '--light': '#2f0185',
    '--green-light': '#3a48a0',
    '--shadow10': 'rgba(150, 150, 200, .3)',
    '--shadow30': 'rgba(200, 200, 200, .3)',
    '--shadow70': 'rgba(50, 50, 60, .7)',
    '--shadow90': 'rgba(50, 50, 60, .9)',
  }

  return (
    <BrowserRouter>
      <div className='porfolio' style={lightOn ? lightTheme : darkTheme}>
        <div className="theme-select">
          <MdOutlineDarkMode className={!lightOn ? 'active-theme-button' : 'inactive-theme-button'} onClick={() => setLightOn(false)} />
          <MdOutlineLightMode className={lightOn ? 'active-theme-button' : 'inactive-theme-button'} onClick={() => setLightOn(true)} />
          <RiTranslate2 onClick={() => setEngOn(!engOn)} />
        </div>
        <div className="card">
          <h2>TOMAS JIBAJA</h2>
        </div>
        <Nav />
        <Router engOn={engOn} />
      </div>
      <BackgroundVideo lightOn={lightOn} />
    </BrowserRouter>
  )
}

export default App
