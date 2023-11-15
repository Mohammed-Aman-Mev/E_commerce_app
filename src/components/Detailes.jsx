import React from "react";
import { useSelector } from "react-redux";

const Detailes = () => {
  const detail = useSelector((state) => state.itemdata.detail);
  // const detail = undefined;

  return !detail ? (
    <h1 className="text-center text-xl sm:text-6xl sm:pt-8">Go Main Page,No data Found</h1>
  ) : (
    <div className="w-full h-[100%] flex items-center justify-center p-3 sm:p-10 bg-slate-100">
      <div className="flex sm:p-16 h-full w-full shadow-2xl rounded-2xl bg-white overflow-hidden flex-col sm:flex sm:flex-row sm:justify-between sm:items-center">
        <div className="p-2 w-full h-full flex items-center justify-center sm:w-[450px] sm:h-full ">
          <img className="mx-auto h-[400px]" src={detail.image} alt="" />
        </div>
        <div className="w-full p-1.5  sm:w-[50%]">
          <h2 className="text-3xl truncate font-semibold">{detail.title}</h2>
          <h2 className="text-md">{detail.description}</h2>
          <h2 className="text-md text-3xl flex font-bold">
            <span className="text-sm font-semibold">$</span>
            {detail.price}/-
          </h2>
          <h2 className="font-semibold flex items-center">
            Rating:
            <span className="font-bold text-lg">{detail.rating.rate}</span>
          </h2>
          <h2 className="font-semibold flex items-center">
            Stock:
            <span className="font-bold text-lg">{detail.rating.count}</span>
          </h2>
          <div className="flex w-[100%] sm:w-[70%]">
            <button className="bg-emerald-700 text-white p-1.5 font-bold rounded-md w-[30%] hover:bg-emerald-600 hover:rounded-lg">
              Add Cart
            </button>
            <button className="bg-orange-600 text-white p-1.5 font-bold rounded-md ml-1 w-[30%] hover:bg-orange-500 hover:rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailes;
