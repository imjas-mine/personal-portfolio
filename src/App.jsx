import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expereince from './components/Expereince'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Expereince></Expereince>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </>
  )
}

export default App
