"use client";

import React, { useEffect, useState } from "react";
import ProductSlider from "../components/ProductSlider.jsx";
import ProductsDescription from "../components/ProductsDescription.jsx";
import { useParams } from "next/navigation.js";

const Page = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <ProductSlider product={product} />
      <ProductsDescription product={product} />
    </div>
  );
};

export default Page;
