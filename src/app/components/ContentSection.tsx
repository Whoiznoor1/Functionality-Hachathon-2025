import React from "react";
import Image from "next/image";

const ContentSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center  max-w-[1050px] gap-7 m-auto">
      {/* Left Panel */}
      <div className="sm:w-1/3 bg-white flex  justify-center gap-5">
        <div className="text-center">
          <div className="  bg-white flex items-center justify-center shadow-md ">
            <Image
              src={"/unsplash_QANOF9iJlFs.png"}
              alt="Interior Design"
              width={332}
              height={392}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="sm:w-2/3 px-6  flex flex-col sm:flex-row gap-11">
        {/* Section 1 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">the quick fox jumps over</h1>
          <p className="text-gray-700">
            Met minim Mollie non desert Alamo est sit
            <br className="sm:block hidden" /> cliquey dolor do met sent. RELIT
            official <br className=" hidden sm:block" /> consequent door ENIM
            RELIT Mollie.
            <br className="sm:block hidden" /> Excitation venial consequent sent
            nostrum
            <br className="sm:block hidden" /> met.
          </p>
          <p className="text-gray-700">
            Met minim Mollie non desert Alamo est sit
            <br className="sm:block hidden" /> cliquey dolor do met sent. RELIT
            official <br className=" hidden sm:block" /> consequent door ENIM
            RELIT Mollie.
            <br className="sm:block hidden" /> Excitation venial consequent sent
            nostrum
            <br className="sm:block hidden" /> met.
          </p>
          <p className="text-gray-700">
            Met minim Mollie non desert Alamo est sit
            <br className="sm:block hidden" /> cliquey dolor do met sent. RELIT
            official <br className=" hidden sm:block" /> consequent door ENIM
            RELIT Mollie.
            <br className="sm:block hidden" /> Excitation venial consequent sent
            nostrum
            <br className="sm:block hidden" /> met.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 ">
          <h2 className="text-xl font-semibold">the quick fox jumps over</h2>
          <ul className=" text-gray-700 space-y-3">
            <li className="flex items-center">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy
              dog
            </li>
            <li className="flex items-center">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy
              dog
            </li>
            <li className="flex items-center">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy
              dog
            </li>
            <li className="flex items-center">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy
              dog
            </li>
          </ul>

          {/* Section 3 */}
          <div className="space-y-2 ">
            <h2 className="text-xl font-semibold">the quick fox jumps over</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the
                lazy dog
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the
                lazy dog
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the
                lazy dog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
