import React from "react";
import { NavLink } from "react-router-dom";
import { SOCKS } from "../data/Items";
import Product from "../components/Products/ProductJersey";
import Footer from "../components/Footer";

const Socks = () => {
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
        {SOCKS.map((sock) => (
          <Product item={sock} key={sock.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Socks;
