"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageCategory() {
    const categoryList = ["Sculpture", "Paper Work", "Painting"];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center">
            {categoryList.map((i, idx) => {
                return (
                    <Link href={`/sub/arts/${i.replace(" ", "")}`} key={idx}>
                        <motion.div className="relative w-80 h-80 overflow-hidden flex justify-center items-center"
                        >
                            <Image
                                className="object-cover w-full h-full opacity-55"
                                src={`/5university/images/${i}.jpeg`}
                                alt=""
                            />
                            <motion.div className="absolute w-full h-full flex justify-center items-center" whileHover={{ scale: 1.2 }}>
                                <span className="text-[1.5rem] text-white cursor-pointer">
                                    {i}
                                </span>
                            </motion.div>
                        </motion.div>
                    </Link>
                );
            })}
        </div>
    )
}