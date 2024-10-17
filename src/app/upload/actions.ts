"use server";
import { createClient } from "@/utils/supabase/server";

export const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
  try {
    if (!e.target.files || e.target.files.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    const file = e.target.files[0];
    const supabase = createClient();
    const { data: image, error: uploadError } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET!)
      .upload(`${file.name}`, file);
    if (uploadError) {
      throw uploadError;
    }

    if (image) {
      console.log(image);
    }
  } catch (error) {
    console.log(error);
  }
};
