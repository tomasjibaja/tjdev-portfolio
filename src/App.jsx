import Info from './components/Info'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'


function App() {

  return (
    <div className='porfolio'>
      <div className="card">
        <Info />
        <Skills />
      </div>
      <Projects />
    </div>
  )
}

export default App
