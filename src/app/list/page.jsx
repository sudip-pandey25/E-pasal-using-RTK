"use client";

import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import ProductsComp from "../components/ProductsComp";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reduxtoolKit/Product/slice";
import { fetchCategory } from "../reduxtoolKit/categories/slice";

const page = () => {
  const searchParam = useSearchParams();
  const cat = searchParam.get("cat");
  const decodedCat = decodeURIComponent(cat || "");
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.data);
  const product = useSelector((state) => state.products.data);
  console.log(category);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (cat === "all-products") {
      dispatch(fetchProducts());
    } else {
      dispatch(fetchCategory(decodedCat));
    }
  }, [dispatch, cat, decodedCat]);

  useEffect(() => {
    if (cat === "all-products") {
      setFilteredProducts(product);
    } else {
      setFilteredProducts(category);
    }
  }, [product, category, cat]);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Filter Part */}
      <Filter />
      <ProductsComp products={filteredProducts} limit={100} />
    </div>
  );
};

export default page;
