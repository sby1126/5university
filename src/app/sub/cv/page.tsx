"use client";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";
const kanit = Kanit({ weight: "300", subsets: ["latin"] });
const kanit_it = Kanit({ weight: "300", subsets: ["latin"], style : 'italic' });
export default function CvPage() {
  return (
    <div
      className={`flex w-full justify-center items-center ${kanit.className}`}
    >
      <div className="gap-5 flex flex-col w-full max-w-[500px] mt-5">
        <p className="font-semibold text-white text-[1.5rem]">My Show</p>
        <p className="text-white text-[1rem]">
          <b className="text-xl">Education</b>
          University of Wisconsin-Milwaukee, Milwaukee, Wisconsin
          September 2017 - May 2019 
          Film Major

          School of the Art Institute of Chicago, Chicago, Illinois
          2019 September - 2024 December
          B.F.A.
        </p>
        <p className="text-white text-[1rem]">
          <b className="text-xl">Work Experience</b>
        </p>
        <p className="text-white text-[1rem]">
          Republic of Korea Army, 22nd Division, HQ Command, Military Band, Korea
          Sergeant, Percussion 
          2020 September - 2022 March
        </p>
        <p className="text-white text-[1rem]">
          Film Studio 3355 & JG Pictures, Seoul, Korea
          August 2017 - January2019 
          Role: Prop Maker and Buyer, Set Dresser, Film Crew
          Description: Created various woodwork props for the film Romang. Purchased and rented props from shops and storages. Assisted in set design and shooting as crew member.
        </p>
        <p className="text-white text-[1rem]">
          <p className={`${kanit_it.className}`}>Day and Night,</p> Rehall Art Gallery, Seoul, Korea
          August 2021
          Group exhibition of artists chosen by talent platform Leffica 
        </p>
        <p className="text-white text-[1rem]">
        <p className={`${kanit_it.className}`}>Threshold: Road to Utopia,</p> Chicago Korean Culture Center, Illinois, Chicago
          August 2022 - May 2023
          Founding member of SAIC Korean Student Association’s Exhibition Branch. Organized and curated event. Participated as an artist.
        </p>
      </div>
    </div>
  );
}
