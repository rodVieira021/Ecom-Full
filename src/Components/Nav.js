import React from "react";
import "../Styles/App.css";
import "../Styles/Reusable.css";

const Nav = () => {
  return (
    <div className="Nav-div ">
      <div className="Nav-red-banner flex aic">
        <div className="red-banner-left-info flex aic">
          <p>USD</p>
          <p>ENGLISH</p>
          <p>phonelogo 983827382</p>
        </div>
        <div className="red-banner-middle">
          <p>WORLDWIDE EXPRESS SHIPPING</p>
        </div>
        <div className="red-banner-menu flex aic">
          <p>LOGIN</p>
          <p>CREATE ACCOUNT</p>
          <p>WISHLIST</p>
        </div>
      </div>

      <div className="Nav-main flex aic">
        <p>LOGO</p>
        <div className="Nav-main-menu flex">
          <p>HOME</p>
          <p>SHOP</p>
          <p>PRODUCT</p>
          <p>BLOG</p>
          <p>BUY NOW!</p>
        </div>
        <div className="nav-main-right flex">
          <p>search lupa</p>
          <p>cart icon</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
