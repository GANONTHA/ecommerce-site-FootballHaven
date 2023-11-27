import React from "react";
import { Link } from "react-router-dom";

const Gloves = () => {
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
      <h1>Gloves</h1>
    </div>
  );
};

export default Gloves;
