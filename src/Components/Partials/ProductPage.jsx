import React from "react";
import "../../App.css";
import "./ProductPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/productSlice.js";
import Footer from "./Footer";
import { items } from "../.././Redux/productSlice.js";

const ProductPage = () => {
  const { id } = useParams();
  const filteredItems = useSelector(items);
  const prod = filteredItems.find((item) => item.id === Number(id));
  const dispatch = useDispatch();

  return (
    <>
      <div className="product-page-container flex jcc aic">
        <div className="prod-card flex aic jcc">
          <div>
            <img src={prod.Image} alt="product-img" />
          </div>
          <div className="prod-card-text">
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
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
