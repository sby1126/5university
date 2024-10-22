import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import ImageHome from "@/components/ImageHome";

interface ArtData {
  id: number;
  create_at: Date;
  title: string;
  content: string;
  path: string;
  category: string;
}

export default async function Sub() {
  async function selectArtImage(): Promise<ArtData[] | null | undefined> {
    try {
      const supabase = createClient();
      const { data: result } = await supabase
        .from(process.env.NEXT_PUBLIC_SUPABASE_TABLE!)
        .select();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  const tempResult: ArtData[] | null | undefined = await selectArtImage();
  console.log(tempResult);
  return (
    <div className="w-full h-full">
      {tempResult != null && tempResult != undefined && (
        <ImageHome imageList={tempResult} />
      )}
    </div>
  );
}
