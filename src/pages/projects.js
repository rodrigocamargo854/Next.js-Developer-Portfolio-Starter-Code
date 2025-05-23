import Head from "next/head";
import React from "react";
// Certifique-se de que o caminho para AnimatedText está correto
import { AnimatedText } from "../components/AnimatedText"; // Ajuste se AnimatedText estiver em outro lugar
import { Layout } from "@/components/Layout"; // Ajuste se Layout estiver em outro lugar
import Image from "next/image";

import pixel from "../../public/images/projects/pixel.png";
import santodex from "../../public/images/projects/santodex.png";
import movies from "../../public/images/projects/movies.png";
import remote from "../../public/images/projects/remote.png";
import rickmorty from "../../public/images/projects/rick.png";
import minecraft from "../../public/images/projects/minecraft.png";
import vitethreejs from "../../public/images/projects/vitethreejs.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Importe os módulos necessários para o Swiper, como Pagination
import { Pagination, Autoplay } from "swiper/modules"; // Adicionado Autoplay, caso queira no futuro
// Importe os estilos do Swiper (essenciais)
import "swiper/css";
import "swiper/css/pagination"; // Estilos para a paginação

const projects = [
  {
    title: "Santodex",
    description:
      "A 'Pokédex of Saints'. A modern, responsive web app built with Next.js, Tailwind CSS and Framer Motion. Fully deployed on Vercel.",
    image: santodex,
    link: "https://santodex.vercel.app",
    github: "https://github.com/rodrigocamargo854/santodex",
    stack: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
  },
  {
    title: "Pixel Drawing App",
    description:
      "A pixel art drawing app. Users can draw and export their pixel creations as PNG files. Clean UI, fully responsive.",
    image: pixel,
    link: "https://pixel-rodrigocamargo854s-projects.vercel.app/",
    github: "https://github.com/rodrigocamargo854/pixel-drawing-app",
    stack: ["React", "TypeScript", "Sass"],
  },
  {
    title: "Get All Movies",
    description:
      "A minimalist app that fetches trending movies using the TMDB API. Built with Next.js and Chakra UI.",
    image: movies,
    link: "https://get-all-movies.vercel.app/",
    github: "https://github.com/rodrigocamargo854/get-all-movies",
    stack: ["Next.js", "Chakra UI", "TypeScript", "TMDB API"],
  },
  {
    title: "Remote Jobs Hub",
    description:
      "A job listing app for remote jobs in tech. Clean UI and live filtering. Powered by public APIs.",
    image: remote,
    link: "https://remote-jobs-hub-9ihx.vercel.app/",
    github: "https://github.com/rodrigocamargo854/remote-jobs-hub",
    stack: ["React", "TypeScript", "CSS Modules"],
  },
  {
    title: "Rick & Morty API Explorer",
    description:
      "A web app that fetches characters and episodes from the Rick and Morty API. Fully responsive and modern.",
    image: rickmorty,
    link: "https://rick-morty-api-six.vercel.app/",
    github: "https://github.com/rodrigocamargo854/rick-morty-api",
    stack: ["React", "TypeScript", "API REST", "CSS"],
  },
  {
    title: "Minecraft UI Clone",
    description:
      "Minecraft chest inventory UI clone. Built just for fun and UI practice. Pure CSS and React.",
    image: minecraft,
    link: "https://minecraftchestthree.vercel.app/",
    github: "https://github.com/rodrigocamargo854/minecraft-chest-clone",
    stack: ["React", "CSS", "HTML"],
  },
  {
    title: "Vite Landing Page",
    description:
      "A landing page made with Vite, Tailwind, and HTML. Featuring smooth transitions, animated text, and a minimalistic design.",
    image: vitethreejs,
    link: "https://modernthreejs-iqgk.vercel.app/",
    github: "https://github.com/rodrigocamargo854/vite-landing-page",
    stack: ["Vite", "Tailwind", "HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-black w-full min-h-screen">
      <Head>
        <title>Rodrigo Camargo | Projects</title>
        <meta name="description" content="Showcase of my projects" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 px-4 sm:px-6 lg:px-8">
          <AnimatedText
            text="Building Real Solutions with Clean Code"
            className="!text-5xl sm:!text-6xl md:!text-7xl lg:!text-8xl !text-center mb-12 px-2"
          />

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={15} 
            pagination={{ clickable: true }}
            className="!pb-10 w-full" 
            breakpoints={{
              320: { 
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 10, 
              },
              480: { 
                slidesPerView: 1.1, 
                centeredSlides: true,
                spaceBetween: 15,
              },
              640: { 
                slidesPerView: 1.5, 
                centeredSlides: true,
                spaceBetween: 20,
              },
              768: { 
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <div
                  className="flex flex-col items-center justify-between
                  rounded-2xl border-2 border-solid border-dark
                  bg-light dark:bg-slate-800 p-4 md:p-6 shadow-md
                  h-auto min-h-[450px] sm:min-h-[480px] lg:min-h-[520px] xl:min-h-[550px] /* Ajuste min-h responsivamente */
                  w-full /* Ocupa 100% da largura disponível pelo SwiperSlide */
                  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none /* Limita largura do card em telas maiores para não esticar demais */
                  mx-auto" 
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority 
                  />
                  <h2 className="text-xl sm:text-2xl font-bold text-center mt-4 dark:text-light leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base text-center text-dark/70 dark:text-light/70 mt-2 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex gap-1.5 flex-wrap justify-center mt-3 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-dark/90 text-light px-2.5 py-0.5 rounded-full text-xs sm:text-sm dark:bg-light/90 dark:text-dark whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-auto pb-2">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-sm font-medium underline text-white hover:text-blue-500 hover:underline-offset-2"
                    >
                      Code
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-sm font-medium underline text-white hover:text-blue-500 hover:underline-offset-2"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Layout>
      </main>
    </div>
  );
};

export default Projects;