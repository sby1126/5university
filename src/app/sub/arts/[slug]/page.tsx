import ImageGridAuto from "@/components/ImageGridsAuto";
import { supabase } from "@/utils/supabase/client";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

interface ArtData {
  id: number;
  create_at: Date;
  title: string;
  content: string;
  path: string;
  category: string;
}
interface ImageData {
  path: string;
  title: string;
}

export function generateMetadata({ params }: Props) {
  console.log("generate > " + params.slug);
  return {
    title: `${params.slug}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }

  return (
    <div>
      <ImageGridAuto slug={params.slug} />
    </div>
  );
}

export function generateStaticParams() {
  const products = ["Sculpture", "Painting", "PaperWork"];
  return products.map((product) => ({
    slug: product,
  }));
}
