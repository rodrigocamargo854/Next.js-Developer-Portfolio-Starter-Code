import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
} from "../components/Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink title="home" href="/" className="mr-4" />
        <CustomLink title="About" href="/about" className="mr-4" />
        <CustomLink title="Projects" href="/projects" className="mr-4" />
        <CustomLink title="Articles" href="/articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          whileHover={{y:-2}}
          className="w-8 h-8 mx-3"
          href="https://modernthreejs-iqgk-7czyso6db-rodrigocamargo854.vercel.app/"
          target="_blank"
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          className="w-8 h-8 mx-3"
          href="https://www.linkedin.com/in/rodrigo-camargo-a569b5179/"
          target="_blank"
          whileHover={{y:-2}}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon  />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
