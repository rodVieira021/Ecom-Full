import React from "react";
import "../Styles/App.css";
import "../Styles/Reusable.css";
import truck from "../Images/truck.png";
import tick from "../Images/tick.png";
import send from "../Images/send.png";

const Main = () => {
  return (
    <>
      <div className="black-stripe flex">
        <div className="flex aic">
          <img src={truck} alt="truck" />
          <p>Free Shipping on all orders over $100.</p>
        </div>

        <div className="flex aic">
          <img src={tick} alt="tick" />
          <p>Worldwide Delivery and same day dispatch.</p>
        </div>

        <div className="flex aic">
          <img src={send} alt="send" />
          <p>Extended Returns Until 10th March.</p>
        </div>
      </div>
      <div className="hero-main">
        <div className="hero-text">
          <h2>THE PERFECT TEMPLATE FOR YOUR AUTO PARTS BUSINESS</h2>
          <p>BUILD THE PERFECT STORE WITH AUTOPARTS STORES</p>
          <button className="hero-btn">PURCHASE NOW</button>
        </div>
      </div>
    </>
  );
};

export default Main;
