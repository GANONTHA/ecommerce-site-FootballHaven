import React from "react";
import { Link } from "react-router-dom";
import { BOOTS } from "../Items";
import Product from "./Products/ProductJersey";

const Boots = () => {
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
      <div className="list">
        {BOOTS.map((boot) => (
          <Product item={boot} key={boot.id} />
        ))}
      </div>
    </div>
  );
};

export default Boots;
