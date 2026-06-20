'use client'
import React from "react";
import { VT323, Turret_Road } from "next/font/google";
import Image from "next/image";
import scanntek from "../../public/Assets/scanntek.png";
import portfolio from "../../public/Assets/janakripan_portfolio.png";
import hexa from "../../public/Assets/hexa-productions.png";
import architecture from "../../public/Assets/architecture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion'
import { available, fading, leftFadeIn } from "@/Animation/animation";
import Link from "next/link";
const head = VT323({
  subsets: ["latin"],
  weight: ["400"],
});
const turrent = Turret_Road({
  subsets: ["latin"],
  weight: ["800"],
});
const Works = () => {
  return (
    <div className="text-white px-5 py-2 relative">
      {/* Background decorative elements with enhanced blending */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/18 to-blue-500/22 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/18 to-cyan-500/22 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-20 w-64 h-64 bg-gradient-to-r from-indigo-500/15 to-violet-500/18 rounded-full blur-2xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            <div className="flex items-center justify-center mb-8 relative z-10">
        <p
          className={`px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 shadow-xl text-lg tracking-widest ${head.className}`}
        >
          MY WORKS
        </p>
      </div>
      <div className="flex flex-col gap-5 relative z-10">
      <div className="w-full flex py-5 px-2 md:px-5 flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex w-full lg:w-[35%] items-center gap-0 justify-center lg:justify-start">
          <motion.div variants={leftFadeIn(-100,0.8)} initial='initial' whileInView='after' viewport={{once:true}} className="flex  flex-col items-center">
            <h1 className={`${turrent.className} text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>Experience</h1>
            <div className="h-20 border-l-2 border-blue-400/50"></div>
            <div className="w-12 h-12 rounded-full border-2 border-blue-400/50 bg-white/10 backdrop-blur-sm shadow-lg flex items-center justify-center">
              <Image
                src={scanntek}
                className="rounded-full"
                alt="scanntek"
                width={28}
                height={28}
              ></Image>
            </div>
            <div className="h-20 border-l-2 border-blue-400/50"></div>
            <div className="w-12 h-12 rounded-full border-2 border-blue-400/50 bg-white/10 backdrop-blur-sm shadow-lg flex items-center justify-center">
              <Image
                src={scanntek}
                className="rounded-full w-7 h-7 object-contain"
                alt="scanntek"
                width={28}
                height={28}
              ></Image>
            </div>
          </motion.div>
          <div className={`${turrent.className} flex flex-col gap-6 lg:gap-9 pt-6 lg:pt-30 ml-4 lg:ml-6`}>
            <motion.div variants={fading(1.5)} viewport={{once:true}} initial='initial' whileInView='after' className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Junior Software Developer</h1>
              <p className="text-gray-300">Scanntek IT Solutions LLP</p>
              <p className="text-blue-300 text-sm">June 2025 - ongoing</p>
              <p className="text-green-300 text-sm">Full Time - Hybrid</p>
            </motion.div>
            <motion.div variants={fading(2)} viewport={{once:true}} initial='initial' whileInView='after' className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Frontend Developer</h1>
              <p className="text-gray-300">Scanntek IT Solutions LLP</p>
              <p className="text-blue-300 text-sm">December 2024 - May 2025</p>
              <p className="text-orange-300 text-sm">Intern</p>
            </motion.div>
          </div>
        </div>

        <div
          className={`flex w-full lg:flex-1 gap-3 sm:gap-4 md:gap-6 flex-wrap items-center justify-center px-2 sm:px-4 ${turrent.className}`}
        >
          <motion.div variants={fading(0.8)} initial='initial' whileInView='after' viewport={{once:true}} className="relative">
            <div className="p-2 text-black flex flex-col gap-3 card">
              <Image
                width={300}
                height={300}
                src={portfolio}
                alt="portfolio"
                className="rounded-md"
              />
              <p className="text-justify leading-relaxed">
                Designed and developed a responsive personal portfolio website
                which Showcases projects, skills, and work experience with
                interactive UI.
              </p>
              <p className={`${head.className} text-2xl`}>
                View My Portfolio{" "}
                <FontAwesomeIcon icon={faHandPointRight} shake />
              </p>
            </div>
            <div className="absolute bottom-0 right-0 p-0.5 blur-border-2xl rounded-[7px] flex items-center justify-center w-[58px] h-[37px] animate-gradient-border">
              <Link href="https://janakripan-c-portfolio.vercel.app/" target="_blank"
                className="bg-black z-10 cursor-pointer w-full h-full rounded-[7px] flex items-center justify-center "
                title="view"
              >
                <FontAwesomeIcon icon={faEye} bounce />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fading(1)} initial='initial' whileInView='after' viewport={{once:true}} className="relative">
            <div className="p-2 text-black flex flex-col gap-3 card">
              <Image
                width={300}
                height={300}
                src={hexa}
                alt="portfolio"
                className="rounded-md"
              />
              <p className="text-justify leading-relaxed">
                Developed a website for client Hexa Productions as part of my work.
                Designed and developed the website as per client requirements.
              </p>

              <p className={`${head.className} text-2xl`}>
                View My work Project{" "}
                <FontAwesomeIcon icon={faHandPointRight} shake />
              </p>
            </div>
            <div className="absolute bottom-0 right-0 p-0.5 blur-border-2xl rounded-[7px] flex items-center justify-center w-[58px] h-[37px] animate-gradient-border">
              <Link href={'https://hexa-production-mu.vercel.app/#home'}
               target="_blank"
                className="bg-black z-10 cursor-pointer w-full h-full rounded-[7px] flex items-center justify-center "
                title="view"
              >
                <FontAwesomeIcon icon={faEye} bounce />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fading(1.2)} initial='initial' whileInView='after' viewport={{once:true}} className="relative">
            <div className="p-2 text-black flex flex-col gap-3 card">
              <Image
                width={300}
                height={300}
                src={architecture}
                alt="portfolio"
                className="rounded-md"
              />
              <p className="text-justify leading-relaxed">
                developed a architecture website ui as part of my learning journey, which is dark themed , using modern ui design with smooth animations.
              </p>

              <p className={`${head.className} text-2xl`}>
                View My Project{" "}
                <FontAwesomeIcon icon={faHandPointRight} shake />
              </p>
            </div>
            <div className="absolute bottom-0 right-0 p-0.5 blur-border-2xl rounded-[7px] flex items-center justify-center w-[58px] h-[37px] animate-gradient-border">
              <Link href={'https://blog-website-frontend-p34u.onrender.com/login'}
              target="_blank"
                className="bg-black z-10 cursor-pointer w-full h-full rounded-[7px] flex items-center justify-center "
                title="view"
              >
                <FontAwesomeIcon icon={faEye} bounce />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div variants={available} initial='initial' whileInView='after' viewport={{once:true}} className="px-6 md:px-14 py-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl mx-4 relative overflow-hidden">
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
  <div className="relative z-10">
  <h2 className={`${turrent.className} text-3xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center`}>How to Become a Developer</h2>
  <ol className="list-decimal list-inside leading-relaxed space-y-3 text-gray-200">
    <li className="hover:text-white transition-colors duration-300"><strong className="text-blue-400">Start with the Basics:</strong> Learn HTML, CSS, and JavaScript. Focus on building simple pages first.</li>
    <li className="hover:text-white transition-colors duration-300"><strong className="text-purple-400">Master a Tech Stack:</strong> I chose the MERN stack and Next.js for modern, full-stack responsive web development.</li>
    <li className="hover:text-white transition-colors duration-300"><strong className="text-cyan-400">Build Real-World Projects:</strong> Apply what you learn by building practical apps and modern UI concepts. My work at Scanntek IT Solutions taught me a lot.</li>
    <li className="hover:text-white transition-colors duration-300"><strong className="text-green-400">Gain Experience:</strong> Transition from personal projects to internships and full-time roles, just like my journey at Scanntek IT Solutions.</li>
    <li className="hover:text-white transition-colors duration-300"><strong className="text-pink-400">Keep Improving:</strong> Read docs, experiment with new libraries, and follow dev communities. Stay curious and build consistently.</li>
  </ol>
  <p className="mt-6 italic text-center bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
    Everyone's path is different. This is what worked for me — and I'm still learning every day.
  </p>
  </div>
</motion.div>

      </div>

    </div>
  );
};

export default Works;
