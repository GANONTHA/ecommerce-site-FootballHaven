import React from "react";
import { NavLink } from "react-router-dom";
import { BOOTS } from "../data/Items";
import Product from "./Products/ProductJersey";
import Footer from "../components/Footer";

const Boots = () => {
  return (
    <div className="">
      <div className="items-menu">
        <NavLink to="/shop">All</NavLink>
        <NavLink to="/boots">Boots</NavLink>
        <NavLink to="/jerseys">Jerseys</NavLink>
        <NavLink to="/balls">Balls</NavLink>
        <NavLink to="/socks">Socks</NavLink>
        <NavLink to="/gloves">Gloves</NavLink>
      </div>
      <div className="list">
        {BOOTS.map((boot) => (
          <Product item={boot} key={boot.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Boots;
