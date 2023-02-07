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

const Main = () => {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];
  const [index, setIndex] = useState(0);

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
        <div className="carousel">
          <button
            className="carousel-btn-prev"
            onClick={() => setIndex(index - 1)}
          >
            &#60;
          </button>
          <div>
            <img className="carousel-img" src={images[index]} alt="slide" />
          </div>
          <button
            className="carousel-btn-next"
            onClick={() => setIndex(index + 1)}
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
      <div className="bnla">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum
          itaque numquam. Rem porro perferendis numquam esse id nulla facere
          nostrum, dolorum dolore exercitationem error molestiae eos tempora.
          Optio, omnis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Soluta facere assumenda minus dignissimos ad amet dolores
          incidunt impedit mollitia repudiandae veritatis ipsa earum voluptas,
          consectetur praesentium blanditiis animi ea qui? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Laborum vitae aliquam ea eveniet
          rem hic aperiam laboriosam soluta, est atque quisquam fuga deserunt?
          A, aliquam. Asperiores illo suscipit cupiditate inventore. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Esse eum itaque numquam.
          Rem porro perferendis numquam esse id nulla facere nostrum, dolorum
          dolore exercitationem error molestiae eos tempora. Optio, omnis!Lorem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse eum itaque numquam. Rem porro
          perferendis numquam esse id nulla facere nostrum, dolorum dolore
          exercitationem error molestiae eos tempora. Optio, omnis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          assumenda minus dignissimos ad amet dolores incidunt impedit mollitia
          repudiandae veritatis ipsa earum voluptas, consectetur praesentium
          blanditiis animi ea qui? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum vitae aliquam ea eveniet rem hic aperiam
          laboriosam soluta, est atque quisquam fuga deserunt? A, aliquam.
          Asperiores illo suscipit cupiditate inventore.
        </p>
      </div>
    </div>
  );
};

export default Main;
