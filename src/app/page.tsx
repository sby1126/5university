import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="animate-fade">
      <main className="w-full h-screen flex justify-center items-center relative text-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL!}${
            process.env.NEXT_PUBLIC_IMAGE_URL
          }${process.env.NEXT_PUBLIC_STORAGE_BUCKET}/Main_Background.jpg`}
          alt=""
          className="object-cover object-center w-full h-full opacity-80"
          priority
        />
        <Link
          href="/sub"
          className="absolute text-[2.5rem] md:text-[5rem] tracking-wide text-white"
        >
          5university
        </Link>
      </main>
    </div>
  );
}
