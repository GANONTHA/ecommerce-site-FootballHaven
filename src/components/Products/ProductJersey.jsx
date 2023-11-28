import React from "react";

const Product = (props) => {
  const { image, name, price } = props.item;
  return (
    <div className="item">
      <img src={image} alt="jersey image" height="210px" width="300px" />
      <div className="name-price">
        <h4>{name}</h4>
        <h5>${price}</h5>
      </div>
      <div className="CTA">
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
