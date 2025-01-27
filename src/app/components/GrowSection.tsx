import Image from "next/image";
import Link from "next/link";

const GrowSection = () => {
  return (
    <section className="relative w-full h-auto sm:h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
      <div className="w-full sm:w-1/2 h-full bg-[#2A7CC7] px-4 sm:px-8 md:px-[50px] py-8 sm:py-16 flex flex-col justify-center items-center">
        <div className="w-full sm:w-[438px] flex flex-col items-center text-center sm:text-left sm:items-start gap-[24px]">
          <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">
            WORK WITH US
          </h5>
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-[50px] tracking-[0.2px]">
            Now Lets grow Yours
          </h2>
          <p className="text-white text-sm font-semibold sm:text-base lg:text-sm text-[12px] lg:w-auto w-full sm:w-[350px] leading-[20px] tracking-[0.2px]">
            The gradual accumulation of
            <br className=" sm:hidden" /> information about atomic and
            <br className=" sm:hidden" /> small-scale behavior during the
            <br className=" sm:hidden" /> first quarter of the 20th.
          </p>
          <Link href={"/contact"}>
            <button className=" w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6 bg-gray-50 hover:bg-gray-400">
              <span className="text-blue-600 text-sm font-bold">Button</span>
            </button>
          </Link>
        </div>
      </div>
      <div className=" sm:w-1/2 h-full relative object-cover mt-8 sm:mt-0">
        <Image
          src="/unsplash_vjMgqUkS8q8.png"
          alt="Testimonial Background"
          className="absolute w-full h-auto sm:w-[590px] sm:h-[640px] left-0 sm:left-[85px] inset-0 object-cover hidden sm:block"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default GrowSection;
