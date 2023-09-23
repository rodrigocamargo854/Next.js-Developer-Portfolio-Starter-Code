import React from "react";
import { Layout } from "./Layout";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between font-light">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div>
          Build with<span className="text-primary text-2xl px-1"> &#9825;</span>
          <Link href="https://nextjs.org/" target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Next.js official website"
              className="text-blue-600 hover:underline hover:text-blue-800">
           
              NextJS
           
          </Link>
        </div>
        <Link href="/">Rodrigo 
        Camargo</Link>
      </Layout>
    </footer>
  );
};
