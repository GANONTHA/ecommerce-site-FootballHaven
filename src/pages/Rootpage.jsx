import React from "react";
import { useState, useEffect, useRef } from "react";
import SHOP from "./SHOP";
import Contacts from "./Contacts";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import "../style.css";
import shoppingCart from "../assets/icons/shopping-cart.png";
import favoriteIcon from "../assets/icons/favorite-icon.png";
import logo from "../assets/logo/footballhaven-logo.png";
import Balls from "../components/Balls";
import Jerseys from "../components/Jerseys";
import Boots from "../components/Boots";
import Gloves from "../components/Gloves";
import Socks from "../components/Socks";
import AllItems from "../components/AllItems";
import { useProductProvider } from "../Provider/ProductProvider";
import burgerIcon from "../assets/icons/burger-menu.png";
import Favorite from "./Favorite";

const Rootpage = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const { cart, favorite } = useProductProvider();
  const navigate = useNavigate();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  //navigate home

  function navigateHome() {
    navigate("/");
  }
  //navigate to favorite page
  function navigateFavorite() {
    navigate("/favorite");
  }
  //navigate to Cart
  function navigateCart() {
    navigate("/cart");
  }
  return (
    <div>
      <nav className="nav-bar" ref={menuRef}>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            height="128px"
            width="220px"
            onClick={() => navigateHome()}
          />
        </div>
        <div className="nav-links " id={open ? "menu-open" : ""}>
          <NavLink
            to="/"
            className="desktop-link"
            onClick={() => {
              setOpen(!open);
            }}
            data-testid="home"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="desktop-link"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="desktop-link"
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contacts"
            className="desktop-link"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Contacts
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="cart">
              <p className="desktop-link">Cart</p>
            </div>
          </NavLink>
        </div>
        <div className="burger">
          <div className="mobile-mode">{cart.length > 0 && <h6> .</h6>}</div>
          <div className="desktop-mode">
            {cart.length > 0 && <h6> {cart.length}</h6>}
            {favorite.length > 0 && <h5> {favorite.length}</h5>}
          </div>
          <div className="icons">
            <img
              src={favoriteIcon}
              alt="wish list icon"
              height="30px"
              width="30px"
              className="favorite-list-icon"
              onClick={() => navigateFavorite()}
            />
            <img
              src={shoppingCart}
              alt="shoppingCart"
              height="30px"
              width="30px"
              className="shopping-cart-icon"
              onClick={() => navigateCart()}
            />
          </div>
        </div>
        <div
          className="burger-icon"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={burgerIcon} alt="burger-icon" height="45px" width="40px" />
        </div>
        <div
          className="close-menu"
          id={open ? "close" : ""}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span></span>
          <span></span>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<SHOP />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/jerseys" element={<Jerseys />}></Route>
        <Route path="/boots" element={<Boots />}></Route>
        <Route path="/balls" element={<Balls />}></Route>
        <Route path="/socks" element={<Socks />}></Route>
        <Route path="/gloves" element={<Gloves />}></Route>
        <Route path="/shop" element={<AllItems />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </div>
  );
};

export default Rootpage;
