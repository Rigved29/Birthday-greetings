import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import TypeWriter from "typewriter-effect";

const StageAnimation = () => {
  const [searchBar, setSearchBar] = useState(false);

  const headingVariants = {
    hidden: { opacity: 0, scale: 1, y: 10 },
    visible: {
      opacity: [0, 1],
      scale: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 2.5, type: "tween" },
    },
  };

  const captionVariants = {
    hidden: { opacity: 0, scale: 1, y: 10 },
    visible: {
      opacity: [0, 1],
      scale: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1 },
    },
  };

  const div_1_Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 0,
      y: 10,

      transition: {
        delay: 4,
        duration: 0.5,
      },
    },
  };

  const div_2_Variants = {
    notVisible: { opacity: 0, y: 0 },
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 0,
      y: 10,

      transition: {
        delay: 4,
        duration: 0.5,
      },
    },
  };

  const div_searchBar_Variants = {
    notVisible: { opacity: 0, y: 0 },
    initial: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1],
      scale: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 1.5,
        type: "tween",
      },
    },
    hide: {
      opacity: 0,
      scale: 0,
      transition: {
        delay: 8,
        duration: 1,
        staggerChildren: 1.5,
        type: "tween",
      },
    },
  };

  const div_3_Variants = {
    notVisible: { opacity: 0, y: 0 },
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 0,
      y: 10,

      transition: {
        delay: 4,
        duration: 0.5,
      },
    },
  };

  const divOneControls = useAnimation();
  const divTwoControls = useAnimation();

  const searchBarDivControls = useAnimation();
  const divThirdControls = useAnimation();

  useEffect(() => {
    const sequence = () => {
      divOneControls.start("visible").then(() => {
        setTimeout(() => {
          divTwoControls.start("hidden").then(() => {
            divTwoControls.start("visible").then(() => {
              searchBarDivControls.start("initial").then(() => {
                setSearchBar(true);
                searchBarDivControls.start("visible").then(() => {
                  searchBarDivControls.start("hide").then(() => {
                    divThirdControls.start("hidden").then(() => {
                      divThirdControls.start("visible");
                    });
                  });
                });
              });
            });
          });
        }, 2000);
      });
    };

    sequence();
  }, [divOneControls, divTwoControls]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate={divOneControls}
        variants={div_1_Variants}
        className="firstDiv"
      >
        <AnimatePresence>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            Hi, Lydia
            <motion.p
              className="caption"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 2.5 }}
              variants={captionVariants}
            >
              {` I really like your name btw !`}
            </motion.p>
          </motion.h1>
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial="notVisible"
        animate={divTwoControls}
        variants={div_2_Variants}
        className="firstDiv"
      >
        <AnimatePresence>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            Today is your birthday :D
          </motion.h1>
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="search-bar"
        initial="notVisible"
        animate={searchBarDivControls}
        variants={div_searchBar_Variants}
      >
        {/* <span>I wish you a very oskvlksvv skvlksvv!!</span> */}
        {searchBar && (
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Happy birthday to you!! Yeee! Many many happy blah..."
                )
                // .typeString(
                //   "<strong>JS</strong> plugin for a cool typewriter effect and "
                // )
                .pauseFor(3000)
                .start();
            }}
          />
        )}

        <span className="search-btn">Search</span>
      </motion.div>
      <motion.div
        initial="notVisible"
        animate={divThirdControls}
        variants={div_3_Variants}
        className="firstDiv"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          That's what I was going to do
        </motion.h1>
      </motion.div>
    </>
  );
};

export default StageAnimation;
