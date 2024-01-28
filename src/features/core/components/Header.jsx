import React from "react";
import Link from "next/link";
import Image from "next/image";
import carticon from "../../../../public/assets/icons/cart-icon.svg";

export default function Header() {
  return (
    // TOP HEADER
    <header>
      <div className="bg-black py-3 text-white h-12">
        <div className="flex gap-6 items-center justify-center">
          <div className="text-sm font-normal leading-tight text-center">
            Unlock Tech Deals with Free Shipping! Discover Savings That Ship
            Straight to You! - 50% OFF!
          </div>
          <a
            href="#"
            className="text-sm font-semibold underline leading-normal text-center"
          >
            Shop Now
          </a>
        </div>
      </div>
      {/* MAIN HEADER */}
      <div className="border grid grid-cols-3 gap-3 h-16 items-center">
        <div className="ml-10">
          <a href="/">Techno Market</a>
        </div>
        <div className="flex justify-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/login">Login</Link>
        </div>

        <div className="flex items-center justify-end mr-10">
          <div className="mr-2">
            <Link href="/cart">
              <Image src={carticon} width={20} height={20} />
            </Link>
          </div>
          <div className="relative hidden sm:block">
            <label className="sr-only" htmlFor="search">
              Search
            </label>
            <input
              className="h-10 w-full rounded-lg border-none bg-neutral-100 pe-10 ps-4 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search website..."
            />
            <button
              type="button"
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
