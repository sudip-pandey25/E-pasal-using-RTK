import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between w-full">
      <div className="flex gap-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[100%]">
          <div className="col-span-1">
            <div>
              <h1 className="text-lg">Price</h1>
            </div>
            <div>
              <select
                id="price"
                className="bg-gray-50 border border-[#ebebed]  outline-none border-r-8 border-transparent text-md rounded-lg block w-full p-2.5"
              >
                <option value="-1">Select</option>
                <option value="1000">0 - $1000</option>
                <option value="2000">$1000 - $2000</option>
                <option value="2500">$2500 - More</option>
              </select>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-lg">Search</h1>
            </div>
            <div className="flex gap-2">
              <input className="bg-gray-50 border border-[#ebebed] outline-none text-md rounded-lg block w-full p-2.5" />
              <button
                className="border w-1/2 border-[#ebebed] px-5 py-2 rounded-lg p-2.5"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
