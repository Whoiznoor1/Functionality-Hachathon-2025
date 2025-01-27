import Image from "next/image";
const ContactHero = () => {
  return (
    <div className="relative flex flex-col gap-8 overflow-x-hidden">
      {" "}
      {/* Add overflow-x-hidden here */}
      <div className="w-full max-w-[1050px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
        <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-full lg:h-[321px]">
          {/* Column 1 */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[599px] h-auto lg:h-[321px]">
            <h5 className="text-[14px] font-semibold text-[#252B42] tracking-[0.1px] text-center hidden sm:block">
              Contact Us
            </h5>
            <h1 className="text-[30px] sm:text-[30px] sm:justify-center font-semibold lg:text-[58px] text-[#252B42] tracking-[0.2px] text-center lg:text-left">
              Get in touch <br className="sm:hidden" />
              today!
            </h1>
            <h4 className="text-[12px] font-normal sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px] text-center lg:text-left">
              We know how large <br className="sm:hidden" />
              objects will act, but things <br className="sm:hidden" />
              on a small scale
            </h4>
            <h4 className="text-[12px] font-bold md:mt-2 sm:text-[18px] lg:text-[20px] text-[#252B42] w-[200px] lg:w-[376px] text-center lg:text-left">
              Phone ; +451 215 215
            </h4>
            <h4 className="text-[12px] font-bold md:mt-3 sm:text-[18px] lg:text-[20px] text-[#252B42] w-[200px] lg:w-[376px] text-center lg:text-left">
              Fax : +451 215 215
            </h4>
            <div className="flex flex-row items-center justify-center md:mt-9 lg:justify-start gap-[20px] w-[195px] h-[52px]">
              {/* SVG icons */}
            </div>
          </div>
          {/* Column 2 */}
          <div className="w-full flex justify-center">
            <Image
              src={"/contacthero.png"}
              alt="girl"
              className="w-full h-[auto] lg:h-[612px]"
              width={1000}
              height={612}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
