import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white max-w-[1440px] my-10 ">
      <section className="w-[79%] sm:w-[73%]  m-auto bg-[#ffffff] pt-8 sm:pt-16">
        <div className="w-[94%] flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-col">
            <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-wider">
              Bandage
            </h1>
          </div>
          <div className="flex gap-5">
            <Image
              src={"/facebook.png"}
              alt="fb"
              className="w-6 h-6 "
              width={24}
              height={24}
            />
            <Image
              src={"/ant-design_instagram-outlined.png"}
              alt="fb"
              className="w-6 h-6 "
              width={24}
              height={24}
            />
            <Image
              src={"/ant-design_twitter-outlined.png"}
              alt="fb"
              className="w-6 h-6 "
              width={24}
              height={24}
            />
          </div>
        </div>

        <div className="border-t border-[#e6e6e6]" />
        <div className="bg-white mt-3 sm:mt-0 py-24">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-7">
            <div>
              <h2 className="text-[#252b42] text-base font-bold">
                Company Info
              </h2>
              <nav className="flex flex-col gap-4 mt-5">
                <Link
                  href="/about"
                  className="text-[#727272] text-sm font-bold"
                >
                  About Us
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Carrier
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  We Are Hiring
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Blog
                </Link>
              </nav>
            </div>

            <div>
              <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
              <nav className="flex flex-col gap-4 mt-5">
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Terms of Service
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Cookies
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Refund Policy
                </Link>
              </nav>
            </div>

            <div>
              <h2 className="text-[#252b42] text-base font-bold">Features</h2>
              <nav className="flex flex-col gap-4 mt-5">
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Business Marketing
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  User Analytics
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Live Chat
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Unlimited Support
                </Link>
              </nav>
            </div>

            <div>
              <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
              <nav className="flex flex-col gap-4 mt-5">
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  IOS & Android
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Watch a Demo
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  Customers
                </Link>
                <Link href="#" className="text-[#727272] text-sm font-bold">
                  API
                </Link>
              </nav>
            </div>

            <div className="col-span-2">
              <h2 className="text-[#252b42] text-base font-bold">
                Get In Touch
              </h2>
              <div className="mt-5">
                <div className=" mb-4 flex">
                  <input
                    type="email"
                    className="w-[65%] p-2 xl:py-4  xl:pl-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-base font-normal outline-none"
                    placeholder="Your Email"
                  />
                  <button className=" p-2 px-2 xl:py-4  xl:pl-4 xl:px-6 rounded-md  bg-[#23a6f0] text-white text-sm font-normal ">
                    Subscribe
                  </button>
                </div>
                <p className="text-[#727272] text-xs tracking-widest">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#FAFAFA] py-4">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <p className="text-[#727272] text-sm font-bold tracking-widest">
              Made with love by Finland. All rights reserved.
            </p>
          </div>
        </section>
      </section>
    </footer>
  );
}
