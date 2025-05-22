"use client";

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="
        flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-5 shadow-md cursor-pointer
        dark:text-dark dark:bg-light
        text-xs sm:text-sm md:text-base
        md:absolute
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export const Skills = () => {
  const skills = [
    { name: "Node.js", x: "-10rem", y: "0rem" },
    { name: "Python", x: "-7rem", y: "-7rem" },
    { name: "C# (.NET)", x: "0rem", y: "-10rem" },
    { name: "Express.js", x: "7rem", y: "-7rem" },
    { name: "FastAPI", x: "10rem", y: "0rem" },
    { name: "API REST", x: "7rem", y: "7rem" },
    { name: "Microsservices", x: "-7rem", y: "7rem" },

    { name: "PostgreSQL", x: "-12rem", y: "0rem" },
    { name: "MongoDB", x: "-9rem", y: "-9rem" },
    { name: "MySQL", x: "9rem", y: "-9rem" },
    { name: "SQL Server", x: "12rem", y: "0rem" },
    { name: "Firebase", x: "-9rem", y: "9rem" },
    { name: "Supabase", x: "9rem", y: "9rem" },

    { name: "React.js", x: "-6rem", y: "-12rem" },
    { name: "Next.js", x: "6rem", y: "-12rem" },
    { name: "TypeScript", x: "-10rem", y: "-10rem" },
    { name: "JavaScript", x: "10rem", y: "-10rem" },
    { name: "Tailwind CSS", x: "0rem", y: "12rem" },
    { name: "Chakra UI", x: "-5rem", y: "11rem" },
    { name: "Framer Motion", x: "5rem", y: "11rem" },

    { name: "Docker", x: "-16rem", y: "0rem" },
    { name: "Vercel", x: "16rem", y: "0rem" },
    { name: "AWS", x: "0rem", y: "16rem" },
    { name: "CI/CD", x: "0rem", y: "-16rem" },
    { name: "Azure", x: "-14rem", y: "-7rem" },
    { name: "NGINX", x: "14rem", y: "-7rem" },
    { name: "Terraform", x: "0rem", y: "-19rem" },

    { name: "GraphQL", x: "-14rem", y: "7rem" },
    { name: "Prisma ORM", x: "14rem", y: "7rem" },
    { name: "Redis", x: "-12rem", y: "12rem" },
    { name: "RabbitMQ", x: "12rem", y: "12rem" },

    { name: "Redux", x: "-8rem", y: "16rem" },
    { name: "Zustand", x: "8rem", y: "16rem" },
    { name: "Material UI", x: "-12rem", y: "14rem" },
    { name: "ShadCN UI", x: "12rem", y: "14rem" },
    { name: "Storybook", x: "0rem", y: "20rem" },

    { name: "Selenium", x: "-14rem", y: "10rem" },
    { name: "Cypress", x: "14rem", y: "10rem" },
    { name: "Jest", x: "-8rem", y: "18rem" },
    { name: "Testing Library", x: "8rem", y: "18rem" },
    { name: "Playwright", x: "-16rem", y: "6rem" },
    { name: "Vitest", x: "16rem", y: "6rem" },

    { name: "Git / GitHub", x: "-19rem", y: "0rem" },
    { name: "Figma", x: "19rem", y: "0rem" },
    { name: "Postman", x: "-16rem", y: "-5rem" },
    { name: "Insomnia", x: "16rem", y: "-5rem" },
    { name: "Notion / Jira", x: "0rem", y: "-21rem" },
    { name: "Zod", x: "-19rem", y: "5rem" },
    { name: "Swagger", x: "19rem", y: "5rem" },
    { name: "SonarQube", x: "0rem", y: "23rem" },

    { name: "Problem-solving", x: "-12rem", y: "-21rem" },
    { name: "Teamwork", x: "12rem", y: "-21rem" },
    { name: "Communication", x: "-19rem", y: "8rem" },
    { name: "Critical Thinking", x: "19rem", y: "8rem" },
    { name: "Lifelong Learning", x: "0rem", y: "26rem" },
    { name: "Leadership", x: "-14rem", y: "-23rem" },
    { name: "Mentoring", x: "14rem", y: "-23rem" },
    { name: "Resilience", x: "-18rem", y: "-19rem" },
    { name: "Results Oriented", x: "18rem", y: "-19rem" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative px-4">
      <h2 className="font-bold text-5xl md:text-8xl mt-16 mb-12 w-full text-center">
        Skills
      </h2>

      <div
        className="
          w-full min-h-[80vh] 
          relative md:flex items-center justify-center 
          rounded-full bg-circularLight dark:bg-circularDark py-32 
          max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-6 max-md:py-10 max-md:bg-none
        "
      >
        {/* Centro */}
        <motion.div
          className="hidden md:flex items-center justify-center rounded-full font-semibold 
          bg-dark text-light p-6 shadow-md 
          dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
          style={{
            position: "absolute",
          }}
        >
          Backend
        </motion.div>

        {/* Skills */}
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </div>
  );
};
