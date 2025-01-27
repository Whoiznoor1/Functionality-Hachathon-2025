import Image from "next/image";

const ShopHeader = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1050px] mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-[8px] text-center sm:text-left">
          <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            Shop
          </h2>

          <div className="flex items-center gap-[15px] justify-center sm:justify-start mt-2 sm:mt-0">
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
    </div>
  );
};

export default ShopHeader;
