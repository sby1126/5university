"use client";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";
const kanit = Kanit({ weight: "300", subsets: ["latin"] });
export default function StatementPage() {
  return (
    <div
      className={`flex w-full justify-center items-center ${kanit.className}`}
    >
      <div className="gap-5 flex flex-col w-full max-w-[500px] p-5">
        <p className="text-white text-[1rem]">
          The color black is at the core of my creative practice. It encapsulates my own existence, the way it absorbs everything, leaving no trace as to what went into its making. It stands, between myself and the “other,” as a veil that makes it impossible to see beyond. My wish is to breach this veil, no matter how impenetrable it may seem, to connect with the “other.” Thus, my study revolves around the color black—my own existential crisis—and surmounting the limitations imposed by it.
        </p>
        <p className="text-white text-[1rem]">
          Mixture and burning are my two methods in art practice. Through a mixture of paint, I create varying shades of black. Because color is lost, I speak in the language of textures, drawing from Alberto Burri’s Matterism and his use of heavy impasto. This technique adds to my expressiveness, allowing the viewer to feel my movement on the canvas, expanding on my theme of breaching the black veil. I thus create different textures by crumpling paper and adding oil sticks, acrylic medium, charcoal powder, and dust.
        </p>
        <p className="text-white text-[1rem]">
          Burning, my alternative method, transforms materials to the point of being unrecognizable, mimicking the effect of a black veil. I create structures using isopink and paper and apply heat such that the original form is lost, thus becoming the base of a sculptural or mixed media work. This approach was influenced by Lee Ufan’s contributions to mono-ha, which studies the meanings and aesthetics arising from the encounter between unaltered, raw materials. I thus work with an awareness of spatial relations within a work, uncovering beauty and meaning where it is unapparent and ascribing meaning to each element portrayed.
        </p>
        <p className="text-white text-[1rem]">
          As an artist, I am committed to expanding my understanding of diverse materials and techniques, in hopes of creating works that resonate not only intellectually, but also emotionally.
        </p>
      </div>
    </div>
  );
}
