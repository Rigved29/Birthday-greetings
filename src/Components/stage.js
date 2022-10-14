import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import TypeWriter from "typewriter-effect";
import baloon1 from "../Images/ballon1.svg";
import baloon2 from "../Images/ballon2.svg";
import baloon3 from "../Images/ballon3.svg";
import BirthdayCake from "./BirthdayCake";
import cakeOne from "../Images/cakeOne.svg";

const StageAnimation = (props) => {
  const [searchBar, setSearchBar] = useState(false);
  const [madeBy, setMadeBy] = useState(false);

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
    notVisible: { opacity: 0, y: 10 },
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 0,
      y: 10,

      transition: {
        delay: 4,
        duration: 1,
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

  const searchBarBtn_Variants = {
    first: { opacity: 1 },
    clicked: {
      opacity: 0.5,
      transition: {
        delay: 7,
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
    notVisible: { opacity: 0, fontSize: "10rem", x: -100 },
    hidden: {
      opacity: [0, 1],
      fontSize: "10rem",
      x: -100,
      transition: {
        duration: 1,
      },
    },
    visible: {
      opacity: [1, 0],
      fontSize: ["10rem", "10rem"],
      // y: [-1000, 0],
      y: 0,
      x: -100,

      transition: {
        duration: 1.5,
        staggerChildren: 2.5,
        type: "spring",
        stiffness: 100,
      },
    },
    // removed: {
    //   opacity: [1, 0],
    //   fontSize: "25rem",
    //   transition: {
    //     delay: 1,
    //     duration: 1,
    //     staggerChildren: 2.5,
    //     type: "spring",
    //     stiffness: 100,
    //   },
    // },
  };

  const specialSpanVariants = {
    first: {
      fontWeight: "bold",
      backgroundColor: "transparent",
      color: "black",
      borderRadius: "3px",
      padding: "0px 0px",
      scale: 1,
    },
    second: {
      fontWeight: "bold",
      backgroundColor: ["transparent", "cornflowerblue"],
      color: ["black", "white"],
      borderRadius: "3px",
      padding: "3px 5px",
      scale: 1.5,
      transition: {
        delay: 0.5,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const soSecondVariants = {
    notVisible: { opacity: 0, fontSize: "10rem", x: 0 },
    hidden: {
      opacity: [0, 1],
      fontSize: "10rem",
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: [1, 0],
      fontSize: ["10rem", "10rem"],
      // y: [-1000, 0],
      y: 0,
      x: 0,
      transition: {
        // delay: 0.2,
        duration: 1,
        staggerChildren: 2.5,
        type: "spring",
        stiffness: 100,
      },
    },
    // removed: {
    //   opacity: [1, 0],
    //   fontSize: "25rem",
    //   transition: {
    //     delay: 0.2,
    //     duration: 0.5,
    //     staggerChildren: 2.5,
    //     type: "spring",
    //     stiffness: 100,
    //   },
    // },
  };

  const baloonsDivVariants = {
    notVisible: { opacity: 0 },
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      // y: [1400, -1000],
    },
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      type: "tween",
    },
  };

  const baloonsEvenVariants = {
    notVisible: { opacity: 0, y: 1400 },
    hidden: { opacity: 1, y: 1400 },
    visible: {
      opacity: 1,
      y: [1400, -10000],
      transition: {
        // delay: 2.5,
        duration: 7,
        type: "tween",
        // repeat: Infinity,
        // repeatType: "loop",
        // repeatDelay: -1,
      },
    },
  };

  const baloonsOddVariants = {
    notVisible: { opacity: 0, y: 1400 },
    hidden: { opacity: 1, y: 1400 },
    visible: {
      opacity: 1,
      y: [1400, -10000],
      transition: {
        // delay: 3.5,
        duration: 7,
        type: "tween",
        // repeat: Infinity,
        // repeatType: "loop",
        // repeatDelay: -1,
      },
    },
  };

  const baloonsVariants = {
    notVisible: { opacity: 0, y: 1400 },
    hidden: { opacity: 1, y: 1400 },
    visible: {
      opacity: 1,
      y: [1400, -10000],
      transition: {
        duration: 7,
        type: "tween",
        // repeat: Infinity,
        // repeatType: "loop",
        // repeatDelay: -1,
      },
    },
  };

  const divSeventhVaraints = {
    notVisible: { opacity: 0, y: 0 },
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 10,

      transition: {
        // delay: 1,
        delayChildren: 0.5,
        staggerChildren: 0.5,
        duration: 1,
      },
    },
  };

  const wishVariants = {
    first: { y: -20, opacity: 0, scaleX: 1 },
    second: {
      y: 0,
      opacity: 1,
      scaleX: -1,
      transition: {
        duration: 0.1,
        type: "spring",
      },
    },
    third: {
      y: 0,
      opacity: 1,
      scaleX: 1,
      color: "rgb(236, 106, 175)",
      transition: {
        duration: 0.2,
        type: "spring",
      },
    },
  };

  const cakeAnimationVariants = {
    first: { y: -1000, opacity: 0 },
    second: {
      y: 0,
      opacity: [0, 1],
      transition: {
        duration: 2,
        ease: "anticipate",
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const eightDivVariants = {
    first: { opacity: 0 },
    second: {
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "anticipate",
        type: "tween",
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };

  const eightDivSvgVariants = {
    first: { opacity: 0, visibility: "hidden", scale: 1 },
    second: {
      opacity: [0, 0.5, 0],
      visibility: "visible",
      scale: 80,
      transition: {
        duration: 1.5,
        repeat: 4,
        repeatType: "loop",
        repeatDelay: 1.4,
        // ease: "anticipate",
        // type: "tween",
      },
    },
  };

  const divOneControls = useAnimation();
  const divTwoControls = useAnimation();

  const searchBarDivControls = useAnimation();
  const searchBarBtnControls = useAnimation();
  const divThirdControls = useAnimation();
  const divFourthControls = useAnimation();
  const divFifthControls = useAnimation();
  const specialSpanControls = useAnimation();
  const divSixthControls = useAnimation();
  const soFirstControls = useAnimation();
  const soSecondControls = useAnimation();
  const baloonsDivControls = useAnimation();
  const baloonsOddControls = useAnimation();
  const baloonsEvenControls = useAnimation();
  const baloonsControls = useAnimation();
  const div_7_controls = useAnimation();
  const wishOneControls = useAnimation();
  const wishTwoControls = useAnimation();
  const wishThreeControls = useAnimation();
  const wishFourControls = useAnimation();
  const wishFiveControls = useAnimation();
  const wishSixControls = useAnimation();
  const wishSevenControls = useAnimation();
  const wishEightControls = useAnimation();
  const wishNineControls = useAnimation();
  const wishTenControls = useAnimation();
  const wishElevenControls = useAnimation();
  const wishTwelveControls = useAnimation();
  const wishThirteenControls = useAnimation();
  const wishFourteenControls = useAnimation();
  const cakeAnimationControls = useAnimation();
  const eightDivControls = useAnimation();
  const eightDivFirstSvgControls = useAnimation();
  const eightDivSecondSvgControls = useAnimation();
  const eightDivThirdSvgControls = useAnimation();
  const eightDivFourthSvgControls = useAnimation();
  const eightDivFifthSvgControls = useAnimation();
  const eightDivSixthSvgControls = useAnimation();
  const eightDivSeventhSvgControls = useAnimation();
  const eightDivEightSvgControls = useAnimation();
  const eightDivNineSvgControls = useAnimation();

  useEffect(() => {
    const sequence = () => {
      divOneControls.start("visible").then(() => {
        setTimeout(() => {
          divTwoControls.start("hidden").then(() => {
            divTwoControls.start("visible").then(() => {
              searchBarDivControls.start("initial").then(() => {
                setSearchBar(true);
                searchBarDivControls.start("visible").then(() => {
                  searchBarBtnControls.start("clicked");
                  searchBarDivControls.start("hide").then(() => {
                    divThirdControls.start("hidden").then(() => {
                      divThirdControls.start("visible").then(() => {
                        divFourthControls.start("hidden").then(() => {
                          divFourthControls.start("visible").then(() => {
                            divFifthControls.start("hidden").then(() => {
                              specialSpanControls.start("second");
                              divFifthControls.start("visible").then(() => {
                                divSixthControls.start("hidden").then(() => {
                                  // divSixthControls.start("visible").then(() => {
                                  soFirstControls.start("hidden").then(() => {
                                    soSecondControls
                                      .start("hidden")
                                      .then(() => {
                                        setTimeout(() => {
                                          soFirstControls
                                            .start("visible")
                                            .then(() => {
                                              soSecondControls
                                                .start("visible")
                                                .then(() => {
                                                  soFirstControls
                                                    .start("removed")
                                                    .then(() => {
                                                      soSecondControls.start(
                                                        "removed"
                                                      );
                                                    });
                                                  divSixthControls
                                                    .start("visible")
                                                    .then(() => {
                                                      baloonsDivControls
                                                        .start("hidden")
                                                        .then(() => {
                                                          baloonsDivControls
                                                            .start("visible")
                                                            .then(() => {
                                                              baloonsControls
                                                                .start("hidden")
                                                                .then(() => {
                                                                  baloonsControls.start(
                                                                    "visible"
                                                                  );
                                                                });
                                                              baloonsOddControls
                                                                .start("hidden")
                                                                .then(() => {
                                                                  baloonsOddControls.start(
                                                                    "visible"
                                                                  );
                                                                });

                                                              baloonsEvenControls
                                                                .start("hidden")
                                                                .then(() => {
                                                                  baloonsEvenControls
                                                                    .start(
                                                                      "visible"
                                                                    )
                                                                    .then(
                                                                      () => {
                                                                        div_7_controls
                                                                          .start(
                                                                            "hidden"
                                                                          )
                                                                          .then(
                                                                            () => {
                                                                              div_7_controls
                                                                                .start(
                                                                                  "visible"
                                                                                )
                                                                                .then(
                                                                                  () => {
                                                                                    cakeAnimationControls
                                                                                      .start(
                                                                                        "second"
                                                                                      )
                                                                                      .then(
                                                                                        () => {
                                                                                          wishOneControls
                                                                                            .start(
                                                                                              "second"
                                                                                            )
                                                                                            .then(
                                                                                              () => {
                                                                                                wishTwoControls
                                                                                                  .start(
                                                                                                    "second"
                                                                                                  )
                                                                                                  .then(
                                                                                                    () => {
                                                                                                      wishThreeControls
                                                                                                        .start(
                                                                                                          "second"
                                                                                                        )
                                                                                                        .then(
                                                                                                          () => {
                                                                                                            wishFourControls
                                                                                                              .start(
                                                                                                                "second"
                                                                                                              )
                                                                                                              .then(
                                                                                                                () => {
                                                                                                                  wishFiveControls
                                                                                                                    .start(
                                                                                                                      "second"
                                                                                                                    )
                                                                                                                    .then(
                                                                                                                      () => {
                                                                                                                        wishSixControls
                                                                                                                          .start(
                                                                                                                            "second"
                                                                                                                          )
                                                                                                                          .then(
                                                                                                                            () => {
                                                                                                                              wishSevenControls
                                                                                                                                .start(
                                                                                                                                  "second"
                                                                                                                                )
                                                                                                                                .then(
                                                                                                                                  () => {
                                                                                                                                    wishEightControls
                                                                                                                                      .start(
                                                                                                                                        "second"
                                                                                                                                      )
                                                                                                                                      .then(
                                                                                                                                        () => {
                                                                                                                                          wishNineControls
                                                                                                                                            .start(
                                                                                                                                              "second"
                                                                                                                                            )
                                                                                                                                            .then(
                                                                                                                                              () => {
                                                                                                                                                wishTenControls
                                                                                                                                                  .start(
                                                                                                                                                    "second"
                                                                                                                                                  )
                                                                                                                                                  .then(
                                                                                                                                                    () => {
                                                                                                                                                      wishElevenControls
                                                                                                                                                        .start(
                                                                                                                                                          "second"
                                                                                                                                                        )
                                                                                                                                                        .then(
                                                                                                                                                          () => {
                                                                                                                                                            wishTwelveControls
                                                                                                                                                              .start(
                                                                                                                                                                "second"
                                                                                                                                                              )
                                                                                                                                                              .then(
                                                                                                                                                                () => {
                                                                                                                                                                  wishThirteenControls
                                                                                                                                                                    .start(
                                                                                                                                                                      "second"
                                                                                                                                                                    )
                                                                                                                                                                    .then(
                                                                                                                                                                      () => {
                                                                                                                                                                        wishFourteenControls
                                                                                                                                                                          .start(
                                                                                                                                                                            "second"
                                                                                                                                                                          )
                                                                                                                                                                          .then(
                                                                                                                                                                            () => {
                                                                                                                                                                              wishOneControls
                                                                                                                                                                                .start(
                                                                                                                                                                                  "third"
                                                                                                                                                                                )
                                                                                                                                                                                .then(
                                                                                                                                                                                  () => {
                                                                                                                                                                                    wishTwoControls
                                                                                                                                                                                      .start(
                                                                                                                                                                                        "third"
                                                                                                                                                                                      )
                                                                                                                                                                                      .then(
                                                                                                                                                                                        () => {
                                                                                                                                                                                          wishThreeControls
                                                                                                                                                                                            .start(
                                                                                                                                                                                              "third"
                                                                                                                                                                                            )
                                                                                                                                                                                            .then(
                                                                                                                                                                                              () => {
                                                                                                                                                                                                wishFourControls
                                                                                                                                                                                                  .start(
                                                                                                                                                                                                    "third"
                                                                                                                                                                                                  )
                                                                                                                                                                                                  .then(
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                      wishFiveControls
                                                                                                                                                                                                        .start(
                                                                                                                                                                                                          "third"
                                                                                                                                                                                                        )
                                                                                                                                                                                                        .then(
                                                                                                                                                                                                          () => {
                                                                                                                                                                                                            wishSixControls
                                                                                                                                                                                                              .start(
                                                                                                                                                                                                                "third"
                                                                                                                                                                                                              )
                                                                                                                                                                                                              .then(
                                                                                                                                                                                                                () => {
                                                                                                                                                                                                                  wishSevenControls
                                                                                                                                                                                                                    .start(
                                                                                                                                                                                                                      "third"
                                                                                                                                                                                                                    )
                                                                                                                                                                                                                    .then(
                                                                                                                                                                                                                      () => {
                                                                                                                                                                                                                        wishEightControls
                                                                                                                                                                                                                          .start(
                                                                                                                                                                                                                            "third"
                                                                                                                                                                                                                          )
                                                                                                                                                                                                                          .then(
                                                                                                                                                                                                                            () => {
                                                                                                                                                                                                                              wishNineControls
                                                                                                                                                                                                                                .start(
                                                                                                                                                                                                                                  "third"
                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                .then(
                                                                                                                                                                                                                                  () => {
                                                                                                                                                                                                                                    wishTenControls
                                                                                                                                                                                                                                      .start(
                                                                                                                                                                                                                                        "third"
                                                                                                                                                                                                                                      )
                                                                                                                                                                                                                                      .then(
                                                                                                                                                                                                                                        () => {
                                                                                                                                                                                                                                          wishElevenControls
                                                                                                                                                                                                                                            .start(
                                                                                                                                                                                                                                              "third"
                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                            .then(
                                                                                                                                                                                                                                              () => {
                                                                                                                                                                                                                                                wishTwelveControls
                                                                                                                                                                                                                                                  .start(
                                                                                                                                                                                                                                                    "third"
                                                                                                                                                                                                                                                  )
                                                                                                                                                                                                                                                  .then(
                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                      wishThirteenControls
                                                                                                                                                                                                                                                        .start(
                                                                                                                                                                                                                                                          "third"
                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                        .then(
                                                                                                                                                                                                                                                          () => {
                                                                                                                                                                                                                                                            wishFourteenControls
                                                                                                                                                                                                                                                              .start(
                                                                                                                                                                                                                                                                "third"
                                                                                                                                                                                                                                                              )
                                                                                                                                                                                                                                                              .then(
                                                                                                                                                                                                                                                                () => {
                                                                                                                                                                                                                                                                  props.setConffetiStart(
                                                                                                                                                                                                                                                                    true
                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                  setTimeout(
                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                      eightDivControls
                                                                                                                                                                                                                                                                        .start(
                                                                                                                                                                                                                                                                          "second"
                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                        .then(
                                                                                                                                                                                                                                                                          () => {
                                                                                                                                                                                                                                                                            eightDivFirstSvgControls.start(
                                                                                                                                                                                                                                                                              "second"
                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                            setTimeout(
                                                                                                                                                                                                                                                                              () => {
                                                                                                                                                                                                                                                                                eightDivSecondSvgControls.start(
                                                                                                                                                                                                                                                                                  "second"
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                              500
                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                            setTimeout(
                                                                                                                                                                                                                                                                              () => {
                                                                                                                                                                                                                                                                                eightDivThirdSvgControls.start(
                                                                                                                                                                                                                                                                                  "second"
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                              1000
                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                            setTimeout(
                                                                                                                                                                                                                                                                              () => {
                                                                                                                                                                                                                                                                                eightDivFourthSvgControls.start(
                                                                                                                                                                                                                                                                                  "second"
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                              1500
                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                            setTimeout(
                                                                                                                                                                                                                                                                              () => {
                                                                                                                                                                                                                                                                                eightDivFifthSvgControls.start(
                                                                                                                                                                                                                                                                                  "second"
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                              2000
                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                            setTimeout(
                                                                                                                                                                                                                                                                              () => {
                                                                                                                                                                                                                                                                                eightDivSixthSvgControls.start(
                                                                                                                                                                                                                                                                                  "second"
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                              2500
                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                            setTimeout(
                                                                                                                                                                                                                                                                              () => {
                                                                                                                                                                                                                                                                                eightDivSeventhSvgControls.start(
                                                                                                                                                                                                                                                                                  "second"
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                              3000
                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                            setTimeout(
                                                                                                                                                                                                                                                                              () => {
                                                                                                                                                                                                                                                                                eightDivEightSvgControls.start(
                                                                                                                                                                                                                                                                                  "second"
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                              3500
                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                            setTimeout(
                                                                                                                                                                                                                                                                              () => {
                                                                                                                                                                                                                                                                                eightDivNineSvgControls
                                                                                                                                                                                                                                                                                  .start(
                                                                                                                                                                                                                                                                                    "second"
                                                                                                                                                                                                                                                                                  )
                                                                                                                                                                                                                                                                                  .then(
                                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                                      setTimeout(
                                                                                                                                                                                                                                                                                        () => {
                                                                                                                                                                                                                                                                                          eightDivControls.stop();
                                                                                                                                                                                                                                                                                          cakeAnimationControls.start(
                                                                                                                                                                                                                                                                                            "first"
                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                          div_7_controls.start(
                                                                                                                                                                                                                                                                                            "notVisible"
                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                          setMadeBy(
                                                                                                                                                                                                                                                                                            true
                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        500
                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                              4000
                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                        );

                                                                                                                                                                                                                                                                      console.log(
                                                                                                                                                                                                                                                                        "Running at 503"
                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    5000
                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                );
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          );
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                }
                                                                                                                                                                                                              );
                                                                                                                                                                                                          }
                                                                                                                                                                                                        );
                                                                                                                                                                                                    }
                                                                                                                                                                                                  );
                                                                                                                                                                                              }
                                                                                                                                                                                            );
                                                                                                                                                                                        }
                                                                                                                                                                                      );
                                                                                                                                                                                  }
                                                                                                                                                                                );
                                                                                                                                                                            }
                                                                                                                                                                          );
                                                                                                                                                                      }
                                                                                                                                                                    );
                                                                                                                                                                }
                                                                                                                                                              );
                                                                                                                                                          }
                                                                                                                                                        );
                                                                                                                                                    }
                                                                                                                                                  );
                                                                                                                                              }
                                                                                                                                            );
                                                                                                                                        }
                                                                                                                                      );
                                                                                                                                  }
                                                                                                                                );
                                                                                                                            }
                                                                                                                          );
                                                                                                                      }
                                                                                                                    );
                                                                                                                }
                                                                                                              );
                                                                                                          }
                                                                                                        );
                                                                                                    }
                                                                                                  );
                                                                                              }
                                                                                            );
                                                                                        }
                                                                                      );
                                                                                  }
                                                                                );
                                                                            }
                                                                          );
                                                                      }
                                                                    );
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        }, 2000);
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

  const name = "Amrita";

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
            Hi, {name}
            <motion.p
              className="caption"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 2.5 }}
              variants={captionVariants}
            >
              {` I know it's little late to wish you..it's almost 12 noon`}
            </motion.p>
          </motion.h1>
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial="notVisible"
        animate={divTwoControls}
        variants={div_2_Variants}
        className="secondDiv"
      >
        <AnimatePresence>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            Today is your birthday!!! :D
          </motion.h1>
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="search-bar"
        initial="notVisible"
        animate={searchBarDivControls}
        variants={div_searchBar_Variants}
      >
        {searchBar && (
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Happy birthday ${name}!! Yeee! Many many happy blah...`
                )
                .pauseFor(3000)
                .start();
            }}
          />
        )}

        <motion.span
          className="search-btn"
          initial="first"
          animate={searchBarBtnControls}
          variants={searchBarBtn_Variants}
        >
          Search
        </motion.span>
      </motion.div>
      <motion.div
        initial="notVisible"
        animate={divThirdControls}
        variants={div_3_Variants}
        className="thirdDiv"
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
        className="fourthDiv"
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
        className="fifthDiv"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          I realised , I wanted to do something{" "}
          <motion.span
            initial="first"
            animate={specialSpanControls}
            variants={specialSpanVariants}
          >
            special
          </motion.span>
        </motion.h1>
      </motion.div>
      <div
        // initial="notVisible"
        // animate={divSixthControls}
        // variants={div_6_Variants}
        className="sixthDiv"
      >
        {/* <h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="soH1"
        > */}
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
        {/* </h1> */}
      </div>
      <motion.div
        className="baloons"
        initial="notVisible"
        animate={baloonsDivControls}
        variants={baloonsDivVariants}
      >
        <motion.img
          src={baloon1}
          alt="baloon1"
          initial="notVisible"
          animate={baloonsOddControls}
          variants={baloonsOddVariants}
          className="baloon1"
        />
        <motion.img
          src={baloon2}
          alt="baloon2"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon2"
        />
        <motion.img
          src={baloon3}
          alt="baloon3"
          initial="notVisible"
          animate={baloonsControls}
          variants={baloonsVariants}
          className="baloon3"
        />
        <motion.img
          src={baloon1}
          alt="baloon4"
          initial="notVisible"
          animate={baloonsOddControls}
          variants={baloonsOddVariants}
          className="baloon4"
        />
        <motion.img
          src={baloon2}
          alt="baloon5"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon5"
        />
        <motion.img
          src={baloon3}
          alt="baloon6"
          initial="notVisible"
          animate={baloonsControls}
          variants={baloonsVariants}
          className="baloon6"
        />
        <motion.img
          src={baloon1}
          alt="baloon7"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon7"
        />
        <motion.img
          src={baloon2}
          alt="baloon8"
          initial="notVisible"
          animate={baloonsOddControls}
          variants={baloonsOddVariants}
          className="baloon8"
        />
        <motion.img
          src={baloon3}
          alt="baloon9"
          initial="notVisible"
          animate={baloonsOddControls}
          variants={baloonsOddVariants}
          className="baloon9"
        />
        <motion.img
          src={baloon1}
          alt="baloon10"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon10"
        />
        <motion.img
          src={baloon1}
          alt="baloon11"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon11"
        />
        <motion.img
          src={baloon3}
          alt="baloon12"
          initial="notVisible"
          animate={baloonsControls}
          variants={baloonsVariants}
          className="baloon12"
        />

        <motion.img
          src={baloon1}
          alt="baloon13"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon13"
        />

        <motion.img
          src={baloon3}
          alt="baloon14"
          initial="notVisible"
          animate={baloonsControls}
          variants={baloonsVariants}
          className="baloon14"
        />

        <motion.img
          src={baloon1}
          alt="baloon15"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon15"
        />
        <motion.img
          src={baloon3}
          alt="baloon16"
          initial="notVisible"
          animate={baloonsControls}
          variants={baloonsVariants}
          className="baloon16"
        />

        <motion.img
          src={baloon3}
          alt="baloon17"
          initial="notVisible"
          animate={baloonsControls}
          variants={baloonsVariants}
          className="baloon17"
        />

        <motion.img
          src={baloon1}
          alt="baloon18"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon18"
        />
        <motion.img
          src={baloon1}
          alt="baloon19"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon19"
        />

        <motion.img
          src={baloon3}
          alt="baloon20"
          initial="notVisible"
          animate={baloonsOddControls}
          variants={baloonsOddVariants}
          className="baloon20"
        />

        <motion.img
          src={baloon1}
          alt="baloon20"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon21"
        />

        <motion.img
          src={baloon3}
          alt="baloon22"
          initial="notVisible"
          animate={baloonsOddControls}
          variants={baloonsOddVariants}
          className="baloon22"
        />

        <motion.img
          src={baloon1}
          alt="baloon21"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon23"
        />
        <motion.img
          src={baloon3}
          alt="baloon24"
          initial="notVisible"
          animate={baloonsOddControls}
          variants={baloonsOddVariants}
          className="baloon24"
        />
        <motion.img
          src={baloon1}
          alt="baloon25"
          initial="notVisible"
          animate={baloonsEvenControls}
          variants={baloonsEvenVariants}
          className="baloon25"
        />
      </motion.div>
      <div className="mainDiv">
        {/* {props.confettiStart && ( */}
        <motion.div
          class="cake"
          initial="first"
          animate={cakeAnimationControls}
          variants={cakeAnimationVariants}
        >
          <div class="cake-bottom"></div>
          <div class="cake-middle"></div>
          <div class="cake-top"></div>
          <div class="candle"></div>
          <div class="flame"></div>
          <div class="shadow"></div>
        </motion.div>
        {/* )} */}
        <motion.div
          initial="notVisible"
          animate={div_7_controls}
          variants={divSeventhVaraints}
          className="wish-hbd-div"
        >
          <motion.div
            initial="first"
            animate={wishOneControls}
            variants={wishVariants}
            // initial={{ rotate: 270, y: -20, opacity: 1 }}
            // animate={{ rotate: 270, y: 0, opacity: 1 }}
            className="block"
          >
            H
          </motion.div>
          <motion.div
            initial="first"
            animate={wishTwoControls}
            variants={wishVariants}
          >
            A
          </motion.div>
          <motion.div
            initial="first"
            animate={wishThreeControls}
            variants={wishVariants}
          >
            P
          </motion.div>
          <motion.div
            initial="first"
            animate={wishFourControls}
            variants={wishVariants}
          >
            P
          </motion.div>
          <motion.div
            initial="first"
            animate={wishFiveControls}
            variants={wishVariants}
          >
            Y
          </motion.div>
          <motion.div
            initial="first"
            animate={wishSixControls}
            variants={wishVariants}
          >
            B
          </motion.div>
          <motion.div
            initial="first"
            animate={wishSevenControls}
            variants={wishVariants}
          >
            I
          </motion.div>
          <motion.div
            initial="first"
            animate={wishEightControls}
            variants={wishVariants}
          >
            R
          </motion.div>
          <motion.div
            initial="first"
            animate={wishNineControls}
            variants={wishVariants}
          >
            T
          </motion.div>
          <motion.div
            initial="first"
            animate={wishTenControls}
            variants={wishVariants}
          >
            H
          </motion.div>
          <motion.div
            initial="first"
            animate={wishElevenControls}
            variants={wishVariants}
          >
            D
          </motion.div>
          <motion.div
            initial="first"
            animate={wishTwelveControls}
            variants={wishVariants}
          >
            A
          </motion.div>
          <motion.div
            initial="first"
            animate={wishThirteenControls}
            variants={wishVariants}
          >
            Y
          </motion.div>
          <motion.div
            initial="first"
            animate={wishFourteenControls}
            variants={wishVariants}
          >
            !
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="divEight"
        initial="hidden"
        animate={eightDivControls}
        variants={eightDivVariants}
      >
        <motion.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          initial="first"
          animate={eightDivFirstSvgControls}
          // animate="second"
          variants={eightDivSvgVariants}
        >
          <circle cx="20" cy="20" r="20" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          initial="first"
          animate={eightDivSecondSvgControls}
          // animate="second"
          variants={eightDivSvgVariants}
        >
          <circle cx="20" cy="20" r="20" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          initial="first"
          animate={eightDivThirdSvgControls}
          variants={eightDivSvgVariants}
        >
          <circle cx="20" cy="20" r="20" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          initial="first"
          animate={eightDivFourthSvgControls}
          variants={eightDivSvgVariants}
        >
          <circle cx="20" cy="20" r="20" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          initial="first"
          animate={eightDivFifthSvgControls}
          variants={eightDivSvgVariants}
        >
          <circle cx="20" cy="20" r="20" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          initial="first"
          animate={eightDivSixthSvgControls}
          variants={eightDivSvgVariants}
        >
          <circle cx="20" cy="20" r="20" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          initial="first"
          animate={eightDivSeventhSvgControls}
          variants={eightDivSvgVariants}
        >
          <circle cx="20" cy="20" r="20" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          initial="first"
          animate={eightDivEightSvgControls}
          variants={eightDivSvgVariants}
        >
          <circle cx="20" cy="20" r="20" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          initial="first"
          animate={eightDivNineSvgControls}
          variants={eightDivSvgVariants}
        >
          <circle cx="20" cy="20" r="20" />
        </motion.svg>
      </motion.div>
      {/* <BirthdayCake /> */}
      {madeBy && (
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Okay, I hope you liked it and I want party let me know when will you give..🥳 , and again "
              )
              .typeString("Many Many happy returns of the day..🎉🎈 ")
              .pauseFor(3000)
              .start();
          }}
        />
      )}
      {madeBy && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 15, type: "tween" } }}
          className="reload"
        >
          reload the page , if u want to watch it again...😁
        </motion.p>
      )}
    </>
  );
};

export default StageAnimation;
