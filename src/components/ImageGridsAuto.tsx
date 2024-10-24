"use client";
import { supabase } from "@/utils/supabase/client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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

type SlugProps = {
  slug: string;
};
export default function ImageGridAuto({ slug }: SlugProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageList, setImageList] = useState<ArtData[]>([]);
  async function selectArtImage(): Promise<ArtData[] | null | undefined> {
    try {
      const { data: result } = await supabase
        .from(process.env.NEXT_PUBLIC_SUPABASE_TABLE!)
        .select()
        .eq("category", slug);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  const openImages = (id: string) => {
    setSelectedImage(id);
  };

  useEffect(() => {
    async function callImageList() {
      const result = await selectArtImage();
      setImageList(result!);
    }
    callImageList();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  return (
    <div className="w-full h-full pt-10">
      <div className="w-full relative">
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-2 lg:columns-4 [&>img:not(:first-child)]:mt-8 rounded-lg">
          {imageList.map((item, idx) => (
            <div
              key={`${idx}_div`}
              className="w-full relative mx-auto h-auto overflow-hidden rounded-lg "
            >
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
              <div
                className="hidden md:flex opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10  justify-center items-center text-2xl text-white font-semibold"
                onClick={() => openImages(item.path)}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        {selectedImage ? (
          <div
            className="animate-open-image p-100 flex justify-center items-center bg-black overscroll-none z-10"
          >
            <div className="w-full h-4/5 justify-center text-center hidden lg:flex">
              <Image
                loader={() => selectedImage}
                src={`${selectedImage}`}
                alt=""
                className="object-scale-down w-auto h-auto"
                onClick={() => setSelectedImage(null)}
              />
              <span className="text-white text-lg ml-10">
                {imageList
                  .filter((i) => i.path == selectedImage)
                  .map((i) => i.title)}
              </span>
            </div>

            {/* mobile view */}
            <div className="w-full h-full text-center p-5 lg:hidden flex flex-col">
              <Image
                loader={() => selectedImage}
                src={`${selectedImage}`}
                alt=""
                className="object-scale-down flex-1"
                onClick={() => setSelectedImage(null)}
                priority
              />
              <span className="text-white text-lg mt-10 py-10">
                {imageList
                  .filter((i) => i.path == selectedImage)
                  .map((i) => i.title)}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
