import axios from "axios";

// let process = Node.process;

// export const getData = async () => {
//   //   const axios = require("axios");

//   // const options = {
//   //   method: "GET",
//   //   url: "https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword",
//   //   params: {
//   //     keyword: "Lego Star Wars",
//   //     page: "1",
//   //     sortBy: "best_match",
//   //   },
//   //   headers: {
//   //     "X-RapidAPI-Key": "b4c158e640mshee34e780b75d963p192de0jsn7f38d0060d96",
//   //     "X-RapidAPI-Host": "axesso-walmart-data-service.p.rapidapi.com",
//   //   },
//   // };

//   // try {
//   //   const response = await axios.request(options);
//   //   console.log(response.data);
//   // } catch (error) {
//   //   console.error(error);
//   // }
// };

export const fakeData = async () => {
  const data = await axios.get("https://fakestoreapi.com/products");
  // console.log(data.data);
  return data.data;
};

// const BASE_URL =
//   "https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product";

// const options = {
//   params: {
//     url: "https://www.walmart.com/ip/Media-Remote-for-PlayStation-5/381848762",
//   },
//   headers: {
//     "X-RapidAPI-Key": "b4c158e640mshee34e780b75d963p192de0jsn7f38d0060d96",
//     "X-RapidAPI-Host": "axesso-walmart-data-service.p.rapidapi.com",
//   },
// };

// export const newFetch = async () => {
//   const response = await axios.get(`${BASE_URL}`, options);
//   console.log("working")
//   console.log(response);
// };
