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
    <div className="w-full h-full flex items-center justify-center">
      {/* {tempResult != null && tempResult != undefined && (
        <ImageHome imageList={tempResult} />
      )}
       */}
      <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
          <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom bg-blend-multiply">
            <Image
              src="https://mwzuvsuhvsggcpgwznlm.supabase.co/storage/v1/object/public/ART_STORAGE/TalkMedia_i_0eae5bf3fa90.jpeg.jpeg"
              alt=""
              fill
            />
          </div>
          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
              5university
            </h3>
            <h4 className="w-full text-xl text-gray-100 leading-tight">
              Artist
            </h4>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>

        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
          <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 className="hidden md:block text-xl text-gray-400">Hi,</h4>
            <h3 className="hidden md:block font-bold text-2xl text-gray-700">
              {`I'm Artist 5university.`}
            </h3>
            <p className="text-gray-600 text-justify mt-10">
              My art is a deeply personal exploration of the complex
              relationship between my body and the color black.
            </p>
            <a
              className="flex items-baseline mt-10 text-gray-600 hover:text-gray-900 focus:text-gray-900"
              href=""
            >
              <span>
                <b>My Art Works</b>
              </span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
