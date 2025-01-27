import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  return (
    <div className="w-full max-w-[1440px] -z-10 mx-auto">
      <div className="relative w-full h-[716px]">
        <Image
          src={"/heroimage.jpg"}
          alt="women"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="absolute top-[410px] sm:top-[400px] sm:left-[135px] inset-0 flex flex-col justify-center items-start px-6 lg:px-16 text-white gap-6">
        <h5 className="font-Montserrat font-semibold text-base tracking-wide sm:text-[14px] ml-[124px] sm:ml-0 lg:text-[16px] leading-[30px]">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat sm:hidden font-bold ml-[135px] mt-5 sm:mt-0 leading-5 sm:ml-0 text-[40px] lg:text-[60px]   max-w-[90%] lg:max-w-[600px]">
          NEW
        </h1>
        <h1 className="font-Montserrat sm:hidden font-bold ml-16 leading-5 sm:ml-0 text-[36px] lg:text-[60px]   max-w-[90%] lg:max-w-[600px]">
          COLLECTION
        </h1>
        <h1 className="font-Montserrat sm:block hidden font-semibold text-[36px] lg:text-[60px]   max-w-[90%] lg:max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-medium ml-12 leading-7 sm:ml-0 mt-6 sm:mt-0 text-xl  lg:text-xl sm:leading-[24px] lg:text-[22px] tracking-wider w-[270px] sm:w-full max-w-[90%] lg:max-w-[500px]">
          We know how large objects will act,
          <br className="hidden sm:block" /> but things on a small scale.
        </h4>
        <Link href={"/products"}>
          <button className="sm:px-6 sm:py-3 px-12 py-4 lg:px-[40px] ml-16  mt-6 sm:mt-0 sm:ml-0 lg:py-[15px] bg-[#2DC071] text-white text-2xl font-semibold sm:text-[16px] lg:text-[24px] font-Montserrat rounded-md">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
