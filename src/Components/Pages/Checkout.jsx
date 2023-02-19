import React from "react";
import "../../App.css";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Footer from "../Partials/Footer";
import { cart } from "../../Redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import payment from "../.././Images/cart/payment-img.jpg";

const Checkout = () => {
  const checkoutCart = useSelector(cart);
  return (
    <div>
      <div className="header">
        <h2>CHECKOUT</h2>
      </div>
      <div className="main-container grid col-2">
        <div className="left">
          <h4 className="left-header">
            {" "}
            RETURNING CUSTOMER? <Link>CLICK HERE TO LOGIN</Link>
          </h4>
          <div className="form-login">
            <p>
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer, please proceed to the
              Billing & Shipping section.
            </p>
            <form className="form-left grid col-2">
              <form className="inputs-1 flex">
                <label htmlFor="email-input">Email address</label>
                <input type="text" className="email-input" />
                <div className="check-div flex">
                  <input type="checkbox" className="check-login" />
                  <label htmlFor="check-login">Remember me!</label>
                </div>
              </form>
              <div className="inputs-2 flex">
                <label htmlFor="password-input">Password *</label>
                <input type="text" className="password-input" />
                <Link href="pass-forgot">Forgot your password?</Link>
              </div>
              <button className="login-submit">SUBMIT</button>
            </form>
          </div>
          <div className="billing-container">
            <h4>BILLING DETAILS</h4>
            <form className="form-billing grid col-2">
              <div className="left-col1">
                <label htmlFor="firstname">First Name</label>
                <input type="text" className="firstname" />
                <label htmlFor="email">Email</label>
                <input type="text" className="email" />
                <label htmlFor="company">Company</label>
                <input type="text" className="company" />
                <label htmlFor="apartment">Apartment</label>
                <input type="text" className="apartment" />
                <label htmlFor="postcode">Postal Code</label>
                <input type="text" className="postcode" />
                <label htmlFor="region">Region / State</label>
                <input type="text" className="region" />
                <div className="div-check flex ">
                  <input type="checkbox" className="check-form-left" />
                  <label htmlFor="check-form-left">Create an account?</label>
                </div>
              </div>
              <div className="left-col2">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" className="lastname" />
                <label htmlFor="telephone">Telephone</label>
                <input type="text" className="telephone" />
                <label htmlFor="address">Address</label>
                <input type="text" className="address" />
                <label htmlFor="city">City</label>
                <input type="text" className="city" />
                <label htmlFor="country">Country</label>
                <input type="text" className="country" />
              </div>
            </form>
            <div className="order-notes">
              <p>Order Notes</p>
              <textarea></textarea>
            </div>
          </div>
        </div>

        <div className="right">
          <h4 className="right-header">
            HAVE A COUPON?<Link>CLICK HERE TO ENTER YOUR CODE</Link>
          </h4>
          <div className="form-container-cupoun">
            <p>Enter your coupon code if you have one</p>
            <form className="form-coupon flex">
              <label htmlFor="input-coupon">* Coupon</label>
              <input type="text" className="input-coupon" />
              <button className="coupoun-btn">APPLY COUPON</button>
            </form>
          </div>
          <div className="order">
            <h4>YOUR ORDER</h4>
            <table className="prod-table">
              <thead className="table-head-coupon">
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {checkoutCart.map((items) => {
                  return (
                    <tr>
                      <td>{items.Title}</td>
                      <td>${items.Price}</td>
                      <td>{items.Qty}</td>
                      <td>${Math.trunc(items.Price * items.Qty)} </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="total-container">
              <p>Discount ${}</p>
              <p>
                Total: $
                {checkoutCart.reduce((acc, price) => {
                  return Math.trunc(Number(acc + price.Price * price.Qty));
                }, 0)}
              </p>
            </div>
          </div>
          <div className="payment">
            <h4>PAYMENT DETAILS</h4>
            <form className="cc-form grid col-2">
              <div className="cc-left-div">
                <label htmlFor="ccName">Name on Card</label>
                <input type="text" className="cc-name" />

                <label htmlFor="cc-number">Credit Card Number</label>
                <input type="number" className="cc-number" />

                <label htmlFor="cc-number">Expiration Date</label>
                <input type="date" className="cc-exp" />
              </div>
              <div className="cc-right-div">
                <label htmlFor="cc-number">Credit Card Type</label>
                <input
                  type="text"
                  className="cc-number"
                  placeholder="-----Please Select-----"
                />

                <label htmlFor="cc-ccv">CCV code</label>
                <input
                  type="text"
                  className="cc-ccv"
                  placeholder="Card Verification Number"
                />

                <img
                  src={payment}
                  alt="payments-methonds"
                  className="payments-methonds"
                />
              </div>
            </form>
            <button className="place-order-btn">PLACE ORDER</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
