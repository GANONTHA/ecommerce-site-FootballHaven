import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const SHOP = () => {
  return (
    <div>
      <div className="items-menu">
        <Link to="/shop">All</Link>
        <Link to="/shop/jerseys">Jerseys</Link>
        <Link to="/shop/boots">Boots</Link>
        <Link to="/shop/balls">Balls</Link>
        <Link to="/shop/socks">Socks</Link>
        <Link to="/shop/gloves">Gloves</Link>
      </div>
      <Routes></Routes>
    </div>
  );
};

export default SHOP;
