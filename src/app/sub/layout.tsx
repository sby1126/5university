"use client";
import Link from "next/link";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen p-10 animate-fade">
      <header className="sticky top-0 flex justify-between items-center border-white">
        <Link href="/" className="text-[1.5rem] md:text-[2rem] tracking-wide">
          <h1>5university</h1>
        </Link>
        {/* mobile menu */}
        <nav className="text-[1rem] md:text-[1.5rem] justify-between px-5 hidden lg:flex gap-8">
          <div className="flex text-lg group relative w-max cursor-pointer">
            <Link href="/sub/arts" className="text-center">
              Arts
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
          <div className="flex text-lg group relative w-max cursor-pointer">
            <Link href="/sub/about" className="text-center">
              About
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
          <div className="flex text-lg group relative w-max cursor-pointer">
            <Link href="/sub/statement" className="text-center">
              Statement
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
          <div className="flex text-lg group relative w-max cursor-pointer">
            <Link href="/sub/cv" className="text-center">
              CV
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
          <div className="flex text-lg group relative w-max cursor-pointer">
            <Link href="/sub/contact" className="text-center">
              Contact
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </div>
        </nav>
      </header>
      <div className="flex-auto pt-10">{children}</div>
    </div>
  );
}
