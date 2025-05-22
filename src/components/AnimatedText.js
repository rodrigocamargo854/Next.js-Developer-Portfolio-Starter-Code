import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`
          text-dark font-bold capitalize 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-blue-500 via-pink-500 to-yellow-500 
          ${className}
          max-w-[90%] sm:max-w-[85%] break-words
        `}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
