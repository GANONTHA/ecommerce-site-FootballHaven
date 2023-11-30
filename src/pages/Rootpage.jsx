import React from "react";
import SHOP from "./SHOP";
import Contacts from "./Contacts";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "../style.css";
import shoppingCart from "../assets/icons/shopping-cart.png";
import logo from "../assets/logo/footballhaven-logo.png";

import Balls from "../components/Balls";
import Jerseys from "../components/Jerseys";
import Boots from "../components/Boots";
import Gloves from "../components/Gloves";
import Socks from "../components/Socks";
import All from "../components/AllItems";
import AllItems from "../components/AllItems";
import { useProductProvider } from "../Provider/ProductProvider";

const Rootpage = () => {
  const { cart } = useProductProvider();
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/");
  }
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            height="128px"
            width="220px"
            onClick={() => navigateHome()}
          />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/cart">
            <div className="cart">
              {cart.length > 0 && <h6> {cart.length}</h6>}
              <img
                src={shoppingCart}
                alt="shoppingCart"
                height="30px"
                width="30px"
              />
              <p>Cart</p>
            </div>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<SHOP />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/shop/jerseys" element={<Jerseys />}></Route>
        <Route path="/shop/boots" element={<Boots />}></Route>
        <Route path="/shop/balls" element={<Balls />}></Route>
        <Route path="/shop/socks" element={<Socks />}></Route>
        <Route path="/shop/gloves" element={<Gloves />}></Route>
        <Route path="/shop" element={<AllItems />}></Route>
      </Routes>
    </div>
  );
};

export default Rootpage;
