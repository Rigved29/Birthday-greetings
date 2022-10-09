import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import TypeWriter from "typewriter-effect";
import baloon1 from "../Images/ballon1.svg";
import baloon2 from "../Images/ballon2.svg";
import baloon3 from "../Images/ballon3.svg";

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

  const div_4_Variants = {
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

  const div_5_Variants = {
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

  const div_6_Variants = {
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

  const soFirstVariants = {
    notVisible: { opacity: 0, scale: 5, y: 10 },
    hidden: { opacity: 1, scale: 5, y: 10 },
    visible: {
      opacity: 1,
      scale: [5, 1, 5],
      y: 0,
      transition: { duration: 1, staggerChildren: 2.5, type: "tween" },
    },
  };

  const soSecondVariants = {
    notVisible: { opacity: 0, scale: 5, y: 10 },
    hidden: { opacity: 1, scale: 5, y: 10 },
    visible: {
      opacity: 1,
      scale: [5, 1, 5],
      y: 0,
      transition: {
        delay: 0.25,
        duration: 1,
        staggerChildren: 2.5,
        type: "tween",
      },
    },
  };

  const divOneControls = useAnimation();
  const divTwoControls = useAnimation();

  const searchBarDivControls = useAnimation();
  const divThirdControls = useAnimation();
  const divFourthControls = useAnimation();
  const divFifthControls = useAnimation();
  const divSixthControls = useAnimation();
  const soFirstControls = useAnimation();
  const soSecondControls = useAnimation();

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
                      divThirdControls.start("visible").then(() => {
                        divFourthControls.start("hidden").then(() => {
                          divFourthControls.start("visible").then(() => {
                            divFifthControls.start("hidden").then(() => {
                              divFifthControls.start("visible").then(() => {
                                divSixthControls.start("hidden").then(() => {
                                  // divSixthControls.start("visible").then(() => {
                                  soFirstControls.start("hidden").then(() => {
                                    soFirstControls
                                      .start("visible")
                                      .then(() => {
                                        soSecondControls
                                          .start("hidden")
                                          .then(() => {
                                            soSecondControls
                                              .start("visible")
                                              .then(() => {
                                                divSixthControls.start(
                                                  "visible"
                                                );
                                              });
                                          });
                                      });
                                  });
                                  // });
                                });
                              });
                            });
                          });
                        });
                      });
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
      <motion.div
        initial="notVisible"
        animate={divFourthControls}
        variants={div_4_Variants}
        className="firstDiv"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          But then I Stopped
        </motion.h1>
      </motion.div>
      <motion.div
        initial="notVisible"
        animate={divFifthControls}
        variants={div_5_Variants}
        className="firstDiv"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          I realised , I wanted to do something{" "}
          <motion.span
            initial={{
              fontWeight: "bold",
              backgroundColor: "transparent",
              color: "black",
            }}
            animate={{
              fontWeight: "bold",
              backgroundColor: ["transparent", "cornflowerblue"],
              color: ["black", "white"],
              transition: {
                delay: 2,
                duration: 1,
                staggerChildren: 2.5,
                type: "tween",
              },
            }}
          >
            special
          </motion.span>
        </motion.h1>
      </motion.div>
      <motion.div
        initial="notVisible"
        animate={divSixthControls}
        variants={div_6_Variants}
        className="firstDiv"
      >
        <h1
        // initial="hidden"
        // animate="visible"
        // variants={headingVariants}
        >
          <motion.span
            initial="notVisible"
            animate={soFirstControls}
            variants={soFirstVariants}
          >
            S
          </motion.span>
          <motion.span
            initial="notVisible"
            animate={soSecondControls}
            variants={soSecondVariants}
          >
            O
          </motion.span>
        </h1>
      </motion.div>
      <motion.div className="baloons">
        <motion.img src={baloon1} alt="baloon1" />
        <motion.img src={baloon2} alt="baloon1" />
        <motion.img src={baloon3} alt="baloon1" />
        <motion.img src={baloon1} alt="baloon1" />
        <motion.img src={baloon2} alt="baloon1" />
        <motion.img src={baloon3} alt="baloon1" />
        <motion.img src={baloon1} alt="baloon1" />
        <motion.img src={baloon2} alt="baloon1" />
        <motion.img src={baloon3} alt="baloon1" />
        <motion.img src={baloon1} alt="baloon1" />
        <motion.img src={baloon2} alt="baloon1" />
        <motion.img src={baloon3} alt="baloon1" />
        <motion.img src={baloon1} alt="baloon1" />
        <motion.img src={baloon2} alt="baloon1" />
        <motion.img src={baloon3} alt="baloon1" />
        <motion.img src={baloon1} alt="baloon1" />
        <motion.img src={baloon2} alt="baloon1" />
        <motion.img src={baloon3} alt="baloon1" />
      </motion.div>
    </>
  );
};

export default StageAnimation;
