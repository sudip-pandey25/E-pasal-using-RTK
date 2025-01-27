"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src="/menu.png"
        alt="hamburger"
        width={28}
        height={28}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-gray-800 text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">HomePage</Link>
          <Link href="/">Categories</Link>
          <Link href="/list?cat=all-products">Products</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
