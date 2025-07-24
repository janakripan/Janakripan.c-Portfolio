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
    <>
      <Navbar needMusic={playMusic} />
      <section>
        <section id="home" className="w-full lg:min-h-screen h-auto">
          <Home />
        </section>
        <section id="about" className="w-full lg:min-h-screen h-auto pt-5">
          <About />
        </section>
        <section id="work" className="w-full lg:min-h-screen h-auto pt-5">
          <Works />
        </section>
        <section id="contact" className="w-full h-auto pt-5">
          <Contact />
        </section>
      </section>
    </>
  )
}

export default Portfolio
