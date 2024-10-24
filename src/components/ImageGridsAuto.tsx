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
    <div className="w-full h-full">
      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {imageList.map((i, idx) => {
          return (
            <div
              className="overflow-hidden mb-5 hover:opacity-65 relative h-[400px]"
              key={idx}
            >
              <Image
                className="object-scale-down w-full h-full absolute object-center"
                id={`index_${idx}`}
                src={i.path}
                alt=""
                onClick={() => openImages(i.path)}
              />
              <div
                className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold"
                onClick={() => openImages(i.path)}
              >
                {i.title}
              </div>
            </div>
          );
        })}
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
