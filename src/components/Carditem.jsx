import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addDetail,
  addmoreItem,
  addtoCart,
  removemoreItem,
  removetoCart,
} from "../redux/itemSlice";
import { useNavigate } from "react-router-dom";

const Carditem = ({ item, addcart }) => {
  let Navigate = useNavigate();
  const dispatch = useDispatch();
  const check = useSelector((state) => state.itemdata.addinCart);
  const [isItem, setisItem] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [qty, setqty] = useState(0);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    checkGst(item);
    setTimeout(() => {
      checking(item);
    }, 10);
  }, [toggle]);

  const checkGst = (item) => {
    if (item.category === "women's clothing") {
      setCategory(18);
    } else if (item.category === "men's clothing") {
      setCategory(10);
    } else if (item.category === "jewelery") {
      setCategory(15);
    } else if (item.category === "electronics") {
      setCategory(8);
    }
  };

  const checking = (item) => {
    if (check.length > 0) {
      for (let i = 0; i <= check.length; i++) {
        if (item.id === check[i].id) {
          setisItem(false);
          setqty(check[i].qty);

          break;
        }
      }
    }
  };

  const addCart = (item) => {
    if (isItem) {
      setqty(qty + 1);
      let newObj = { ...item };
      newObj.qty = 1;
      newObj.GST = category;
      newObj.GrandTotal = (item.price / 100) * category + item.price;
      dispatch(addtoCart(newObj));
      setToggle(!toggle);
    } else {
      setqty(qty + 1);

      dispatch(addmoreItem({ item, qty, category }));
      setToggle(!toggle);
    }
  };

  const oneMoreadd = (item) => {
    setqty(qty + 1);

    dispatch(addmoreItem({ item, qty, category }));
    setToggle(!toggle);
  };

  const removeCart = (id) => {
    dispatch(removetoCart(id));
  };

  const minimizeItemqty = (item) => {
    setqty(qty - 1);
    let newItem = { ...item };
    newItem.qty = item.qty - 1;
    newItem.GrandTotal =
      ((item.price / 100) * item.GST + item.price) * newItem.qty;
    dispatch(removemoreItem(newItem));
  };

  const detailes = (item) => {
    dispatch(addDetail(item));
    Navigate("/detailes");
  };

  return !addcart ? (
    <div
      className="flex flex-col w-full sm:w-full
     bg-white rounded-lg md:w-full xl:w-full shadow-2xl"
    >
      <div className="p-1.5 flex justify-center items-center mx-auto w-2/5 h-[230px]">
        <img src={item.image} alt="" className="h-[180px] " />
      </div>
      <div className="flex flex-col p-2 justify-around">
        <h4 className="text-xl truncate">{item.title}</h4>
        <Typography variant="p">
          rate:{item.rating.rate}, count:{item.rating.count}
        </Typography>
        <Typography variant="h6">price : ${item.price}</Typography>

        <div className="flex flex-col justify-around">
          <button
            className="bg-sky-600 rounded-md p-2 mt-0.5 text-white font-bold hover:text-black hover:bg-sky-500"
            onClick={() => detailes(item)}
          >
            Shop now
          </button>
          <button
            className="bg-yellow-500 rounded-md p-2 mt-0.5 text-white font-bold hover:bg-yellow-400 hover:text-black"
            onClick={() => addCart(item)}
          >
            Add to Cart [{qty}]
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex w-full h-[100px] mt-3 rounded-md bg-white p-1 shadow-xl sm:h-32 md:h-44 lg:h-56">
      <div className="w-[100px] flex items-center justify-center p-2 sm:w-[150px] md:w-[195px] lg:w-[250px]">
        <img className="h-full" src={item.image} alt="" />
      </div>
      <div className="w-full p-1 overflow-hidden sm:py-3">
        <div className="overflow-hidden flex flex-col justify-between h-full">
          <h3 className="text-[11px] font-semibold truncate sm:text-[15px] md:text-[20px] lg:text-3xl xl:text-4xl">
            {item.title}
          </h3>
          <h3 className="text-[13px] font-semibold sm:text-[15px] md:text-[20px] ">
            ${item.price}
          </h3>

          <div className="flex items-center justify-between w-[40%] ">
            <button
              className="text-[10px] font-semibold bg-yellow-400 px-2 py-0 rounded-sm sm:text-[15px] md:text-[20px]"
              onClick={() => oneMoreadd(item)}
            >
              +
            </button>
            <h3 className="text-[10px] font-semibold sm:text-[15px] md:text-[20px]">
              QTY:{item.qty}
            </h3>
            <button
              className="text-[10px] font-semibold bg-yellow-400 px-2 rounded-sm sm:text-[15px] md:text-[20px]"
              onClick={() => minimizeItemqty(item)}
            >
              -
            </button>
          </div>
          <div className="flex w-full items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-600 rounded-md w-[40%] mx-auto p-1 text-[10px] sm:text-[17px] sm:font-semibold sm:px-2 text-white shadow-3xl sm:w-[40%] sm:p-1 "
              onClick={() => removeCart(item.id)}
            >
              Remove to Cart
            </button>
            <button
              className="bg-sky-600 rounded-md w-[40%] mt-0.5 text-white font-bold p-1.5 hover:text-black hover:bg-sky-500"
              onClick={() => detailes(item)}
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carditem;
