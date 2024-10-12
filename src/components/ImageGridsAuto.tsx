"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ImageGridAuto() {
  const imageList = [
    {path:"/images/IMG_9531.JPG", desc:"Image Description"},
    {path:"/images/IMG_9532.JPG", desc:"Image Description"},
    {path:"/images/IMG_9533.JPG", desc:"Image Description"},
    {path:"/images/IMG_9534.JPG", desc:"Image Description"},
    {path:"/images/IMG_9535.JPG", desc:"Image Description"},
    {path:"/images/IMG_9536.JPG", desc:"Image Description"},
    {path:"/images/IMG_9537.JPG", desc:"Image Description"},
    {path:"/images/IMG_9538.JPG", desc:"Image Description"},
    {path:"/images/IMG_9539.JPG", desc:"Image Description"},
    {path:"/images/IMG_9540.JPG", desc:"Image Description"},
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const openImages = (id: string) => {
    setSelectedImage(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-20">
        <motion.div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {imageList.map((i, idx) => {
            return (
              <motion.div
                className="overflow-hidden mb-5 hover:opacity-65"
                key={idx}
              >
                <motion.img
                  className="object-cover w-full h-full"
                  layoutId={`index_${idx}`}
                  src={i.path}
                  onClick={() => openImages(i.path)}
                />
              </motion.div>
            );
          })}
          {selectedImage ? (
            <motion.div
              className="animate-open-image p-100 flex justify-center items-center bg-black overscroll-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full h-4/5 justify-center text-center hidden lg:flex">
                <Image
                  src={`${selectedImage}`}
                  alt=""
                  className="object-scale-down w-auto h-auto"
                  onClick={() => setSelectedImage(null)}
                />
                <span className="text-white text-lg ml-10">
                  {imageList.filter((i) => i.path == selectedImage).map((i) => i.desc)}
                </span>
              </div>

              <div className="w-full h-full relative text-center p-5 lg:hidden ">
                <Image
                  src={`${selectedImage}`}
                  alt=""
                  className="object-scale-down w-auto h-auto"
                  onClick={() => setSelectedImage(null)}
                />
                <span className="text-white text-lg mt-10">
                  {imageList.filter((i) => i.path == selectedImage).map((i) => i.desc)}
                </span>
              </div>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </motion.div>
  );
}
