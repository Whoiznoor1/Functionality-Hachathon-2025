import Link from "next/link";

const Ideas = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">
          Visit Our Office
        </h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          We help small businesses
          <br className="sm:hidden" /> with big ideas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg w-full sm:w-[328px] h-[403px]">
            <div className="mb-4">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.929 38.9947C55.5775 38.6426 55.16 38.3632 54.7004 38.1726C54.2408 37.982 53.7482 37.8839 53.2506 37.8839C52.7531 37.8839 52.2604 37.982 51.8008 38.1726C51.3413 38.3632 50.9238 38.6426 50.5722 38.9947L44.5335 45.0334C41.7339 44.1999 36.5097 42.3057 33.1987 38.9947C29.8876 35.6836 27.9934 30.4594 27.16 27.6598L33.1987 21.6211C33.5508 21.2696 33.8301 20.8521 34.0207 20.3925C34.2113 19.9329 34.3094 19.4403 34.3094 18.9427C34.3094 18.4452 34.2113 17.9525 34.0207 17.4929C33.8301 17.0333 33.5508 16.6159 33.1987 16.2643L18.0451 1.11076C17.6936 0.758646 17.2761 0.479298 16.8165 0.288701C16.3569 0.0981045 15.8642 0 15.3667 0C14.8692 0 14.3765 0.0981045 13.9169 0.288701C13.4573 0.479298 13.0398 0.758646 12.6883 1.11076L2.41418 11.3849C0.97459 12.8245 0.163873 14.802 0.19418 16.8212C0.281313 22.2159 1.70954 40.9533 16.4767 55.7204C31.2439 70.4876 49.9813 71.912 55.3797 72.003H55.4858C57.4861 72.003 59.3765 71.215 60.8085 69.783L71.0826 59.5088C71.4347 59.1573 71.7141 58.7398 71.9047 58.2802C72.0953 57.8207 72.1934 57.328 72.1934 56.8304C72.1934 56.3329 72.0953 55.8402 71.9047 55.3807C71.7141 54.9211 71.4347 54.5036 71.0826 54.1521L55.929 38.9947ZM55.4479 64.4224C50.72 64.3428 34.5435 63.0737 21.8335 50.3599C9.08175 37.6081 7.84674 21.3749 7.77097 16.7417L15.3667 9.14594L25.1635 18.9427L20.2651 23.8411C19.8198 24.2861 19.4924 24.835 19.3125 25.4382C19.1326 26.0414 19.1058 26.68 19.2346 27.2961C19.3256 27.7318 21.5494 38.0627 27.8381 44.3515C34.1268 50.6402 44.4578 52.864 44.8934 52.9549C45.5092 53.0874 46.1484 53.0627 46.7522 52.8833C47.356 52.7039 47.9049 52.3755 48.3485 51.9283L53.2506 47.0299L63.0474 56.8267L55.4479 64.4224Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
            <p className="text-black text-sm mb-2 font-bold">
              georgia.young@example.com <br />
              georgia.youngaple.com
            </p>
            <p className="text-black mb-4 font-bold">Get Support</p>
            <Link href={"mailto:murkmyman5@gmail.com"}>
              <button className="border text-[rgb(35,166,240)] border-[rgb(35,166,240)] px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                Submit Request
              </button>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-[rgb(37,43,66)] flex flex-col items-center text-white p-6 rounded-lg w-full sm:w-[328px] h-[403px]">
            <div className="mb-4">
              <svg
                width="51"
                height="67"
                viewBox="0 0 51 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5 0C11.4168 0 0 11.3074 0 25.2559C0 29.9206 0.921868 34.7384 3.56734 38.2109L25.5 67L47.4327 38.2109C49.8356 35.0569 51 29.4811 51 25.2559C51.0001 11.3074 39.5833 0 25.5 0ZM25.5 14.6276C31.4257 14.6276 36.231 19.3869 36.231 25.2558C36.231 31.1248 31.4257 35.8841 25.5 35.8841C19.5743 35.8841 14.7691 31.1248 14.7691 25.2559C14.7691 19.3869 19.5743 14.6276 25.5 14.6276Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
            <p className="text-white text-sm mb-2 font-bold">
              georgia.young@example.com <br />
              georgia.youngaple.com
            </p>
            <p className="mb-4 font-bold">Get Support</p>
            <Link href={"mailto:murkmyman5@gmail.com"}>
              <button className="border text-[rgb(35,166,240)] border-[rgb(35,166,240)] px-4 py-2 rounded-full hover:bg-white hover:text-blue-500 transition">
                Submit Request
              </button>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg w-full sm:w-[328px] h-[403px]">
            <div className="mb-4">
              <svg
                width="72"
                height="55"
                viewBox="0 0 72 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.225 7.12708C0.678682 5.10236 1.79395 3.29456 3.38815 1.99975C4.98235 0.704934 6.96098 -0.000139766 9 2.07815e-08H63C65.039 -0.000139766 67.0177 0.704934 68.6118 1.99975C70.206 3.29456 71.3213 5.10236 71.775 7.12708L36 29.3975L0.225 7.12708ZM0 12.3612V44.9212L26.1135 28.6137L0 12.3612ZM30.4245 31.3042L0.8595 49.7612C1.58997 51.3301 2.74287 52.6553 4.18402 53.5827C5.62516 54.5102 7.29529 55.0017 9 55H63C64.7044 55.0004 66.3739 54.5078 67.8143 53.5796C69.2546 52.6513 70.4065 51.3256 71.136 49.7567L41.571 31.2996L36 34.7692L30.4245 31.2996V31.3042ZM45.8865 28.6183L72 44.9212V12.3612L45.8865 28.6137V28.6183Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
            <p className="text-black text-sm mb-2 font-bold">
              georgia.young@example.com <br />
              georgia.youngaple.com
            </p>
            <p className="mb-4 font-bold text-black">Get Support</p>
            <Link href={"mailto:murkmyman5@gmail.com"}>
              <button className="border border-[rgb(35,166,240)] rounded-full text-[rgb(35,166,240)] px-4 py-2 hover:bg-blue-500 hover:text-white transition">
                Submit Request
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
