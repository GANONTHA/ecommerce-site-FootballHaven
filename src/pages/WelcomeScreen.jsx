import React from "react";
import "../style.css";
import banner from "../assets/images/banner-image.png";
import ball from "../assets/images/balls/ball1.png";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SHOP from "./SHOP";
import Cart from "./Cart";
import About from "./About";
import Contacts from "./Contacts";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/shop");
  }
  return (
    <div className="heading">
      <div className="welcome-message">
        <div className="heading-text">
          <div className="heading-text-1">
            <h1>Shopping Makes Really Easy!</h1>{" "}
            <p>
              FootbBall Haven makes shopping easy for you. You are only a few
              clicks away from getting your dream football equipment
            </p>
            <button onClick={() => navigateHome()}>Shop Now!</button>
          </div>
          <div className="heading-text-2">
            <p>footballhaven.com</p>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <img src={banner} alt="banner image" height="450px" />
        <img src={ball} alt="ball" id="ball" />
      </div>
    </div>
  );
};

export default WelcomeScreen;
