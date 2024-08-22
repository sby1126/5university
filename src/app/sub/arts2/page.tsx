"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ArtsPage() {
  const imageList = [
    "/images/IMG_9531.JPG",
    "/images/IMG_9532.JPG",
    "/images/IMG_9533.JPG",
    "/images/IMG_9534.JPG",
    "/images/IMG_9535.JPG",
    "/images/IMG_9536.JPG",
    "/images/IMG_9537.JPG",
    "/images/IMG_9538.JPG",
    "/images/IMG_9539.JPG",
    "/images/IMG_9540.JPG",
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
        <motion.div className="flex flex-wrap relative" layout>
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
                    src={i}
                    onClick={() => openImages(i)}
                  />
                </motion.div>
              );
            })}
            {selectedImage ? (
              <div className="animate-open-image p-100 flex justify-center items-center bg-black">
                <motion.img
                  layoutId={`img-open`}
                  src={`${selectedImage}`}
                  className="object-none"
                  onClick={() => setSelectedImage(null)}
                />
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
