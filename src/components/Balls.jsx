import React from "react";
import { NavLink } from "react-router-dom";
import { BALLS } from "../data/Items";
import ProductBall from "../components/Products/ProductBall";
import Footer from "../components/Footer";

const Balls = () => {
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
        {BALLS.map((ball) => (
          <ProductBall item={ball} key={ball.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Balls;
