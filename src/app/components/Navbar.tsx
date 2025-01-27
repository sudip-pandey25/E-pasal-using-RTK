import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Navbaritems from "./Navbaritems.jsx";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
      {/* Mobile Nav */}
      <div className=" h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">E-Pasal</div>
        </Link>
        <Menu />
      </div>

      {/* Desktop Screen */}
      <div className="hidden md:flex items-center justify-between gap-2 h-full ">
        {/* Left */}
        <div className="left w-1/3 xl:w-1/2">
          <Link href="/" className="flex flex-row gap-2">
            <Image src="/logo.png" alt="E-pasal Logo" width={28} height={28} />
            <div className="text-2xl tracking-wide">E-Pasal</div>
          </Link>
        </div>

        {/* NavLinks */}
        <div className="hidden xl:flex gap-6">
          <Link
            href="/"
            className="hover:text-red-500 transition-colors duration-300 ease-out"
          >
            HomePage
          </Link>
          <Link
            href="/"
            className="hover:text-red-500 transition-colors duration-300 ease-out"
          >
            Categories
          </Link>
          <Link
            href="/list?cat=all-products"
            className="hover:text-red-500 transition-colors duration-300 ease-out"
          >
            Products
          </Link>
          <Link
            href="/"
            className="hover:text-red-500 transition-colors duration-300 ease-out"
          >
            Contact
          </Link>
        </div>

        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex flex-row items-center justify-end gap-2 ">
          <SearchBar />
          <Navbaritems />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
