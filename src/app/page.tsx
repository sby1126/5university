import Link from "next/link";

export default function Home() {
  return (
    <div className="animate-fade">
      <main className="w-full h-screen bg-[url('/images/Paper Work.jpeg')] bg-cover flex justify-center items-center">
        <Link href="/sub" className="text-[2rem] md:text-[5rem] tracking-wide text-white">
          5university
        </Link>
      </main>
    </div>
  );
}
