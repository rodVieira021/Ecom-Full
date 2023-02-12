import React from "react";
import "../../App.css";
import "./CartPopup.css";
import editcart from "../../Images/cart/edit-logo.png";
import closecart from "../../Images/cart/close-logo.png";

import cartImg01 from "../../Images/sec4-img7.jpg";

const CartPopup = () => {
  return (
    <div className="cart-popup abs">
      <div className="cart-popup-product flex ">
        <div>
          <img className="cart-popup-img" src={cartImg01} alt="break pads" />
        </div>
        <div className="cart-popup-text">
          <div className="header-logos flex">
            <h4 className="cart-popup-header">Breaking Pads</h4>
            <div className="cart-action-logos flex">
              <img className="cart-logos" src={editcart} alt="" />
              <img className="cart-logos" src={closecart} alt="" />
            </div>
          </div>
          <p className="cart-popup-item">Toyota / 2022</p>
          <div className="cart-popup-qty flex">
            <p className="cart-popup-qty-p">QTY: </p>
            <button className="cart-minus">-</button> 1{" "}
            <button className="cart-plus">+</button>
          </div>
          <p className="cart-popup-price">$159.00</p>
        </div>
      </div>
      <div className="cart-popup-bottom">
        <div className="cart-popup-total flex aic">
          <h4>CART SUBTOTAL: </h4>
          <p>$159.00</p>
        </div>
        <div className="cart-popup-btns flex">
          <button className="cart-popup-btn">VIEW CART</button>
          <button className="cart-popup-btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
