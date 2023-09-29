import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import profilePic from "../../public/images/profile/me-developr.png";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name='description" content="Generated by create next app' />
      </Head>
      <main className="flex items-center justify-center flex-col text-dark w-full min-h-screen sm:flex-row" >
        <Layout className="pt-0 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="me"
                className="w-96 h-auto transform scale-x-[-1] "
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision into Reality with Code And Design"
                className="!text-4xl !text-left"
              />
              <p className="my-4 text-base font-light text-center sm:text-left text-white">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 font-light  sm:self-center sm:flex-row">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light px-3 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark transition duration-500
                  "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  target={"_blank"}
                  className="ml-4 tex-lg font-medium capitalize text-white underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </div>
  );
}
