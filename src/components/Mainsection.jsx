import { Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carditem from "./Carditem";
import { fakeData } from "../service/getItem";
import { addtoItem } from "../redux/itemSlice";

const Mainsection = () => {
  const allItem = useSelector((state) => state.itemdata.allItem);
  const dispatch = useDispatch();

  const handleapi = async () => {
    const item = await fakeData();
    dispatch(addtoItem(item));
  };

  useEffect(() => {
    handleapi();
  }, []);

  return (
    <div>
      {allItem ? (
        <div>
          <div className="">
            <img
              src="https://img.freepik.com/premium-psd/social-media-banner-design-with-3d-rendering-shopping-instrument_351527-1226.jpg?w=1060"
              alt=""
              className="w-full h-full overflow-hidden"
            />
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/21ef97173319307.Y3JvcCwxOTIwLDE1MDEsMCw2Ng.jpg"
              alt=""
              className="w-full h-full overflow-hidden"
            />
          </div>
          <div>
            <Typography variant="h2" align="center" className="text-black">
              Try your favourite for free
            </Typography>
            <Typography variant="h2" align="center" className="text-black">
              item for latest trends
            </Typography>
          </div>
          {/* <div className="bg-yellow-300 w-[1250px]">ekjfe</div> */}

          <div className="p-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-1 xl:grid-cols-4 px-8 ">
            {allItem.map((item) => {
              return <Carditem item={item} key={item.id} />;
            })}
          </div>
        </div>
      ) : (
        <Typography variant="h3" align="center" sx={{ paddingTop: "30px" }}>
          Loading
        </Typography>
      )}
    </div>
  );
};

export default Mainsection;
