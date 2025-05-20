'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { available, handWave, image, leftFadeIn, rightFadeIn } from '@/Animation/animation'
import { Underdog,Quantico } from 'next/font/google'
import CircleTextIcon from '../Animation/circle'

const underdog = Underdog({
  subsets: ['latin-ext'],
  weight: ['400'],
})
const desig=Quantico({
  subsets:['latin'],
  weight:['700']
})

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState('DEVELOPER')
   const text = "Anujith vk-Linkedin"
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) =>
        prevTitle === 'DEVELOPER' ? 'ENGINEER' : 'DEVELOPER'
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="text-white flex flex-col sm:flex-row lg:min-h-screen bg-black">
      
      {/* LEFT SIDE: Text Content */}
      <div className="sm:w-1/2 w-full flex flex-col justify-center gap-6 px-6 py-10">
        {/* Intro Header */}
         <motion.div variants={leftFadeIn(-50,0.5)}  initial='initial' whileInView='after' viewport={{once:true}} className="flex gap-4 items-center flex-wrap">
          <h1 className={`${underdog.className} text-2xl flex items-center gap-2`}>
            Hi There <span className="text-3xl sm:text-4xl">Anujith</span> here
          </h1>
          <motion.div {...handWave} style={{ transformOrigin: 'bottom center' }}  >
           <div className='text-3xl'>👋</div>
          </motion.div>
        </motion.div>

        {/* Title Section */}
        <div className={`${underdog.className} text-2xl font-bold w-full`}>
          <motion.div variants={leftFadeIn(-180,1)} initial='initial' whileInView='after' viewport={{once:true}} className="flex flex-col gap-2 max-w-full">
            <h2 className="whitespace-nowrap">I'm a</h2>
            <div className="flex flex-wrap gap-2 sm:gap-6 items-baseline">
              <p className={`text-2xl sm:text-6xl whitespace-nowrap ${desig.className}`}>SOFTWARE</p>
              <motion.div
                key={currentTitle}
                initial={{ opacity: 0, y: [50, -50] }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className={`text-2xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-violet-700 via-red-800 to-green-700 bg-clip-text whitespace-nowrap ${desig.className}`}
              >
                {currentTitle}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Description for desktop only */}
        <div className={`hidden sm:block pt-6 text-base sm:text-xl text-justify leading-relaxed max-w-3xl ${underdog.className}`}>
          <motion.p variants={leftFadeIn(-190,1.8)} initial='initial' whileInView='after' viewport={{once:true}}>
              Welcome! I'm a Software Engineer passionate about building modern, user-focused web applications.
              From crafting smooth front-end experiences to developing powerful back-end systems, I love bringing ideas to life through clean, efficient code
          </motion.p>
          <div className='flex flex-col gap-1 items-center justify-center pt-5 text-3xl font-bold'>
           <motion.p variants={rightFadeIn(500,2)} initial='initial' whileInView='after' viewport={{once:true}} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 font-bold text-xl">I'm Available on</motion.p>
         <motion.div variants={available} initial='initial' whileInView='after' viewport={{once:true}} className='flex gap-5 items-center justify-center'>
       <CircleTextIcon
        text="Checkout&nbsp;-&nbsp;my&nbsp;-LinkedIn - Account "
        icon={() => <FontAwesomeIcon icon={faLinkedin}  />}
        iconColor="#0A66C2"
        iconSize={30}
        className='cursor-pointer'
        url='https://www.linkedin.com/in/anujithvk'
      />
       <CircleTextIcon
        text="Checkout&nbsp;- &nbsp;my&nbsp; - Github - Account "
        icon={() => <FontAwesomeIcon icon={faGithub} spin />}
        iconColor="#0A66C2"
        iconSize={30}
        url='https://github.com/Anujith-vk'
      />
      <CircleTextIcon
        text="Checkout-my- Instagram - Account"
        icon={() => <FontAwesomeIcon icon={faInstagram} />}
        iconColor="#0A66C2"
        iconSize={30}
        url='https://www.instagram.com/anujith.__/?'
      />
            </motion.div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="relative w-full sm:w-1/2 flex items-center justify-center p-6">
        <motion.div variants={image} initial='initial' whileInView='animate' viewport={{once:true}} className="relative w-full max-w-[400px]">
          <Image
            src="/Assets/portfolio.png"
            alt="portfolio image"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-black pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-transparent to-black pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
        </motion.div>
      </div>

      {/* Description for mobile only */}
      <div className={`block sm:hidden px-6 pb-10 text-base text-justify leading-relaxed ${underdog.className}`}>
        <p>
            I'm a passionate software developer who enjoys building clean, user-friendly applications.
            I work across the full stack, from designing smooth front-end interfaces to developing strong back-end systems.
            I love solving problems and turning ideas into real, working solutions with code.
          </p>
             <div className='flex flex-col gap-1 items-center justify-center pt-5 text-3xl font-bold'>
           <motion.p variants={rightFadeIn(100,1)} initial='initial' whileInView='after' viewport={{once:true}} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 font-bold text-xl">I'm Available on</motion.p>
         <motion.div variants={available} initial='initial' whileInView='after' viewport={{once:true}} className='flex gap-5 items-center justify-center'>
       <CircleTextIcon
        text="Checkout&nbsp;-&nbsp;my&nbsp;-LinkedIn - Account "
        icon={() => <FontAwesomeIcon icon={faLinkedin}  />}
        iconColor="#0A66C2"
        iconSize={30}
        className='cursor-pointer'
        url='https://www.linkedin.com/in/anujithvk'
      />
       <CircleTextIcon
        text="Checkout&nbsp;- &nbsp;my&nbsp; - Github - Account "
        icon={() => <FontAwesomeIcon icon={faGithub} spin />}
        iconColor="#0A66C2"
        iconSize={30}
        url='https://github.com/Anujith-vk'
      />
      <CircleTextIcon
        text="Checkout-my- Instagram - Account"
        icon={() => <FontAwesomeIcon icon={faInstagram} />}
        iconColor="#0A66C2"
        iconSize={30}
        url='https://www.instagram.com/anujith.__/?'
      />
            </motion.div>
          </div>

        </div>
    </div>
  )
}

export default Home
