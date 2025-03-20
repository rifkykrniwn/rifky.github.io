import React from "react";
import { METADATA } from "@/common/constant/metadata";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import SkillList from "./Skills/SkillList";

const HomeContent = () => {
  const navbarVariants = {
    hidden: {
      opacity: 0.1,
      filter: "blur(3px)",
      y: 70,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        ease: "anticipate",
        duration: 0.7,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial="hidden"
        variants={navbarVariants}
        animate="visible"
        className="max-w-3xl overflow-x-hidden space-y-12 md:space-y-20 px-6 py-4"
      >
        <motion.div
          className="flex flex-col-reverse md:grid grid-cols-3 gap-3"
          layout
        >
          <motion.div className="col-span-2 order-2 md:order-1">
            <h2 className="font-bold md:text-2xl text-xl mb-1.5">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b52ff] to-pink-500">
                Hello
              </span>{" "}
              <span className="text-primary">
                it's me <div className="text-3xl ml-1.5 animate-wave">👋</div>
              </span>
            </h2>
            <h1 className="text-4xl font-extrabold mb-1.5">
              {METADATA.authors.name}.
            </h1>
            <p className="">
            Welcome to my personal website!
            Here, I share my journey in software development,
            from learning new technologies to building projects.
            I also enjoy creating coding tutorials and trying out
            different web development tools. Feel free to explore,
            ask questions, or share your thoughts!
            </p>
          </motion.div>
          <motion.div className="order-2 md:order-1 relative" layout>
            <img
              src={METADATA.profile.img}
              className="md:ml-auto shadow rounded-full w-36 md:w-48"
              alt="profileImage"
            />
            { METADATA.authors.isAvailable && 
              <div className="md:hidden absolute bottom-0 left-0 mb-2 mr-2">
                <div className="group w-fit relative overflow-hidden inline-flex items-center bg-white/90 dark:bg-[#212121] border border-gray-300 dark:border-white/20 backdrop-blur-sm shadow-inner rounded-full hover:w-full hover:gap-2 py-1.5 px-2.5">
                  <div className="relative inline-flex justify-center items-center text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                  </div>
                  <span className="w-0 overflow-hidden whitespace-nowrap group-hover:w-full text-xs items-center justify-center transition-all ease-in-out duration-300">
                    {" "}
                    Available for work.{" "}
                  </span>
                </div>
              </div>
            }
          </motion.div>

        </motion.div>

        <div className="overflow-hidden">
          <h1 className="text-2xl font-bold mb-2">Favorite Things</h1>
          <p className="mb-4">
            I Love Alisya Fauzia Husna <br></br>
            I enjoy learning new programming languages, frameworks, and tools. Here are some technologies I’ve worked with:
          </p>
          <div className="mb-4">
            <SkillList />
          </div>
        </div>
      </motion.div>
    </LazyMotion>
  );
};

export default HomeContent;
