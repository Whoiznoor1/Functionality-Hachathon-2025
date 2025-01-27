import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export interface Team {
  title: string;
  _id: string;
  description: string;
  productImage: string;
}

async function getData() {
  const data = await client.fetch('*[_type=="team"]');
  return data;
}

export default async function TeamClients() {
  const data = await getData();

  return (
    <div className="w-full flex justify-center bg-white py-10 lg:pt-10 pb-20">
      <div className="w-full max-w-[1124px] flex flex-col gap-20 mt-12 sm:mt-8 md:ml-12 sm:px-4 ">
        {/* Product Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-3 lg:gap-x-4 lg:gap-y-20 gap-4 ">
          {data.map((product: Team) => (
            <div
              key={product._id}
              className="flex flex-col items-center bg-[#F9F9F9] rounded-md mx-auto shadow-sm p-4 sm:p-6 lg:p-8 hover:scale-[1.02] duration-200 "
            >
              {/* Product Image */}
              <div className="relative w-full h-auto mb-4 ">
                <Image
                  src={urlFor(product.productImage)
                    .width(640)
                    .height(480)
                    .fit("crop")
                    .url()}
                  alt={product.title}
                  width={1000}
                  height={200}
                  className="rounded-sm object-cover"
                />
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

                <div className="flex justify-center gap-4 mt-4">
                  <Image
                    src={"/facebook.png"}
                    alt="Facebook"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={"/ant-design_instagram-outlined.png"}
                    alt="Instagram"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={"/ant-design_twitter-outlined.png"}
                    alt="Twitter"
                    className="w-6 h-6"
                    width={24}
                    height={24}
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
