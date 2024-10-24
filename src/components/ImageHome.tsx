import Image from "next/image";
import Link from "next/link";
import { Lora } from "next/font/google";
interface ArtData {
  id: number;
  create_at: Date;
  title: string;
  content: string;
  path: string;
  category: string;
}

type ArtProps = {
  imageList: ArtData[];
};

const lora = Lora({ weight: "400", subsets: ["latin"], style: "italic" });

export default function ImageHome({ imageList }: ArtProps) {
  return (
    <div className="w-full h-full">
      {/* <div className="w-full h-auto flex justify-center items-center animate-fade py-5">
        <span
          className={`text-3xl ${lora.className} relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter
                before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white`}
        >
          {" "}
          {`Hi, I'm Artist DaeHak-Oh.`}
        </span>
      </div> */}
      <div className="w-full relative">
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-2 lg:columns-4 [&>img:not(:first-child)]:mt-8 rounded-lg">
          {imageList.map((item, idx) => (
            <div
              key={`${idx}_div`}
              className="w-full relative mx-auto h-auto overflow-hidden rounded-lg "
            >
              <Link key={`${idx}_link`} href={`/sub/arts/${item.category}`}>
                <Image
                  key={`${idx}_images`}
                  src={item.path}
                  alt=""
                  className="hidden md:block relative object-cover obejct-top w-full h-auto z-0 rounded-lg transition-all duration-300 hover:scale-110"
                  width={400}
                  height={450}
                  priority
                />
                <Image
                  key={`${idx}_images`}
                  src={item.path}
                  alt=""
                  className="md:hidden block relative object-cover obejct-top z-0 rounded-lg mb-5"
                  width={400}
                  height={400}
                  priority
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
