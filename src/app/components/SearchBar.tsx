"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`list?name=${name}`);
    }
  };

  return (
    <form className="flex gap-1" onSubmit={handleSearch}>
      <div className="relative">
        <input
          name="name"
          type="text"
          placeholder="search"
          className=" border rounded-lg border-gray-100 shadow-sm p-2 text-sm focus:outline-blue-600 "
        />
        <button className=" absolute right-6 top-3">
          {" "}
          <Image src="/search.png" alt="search icon" width={16} height={16} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
