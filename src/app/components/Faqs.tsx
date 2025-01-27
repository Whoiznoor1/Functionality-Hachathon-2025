import React from "react";

const Faqs = () => {
  return (
    <div className="w-full bg-gray-50 py-10 flex justify-center">
      {/* Parent container */}
      <div className="max-w-[1440px] px-4 lg:px-0">
        {/* Inner section */}
        <div className="max-w-[1050px] mx-auto text-center pt-10">
          {/* Header */}
          <h1 className="text-4xl tracking-widest font-bold text-gray-800">
            Pricing FAQs
          </h1>
          <p className="text-lg tracking-widest m-auto text-gray-600 mt-5 md:w-[500px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 mt-10 lg:mt-28">
            {/* FAQ Item */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex items-start  bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-blue-500 text-lg mr-5">&gt;</span>
                <div>
                  <h3 className="font-semibold text-left text-gray-800 text-md">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-sm text-left text-gray-600 mt-1">
                    Met minim Mollie non deserunt Alamo est sit cliquey dolor do
                    met sint. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10">
            <p className="text-sm lg:text-2xl text-gray-600">
              Haven&quot;t got your answer? <span>Contact our support</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
