"use client";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";
const kanit = Kanit({ weight: "300", subsets: ["latin"] });
const kanit_it = Kanit({ weight: "300", subsets: ["latin"], style: 'italic' });
export default function CvPage() {
  return (
    <div
      className={`flex w-full justify-center items-center ${kanit.className}`}
    >
      <div className="gap-5 flex flex-col w-full max-w-[500px]">
        <p className="text-white text-[1rem]">
          <p className="text-xl font-extrabold">Education.</p>
        </p>
        <p className="text-white text-[1rem]">
          <p>University of Wisconsin-Milwaukee, Milwaukee, Wisconsin</p>
          <p>September 2017 - May 2019</p>
          <p>Film Major</p>
        </p>
        <p className="text-white text-[1rem]">
          <p>School of the Art Institute of Chicago, Chicago, Illinois</p>
          <p>2019 September - 2024 December</p>
          <p>B.F.A.</p>
        </p>
        <p className="text-white text-[1rem] mt-5">
          <p className="text-xl font-extrabold">Work Experience.</p>
        </p>
        <p className="text-white text-[1rem]">
          <p>Republic of Korea Army, 22nd Division, HQ Command, Military Band, Korea</p>
          <p>Sergeant, Percussion</p>
          <p>2020 September - 2022 March</p>
        </p>
        <p className="text-white text-[1rem]">
          <p>Film Studio 3355 & JG Pictures, Seoul, Korea</p>
          <p>August 2017 - January2019 </p>
          <p>Role: Prop Maker and Buyer, Set Dresser, Film Crew</p>
          <p>Description: Created various woodwork props for the film Romang. Purchased and rented props from shops and storages. Assisted in set design and shooting as crew member.</p>
        </p>
        <p className="text-white text-[1rem] mt-5">
          <p className="text-xl font-extrabold">Exhibitions.</p>
        </p>
        <p className="text-white text-[1rem]">
          <p className="flex"><span className={`${kanit_it.className}`}>Day and Night,</span> Rehall Art Gallery, Seoul, Korea</p>
          <p>August 2021</p>
          <p>Group exhibition of artists chosen by talent platform Leffica </p>
        </p>
        <p className="text-white text-[1rem]">
          <p className="flex"><span className={`${kanit_it.className}`}>Threshold: Road to Utopia,</span> Chicago Korean Culture Center, Illinois, Chicago</p>
          <p> August 2022 - May 2023</p>
          <p>Founding member of SAIC Korean Student Association’s Exhibition Branch. Organized and curated event. Participated as an artist.</p>
        </p>
        <p className="text-white text-[1rem]">
          <p className="flex"><span className={`${kanit_it.className}`}>Extinction and Creation,</span> Chicago Korean Culture Center, Illinois, Chicago</p>
          <p>September 2023 - December 2023</p>
          <p>Curated event as part of SAIC Korean Student Association’s Exhibition Branch. </p>
        </p>
        <p className="text-white text-[1rem]">
          <p className="flex"><span className={`${kanit_it.className}`}>Veil: Between People,</span> Blue Cube Gallery, Seoul, Korea</p>
          <p>September 2024</p>
          <p>Solo Exhibition</p>
        </p>
        <p className="text-white text-[1rem]">
          <p className="flex"><span className={`${kanit_it.className}`}>Beyond Border,</span> Group Art Show, Cosmos Gallery, New York, New York</p>
          <p>September 2024 - October 2024</p>
          <p>Group exhibition of artists chosen by Cosmos Gallery  </p>
        </p>
        <p className="text-white text-[1rem]">
          <p className="flex"><span className={`${kanit_it.className}`}>Relationship, Veil, and Connections,</span> Vibe Art Space, Seoul, Korea</p>
          <p>November 2024</p>
          <p>Solo exhibition</p>
        </p>
        <p className="text-white text-[1rem]">
          <p className="flex"><span className={`${kanit_it.className}`}>Undergraduate BFA Exhibition,</span> SAIC Gallery, Illinois, Chicago</p>
          <p>November 2024</p>
          <p>Presented Capstone group project Falling Tide. Participated as curator and artist. </p>
        </p>
        <p className="text-white text-[1rem]">
          <p>International Group Art Show, CICA Gallery, Suwon, Korea</p>
          <p>March 2025 (expected)</p>
          <p>Group exhibition of international artists chosen by CICA gallery</p>
        </p>
      </div>
    </div>
  );
}
