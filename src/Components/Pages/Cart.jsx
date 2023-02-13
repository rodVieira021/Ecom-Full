import React from "react";
import "../../App.css";
import "./Cart.css";
import { Link } from "react-router-dom";
import Footer from "../Partials/Footer";

const Cart = () => {
  return (
    <>
      <div className="header">
        <h2 className="header-h2">YOUR CART</h2>
      </div>

      <div className="left-products">
        <table className="prod-table">
          <tr className="table-head">
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
          <tr className="added-prod">
            <td>photo e description</td>
            <td>price each</td>
            <td>+ qty -</td>
            <td>Total based on qty</td>
          </tr>
        </table>
        <div>
          <Link to="/">
            <p>Continue Shopping</p>
          </Link>
          <p>Update</p>
          <form className="shipping-form">
            <h4>Get shipping estimates</h4>
            <label htmlFor="shipping-input">Postal/Zip Code</label>
            <input type="text" className="shipping-input"></input>
            <button className="shipping-btn">CALCULATE SHIPPING</button>
          </form>
        </div>
      </div>
      <Footer />
      <div className="right-colum"></div>
    </>
  );
};

export default Cart;
