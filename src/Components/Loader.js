import React from "react";
import { motion } from "framer-motion";
import "./loader.css";

const Loader = () => {
  const variants = {
    anime: (custom) => ({
      y: -25,
      transition: {
        delay: custom,
        duration: 0.75,
        flip: Infinity,
      },
    }),
  };

  return (
    <motion.div className="loaderDiv">
      <motion.div
        className="dot"
        animate="anime"
        variants={variants}
        custom={0}
      ></motion.div>
      <motion.div
        className="dot"
        animate="anime"
        variants={variants}
        custom={0.25}
      ></motion.div>
      <motion.div
        className="dot"
        animate="anime"
        variants={variants}
        custom={0.5}
      ></motion.div>
    </motion.div>
  );
};

export default Loader;
