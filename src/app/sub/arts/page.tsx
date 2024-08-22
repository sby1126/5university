"use client";
import { motion } from "framer-motion";

export default function ArtsPage() {
  const imageList = [
    "/images/IMG_9531.JPG",
    "/images/IMG_9532.JPG",
    "/images/IMG_9533.JPG",
    "/images/IMG_9534.JPG",
    "/images/IMG_9535.JPG",
    "/images/IMG_9536.JPG",
    "/images/IMG_9537.JPG",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageList.map((i, idx) => {
            return (
              <motion.div
                className="w-80 h-50 sm:w-full overflow-hidden"
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.img
                  className="object-cover w-full h-full"
                  layoutId={`index_${idx}`}
                  src={i}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
