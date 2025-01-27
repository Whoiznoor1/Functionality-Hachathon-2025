import Image from "next/image";

const Breadcrumbs = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1050px] h-[92px] mx-auto px-4 flex items-center">
        {/* Header Section */}
        <div className="flex items-center gap-[15px] justify-center sm:justify-start mt-2 sm:mt-0 text-center sm:text-left w-full">
          <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
            Home
          </div>
          <Image src="/right.png" alt="arrow" width={8.26} height={6} />
          <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
            Shop
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
