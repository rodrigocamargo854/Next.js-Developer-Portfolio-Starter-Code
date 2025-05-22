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
    <motion.div
      className="w-full mx-auto py-4 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
      variants={quote}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className={`
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
          font-bold capitalize 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-blue-500 via-pink-500 to-yellow-500 
          ${className}
          max-w-[95%] sm:max-w-[85%] md:max-w-[80%] 
          break-words leading-tight
        `}
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
    </motion.div>
  );
};
