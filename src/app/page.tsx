import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="animate-fade">
      <main className="w-full h-screen flex justify-center items-center relative text-center">
        <Image
          src="/images/Paper Work.jpeg"
          className="w-full h-full object-cover opacity-80"
          alt=""
          fill
        />
        <Link
          href="/sub"
          className="absolute text-[2rem] md:text-[5rem] tracking-wide text-white"
        >
          5university
        </Link>
      </main>
    </div>
  );
}
