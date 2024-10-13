import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import SkeletonLoader from '@/app/loading'; 
import Image from 'next/image';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const projectNames = [
    
    
    {
      projName: "Telephone Billing System Management",
      Image: "/tel.png",
      projDesc: "A Desktop application for generating bills on usage and managing the customer details",
      GithubLink: "https://github.com/DBMS-project-MANISH-FASIL/telephone_billibg_system.git",
      
      buttons: [
        "Java",
        "MySql",
        "Netbeans",
        "SceneBuilder"
      ],
    },
    {
      projName: "Fleet Management",
      Image: "/fleet.png",
      projDesc: "A platform where we can store the drivers and vehicles details and shedule the route and timings .",
      GithubLink: "https://github.com/Fleet-Managment/Fleet-Managment.git",
      buttons: [
        "ReactJs",
        "Javascript",
        "Bootstrap",
        "Express",
        "MongoDB"
      ],
     
    },
    {
      projName: "Library Management",
      Image: "/libpic1.png",
      projDesc: "A platform showing various books and giving the functionalities of adding, searching, updating and deleting the book.",
      GithubLink: "https://github.com/fasil9955/library.git",
      buttons: [
        "ReactJs",
        "Javascript",
        "Bootstrap",
        "MongoDB"
      ],
    },
    {
      projName: "Crop Recomendation",
      Image: "/crop.png",
      projDesc: "By giving the Soil test report as a input it will predict the suitable crop for the given land",
      GithubLink: "https://github.com/CropRecommendationSystem/miniproject.git",
      buttons: [
        "React Native",
        "Javascript",
        "Bootstrap",
        "Python",
        "MongoDB"
      ],
      
    }
  ];

  const shouldShowMoreButton = projectNames.length > 3;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section className="flex flex-col text-gray-200 p-4">
      <div id='projects'>
        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">Projects</h1>
        <hr className="mb-6" />
        <div className="flex flex-col gap-6">
          <AnimatePresence>
            {isLoading ? (
              Array(3).fill(0).map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg shadow-lg mb-5 flex flex-col sm:flex-row"
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: 20 }}
                  // transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                    <SkeletonLoader className="w-64 h-64 rounded-lg" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex flex-col sm:flex-row justify-between mb-4">
                      <SkeletonLoader className="w-1/2 h-8 rounded" />
                      <SkeletonLoader className="w-1/4 h-6 rounded" />
                    </div>
                    <SkeletonLoader className="w-full h-24 rounded mb-4" />
                    <div className="flex items-center mt-2 space-x-3 mb-4">
                      <SkeletonLoader className="w-24 h-8 rounded" />
                      <SkeletonLoader className="w-24 h-8 rounded" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {Array(3).fill(0).map((_, idx) => (
                        <SkeletonLoader key={idx} className="w-24 h-8 rounded" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              projectNames.slice(0, showMore ? projectNames.length : 3).map((project, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg shadow-lg mb-5 flex flex-col sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 frame-3d mb-4 sm:mb-0 sm:mr-4">
                    <Image
                      src={project.Image}
                      alt='Project Image'
                      width={400}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className='flex flex-col sm:flex-row justify-between mb-4'>
                      <h2 className="text-xl sm:text-2xl font-semibold">{project.projName}</h2>
                      
                    </div>
                    <p className="text-gray-400 mb-2">{project.projDesc}</p>
                    <div className="flex items-center mt-2 space-x-3 mb-4 ">
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        style={{x:10}}
                        href={project.GithubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-200 hover:text-white transition-colors"
                      >
                        <FaGithub className="text-xl mr-1" />
                        <span className="text-sm cursor-pointer">Code</span>
                      </motion.a>
                     
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {project.buttons.map((buttonLabel, buttonIndex) => (
                        <Badge key={buttonIndex} variant="dark">{buttonLabel}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
          {shouldShowMoreButton && (
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setShowMore(!showMore)}
                className="relative min-h-[50px] w-40 overflow-hidden border border-purple-500 hover:text-purple-500 shadow-2xl transition-all rounded-lg bg-transparent text-white hover:bg-purple-500"
              >
                <span className="absolute top-0 left-0 right-0 bottom-0 text-white flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
                  {showMore ? 'View Less' : 'View More'}
                </span>
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
