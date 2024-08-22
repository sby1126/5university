"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <header className="flex justify-between items-center border-b-2 border-b-gray-400 p-3">
        <Link href="/" className="text-[2rem] tracking-wide">
          <h1>5university</h1>
        </Link>
        <nav className="text-[1.5rem] justify-between px-5">
          <Link href="/sub/arts" className="pr-5">
            Arts
          </Link>
          <Link href="/sub/arts2" className="pr-5">
            Arts2
          </Link>
          <Link href="/sub/about" className="pr-5">
            About
          </Link>
          <Link href="/sub/contact">Contact</Link>
        </nav>
      </header>
      {children}
    </motion.div>
  );
}
