import React from "react";
import { useProductProvider } from "../../Provider/ProductProvider";
import ReactImageMagnify from "react-image-magnify";
import { Trash, Heart } from "phosphor-react";

const CartItem = (props) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useProductProvider();
  const { id, name, image, price, quantity } = props.product;

  const imageProps = {
    smallImage: {
      alt: "Item",
      isFluidWidth: true,
      src: image,
    },
    largeImage: {
      src: image,
      width: 1500,
      height: 2000,
    },
    enlargedImageContainerStyle: {
      background: "#fff",
      zindex: 9,
    },
  };
  return (
    <div className="item-in-cart-description">
      <div className="descriptions-image">
        <div className="item-image">
          {/* <img src={image} alt="item in cart" height="100px" width="100px" /> */}
          <ReactImageMagnify {...imageProps} />
        </div>
        <div className="details">
          <h4>{name}</h4>
          <h4>color</h4>
          <div className="actions">
            <p className="remove" onClick={() => removeFromCart(id)}>
              <Trash size={20} />
              remove
            </p>
            <p className="favorite">
              <Heart size={20} />
              move to wish list
            </p>
          </div>
        </div>
      </div>
      <div className="quantity">
        <div className="quantity-number">
          <button className="decrease" onClick={() => decreaseQuantity(id)}>
            -
          </button>
          <p> {quantity}</p>
          <button className="increase" onClick={() => increaseQuantity(id)}>
            +
          </button>
        </div>
        <p>
          Unit price: <span>${price}</span>
        </p>
        <p>
          Total price: <span> ${(price * quantity).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
