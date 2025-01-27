"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Sale Upto 50%",
    description: "Mega Sale is Happening in Your town",
    img: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-red-50",
  },
  {
    id: 1,
    title: "Sale Upto 50%",
    description: "Mega Sale is Happening in Your town",
    img: "https://images.pexels.com/photos/20036266/pexels-photo-20036266/free-photo-of-a-living-room-with-a-red-couch-and-a-coffee-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-red-50",
  },
  {
    id: 1,
    title: "Sale Upto 50%",
    description: "Mega Sale is Happening in Your town",
    img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-red-50",
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden ">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row `}
            key={slide.id}
          >
            {/* textpart */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col gap-8 items-center justify-center 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-medium ">
                {slide.title}
              </h1>
              <Link href={`/list?cat=all-products`}>
                <button className="rounded-md text-white bg-gray-800 px-3 py-2 text-xl">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* ImagePart */}
            <div className="relative h-1/2 xl:w-1/2 xl:h-full">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4 ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ring-1 ring-blue-600 cursor-pointer flex items-center justify-center
            ${
              current === index ? "scale-150" : ""
            } transition-all duration-300 ease-in-out
            `}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-950 rounded-full "></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
