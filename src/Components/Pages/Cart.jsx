import React from "react";
import "../../App.css";
import "./Cart.css";
import payment from "../.././Images/cart/payment-img.jpg";
import { Link } from "react-router-dom";
import Footer from "../Partials/Footer";
import { cart } from "../../Redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  cartMinusBtn,
  cartPlusBtn,
  clearCart,
} from "../../Redux/productSlice";

const Cart = () => {
  const newCart = useSelector(cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-container">
        <h2>YOUR CART</h2>
      </div>
      <div className="products-container flex jcc aic">
        <div className="left-products">
          {newCart.length <= 0 ? (
            <p className="empty-cart-page">YOUR CART IS EMPTY</p>
          ) : (
            <table className="prod-table">
              <thead className="table-head">
                <tr>
                  <th id="table-product">PRODUCT</th>
                  <th id="table-price">PRICE</th>
                  <th id="table-qty">QUANTITY</th>
                  <th id="table-total">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {newCart.map((items) => {
                  return (
                    <tr className="added-prod">
                      <td className="td-img flex aic">
                        <div>
                          <img
                            className="item-img"
                            src={items.Image}
                            alt="cart"
                          />
                        </div>
                        <div>
                          <p className="item-title">{items.Title}</p>
                          <p className="item-brand">{items.Brand}</p>
                        </div>
                      </td>
                      <td className="item-price">${items.Price}</td>
                      <td className="btn-qty-qty">
                        <span onClick={() => dispatch(cartMinusBtn(items.id))}>
                          -
                        </span>
                        <p className="p-qty">{items.Qty}</p>
                        <span onClick={() => dispatch(cartPlusBtn(items.id))}>
                          +
                        </span>
                      </td>
                      <td>
                        ${Math.trunc(items.Price * items.Qty)}{" "}
                        <button
                          className="table-x"
                          onClick={() => dispatch(removeFromCart(items.id))}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          <div className="shipping">
            <div className="link-shipping flex aic">
              <Link to="/">
                <p className="go-back-p"> &#60; Continue Shopping</p>
              </Link>
              <p className="clear-cart" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </p>
            </div>

            <p className="info-shipping">
              We processes all orders in USD. While the content of your cart is
              currently displayed in USD, the checkout will use USD at the most
              current exchange rate.
            </p>
            <form className="shipping-form">
              <h4>Get shipping estimates</h4>
              <div className="shipping-inputs flex aic">
                <div className="input-container flex">
                  <label htmlFor="shipping-country">Country</label>
                  <input type="text" className="shipping-country" />
                </div>
                <div className="input-container flex">
                  <label htmlFor="shipping-state">State</label>
                  <input type="text" className="shipping-state" />
                </div>
                <div className="input-container flex">
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
                <p className="total">
                  <span>$</span>
                  {newCart.reduce((acc, price) => {
                    return Math.trunc(Number(acc + price.Price * price.Qty));
                  }, 0)}
                </p>
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
              <Link to="/checkout">
                <button className="text-area-btn">CHECKOUT</button>
              </Link>
              <div className="payment-container flex jcc aic">
                <img className="payment" src={payment} alt="payments methods" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
