import React from "react";
import "../Styles/App.css";
import "../Styles/Reusable.css";
import telephoneNav from "../Images/telephoneNav.png";
import magnifierNav from "../Images/magnifierNav.png";
import cartNav from "../Images/cartNav.png";
import siteLogo from "../Images/siteLogo.png";
import DropdownNavOne from "./DropDowns/DropdownNavOne";
import DropdownNavTwo from "./DropDowns/DropdownNavTwo";
import DropdownNavTree from "./DropDowns/DropdownNavTree";
import DropdownNavFour from "./DropDowns/DropdownNavFour";
import DropdownNavFive from "./DropDowns/DropdownNavFive";
import DropdownUsd from "./DropDowns/DropdownUsd";
import DropdownLang from "./DropDowns/DropdownLang";

import { useState } from "react";

const Nav = () => {
  const [usd, setUsd] = useState(false);
  const [lang, setLang] = useState(false);
  const [searchOn, setSearchOn] = useState(false);

  return (
    <div className="Nav-div pr">
      <div className="Nav-red-banner flex aic">
        <div className="red-banner-left-info flex aic">
          <ul className="ul-usd-nav flex pr">
            <li onClick={(e) => setUsd(!usd)}>
              USD <span>&#9207;</span>
              {usd ? <DropdownUsd /> : ""}
            </li>
            <li onClick={() => setLang(!lang)}>
              ENGLISH <span>&#9207;</span>
              {lang ? <DropdownLang /> : ""}
            </li>
          </ul>

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
        <div className="logo-name flex aic">
          <img className="site-logo" src={siteLogo} alt="siteLogo" />
          <p className="siteName">AutoParts</p>
        </div>
        <div>
          <ul className="ul-nav-2 flex">
            <li>
              <a href="1" className="hover hover-home pr">
                HOME
                <DropdownNavOne />
              </a>
            </li>
            <li>
              <a href="2" className="hover hover-shop pr">
                SHOP
                <DropdownNavTwo />
              </a>
            </li>
            <li>
              <a href="3" className="hover hover-product pr">
                PRODUCT
                <DropdownNavTree />
              </a>
            </li>
            <li>
              <a href="4" className="hover hover-pages pr">
                PAGES
                <DropdownNavFour />
              </a>
            </li>
            <li>
              <a href="5" className="hover hover-blog pr">
                BLOG
                <DropdownNavFive />
              </a>
            </li>
            <li>
              <a href="6" className="hover hover-buy">
                BUY NOW!
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-main-right flex aic ">
          <img
            className="magnifier-nav"
            src={magnifierNav}
            alt="magnifier"
            onClick={() => setSearchOn(true)}
          />
          <img className="cart-nav" src={cartNav} alt="cart" />
        </div>
        {searchOn ? (
          <div className="search flex aic abs">
            <form className="flex aic">
              <img src={magnifierNav} alt="magnifier" />
              <input
                className="input-form"
                placeholder="Search for products..."
              />
            </form>
            <button
              className="btn-close-form"
              onClick={() => setSearchOn(false)}
            >
              &#215;
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Nav;
