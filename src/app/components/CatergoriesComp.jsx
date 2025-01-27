import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatergoriesComp = ({ categories, products }) => {
  return (
    <div className="mt-12 ">
      <div className="flex gap-x-10 gap-y-16 justify-between flex-wrap">
        {categories.map((category, index) => {
          const product = products.find(
            (product) => product.category === category
          );
          return (
            <Link
              href={`/list?cat=${category}`}
              className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
              key={index}
            >
              <div className="relative bg-slate-100 w-full h-60">
                <Image
                  src={product?.image}
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-contain"
                />
              </div>
              <h1 className="mt-2 font-light  text-xl tracking-wide">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CatergoriesComp;
