'use client'

import React, { useState} from 'react'
import About from '../Components/About'
import Home from '../Components/Home'
import Works from '../Components/Works'
import Contact from '../Components/Contact'
import IntroScreen from '../Components/Concent'
import Navbar from '../Components/Navbar'

const Page = () => {
  const [musicOption, setMusicOption] = useState<boolean | null>(null)


  if (musicOption === null) {
    return (

          <IntroScreen setMusic={setMusicOption} />  
    )
  }

  return (
    <>
      <Navbar needMusic={musicOption} />
      <section>
        <section id='home' className='w-full lg:min-h-screen h-auto'>
          <Home />
        </section>
        <section id='about' className='w-full lg:min-h-screen h-auto pt-5'>
          <About />
        </section>
        <section id='work' className='w-full lg:min-h-screen h-auto pt-5'>
          <Works />
        </section>
        <section id='contact' className='w-full lg:min-h-screen h-auto pt-5'>
          <Contact />
        </section>
      </section>
    </>
  )
}

export default Page
