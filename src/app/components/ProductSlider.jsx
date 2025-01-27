"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/2328051/pexels-photo-2328051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    url: "https://images.pexels.com/photos/769728/pexels-photo-769728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    url: "https://images.pexels.com/photos/1510529/pexels-photo-1510529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    url: "https://images.pexels.com/photos/3029796/pexels-photo-3029796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProductSlider = ({ product }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col col-span-1">
      <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt=""
          fill
          sizes="50vw"
          className="object-contain"
        />
      </div>
      <div className="relative flex flex-row gap-3 items-center justify-between cursor-pointer ">
        {images.map((img, index) => (
          <div
            className="w-1/5 h-20 relative mt-2"
            key={img.id}
            onClick={() => setIndex(index)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="50vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
