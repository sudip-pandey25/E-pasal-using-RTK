"use client";

import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import ProductsComp from "../components/ProductsComp";
import { useParams, useSearchParams } from "next/navigation";

const page = () => {
  const searchParam = useSearchParams();
  const cat = searchParam.get("cat");
  const decodedCat = decodeURIComponent(cat || "");

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchCatProduct = async () => {
      if (cat === "all-products") {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/`);
          const data = await res.json();
          setFilteredProducts(data);
        } catch (error) {
          console.error("Error fetchin", error);
        } finally {
        }
      } else {
        try {
          const res = await fetch(
            `https://fakestoreapi.com/products/category/${decodedCat}`
          );
          const data = await res.json();
          setFilteredProducts(data);
        } catch (error) {
          console.error("Error fetchin", error);
        } finally {
        }
      }
    };

    fetchCatProduct();
  }, [cat]);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Filter Part */}
      <Filter />
      <ProductsComp products={filteredProducts} limit={100} />
    </div>
  );
};

export default page;
