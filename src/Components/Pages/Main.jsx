import React from "react";
import "../../App.css";
import "./Main.css";
import { useState } from "react";
import truck from "../.././Images/truck.png";
import tick from "../.././Images/tick.png";
import send from "../.././Images/send.png";
import warranty from "../.././Images/warranty.png";
import returns from "../.././Images/return.png";
import dollar from "../.././Images/dollar.png";
import reliable from "../.././Images/reliable.png";
import truckgr from "../.././Images/truck-gr.png";
import lock from "../.././Images/lock.png";
import slider1 from "../.././Images/slider-img/slider1.jpg";
import slider2 from "../.././Images/slider-img/slider2.jpg";
import slider3 from "../.././Images/slider-img/slider3.jpg";
import slider4 from "../.././Images/slider-img/slider4.jpg";
import slider5 from "../.././Images/slider-img/slider5.jpg";
import slider6 from "../.././Images/slider-img/slider6.jpg";
import searchlogo from "../.././Images/section-5-img/magnifier-67.png";
import favoritelogo from "../.././Images/section-5-img/favorite-30.png";
import shufflelogo from "../.././Images/section-5-img/shuffle-48.png";
import Footer from "../Partials/Footer";

const Main = () => {
  const [indexImg, setIndexImg] = useState(0);
  const [indexText, setIndexText] = useState(0);
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];
  const text = [
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
  inventore ex, ea quis optio officia facere tempora nulla fuga 1`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
  inventore ex, ea quis optio officia facere tempora nulla fuga
  molestias neque nemo 2`,
    `Sapiente inventore ex, ea quis optio officia facere tempora nulla fuga
  molestias neque nemo eum delectus eos! 3`,
  ];

  return (
    <div className="main">
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
        <div className="section-2-header">
          <h4>OUR BENEFITS WILL CHANGE THE WAY YOU BUY PARTS.</h4>
          <p>Order with confidence!</p>
        </div>
        <div className="gr-container-2 grid col-3">
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

      <div className="section-3">
        <div className="sec-2-carousel">
          <button
            className="sec-2-carousel-btn-prev"
            onClick={() =>
              setIndexImg(indexImg < images.length - 3 ? indexImg + 1 : 0)
            }
          >
            &#60;
          </button>
          <div>
            <img
              className="sec-2-carousel-img"
              src={images[indexImg]}
              alt="slide"
            />
            <img
              className="sec-2-carousel-img"
              src={images[indexImg + 1]}
              alt="slide"
            />
            <img
              className="sec-2-carousel-img"
              src={images[indexImg + 2]}
              alt="slide"
            />
          </div>
          <button
            className="sec-2-carousel-btn-next"
            onClick={() =>
              setIndexImg(indexImg < images.length - 3 ? indexImg + 1 : 0)
            }
          >
            &#62;
          </button>
        </div>
      </div>

      <div className="section-4">
        <div className="section-4-header">
          <h4>Popular Categories</h4>
          <p>Replacement Parts</p>
        </div>
        <div className="gr-container-4 grid col-4">
          <div className="card">
            <img
              src="http://annimexweb.com/items/belle/assets/images/autoparts/categories-img1.jpg"
              alt="tires"
            />
            <h6>TOOLS & GARAGE</h6>
            <ul>
              <li>Code Readers</li>
              <li>Garage Accessories</li>
              <li>Mobile Electronics</li>
              <li>Videos & Software</li>
              <li>Tools and Components</li>
            </ul>
            <button className="section-4-btn">View Collection</button>
          </div>
          <div className="card">
            <img
              src="http://annimexweb.com/items/belle/assets/images/autoparts/categories-img2.jpg"
              alt="mirrors"
            />
            <h6>EXTERIOR ACCESSORIES</h6>
            <ul>
              <li>Bumpers & Components</li>
              <li>Car Covers</li>
              <li>Fog Lights & Accessories</li>
              <li>Grilles & Components</li>
              <li>Hoods & Components</li>
            </ul>
            <button className="section-4-btn">View Collection</button>
          </div>
          <div className="card">
            <img
              src="http://annimexweb.com/items/belle/assets/images/autoparts/categories-img3.jpg"
              alt="car parts"
            />
            <h6>BODY PARTS & MIRRORS</h6>
            <ul>
              <li>Bumpers & Components</li>
              <li>Car Covers</li>
              <li>Grilles & Components</li>
              <li>Hoods & Components</li>
              <li>Mirrors & Components</li>
            </ul>
            <button className="section-4-btn">View Collection</button>
          </div>
          <div className="card">
            <img
              src="http://annimexweb.com/items/belle/assets/images/autoparts/categories-img4.jpg"
              alt="phone holder"
            />
            <h6>INTERIOR ACCESSORIES</h6>
            <ul>
              <li>Carpet Kits</li>
              <li>Dash & Accessories</li>
              <li>Floor Mats & Liners</li>
              <li>Seats & Accessories</li>
              <li>Switches & Components</li>
            </ul>
            <button className="section-4-btn">View Collection</button>
          </div>
          <div className="card">
            <img
              src="http://annimexweb.com/items/belle/assets/images/autoparts/categories-img5.jpg"
              alt="car light"
            />
            <h6>HEADLIGHTS & LIGHTING</h6>
            <ul>
              <li>Fog Lights & Accessories</li>
              <li>Headlights & Accessories</li>
              <li>Switches & Components</li>
              <li>Tail Lights & Accessories</li>
              <li>Turn Signals & Other Lights</li>
            </ul>
            <button className="section-4-btn">View Collection</button>
          </div>
          <div className="card">
            <img
              src="http://annimexweb.com/items/belle/assets/images/autoparts/categories-img6.jpg"
              alt="car part"
            />
            <h6>EXHAUST SYSTEM</h6>
            <ul>
              <li>Catalytic Converter</li>
              <li>Exhaust End Silencers</li>
              <li>Exhaust Middle Silencers</li>
              <li>Particulate Filter</li>
              <li>Exhaust End Silencers</li>
            </ul>
            <button className="section-4-btn">View Collection</button>
          </div>
          <div className="card">
            <img
              src="http://annimexweb.com/items/belle/assets/images/autoparts/categories-img7.jpg"
              alt="break pads"
            />
            <h6>BRAKES, SUSPENSION & STEERING</h6>
            <ul>
              <li>Shocks & Components</li>
              <li>Wheel Hubs and Components</li>
              <li>Brake Discs & Calipers</li>
              <li>Control Arms & Components</li>
              <li>Lowering & Lifting Kits</li>
            </ul>
            <button className="section-4-btn">View Collection</button>
          </div>
          <div className="card">
            <img
              src="http://annimexweb.com/items/belle/assets/images/autoparts/categories-img8.jpg"
              alt="car parts"
            />

            <h6>ENGINE & DRIVETRAIN</h6>
            <ul>
              <li>Catalytic Converters</li>
              <li>Exhaust Systems</li>
              <li>Fuel Systems</li>
              <li>Heating, Air Conditioning</li>
              <li>Radiators, Fans, Cooling Systems</li>
            </ul>
            <button className="section-4-btn">View Collection</button>
          </div>
        </div>
      </div>
      <div className="parallax">
        <div className="parallax-layer"></div>
        <div className="inner-parallax">
          <h4>
            OUTSTANDING SELECTION, SERVICE<br></br>AND DELIVERY TO OUR CUSTOMERS
            IS<br></br> OUR TOP PRIORITY
          </h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random
            <br></br> text. It has roots in a piece of classical.
          </p>
          <button className="parallax-btn">CONTACT US NOW</button>
        </div>
      </div>
      <div className="section-5 ">
        <h4 className="sec-5-header">HOT NEW RELEASES</h4>
        <div className="section-5-main flex aic">
          <div className="sec-5-text-img flex pr">
            <div className="sec-5-imgs-1"></div>
            <div className="sec-5-logos flex abs">
              <img src={searchlogo} alt="magnifier" />
              <img src={favoritelogo} alt="favorite" />
              <img src={shufflelogo} alt="shuffle" />
            </div>
            <button className="sec-5-btn abs">ADD TO CART</button>
            <p className="sec-5-p-z">
              8 Tons Powerful Car Auto Tow Rope Trailer Rope
            </p>
            <span>$79.43</span>
          </div>
          <div className="sec-5-text-img flex pr">
            <div className="sec-5-imgs-2"></div>
            <div className="sec-5-logos flex abs">
              <img src={searchlogo} alt="magnifier" />
              <img src={favoritelogo} alt="favorite" />
              <img src={shufflelogo} alt="shuffle" />
            </div>
            <button className="sec-5-btn abs">ADD TO CART</button>
            <p className="sec-5-p-z">
              Air Pressure Gauge Heavy Duty Best For Car
            </p>
            <span>$26.48</span>
          </div>
          <div className="sec-5-text-img flex pr">
            <div className="sec-5-imgs-3"></div>
            <div className="sec-5-logos flex abs">
              <img src={searchlogo} alt="magnifier" />
              <img src={favoritelogo} alt="favorite" />
              <img src={shufflelogo} alt="shuffle" />
            </div>
            <button className="sec-5-btn abs">ADD TO CART</button>
            <p className="sec-5-p-z">
              Air Pump MTB Motorcycle Car Basketball Bike
            </p>
            <span>$79.43</span>
          </div>
          <div className="sec-5-text-img flex pr">
            <div className="sec-5-imgs-4"></div>
            <div className="sec-5-logos flex abs">
              <img
                className="sec-5-logo-img"
                src={searchlogo}
                alt="magnifier"
              />
              <img
                className="sec-5-logo-img"
                src={favoritelogo}
                alt="favorite"
              />
              <img className="sec-5-logo-img" src={shufflelogo} alt="shuffle" />
            </div>
            <button className="sec-5-btn abs">ADD TO CART</button>
            <p className="sec-5-p-z">Honeywell Move Pure Car Air Purifier</p>
            <span>$105.90</span>
          </div>
        </div>
      </div>
      <div className="section-6">
        <div className="sec-6-carousel flex aic">
          <button
            className="sec-6-carousel-btn-prev"
            onClick={() =>
              setIndexText(indexText - 1 < 0 ? text.length - 1 : indexText - 1)
            }
          >
            &#60;
          </button>
          <div className="sec-6-text-container">
            <h4>CUSTOMERS REVIEWS</h4>
            <p className="sec-6-p">{text[indexText]}</p>
            <span>HAPPY CUSTOMER</span>
          </div>
          <button
            className="sec-6-carousel-btn-next"
            onClick={() =>
              setIndexText(indexText + 1 >= text.length ? 0 : indexText + 1)
            }
          >
            &#62;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
