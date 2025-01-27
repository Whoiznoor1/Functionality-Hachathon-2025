import Image from "next/image";
import Link from "next/link";

export default function GreenDiv() {
  return (
    <div className="w-full bg-[#23856D] rounded-md flex justify-center pt-28 px-4">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row  gap-2">
        <div className=" text-white  md:pl-9 py-24 md:py-16">
          <div className="w-[80%] m-auto flex flex-col gap-8  h-fit justify-center">
            <h4 className="font-Montserrat  text-center text-[19px] tracking-widest font-medium">
              SUMMER 2020
            </h4>
            <h1 className="font-Montserrat font-bold text-[40px] text-center tracking-wider md:text-[48px] lg:text-[58px] leading-tight">
              Vita Classic Products
            </h1>
            <p className="font-Montserrat  sm:block text-center text-[20px] leading-8 tracking-widest md:text-[16px]  font-extralight">
              We know how large objects will act, but things on a small scale.
            </p>
            <p className="font-Montserrat text-center hidden sm:block text-[14px] md:text-[16px] sm:w-[75%] font-medium">
              We know how large objects will act, We know how are objects will
              act, We know
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <h3 className="font-Montserrat text-[24px] md:text-[24px] font-bold">
                $16.48
              </h3>
              <Link href={"/products"}>
                <button className="bg-[#2DC071] rounded-md px-10 py-3.5 text-[14px] md:text-[14px] font-Montserrat text-white font-semibold">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            src={"/shop-hero-2-png-picture-1.png"}
            alt="Vita Classic Product"
            width={445}
            height={595}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
