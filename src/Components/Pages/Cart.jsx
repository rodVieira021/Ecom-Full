import React from "react";
import "../../App.css";
import "./Cart.css";
import payment from "../.././Images/cart/payment-img.jpg";
import { Link } from "react-router-dom";
import Footer from "../Partials/Footer";

import cartimg from "../.././Images/cart/tiresgm.jpeg";

const Cart = () => {
  return (
    <>
      <div className="header">
        <h2 className="header-h2">YOUR CART</h2>
      </div>
      <div className="products-container grid col-3">
        <div className="left-products">
          <table className="prod-table">
            <thead className="table-head">
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="added-prod">
                <td className="td-img flex aic jcc">
                  <div>
                    <img src={cartimg} alt="cart" />
                  </div>
                  <div>
                    <p>Product Name</p>
                    <p>Brand: GM</p>
                  </div>
                </td>
                <td>$1450.00</td>
                <td>
                  <span>-</span> 2 <span>+</span>
                </td>
                <td>
                  $2900.00 <button className="table-x">X</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="shipping">
            <div className="link-shipping flex aic">
              <Link to="/">
                <p className="go-back-p"> &#60; Continue Shopping</p>
              </Link>
              <p className="update-shipping">&#8634; Update</p>
            </div>

            <p className="info-shipping">
              We processes all orders in USD. While the content of your cart is
              currently displayed in USD, the checkout will use USD at the most
              current exchange rate.
            </p>
            <form className="shipping-form">
              <h4>Get shipping estimates</h4>
              <div className="shipping-inputs flex aic">
                <div className="input-container">
                  <label htmlFor="shipping-country">Country</label>
                  <input type="text" className="shipping-country" />
                </div>
                <div className="input-container">
                  <label htmlFor="shipping-state">State</label>
                  <input type="text" className="shipping-state" />
                </div>
                <div className="input-container">
                  <label htmlFor="shipping-postal">Postal/Zip Code</label>
                  <input type="text" className="shipping-postal" />
                </div>
              </div>
              <button className="shipping-btn">CALCULATE SHIPPING</button>
            </form>
          </div>
        </div>
        <div className="righ-products">
          <form className="text-form">
            <div className="text-area-container">
              <label htmlFor="text-area">ADD A NOTE TO YOUR ORDER</label>
              <textarea className="text-area"></textarea>
            </div>
            <div className="subtotal">
              <div className="subtotal-text flex">
                <h4>SUBTOTAL</h4>
                <p className="total">$750.00</p>
              </div>
              <p className="taxes-text">
                Shipping & taxes calculated at checkout
              </p>
              <div className="check-container flex">
                <input type="checkbox" className="checkbox-terms" />
                <label htmlFor="checkbox">
                  I agree with the terms and conditions
                </label>
              </div>
              <button className="text-area-btn">CHECKOUT</button>
              <img src={payment} alt="payments methods" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <div className="right-colum"></div>
    </>
  );
};

export default Cart;
