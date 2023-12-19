import React from "react";
import { Trash } from "phosphor-react";
import { useProductProvider } from "../../Provider/ProductProvider";

const FavoriteItem = (props) => {
  const { removeFromFavorite } = useProductProvider();
  const { id, name, image, price } = props.favorite;

  return (
    <div className="favorite-items">
      <img src={image} alt="favorite item" height="200px" width="200px" />
      <div className="fav-name-price">
        <div className="fav-name">
          {" "}
          <h3>{name}</h3>{" "}
        </div>
        <div className="fav-price">
          {" "}
          <h4>Price: {price}</h4>{" "}
        </div>
        <div
          className="remove-from-fav remove"
          onClick={() => removeFromFavorite(id)}
        >
          <Trash /> Remove
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
