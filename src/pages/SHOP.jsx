import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/icons/search-icon.png";
import AllItems from "../components/AllItems";
import useScrollDirection from "../components/useScrollHook";

const SHOP = () => {
  const scrollDirection = useScrollDirection();
  return (
    <div className="shoper">
      <div
        className={`items-menu ${scrollDirection === "down" ? "hide" : "show"}`}
      >
        <Link to="/shop">All</Link>
        <Link to="/shop/boots">Boots</Link>
        <Link to="/shop/jerseys">Jerseys</Link>
        <Link to="/shop/balls">Balls</Link>
        <Link to="/shop/socks">Socks</Link>
        <Link to="/shop/gloves">Gloves</Link>
      </div>
      <div className="search-bar">
        <img
          src={searchIcon}
          alt="search-icon"
          width="30px"
          height="30px"
          id="search-icon"
        />
        <input type="search" placeholder="search" id="search" />
      </div>
      <div>
        <AllItems />
      </div>
    </div>
  );
};

export default SHOP;
