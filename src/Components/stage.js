import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "typewriter-effect";

const StageAnimation = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: 10, transition: { delay: 4, duration: 0.5 } }}
      >
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, scale: 1, y: 10 }}
            animate={{ opacity: [0, 1], scale: 1, y: 0 }}
            transition={{
              // duration: 4,
              staggerChildren: 1.5,
              type: "tween",
            }}
            exit={{ opacity: 0 }}
          >
            Hey , How are you ?
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1], scale: 1 }}
              transition={{ delay: 0.5, duration: 2.5 }}
            >
              {` Good !`}
            </motion.span>
          </motion.h1>
          {/* <motion.h1
            initial={{ opacity: 0, scale: 1, y: -50 }}
            animate={{ opacity: [0, 1], scale: 1, y: -50 }}
            transition={{ delay: 4, duration: 3, staggerChildren: 0.5 }}
            exit={{ opacity: 0 }}
          >
            I think today is...
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1], scale: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Dusherra !🎇
            </motion.span>
          </motion.h1> */}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="search-bar"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1], scale: 1 }}
        transition={{
          duration: 1.5,
          staggerChildren: 1.5,
          type: "tween",
        }}
      >
        {/* <span>I wish you a very oskvlksvv skvlksvv!!</span> */}
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString("I wish you a very oskvlksvv skvlksvv!!")
              // .typeString(
              //   "<strong>JS</strong> plugin for a cool typewriter effect and "
              // )
              .pauseFor(3000)
              .start();
          }}
        />

        <span className="search-btn">Search</span>
      </motion.div>
    </>
  );
};

export default StageAnimation;
