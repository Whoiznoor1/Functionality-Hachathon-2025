"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import { data } from "../components/data";
import GreenHeader from "../components/GreenHeader";
import Navbarmain from "../components/Navbarmain";
import { urlFor } from "@/sanity/lib/image";
import { CartContext } from "../components/context";

const ColorSelector = ({
  selectedColor,
  handleColorChange,
}: {
  selectedColor: string;
  handleColorChange: (color: string) => void;
}) => {
  const colors = [
    { name: "Blue", code: "#3b82f6" },
    { name: "Green", code: "#22c55e" },
    { name: "Orange", code: "#f97316" },
    { name: "Black", code: "#000000" },
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
      <div className="flex items-center gap-2 mt-2">
        {colors.map((color) => (
          <label key={color.name} style={{ cursor: "pointer" }}>
            <input
              type="radio"
              name="color"
              value={color.name + color.code}
              checked={selectedColor === color.name}
              onChange={() => handleColorChange(color.name)}
              className="hidden"
            />
            <span
              className={`h-8 w-8 px-3 py-1 rounded-full ${selectedColor === color.name ? "ring-2 ring-black" : "border-2 border-gray-300"}`}
              style={{
                backgroundColor: color.code,
              }}
              title={color.name}
            ></span>
          </label>
        ))}
      </div>
    </div>
  );
};

interface ProductPageProps {
  params: {
    productdetail: string;
  };
}

type Product = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  selectedColor: string;
  productImage: string; // Replace with actual type for images
};

export default function DynamicProductDetail({
  params: { productdetail },
}: ProductPageProps) {
  const [selectedColor, setSelectedColor] = useState<string>("Blue");
  const [isDescriptionExpanded, setDescriptionExpanded] =
    useState<boolean>(false);
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const { addCart, addWish } = useContext(CartContext);
  const toggleDescription = () => {
    setDescriptionExpanded(!isDescriptionExpanded);
  };

  const Id = productdetail;
  const product = data.find((products: Product) => products._id === Id);

  return (
    <>
      <GreenHeader />
      <Navbarmain />
      <div className="container mx-auto px-4 flex flex-col justify-center lg:flex-row gap-8 lg:gap-16 font-Montserrat">
        {/* Left Section - Image Slider */}
        <div className=" ">
          <div className="relative">
            <Image
              src={urlFor(product.productImage)
                .width(640)
                .height(800)
                .fit("crop")
                .url()}
              alt="Product Image"
              className="rounded-lg"
              width={400}
              height={100}
            />
            {/* Discount Badge (only show if there's a discount) */}
            {product.dicountPercentage > 0 && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-lg">
                {`${product.dicountPercentage}%`}
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className=" lg:w-[600px]">
          {/* Product Title and Rating */}
          <h1 className="text-2xl font-semibold text-gray-800">
            {product.title}
          </h1>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-yellow-400">
              <Image src={"/star.png"} alt="star" width={24} height={24} />
              <Image src={"/star.png"} alt="star" width={24} height={24} />
              <Image src={"/star.png"} alt="star" width={24} height={24} />
              <Image src={"/star.png"} alt="star" width={24} height={24} />
              <Image src={"/starr.png"} alt="starr" width={24} height={24} />
            </span>
            <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4">
            {isDescriptionExpanded
              ? product.description
              : `${product.description.substring(0, 650)}...`}
          </p>

          {/* Read More Button */}
          <button
            onClick={toggleDescription}
            className="text-[#23A6F0] font-semibold mt-2"
          >
            {isDescriptionExpanded ? "Read Less" : "Read More"}
          </button>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {product.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-sm bg-[#E0E0E0] text-[#252B42] py-1 px-3 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Color Options */}
          <ColorSelector
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />
          {/* Price and Availability */}
          <p className="text-2xl font-Montserrat font-semibold text-black mt-4">
            ${product.price}
          </p>
          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button
              className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600"
              onClick={() => addCart({ ...product, selectedColor })}
            >
              Add to Cart
            </button>
            {/* Favorite/Action Icons */}
            <div className="flex items-center gap-4 ">
              <Image
                src={"/heart.png"}
                alt="heart"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => addWish({ ...product, selectedColor })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
