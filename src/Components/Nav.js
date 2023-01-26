import React from "react";
import "../Styles/App.css";
import "../Styles/Reusable.css";
import telephoneNav from "../Images/telephoneNav.png";
import magnifierNav from "../Images/magnifierNav.png";
import cartNav from "../Images/cartNav.png";
import siteLogo from "../Images/siteLogo.png";

const Nav = () => {
  return (
    <div className="Nav-div ">
      <div className="Nav-red-banner flex aic">
        <div className="red-banner-left-info flex aic">
          <p>
            USD <span>&#9207;</span>
          </p>
          <p>
            ENGLISH <span>&#9207;</span>
          </p>
          <img className="phone-logo" src={telephoneNav} alt="phone" />
          <p>+555 (115) 987654321</p>
        </div>
        <div className="red-banner-middle">
          <p>WORLDWIDE EXPRESS SHIPPING</p>
        </div>
        <div>
          <ul className="ul-nav-1 flex aic">
            <li>
              <a href="#">LOGIN</a>
            </li>
            <li>
              <a href="#">CREATE ACCOUNT</a>
            </li>
            <li>
              <a href="#">WISHLIST</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="Nav-main flex aic">
        <div className="logoName flex aic">
          <img className="site-logo" src={siteLogo} alt="siteLogo" />
          <p className="siteName">AutoParts</p>
        </div>
        <div>
          <ul className="ul-nav-2 flex">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">PRODUCT</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">BUY NOW!</a>
            </li>
          </ul>
        </div>
        <div className="nav-main-right flex aic ">
          <img className="magnifier-nav" src={magnifierNav} alt="magnifier" />
          <img className="cart-nav" src={cartNav} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
