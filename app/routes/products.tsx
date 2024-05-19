import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fs from "fs";
import path from "path";
import ImageGallery from "../components/image-gallery";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const imagesDir = path.join(process.cwd(), "public/products");
  const fileNames = fs.readdirSync(imagesDir);
  return json({ fileNames });
};

export default function Index() {
  const { fileNames } = useLoaderData();

  return (
    <div>
      <Header title={"PHARMACEUTICAL PRODUCTS"} />
      <p className="p-8 text-sm text-gray-600">Supported by various experts and professionals, we are known as one of the leading Pharmaceutical Syrup supplier, manufacturer and exporter in India. We are offering various range of trusted and safe syrup with accurate compositions to our customers. These syrups are one type of concentrated solutions which is prepared by medical substance, flavouring agents and sugar substance. Being a reputed and certified company, our products are made in WHO-GMP certified manufacturing plants using best quality ingredients and accurate compositions. These are quality tested on various parameters such as shelf life, side effects and results before final dispatch</p>
      <div className="border border-gray-400 border-dashed rounded-md p-2 m-8">
        <ImageGallery fileNames={fileNames} />
      </div>
    </div>
  );
}
