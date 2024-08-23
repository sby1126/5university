"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ArtsPage() {
  const categoryList = ["Sculpture", "Paper Work", "Painting"];
  const [hoverText, setHoverText] = useState<string>("");
  return (
    <motion.div
      className="w-full h-full flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center">
        {categoryList.map((i, idx) => {
          return (
            <Link href={`/sub/arts/${i.replace(" ", "")}`} key={idx}>
              <motion.div className="relative w-80 h-80 overflow-hidden flex justify-center items-center">
                <Image
                  className="object-cover w-full h-full opacity-55"
                  src={`/images/${i}.jpeg`}
                  alt=""
                />
                <span className="absolute text-[1.5rem] text-white cursor-pointer">
                  {i}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
