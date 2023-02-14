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
            <tr className="table-head flex aic">
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
            <tr className="added-prod">
              <td>
                <img src={cartimg} alt="cart" style={{ width: "150px" }} />
              </td>
              <td>$1450</td>
              <td>+ 2 -</td>
              <td>$2900 <button>X</button></td>
            </tr>
          </table>
          <div>
            <Link to="/">
              <p>Continue Shopping</p>
            </Link>
            <p>Update</p>
            <p>
              We processes all orders in USD. While the content of your cart is
              currently displayed in USD, the checkout will use USD at the most
              current exchange rate.
            </p>
            <form className="shipping-form">
              <h4>Get shipping estimates</h4>
              <label htmlFor="shipping-input">Postal/Zip Code</label>
              <input type="text" className="shipping-input"></input>
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
              <h4>SUBTOTAL</h4>
              <p className="total">$750.00</p>
              <input type="checkbox" className="checkbox-terms" />
              <label htmlFor="checkbox">
                I agree with the terms and conditions
              </label>
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
