import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="relative flex flex-col gap-8">
      <div className="w-full max-w-[1050px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
        <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-full lg:h-[321px]">
          {/* Column 1 */}
          <div className="flex flex-col items-center lg:items-start gap-[35px] w-full lg:w-[599px] h-auto lg:h-[321px]">
            <h5 className="text-[14px]  font-semibold text-[#252B42] tracking-[0.1px] text-center hidden sm:block">
              ABOUT COMPANY
            </h5>
            <h1 className="text-[30px] sm:text-[30px] sm:justify-center font-semibold lg:text-[58px]  text-[#252B42] tracking-[0.2px] text-center lg:text-left">
              ABOUT US
            </h1>
            <h4 className="text-[12px] font-normal  sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px] text-center lg:text-left">
              We know how large <br className="sm:hidden" />
              objects will act, but things <br className="sm:hidden" />
              on a small scale just do <br className="sm:hidden" />
              not act that way.
            </h4>
            <div className="flex flex-row items-center justify-center lg:justify-start gap-[10px] w-[195px] h-[52px]">
              <Link href={"/contact"}>
                <button>
                  <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] bg-[#23A6F0]  hover:bg-blue-400 rounded-[5px]">
                    <span className="font-bold text-[14px] sm:text-[16px] text-[#FFFFFF] whitespace-nowrap">
                      Contact us
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          {/* Column 2 */}
          <div className="w-full  flex justify-center">
            <Image
              src={"/aboutbg.png"}
              alt="girl"
              className=" w-full h-[auto] lg:h-[612px]"
              width={1000}
              height={612}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
