import Image from "next/image";
import Link from "next/link";

export default function Whitediv() {
  return (
    <div className="w-full sm:pl-20 mb-10">
      <div className="w-full max-w-[1440px] flex flex-col-reverse mt-24 sm:mt-0 sm:flex-row gap-16 sm:justify-center px-4 lg:px-0">
        <div className="relative w-full lg:w-[707px] h-[400px] lg:h-[682px] flex justify-center">
          <Image
            src={"/asian-woman-man-with-winter-clothes 1.png"}
            alt="couple"
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
            width={707}
            height={400}
          />
        </div>

        <div className="w-full lg:w-[573px] h-auto flex flex-col gap-7 justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0">
          <h5 className="text-[16px] lg:text-[16px] font-Montserrat tracking-widest font-bold leading-[24px] text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h2 className="sm:w-[375px] w-[220px] text-[41px] font-Montserrat font-bold leading-[50px] text-[#252B42]">
            Part of the Neural Universe
          </h2>
          <h4 className="w-60 sm:w-[375px] text-[20px] font-Montserrat font-semibold tracking-wide leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-5 sm:gap-[10px]">
            <Link href={"/products"}>
              {" "}
              <button className="w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] sm:bg-[#2DC071] hover:bg-emerald-400 bg-[#23A6F0] flex justify-center items-center">
                <h1 className="text-[14px] font-Montserrat font-bold text-white">
                  BUY NOW
                </h1>
              </button>
            </Link>
            <Link href={"/products"}>
              {" "}
              <button className=" hidden sm:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border bg-gray-100 hover:bg-gray-50 border-[#23A6F0] sm:border-[#2DC071] sm:flex justify-center items-center">
                <h1 className="text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#23A6F0] sm:text-[#2DC071]">
                  Shop more
                </h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
