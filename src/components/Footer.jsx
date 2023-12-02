import React from "react";
import {
  FacebookLogo,
  WhatsappLogo,
  TwitterLogo,
  InstagramLogo,
  GithubLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="title">Football Haven</div>
      <div className="first-row">
        <div className="first-row-services">
          <div className="first-column">
            <ul>
              <li>Jersey</li>
              <li>Boots</li>
              <li>Balls</li>
            </ul>
          </div>
          <div className="second-column">
            <ul>
              <li>All</li>
              <li>Gloves</li>
              <li>Socks</li>
            </ul>
          </div>
        </div>
        <div className="first-row-newsletter">
          <div className="row-one">
            <p>
              Sign up to our NewsLetter to receive weekly information about our
              new products and services
            </p>
          </div>
          <div className="row-two">
            <div className="subscribe-form">
              <input type="text" placeholder="your email" />
              <button>SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="second-row">
        <div className="second-row-row-one">
          <ul>
            <li>Terms & conditions</li>
            <li>Privacy & Policies</li>
            <li>Education purpose</li>
            <li>No for Marketing</li>
          </ul>
        </div>
        <div className="second-row-row-two">
          <div className="socials">
            <li>
              {" "}
              <FacebookLogo size={30} color="#605959" />{" "}
            </li>
            <li>
              {" "}
              <TwitterLogo size={30} color="#605959" />{" "}
            </li>
            <li>
              {" "}
              <InstagramLogo size={30} color="#605959" />
            </li>
            <li>
              {" "}
              <WhatsappLogo size={30} color="#605959" />
            </li>
            <li>
              {" "}
              <GithubLogo size={30} color="#605959" />
            </li>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>FootBall Haven, &#169; All Rights Reserved (Education Puspose)</p>
      </div>
    </div>
  );
};

export default Footer;
