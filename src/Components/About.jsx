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
    <section className="bg-black flex flex-col gap-5 text-white py-5 px-6 md:px-20">
      {/* Header */}
      <div className="flex items-center justify-center mb-8">
        <p
          className={`px-6 py-2 rounded-full bg-[rgba(201,198,198,0.15)] text-lg tracking-widest ${head.className}`}
        >
          ABOUT ME
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Text Content */}
        <motion.div viewport={{once:true}} variants={leftFadeIn(-100,0.8)} initial='initial' whileInView='after' className="bg-white/18 backdrop-blur-md rounded-xl p-8 text-gray-100 shadow-lg">
          <h2
            className={`text-3xl font-bold mb-4 ${head.className} underline-offset-5 underline `}
          >
            A Short Breif About Me
          </h2>
          <p
            className={`leading-relaxed text-xl mb-4 text-justify ${tinos.className}`}
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
<motion.div variants={available} initial='initial' whileInView='after' viewport={{once:true}} className={`w-full p-5 flex flex-col gap-3 justify-center rounded-2xl relative bg-white/18`}>
  <h1 className={`${aw.className} text-2xl self-center`}>My Skills</h1>
  <p className={`${tinos.className} self-center text-center`}>
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
