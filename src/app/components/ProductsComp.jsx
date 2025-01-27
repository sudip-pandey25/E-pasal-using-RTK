"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ProductsComp = ({ products, limit = 4 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [products]);

  if (isLoading) {
    return (
      <div className="mt-12 flex justify-center items-center">
        <span className="text-gray-500 text-lg">Loading products...</span>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="mt-12 flex justify-center items-center">
        <span className="text-gray-500 text-lg">No products available.</span>
      </div>
    );
  }

  return (
    <div className="mt-12 flex gap-x-10 gap-y-16 justify-between flex-wrap">
      {products.slice(0, limit).map((product) => (
        <Link
          href={"/" + product.id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product.id}
        >
          <div className="relative w-full h-60">
            <Image
              src={product?.image}
              alt={product?.title || "Product Image"}
              fill
              sizes="25vw"
              className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />

            <Image
              src={product?.image}
              alt={product?.title || "Product Image"}
              fill
              sizes="25vw"
              className="absolute object-contain rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">
              {product?.title.length > 20
                ? product.title.slice(0, 20) + "..."
                : product.title}
            </span>
            <span className="font-semibold">${product.price}</span>
          </div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductsComp;
