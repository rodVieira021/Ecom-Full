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
    </>
  );
};

export default Main;
