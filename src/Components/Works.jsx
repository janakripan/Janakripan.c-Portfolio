'use client'
import React from "react";
import { VT323, Turret_Road } from "next/font/google";
import Image from "next/image";
import coderzon from "../../public/Assets/coderzon.png";
import zoople from "../../public/Assets/zoople.svg";
import portfolio from "../../public/Assets/Screenshot 2025-05-19 130926.png";
import nike from "../../public/Assets/nike.png";
import blog from "../../public/Assets/Screenshot 2025-03-04 191347.png";
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
    <div className="text-white px-5 py-2">
            <div className="flex items-center justify-center mb-8">
        <p
          className={`px-6 py-2 rounded-full bg-[rgba(201,198,198,0.15)] text-lg tracking-widest ${head.className}`}
        >
          My Works
        </p>
      </div>
      <div className="flex flex-col gap-5">
      <div className="w-full flex py-5 md:px-5 flex-col md:flex-row gap-5">
        <div className="flex w-full lg:w-[30%] items-center gap-0">
          <motion.div variants={leftFadeIn(-100,0.8)} initial='initial' whileInView='after' viewport={{once:true}} className="flex  flex-col items-center">
            <h1 className={`${turrent.className} text-2xl`}>Experience</h1>
            <div className="h-20 border-l-2 border-gray-400"></div>
            <div>
              <Image
                src={coderzon}
                className="p-1 border border-gray-400 rounded-full"
                alt="coderzon"
                width={32}
                height={32}
              ></Image>
            </div>
            <div className="h-25 border-l-2 border-gray-400"></div>
            <div>
              <Image
                src={zoople}
                className="p-1 h-[32px] border border-gray-400 rounded-full"
                alt="coderzon"
                width={32}
                height={32}
              ></Image>
            </div>
          </motion.div>
          <div className={`${turrent.className} flex flex-col gap-9 pt-30`}>
            <motion.div variants={fading(1.5)} viewport={{once:true}} initial='initial' whileInView='after'>
              <h1>Software Developer</h1>
              <p>Coderzon Technologies Pvt Ltd</p>
              <p>April 2025 - ongoing</p>
              <p>Full Time - Hybrid</p>
            </motion.div>
            <motion.div variants={fading(2)} viewport={{once:true}} initial='initial' whileInView='after'>
              <h1>Mern Stack Developer</h1>
              <p>Zoople Technology</p>
              <p>July 2024 - November 2024</p>
              <p>Intern</p>
            </motion.div>
          </div>
        </div>

        <div
          className={` flex w-full lg:flex-1 gap-2 flex-wrap items-center justify-center ${turrent.className}`}
        >
          <motion.div variants={fading(0.8)} initial='initial' whileInView='after' viewport={{once:true}} className="relative">
            <div  className="p-2 text-black flex flex-col gap-3 card">
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
              <button
                className="bg-black z-10 cursor-pointer w-full h-full rounded-[7px] flex items-center justify-center "
                title="view"
              >
                <FontAwesomeIcon icon={faEye} bounce />
              </button>
            </div>
          </motion.div>

          <motion.div variants={fading(1)} initial='initial' whileInView='after' viewport={{once:true}} className="relative">
            <div  className="p-2 text-black flex flex-col gap-3 card">
              <Image
                width={300}
                height={300}
                src={nike}
                alt="portfolio"
                className="rounded-md"
              />
              <p className="text-justify leading-relaxed">
                developed a Nike clone website as part of my learning journey,
                which may not be perfect but includes features like
                multi-filtering.
              </p>

              <p className={`${head.className} text-2xl`}>
                View My Nike Project{" "}
                <FontAwesomeIcon icon={faHandPointRight} shake />
              </p>
            </div>
            <div className="absolute bottom-0 right-0 p-0.5 blur-border-2xl rounded-[7px] flex items-center justify-center w-[58px] h-[37px] animate-gradient-border">
              <Link href={'https://nike-clone-1.onrender.com/'}
               target="_blank"
                className="bg-black z-10 cursor-pointer w-full h-full rounded-[7px] flex items-center justify-center "
                title="view"
              >
                <FontAwesomeIcon icon={faEye} bounce />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fading(1.2)} initial='initial' whileInView='after' viewport={{once:true}} className="relative">
            <div  className="p-2 text-black flex flex-col gap-3 card">
              <Image
                width={300}
                height={300}
                src={blog}
                alt="portfolio"
                className="rounded-md"
              />
              <p className="text-justify leading-relaxed">
                developed a Blog website as part of my learning journey, which
                may not be perfect but includes all CRUD operations .
              </p>

              <p className={`${head.className} text-2xl`}>
                View My Blog Project{" "}
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
      <motion.div variants={available} initial='initial' whileInView='after' viewport={{once:true}} className="md:px-14 text-gray-300 py-3 ">
  <h2 className={`${turrent.className} text-3xl mb-3`}>How to Become a Developer</h2>
  <ol className="list-decimal list-inside leading-relaxed">
    <li><strong>Start with the Basics:</strong> Learn HTML, CSS, and JavaScript. Focus on building simple pages first.</li>
    <li><strong>Master a Tech Stack:</strong> I chose the MERN stack — MongoDB, Express.js, React, and Node.js — for full-stack development.</li>
    <li><strong>Build Projects:</strong> Apply what you learn by building real-world apps. My Nike clone and blog site taught me a lot.</li>
    <li><strong>Understand Git & GitHub:</strong> Version control is essential. Learn to collaborate and track your code effectively.</li>
    <li><strong>Keep Improving:</strong> Read docs, watch videos, and follow dev communities. Stay curious and build consistently.</li>
  </ol>
  <p className="mt-4 italic text-sm text-white/70">
    Everyone’s path is different. This is what worked for me — and I’m still learning every day.
  </p>
</motion.div>

      </div>

    </div>
  );
};

export default Works;
