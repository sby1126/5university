"use client";
import { SetStateAction, Dispatch, useState, useEffect } from "react";
import { ArtData } from "./ImageGridsAuto";
import Image from "next/image";
import Mail from "../../public/close.svg";
type SelectProps = {
  item: ArtData;
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
};
export default function SelectImage({ item, setSelectedImage }: SelectProps) {
  const [selectDetail, setSelectDetail] = useState<string>("");

  useEffect(() => {
    setSelectDetail(item.path);
  }, []);

  return (
    <div className="animate-open-image w-full h-full bg-black z-10 overflow-auto">
      <div
        className="w-full flex justify-start px-5 py-2"
        onClick={() => setSelectedImage(null)}
      >
        <Mail className="w-7 h-7 text-white" />
      </div>
      <div className="w-full h-full justify-between text-center hidden lg:flex">
        <div className="w-1/2 h-full flex flex-col gap-10 justify-center items-center">
          <p className="text-white text-4xl font-bold">{`"${item.title}"`}</p>
          <p
            className="text-white text-lg"
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></p>
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-7">
          <div className="w-[500px] overflow-hidden">
            <Image
              loader={() => selectDetail}
              src={`${selectDetail}`}
              alt=""
              className="object-scale-down animate-fade object-top"
              onClick={() => setSelectedImage(null)}
            />
          </div>
          <div className="w-full flex gap-5 justify-start">
            <div className="overflow-hidden w-[100px] h-[100px] relative rounded-sm">
              <Image
                //   loader={() => item.path}
                src={`/images/IMG_9540.JPG`}
                alt=""
                onClick={() => setSelectDetail("/images/IMG_9540.JPG")}
                layout="fill"
              />
            </div>
            <Image
              //   loader={() => item.path}
              src={`/images/IMG_9534.JPG`}
              alt=""
              width={80}
              height={80}
              onClick={() => setSelectDetail("/images/IMG_9534.JPG")}
            />
            <Image
              loader={() => item.path}
              src={`${item.path}`}
              alt=""
              width={80}
              height={80}
              onClick={() => setSelectedImage(null)}
            />
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="w-full h-full text-center p-5 lg:hidden flex flex-col">
        <Image
          loader={() => item.path}
          src={`${item.path}`}
          alt=""
          className="object-scale-down flex-1"
          onClick={() => setSelectedImage(null)}
          priority
        />
        <span className="text-white text-lg mt-10 py-10">{item.title}</span>
      </div>
    </div>
  );
}
