import React, { useEffect, useState } from "react";

const BillSection = ({ item, index }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    billTotal(item);
  }, [item]);

  const billTotal = (item) => {
    let price = item.price / 100;
    price = price * item.GST;
    price = price + item.price;
    price = price * item.qty;
    setTotal(price);
  };

  return (
    <li className="flex w-full justify-between px-2">
      <span className="w-[10%] truncate font-mono pl-1 ml-3">{index + 1}</span>
      <span className="w-[25%] truncate font-mono pl-1">{item.title}</span>
      <span className="w-[10%] truncate font-mono pl-1 ">{item.qty}</span>
      <span className="w-[20%] truncate font-mono pl-6 ">{item.GST}%</span>
      <span className="w-[20%] font-mono pl-1 truncate">{item.GrandTotal}</span>
    </li>
  );
};

export default BillSection;
