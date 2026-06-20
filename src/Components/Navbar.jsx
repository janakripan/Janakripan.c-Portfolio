"use client";
import React, { useEffect, useRef, useState } from "react";
import { Share_Tech, Codystar, Smooch_Sans } from "next/font/google";
import { bottomBar, middleBar, sideNav, topBar } from "../Animation/animation";
import { motion } from "framer-motion";
import Image from "next/image";

const share = Share_Tech({ subsets: ["latin"], weight: ["400"] });
const cody = Codystar({ subsets: ["latin"], weight: ["400"] });
const smooch = Smooch_Sans({ subsets: ["latin"], weight: ["500"] });

const Navbar = ({ needMusic }) => {
  const [musicOption, setMusicOption] = useState(false);
  const [isOpen, setISOpen] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    if (needMusic) {
      setMusicOption(true);
      return;
    }
  }, []);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicOption) {
      audio.play().catch((err) => {
        console.warn("Autoplay was blocked", err);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [musicOption]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.offsetTop - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
    setISOpen(false);
  };

  return (
    <div className="navbar-wrapper ">
      <div id="navbar" className="px-2 sm:p-5">
        <div
          id="navbar-inner"
          className="text-white flex w-full z-100 justify-between items-center"
        >
          <div className="flex cursor-default items-center justify-center gap-2">
            {/* <Image src='/Assets/logo.png' width={40} height={40} alt="Janakripan Logo - Software Developer Portfolio" className="pt-2" /> */}
            <h1 className={`${share.className} text-white`}>JANAKRIPAN</h1>
          </div>
          <div onClick={() => setMusicOption(!musicOption)}>
            <p
              className={`${cody.className} text-[10px] md:text-[12px] text-shadow-white flex cursor-pointer`}
            >
              Music : [{" "}
              <span
                className={`px-0.5 md:px-2 ${musicOption ? "text-white font-bold" : ""}`}
              >
                Yes
              </span>{" "}
              /{" "}
              <span
                className={`px-0.5 md:px-2 ${!musicOption ? "text-white font-bold" : ""}`}
              >
                No
              </span>
              ]
            </p>
          </div>
          <div
            className={`gap-2 cursor-pointer hidden md:block md:flex text-xl ${smooch.className}`}
          >
            <p onClick={() => scrollToSection("home")}>HOME</p>
            <p onClick={() => scrollToSection("about")}>ABOUT</p>
            <p onClick={() => scrollToSection("work")}>WORK</p>
            <p onClick={() => scrollToSection("contact")}>CONTACT</p>
          </div>
          <div
            className="md:hidden w-[50px] h-[40px] flex flex-col items-center justify-center gap-2 border border-white rounded-md"
            onClick={() => setISOpen(!isOpen)}
          >
            <motion.div
              {...topBar(isOpen)}
              className="w-[15px] h-[2px] bg-white rounded-full self-start ml-3"
            />
            <motion.div
              {...middleBar(isOpen)}
              className="w-[25px] h-[2px] bg-white rounded-full"
            />
            <motion.div
              {...bottomBar(isOpen)}
              className="w-[15px] h-[2px] bg-white rounded-full self-end mr-3"
            />
          </div>
          <motion.div
            {...sideNav(isOpen)}
            className={`bg-[rgba(20,20,30,0.6)] backdrop-filter backdrop-blur-md border border-blue-500/20 cursor-pointer w-[150px] h-[180px] absolute top-16 rounded-md right-5 gap-3 p-2 items-center text-[19px] justify-center flex flex-col ${smooch.className}`}
          >
            <p onClick={() => scrollToSection("home")}>HOME</p>
            <p onClick={() => scrollToSection("about")}>ABOUT</p>
            <p onClick={() => scrollToSection("work")}>WORK</p>
            <p onClick={() => scrollToSection("contact")}>CONTACT</p>
          </motion.div>
          <audio ref={audioRef} src="/bg.mp3" loop hidden />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
