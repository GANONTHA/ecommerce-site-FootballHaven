import React from "react";
import { Link } from "react-router-dom";
import { BALLS } from "../data/Items";
import ProductBall from "../components/Products/ProductBall";
import Footer from "../components/Footer";

const Balls = () => {
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
        {BALLS.map((ball) => (
          <ProductBall item={ball} key={ball.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Balls;
