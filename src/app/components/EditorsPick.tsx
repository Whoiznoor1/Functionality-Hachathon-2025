import Image from "next/image";
import Link from "next/link";

export default function EditorsPick() {
  return (
    <div className="w-full flex justify-center py-12 sm:py-10 bg-[#f5f5f5]">
      <div className="w-full max-w-[1050px] flex flex-col gap-10 bg-[#FAFAFA] p-6 md:p-10">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-Montserrat font-semibold text-[24px] text-black">
            EDITORS PICK
          </h3>
          <p className="text-center text-[#737373] tracking-wider w-52 font-semibold sm:w-full font-Montserrat text-[14px] md:text-[16px] leading-[20px] ">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="w-full grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr] gap-9">
          <div className="relative w-full h-[500px] md:h-[500px] transition-all hover:scale-[1.02] duration-200 hover:opacity-75">
            <Link href={"/products"}>
              <Image
                src={"/filter.png"}
                alt="men"
                className="w-[325px] h-[500px] sm:h-full sm:w-full rounded-md"
                width={510}
                height={500}
              />
              <button className="absolute top-[434px] left-[101px] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
                MEN
              </button>
            </Link>
          </div>

          <div className="relative w-full  md:h-[500px] transition-all hover:scale-[1.02] duration-200 hover:opacity-75">
            <Link href={"/products"}>
              <Image
                src={"/filter (1).png"}
                alt="women"
                className="w-[325px] h-[500px] sm:h-full sm:w-full object-cover rounded-md "
                width={240}
                height={500}
              />
              <button className="absolute top-[434px] left-[21px] w-[136px] h-[48px] px-[48px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  WOMEN
                </h2>
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 justify-center ">
            <div className="relative  w-[325px] sm:w-full  md:h-[242px]">
              <Link href={"/products"}>
                <Image
                  src={"/filter (2).png"}
                  alt="accessories"
                  className=" w-[325px] sm:w-full object-cover rounded-md transition-all hover:scale-[1.02] duration-200 hover:opacity-75"
                  width={240}
                  height={242}
                />
                <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white  shadow-md">
                  <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                    ACCESSORIES
                  </h2>
                </button>
              </Link>
            </div>

            <div className="relative w-[325px] sm:w-full md:h-[242px]">
              <Link href={"/products"}>
                <Image
                  src={"/filter (3).png"}
                  alt="kids"
                  className=" w-[325px] sm:w-full object-cover rounded-md transition-all hover:scale-[1.02] duration-200 hover:opacity-75"
                  width={240}
                  height={242}
                />
                <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white  shadow-md">
                  <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                    KIDS
                  </h2>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
