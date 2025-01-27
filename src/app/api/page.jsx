"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reduxtoolKit/Product/slice";
import { fetchCategory } from "../reduxtoolKit/categories/slice";

const page = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const category = useSelector((state) => state.category.data);
  console.log(category);

  useEffect(() => {
    dispatch(fetchCategory("jewelery"));
  }, [dispatch]);

  return (
    <div>
      {category &&
        category.map((datas) => <h1 key={datas.id}>{datas.title}</h1>)}
    </div>
  );
};

export default page;
