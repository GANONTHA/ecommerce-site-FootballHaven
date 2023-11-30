import React from "react";
import { Link } from "react-router-dom";
import { BOOTS } from "../data/Items";
import Product from "./Products/ProductJersey";
import Footer from "../components/Footer";

const Boots = () => {
  return (
    <div>
      <div className="items-menu">
        <Link to="/shop">All</Link>
        <Link to="/shop/boots">Boots</Link>
        <Link to="/shop/jerseys">Jerseys</Link>
        <Link to="/shop/balls">Balls</Link>
        <Link to="/shop/socks">Socks</Link>
        <Link to="/shop/gloves">Gloves</Link>
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
