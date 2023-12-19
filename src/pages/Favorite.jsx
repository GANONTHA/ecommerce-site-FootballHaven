import React from "react";
import { useProductProvider } from "../Provider/ProductProvider";
import FavoriteItem from "../components/Products/FavoriteItem";

const Favorite = () => {
  const { favorite } = useProductProvider();
  console.log(favorite);
  return (
    <div className="favorite-class">
      <h1>Your Favorite Items</h1>
      {favorite.length > 0 ? (
        favorite.map((fav) => <FavoriteItem favorite={fav} key={fav.id} />)
      ) : (
        <div className="cart-empty">You dont have any favorite item Yet</div>
      )}
    </div>
  );
};

export default Favorite;
