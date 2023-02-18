import React from "react";
import "../../App.css";
import "./CartPopup.css";
import deleteItem from "../../Images/cart/close-logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cart,
  removeFromCart,
  cartPlusBtn,
  cartMinusBtn,
  clearCart,
} from "../../Redux/productSlice";

const CartPopup = () => {
  const cartPopup = useSelector(cart);
  const dispatch = useDispatch();
  return (
    <div className="cart-popup abs">
      <div className="cart-popup-product">
        {cartPopup.map((items) => {
          return (
            <div className="products-table flex">
              <div>
                <img
                  className="cart-popup-img"
                  src={items.Image}
                  alt="itemImage"
                />
              </div>
              <div className="cart-popup-text">
                <div className="header-logos flex">
                  <h4 className="cart-popup-header">{items.Title}</h4>
                  <div className="cart-action-logos flex">
                    <img
                      className="cart-logos"
                      onClick={() => dispatch(removeFromCart(items.id))}
                      src={deleteItem}
                      alt="logo x"
                    />
                  </div>
                </div>
                <p className="cart-popup-item">{items.Brand}</p>
                <div className="cart-popup-qty flex aic">
                  <p className="cart-popup-qty-p">QTY:</p>
                  <button
                    className="cart-minus"
                    onClick={() => dispatch(cartMinusBtn(items.id))}
                  >
                    -
                  </button>
                  <p>{items.Qty}</p>
                  <button
                    className="cart-plus"
                    onClick={() => dispatch(cartPlusBtn(items.id))}
                  >
                    +
                  </button>
                </div>
                <p className="cart-popup-price">
                  $ {Math.trunc(items.Price * items.Qty)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-popup-bottom">
        {cartPopup.length <= 0 ? (
          <h4 className="empty-msg">Your cart is empty</h4>
        ) : (
          <div>
            <div className="cart-popup-total flex aic">
              <h4>CART SUBTOTAL: </h4>
              <p>
                $
                {cartPopup.reduce((acc, price) => {
                  return Math.trunc(Number(acc + price.Price * price.Qty));
                }, 0)}
              </p>
            </div>
            <div className="cart-popup-btns flex">
              <Link to="/cart">
                <button className="cart-popup-btn-1">VIEW CART</button>
              </Link>
              <Link to="/checkout">
                <button className="cart-popup-btn-2">CHECKOUT</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
