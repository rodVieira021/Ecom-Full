import React from "react";
import "../../App.css";
import "./ProductPage.css";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, navSearch } from "../../Redux/productSlice.js";
import Footer from "./Footer";

const ProductPage = () => {
  const dispatch = useDispatch();
  const searchNav = useSelector(navSearch);

  return (
    <>
      <div className="product-page-container flex jcc aic">
        {searchNav.map((prod) => {
          return (
            <div className="prod-card flex aic jcc">
              <div>
                <img src={prod.Image} alt="product-img" />
              </div>
              <div className='prod-card-text'>
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
      <Footer />
    </>
  );
};

export default ProductPage;
