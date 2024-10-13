"use client";
// import { SpotLight } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useState, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Project from "@/section/project/project";
import Message from "@/section/message/message";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// import SkeletonLoader from "./components/skeleton";
import SkeletonLoader from "./loading";

const COLORS_TOP = ["#0D7377", "#323EDD", "#8B5FBF", "#F25F5C"];

function MovingStars() {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    // Rotate the stars over time
    const elapsedTime = clock.getElapsedTime();
    if (starsRef.current) {
      // @ts-ignore
      starsRef.current.rotation.x = elapsedTime * 0.01;
      // @ts-ignore
      starsRef.current.rotation.y = elapsedTime * 0.01;
    }
  });

  return (
    <Stars
      // @ts-ignore
      ref={starsRef} // Attach the ref to Stars component
      radius={50}
      count={5000}
      factor={4}
      fade
    />
  );
}

export default function Home() {
  const [spotLightColor, setSpotLightColor] = useState(COLORS_TOP[0]);
  const [contentLoaded, setcontentLoaded] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);
  const texts = ["FULL STACK DEVELOPER", "CPP PROGRAMMER"];
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const animation = animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => animation.stop();
  }, [color]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAdding) {
        if (charIndex < texts[currentIndex].length) {
          setDisplayText((prev) => prev + texts[currentIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsAdding(false);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsAdding(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, isAdding, texts, currentIndex]);

  const backgroundImage = useMotionTemplate`radial-gradient(135% 135% at 50% 0%, #020617 50%, ${color})`;
  // const border = useMotionTemplate`1px solid ${color}`;
  // const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const border = useMotionTemplate`1px solid black`;
  const boxShadow = useMotionTemplate`1px solid black`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative  overflow-hidden px-4 py-12 text-gray-200"
    >
      <div className="absolute inset-0 z-[-1]">
        <Canvas>
          <MovingStars />
        </Canvas>
      </div>

      <div>
        {/* Main content */}
        <div className="w-full md:mt-24">
          <div className="max-w-5xl  md:mx-auto ">
            <div className="flex flex-col md:flex-row  items-center pt-24 sm:pt-4 ">
              {/* Text section */}
              <div className="flex-1 max-w-3xl  p-4  order-2 lg:order-1 text-center md:text-left ">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="my-4 text-3xl md:text-6xl  text-white opacity-75 font-bold leading-tight transition-transform duration-300 "
                >
                  Muhammed Fasil M P
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="leading-normal text-sm md:text-2xl mb-8 transition-transform duration-300"
                >
                  CSE UNDERGRAD |
                  <motion.span
                    key={displayText}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-clip-text text-sm md:text-2xl font-bold text-transparent ml-2 bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
                  >
                    {displayText}
                  </motion.span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="leading-normal text-sm mb-8 text-justify transition-transform duration-300 "
                >
                  I am a dedicated full stack web developer with a focus on crafting innovative web applications that address real-world challenges. As a pre-final year Computer Science Engineering student at SCEM, I am continuously exploring new technologies and methodologies. Additionally, I am proficient in C++ programming.
                </motion.p>

                <div className="w-full relative flex gap-4 justify-center md:justify-start">
                  {contentLoaded ? (
                    <motion.a
                      href="/resume_fasil.pdf"
                      download="fasil_Resume.pdf"
                      whileHover={{ scale: 1.0 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded hover:opacity-90 transition-opacity items-center px-2 py-1 bg-indigo-500 w-fit shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                    >
                      Download My Resume
                      <FiDownload className="ml-2" />
                    </motion.a>
                  ) : (
                    <SkeletonLoader className="w-44 h-12" />
                  )}
                </div>
                <motion.div className="relative flex justify-center md:justify-start mt-8 space-x-4">
                  {contentLoaded ? (
                    <>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        href="https://github.com/fasil9955"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <FaGithub className="text-2xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        href="https://www.linkedin.com/in/muhammed-fasil-638b511a4/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <FaLinkedin className="text-2xl" />
                      </motion.a>
                   
                      
                     
                    </>
                  ) : (
                    <>
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                    </>
                  )}
                </motion.div>
              </div>

              <div className="flex-shrink-0  order-1 lg:order-2 p-12  sm:p-6 flex justify-center">
                <div className="relative  ">
                  {!contentLoaded && (
                    <SkeletonLoader className="w-44 h-44 md:h-64 md:w-64" />
                  )}
                  <Image
                    src="/p4.png"
                    alt="Profile"
                    width={250}
                    height={250}
                    className={`rounded-lg shadow-lg ${
                      contentLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setcontentLoaded(true)}
                  />
                </div>
              </div>
            </div>

            <div>
              <Project />
              <Message/>
            </div>
           
          </div>
        </div>
      </div>
    </motion.section>
  );
}
