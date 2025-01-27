import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

// Define the type for a Sanity image
interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
}

// Define the type for a product
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: SanityImage; // Updated type for productImage
  dicountPercentage: number;
}

async function getData(): Promise<Product[]> {
  const data = await client.fetch('*[_type=="product"]');
  return data;
}

export default async function BestSeller() {
  const data = await getData();

  return (
    <div className="w-full flex justify-center bg-white py-10 lg:pt-10 pb-20">
      <div className="w-full max-w-[1124px] flex flex-col gap-20 mt-12 sm:mt-8 md:ml-12 sm:px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2">
          <h4 className="font-Montserrat font-medium tracking-wider text-xl md:text-[20px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-2xl md:text-[24px] text-center w-40 sm:w-full tracking-tight text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-medium tracking-wider text-[14px] md:text-[16px] w-52 sm:w-full text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Product Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 lg:gap-x-4 lg:gap-y-20 gap-4">
          {data.map((product: Product) => (
            <div
              key={product._id}
              className="flex flex-col items-center bg-[#F9F9F9] rounded-md mx-auto shadow-sm p-4 sm:p-6 lg:p-8"
            >
              {/* Product Image */}
              <div className="relative w-full h-auto mb-4">
                <Link href={`/${product._id}`}>
                  <Image
                    src={urlFor(product.productImage)
                      .width(640)
                      .height(480)
                      .fit("crop")
                      .url()}
                    alt={product.productImage.alt || product.title}
                    width={1000}
                    height={200}
                    className="rounded-sm object-cover"
                  />

                  {/* Discount Badge (only show if there's a discount) */}
                  {product.dicountPercentage > 0 && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-lg">
                      {`${product.dicountPercentage}%`}
                    </div>
                  )}
                </Link>
              </div>

              {/* Product Text and Info */}
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
                  {product.title}
                </h5>

                {/* Truncated Description */}
                <p className="font-Montserrat font-bold text-[14px] leading-[24px] text-center text-gray-600 line-clamp-3 sm:line-clamp-4 md:line-clamp-3">
                  {product.description}
                </p>

                {/* Price */}
                <h5 className="font-Montserrat font-bold text-2xl leading-[24px] text-[#23856D]">
                  ${product.price}
                </h5>

                {/* Colors */}
                <div className="w-[82.2px] h-[16px] flex justify-center mt-4">
                  <Image
                    src={"/product-colors.png"}
                    alt="colours"
                    width={82.2}
                    height={64}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
