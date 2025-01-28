"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useContext } from "react";

import { CartContext } from "./context"; // Import CartContext
import SideCart from "./SideCart";
import WishList from "./WishList";
import { Product } from "./CartProvider";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// Sanity query to search products
async function searchProducts(query: string) {
  const searchQuery = `
    *[_type == "product" && title match '${query}*'] {
      "id": _id,
      title,
      "image": productImage,
      price
    }
  `;
  const results = await client.fetch(searchQuery);
  return results;
}

export default function Navbarmain() {
  const { cart, wish } = useContext(CartContext); // Access the cart from context
  const cartItemCount = cart.reduce(
    (total: number, item: { quantity: number }) => total + item.quantity,
    0
  );
  const wishItemCount = wish.length;

  const [isWishOpen, setIsWishOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to manage search bar visibility
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search input
  const [searchResults, setSearchResults] = useState<Product[]>([]); // State to hold search results
  const [isSearching, setIsSearching] = useState(false); // Flag for loading state during search

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Debounced search logic
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery) {
        setIsSearching(true);
        const results = await searchProducts(searchQuery);
        setSearchResults(results);
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    }, 500); // Delay of 500ms to avoid multiple requests while typing

    return () => clearTimeout(timer); // Cleanup on changes or unmount
  }, [searchQuery]);
  const [display, setDisplay] = useState(false);
  return (
    <nav className="w-full z-10 max-w-[1440px] sticky top-0 mx-auto bg-white">
      <div className="flex items-center justify-between py-[35px] px-[35px] sm:py-6 sm:px-4 lg:px-10">
        <div className="flex items-center gap-2 md:gap-10 lg:gap-28">
          <h3 className="font-Montserrat text-[24px] tracking-wider font-semibold text-black">
            Bandage
          </h3>

          <div className="sm:hidden flex gap-2 items-center absolute right-10 cursor-pointer">
            {/* Search icon */}
            <Image
              src={"/searchicon.png"}
              alt="icon"
              width={24}
              height={20}
              className="h-6 cursor-pointer"
              onClick={toggleSearch}
            />

            {/* Menu icon */}
            <Image
              src={"/menuicon.png"}
              alt="icon"
              width={24}
              height={14}
              className="h-3 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <ul className="lg:ml-2 sm:gap-3 lg:gap-[24px] hidden sm:flex font-Montserrat font-semibold text-xs md:text-[14px] text-[#737373]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/products">Pages</Link>
            </li>
          </ul>
        </div>

        <div className="hidden sm:flex items-center gap-4 lg:gap-9">
          <div className=" items-center gap-2 inline">
            <span className="font-Montserrat text-[#23A6F0] cursor-pointer text-[14px] font-semibold ">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </span>
          </div>

          <ul className="flex gap-2 lg:gap-10">
            <li>
              <Image
                src={"/icn settings icn-xs (6).png"}
                alt="search"
                width={16}
                height={16}
                onClick={toggleSearch}
                className="cursor-pointer"
              />
            </li>
            <li>
              {cartItemCount > 0 && (
                <sup>
                  <div className="absolute top-0 right-0 w-4 h-4  font-semibold text-blue-800 text-xs flex justify-center items-center rounded-full">
                    {cartItemCount}
                  </div>{" "}
                </sup>
              )}
              <Image
                src={"/icn settings icn-xs (7).png"}
                alt="cart"
                className="cursor-pointer"
                width={16}
                height={16}
                onClick={() => setDisplay(!display)}
              />
              {/* Conditional rendering of the cart */}
              {display && <SideCart />}{" "}
              {/* Assuming Nav component handles cart display */}
            </li>
            <li>
              {wishItemCount > 0 && (
                <sup>
                  <div className="absolute top-0 right-0 w-4 h-4  font-semibold text-blue-800 text-xs flex justify-center items-center rounded-full">
                    {wishItemCount}
                  </div>{" "}
                </sup>
              )}
              <Image
                src={"/icn settings icn-xs (8).png"}
                alt="mail"
                width={16}
                height={16}
                className="cursor-pointer"
                onClick={() => setIsWishOpen(!isWishOpen)}
              />
              {isWishOpen && <WishList />}
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Search Input */}
      {isSearchOpen && (
        <div className="sm:hidden flex flex-col gap-2 py-2 px-4 absolute top-[75px] right-[10px] bg-white border border-gray-300 w-[90%] rounded-md z-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchQuery && (
            <div className="absolute top-full left-0 bg-white border border-gray-300 w-full max-h-60 overflow-auto">
              {isSearching ? (
                <div className="p-2">Searching...</div>
              ) : searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <div key={product.id} className="p-2 hover:bg-gray-100">
                    <Link href={`/${product.id}`}>
                      <div className="flex items-center gap-2">
                        <Image
                          src={urlFor(product.image).url()}
                          alt={product.title}
                          width={50}
                          height={50}
                          className="object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold">
                            {product.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="p-2 text-center text-gray-500">
                  No products found
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Large Screen Search Input */}
      <div className="hidden sm:flex items-center gap-4 relative">
        {isSearchOpen && (
          <>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Products"
              className="px-4 py-2 absolute top-1 right-2 border border-gray-300 rounded-md w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <div className="absolute top-12 right-2 bg-white border rounded-md border-gray-300 w-[250px] max-h-60 overflow-auto">
                {isSearching ? (
                  <div className="p-2">Searching...</div>
                ) : searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <div key={product.id} className="p-2 hover:bg-gray-100">
                      <Link href={`/${product.id}`}>
                        <div className="flex items-center gap-2">
                          <Image
                            src={urlFor(product.image).url()}
                            alt={product.title}
                            width={50}
                            height={50}
                            className="object-cover"
                          />
                          <div>
                            <p className="text-sm font-semibold">
                              {product.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-center text-gray-500">
                    No products found
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} lg:hidden flex-col items-center text-slate-900 py-6 gap-6`}
      >
        <ul className="mt-8 font-Montserrat text-[32px] font-thin tracking-wider flex flex-col gap-6 items-center">
          <li className="text-lg">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="text-lg">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-lg">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-lg">
            <Link href="/products">Pages</Link>
          </li>
          <div className="flex items-center gap-2">
            <span className="font-Montserrat text-[#23A6F0] cursor-pointer text-lg font-semibold">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </span>
          </div>
          <li>
            <ul className="space-y-6">
              <li>
                {/* Cart Badge */}
                {cartItemCount > 0 && (
                  <sup>
                    <div className="absolute top-0 right-0 w-4 h-4  font-semibold text-blue-800 text-xs flex justify-center items-center rounded-full">
                      {cartItemCount}
                    </div>{" "}
                  </sup>
                )}
                <Image
                  src={"/icn settings icn-xs (7).png"}
                  alt="cart"
                  width={24}
                  height={24}
                  onClick={() => setDisplay(!display)}
                />
                {/* Conditional rendering of the cart */}
                {display && <SideCart />}{" "}
                {/* Assuming Nav component handles cart display */}
              </li>
              <li>
                {wishItemCount > 0 && (
                  <sup>
                    <div className="absolute top-0 right-0 w-4 h-4  font-semibold text-blue-800 text-xs flex justify-center items-center rounded-full">
                      {wishItemCount}
                    </div>{" "}
                  </sup>
                )}
                <Image
                  src={"/icn settings icn-xs (8).png"}
                  alt="mail"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                  onClick={() => setIsWishOpen(!isWishOpen)}
                />
                {isWishOpen && <WishList />}
              </li>
            </ul>
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
