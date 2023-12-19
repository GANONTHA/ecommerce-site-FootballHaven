import React from "react";
import { useProductProvider } from "../../Provider/ProductProvider";

const ProductBall = (props) => {
  const { addItem } = useProductProvider();
  const { id, name, image, price } = props.item;
  return (
    <div className="item ball">
      <img src={image} alt={id} height="200px" width="200px" />
      <div className="name-price">
        <h4>{name}</h4>
        <h5>${price}</h5>
      </div>
      <div className="CTA">
        <button onClick={() => addItem(id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductBall;
