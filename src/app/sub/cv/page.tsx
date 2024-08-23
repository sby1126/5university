"use client";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";
const kanit = Kanit({ weight: "300", subsets: ["latin"] });
export default function ArtsPage() {
  return (
    <motion.div
      className={kanit.className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-20">
        <div className="gap-5 flex flex-col">
          <p className="font-semibold text-white text-[1.5rem]">My Show</p>
          <p className="text-white text-[1rem]">
            2024 The Floor, The Wall, The Space In-Between, Regards, Chicago,IL
          </p>
          <p className="text-white text-[1rem]">
            2024 The Floor, The Wall, The Space In-Between, Regards, Chicago,IL
          </p>
          <p className="text-white text-[1rem]">
            2024 The Floor, The Wall, The Space In-Between, Regards, Chicago,IL
          </p>
          <p className="text-white text-[1rem]">
            2024 The Floor, The Wall, The Space In-Between, Regards, Chicago,IL
          </p>
          <p className="text-white text-[1rem]">
            2024 The Floor, The Wall, The Space In-Between, Regards, Chicago,IL
          </p>
          <p className="text-white text-[1rem]">
            2024 The Floor, The Wall, The Space In-Between, Regards, Chicago,IL
          </p>
        </div>
      </div>
    </motion.div>
  );
}
