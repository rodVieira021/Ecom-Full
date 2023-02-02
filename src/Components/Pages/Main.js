import React from "react";
import "../../Styles/App.css";
import "../../Styles/Reusable.css";
import truck from "../.././Images/truck.png";
import tick from "../.././Images/tick.png";
import send from "../.././Images/send.png";
import warranty from "../.././Images/warranty.png";
import returns from "../.././Images/return.png";
import dollar from "../.././Images/dollar.png";
import reliable from "../.././Images/reliable.png";
import truckgr from "../.././Images/truck-gr.png";
import lock from "../.././Images/lock.png";

const Main = () => {
  return (
    <>
      <div className="section-1 black-stripe flex">
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
      <div className="section-2">
        <h4>OUR BENEFITS WILL CHANGE THE WAY YOU BUY PARTS.</h4>
        <p>Order with confidence!</p>
        <div className="gr-container grid col-4">
          <div>
            <img src={warranty} alt="warranty" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <img src={returns} alt="returns" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <img src={dollar} alt="dollar" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <img src={reliable} alt="reliable" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <img src={truckgr} alt="truck" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <img src={lock} alt="lock" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
