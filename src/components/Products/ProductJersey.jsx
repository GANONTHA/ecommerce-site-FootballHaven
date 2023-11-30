import React from "react";
import { useProductProvider } from "../../Provider/ProductProvider";

const Product = (props) => {
  const { addItem } = useProductProvider();
  const { id, image, name, price } = props.item;

  function handleClick(id) {
    addItem(id);
  }
  return (
    <div className="item">
      <img src={image} alt="jersey" height="210px" width="300px" />
      <div className="name-price">
        <h4>{name}</h4>
        <h5>${price}</h5>
      </div>
      <div className="CTA">
        <button onClick={() => handleClick(id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
