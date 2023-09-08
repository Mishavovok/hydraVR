import React from 'react'
import './App.scss'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Advantages from './components/advantages/Advantages'
import Technologies from './components/technologies/Technologies'
import Used from './components/used/Used'
import HowBuild from './components/howBuild/HowBuild'
import Stages from './components/stages/Stages'
import Join from './components/join/Join'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='app'>
      <Nav />
      <main>
        <Hero />
        <Contact />
        <About />
        <Advantages />
        <Technologies />
        <Used />
        <HowBuild />
        <Stages />
        <Join />
        <Footer />
      </main>
    </div>
  )
}

export default App
