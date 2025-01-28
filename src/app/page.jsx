"use client";
import { useEffect, useState } from "react";
import CatergoriesComp from "./components/CatergoriesComp.jsx";
import ProductsComp from "./components/ProductsComp.jsx";
import Slider from "./components/Slider.jsx";
import Features from "./components/Features.jsx";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const url = "https://fakestoreapi.com/products";
  const categoriesUrl = "https://fakestoreapi.com/products/categories";

  //Fetch Products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    getProducts();
  }, [url]);

  //Fetch Categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(categoriesUrl);
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
      } finally {
        setIsLoadingCategories(false);
      }
    };
    getCategories();
  }, [categoriesUrl]);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductsComp products={products} />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">Categories</h1>
        {isLoadingCategories ? (
          <p className="text-center text-gray-500">Loading categories...</p>
        ) : (
          <CatergoriesComp categories={categories} products={products} />
        )}
      </div>
      {/* Features part */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Features />
      </div>
    </div>
  );
};

export default HomePage;
