import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { JERSEYS } from "../data/Items";
import Product from "./Products/ProductJersey";
import Footer from "../components/Footer";

const Jerseys = () => {
  return (
    <>
      <div className="items-menu">
        <Link to="/shop">All</Link>
        <Link to="/shop/boots">Boots</Link>
        <Link to="/shop/jerseys">Jerseys</Link>
        <Link to="/shop/balls">Balls</Link>
        <Link to="/shop/socks">Socks</Link>
        <Link to="/shop/gloves">Gloves</Link>
      </div>
      <div className="list">
        {JERSEYS.map((jersey) => (
          <Product item={jersey} key={jersey.id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Jerseys;
