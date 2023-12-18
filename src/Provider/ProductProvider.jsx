import React, { useContext } from "react";
import { createContext, useState } from "react";
import ITEMS from "../data/AllITems";
import { JERSEYS } from "../data/Items";
import { BALLS } from "../data/Items";
import { SOCKS } from "../data/Items";
import { GLOVES } from "../data/Items";
import { BOOTS } from "../data/Items";

const ProductContext = createContext(undefined);
const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [allProducts, setAll] = useState(ITEMS);
  const [favorite, setFavorite] = useState([]);
  //function to add items to the cart
  function addItem(id) {
    const exist = cart.find((item) => item.id === id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === exist.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      const newItem = ITEMS.find((item) => item.id === id);
      setCart([...cart, { ...newItem, quantity: 1 }]);
    }
  }
  //increase quantity of an item
  function increaseQuantity(id) {
    const exist = cart.find((item) => item.id === id);
    setCart(
      cart.map((item) =>
        item.id === exist.id ? { ...exist, quantity: exist.quantity + 1 } : item
      )
    );
  }
  //decrease quantity of an item
  function decreaseQuantity(id) {
    const exist = cart.find((item) => item.id === id);
    if (exist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== exist.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === exist.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  }

  //remove an item from the cart
  function removeFromCart(id) {
    const exist = cart.find((item) => item.id === id);
    setCart(cart.filter((item) => item.id !== exist.id));
  }
  //add to favorite
  function addFavorite(id) {
    const exist = favorite.find((item) => item.id === id);
    if (exist) {
      setFavorite(
        favorite.map((fav) =>
          fav.id === exist.id ? { ...fav, quantity: fav.favorite + 1 } : fav
        )
      );
    } else {
      const newItem = cart.find((item) => item.id === id);

      setFavorite([...favorite, { ...newItem, quantity: 1 }]);
    }
  }
  //remove from favorite
  function removeFromFavorite(id) {
    const exist = favorite.find((item) => item.id === id);
    setFavorite(favorite.filter((item) => item.id !== exist.id));
  }
  //checkout
  function checkout() {
    alert("THANK YOU FOR YOUR PURCHASE!");
    setCart([]);
  }
  //search an item with NAME, PRICE, COLOR
  function search(text) {
    if (
      text.toLowerCase() === "jersey" ||
      text.toLowerCase() === "jerseys" ||
      text.toLowerCase() === "shirt"
    ) {
      setAll(JERSEYS);
    } else if (
      text.toLowerCase() === "ball" ||
      text.toLowerCase() === "balls"
    ) {
      setAll(BALLS);
    } else if (
      text.toLowerCase() === "sock" ||
      text.toLowerCase() === "socks"
    ) {
      setAll(SOCKS);
    } else if (
      text.toLowerCase() === "boot" ||
      text.toLowerCase() === "boots" ||
      text.toLowerCase() === "shoe" ||
      text.toLowerCase() === "shoes"
    ) {
      setAll(BOOTS);
    } else if (
      text.toLowerCase() === "glove" ||
      text.toLowerCase() === "gloves"
    ) {
      setAll(GLOVES);
    } else {
      setAll(
        ITEMS.filter(
          (item) =>
            item.name.toLowerCase().includes(text.toLowerCase()) ||
            item.price <= text ||
            item.color.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  }
  return (
    <ProductContext.Provider
      value={{
        cart,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        checkout,
        search,
        allProducts,
        addFavorite,
        removeFromFavorite,
        favorite,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductProvider = () => useContext(ProductContext);
export default ProductProvider;
