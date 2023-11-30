import React from "react";
import { Link } from "react-router-dom";
import { GLOVES } from "../data/Items";
import Product from "../components/Products/ProductJersey";
import Footer from "./Footer";

const Gloves = () => {
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
