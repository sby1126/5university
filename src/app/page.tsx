"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <main className="w-full h-[100vh] bg-[url('/images/IMG_9538.JPG')] bg-cover flex justify-center items-center">
        <Link href="/sub" className="text-[5rem] tracking-wide">
          5university
        </Link>
      </main>
    </motion.div>
  );
}
