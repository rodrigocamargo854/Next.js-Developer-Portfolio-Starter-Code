import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden z-50">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark dark:fill-light animate-spin-slow opacity-80" />

        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          className="flex items-center justify-center absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2
          backdrop-blur-md bg-white/30 dark:bg-slate-800/50
          text-dark dark:text-light
          shadow-xl shadow-black/20 dark:shadow-white/10
          border border-slate-300 dark:border-slate-600
          w-20 h-20 rounded-full
          font-semibold hover:scale-105 hover:shadow-2xl
          hover:shadow-black/30 dark:hover:shadow-white/20
          transition duration-300"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
