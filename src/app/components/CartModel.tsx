"use client";

import React from "react";
import Image from "next/image";

const CartModel = () => {
  const cartItems = true;

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 w-max flex flex-col gap-6 z-20 ">
      {!cartItems ? (
        <div>"No Items added"</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-3">
            <h1 className="font-medium flex justify-between items-center">
              Shopping Cart{" "}
              <span className="text-sm text-gray-600 font-medium ">$78</span>{" "}
            </h1>
            {/* Product Name And Description */}
            <div className=" flex flex-row gap-3">
              <div className="relative w-full">
                <Image
                  src="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  sizes="100%"
                  className=" w-3/2 h-3/2 object-cover rounded-md"
                />
              </div>
              <div className="grid grid-cols-1 w-full ">
                <div className="grid grid-cols-1 gap-1 h-auto">
                  <h1 className="">Product Name</h1>
                  <p className="text-sm">Stock</p>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-gray-500 text-xs">Qty</span>
                    <span className="text-blue-700 text-xs cursor-pointer">
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing Part */}
          <div className="downpart flex flex-col justify-between gap-2">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">Subtotal</p>
              <p className="font-medium">$45</p>
            </div>
            <p className="text-left text-sm text-gray-500">
              Shipping and Taxes calculated at checkout
            </p>
            <div className="flex justify-between items-center">
              <button className="px-2 py-1 border border-black bg-white rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-sm">
                View Cart
              </button>
              <button className="px-2 text-white py-1 border border-white bg-black rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out  text-sm ">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
