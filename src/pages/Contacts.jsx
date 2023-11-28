import React from "react";
import facebook from "../assets/images/socials/facebook.png";
import linkedIn from "../assets/images/socials/linkedin.png";
import email from "../assets/images/socials/email.png";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="title">
        <h1>GET IN TOUCH WITH US</h1>
      </div>
      <div className="contact-us">
        <div className="social">
          <h3>Phone numbers</h3>
          <p className="phone-numbers">
            You can contact us via our phone numbers:
            <span>+109293939</span>
            <span>+109293939</span>
          </p>
          <h3>Social Media</h3>
          <p className="social-media">
            Follow us on social media
            <span>
              {" "}
              <img
                src={facebook}
                alt="facebook"
                height="45px"
                width="45px"
              />{" "}
              <img src={linkedIn} alt="linkedIn" height="45px" width="45px" />{" "}
              <img src={email} alt="email" height="45px" width="45px" />{" "}
            </span>
          </p>
        </div>
        <div className="send-a-request">
          <h3>Send a Request</h3>

          <form>
            <div className="first-name">
              <label htmlFor="first-name">First Name:</label>
              <input type="text" id="first-name" />
            </div>
            <div className="last-name">
              <label htmlFor="last-name">Last Name:</label>
              <input type="text" id="last-name" />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone number:</label>
              <input type="text" id="phone" />
            </div>
            <div className="email-address">
              <label htmlFor="email-address">Email:</label>
              <input type="text" id="email-address" />
            </div>
            <div className="message-content">
              <label htmlFor="-content">Message:</label>
              <textarea type="text" id="message-content" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
