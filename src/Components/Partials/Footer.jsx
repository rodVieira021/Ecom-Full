import React from "react";
import "../../App.css";
import "./Footer.css";

import logo1 from "../.././Images/footer-img/brandlogo1.png";
import logo2 from "../.././Images/footer-img/brandlogo2.png";
import logo3 from "../.././Images/footer-img/brandlogo3.png";
import logo4 from "../.././Images/footer-img/brandlogo4.png";
import fbLogo from "../.././Images/footer-img/icons8-facebook-f.svg";
import ttLogo from "../.././Images/footer-img/icons8-twitter.svg";
import pinLogo from "../.././Images/footer-img/icons8-pinterest-p.svg";
import igLogo from "../.././Images/footer-img/icons8-instagram-old.svg";
import tumbLogo from "../.././Images/footer-img/icons8-tumblr.svg";
import tubeLogo from "../.././Images/footer-img/icons8-youtube-logo.svg";
import vimLogo from "../.././Images/footer-img/icons8-vimeo.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer-main">
        <div className="footer-header">
          <h4>POPULAR CAR MAKERS</h4>
          <p>all car brands</p>
        </div>
        <div className="footer-img flex jcc aic">
          <img src={logo1} alt="company logo" />
          <img src={logo2} alt="company logo" />
          <img src={logo3} alt="company logo" />
          <img src={logo4} alt="company logo" />
        </div>
        <div className="form-container flex aic">
          <form className="footer-form flex jcc aic">
            <label htmlFor="footer-input">
              <span id="footer-span-1">SIGN UP FOR</span>
              <span id="footer-span-2">NEWSLETTER</span>
            </label>
            <input
              type="email"
              placeholder=" Email address"
              className="footer-input"
            />
            <button className="footer-btn">SUBSCRIBE</button>
          </form>
          <div className="footer-socials flex aic">
            <img src={fbLogo} alt="social media" />
            <img src={ttLogo} alt="social media" />
            <img src={pinLogo} alt="social media" />
            <img src={igLogo} alt="social media" />
            <img src={tumbLogo} alt="social media" />
            <img src={tubeLogo} alt="social media" />
            <img src={vimLogo} alt="social media" />
          </div>
        </div>
      </div>
      <div className="footer-bottom-container flex jcc">
        <div className="footer-bottom flex  aic">
          <div>
            <h4 className="li-header">Quick Shop</h4>
            <ul className="ul-footer">
              <li>Body Parts</li>
              <li>Engine</li>
              <li>Electric</li>
              <li>Tools</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="li-header">Information</h4>
            <ul className="ul-footer">
              <li>About us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>My Account</li>
            </ul>
          </div>
          <div>
            <h4 className="li-header">Customer Service</h4>
            <ul className="ul-footer">
              <li>Request Personal Data</li>
              <li>FAQ's</li>
              <li>Contact Us</li>
              <li>Orders and Returns</li>
              <li>Support Center</li>
            </ul>
          </div>
          <div className="contact">
            <h4 className="li-header">Contact Us</h4>
            <p>
              55 Gallaxy Enque, <br></br>2568 steet, 23568 NY
            </p>
            <p>(440) 000 000 0000</p>
            <p>sales@sales.com</p>
          </div>
        </div>
      </div>
      <div className="rights">
        <p>© 2023 AUTOPARTS. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
