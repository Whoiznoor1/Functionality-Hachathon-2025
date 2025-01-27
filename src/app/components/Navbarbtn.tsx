"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbarbtn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full max-w-[1440px] mx-auto bg-white sticky top-0 z-50">
      {" "}
      {/* Add z-50 for stacking */}
      <div className="m-auto max-w-[1080px] flex items-center justify-between py-[35px] px-[35px] sm:py-5 sm:px-4 lg">
        <div className="flex items-center justify-between gap-2 md:gap-10 lg:gap-28">
          <h3 className="font-Montserrat text-[24px] tracking-wider font-semibold text-black">
            Bandage
          </h3>

          <div className="sm:hidden flex gap-6 items-center absolute right-10">
            <Image
              src={"/searchicon.png"}
              alt="icon"
              width={24}
              height={20}
              className="h-6 cursor-pointer"
            ></Image>
            <Image
              src={"/carticon.png"}
              alt="icon"
              width={24}
              height={17}
              className="h-6 cursor-pointer"
            ></Image>
            <Image
              src={"/menuicon.png"}
              alt="icon"
              width={24}
              height={14}
              className="h-3 cursor-pointer"
              onClick={toggleMenu}
            ></Image>
          </div>

          <ul className="lg:ml-2 gap-4 lg:gap-[24px] hidden sm:flex font-Montserrat font-semibold text-xs md:text-[14px] text-[#737373]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Product</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex items-center gap-4 lg:gap-9">
          <Link legacyBehavior href="/login">
            <a className="font-semibold text-sm text-[#23A6F0]">Login</a>
          </Link>
          <Link legacyBehavior href="/team">
            <a className="font-semibold tracking-wide text-sm text-white flex items-center gap-2 px-8 py-4 bg-[#23A6F0] rounded-[5px]">
              Become a Member
              <svg
                className="w-[12px] h-[10px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 10"
                fill="none"
                stroke="#FFFFFF"
              >
                <path d="M2 5h8M5 2l3 3-3 3" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} lg:hidden flex-col items-center text-slate-400 py-6 gap-6`}
      >
        <ul className="mt-8 font-Montserrat text-[32px] font-semibold flex flex-col gap-8 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Product</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <button
          onClick={toggleMenu}
          className="text-white font-Montserrat text-[14px]"
        >
          Close Menu
        </button>
      </div>
    </nav>
  );
}
