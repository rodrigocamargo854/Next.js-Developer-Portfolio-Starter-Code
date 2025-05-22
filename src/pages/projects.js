import Head from "next/head";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { Layout } from "@/components/Layout";
import Image from "next/image";

import pixel from "../../public/images/projects/pixel.png";
import santodex from "../../public/images/projects/santodex.png";
import movies from "../../public/images/projects/movies.png";
import remote from "../../public/images/projects/remote.png";
import rickmorty from "../../public/images/projects/rick.png";
import minecraft from "../../public/images/projects/minecraft.png";

const projects = [
  {
    title: "Santodex",
    description:
      "A 'Pokédex of Saints'. A modern, responsive web app built with Next.js, Tailwind CSS and Framer Motion. Fully deployed on Vercel.",
    image: santodex,
    link: "https://santodex.vercel.app",
    github: "https://github.com/yourusername/santodex",
    stack: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
  },
  {
    title: "Pixel Drawing App",
    description:
      "A pixel art drawing app. Users can draw and export their pixel creations as PNG files. Clean UI, fully responsive.",
    image: pixel,
    link: "https://pixel-rodrigocamargo854s-projects.vercel.app/",
    github: "https://github.com/yourusername/pixel-drawing-app",
    stack: ["React", "TypeScript", "Sass"],
  },
  {
    title: "Get All Movies",
    description:
      "A minimalist app that fetches trending movies using the TMDB API. Built with Next.js and Chakra UI.",
    image: movies,
    link: "https://get-all-movies.vercel.app/",
    github: "https://github.com/yourusername/get-all-movies",
    stack: ["Next.js", "Chakra UI", "TypeScript", "TMDB API"],
  },
  {
    title: "Remote Jobs Hub",
    description:
      "A job listing app for remote jobs in tech. Clean UI and live filtering. Powered by public APIs.",
    image: remote,
    link: "https://remote-jobs-hub-9ihx.vercel.app/",
    github: "https://github.com/yourusername/remote-jobs-hub",
    stack: ["React", "TypeScript", "CSS Modules"],
  },
  {
    title: "Rick & Morty API Explorer",
    description:
      "A web app that fetches characters and episodes from the Rick and Morty API. Fully responsive and modern.",
    image: rickmorty,
    link: "https://rick-morty-api-six.vercel.app/",
    github: "https://github.com/yourusername/rick-morty-api",
    stack: ["React", "TypeScript", "API REST", "CSS"],
  },
  {
    title: "Minecraft UI Clone",
    description:
      "Minecraft chest inventory UI clone. Built just for fun and UI practice. Pure CSS and React.",
    image: minecraft,
    link: "https://minecraftchestthree.vercel.app/",
    github: "https://github.com/yourusername/minecraft-chest-clone",
    stack: ["React", "CSS", "HTML"],
  },
];

const Projects = () => {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-black w-full">
      <Head>
        <title>Rodrigo Camargo | Projects</title>
        <meta name="description" content="Showcase of my projects" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Building Real Solutions with Clean Code"
            className="!text-6xl md:!text-8xl !text-center mb-12 md:mb-16"
          />

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-solid border-dark bg-light dark:bg-slate-800 p-6 md:p-8 shadow-md"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <h2 className="text-2xl font-bold text-center mt-6 mb-2">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base text-center text-dark/70 dark:text-light/70">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap justify-center mt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-dark/90 text-light px-3 py-1 rounded-full text-xs md:text-sm dark:bg-light/90 dark:text-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm font-medium underline text-white hover:text-blue-500"
                  >
                    Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-sm font-medium underline text-white hover:text-blue-500"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Projects;
