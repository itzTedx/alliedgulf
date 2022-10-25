import React from "react";
import { motion } from "framer-motion";

const AnimatedHomeHead = ({ text, delay }) => {
  const line1 = "Diversity Services,";
  const line2 = "Unvarying Quality,";
  const line3 = "Timely Delivery.";

  const easing = [0.6, -0.05, 0.01, 0.99];

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.05,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: "0.25em" },
    visible: {
      opacity: 1,
      y: "0em",
      transition: { duration: 0.6, ease: easing },
    },
  };

  return (
    <div>
      <motion.h1 variants={sentence} initial="hidden" animate="visible">
        {line1.split("").map((char, index) => {
          return (
            <motion.span
              key={char + "-" + index}
              variants={letter}
              style={{ display: "inline-block", marginRight: "0.02em" }}
            >
              {char}
            </motion.span>
          );
        })}
        <br />
        {line2.split("").map((char, index) => {
          return (
            <motion.span
              key={char + "-" + index}
              variants={letter}
              style={{ display: "inline-block", marginRight: "0.02em" }}
            >
              {char}
            </motion.span>
          );
        })}
        <br />
        {line3.split("").map((char, index) => {
          return (
            <motion.span
              key={char + "-" + index}
              variants={letter}
              style={{ display: "inline-block", marginRight: "0.02em" }}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedHomeHead;
