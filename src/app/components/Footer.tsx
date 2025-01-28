import React from "react";

function Footer() {
  return (
    <footer className="h-auto w-auto bg-[#F5EBDA] mt-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* Contact section */}
        <div className="text-gray-800 flex flex-col gap-2">
          <p className="font-bold text-lg text-black">Company</p>
          <div className="font-medium text-base flex flex-col gap-2 ">
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Products</p>
          </div>
        </div>
        {/* service section */}
        <div className="text-gray-800 flex flex-col gap-2">
          <p className="font-bold text-lg text-black">Company</p>
          <div className="font-medium text-base flex flex-col gap-2 ">
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Products</p>
          </div>
        </div>
        {/* Address section */}
        <div className="text-gray-800 flex flex-col gap-2">
          <p className="font-bold text-lg text-black">Company</p>
          <div className="font-medium text-base flex flex-col gap-2 ">
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Products</p>
          </div>
        </div>
        {/* Social media section */}
        <div className="text-gray-800 flex flex-col gap-2">
          <p className="font-bold text-lg text-black">Company</p>
          <div className="font-medium text-base flex flex-col gap-2 ">
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Products</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full h-full text-center text-gray-700">
        <p className="py-4">
          @Copyright 2024 E-Pasal Pvt.Ltd, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
