import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, RegisterCar } from "./module";


const Routess = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register_car" element={<RegisterCar/>} />
      </Routes>
    </Router>
  );
};

export default Routess;