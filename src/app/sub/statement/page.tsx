"use client";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";
const kanit = Kanit({ weight: "300", subsets: ["latin"] });
export default function StatementPage() {
  return (
    <div
      className={`flex w-full justify-center items-center ${kanit.className}`}
    >
      <div className="gap-5 flex flex-col w-full max-w-[500px] mt-5">
        <p className="font-semibold text-white text-[1.5rem]">Statement</p>
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
  );
}
