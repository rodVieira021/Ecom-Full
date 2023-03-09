import React from "react";
import "./Nav.css";
import "../../App.css";
import telephoneNav from "../../Images/telephoneNav.png";
import navsmallmenu from "../../Images/menu-small-nav.png";
import navsmallx from "../../Images/menu-small-x.png";
import navsmalluser from "../../Images/small-nav-user.png";
import magnifierNav from "../../Images/magnifierNav.png";
import cartNav from "../../Images/cartNav.png";
import siteLogo from "../../Images/siteLogo.png";
import DropdownUsd from "./DropdownUsd";
import DropdownLang from "./DropdownLang";
import CartPopup from "./CartPopup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "../../Redux/productSlice";
import { items, addToSearch } from "../.././Redux/productSlice.js";

const Nav = () => {
  const [cartDrop, setCartDrop] = useState(false);
  const [usd, setUsd] = useState(false);
  const [lang, setLang] = useState(false);
  const [searchOn, setSearchOn] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [openSmallMenu, setOpenSmallMenu] = useState({ display: "none" });
  const [hideMenu, setHideMenu] = useState({ display: "block" });
  const [menuX, setMenuX] = useState({ display: "none" });
  const cartCount = useSelector(cart);
  const productNav = useSelector(items);
  const dispatch = useDispatch();

  const showMenu = () => {
    setOpenSmallMenu({
      display: "block",
    });
    setHideMenu({ display: "none" });
    setMenuX({ display: "block" });
  };

  const closeMenu = () => {
    setOpenSmallMenu({ display: "none" });
    setHideMenu({ display: "block" });
    setMenuX({ display: "none" });
  };

  const closeSearchBar = () => {
    setSearchOn(false);
    setSearchProduct("");
  };

  return (
    <div className="Nav-div">
      <div className="Nav-red-banner flex aic">
        <div className="red-banner-left-info flex aic">
          <ul className="ul-usd-nav flex pr">
            <li onClick={() => setUsd(!usd)}>
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
        <div className="nav-login">
          <img className="nav-small-user" src={navsmalluser} alt="user-icon" />
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

      <div className="nav-main flex aic">
        <div className="small-nav pr">
          <img
            style={hideMenu}
            onClick={() => showMenu()}
            className="small-nav-img"
            src={navsmallmenu}
            alt="menu-small"
          />
          <img
            style={menuX}
            onClick={() => closeMenu()}
            className="small-nav-x"
            src={navsmallx}
            alt="menu-small-x"
          />
          <div style={openSmallMenu} className="small-menu abs">
            <ul className="small-nav-ul flex aic">
              <li>HOME</li>
              <li>SHOP</li>
              <li>PRODUCT</li>
              <li>PAGES</li>
              <li>BLOG</li>
              <li>BUY NOW!</li>
            </ul>
          </div>
        </div>
        <Link to="/">
          <div className="logo-name flex aic">
            <img className="site-logo" src={siteLogo} alt="siteLogo" />
            <p className="siteName">AutoParts</p>
          </div>
        </Link>

        <div className="drops-container">
          <ul className="ul-nav-2 flex">
            <li>
              <div href="1" className="hover pr">
                <Link to={"/"}>
                  <p>HOME</p>
                </Link>
                <div className="drop-1 dropdown-nav-1 grid col-4 abs">
                  <ul className="ul-drop">
                    <li className="li-title">HOME GROUP 1</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                  </ul>

                  <ul className="ul-drop">
                    <li className="li-title">HOME GROUP 2</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                  </ul>

                  <ul className="ul-drop">
                    <li className="li-title">HOME GROUP 3</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                  </ul>

                  <ul className="ul-drop">
                    <li className="li-title">HOME GROUP 4</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div href="2" className="hover pr">
                <p>SHOP</p>
                <div className="drop-2 dropdown-nav-2 grid col-4 abs">
                  <ul className="ul-drop">
                    <li className="li-title">SHOP GROUP 1</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                  </ul>

                  <ul className="ul-drop">
                    <li className="li-title">SHOP GROUP 2</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                  </ul>

                  <ul className="ul-drop">
                    <li className="li-title">SHOP GROUP 3</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                  </ul>

                  <ul className="ul-drop">
                    <li className="li-title">SHOP GROUP 4</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                    <li>SHOP</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div href="3" className="hover pr">
                <p> PRODUCT</p>
                <div className="drop-3 dropdown-nav-3 grid col-4 abs">
                  <ul className="ul-drop">
                    <li className="li-title">PRODUCT GROUP 1</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                  </ul>

                  <ul className="ul-drop">
                    <li className="li-title">PRODUCT GROUP 2</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                  </ul>

                  <ul className="ul-drop">
                    <li className="li-title">PRODUCT GROUP 3</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                  </ul>

                  <ul className="ul-drop">
                    <li className="li-title">PRODUCT GROUP 4</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div href="4" className="hover pr">
                <p>PAGES</p>
                <div className="drop-4 dropdown-nav-4 abs">
                  <div>
                    <ul className="ul-drop">
                      <li>PAGES 1</li>
                      <li>PAGES 2</li>
                      <li>PAGES 3</li>
                      <li>PAGES 4</li>
                      <li>PAGES 5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div href="5" className="hover pr">
                <p>BLOG</p>
                <div className="drop-5 dropdown-nav-5 abs">
                  <div>
                    <ul className="ul-drop">
                      <li>BLOG 1</li>
                      <li>BLOG 2</li>
                      <li>BLOG 3</li>
                      <li>BLOG 4</li>
                      <li>BLOG 5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div href="6" className="hover hover-buy">
                BUY NOW!
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-main-right flex aic pr">
          <img
            className="magnifier-nav"
            src={magnifierNav}
            alt="magnifier"
            onClick={() => setSearchOn(true)}
          />
          <img
            className="cart-nav"
            src={cartNav}
            alt="cart"
            onClick={() => setCartDrop(!cartDrop)}
          />
          {cartCount <= 0 ? (
            ""
          ) : (
            <span className="items-count abs">{cartCount.length}</span>
          )}
        </div>
        {cartDrop ? <CartPopup /> : ""}
      </div>
      {searchOn ? (
        <div className="search flex aic abs">
          <form className="flex aic">
            <img src={magnifierNav} alt="magnifier" />
            <input
              value={searchProduct}
              className="input-form"
              placeholder="Search for products..."
              onChange={(e) => setSearchProduct(e.target.value)}
            />
          </form>
          <button className="btn-close-form" onClick={() => closeSearchBar()}>
            &#215;
          </button>
          <div className="div-search">
            {searchProduct !== ""
              ? productNav
                  .filter((pr) =>
                    pr.Description.toLowerCase().includes(
                      searchProduct.toLowerCase()
                    )
                  )
                  .map((each) => {
                    return (
                      <div
                        className="search-resp flex aic"
                        onClick={() => dispatch(addToSearch(each))}
                      >
                        <img
                          className="search-img"
                          src={each.Image}
                          alt="prod_image"
                        />
                        <Link
                          to="/productpage"
                          onClick={() => setSearchOn(false)}
                        >
                          <p className="search-desc">{each.Description}</p>
                        </Link>
                      </div>
                    );
                  })
              : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
