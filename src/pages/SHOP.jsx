import React from "react";
import { NavLink } from "react-router-dom";
import searchIcon from "../assets/icons/search-icon.png";
import AllItems from "../components/AllItems";
import useScrollDirection from "../components/useScrollHook";
import { useProductProvider } from "../Provider/ProductProvider";
import { useRef, useState, useEffect } from "react";

const SHOP = () => {
  const scrollDirection = useScrollDirection();
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const { search } = useProductProvider();

  //handle click
  const handleClick = (e) => {
    search(inputRef.current.value);
  };
  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleClick();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  return (
    <div className="shoper">
      <div
        className={`items-menu ${scrollDirection === "down" ? "hide" : "show"}`}
      >
        <NavLink to="/shop">All</NavLink>
        <NavLink to="/boots">Boots</NavLink>
        <NavLink to="/jerseys">Jerseys</NavLink>
        <NavLink to="/balls">Balls</NavLink>
        <NavLink to="/socks">Socks</NavLink>
        <NavLink to="/gloves">Gloves</NavLink>
        <div className="search-bar">
          <div onClick={handleClick} className="search-icon">
            <img
              src={searchIcon}
              alt="search-icon"
              width="25px"
              height="25px"
              id="search-icon"
            />
          </div>
          <input
            value={text}
            type="search"
            placeholder="search by name, color, price"
            id="search"
            ref={inputRef}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <div>
        <AllItems />
      </div>
    </div>
  );
};

export default SHOP;
