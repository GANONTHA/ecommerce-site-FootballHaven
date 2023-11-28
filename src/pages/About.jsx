import React from "react";
import aboutPhoto from "../assets/images/stadium.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img src={aboutPhoto} alt="about-image" width="100%" height="200px" />
      </div>
      <div className="title">
        <h1 className="itle-about">ABOUT US:</h1>
      </div>
      <div className="description">
        <h2 className="sub-title-about">Our Purpose</h2>
        <p>
          We believe that any football fan deserves perfect football equipments
          to make his fan experience perfect. Each fan should have his disired
          club's kit
        </p>
        <h2 className="sub-title-about">OUR VISION:</h2>
        <p>
          We will give everyone a chance to get his disired football equipment
        </p>
      </div>
    </div>
  );
};

export default About;
