import Head from "next/head";
import React, { useRef, useEffect } from "react";
import { AnimatedText } from "../components/AnimatedText";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile_a.jpeg";
import beesIcon from '../../public/images/svgs/bees.jpeg';
import ambevTechIcon from '../../public/images/svgs/ambevtech.jpeg';
import stefIcon from '../../public/images/svgs/stefanini.webp';
import baraoIcon from '../../public/images/svgs/barao.jpeg';
import dellIcon from '../../public/images/svgs/dell.png';
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Skills } from '../components/Skills';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-black w-full">
      <Head>
        <title>Rodrigo Camargo | About</title>
        <meta name="description" content="Portfolio description" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Driven by Code, Powered by Purpose"
            className="!text-5xl sm:!text-6xl md:!text-7xl lg:!text-8xl !text-center mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-16 w-full">
            {/* BIO */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>
              <p className="my-4 font-light text-center lg:text-left">
                I’m Rodrigo Camargo, a passionate Frontend Developer with a strong foundation in backend and cloud technologies. With a mindset shaped by continuous learning, I transform ideas into modern, scalable, and impactful digital solutions.
              </p>
              <p className="font-light text-center lg:text-left">
                My core stack revolves around React.js, TypeScript, Next.js, and Node.js. I also navigate backend tasks using Python, C#, and cloud solutions when the mission demands. I’m deeply focused on crafting smooth UI/UX experiences while writing clean, maintainable, and secure code.
              </p>
              <p className="font-light text-center lg:text-left">
                I’ve collaborated with tech giants like Ambev Tech, Bees, Stefanini, and Barão, where I refined not just my coding, but my ability to solve problems, communicate effectively, and deliver real value. Whether working with enterprise systems, SaaS products, or high-impact platforms, my goal remains simple: <strong>build things that work beautifully.</strong>
              </p>
            </div>

            {/* PROFILE IMAGE */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative h-max rounded-2xl border-2 border-solid border-dark 
                bg-light dark:bg-slate-800 p-6 md:p-8">
                <Image
                  src={profilePic}
                  alt="me-profile"
                  className="w-64 h-auto md:w-80 rounded-2xl bg-dark"
                />
              </div>
            </div>

            {/* STATS */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 lg:gap-0">
              <div className="flex flex-col items-center lg:items-end">
                <span className="inline-block text-5xl md:text-7xl font-bold">
                  <AnimatedNumbers value={12} />+
                </span>
                <h2 className="text-lg md:text-xl font-medium capitalize text-dark/70 dark:text-light/70">
                  Satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-center lg:items-end">
                <span className="inline-block text-5xl md:text-7xl font-bold">
                  <AnimatedNumbers value={12} />+
                </span>
                <h2 className="text-lg md:text-xl font-medium capitalize text-dark/70 dark:text-light/70">
                  Projects delivered
                </h2>
              </div>

              <div className="flex flex-col items-center lg:items-end">
                <span className="inline-block text-5xl md:text-7xl font-bold">
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className="text-lg md:text-xl font-medium capitalize text-dark/70 dark:text-light/70">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
        </Layout>

        {/* Companies */}
        <div className="flex justify-center space-x-4 mt-10 mb-10 gap-6 flex-wrap">
          <Image src={beesIcon} alt="Bees" className="w-16 h-16 rounded-lg" />
          <Image src={ambevTechIcon} alt="Ambev Tech" className="w-16 h-16 rounded-lg" />
          <Image
            src={stefIcon}
            alt="Stefanini"
            className="w-16 h-16 rounded-lg brightness-150 contrast-125"
          />
          <Image src={baraoIcon} alt="Barão" className="w-16 h-16 rounded-lg" />
          <Image src={dellIcon} alt="Dell" className="w-16 h-16 rounded-lg" />
        </div>
      </main>
    </div>
  );
};

export default About;
