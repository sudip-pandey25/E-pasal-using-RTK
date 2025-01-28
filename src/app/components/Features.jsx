import React from "react";
import { FaTruck } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Features = () => {
  return (
    <div className="bg-teal-600 rounded-md w-auto h-auto text-white">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  px-8 py-10">
        {/* Shipping */}
        <div className="grid grid-cols-1 gap-3 items-center text-center justify-center">
          <div className="flex flex-col gap-2 items-center">
            <FaTruck size={50} />
            <p className="font-semibold text-lg">Free shipping</p>
          </div>
          <p className="text-sm text-slate-200">
            You will love at great low prices
          </p>
        </div>
        {/* Payment */}
        <div className="grid grid-cols-1 gap-3 items-center text-center justify-center">
          <div className="flex flex-col gap-2 items-center">
            <RiSecurePaymentFill size={50} />
            <p className="font-semibold text-lg">Flexible Payment</p>
          </div>
          <p className="text-sm text-slate-200">
            Pay with multiple credit cards.
          </p>
        </div>
        {/* Online Support */}
        <div className="grid grid-cols-1 gap-3 items-center text-center justify-center">
          <div className="flex flex-col gap-2 items-center">
            <TfiHeadphoneAlt size={50} />
            <p className="font-semibold text-lg">Online Support</p>
          </div>
          <p className="text-sm text-slate-200">
            24 hours a days, 7 days a week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
