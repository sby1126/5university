"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { supabase } from "@/utils/supabase/client";
import { useEffect } from "react";
import { useState } from "react";

interface ArtCategory {
  id: number;
  created_at: Date;
  category_name: string;
  category_bg_path: string;
}
export default function ImageCategory() {
  const [categoryList, setCategoryList] = useState<ArtCategory[]>([]);
  async function selectArtCategory(): Promise<
    ArtCategory[] | null | undefined
  > {
    try {
      const { data: result } = await supabase.from("ART_CATEGORY").select();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function callCategoryList() {
      const tempList: ArtCategory[] | null | undefined =
        await selectArtCategory();
      if (tempList != null && tempList != undefined) {
        setCategoryList(tempList);
      }
    }
    callCategoryList();
  }, []);

  return (
    <div className="max-w-max grid grid-cols-1 w-full h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center  place-items-center">
      {categoryList != null &&
        categoryList != undefined &&
        categoryList.map((i, idx) => {
          return (
            <Link
              href={`/sub/arts/${i.category_name.replace(" ", "")}`}
              key={idx}
            >
              <div className="relative w-80 h-[350px] overflow-hidden flex justify-center items-center">
                <Image
                  priority
                  loader={() => i.category_bg_path}
                  className="object-cover w-full h-full opacity-55"
                  src={i.category_bg_path}
                  alt=""
                  fill
                />
                <div className="absolute w-full h-full flex justify-center items-center transition-all duration-300 hover:scale-125">
                  <span className="text-[1.5rem] text-white cursor-pointer">
                    {i.category_name}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
