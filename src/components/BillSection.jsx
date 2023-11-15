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
      <span className="w-[5%] truncate font-mono ">{index + 1}</span>
      <span className="w-[30%] truncate font-mono ">{item.title}</span>
      <span className="w-[20%] truncate font-mono ">{item.price}</span>
      <span className="w-[15%] truncate font-mono">{item.qty}</span>
      <span className="w-[15%] truncate font-mono ">{item.GST}%</span>
      <span className="w-[15%] font-mono pl-1 truncate">{item.GrandTotal}</span>
    </li>
  );
};

export default BillSection;
