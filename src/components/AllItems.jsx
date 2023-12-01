import React from "react";
import ITEMS from "../data/AllITems";
import ProductJersey from "./Products/ProductJersey";
import { useProductProvider } from "../Provider/ProductProvider";

const AllItems = () => {
  const { allProducts } = useProductProvider();
  return (
    <div className="list">
      {allProducts.length > 0 ? (
        allProducts.map((item) => <ProductJersey item={item} key={item.id} />)
      ) : (
        <div className="no-result">
          <h2>No item found!</h2>
        </div>
      )}
    </div>
  );
};

export default AllItems;
