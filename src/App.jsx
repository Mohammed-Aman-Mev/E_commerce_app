import React from "react";
import Navbar from "./components/Navbar.jsx";
import Mainsection from "./components/Mainsection.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagenotfound from "./Pages/Pagenotfound.jsx";
import Addtocart from "./Pages/Addtocart.jsx";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="*" element={<Pagenotfound />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Mainsection />} />
      <Route path="/addtocart" element={<Addtocart />} />
    </Routes>
  </BrowserRouter>
);
export default App;
