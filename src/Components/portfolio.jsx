'use client'

import React, { useState } from 'react'
import About from './About'
import Home from './Home'
import Works from './Works'
import Contact from './Contact'
import IntroScreen from './Concent'
import Navbar from './Navbar'

const Portfolio = () => {
  const [playMusic, setPlayMusic] = useState(null)

  if (playMusic === null) {
    return <IntroScreen setMusic={setPlayMusic} />
  }

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen relative overflow-hidden">
      {/* Global background effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/12 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/8 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-10 right-20 w-88 h-88 bg-gradient-to-r from-indigo-500/8 to-violet-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <Navbar needMusic={playMusic} />
      <section className="relative z-10">
        <section id="home" className="w-full lg:min-h-screen h-auto">
          <Home />
        </section>
        <section id="about" className="w-full lg:min-h-screen h-auto">
          <About />
        </section>
        <section id="work" className="w-full lg:min-h-screen h-auto">
          <Works />
        </section>
        <section id="contact" className="w-full h-auto">
          <Contact />
        </section>
      </section>
    </div>
  )
}

export default Portfolio
