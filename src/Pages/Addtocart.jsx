import React, { useEffect, useState } from "react";
import Carditem from "../components/Carditem";
import { useSelector } from "react-redux";
import BillSection from "../components/BillSection";

const Addtocart = () => {
  const item = useSelector((state) => state.itemdata.addinCart);
  const [grandTotal, setGrandtotal] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    totalQtyandAmount(item);
  }, [item]);

  const totalQtyandAmount = (item) => {
    setGrandtotal(item.reduce((a, i) => a + i.GrandTotal, 0));
    setTotalQty(item.reduce((a, i) => a + i.qty, 0));
  };

  let addcart = false;

  if (item.length !== 0) {
    addcart = true;
  } else {
    addcart = false;
  }

  return item.length === 0 ? (
    <h1 className="text-center text-6xl">No item added</h1>
  ) : (
    <div className="flex flex-col px-2 py-3 relative top-16">
      <div className="w-[50%] px-1">
        {item.map((item) => (
          <Carditem item={item} key={item.id} addcart={addcart} />
        ))}
      </div>
      <div className="w-[50%] px-2 py-1">
        <div className="w-full bg-pink-50 sticky top-7 mt-2 rounded-md shadow-lg flex flex-col items-center">
          <h3 className="pt-1 font-bold">Total Amount</h3>
          <div className="flex items-center w-full">
            <ol className="w-full flex flex-col items-center">
              <li className="flex justify-between w-full px-2 font-semibold overflow-hidden">
                <span className="w-[20%] truncate">S.No</span>
                <span className="w-[20%] truncate">Name</span>
                <span className="w-[25%] truncate pl-3">Qty,s</span>
                <span className="w-[20%] truncate">GST%</span>
                <span className="w-[20%] truncate">Total</span>
              </li>
              {item.map((item, i) => (
                <BillSection key={i} item={item} index={i} />
              ))}
              <li className="flex w-full justify-between px-2 border-t-2 border-black">
                {/* <span className="w-[10%] truncate font-mono pl-1 ml-3">
                
                </span> */}
                <span className="w-[35%] truncate font-mono pl-1 text-2xl font-bold ">
                 All Item Count :
                </span>
                <span className="w-[5%] truncate font-mono pl-1 text-2xl font-bold">
                  {totalQty}
                </span>
                <span className="w-[40%] truncate font-mono pl-6 text-2xl font-bold">
                  Total Amount:
                </span>
                <span className="w-[20%] font-mono truncate text-2xl font-bold">
                  {grandTotal}
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
