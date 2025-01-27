import Image from "next/image";

const Innovation = () => {
  return (
    <section className="bg-gray-50 sm:p-8 max-w-[1440px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-gray-500">WHAT WE DO</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Innovation
          <br className="sm:hidden" /> tailored for you
        </h1>
        <p className="text-gray-400 mt-4">Home &gt; Team</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-4">
        {/* Large Image */}
        <div className=" w-full transition-all hover:scale-[1.02] duration-200 ">
          <Image
            src="/red1.png"
            alt="Fashion"
            className="w-full h-full  object-cover"
            width={700}
            height={530}
          />
        </div>

        {/* Small Images */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-1 sm:gap-4 ">
          <Image
            src="/red2.png"
            alt="Detail 1"
            className=" h-[260px] w-[204px] sm:w-full object-cover transition-all hover:scale-[1.02] duration-200 hover:opacity-75"
            width={361}
            height={260}
          />
          <Image
            src="/red3.png"
            alt="Detail 2"
            className="  h-[260px] w-[204px]  sm:w-full object-cover transition-all hover:scale-[1.02] duration-200 hover:opacity-75"
            width={361}
            height={260}
          />
          <Image
            src="/red4.png"
            alt="Detail 3"
            className="  h-[260px] w-[204px] sm:w-full object-cover transition-all hover:scale-[1.02] duration-200 hover:opacity-75"
            width={361}
            height={260}
          />
          <Image
            src="/red5.png"
            alt="Detail 4"
            className=" h-[260px] w-[204px]  sm:w-full  object-cover transition-all hover:scale-[1.02] duration-200 hover:opacity-75"
            width={361}
            height={260}
          />
        </div>
      </div>
    </section>
  );
};

export default Innovation;
