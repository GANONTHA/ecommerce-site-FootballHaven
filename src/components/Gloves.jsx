import React from "react";
import { NavLink } from "react-router-dom";
import { GLOVES } from "../data/Items";
import Product from "../components/Products/ProductJersey";
import Footer from "./Footer";

const Gloves = () => {
  return (
    <div>
      <div className="items-menu">
        <NavLink to="/shop">All</NavLink>
        <NavLink to="/boots">Boots</NavLink>
        <NavLink to="/jerseys">Jerseys</NavLink>
        <NavLink to="/balls">Balls</NavLink>
        <NavLink to="/socks">Socks</NavLink>
        <NavLink to="/gloves">Gloves</NavLink>
      </div>
      <div className="list">
        {GLOVES.map((glove) => (
          <Product item={glove} key={glove.id} />
        ))}
      </div>
      <Footer>
        <Footer />
      </Footer>
    </div>
  );
};

export default Gloves;
