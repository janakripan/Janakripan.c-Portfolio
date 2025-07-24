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
  subsets: ['latin'],
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
    <div className="text-white flex flex-col sm:flex-row lg:min-h-screen relative pt-14 home-container">
      {/* Background gradient orbs with enhanced blending */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/25 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/25 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-10 right-20 w-60 h-60 bg-gradient-to-r from-indigo-500/15 to-blue-400/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-52 h-52 bg-gradient-to-r from-violet-500/15 to-purple-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="sm:w-1/2 w-full flex flex-col justify-center gap-6 px-6 py-10 relative z-10 text-section">
         <motion.div variants={leftFadeIn(-50,0.5)}  initial='initial' whileInView='after' viewport={{once:true}} className="flex gap-4 items-center flex-wrap">
          <h1 className={`${underdog.className} text-2xl flex items-center gap-2`}>
            Hi There <span className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Anujith</span> here
          </h1>
          <motion.div {...handWave} style={{ transformOrigin: 'bottom center' }}  >
           <div className='text-3xl'>👋</div>
          </motion.div>
        </motion.div>

        <div className={`${underdog.className} text-2xl font-bold w-full`}>
          <motion.div variants={leftFadeIn(-180,1)} initial='initial' whileInView='after' viewport={{once:true}} className="flex flex-col gap-2 max-w-full">
            <h2 className="whitespace-nowrap">I'm a</h2>
            <div className="title-container">
              <p className={`text-2xl title-text whitespace-nowrap ${desig.className}`}>SOFTWARE</p>
              <motion.div
                key={currentTitle}
                initial={{ opacity: 0, y: [50, -50] }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className={`text-2xl title-text animated-title font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text drop-shadow-2xl ${desig.className}`}

                  >
                {currentTitle}
              </motion.div>
            </div>
          </motion.div>
        </div>

    
        <div className={`hidden sm:block pt-6 text-base sm:text-xl text-justify leading-relaxed max-w-3xl ${underdog.className} backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl`}>
          <motion.p variants={leftFadeIn(-190,1.8)} initial='initial' whileInView='after' viewport={{once:true}}>
              Welcome! I'm Anujith VK, a passionate Software Engineer and Full Stack Developer from Thalassery, Kerala. 
              I specialize in building modern, scalable web applications using React, Next.js, Node.js, and the MERN stack. 
              From crafting intuitive front-end experiences to developing robust back-end systems, I bring ideas to life with clean, efficient code.
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
      <div className="relative w-full sm:w-1/2 flex items-center justify-center p-6 z-10 image-section">
        <motion.div variants={image} initial='initial' whileInView='animate' viewport={{once:true}} className="relative w-full max-w-[400px]">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse-glow"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/10 to-blue-600/15 rounded-full blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-2 border border-white/10 shadow-2xl">
            <Image
              src="/Assets/portfolio.png"
              alt="Anujith VK - Software Engineer and Full Stack Developer Portfolio"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-3xl" />
        </motion.div>
      </div>

      {/* Description for mobile only */}
      <div className={`block sm:hidden px-6 pb-10 text-base text-justify leading-relaxed ${underdog.className} relative z-10 backdrop-blur-sm bg-white/5 rounded-2xl mx-6 p-6 border border-white/10`}>
        <p>
            I'm Anujith VK, a passionate Software Engineer and Full Stack Developer from Thalassery, Kerala.
            I specialize in React, Next.js, Node.js, and MERN stack development to create modern web applications.
            I love solving complex problems and turning innovative ideas into scalable digital solutions.
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
