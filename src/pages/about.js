import Head from "next/head";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile_a.png";
import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref,{once:true});

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Rodrigo Camargo | About</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Life Long Learning"
            className="!text-8xl !text-center mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="my-4  font-light">
                Hi, I'm Rodrigo Camargo, a web developer and Backend developer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 3+ years of experience
                in the field. I am always looking for new and innovative ways to
                bring my clients' visions to life.
              </p>
              <p className=" font-light">
                I mainly work with React.js and TypeScript, but I have also
                assisted with backend tasks using Python and C# as needed for
                various products. Additionally, I am familiar with Agile
                methodologies and always prioritize delivering high-quality
                work. Recently, I have improved my understanding of security
                application best practices, specifically those outlined by
                OWASP, in order to ensure that my work meets product
                specifications.I am a software developer with a focus on React,
                TypeScript, and Node.js.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <Image
                src={profilePic}
                alt="me-profile"
                className="w-80 h-auto rounded-2xl bg-dark"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between ">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/70">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/70">
                  {" "}
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/70">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
