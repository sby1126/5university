"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="flex flex-col h-screen"
    >
      <header className="sticky top-0 flex justify-between items-center border-b-2 border-white p-3">
        <Link href="/" className="text-[1.5rem] md:text-[2rem] tracking-wide">
          <h1>5university</h1>
        </Link>
        {/* mobile menu */}
        <nav className="text-[1rem] md:text-[1.5rem] justify-between px-5 hidden lg:flex">
          <motion.div
            className="flex cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <Link href="/sub/arts" className="pr-10">
              Arts
            </Link>
          </motion.div>
          <motion.div
            className="flex cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <Link href="/sub/about" className="pr-10">
              About
            </Link>
          </motion.div>
          <motion.div
            className="flex cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <Link href="/sub/statement" className="pr-10">
              Statement
            </Link>
          </motion.div>
          <motion.div
            className="flex cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <Link href="/sub/cv" className="pr-10">
              CV
            </Link>
          </motion.div>
          <motion.div
            className="flex cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <Link href="/sub/contact">Contact</Link>
          </motion.div>
        </nav>
      </header>
      <div className="flex-auto">{children}</div>
    </motion.div>
  );
}
