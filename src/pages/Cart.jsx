import React from "react";
import "../style.css";
import { useProductProvider } from "../Provider/ProductProvider";
import CartItem from "../components/Products/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, checkout } = useProductProvider();
  const navigation = useNavigate();

  const totalprice = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  const shippingprice = totalprice * 0.16;

  //navigate to SHOP
  function navigateShop() {
    navigation("/shop");
  }
  return (
    <div className="cart-of-items">
      <h2>SHOPPING CART</h2>
      <div className="shopping-cart">
        <div className="item-cost">
          <h4 className="total-title">Total Amount</h4>
          <h5>
            Product price: <span>${totalprice.toFixed(2)}</span>
          </h5>
          <h5>
            Shipping cost: <span>$ {shippingprice.toFixed(2)}</span>
          </h5>
          <h4>
            Total to Pay{" "}
            <span className="total-price">
              {(totalprice + shippingprice).toFixed(2)}
            </span>
          </h4>
          <button disabled={cart.length === 0} onClick={() => checkout()}>
            Checkout
          </button>
          <div className="continue-shopping">
            <button onClick={() => navigateShop()}>
              {cart.length === 0 ? "Go to shop" : "Continue Shopping!"}
            </button>
          </div>
        </div>
        <div className="items-in-cart">
          {cart.length > 0 ? (
            cart.map((product) => (
              <CartItem product={product} key={product.id} />
            ))
          ) : (
            <div className="cart-empty">Your Cart is Empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
