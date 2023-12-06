import React from "react";
import { FacebookLogo, LinkedinLogo, InstagramLogo } from "phosphor-react";

function handleSubmit(e) {
  e.preventDefault();
}
const Contacts = () => {
  return (
    <div className="contacts">
      <div className="title">
        <h1>GET IN TOUCH WITH US</h1>
      </div>
      <div className="contact-us">
        <div className="send-a-request">
          <h3>Send a Request</h3>

          <form onSubmit={handleSubmit}>
            <div className="first-name">
              <label htmlFor="first-name">First Name:</label>
              <input type="text" id="first-name" placeholder="e.g:Delta" />
            </div>
            <div className="last-name">
              <label htmlFor="last-name">Last Name:</label>
              <input type="text" id="last-name" placeholder="Harris" />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone number:</label>
              <input type="text" id="phone" placeholder="+1 222 333 444" />
            </div>
            <div className="email-address">
              <label htmlFor="email-address">Email:</label>
              <input
                type="text"
                id="email-address"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="message-content">
              <label htmlFor="-content">Message:</label>
              <textarea
                type="text"
                placeholder="Enter your message here..."
                id="message-content"
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
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
              <FacebookLogo size={40} color="#605959" />
              <LinkedinLogo size={40} color="#605959" />
              <InstagramLogo size={40} color="#605959" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
