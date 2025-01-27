"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const CartModel = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const TotalPrice = useSelector((state) => state.cart.totalPrice);
  const TotalQuantity = useSelector((state) => state.totalQuantity);

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 w-max flex flex-col gap-6 z-20 ">
      {cartItems &&
        cartItems.map((items, index) => (
          <>
            <div className="grid grid-cols-1 gap-3">
              <h1 className="font-medium flex justify-between items-center">
                Shopping Cart{" "}
                <span className="text-sm text-gray-600 font-medium ">
                  ${items.price}
                </span>{" "}
              </h1>
              {/* Product Name And Description */}
              <div className=" flex flex-row gap-3">
                <div className="relative w-full">
                  <Image
                    src={items.imageUrl}
                    alt=""
                    fill
                    sizes="100%"
                    className=" w-3/2 h-3/2 object-contain rounded-md"
                  />
                </div>
                <div className="grid grid-cols-1 w-full ">
                  <div className="grid grid-cols-1 gap-1 h-auto">
                    <h1 className="">{items.name} </h1>
                    <p className="text-sm">Stock</p>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-gray-500 text-xs">
                        {items.quantity}
                      </span>
                      <span className="text-blue-700 text-xs cursor-pointer">
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pricing Part */}
          </>
        ))}
      <div className="downpart flex flex-col justify-between gap-2">
        <div className="flex flex-row justify-between items-center">
          <p className="font-semibold">Subtotal</p>
          <p className="font-medium">${TotalPrice}</p>
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
    </div>
  );
};

export default CartModel;
