import Router from './router/Router'
import Nav from './components/Nav'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import BackgroundVideo from './components/BackgroundVideo'


function App() {

  return (
    <BrowserRouter>
      <div className='porfolio'>
        <div className="card">
          <h2>TOMAS JIBAJA</h2>
            {/* <img src="./smallProfile.png" alt="Tomas Jibaja" /> */}
        </div>
        <Nav />
        <Router />
      {/* <footer>&#169; Tomás Jibaja</footer> */}
      </div>
      <BackgroundVideo />
    </BrowserRouter>
  )
}

export default App
