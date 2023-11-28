import React from "react";

const ProductBall = (props) => {
  const { name, image, price } = props.item;
  return (
    <div className="item ball">
      <img src={image} alt="jersey image" height="200px" width="200px" />
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

export default ProductBall;
