"use client";
import Link from "next/link";
import "../globals.css";
import { Lora } from "next/font/google";
import MenuIcon from "../../../public/menu.svg";
import { useState } from "react";
import Drawer from "@/components/Drawer";
const lora = Lora({ weight: "400", subsets: ["latin"], style: "italic" });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  return (
    <div className="flex flex-col w-full h-auto md:h-full p-5 animate-fade justify-center items-center gap-5 justify-items-center ">
      <div className="flex flex-col w-full max-w-[1200px] gap-5 justify-center">
        <header className="hidden py-5 sticky top-0 md:flex justify-center items-center border-white">
          <Link href="/" className="text-2xl md:text-[2rem] tracking-wide">
            <span className={`${lora.className} text-4xl`}>DaeHak.Oh</span>
          </Link>
        </header>
        {/* mobile menu */}
        <header className="flex justify-between items-center md:hidden">
          <Link href="/" className="text-xl md:text-[2rem] tracking-wide">
            <span className={`${lora.className} text-4xl`}>DaeHak.Oh</span>
          </Link>
          <MenuIcon
            width={40}
            height={40}
            onClick={() => setMenuToggle(!menuToggle)}
          />
          <Drawer open={menuToggle} setOpen={setMenuToggle} side="top" />
        </header>
        <nav className="text-[1rem] md:text-[1.5rem] hidden lg:flex gap-10 justify-center">
          <div className="flex text-2xl group relative w-max cursor-pointer">
            <Link href="/sub/arts" className="text-center">
              Arts
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
          <div className="flex text-2xl group relative w-max cursor-pointer">
            <Link href="/sub/about" className="text-center">
              About
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
          <div className="flex text-2xl group relative w-max cursor-pointer">
            <Link href="/sub/statement" className="text-center">
              Statement
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
          <div className="flex text-2xl group relative w-max cursor-pointer">
            <Link href="/sub/cv" className="text-center">
              CV
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
          <div className="flex text-2xl group relative w-max cursor-pointer">
            <Link href="/sub/contact" className="text-center">
              Contact
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
        </nav>
      </div>
      <div className="flex-1 h-full w-full">{children}</div>
    </div>
  );
}
