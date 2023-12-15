import React from "react";
import "../style.css";
import { NavLink } from "react-router-dom";
import { JERSEYS } from "../data/Items";
import Product from "./Products/ProductJersey";
import Footer from "../components/Footer";

const Jerseys = () => {
  return (
    <>
      <div className="items-menu">
        <NavLink to="/shop">All</NavLink>
        <NavLink to="/boots">Boots</NavLink>
        <NavLink to="/jerseys">Jerseys</NavLink>
        <NavLink to="/balls">Balls</NavLink>
        <NavLink to="/socks">Socks</NavLink>
        <NavLink to="/gloves">Gloves</NavLink>
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
