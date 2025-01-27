import React from "react";

const Pricing = () => {
  return (
    <div className="w-full bg-gray-50 py-10 flex justify-center">
      {/* Parent container */}
      <div className="max-w-[1440px] px-4 lg:px-0">
        {/* Inner section */}

        <div className="max-w-[1050px] mt-4 mx-auto text-center flex flex-col gap-6">
          <h2 className="text-sm tracking-widest font-semibold text-gray-700 uppercase">
            Pricing
          </h2>
          <h1 className=" text-2xl lg:text-6xl tracking-wide font-bold text-gray-800">
            Simple Pricing
          </h1>
          <p className="text-sm text-gray-600 mt-2 flex justify-center gap-5">
            <span>Home</span> &gt; <span>Pricing</span>
          </p>

          <div className="mt-5 lg:mt-20">
            <h1 className="text-4xl font-semibold text-black">Pricing </h1>
            <p className="text-gray-500 mt-2  m-auto">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics
            </p>

            {/* Toggle Button */}
            <div className="flex justify-center items-center mt-10 gap-10">
              <button className="px-4 py-2  text-slate-900 font-semibold rounded-full">
                Monthly
              </button>
              <button className=" text-slate-900 font-semibold ">Yearly</button>
              <span className="text-sm px-4 rounded-full py-2  bg-green-200 text-blue-500">
                Save 25%
              </span>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 m-auto  mt-10 w-[70%] sm:w-full ">
              {/* Free Plan */}
              <div className="border flex flex-col py-20 gap-5 border-blue-600 mt-10 sm:pt-10  hover:scale-[1.02] duration-200  rounded-lg px-6 text-slate-700 shadow-md">
                <h3 className="text-2xl font-semibold tracking-wider uppercase  ">
                  Free
                </h3>
                <p className="text-base w-40 font-semibold text-center m-auto">
                  Organize across all apps by hand
                </p>
                <p className="text-5xl font-bold text-blue-500 mt-4 flex justify-center">
                  0
                  <span className="text-sm  text-blue-500   flex flex-col ">
                    <span className="text-3xl">$</span>Per Month
                  </span>
                </p>

                <ul className="mt-4 space-y-6 tracking-wider font-semibold">
                  <li className="text-sm ">
                    <span className="bg-green-400 p-2 rounded-full">✔</span>{" "}
                    Unlimited product updates
                  </li>
                </ul>
              </div>

              {/* Standard Plan */}
              <div className="border  flex py-20 flex-col gap-10 sm:pt-20 rounded-lg p-6 bg-slate-800 text-white shadow-md hover:scale-[1.02] duration-200 ">
                <h3 className="text-2xl font-semibold tracking-wider uppercase ">
                  STANDARD
                </h3>
                <p className="text-base w-40 font-semibold text-center m-auto">
                  Organize across all apps by hand
                </p>
                <p className="text-5xl font-bold text-blue-500 sm:mt-4 flex justify-center">
                  9.99
                  <span className="text-sm  text-blue-500   flex flex-col ">
                    <span className="text-3xl">$</span>Per Month
                  </span>
                </p>

                <ul className="mt-4 space-y-6 tracking-wider font-semibold">
                  <li className="text-sm ">
                    <span className="bg-green-400 p-2 rounded-full">✔</span>{" "}
                    Unlimited product updates
                  </li>
                  <li className="text-sm ">
                    <span className="bg-green-400 p-2 rounded-full">✔</span>{" "}
                    Unlimited product updates
                  </li>
                </ul>
              </div>

              {/* Premium Plan */}
              <div className="border flex flex-col py-20 gap-5 border-blue-600 mt-10 sm:pt-10 rounded-lg px-6 text-slate-700 shadow-md hover:scale-[1.02] duration-200 ">
                <h3 className="text-2xl font-semibold tracking-wider uppercase  ">
                  PREMIUM
                </h3>
                <p className="text-base w-40 font-semibold text-center m-auto">
                  Organize across all apps by hand
                </p>
                <p className="text-5xl font-bold text-blue-500 mt-4 flex justify-center">
                  19.99
                  <span className="text-sm  text-blue-500   flex flex-col ">
                    <span className="text-3xl">$</span>Per Month
                  </span>
                </p>

                <ul className="mt-4 space-y-6 tracking-wider font-semibold">
                  <li className="text-sm ">
                    <span className="bg-green-400 p-2 rounded-full">✔</span>{" "}
                    Unlimited product updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
