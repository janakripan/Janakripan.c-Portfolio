'use client'
import React, { useState } from "react";
import { VT323, Share_Tech_Mono, Audiowide, Wallpoet } from "next/font/google";
import {
  faDownload,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { skills } from '../Skills'
import {motion} from 'framer-motion'
import { available, fading, image, leftFadeIn} from "@/Animation/animation";
const head = VT323({
  subsets: ["vietnamese"],
  weight: ["400"],
});
const tinos = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
});
const aw = Audiowide({
  subsets: ["latin-ext"],
  weight: ["400"],
});
const wall = Wallpoet({
  subsets: ["latin"],
  weight: ["400"],
});
const About = () => {
  const [skillList,setSkillList]=useState(false)
  return (
    <section className="flex flex-col gap-5 text-white py-5 px-6 md:px-20 relative">
      {/* Background decorative elements with enhanced blending */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/25 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/25 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 right-20 w-48 h-48 bg-gradient-to-r from-indigo-500/15 to-violet-500/20 rounded-full blur-2xl animate-float"></div>
      {/* Header */}
      <div className="flex items-center justify-center mb-8">
        <p
          className={`px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-lg tracking-widest ${head.className} backdrop-blur-md border border-white/10 shadow-xl`}
        >
          ABOUT ME
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        {/* Text Content */}
        <motion.div viewport={{once:true}} variants={leftFadeIn(-100,0.8)} initial='initial' whileInView='after' className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-8 text-gray-100 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/35 rounded-full blur-2xl animate-pulse-glow"></div>
          <h2
            className={`text-3xl font-bold mb-4 ${head.className} underline-offset-5 underline bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10`}
          >
            A Short Breif About Me
          </h2>
          <p
            className={`leading-relaxed text-xl mb-4 text-justify ${tinos.className} relative z-10`}
            style={{ hyphens: "auto" }}
          >
            I'm a passionate full stack developer who enjoys building clean,
            scalable web applications with intuitive user interfaces. My journey
            has been centered around modern web technologies like React,
            Node.js, Express, MongoDB, and Tailwind CSS. I love turning ideas
            into real, functional solutions — whether it’s solving problems or
            creating seamless user experiences across the stack.
          </p>
        </motion.div>

        {/* Image or Decorative Side */}
        <div className="flex items-center flex-col gap-3 justify-center">
          <motion.div variants={image} initial='initial' whileInView='animate' viewport={{once:true}} className="w-full h-10  bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-md flex items-center justify-center text-4xl font-bold text-white">
            <span>👨‍💻</span>
          </motion.div>
          <div className="flex  xl:justify-between flex-wrap items-center justify-center gap-2 w-full">
            <motion.div className="relative" variants={fading(0.5)}
                initial='initial'
                whileInView='after'
                viewport={{once:true}}>
                
              <div 
                
                className="text-black p-5 flex justify-center flex-col gap-3 card"
              >
                <h1 className={`${aw.className} text-2xl`}>Resume</h1>
                <p
                  className={`${wall.className} text-sm text-justify leading-relaxed`}
                >
                  {" "}
                  A resume is more than just a piece of paper — it's a powerful
                  tool that showcases your skills, experience, and potential to
                  employers. Make it compelling, well-structured, and tailored
                  to leave a lasting impression.
                </p>
                <p className={`${aw.className} pt-4`}>
                  Download My Resume{" "}
                  <FontAwesomeIcon
                    icon={faHandPointRight}
                    shake
                    className="text-xl text-blue-500 pr-2 pt-1"
                  />
                </p>
              </div>
                <a href="/Anujith_vk_Full_Stack_Resume.pdf" target="_blank">
              <div className="absolute bottom-0 right-0 p-0.5 blur-border-2xl rounded-[7px] flex items-center justify-center w-[58px] h-[37px] animate-gradient-border">
              
                <button
                  className="bg-black z-10 cursor-pointer w-full h-full rounded-[7px] flex items-center justify-center "
                  title="Dowload Resume"
                >
                  <FontAwesomeIcon icon={faDownload} bounce />
                </button>

              </div>
                              </a>
            </motion.div>
            <motion.div  variants={fading(0.8)}
                initial='initial'
                whileInView='after' viewport={{once:true}}  className="w-[300px] min-w-[300px] h-[300px] bg-white text-black flex flex-col gap-3 justify-center px-5 pb-10 rounded-xl">
              <h1 className={`${aw.className} text-2xl `}>Education</h1>
              <p className={`${wall.className}`}>
                Bachelor of Technology (B.Tech) in Computer Science and
                Engineering
              </p>
              <p className={`${wall.className}`}>
                St. Thomas College of Engineering and Technology, Kannur
              </p>
              <p className={`${wall.className}`}>2020-2024 Batch</p>
            </motion.div>
          </div>
        </div>
      </div>
<motion.div variants={available} initial='initial' whileInView='after' viewport={{once:true}} className={`w-full p-8 flex flex-col gap-4 justify-center rounded-3xl relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden`}>
  <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
  <h1 className={`${aw.className} text-3xl self-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10`}>My Skills</h1>
  <p className={`${tinos.className} self-center text-center relative z-10 text-gray-200`}>
    Here are the technologies and tools I work with — always learning, always improving to build smarter, stronger solutions.
  </p>
{!skillList ?
<div className="scroll-wrapper">
  <div className="scroll-content">
    {[...skills, ...skills].map((skill, index) => (
      <div key={index} className="skill-card">
        <img src={skill.image} alt={skill.name} className="w-10 h-10 object-contain" />
        <p className="text-xs text-center mt-1">{skill.name}</p>
      </div>
    ))}
  </div>
</div>
:
<div className="flex pb-10">
  <div className="flex flex-wrap gap-2 items-center justify-center">
    {[...skills].map((skill, index) => (
      <div key={index} className="skill-card">
        <img src={skill.image} alt={skill.name} className="w-10 h-10 object-contain" />
        <p className="text-xs text-center mt-1">{skill.name}</p>
      </div>
    ))}
  </div>
</div>
}
  <button className={`absolute flex items-center justify-center rounded-full border-4 border-black bottom-2.5 left-1/2 transform -translate-x-1/2 w-auto px-2 h-[30px] bg-gradient-to-r from-gray-600 via-blue-900 cursor-pointer ${head.className}`} onClick={()=>setSkillList(!skillList)}>
    {skillList ? 'Minimize':'List all Skills'}
  </button>
</motion.div>



    </section>
  );
};

export default About;
