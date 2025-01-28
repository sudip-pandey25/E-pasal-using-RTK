"use client";

import React, { Suspense, useEffect, useState } from "react";
import Filter from "../components/Filter.jsx";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

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

  const searchResults = filteredProducts.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  return (
    <Suspense>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* Filter Part */}
        <Filter setSearchQuery={setSearchQuery} setPriceRange={setPriceRange} />
        <ProductsComp products={searchResults} limit={100} />
      </div>
    </Suspense>
  );
};

export default page;
