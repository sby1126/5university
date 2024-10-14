"use client";

import Image from "next/image";
import { ChangeEventHandler, useState } from "react";
import { supabase } from "../../utils/supabase/client";

interface ArtData {
  title: string;
  content: string;
  path: string;
  category: string;
}
export default function Upload() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [category, setCategory] = useState<string>("PaperWork");
  const [imageUplodFile, setImageUploadFile] = useState<File | null>();

  const attachImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    const file = e.target.files[0];
    setImageUploadFile(file);
  };

  const uploadImage = async () => {
    try {
      const artData: ArtData = {
        title: title,
        content: content,
        path: imageUplodFile!.name,
        category: category,
      };

      const { data: image, error: uploadError } = await supabase.storage
        .from("ART_STORAGE")
        .upload(`${imageUplodFile!.name}`, imageUplodFile!);

      if (uploadError) {
        throw uploadError;
      }

      const { data: imgUrl } = await supabase.storage
        .from("ART_STORAGE")
        .getPublicUrl(`${imageUplodFile!.name}` ?? "default");

      if (imgUrl) {
        setImageUrl(imgUrl.publicUrl);
        const { error: PostgrestError } = await supabase
          .from("ART_LIST")
          .insert(artData);
      }
    } catch (error: any) {
      if (error.statusCode == "409") {
        throw new Error("FileName is Duplicate");
      }
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-800 text-gray-200 p-24">
      <h1 className="text-5xl font-bold">Art Images Upload</h1>

      <div className="mt-5 max-w-2xl gap-2">
        <div className="w-full flex gap-2 items-center justify-center">
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setCategory(e.target.value);
            }}
            className="w-full mt-5 p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >
            <option value="PaperWork">PaperWork</option>
            <option value="Painting">Painting</option>
            <option value="Sculpture">Sculpture</option>
          </select>
        </div>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          className="w-full mt-5 p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="제목"
        />
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setContent(e.target.value);
          }}
          className="w-full mt-5 p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="설명"
        />
        <input
          type="file"
          onChange={attachImage}
          className="block mt-5 p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
        <div
          onClick={uploadImage}
          className="w-full p-2 mt-5 ext-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-center"
        >
          저장
        </div>
      </div>

      <div className="mt-5">
        {imageUrl && (
          <Image
            loader={() => imageUrl}
            src={imageUrl}
            alt="Uploaded Image"
            width={500}
            height={500}
            className="rounded-lg border border-gray-300"
          />
        )}
      </div>
    </main>
  );
}
