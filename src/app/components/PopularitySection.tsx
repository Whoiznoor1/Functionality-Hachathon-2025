import Image from "next/image";

const PopularitySection = () => {
  return (
    <div className="md:h-[98px] max-w-[1050px] mx-auto">
      <div className="md:h-[98px] py-[24px] flex flex-col sm:flex-row justify-center sm:justify-between gap-[15px] sm:gap-[80px]">
        {/* Text for showing results */}
        <div className="flex justify-center sm:justify-start text-center sm:text-left">
          <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
            Showing all 12 results
          </div>
        </div>

        {/* Views section */}
        <div className="flex justify-center gap-[15px] sm:justify-start">
          <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373] md:mt-3">
            Views:
          </h6>
          <Image src="/Frame.png" alt="frame" width={108} height={46} />
        </div>

        {/* Buttons section */}
        <div className="flex justify-center gap-[15px] sm:justify-start mt-[10px] sm:mt-0">
          <button className="w-[141px] h-[50px] border border-[#DDDDDD] flex items-center justify-center">
            <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
              Popularity
            </p>
          </button>
          <button className="w-[94px] h-[50px] flex gap-[10px] items-center justify-center bg-[#23A6F0]">
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
              Filter
            </h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularitySection;
