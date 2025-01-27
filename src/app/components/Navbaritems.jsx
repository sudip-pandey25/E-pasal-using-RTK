"use client";

import React, { useState } from "react";
import Image from "next/image";
import CartModel from "./CartModel.jsx";
import { useSelector } from "react-redux";

const Navbaritems = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="flex flex-row relative gap-4 xl:gap-6 ">
      <div className="relative cursor-pointer">
        <div className="relative w-4 h-4">
          <Image
            src="/cart.png"
            fill
            sizes="100%"
            className="object-cover h-full w-full"
            alt="cart"
            onClick={() => setIsCartOpen((prev) => !prev)}
          />
        </div>
        <div className="absolute -top-4 -right-4 w-3 h-3 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
          {cart.reduce(
            (accumulator, currentItems) => accumulator + currentItems.quantity,
            0
          )}
        </div>
      </div>
      {isCartOpen && (
        <div>
          <CartModel />
        </div>
      )}
    </div>
  );
};

export default Navbaritems;
