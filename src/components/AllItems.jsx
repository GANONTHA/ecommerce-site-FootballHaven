import React from "react";
import ITEMS from "../data/AllITems";
import ProductJersey from "./Products/ProductJersey";

const AllItems = () => {
  return (
    <div className="list">
      {ITEMS.map((item) => (
        <ProductJersey item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AllItems;
