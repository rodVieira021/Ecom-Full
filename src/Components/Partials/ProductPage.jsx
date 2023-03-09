import React from "react";
import "../../App.css";
import "./ProductPage.css";
import { addToCart } from "../.././Redux/productSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { navSearch } from "../../Redux/productSlice.js";

const ProductPage = () => {
  const dispatch = useDispatch();
  const searchNav = useSelector(navSearch);
 console.log("hey nav", searchNav);
  return (
    <div className="product-page-container flex jcc aic">
      {searchNav.map((prod) => {
        return (
          <div className="prod-card flex aic">
            <img src={prod.Image} alt="product-img" />
            <div>
              <h4>{prod.Title}</h4>
              <p>{prod.Description}</p>
              <p>Brand: {prod.Brand}</p>
              <p>Price: {prod.Price}</p>
              <button
                className="btn-product-page"
                onClick={() => dispatch(addToCart(prod))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
